(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Ar2x:function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),n=a.n(r),o=(a("f3/d"),a("91GP"),a("ls82"),a("Z2Ku"),a("L9s1"),a("q1tI")),s=a.n(o),i=a("Wbzz"),c=a("vOnD"),d=a("vrFN"),l=a("yBb5"),p=c.a.section.withConfig({displayName:"ProjectEntity__Container",componentId:"x46sai-0"})(["text-align:center;"]),u=function(e){var t=e.project,a=e.isSelected,r=e.onClick,n=e.amount,o=t.name,i=t.description,c=t.image,d=t.category,l=t.twitter;return s.a.createElement("button",{type:"button",onClick:function(){r(o)}},s.a.createElement(p,null,a,o,i,c,d,l,a&&n))},m=a("Fqsg"),f=[{name:"EthHub",description:"A TRUSTED SOURCE IN A TRUSTLESS WORLD",image:"ethhub",category:"Education",address:"0xA19FCDaD77C1F0fd184689aca88BabCF68010347",twitter:"@ethhub_io",URL:"https://ethhub.io/"},{name:"One Click Dapp",description:"Turning smart contracts into easy-to-use dApps",image:"ocd",category:"Tooling",address:"0x9492510BbCB93B6992d8b7Bb67888558E12DCac4",twitter:"@pi0neerpat",URL:"https://oneclickdapp.com"},{name:"rDAO",description:"Programmable interest payments for everyone",image:"rdai",category:"DeFi",address:"0x5D7D257d97D8a81F51187a77C6dD226Fb8424d90",twitter:"@rDAI_DAO",URL:"https://rdai.money"},{name:"The Altar of rDAI",description:"Making rDAI offerings to open source projects",image:"altar",category:"DeFi",address:"0x607EBb69D568DBe1d2283668120036A892E88e89",twitter:"@AltarOfrDAI",URL:"https://altarofrdai.io/"},{name:"E.TH. Phone Home",description:"Voice-calling Ethereum addresses",image:"voip",category:"Wizardry",address:"0x9410A73737E73E105c7CBD57bA64a3073E6A0924",twitter:"@ejwessel",URL:"https://devpost.com/software/"},{name:"threadpool",description:"",image:"thread",category:"Education",address:"0x18D80Ffdbd08F70B314f06Ae9D1b309135Af9405",twitter:"@threadpool_io",URL:"https://devpost.com/software/threadpool"},{name:"FLiFF",description:"The better way to settle up with your friends",image:"fliff",category:"DeFi",address:"0xaFAEfc6dd3C9feF66f92BA838b132644451F0715",twitter:"@AppFliff",URL:"https://fliff.app/"},{name:"Cypherplugs",description:"Freedom-enhancing Linux distro for cyber protocols",image:"cypher",category:"Tooling",address:"0x65d676F3Eca501b324A636933Cd3b8c4fB5D9228",twitter:"@cypherplugs",URL:"https://cypherplugs.com"},{name:"Cryptobrawl",description:"Interoperable NFT battleground",image:"brawl",category:"Gaming",address:"0x59B96e98B97f3d1A7e59dF53cb0f05E650c4FFfA",twitter:"@cryptobrawl",URL:"https://cryptobrawl.online"},{name:"Blocks of Notes",description:"Anonymous suggestion/complaint box with timed release",image:"blocks",category:"dApp",address:"0x74B0A71a430de8022622c8dDFFe3f9EED0876207",twitter:"@CuteManhole",URL:"https://devpost.com/software/blocksofnotes"},{name:"BountyUp",description:"Bounties platform sustained by rDAI",image:"bounty",category:"Bounties",address:"0x4a7D077E676C4BF3182ce6dcc09afD3217D88bcD",twitter:"@cedriking",URL:"https://devpost.com/software/bountyup"},{name:"Block Talk",description:"E2E encrypted messaging with IPFS storage",image:"teens",category:"Privacy",address:"0x8a68Df0029c9e8B64aD08f9a19a2f8513a4ca70b",twitter:"@",URL:"https://devpost.com/software/********"}],g=(a("ooEi"),c.a.section.withConfig({displayName:"select__Container",componentId:"l581kr-0"})(["text-align:center;"])),h=c.a.button.withConfig({displayName:"select__StyledButton",componentId:"l581kr-1"})(['font-family:"Inter";font-size:20px;font-weight:600;color:#0e0544;text-decoration:none;transition:all 0.2s ease;&:hover{transition:border 0.2s ease;}&:active{transform:scale(0.97);transition:transform 0.2s ease;}']);t.default=function(){var e=Object(o.useState)({selectedCards:[]}),t=e[0],a=e[1],r=Object(o.useContext)(m.a),c=r[0],p=r[1],b=c.tribute,y=c.userDetails,w=c.compoundRate;console.log(c);var D=0;"undefined"!=typeof window&&(D=localStorage.getItem("compoundRate")),void 0!==w&&(D=w);var C=0;void 0!==y&&(C=y.daiBalance);var E=Math.round(C*D)/100,A="";t.selectedCards.length>0&&(A=""+Math.round(E/t.selectedCards.length*100)/100);return s.a.createElement(l.a,null,s.a.createElement(g,null,s.a.createElement(d.a,{title:"Select"}),"$",E," / year",s.a.createElement((function(){var e=t.selectedCards;return f.map((function(r){var n=!1;return e.includes(r.name)&&(n=!0),s.a.createElement(u,{amount:A,key:""+r.name,project:r,isSelected:n,onClick:function(e){var r=t.selectedCards;if(r.includes(e))return r.splice(r.indexOf(e),1),void a({selectedCards:r});r.push(e),a({selectedCards:r})}})}))}),null),s.a.createElement((function(){var e="Approach the Altar of rDAI";return t.isPendingTx&&(e="The Altar is reviewing your offering..."),s.a.createElement(h,{type:"button",onClick:function(){var e,r,o,s;return n.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return p(Object.assign({},c,{selectedCards:t.selectedCards})),console.log("setting to context:",t.selectedCards),e=[],r=[],f.forEach((function(a){t.selectedCards.includes(a.name)&&(e.push(a.address),r.push(1))})),console.log(e),d.next=8,n.a.awrap(b.generateNew(""+C,e,r));case 8:return o=d.sent,s=o.tx2,a(Object.assign({},t,{isPendingTx:!0})),d.next=13,n.a.awrap(s.wait(1));case 13:Object(i.b)("/altar");case 14:case"end":return d.stop()}}))}},e)}),null)))}}}]);
//# sourceMappingURL=component---src-pages-select-js-ee87b22887840af86d7e.js.map