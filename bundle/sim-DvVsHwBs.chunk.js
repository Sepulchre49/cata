import{o as t,q as e,s as a,t as s,U as n,a1 as o,u as i,a6 as l,G as r,x as p,K as c}from"./preset_utils-BOrpehHr.chunk.js";import{R as d}from"./suggest_reforges_action-C8jDlFca.chunk.js";import{a3 as u,a4 as m,a5 as h,a6 as I,G as g,bk as S,bl as f,bo as O,bn as y,ab as v,ae as P,aG as b,ac as C,ad as T,a as A,ah as k,ap as H,aH as M,ag as w,ai as G,aj as E,ak as R,al as D,S as x,F,R as j,an as B}from"./detailed_results-BnSf1ELV.chunk.js";import{A as L,M as U,O as q,T as W}from"./inputs-C__DY29M.chunk.js";const _={type:"TypeAPL",priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:5171}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"0"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:1752}}},{castSpell:{spellId:{spellId:5171}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:5171}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:5171}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},{auraIsActive:{auraId:{spellId:84747}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:51690}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:51690}}},rhs:{const:{val:"15"}}}}]}},castSpell:{spellId:{spellId:13750}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{not:{val:{dotIsActive:{spellId:{spellId:1943}}}}},{not:{val:{auraIsActive:{auraId:{spellId:84747}}}}},{not:{val:{auraIsActive:{auraId:{spellId:13877}}}}},{not:{val:{auraIsActive:{auraId:{spellId:13750}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"12"}}}},{not:{val:{auraIsActive:{auraId:{spellId:2825,tag:-1}}}}},{or:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:33876}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:16511}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:57386}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:29859}}}]}}]}},castSpell:{spellId:{spellId:1943}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:2098}}}},{hide:!0,action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:96648}}},rhs:{const:{val:"1.5"}}}},castSpell:{spellId:{spellId:5938}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:84617}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:5171}}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:84617}}}},{hide:!0,action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:84617}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:5171}}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:84617}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"40"}}}}]}},castSpell:{spellId:{spellId:1776}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:1752}}}}]},z=t("P1 Combat",{items:[{id:65241,enchant:4209,gems:[68778,52220],reforging:146},{id:65107,reforging:151},{id:65243,enchant:4204,gems:[52220],reforging:146},{id:69884,randomSuffix:-136,enchant:1099,reforging:151},{id:65239,enchant:4102,gems:[52212,52220],reforging:151},{id:65050,enchant:4258,gems:[0],reforging:146},{id:65240,enchant:4107,gems:[52212,0],reforging:154},{id:60231,gems:[52220,52212,52212],reforging:146},{id:65381,randomSuffix:-202,enchant:4126,gems:[52212,52220]},{id:65144,enchant:4105,gems:[52212],reforging:151},{id:65367,randomSuffix:-136},{id:65082,reforging:146},{id:65026},{id:58181,reforging:139},{id:68130,randomSuffix:-136,enchant:4099,reforging:151},{id:68600,enchant:4099,reforging:146},{id:65095,reforging:146}]}),K=e("Combat",_),V=a("P1",u.fromMap({[m.StatAgility]:2.67,[m.StatStrength]:1.05,[m.StatAttackPower]:1,[m.StatSpellCrit]:.08,[m.StatSpellHit]:.42,[m.StatMeleeHit]:1.63,[m.StatMeleeCrit]:.75,[m.StatMeleeHaste]:1.19,[m.StatMastery]:1.18,[m.StatExpertise]:1.3},{[h.PseudoStatMainHandDps]:3.95,[h.PseudoStatOffHandDps]:1.28})),J={name:"Combat",data:I.create({talentsString:"0322-2332030310230012321-003",glyphs:g.create({prime1:S.GlyphOfAdrenalineRush,prime2:S.GlyphOfSinisterStrike,prime3:S.GlyphOfSliceAndDice,major1:f.GlyphOfBladeFlurry,major2:f.GlyphOfTricksOfTheTrade,major3:f.GlyphOfGouge})})},N=O.create({classOptions:{mhImbue:y.InstantPoison,ohImbue:y.DeadlyPoison,thImbue:y.WoundPoison,applyPoisonsManually:!1,startingOverkillDuration:20,vanishBreakTime:.1}}),Q=v.create({defaultPotion:P.PotionOfTheTolvir,prepopPotion:P.PotionOfTheTolvir,defaultConjured:b.ConjuredRogueThistleTea,flask:C.FlaskOfTheWinds,food:T.FoodSkeweredEel}),X={distanceFromTarget:5,duration:240,durationVariation:20},Y=s(x.SpecCombatRogue,{cssClass:"combat-rogue-sim-ui",cssScheme:A.getCssClass(A.Rogue),knownIssues:["Rotations are not fully optimized, especially for non-standard setups."],epStats:[m.StatAgility,m.StatStrength,m.StatAttackPower,m.StatMeleeHit,m.StatMeleeCrit,m.StatSpellHit,m.StatSpellCrit,m.StatMeleeHaste,m.StatMastery,m.StatExpertise],epPseudoStats:[h.PseudoStatMainHandDps,h.PseudoStatOffHandDps],epReferenceStat:m.StatAttackPower,displayStats:[m.StatHealth,m.StatStamina,m.StatAgility,m.StatStrength,m.StatAttackPower,m.StatMeleeHit,m.StatSpellHit,m.StatMeleeCrit,m.StatSpellCrit,m.StatMeleeHaste,m.StatMastery,m.StatExpertise],defaults:{gear:z.gear,epWeights:V.epWeights,statCaps:(new u).withStat(m.StatExpertise,26*k),softCapBreakpoints:(()=>{const t={stat:m.StatSpellHit,breakpoints:[17*H],capType:M.TypeSoftCap,postCapEPs:[0]};return[{stat:m.StatMeleeHit,breakpoints:[8*w,27*w],capType:M.TypeSoftCap,postCapEPs:[.86,0]},t]})(),other:X,consumes:Q,talents:J.data,specOptions:N,raidBuffs:G.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:E.create({}),individualBuffs:R.create({}),debuffs:D.create({mangle:!0,sunderArmor:!0,shadowAndFlame:!0,earthAndMoon:!0,bloodFrenzy:!0})},playerInputs:{inputs:[L()]},playerIconInputs:[U(),q(),W()],includeBuffDebuffInputs:[n,o,i,l],excludeBuffDebuffInputs:[],otherInputs:{inputs:[r,p]},encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[V],talents:[J],rotations:[K],gear:[z]},autoRotation:t=>{t.sim.encounter.targets.length;return K.rotation.rotation},raidSimPresets:[{spec:x.SpecCombatRogue,talents:J.data,specOptions:N,consumes:Q,defaultFactionRaces:{[F.Unknown]:j.RaceUnknown,[F.Alliance]:j.RaceHuman,[F.Horde]:j.RaceOrc},defaultGear:{[F.Unknown]:{},[F.Alliance]:{1:z.gear},[F.Horde]:{1:z.gear}},otherDefaults:X}]});class Z extends c{constructor(t,e){super(t,e,Y),e.sim.waitForInit().then((()=>{new d(this)})),this.player.changeEmitter.on((t=>{const e=this.player.getSpecOptions(),a=this.sim.encounter;if(!e.classOptions.applyPoisonsManually){const t=this.player.getGear().getEquippedItem(B.ItemSlotMainHand)?.item.weaponSpeed,s=this.player.getGear().getEquippedItem(B.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===t||void 0===s)return;a.targets.length>3?(e.classOptions.mhImbue=y.InstantPoison,e.classOptions.ohImbue=y.InstantPoison):t<=s?(e.classOptions.mhImbue=y.DeadlyPoison,e.classOptions.ohImbue=y.InstantPoison):(e.classOptions.mhImbue=y.InstantPoison,e.classOptions.ohImbue=y.DeadlyPoison)}this.player.setSpecOptions(t,e)})),this.sim.encounter.changeEmitter.on((t=>{const e=this.player.getSpecOptions(),a=this.sim.encounter;if(!e.classOptions.applyPoisonsManually){const t=this.player.getGear().getEquippedItem(B.ItemSlotMainHand)?.item.weaponSpeed,s=this.player.getGear().getEquippedItem(B.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===t||void 0===s)return;a.targets.length>3?(e.classOptions.mhImbue=y.InstantPoison,e.classOptions.ohImbue=y.InstantPoison):t<=s?(e.classOptions.mhImbue=y.DeadlyPoison,e.classOptions.ohImbue=y.InstantPoison):(e.classOptions.mhImbue=y.InstantPoison,e.classOptions.ohImbue=y.DeadlyPoison)}this.player.setSpecOptions(t,e)}))}}export{Z as C};
