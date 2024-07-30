import{aa as s,C as e,f as t}from"./preset_utils-BOrpehHr.chunk.js";import{bv as o,A as a,bA as n,bw as l,y as i,W as r,z as c,B as p,bx as m,by as O,M as u}from"./detailed_results-BnSf1ELV.chunk.js";const d=()=>s({fieldName:"shield",values:[{value:o.NoShield,tooltip:"No Shield"},{actionId:a.fromSpellId(52127),value:o.WaterShield},{actionId:a.fromSpellId(324),value:o.LightningShield}]}),S=()=>s({fieldName:"imbueMh",values:[{value:n.NoImbue,tooltip:"No Main Hand Enchant"},{actionId:a.fromSpellId(8232),value:n.WindfuryWeapon},{actionId:a.fromSpellId(8024),value:n.FlametongueWeapon},{actionId:a.fromSpellId(8033),value:n.FrostbrandWeapon}]});function h(s,o){const n=new e(s,"totems-settings",{header:{title:"Totems"}}),d=u.newGroupContainer();d.classList.add("totem-dropdowns-container","icon-group"),n.bodyElement.appendChild(d),new t(d,o.player,{extraCssClasses:["call-totem-picker"],numColumns:1,values:[{actionId:a.fromSpellId(66842),value:l.Elements},{actionId:a.fromSpellId(66843),value:l.Ancestors},{actionId:a.fromSpellId(66844),value:l.Spirits}],equals:(s,e)=>s==e,zeroValue:l.NoCall,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>s.getSpecOptions().classOptions?.call||l.Elements,setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(t){case l.Elements:S.setInputValue(o.classOptions?.totems?.elements?.earth||i.NoEarthTotem),h.setInputValue(o.classOptions?.totems?.elements?.water||r.NoWaterTotem),I.setInputValue(o.classOptions?.totems?.elements?.fire||c.NoFireTotem),T.setInputValue(o.classOptions?.totems?.elements?.air||p.NoAirTotem);break;case l.Ancestors:S.setInputValue(o.classOptions?.totems?.ancestors?.earth||i.NoEarthTotem),h.setInputValue(o.classOptions?.totems?.ancestors?.water||r.NoWaterTotem),I.setInputValue(o.classOptions?.totems?.ancestors?.fire||c.NoFireTotem),T.setInputValue(o.classOptions?.totems?.ancestors?.air||p.NoAirTotem);break;case l.Spirits:S.setInputValue(o.classOptions?.totems?.spirits?.earth||i.NoEarthTotem),h.setInputValue(o.classOptions?.totems?.spirits?.water||r.NoWaterTotem),I.setInputValue(o.classOptions?.totems?.spirits?.fire||c.NoFireTotem),T.setInputValue(o.classOptions?.totems?.spirits?.air||p.NoAirTotem)}o.classOptions.call=t,e.setSpecOptions(s,o)}});const S=new t(d,o.player,{extraCssClasses:["earth-totem-picker"],numColumns:1,values:[{color:"#ffdfba",value:i.NoEarthTotem},{actionId:a.fromSpellId(8075),value:i.StrengthOfEarthTotem},{actionId:a.fromSpellId(8071),value:i.StoneskinTotem},{actionId:a.fromSpellId(8143),value:i.TremorTotem},{actionId:a.fromSpellId(2062),value:i.EarthElementalTotem}],equals:(s,e)=>s==e,zeroValue:i.NoEarthTotem,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>{const e=s.getSpecOptions();let t=i.NoEarthTotem;switch(e.classOptions?.call){case l.Elements:t=s.getSpecOptions().classOptions?.totems?.elements?.earth||i.NoEarthTotem;break;case l.Ancestors:t=s.getSpecOptions().classOptions?.totems?.ancestors?.earth||i.NoEarthTotem;break;case l.Spirits:t=s.getSpecOptions().classOptions?.totems?.spirits?.earth||i.NoEarthTotem}return t},setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(o.classOptions?.totems||(o.classOptions.totems=m.create()),o.classOptions?.call){case l.Elements:o.classOptions.totems.earth=t,o.classOptions?.totems.elements||(o.classOptions.totems.elements=O.create()),o.classOptions.totems.elements.earth=t;break;case l.Ancestors:o.classOptions?.totems.ancestors||(o.classOptions.totems.ancestors=O.create()),o.classOptions.totems.ancestors.earth=t;break;case l.Spirits:o.classOptions?.totems.spirits||(o.classOptions.totems.spirits=O.create()),o.classOptions.totems.spirits.earth=t}e.setSpecOptions(s,o)}}),h=new t(d,o.player,{extraCssClasses:["water-totem-picker"],numColumns:1,values:[{color:"#bae1ff",value:r.NoWaterTotem},{actionId:a.fromSpellId(5675),value:r.ManaSpringTotem},{actionId:a.fromSpellId(5394),value:r.HealingStreamTotem}],equals:(s,e)=>s==e,zeroValue:r.NoWaterTotem,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>{const e=s.getSpecOptions();let t=r.NoWaterTotem;switch(e.classOptions?.call){case l.Elements:t=s.getSpecOptions().classOptions?.totems?.elements?.water||r.NoWaterTotem;break;case l.Ancestors:t=s.getSpecOptions().classOptions?.totems?.ancestors?.water||r.NoWaterTotem;break;case l.Spirits:t=s.getSpecOptions().classOptions?.totems?.spirits?.water||r.NoWaterTotem}return t},setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(o.classOptions?.totems||(o.classOptions.totems=m.create()),o.classOptions?.call){case l.Elements:o.classOptions.totems.water=t,o.classOptions?.totems.elements||(o.classOptions.totems.elements=O.create()),o.classOptions.totems.elements.water=t;break;case l.Ancestors:o.classOptions?.totems.ancestors||(o.classOptions.totems.ancestors=O.create()),o.classOptions.totems.ancestors.water=t;break;case l.Spirits:o.classOptions?.totems.spirits||(o.classOptions.totems.spirits=O.create()),o.classOptions.totems.spirits.water=t}e.setSpecOptions(s,o)}}),I=new t(d,o.player,{extraCssClasses:["fire-totem-picker"],numColumns:1,values:[{color:"#ffb3ba",value:c.NoFireTotem},{actionId:a.fromSpellId(78770),value:c.MagmaTotem},{actionId:a.fromSpellId(3599),value:c.SearingTotem},{actionId:a.fromSpellId(8227),value:c.FlametongueTotem},{actionId:a.fromSpellId(2894),value:c.FireElementalTotem}],equals:(s,e)=>s==e,zeroValue:c.NoFireTotem,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>{const e=s.getSpecOptions();let t=c.NoFireTotem;switch(e.classOptions?.call){case l.Elements:t=s.getSpecOptions().classOptions?.totems?.elements?.fire||c.NoFireTotem;break;case l.Ancestors:t=s.getSpecOptions().classOptions?.totems?.ancestors?.fire||c.NoFireTotem;break;case l.Spirits:t=s.getSpecOptions().classOptions?.totems?.spirits?.fire||c.NoFireTotem}return t},setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(o.classOptions?.totems||(o.classOptions.totems=m.create()),o.classOptions?.call){case l.Elements:o.classOptions.totems.fire=t,o.classOptions?.totems.elements||(o.classOptions.totems.elements=O.create()),o.classOptions.totems.elements.fire=t;break;case l.Ancestors:o.classOptions?.totems.ancestors||(o.classOptions.totems.ancestors=O.create()),o.classOptions.totems.ancestors.fire=t;break;case l.Spirits:o.classOptions?.totems.spirits||(o.classOptions.totems.spirits=O.create()),o.classOptions.totems.spirits.fire=t}e.setSpecOptions(s,o)}}),T=new t(d,o.player,{extraCssClasses:["air-totem-picker"],numColumns:1,values:[{color:"#baffc9",value:p.NoAirTotem},{actionId:a.fromSpellId(8512),value:p.WindfuryTotem},{actionId:a.fromSpellId(3738),value:p.WrathOfAirTotem}],equals:(s,e)=>s==e,zeroValue:p.NoAirTotem,changedEvent:s=>s.specOptionsChangeEmitter,getValue:s=>{const e=s.getSpecOptions();let t=p.NoAirTotem;switch(e.classOptions?.call){case l.Elements:t=s.getSpecOptions().classOptions?.totems?.elements?.air||p.NoAirTotem;break;case l.Ancestors:t=s.getSpecOptions().classOptions?.totems?.ancestors?.air||p.NoAirTotem;break;case l.Spirits:t=s.getSpecOptions().classOptions?.totems?.spirits?.air||p.NoAirTotem}return t},setValue:(s,e,t)=>{const o=e.getSpecOptions();switch(o.classOptions?.totems||(o.classOptions.totems=m.create()),o.classOptions?.call){case l.Elements:o.classOptions.totems.air=t,o.classOptions?.totems.elements||(o.classOptions.totems.elements=O.create()),o.classOptions.totems.elements.air=t;break;case l.Ancestors:o.classOptions?.totems.ancestors||(o.classOptions.totems.ancestors=O.create()),o.classOptions.totems.ancestors.air=t;break;case l.Spirits:o.classOptions?.totems.spirits||(o.classOptions.totems.spirits=O.create()),o.classOptions.totems.spirits.air=t}e.setSpecOptions(s,o)}});return n}export{d as S,h as T,S as a};