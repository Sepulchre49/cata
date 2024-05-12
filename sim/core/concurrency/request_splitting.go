package concurrency

import (
	"github.com/wowsims/cata/sim/core/proto"
	googleProto "google.golang.org/protobuf/proto"
)

// Will split into min(splitCount, iterations) requests.
// 2nd return value will contain the number of splits.
func SplitRequestForConcurrency(request *proto.RaidSimRequest, splitCount int32) *proto.RaidSimRequestSplitResult {
	res := &proto.RaidSimRequestSplitResult{}

	if splitCount <= 0 {
		res.ErrorResult = "Split count can't be 0 or negative!"
		return res
	}

	if request.SimOptions.Iterations <= 0 {
		res.ErrorResult = "Iterations can't be 0 or negative!"
		return res
	}

	splitCount = min(splitCount, request.SimOptions.Iterations)

	split := make([]*proto.RaidSimRequest, splitCount)
	iterPerSplit := request.SimOptions.Iterations / splitCount

	split[0] = googleProto.Clone(request).(*proto.RaidSimRequest)
	split[0].SimOptions.Iterations = iterPerSplit + request.SimOptions.Iterations%splitCount

	// Sims increment their seed each iteration. Offset starting seed of each split to emulate that.
	nextStartSeed := split[0].SimOptions.RandomSeed + int64(split[0].SimOptions.Iterations)

	for i := 1; i < int(splitCount); i++ {
		split[i] = googleProto.Clone(request).(*proto.RaidSimRequest)
		split[i].SimOptions.Iterations = iterPerSplit
		split[i].SimOptions.DebugFirstIteration = false // No logs
		split[i].SimOptions.RandomSeed = nextStartSeed
		nextStartSeed += int64(split[i].SimOptions.Iterations)
	}

	res.SplitsDone = splitCount
	res.Requests = split
	return res
}
