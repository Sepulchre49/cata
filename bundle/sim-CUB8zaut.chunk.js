import{o as e,q as t,s,t as l,R as a,ab as n,U as i,V as p,W as o,X as d,x as c,T as r,ac as m,K as h}from"./preset_utils-BOrpehHr.chunk.js";import{a3 as I,a4 as g,a6 as u,bd as S,bc as v,ab as T,ac as O,ad as f,ae as P,ai as y,ak as A,al as x,b as C,a as L,aj as R,S as b,F as k,R as w}from"./detailed_results-BnSf1ELV.chunk.js";import{A as G}from"./inputs-CcIZ9E0X.chunk.js";const D={type:"TypeAPL",priorityList:[{action:{castSpell:{spellId:{spellId:34433}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"0.75s"}}}},castSpell:{spellId:{spellId:48300}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target",index:2},spellId:{spellId:48125}}},rhs:{const:{val:"3s"}}}},{dotIsActive:{targetUnit:{type:"Target",index:2},spellId:{spellId:48125}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}}]}},channelSpell:{spellId:{spellId:48156},target:{type:"Target",index:2},interruptIf:{const:{val:"true"}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target",index:1},spellId:{spellId:48125}}},rhs:{const:{val:"3s"}}}},{dotIsActive:{targetUnit:{type:"Target",index:1},spellId:{spellId:48125}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}}]}},channelSpell:{spellId:{spellId:48156},target:{type:"Target",index:1},interruptIf:{const:{val:"true"}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target"},spellId:{spellId:48125}}},rhs:{const:{val:"5s"}}}},{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:48125}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}}]}},channelSpell:{spellId:{spellId:48156},target:{type:"Target"},interruptIf:{const:{val:"true"}}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}},multidot:{spellId:{spellId:48160},maxDots:4,maxOverlap:{spellCastTime:{spellId:{spellId:48160}}}}}},{action:{multidot:{spellId:{spellId:48300},maxDots:1,maxOverlap:{}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"12s"}}}},multidot:{spellId:{spellId:48125},maxDots:3,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"2"}}}},channelSpell:{spellId:{spellId:53023},interruptIf:{const:{val:"true"}}}}},{action:{channelSpell:{spellId:{spellId:48156},interruptIf:{const:{val:"true"}}}}}]},F={type:"TypeAPL",priorityList:[{action:{castSpell:{spellId:{spellId:34433}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGe",lhs:{numberTargets:{}},rhs:{const:{val:"7"}}}},channelSpell:{spellId:{spellId:53023},interruptIf:{const:{val:"true"}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"0.75s"}}}},castSpell:{spellId:{spellId:48300}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}},multidot:{spellId:{spellId:48160},maxDots:10,maxOverlap:{spellCastTime:{spellId:{spellId:48160}}}}}},{action:{multidot:{spellId:{spellId:48300},maxDots:1,maxOverlap:{}}}},{action:{channelSpell:{spellId:{spellId:53023},interruptIf:{const:{val:"true"}}}}}]},H={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:48160}}},doAtValue:{const:{val:"-0.97s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:34433}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"1s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"61s"}}}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"1.75s"}}}},castSpell:{spellId:{spellId:48300}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48125}}}}},{or:{vals:[{and:{vals:[{cmp:{op:"OpEq",lhs:{const:{val:"5"}},rhs:{auraNumStacks:{auraId:{spellId:15258}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"75s"}}}}]}},{and:{vals:[{cmp:{op:"OpLe",lhs:{const:{val:"3"}},rhs:{auraNumStacks:{auraId:{spellId:15258}}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"75s"}}}}]}}]}}]}},castSpell:{spellId:{spellId:48125}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48160}}},rhs:{spellCastTime:{spellId:{spellId:48160}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}}]}},castSpell:{spellId:{spellId:48160}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:48300}}}}},castSpell:{spellId:{spellId:48300}}}},{hide:!0,action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:48127}}},rhs:{const:{val:"750ms"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:57669}}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:48127}}}},{hide:!0,action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:48127}}},rhs:{const:{val:"750ms"}}}},castSpell:{spellId:{spellId:48127}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:15258}}},rhs:{const:{val:"5"}}}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14751}}},{castSpell:{spellId:{spellId:48156}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48300}}},rhs:{const:{val:"200ms"}}}}]}},wait:{duration:{dotRemainingTime:{spellId:{spellId:48300}}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:48160}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:48160}}},rhs:{channelClipDelay:{}}}}}},{dotIsActive:{spellId:{spellId:48160}}},{spellIsChanneling:{spellId:{spellId:48156}}}]}},wait:{duration:{math:{op:"OpSub",lhs:{dotRemainingTime:{spellId:{spellId:48160}}},rhs:{spellCastTime:{spellId:{spellId:48160}}}}}}}},{action:{channelSpell:{spellId:{spellId:48156},interruptIf:{cmp:{op:"OpLe",lhs:{gcdTimeToReady:{}},rhs:{channelClipDelay:{}}}}}}},{action:{castSpell:{spellId:{spellId:47585}}}}]},U={items:[{id:40562,enchant:3820,gems:[41285,39998]},{id:44661,gems:[40026]},{id:40459,enchant:3810,gems:[39998]},{id:44005,enchant:3722,gems:[40026]},{id:44002,enchant:1144,gems:[39998,39998]},{id:44008,enchant:2332,gems:[39998,0]},{id:40454,enchant:3604,gems:[40049,0]},{id:40561,gems:[39998]},{id:40560,enchant:3719},{id:40558,enchant:4223},{id:40719},{id:40399},{id:40255},{id:40432},{id:40395,enchant:3834},{id:40273},{id:39712}]},M={items:[{id:46172,enchant:3820,gems:[41285,45883]},{id:45243,gems:[39998]},{id:46165,enchant:3810,gems:[39998]},{id:45242,enchant:3722,gems:[40049]},{id:46168,enchant:1144,gems:[39998,39998]},{id:45446,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45619,enchant:3601,gems:[39998,39998,39998]},{id:46170,enchant:3719,gems:[39998,40049]},{id:45135,enchant:4223,gems:[39998,40049]},{id:45495,gems:[40026]},{id:46046,gems:[39998]},{id:45518},{id:45466},{id:45620,enchant:3834,gems:[40026]},{id:45617},{id:45294,gems:[39998]}]},E={items:[{id:48088,enchant:3820,gems:[41285,40133]},{id:47468,gems:[40155]},{id:48091,enchant:3810,gems:[40155]},{id:47551,enchant:3722,gems:[40113]},{id:48090,enchant:1144,gems:[40113,40133]},{id:47467,enchant:2332,gems:[40155,0]},{id:45665,enchant:3604,gems:[40113,40113,0]},{id:47419,enchant:3601,gems:[40133,40113,40113]},{id:48089,enchant:3719,gems:[40113,40133]},{id:47454,enchant:4223,gems:[40133,40113]},{id:47489,gems:[40155]},{id:45495,gems:[40113]},{id:45518},{id:47477},{id:47483,enchant:3834},{id:47437},{id:47995}]},B={items:[{id:51255,enchant:3820,gems:[41285,40133]},{id:50724,gems:[40113]},{id:51257,enchant:3810,gems:[40155]},{id:50628,enchant:3722,gems:[40155]},{id:51259,enchant:1144,gems:[40113,40155]},{id:50651,enchant:2332,gems:[40155,0]},{id:51256,enchant:3604,gems:[40113,0]},{id:50613,gems:[40133,40113,40113]},{id:50694,enchant:3719,gems:[40113,40133,40155]},{id:50699,enchant:4223,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40155]},{id:50348},{id:50365},{id:50734,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40155]}]},W=e("Preraid Preset",{items:[{id:42553,enchant:3820,gems:[41285,40049]},{id:40680},{id:34210,enchant:3810,gems:[39998,40026]},{id:41610,enchant:3722},{id:43792,enchant:1144,gems:[39998,40051]},{id:37361,enchant:2332,gems:[0]},{id:39530,enchant:3604,gems:[40049,0]},{id:40696,gems:[40049,39998]},{id:37854,enchant:3719},{id:44202,enchant:3826,gems:[40026]},{id:40585},{id:37694},{id:37835},{id:37873},{id:41384,enchant:3834},{id:40698},{id:37177}]}),V=e("P1 Preset",U),j=e("P2 Preset",M),q=e("P3 Preset",E),N=e("P4 Preset",B),z=t("Default",H),K=t("AOE (2 to 4 targets)",D),_=t("AOE (4+ targets)",F),X=s("P1",I.fromMap({[g.StatIntellect]:.11,[g.StatSpirit]:.47,[g.StatSpellPower]:1,[g.StatSpellHit]:.87,[g.StatSpellCrit]:.74,[g.StatSpellHaste]:1.65,[g.StatMP5]:0})),Z={name:"Standard",data:u.create({})},J={name:"Enlightenment",data:u.create({})},Q=S.create({classOptions:{armor:v.InnerFire}}),Y=T.create({flask:O.FlaskOfTheFrostWyrm,food:f.FoodFishFeast,defaultPotion:P.VolcanicPotion,prepopPotion:P.VolcanicPotion}),$=y.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),ee=A.create({vampiricTouch:!0}),te=x.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!0,demoralizingShout:!0,frostFever:!0}),se={channelClipDelay:100,profession1:C.Engineering,profession2:C.Tailoring},le=l(b.SpecHolyPriest,{cssClass:"holy-priest-sim-ui",cssScheme:L.getCssClass(L.Priest),knownIssues:[],epStats:[g.StatIntellect,g.StatSpirit,g.StatSpellPower,g.StatSpellHit,g.StatSpellCrit,g.StatSpellHaste,g.StatMP5,g.StatMastery],epReferenceStat:g.StatSpellPower,displayStats:[g.StatHealth,g.StatMana,g.StatStamina,g.StatIntellect,g.StatSpirit,g.StatSpellPower,g.StatSpellHit,g.StatSpellCrit,g.StatSpellHaste,g.StatMP5,g.StatMastery],defaults:{gear:N.gear,epWeights:X.epWeights,consumes:Y,talents:Z.data,specOptions:Q,raidBuffs:$,partyBuffs:R.create({}),individualBuffs:ee,debuffs:te,other:se},playerIconInputs:[G()],includeBuffDebuffInputs:[a,n,i,p,o,d],excludeBuffDebuffInputs:[],otherInputs:{inputs:[c,r,m]},encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[X],talents:[Z,J],rotations:[z,K,_],gear:[W,V,j,q,N]},autoRotation:e=>{const t=e.sim.encounter.targets.length;return t>4?_.rotation.rotation:t>1?K.rotation.rotation:z.rotation.rotation},raidSimPresets:[{spec:b.SpecHolyPriest,talents:Z.data,specOptions:Q,consumes:Y,defaultFactionRaces:{[k.Unknown]:w.RaceUnknown,[k.Alliance]:w.RaceDwarf,[k.Horde]:w.RaceUndead},defaultGear:{[k.Unknown]:{},[k.Alliance]:{1:V.gear,2:j.gear,3:q.gear,4:N.gear},[k.Horde]:{1:V.gear,2:j.gear,3:q.gear,4:N.gear}}}]});class ae extends h{constructor(e,t){super(e,t,le)}}export{ae as H};
