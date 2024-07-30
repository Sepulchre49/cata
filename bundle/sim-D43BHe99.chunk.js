import{o as e,s as t,t as a,x as s,T as n,K as i}from"./preset_utils-BOrpehHr.chunk.js";import{a3 as d,a4 as c,a6 as r,aL as m,U as o,ab as g,ae as h,ac as l,ad as u,ai as S,ak as p,aj as f,al as P,a as k,aC as F,S as R,F as T,R as w}from"./detailed_results-BnSf1ELV.chunk.js";import{S as M}from"./inputs-DJygK-p_.chunk.js";const b={items:[{id:44007,enchant:3819,gems:[41401,40017]},{id:40071},{id:39719,enchant:3809,gems:[39998]},{id:40723,enchant:3859},{id:44002,enchant:3832,gems:[39998,40026]},{id:44008,enchant:2332,gems:[39998,0]},{id:40460,enchant:3246,gems:[40017,0]},{id:40561,enchant:3601,gems:[39998]},{id:40379,enchant:3719,gems:[39998,40017]},{id:40558,enchant:4223},{id:40719},{id:40375},{id:37111},{id:40432},{id:40395,enchant:3834},{id:39766},{id:40342}]},O={items:[{id:46184,enchant:3819,gems:[41401,39998]},{id:45243,gems:[39998]},{id:46187,enchant:3809,gems:[39998]},{id:45618,enchant:3831,gems:[39998]},{id:45519,enchant:3832,gems:[40017,39998,40026]},{id:45446,enchant:2332,gems:[39998,0]},{id:46183,enchant:3246,gems:[39998,0]},{id:45616,gems:[39998,39998,39998]},{id:46185,enchant:3719,gems:[40026,39998]},{id:45135,enchant:4223,gems:[39998,40017]},{id:45495,gems:[40017]},{id:45946,gems:[40017]},{id:45703},{id:45535},{id:46017,enchant:3834},{id:45271},{id:40342}]},y={items:[{id:48134,enchant:3819,gems:[41401,40133]},{id:45243,gems:[40155]},{id:48137,enchant:3809,gems:[40155]},{id:46977,enchant:3859,gems:[40155]},{id:46993,enchant:3832,gems:[40133,40113,40155]},{id:47066,enchant:2332,gems:[40155,0]},{id:48133,enchant:3246,gems:[40113,0]},{id:47145,gems:[40155,40113,40113]},{id:48135,enchant:3719,gems:[40155,40155]},{id:47097,enchant:4223,gems:[40155,40155]},{id:45495,gems:[40113]},{id:47224,gems:[40155]},{id:47059},{id:45535},{id:47206,enchant:3834},{id:47958,gems:[40155]},{id:40342}]},I={items:[{id:51302,enchant:3819,gems:[41401,40113]},{id:50609,gems:[40113]},{id:51304,enchant:3809,gems:[40113]},{id:50668,enchant:3859,gems:[40113]},{id:50717,enchant:3832,gems:[40113,40113,40113]},{id:50630,enchant:2332,gems:[40113,0]},{id:51301,enchant:3246,gems:[40113,0]},{id:50705,gems:[40155,40113,40113]},{id:51303,enchant:3719,gems:[40113,40155]},{id:50699,enchant:4223,gems:[40133,40113]},{id:50400,gems:[40113]},{id:50636,gems:[40155]},{id:47432},{id:50366},{id:46017,enchant:3834},{id:50635},{id:50454}]},C=e("PreRaid",{items:[{id:37149,enchant:3819,gems:[41401,40051]},{id:42339,gems:[40026]},{id:37673,enchant:3809,gems:[39998]},{id:41610,enchant:3831},{id:42102,enchant:3832},{id:37361,enchant:2332,gems:[0]},{id:42113,enchant:3246,gems:[0]},{id:37643,enchant:3601,gems:[39998]},{id:37791,enchant:3719},{id:44202,enchant:3232,gems:[39998]},{id:37694},{id:37192},{id:37111},{id:37657},{id:37169,enchant:3834},{id:40699},{id:33508}]}),B=e("P1 Preset",b),H=e("P2 Preset",O),A=e("P3 Preset",y),W=e("P4 Preset",I),x=t("P1",d.fromMap({[c.StatIntellect]:.38,[c.StatSpirit]:.34,[c.StatSpellPower]:1,[c.StatSpellCrit]:.69,[c.StatSpellHaste]:.77,[c.StatMP5]:0})),D={name:"Celestial Focus",data:r.create({})},j={name:"Thicc Resto",data:r.create({})},v=m.create({classOptions:{innervateTarget:o.create()}}),U=g.create({defaultPotion:h.MythicalManaPotion,flask:l.FlaskOfTheFrostWyrm,food:u.FoodFishFeast}),E=S.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),z=p.create({vampiricTouch:!0}),K=f.create({}),_=P.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!0,demoralizingShout:!0,frostFever:!0}),G=a(R.SpecRestorationDruid,{cssClass:"restoration-druid-sim-ui",cssScheme:k.getCssClass(k.Druid),knownIssues:[],epStats:[c.StatIntellect,c.StatSpirit,c.StatSpellPower,c.StatSpellCrit,c.StatSpellHaste,c.StatMP5,c.StatMastery],epReferenceStat:c.StatSpellPower,displayStats:[c.StatHealth,c.StatMana,c.StatStamina,c.StatIntellect,c.StatSpirit,c.StatSpellPower,c.StatSpellCrit,c.StatSpellHaste,c.StatMP5,c.StatMastery],defaults:{gear:B.gear,epWeights:x.epWeights,consumes:U,talents:D.data,specOptions:v,raidBuffs:E,partyBuffs:K,individualBuffs:z,debuffs:_,other:{distanceFromTarget:18}},playerIconInputs:[M()],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[s,n]},encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[x],talents:[D,j],rotations:[],gear:[C,B,H,A,W]},autoRotation:e=>F.create(),raidSimPresets:[{spec:R.SpecRestorationDruid,talents:D.data,specOptions:v,consumes:U,defaultFactionRaces:{[T.Unknown]:w.RaceUnknown,[T.Alliance]:w.RaceNightElf,[T.Horde]:w.RaceTauren},defaultGear:{[T.Unknown]:{},[T.Alliance]:{1:B.gear,2:H.gear,3:A.gear,4:W.gear},[T.Horde]:{1:B.gear,2:H.gear,3:A.gear,4:W.gear}}}]});class L extends i{constructor(e,t){super(e,t,G)}}export{L as R};