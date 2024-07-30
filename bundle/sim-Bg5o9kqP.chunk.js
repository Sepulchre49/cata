import{l as t,o as e,q as a,s,t as o,U as n,a1 as l,u as r,a6 as i,G as p,x as c,K as d}from"./preset_utils-BOrpehHr.chunk.js";import{R as u}from"./suggest_reforges_action-C8jDlFca.chunk.js";import{a3 as m,a4 as h,a5 as g,a6 as I,G as S,bk as f,bl as v,bp as O,bn as y,ab as b,ae as P,aG as T,ac as C,ad as A,a as G,ah as k,ap as H,aH as w,ag as M,ai as R,aj as E,ak as L,al as D,an as x,S as F,F as j,R as B}from"./detailed_results-BnSf1ELV.chunk.js";import{A as U,M as W,O as q,T as V,a as _}from"./inputs-C__DY29M.chunk.js";const z=t({fieldName:"honorAmongThievesCritRate",label:"Honor of Thieves Crit Rate",labelTooltip:"Number of crits other group members generate within 100 seconds",showWhen:t=>t.getTalents().honorAmongThieves>0}),K={prepullActions:[{action:{activateAura:{auraId:{spellId:1784}}},doAtValue:{const:{val:"-2s"}}},{action:{activateAura:{auraId:{spellId:73651}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{spellId:14183}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:5171}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:1943}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}}]}},castSpell:{spellId:{spellId:1943}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:1943}}},rhs:{const:{val:"6"}}}}]}},castSpell:{spellId:{spellId:2098}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:73651}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}}]}},castSpell:{spellId:{spellId:73651}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:5171}}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"8"}}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:5171}}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"30"}}}}]}}]}},castSpell:{spellId:{spellId:5171}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:2098}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:89775}}}}},{not:{val:{auraIsActive:{auraId:{spellId:51713}}}}},{not:{val:{auraIsActive:{auraId:{spellId:1784}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"80"}}}}]}}]}}]}},castSpell:{spellId:{spellId:16511}}}},{action:{condition:{and:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:91023}}},{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:8676}}}]}},castSpell:{spellId:{spellId:36554}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},{not:{val:{auraIsActive:{auraId:{spellId:1784}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:91023}}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:51713}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:91023}}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},{not:{val:{auraIsActive:{auraId:{spellId:51713}}}}},{not:{val:{auraIsActive:{auraId:{spellId:1784}}}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:14183}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:1943}}},rhs:{const:{val:"6"}}}},waitUntil:{condition:{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"75"}}}}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"95"}}}}]}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:51713}}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:8676}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"95"}}}}]}}]}},castSpell:{spellId:{spellId:53}}}},{action:{condition:{not:{val:{spellIsReady:{spellId:{spellId:1856}}}}},castSpell:{spellId:{spellId:14185}}}}]},N=e("P1 Sub",{items:[{id:65241,enchant:4209,gems:[68778,52220],reforging:145},{id:69880,randomSuffix:-135,reforging:146},{id:65243,enchant:4204,gems:[52220],reforging:146},{id:69884,randomSuffix:-135,enchant:1099,reforging:146},{id:65239,enchant:4102,gems:[52212,52220]},{id:65050,enchant:4258,gems:[0],reforging:167},{id:65240,enchant:3222,gems:[52212,0],reforging:139},{id:60231,gems:[52220,52212,52212],reforging:167},{id:65381,randomSuffix:-200,enchant:4126,gems:[52212,52220],reforging:144},{id:65144,enchant:4105,gems:[52212],reforging:168},{id:65367,randomSuffix:-135,reforging:146},{id:65082,reforging:145},{id:65140},{id:65026},{id:65081,enchant:4099,reforging:167},{id:68600,enchant:4099,reforging:146},{id:65095,reforging:146}]}),J=a("Subtlety",K),Q=s("P1",m.fromMap({[h.StatAgility]:3.7,[h.StatStrength]:1.05,[h.StatAttackPower]:1,[h.StatSpellCrit]:.06,[h.StatSpellHit]:.36,[h.StatMeleeHit]:1.67,[h.StatMeleeCrit]:1.04,[h.StatMeleeHaste]:1.27,[h.StatMastery]:.79,[h.StatExpertise]:1.33},{[g.PseudoStatMainHandDps]:7,[g.PseudoStatOffHandDps]:1})),X={name:"Subtlety",data:I.create({talentsString:"023003-002-0332031321310012321",glyphs:S.create({prime1:f.GlyphOfBackstab,prime2:f.GlyphOfHemorrhage,prime3:f.GlyphOfSliceAndDice,major1:v.GlyphOfTricksOfTheTrade,major2:v.GlyphOfSprint,major3:v.GlyphOfFeint})})},Y=O.create({classOptions:{mhImbue:y.InstantPoison,ohImbue:y.DeadlyPoison,thImbue:y.WoundPoison,applyPoisonsManually:!1,startingOverkillDuration:20,vanishBreakTime:.1},honorAmongThievesCritRate:400}),Z=b.create({defaultPotion:P.PotionOfTheTolvir,prepopPotion:P.PotionOfTheTolvir,defaultConjured:T.ConjuredRogueThistleTea,flask:C.FlaskOfTheWinds,food:A.FoodSkeweredEel}),$={distanceFromTarget:5,duration:240,durationVariation:20},tt=o(F.SpecSubtletyRogue,{cssClass:"subtlety-rogue-sim-ui",cssScheme:G.getCssClass(G.Rogue),knownIssues:["Rotations are not fully optimized, especially for non-standard setups."],epStats:[h.StatAgility,h.StatStrength,h.StatAttackPower,h.StatMeleeHit,h.StatMeleeCrit,h.StatSpellHit,h.StatSpellCrit,h.StatMeleeHaste,h.StatMastery,h.StatExpertise],epPseudoStats:[g.PseudoStatMainHandDps,g.PseudoStatOffHandDps],epReferenceStat:h.StatAttackPower,displayStats:[h.StatHealth,h.StatStamina,h.StatAgility,h.StatStrength,h.StatAttackPower,h.StatMeleeHit,h.StatSpellHit,h.StatMeleeCrit,h.StatSpellCrit,h.StatMeleeHaste,h.StatMastery,h.StatExpertise],defaults:{gear:N.gear,epWeights:Q.epWeights,statCaps:(new m).withStat(h.StatExpertise,26*k),softCapBreakpoints:(()=>{const t={stat:h.StatSpellHit,breakpoints:[17*H],capType:w.TypeSoftCap,postCapEPs:[0]};return[{stat:h.StatMeleeHit,breakpoints:[8*M,27*M],capType:w.TypeSoftCap,postCapEPs:[.77,0]},t]})(),other:$,consumes:Z,talents:X.data,specOptions:Y,raidBuffs:R.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:E.create({}),individualBuffs:L.create({}),debuffs:D.create({mangle:!0,sunderArmor:!0,shadowAndFlame:!0,earthAndMoon:!0,bloodFrenzy:!0})},playerInputs:{inputs:[U()]},playerIconInputs:[W(),q(),V()],includeBuffDebuffInputs:[n,l,r,i],excludeBuffDebuffInputs:[],otherInputs:{inputs:[_(),z,p,c]},itemSwapSlots:[x.ItemSlotMainHand,x.ItemSlotOffHand],encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[Q],talents:[X],rotations:[J],gear:[N]},autoRotation:t=>{t.sim.encounter.targets.length;return J.rotation.rotation},raidSimPresets:[{spec:F.SpecSubtletyRogue,talents:X.data,specOptions:Y,consumes:Z,defaultFactionRaces:{[j.Unknown]:B.RaceUnknown,[j.Alliance]:B.RaceHuman,[j.Horde]:B.RaceOrc},defaultGear:{[j.Unknown]:{},[j.Alliance]:{1:N.gear},[j.Horde]:{1:N.gear}},otherDefaults:$}]});class et extends d{constructor(t,e){super(t,e,tt),e.sim.waitForInit().then((()=>{new u(this)})),this.player.changeEmitter.on((t=>{const e=this.player.getSpecOptions();if(!e.classOptions.applyPoisonsManually){const t=this.player.getGear().getEquippedItem(x.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(x.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===t||void 0===a)return;t<=a?(e.classOptions.mhImbue=y.DeadlyPoison,e.classOptions.ohImbue=y.InstantPoison):(e.classOptions.mhImbue=y.InstantPoison,e.classOptions.ohImbue=y.DeadlyPoison)}this.player.setSpecOptions(t,e)})),this.sim.encounter.changeEmitter.on((t=>{const e=this.player.getSpecOptions();if(!e.classOptions.applyPoisonsManually){const t=this.player.getGear().getEquippedItem(x.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(x.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===t||void 0===a)return;t<=a?(e.classOptions.mhImbue=y.DeadlyPoison,e.classOptions.ohImbue=y.InstantPoison):(e.classOptions.mhImbue=y.InstantPoison,e.classOptions.ohImbue=y.DeadlyPoison)}this.player.setSpecOptions(t,e)}))}}export{et as S};