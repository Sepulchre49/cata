import{o as e,q as a,s,t,R as l,a6 as n,ah as i,ab as o,U as r,V as p,W as d,ai as c,X as I,x as m,Z as g,J as u,T as h,ac as S,K as f}from"./preset_utils-BOrpehHr.chunk.js";import{R as O}from"./suggest_reforges_action-C8jDlFca.chunk.js";import{a3 as k,a4 as y,a6 as v,G as P,bE as T,bF as w,bG as A,bM as C,bI as R,ab as b,ae as H,ac as D,ad as F,af as G,ai as M,ak as W,al as x,b as L,a as B,ap as j,aj as V,an as E,S as U,F as q,R as _}from"./detailed_results-BnSf1ELV.chunk.js";import{W as z,P as K,D as Z}from"./presets-BOznvrtU.chunk.js";const J={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:74434}}},doAtValue:{const:{val:"-8.0s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:29722}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:6353}}},doAtValue:{const:{val:"-0.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:2825,tag:-1}}},{spellCanCast:{spellId:{spellId:77801}}}]}},castSpell:{spellId:{spellId:77801}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:74241}}},{auraIsActive:{auraId:{spellId:89091}}},{auraIsActive:{auraId:{spellId:75170}}}]}},sequence:{name:"Doomguard",actions:[{castSpell:{spellId:{spellId:18540}}}]}}},{action:{condition:{spellIsReady:{spellId:{spellId:74434}}},castSpell:{spellId:{spellId:74434}}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:74434}}},{auraIsActive:{auraId:{spellId:47221}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:18120}}},rhs:{const:{val:"3s"}}}}]}},castSpell:{spellId:{spellId:6353}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:603}}},rhs:{dotTickFrequency:{spellId:{spellId:603}}}}},castSpell:{spellId:{spellId:603}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:348,tag:1}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:348}}},rhs:{dotTickFrequency:{spellId:{spellId:348,tag:1}}}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}}]}},{and:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:2825,tag:-1}}},rhs:{const:{val:"2s"}}}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:348,tag:1}}},rhs:{const:{val:"12s"}}}},{auraIsActive:{auraId:{spellId:2825,tag:-1}}}]}}]}},castSpell:{spellId:{spellId:348}}}},{action:{condition:{spellCanCast:{spellId:{spellId:17962}}},castSpell:{spellId:{spellId:17962}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:172}}},rhs:{dotTickFrequency:{spellId:{spellId:172}}}}},castSpell:{spellId:{spellId:172}}}},{action:{condition:{spellIsReady:{spellId:{spellId:50796}}},castSpell:{spellId:{spellId:50796}}}},{action:{condition:{spellCanCast:{spellId:{spellId:47897}}},castSpell:{spellId:{spellId:47897}}}},{action:{condition:{and:{vals:[{isExecutePhase:{threshold:"E20"}},{spellCanCast:{spellId:{spellId:17877}}}]}},castSpell:{spellId:{spellId:17877}}}},{action:{castSpell:{spellId:{spellId:29722}}}},{action:{castSpell:{spellId:{spellId:1454}}}}]},X={items:[{id:60237,enchant:4207,gems:[68780,52217],reforging:144},{id:69882,randomSuffix:-129,reforging:145},{id:65263,enchant:4200,gems:[52207]},{id:60232,enchant:4115,gems:[52207],reforging:165},{id:65262,enchant:4102,gems:[52207,52217],reforging:144},{id:65138,enchant:4257,gems:[0],reforging:165},{id:65259,enchant:4107,gems:[52207,0],reforging:144},{id:65034,gems:[52207,52207],reforging:144},{id:65261,enchant:4112,gems:[52208,52207]},{id:65069,enchant:4104,gems:[52207],reforging:165},{id:65123,reforging:165},{id:65373,randomSuffix:-114,reforging:167},{id:65053,reforging:145},{id:62047,reforging:165},{id:68132,randomSuffix:-114,enchant:4097,reforging:167},{id:65133,enchant:4091},{id:59460,reforging:167}]},N={items:[{id:51231,enchant:3820,gems:[41285,40133]},{id:50658,gems:[40153]},{id:51234,enchant:3810,gems:[40152]},{id:50628,enchant:3722,gems:[40152]},{id:51233,enchant:3832,gems:[40113,40155]},{id:50651,enchant:2332,gems:[40155,0]},{id:51230,enchant:3604,gems:[40113,0]},{id:50613,gems:[40133,40113,40113]},{id:50694,enchant:3719,gems:[40113,40113,40113]},{id:50699,enchant:4223,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40155]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40153]}]},Q=e("Pre-raid Preset",{items:[]}),Y=e("P1 Preset",X),$=e("P4 Wrath",N,{tooltip:"This gear preset is inspired from Zephan's Affliction guide: https://www.warcrafttavern.com/wotlk/guides/pve-affliction-warlock/"}),ee=a("Destro",J),ae=s("P1",k.fromMap({[y.StatIntellect]:1.25,[y.StatSpellPower]:1,[y.StatSpellHit]:.87,[y.StatSpellCrit]:.48,[y.StatSpellHaste]:.55,[y.StatMastery]:.47})),se={name:"Destruction",data:v.create({talentsString:"003-03202-3320202312201312211",glyphs:P.create({prime1:T.GlyphOfConflagrate,prime2:T.GlyphOfImmolate,prime3:T.GlyphOfImp,major1:w.GlyphOfLifeTap,major2:w.GlyphOfSoulLink,major3:w.GlyphOfHealthstone,minor1:A.GlyphOfDrainSoul,minor2:A.GlyphOfRitualOfSouls,minor3:A.GlyphOfUnendingBreath})})},te=C.create({classOptions:{summon:R.Imp,detonateSeed:!1}}),le=b.create({defaultPotion:H.VolcanicPotion,prepopPotion:H.VolcanicPotion,flask:D.FlaskOfTheDraconicMind,food:F.FoodSeafoodFeast,tinkerHands:G.TinkerHandsSynapseSprings,explosiveBigDaddy:!1}),ne=M.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),ie=W.create({vampiricTouch:!0,darkIntent:!0}),oe=x.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!1,demoralizingShout:!0,frostFever:!0}),re={distanceFromTarget:25,profession1:L.Engineering,profession2:L.Tailoring,channelClipDelay:150,duration:180,durationVariation:30,darkIntentUptime:90},pe=z,de=t(U.SpecDestructionWarlock,{cssClass:"destruction-warlock-sim-ui",cssScheme:B.getCssClass(B.Warlock),knownIssues:[],epStats:[y.StatIntellect,y.StatSpellPower,y.StatSpellHit,y.StatSpellCrit,y.StatSpellHaste,y.StatMastery],epReferenceStat:y.StatSpellPower,displayStats:[y.StatHealth,y.StatMana,y.StatStamina,y.StatIntellect,y.StatSpellPower,y.StatSpellHit,y.StatSpellCrit,y.StatSpellHaste,y.StatMastery,y.StatMP5],defaults:{gear:Y.gear,epWeights:ae.epWeights,statCaps:(new k).withStat(y.StatSpellHit,17*j),consumes:le,talents:se.data,specOptions:te,raidBuffs:ne,partyBuffs:V.create({}),individualBuffs:ie,debuffs:oe,other:re},playerIconInputs:[K()],includeBuffDebuffInputs:[l,n,i,o,r,p,d,c,I],excludeBuffDebuffInputs:[],petConsumeInputs:[],otherInputs:{inputs:[Z(),m,g,u,h,S]},itemSwapSlots:[E.ItemSlotMainHand,E.ItemSlotOffHand,E.ItemSlotRanged],encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[ae],talents:[se],rotations:[ee],gear:[Q,Y,$]},autoRotation:e=>ee.rotation.rotation,raidSimPresets:[{spec:U.SpecDestructionWarlock,talents:se.data,specOptions:te,consumes:le,defaultFactionRaces:{[q.Unknown]:_.RaceUnknown,[q.Alliance]:_.RaceHuman,[q.Horde]:_.RaceOrc},defaultGear:{[q.Unknown]:{},[q.Alliance]:{1:Q.gear,2:Y.gear,3:$.gear},[q.Horde]:{1:Q.gear,2:Y.gear,3:$.gear}},otherDefaults:re}]});class ce extends f{constructor(e,a){super(e,a,de),a.sim.waitForInit().then((()=>{new O(this,{statSelectionPresets:pe})}))}}export{ce as D};
