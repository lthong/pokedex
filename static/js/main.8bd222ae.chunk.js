(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{17:function(e,a,o){"use strict";o.d(a,"a",(function(){return r})),o.d(a,"b",(function(){return i}));var r="pokemon/GET_POKEMON_DETAIL",i="pokemon/UPDATE_MY_POKE_IDS"},31:function(e){e.exports=JSON.parse('{"a":"https://github.com/lthong/pokedex"}')},55:function(e,a,o){},56:function(e,a,o){},58:function(e,a,o){"use strict";o.r(a);var r=o(0),i=o.n(r),n=o(13),l=o.n(n),t=o(4),s=o(29),u=o(24),c=o(28),m=o.n(c),d=o(17),g=o(9);function p(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function h(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?p(Object(o),!0).forEach((function(a){m()(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}var b={pokemonNames:Object(g.List)(),pokemonDetail:Object(g.fromJS)({basicInfo:{},species:{},abilities:{}}),myPokeIds:Object(g.List)()},k=Object(t.c)({pokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d.a:var o=Object(g.fromJS)(a.payload);return h(h({},e),{},{pokemonDetail:o});case d.b:return h(h({},e),{},{myPokeIds:a.payload});default:return e}}}),y=o(12),f=o(1),w=o(19),v=o.n(w),z=function(e){return e.pastDelay?"...Loading":null},x=v()({loader:function(){return Promise.all([o.e(0),o.e(2)]).then(o.bind(null,99))},loading:z}),j=v()({loader:function(){return Promise.all([o.e(0),o.e(5),o.e(1)]).then(o.bind(null,98))},loading:z}),O=o(25),E=o.n(O),q=o(6),P=o(23),N=o(59),T=o(8),D=o(7),S=o.p+"static/media/bg.4765844e.mp3",_=o(31),I=function(){var e=Object(N.a)().t,a=(Object(f.e)(),Object(r.useRef)(null)),o=Object(r.useState)(!1),n=E()(o,2),l=n[0],t=n[1];return Object(r.useEffect)((function(){l?a.current.play():a.current.pause()}),[l]),i.a.createElement("div",{className:"nav-bar"},i.a.createElement("div",{className:"left-items"},i.a.createElement(y.b,{exact:!0,to:T.a.ROOT,activeClassName:"active"},e("common.pokedex"))),i.a.createElement("div",{className:"right-items"},i.a.createElement("audio",{className:"bgm-audit",ref:a,src:S,muted:!l,autoPlay:!1,loop:!0,controls:!0}),i.a.createElement("div",{className:"bgm-switch",onClick:function(){t((function(e){return!e}))}},i.a.createElement("div",{className:"voice-icon"},l?i.a.createElement("img",{src:D.g,alt:"voice-open"}):i.a.createElement("img",{src:D.f,alt:"voice-closed"})),i.a.createElement("div",{className:Object(P.a)("bgm-btn",{open:l})},i.a.createElement("div",{className:"switch"}))),i.a.createElement("div",{className:"locale-selector"},i.a.createElement("img",{className:"earth-icon",src:D.b,alt:"earth-icon"}),i.a.createElement("select",{value:q.a.language,onChange:function(e){var a=e.target.value;q.a.changeLanguage(a)}},i.a.createElement("option",{value:"zh-TW"},e("common.zh-TW")),i.a.createElement("option",{value:"en"},e("common.en")))),i.a.createElement("img",{className:"github-icon",src:D.c,alt:"github-icon",onClick:function(){location.replace(_.a)}})))},L=(o(55),I),A=(o(56),function(){return i.a.createElement(y.a,{basename:"/pokedex/"},i.a.createElement(L,null),i.a.createElement(f.a,{exact:!0,path:T.a.ROOT},i.a.createElement(x,null)),i.a.createElement(f.a,{path:T.a.DETAIL},i.a.createElement(j,null)))}),W=o(11),C={en:{translation:{common:{pokedex:"Pokédex","zh-TW":"中文",en:"English",search_placeholder:"Id or name of Pokemons...",loading:"...Loading",height:"Height",weight:"Weight",types:"Type",category:"Category",ability:"Ability",states:"States",hp:"HP",attack:"Attack",defense:"Defense","special-attack":"Special Attack","special-defense":"Special Defense",speed:"Speed",fire:"fire",grass:"grass",electric:"electric",water:"water",ground:"ground",rock:"rock",fairy:"fairy",poison:"poison",bug:"bug",dragon:"dragon",psychic:"psychic",flying:"flying",fighting:"fighting",normal:"normal",ice:"ice",ghost:"ghost",steel:"steel",dark:"dark"},pokemonNames:{bulbasaur:"bulbasaur",ivysaur:"ivysaur",venusaur:"venusaur",charmander:"charmander",charmeleon:"charmeleon",charizard:"charizard",squirtle:"squirtle",wartortle:"wartortle",blastoise:"blastoise",caterpie:"caterpie",metapod:"metapod",butterfree:"butterfree",weedle:"weedle",kakuna:"kakuna",beedrill:"beedrill",pidgey:"pidgey",pidgeotto:"pidgeotto",pidgeot:"pidgeot",rattata:"rattata",raticate:"raticate",spearow:"spearow",fearow:"fearow",ekans:"ekans",arbok:"arbok",pikachu:"pikachu",raichu:"raichu",sandshrew:"sandshrew",sandslash:"sandslash","nidoran-f":"nidoran-f",nidorina:"nidorina",nidoqueen:"nidoqueen","nidoran-m":"nidoran-m",nidorino:"nidorino",nidoking:"nidoking",clefairy:"clefairy",clefable:"clefable",vulpix:"vulpix",ninetales:"ninetales",jigglypuff:"jigglypuff",wigglytuff:"wigglytuff",zubat:"zubat",golbat:"golbat",oddish:"oddish",gloom:"gloom",vileplume:"vileplume",paras:"paras",parasect:"parasect",venonat:"venonat",venomoth:"venomoth",diglett:"diglett",dugtrio:"dugtrio",meowth:"meowth",persian:"persian",psyduck:"psyduck",golduck:"golduck",mankey:"mankey",primeape:"primeape",growlithe:"growlithe",arcanine:"arcanine",poliwag:"poliwag",poliwhirl:"poliwhirl",poliwrath:"poliwrath",abra:"abra",kadabra:"kadabra",alakazam:"alakazam",machop:"machop",machoke:"machoke",machamp:"machamp",bellsprout:"bellsprout",weepinbell:"weepinbell",victreebel:"victreebel",tentacool:"tentacool",tentacruel:"tentacruel",geodude:"geodude",graveler:"graveler",golem:"golem",ponyta:"ponyta",rapidash:"rapidash",slowpoke:"slowpoke",slowbro:"slowbro",magnemite:"magnemite",magneton:"magneton",farfetchd:"farfetchd",doduo:"doduo",dodrio:"dodrio",seel:"seel",dewgong:"dewgong",grimer:"grimer",muk:"muk",shellder:"shellder",cloyster:"cloyster",gastly:"gastly",haunter:"haunter",gengar:"gengar",onix:"onix",drowzee:"drowzee",hypno:"hypno",krabby:"krabby",kingler:"kingler",voltorb:"voltorb",electrode:"electrode",exeggcute:"exeggcute",exeggutor:"exeggutor",cubone:"cubone",marowak:"marowak",hitmonlee:"hitmonlee",hitmonchan:"hitmonchan",lickitung:"lickitung",koffing:"koffing",weezing:"weezing",rhyhorn:"rhyhorn",rhydon:"rhydon",chansey:"chansey",tangela:"tangela",kangaskhan:"kangaskhan",horsea:"horsea",seadra:"seadra",goldeen:"goldeen",seaking:"seaking",staryu:"staryu",starmie:"starmie","mr-mime":"mr-mime",scyther:"scyther",jynx:"jynx",electabuzz:"electabuzz",magmar:"magmar",pinsir:"pinsir",tauros:"tauros",magikarp:"magikarp",gyarados:"gyarados",lapras:"lapras",ditto:"ditto",eevee:"eevee",vaporeon:"vaporeon",jolteon:"jolteon",flareon:"flareon",porygon:"porygon",omanyte:"omanyte",omastar:"omastar",kabuto:"kabuto",kabutops:"kabutops",aerodactyl:"aerodactyl",snorlax:"snorlax",articuno:"articuno",zapdos:"zapdos",moltres:"moltres",dratini:"dratini",dragonair:"dragonair",dragonite:"dragonite",mewtwo:"mewtwo",mew:"mew",chikorita:"chikorita",bayleef:"bayleef",meganium:"meganium",cyndaquil:"cyndaquil",quilava:"quilava",typhlosion:"typhlosion",totodile:"totodile",croconaw:"croconaw",feraligatr:"feraligatr",sentret:"sentret",furret:"furret",hoothoot:"hoothoot",noctowl:"noctowl",ledyba:"ledyba",ledian:"ledian",spinarak:"spinarak",ariados:"ariados",crobat:"crobat",chinchou:"chinchou",lanturn:"lanturn",pichu:"pichu",cleffa:"cleffa",igglybuff:"igglybuff",togepi:"togepi",togetic:"togetic",natu:"natu",xatu:"xatu",mareep:"mareep",flaaffy:"flaaffy",ampharos:"ampharos",bellossom:"bellossom",marill:"marill",azumarill:"azumarill",sudowoodo:"sudowoodo",politoed:"politoed",hoppip:"hoppip",skiploom:"skiploom",jumpluff:"jumpluff",aipom:"aipom",sunkern:"sunkern",sunflora:"sunflora",yanma:"yanma",wooper:"wooper",quagsire:"quagsire",espeon:"espeon",umbreon:"umbreon",murkrow:"murkrow",slowking:"slowking",misdreavus:"misdreavus",unown:"unown",wobbuffet:"wobbuffet",girafarig:"girafarig",pineco:"pineco",forretress:"forretress",dunsparce:"dunsparce",gligar:"gligar",steelix:"steelix",snubbull:"snubbull",granbull:"granbull",qwilfish:"qwilfish",scizor:"scizor",shuckle:"shuckle",heracross:"heracross",sneasel:"sneasel",teddiursa:"teddiursa",ursaring:"ursaring",slugma:"slugma",magcargo:"magcargo",swinub:"swinub",piloswine:"piloswine",corsola:"corsola",remoraid:"remoraid",octillery:"octillery",delibird:"delibird",mantine:"mantine",skarmory:"skarmory",houndour:"houndour",houndoom:"houndoom",kingdra:"kingdra",phanpy:"phanpy",donphan:"donphan",porygon2:"porygon2",stantler:"stantler",smeargle:"smeargle",tyrogue:"tyrogue",hitmontop:"hitmontop",smoochum:"smoochum",elekid:"elekid",magby:"magby",miltank:"miltank",blissey:"blissey",raikou:"raikou",entei:"entei",suicune:"suicune",larvitar:"larvitar",pupitar:"pupitar",tyranitar:"tyranitar",lugia:"lugia","ho-oh":"ho-oh",celebi:"celebi",treecko:"treecko",grovyle:"grovyle",sceptile:"sceptile",torchic:"torchic",combusken:"combusken",blaziken:"blaziken",mudkip:"mudkip",marshtomp:"marshtomp",swampert:"swampert",poochyena:"poochyena",mightyena:"mightyena",zigzagoon:"zigzagoon",linoone:"linoone",wurmple:"wurmple",silcoon:"silcoon",beautifly:"beautifly",cascoon:"cascoon",dustox:"dustox",lotad:"lotad",lombre:"lombre",ludicolo:"ludicolo",seedot:"seedot",nuzleaf:"nuzleaf",shiftry:"shiftry",taillow:"taillow",swellow:"swellow",wingull:"wingull",pelipper:"pelipper",ralts:"ralts",kirlia:"kirlia",gardevoir:"gardevoir",surskit:"surskit",masquerain:"masquerain",shroomish:"shroomish",breloom:"breloom",slakoth:"slakoth",vigoroth:"vigoroth",slaking:"slaking",nincada:"nincada",ninjask:"ninjask",shedinja:"shedinja",whismur:"whismur",loudred:"loudred",exploud:"exploud",makuhita:"makuhita",hariyama:"hariyama",azurill:"azurill",nosepass:"nosepass",skitty:"skitty",delcatty:"delcatty",sableye:"sableye",mawile:"mawile",aron:"aron",lairon:"lairon",aggron:"aggron",meditite:"meditite",medicham:"medicham",electrike:"electrike",manectric:"manectric",plusle:"plusle",minun:"minun",volbeat:"volbeat",illumise:"illumise",roselia:"roselia",gulpin:"gulpin",swalot:"swalot",carvanha:"carvanha",sharpedo:"sharpedo",wailmer:"wailmer",wailord:"wailord",numel:"numel",camerupt:"camerupt",torkoal:"torkoal",spoink:"spoink",grumpig:"grumpig",spinda:"spinda",trapinch:"trapinch",vibrava:"vibrava",flygon:"flygon",cacnea:"cacnea",cacturne:"cacturne",swablu:"swablu",altaria:"altaria",zangoose:"zangoose",seviper:"seviper",lunatone:"lunatone",solrock:"solrock",barboach:"barboach",whiscash:"whiscash",corphish:"corphish",crawdaunt:"crawdaunt",baltoy:"baltoy",claydol:"claydol",lileep:"lileep",cradily:"cradily",anorith:"anorith",armaldo:"armaldo",feebas:"feebas",milotic:"milotic",castform:"castform",kecleon:"kecleon",shuppet:"shuppet",banette:"banette",duskull:"duskull",dusclops:"dusclops",tropius:"tropius",chimecho:"chimecho",absol:"absol",wynaut:"wynaut",snorunt:"snorunt",glalie:"glalie",spheal:"spheal",sealeo:"sealeo",walrein:"walrein",clamperl:"clamperl",huntail:"huntail",gorebyss:"gorebyss",relicanth:"relicanth",luvdisc:"luvdisc",bagon:"bagon",shelgon:"shelgon",salamence:"salamence",beldum:"beldum",metang:"metang",metagross:"metagross",regirock:"regirock",regice:"regice",registeel:"registeel",latias:"latias",latios:"latios",kyogre:"kyogre",groudon:"groudon",rayquaza:"rayquaza",jirachi:"jirachi","deoxys-normal":"deoxys-normal",turtwig:"turtwig",grotle:"grotle",torterra:"torterra",chimchar:"chimchar",monferno:"monferno",infernape:"infernape",piplup:"piplup",prinplup:"prinplup",empoleon:"empoleon",starly:"starly",staravia:"staravia",staraptor:"staraptor",bidoof:"bidoof",bibarel:"bibarel",kricketot:"kricketot",kricketune:"kricketune",shinx:"shinx",luxio:"luxio",luxray:"luxray",budew:"budew",roserade:"roserade",cranidos:"cranidos",rampardos:"rampardos",shieldon:"shieldon",bastiodon:"bastiodon",burmy:"burmy","wormadam-plant":"wormadam-plant",mothim:"mothim",combee:"combee",vespiquen:"vespiquen",pachirisu:"pachirisu",buizel:"buizel",floatzel:"floatzel",cherubi:"cherubi",cherrim:"cherrim",shellos:"shellos",gastrodon:"gastrodon",ambipom:"ambipom",drifloon:"drifloon",drifblim:"drifblim",buneary:"buneary",lopunny:"lopunny",mismagius:"mismagius",honchkrow:"honchkrow",glameow:"glameow",purugly:"purugly",chingling:"chingling",stunky:"stunky",skuntank:"skuntank",bronzor:"bronzor",bronzong:"bronzong",bonsly:"bonsly","mime-jr":"mime-jr",happiny:"happiny",chatot:"chatot",spiritomb:"spiritomb",gible:"gible",gabite:"gabite",garchomp:"garchomp",munchlax:"munchlax",riolu:"riolu",lucario:"lucario",hippopotas:"hippopotas",hippowdon:"hippowdon",skorupi:"skorupi",drapion:"drapion",croagunk:"croagunk",toxicroak:"toxicroak",carnivine:"carnivine",finneon:"finneon",lumineon:"lumineon",mantyke:"mantyke",snover:"snover",abomasnow:"abomasnow",weavile:"weavile",magnezone:"magnezone",lickilicky:"lickilicky",rhyperior:"rhyperior",tangrowth:"tangrowth",electivire:"electivire",magmortar:"magmortar",togekiss:"togekiss",yanmega:"yanmega",leafeon:"leafeon",glaceon:"glaceon",gliscor:"gliscor",mamoswine:"mamoswine","porygon-z":"porygon-z",gallade:"gallade",probopass:"probopass",dusknoir:"dusknoir",froslass:"froslass",rotom:"rotom",uxie:"uxie",mesprit:"mesprit",azelf:"azelf",dialga:"dialga",palkia:"palkia",heatran:"heatran",regigigas:"regigigas","giratina-altered":"giratina-altered",cresselia:"cresselia",phione:"phione",manaphy:"manaphy",darkrai:"darkrai","shaymin-land":"shaymin-land",arceus:"arceus",victini:"victini",snivy:"snivy",servine:"servine",serperior:"serperior",tepig:"tepig",pignite:"pignite",emboar:"emboar",oshawott:"oshawott",dewott:"dewott",samurott:"samurott",patrat:"patrat",watchog:"watchog",lillipup:"lillipup",herdier:"herdier",stoutland:"stoutland",purrloin:"purrloin",liepard:"liepard",pansage:"pansage",simisage:"simisage",pansear:"pansear",simisear:"simisear",panpour:"panpour",simipour:"simipour",munna:"munna",musharna:"musharna",pidove:"pidove",tranquill:"tranquill",unfezant:"unfezant",blitzle:"blitzle",zebstrika:"zebstrika",roggenrola:"roggenrola",boldore:"boldore",gigalith:"gigalith",woobat:"woobat",swoobat:"swoobat",drilbur:"drilbur",excadrill:"excadrill",audino:"audino",timburr:"timburr",gurdurr:"gurdurr",conkeldurr:"conkeldurr",tympole:"tympole",palpitoad:"palpitoad",seismitoad:"seismitoad",throh:"throh",sawk:"sawk",sewaddle:"sewaddle",swadloon:"swadloon",leavanny:"leavanny",venipede:"venipede",whirlipede:"whirlipede",scolipede:"scolipede",cottonee:"cottonee",whimsicott:"whimsicott",petilil:"petilil",lilligant:"lilligant","basculin-red-striped":"basculin-red-striped",sandile:"sandile",krokorok:"krokorok",krookodile:"krookodile",darumaka:"darumaka","darmanitan-standard":"darmanitan-standard",maractus:"maractus",dwebble:"dwebble",crustle:"crustle",scraggy:"scraggy",scrafty:"scrafty",sigilyph:"sigilyph",yamask:"yamask",cofagrigus:"cofagrigus",tirtouga:"tirtouga",carracosta:"carracosta",archen:"archen",archeops:"archeops",trubbish:"trubbish",garbodor:"garbodor",zorua:"zorua",zoroark:"zoroark",minccino:"minccino",cinccino:"cinccino",gothita:"gothita",gothorita:"gothorita",gothitelle:"gothitelle",solosis:"solosis",duosion:"duosion",reuniclus:"reuniclus",ducklett:"ducklett",swanna:"swanna",vanillite:"vanillite",vanillish:"vanillish",vanilluxe:"vanilluxe",deerling:"deerling",sawsbuck:"sawsbuck",emolga:"emolga",karrablast:"karrablast",escavalier:"escavalier",foongus:"foongus",amoonguss:"amoonguss",frillish:"frillish",jellicent:"jellicent",alomomola:"alomomola",joltik:"joltik",galvantula:"galvantula",ferroseed:"ferroseed",ferrothorn:"ferrothorn",klink:"klink",klang:"klang",klinklang:"klinklang",tynamo:"tynamo",eelektrik:"eelektrik",eelektross:"eelektross",elgyem:"elgyem",beheeyem:"beheeyem",litwick:"litwick",lampent:"lampent",chandelure:"chandelure",axew:"axew",fraxure:"fraxure",haxorus:"haxorus",cubchoo:"cubchoo",beartic:"beartic",cryogonal:"cryogonal",shelmet:"shelmet",accelgor:"accelgor",stunfisk:"stunfisk",mienfoo:"mienfoo",mienshao:"mienshao",druddigon:"druddigon",golett:"golett",golurk:"golurk",pawniard:"pawniard",bisharp:"bisharp",bouffalant:"bouffalant",rufflet:"rufflet",braviary:"braviary",vullaby:"vullaby",mandibuzz:"mandibuzz",heatmor:"heatmor",durant:"durant",deino:"deino",zweilous:"zweilous",hydreigon:"hydreigon",larvesta:"larvesta",volcarona:"volcarona",cobalion:"cobalion",terrakion:"terrakion",virizion:"virizion","tornadus-incarnate":"tornadus-incarnate","thundurus-incarnate":"thundurus-incarnate",reshiram:"reshiram",zekrom:"zekrom","landorus-incarnate":"landorus-incarnate",kyurem:"kyurem","keldeo-ordinary":"keldeo-ordinary","meloetta-aria":"meloetta-aria",genesect:"genesect",chespin:"chespin",quilladin:"quilladin",chesnaught:"chesnaught",fennekin:"fennekin",braixen:"braixen",delphox:"delphox",froakie:"froakie",frogadier:"frogadier",greninja:"greninja",bunnelby:"bunnelby",diggersby:"diggersby",fletchling:"fletchling",fletchinder:"fletchinder",talonflame:"talonflame",scatterbug:"scatterbug",spewpa:"spewpa",vivillon:"vivillon",litleo:"litleo",pyroar:"pyroar",flabebe:"flabebe",floette:"floette",florges:"florges",skiddo:"skiddo",gogoat:"gogoat",pancham:"pancham",pangoro:"pangoro",furfrou:"furfrou",espurr:"espurr","meowstic-male":"meowstic-male",honedge:"honedge",doublade:"doublade","aegislash-shield":"aegislash-shield",spritzee:"spritzee",aromatisse:"aromatisse",swirlix:"swirlix",slurpuff:"slurpuff",inkay:"inkay",malamar:"malamar",binacle:"binacle",barbaracle:"barbaracle",skrelp:"skrelp",dragalge:"dragalge",clauncher:"clauncher",clawitzer:"clawitzer",helioptile:"helioptile",heliolisk:"heliolisk",tyrunt:"tyrunt",tyrantrum:"tyrantrum",amaura:"amaura",aurorus:"aurorus",sylveon:"sylveon",hawlucha:"hawlucha",dedenne:"dedenne",carbink:"carbink",goomy:"goomy",sliggoo:"sliggoo",goodra:"goodra",klefki:"klefki",phantump:"phantump",trevenant:"trevenant","pumpkaboo-average":"pumpkaboo-average","gourgeist-average":"gourgeist-average",bergmite:"bergmite",avalugg:"avalugg",noibat:"noibat",noivern:"noivern",xerneas:"xerneas",yveltal:"yveltal",zygarde:"zygarde",diancie:"diancie",hoopa:"hoopa",volcanion:"volcanion",rowlet:"rowlet",dartrix:"dartrix",decidueye:"decidueye",litten:"litten",torracat:"torracat",incineroar:"incineroar",popplio:"popplio",brionne:"brionne",primarina:"primarina",pikipek:"pikipek",trumbeak:"trumbeak",toucannon:"toucannon",yungoos:"yungoos",gumshoos:"gumshoos",grubbin:"grubbin",charjabug:"charjabug",vikavolt:"vikavolt",crabrawler:"crabrawler",crabominable:"crabominable","oricorio-baile":"oricorio-baile",cutiefly:"cutiefly",ribombee:"ribombee",rockruff:"rockruff","lycanroc-midday":"lycanroc-midday","wishiwashi-solo":"wishiwashi-solo",mareanie:"mareanie",toxapex:"toxapex",mudbray:"mudbray",mudsdale:"mudsdale",dewpider:"dewpider",araquanid:"araquanid",fomantis:"fomantis",lurantis:"lurantis",morelull:"morelull",shiinotic:"shiinotic",salandit:"salandit",salazzle:"salazzle",stufful:"stufful",bewear:"bewear",bounsweet:"bounsweet",steenee:"steenee",tsareena:"tsareena",comfey:"comfey",oranguru:"oranguru",passimian:"passimian",wimpod:"wimpod",golisopod:"golisopod",sandygast:"sandygast",palossand:"palossand",pyukumuku:"pyukumuku","type-null":"type-null",silvally:"silvally","minior-red-meteor":"minior-red-meteor",komala:"komala",turtonator:"turtonator",togedemaru:"togedemaru","mimikyu-disguised":"mimikyu-disguised",bruxish:"bruxish",drampa:"drampa",dhelmise:"dhelmise","jangmo-o":"jangmo-o","hakamo-o":"hakamo-o","kommo-o":"kommo-o","tapu-koko":"tapu-koko","tapu-lele":"tapu-lele","tapu-bulu":"tapu-bulu","tapu-fini":"tapu-fini",cosmog:"cosmog",cosmoem:"cosmoem",solgaleo:"solgaleo",lunala:"lunala",nihilego:"nihilego",buzzwole:"buzzwole",pheromosa:"pheromosa",xurkitree:"xurkitree",celesteela:"celesteela",kartana:"kartana",guzzlord:"guzzlord",necrozma:"necrozma",magearna:"magearna",marshadow:"marshadow",poipole:"poipole",naganadel:"naganadel",stakataka:"stakataka",blacephalon:"blacephalon",zeraora:"zeraora",meltan:"meltan",melmetal:"melmetal",grookey:"grookey",thwackey:"thwackey",rillaboom:"rillaboom",scorbunny:"scorbunny",raboot:"raboot",cinderace:"cinderace",sobble:"sobble",drizzile:"drizzile",inteleon:"inteleon",skwovet:"skwovet",greedent:"greedent",rookidee:"rookidee",corvisquire:"corvisquire",corviknight:"corviknight",blipbug:"blipbug",dottler:"dottler",orbeetle:"orbeetle",nickit:"nickit",thievul:"thievul",gossifleur:"gossifleur",eldegoss:"eldegoss",wooloo:"wooloo",dubwool:"dubwool",chewtle:"chewtle",drednaw:"drednaw",yamper:"yamper",boltund:"boltund",rolycoly:"rolycoly",carkol:"carkol",coalossal:"coalossal",applin:"applin",flapple:"flapple",appletun:"appletun",silicobra:"silicobra",sandaconda:"sandaconda",cramorant:"cramorant",arrokuda:"arrokuda",barraskewda:"barraskewda",toxel:"toxel","toxtricity-amped":"toxtricity-amped",sizzlipede:"sizzlipede",centiskorch:"centiskorch",clobbopus:"clobbopus",grapploct:"grapploct",sinistea:"sinistea",polteageist:"polteageist",hatenna:"hatenna",hattrem:"hattrem",hatterene:"hatterene",impidimp:"impidimp",morgrem:"morgrem",grimmsnarl:"grimmsnarl",obstagoon:"obstagoon",perrserker:"perrserker",cursola:"cursola",sirfetchd:"sirfetchd","mr-rime":"mr-rime",runerigus:"runerigus",milcery:"milcery",alcremie:"alcremie",falinks:"falinks",pincurchin:"pincurchin",snom:"snom",frosmoth:"frosmoth",stonjourner:"stonjourner","eiscue-ice":"eiscue-ice","indeedee-male":"indeedee-male",morpeko:"morpeko",cufant:"cufant",copperajah:"copperajah",dracozolt:"dracozolt",arctozolt:"arctozolt",dracovish:"dracovish",arctovish:"arctovish",duraludon:"duraludon",dreepy:"dreepy",drakloak:"drakloak",dragapult:"dragapult","zacian-hero":"zacian-hero","zamazenta-hero":"zamazenta-hero",eternatus:"eternatus",kubfu:"kubfu","urshifu-single-strike":"urshifu-single-strike",zarude:"zarude",regieleki:"regieleki",regidrago:"regidrago",glastrier:"glastrier",spectrier:"spectrier",calyrex:"calyrex"}}},"zh-TW":{translation:{common:{pokedex:"寶可夢圖鑑","zh-TW":"中文",en:"English",search_placeholder:"寶可夢編號或名稱",loading:"...搜尋中",height:"身高",weight:"體重",types:"屬性",category:"分類",ability:"特性",states:"能力",hp:"HP",attack:"攻擊",defense:"防禦","special-attack":"特攻","special-defense":"特防",speed:"速度",fire:"火",grass:"草",electric:"電",water:"水",ground:"地面",rock:"岩石",fairy:"妖精",poison:"毒",bug:"蟲",dragon:"龍",psychic:"超能力",flying:"飛行",fighting:"格鬥",normal:"一般",ice:"冰",ghost:"幽靈",steel:"鋼",dark:"惡"},pokemonNames:{bulbasaur:"妙蛙種子",ivysaur:"妙蛙草",venusaur:"妙蛙花",charmander:"小火龍",charmeleon:"火恐龍",charizard:"噴火龍",squirtle:"傑尼龜",wartortle:"卡咪龜",blastoise:"水箭龜",caterpie:"綠毛蟲",metapod:"鐵甲蛹",butterfree:"巴大蝶",weedle:"獨角蟲",kakuna:"鐵殼蛹",beedrill:"大針蜂",pidgey:"波波",pidgeotto:"比比鳥",pidgeot:"大比鳥",rattata:"小拉達",raticate:"拉達",spearow:"烈雀",fearow:"大嘴雀",ekans:"阿柏蛇",arbok:"阿柏怪",pikachu:"皮卡丘",raichu:"雷丘",sandshrew:"穿山鼠",sandslash:"穿山王","nidoran-f":"尼多蘭",nidorina:"尼多娜",nidoqueen:"尼多后","nidoran-m":"尼多朗",nidorino:"尼多力諾",nidoking:"尼多王",clefairy:"皮皮",clefable:"皮可西",vulpix:"六尾",ninetales:"九尾",jigglypuff:"胖丁",wigglytuff:"胖可丁",zubat:"超音蝠",golbat:"大嘴蝠",oddish:"走路草",gloom:"臭臭花",vileplume:"霸王花",paras:"派拉斯",parasect:"派拉斯特",venonat:"毛球",venomoth:"摩魯蛾",diglett:"地鼠",dugtrio:"三地鼠",meowth:"喵喵",persian:"貓老大",psyduck:"可達鴨",golduck:"哥達鴨",mankey:"猴怪",primeape:"火爆猴",growlithe:"卡蒂狗",arcanine:"風速狗",poliwag:"蚊香蝌蚪",poliwhirl:"蚊香君",poliwrath:"蚊香泳士",abra:"凱西",kadabra:"勇基拉",alakazam:"胡地",machop:"腕力",machoke:"豪力",machamp:"怪力",bellsprout:"喇叭芽",weepinbell:"口呆花",victreebel:"大食花",tentacool:"瑪瑙水母",tentacruel:"毒刺水母",geodude:"小拳石",graveler:"隆隆石",golem:"隆隆岩",ponyta:"小火馬",rapidash:"烈焰馬",slowpoke:"呆呆獸",slowbro:"呆殼獸",magnemite:"小磁怪",magneton:"三合一磁怪",farfetchd:"大蔥鴨",doduo:"嘟嘟",dodrio:"嘟嘟利",seel:"小海獅",dewgong:"白海獅",grimer:"臭泥",muk:"臭臭泥",shellder:"大舌貝",cloyster:"刺甲貝",gastly:"鬼斯",haunter:"鬼斯通",gengar:"耿鬼",onix:"大岩蛇",drowzee:"催眠貘",hypno:"引夢貘人",krabby:"大鉗蟹",kingler:"巨鉗蟹",voltorb:"霹靂電球",electrode:"頑皮雷彈",exeggcute:"蛋蛋",exeggutor:"椰蛋樹",cubone:"卡拉卡拉",marowak:"嘎啦嘎啦",hitmonlee:"飛腿郎",hitmonchan:"快拳郎",lickitung:"大舌頭",koffing:"瓦斯彈",weezing:"雙彈瓦斯",rhyhorn:"獨角犀牛",rhydon:"鑽角犀獸",chansey:"吉利蛋",tangela:"蔓藤怪",kangaskhan:"袋獸",horsea:"墨海馬",seadra:"海刺龍",goldeen:"角金魚",seaking:"金魚王",staryu:"海星星",starmie:"寶石海星","mr-mime":"魔牆人偶",scyther:"飛天螳螂",jynx:"迷唇姐",electabuzz:"電擊獸",magmar:"鴨嘴火獸",pinsir:"凱羅斯",tauros:"肯泰羅",magikarp:"鯉魚王",gyarados:"暴鯉龍",lapras:"拉普拉斯",ditto:"百變怪",eevee:"伊布",vaporeon:"水伊布",jolteon:"雷伊布",flareon:"火伊布",porygon:"多邊獸",omanyte:"菊石獸",omastar:"多刺菊石獸",kabuto:"化石盔",kabutops:"鐮刀盔",aerodactyl:"化石翼龍",snorlax:"卡比獸",articuno:"急凍鳥",zapdos:"閃電鳥",moltres:"火焰鳥",dratini:"迷你龍",dragonair:"哈克龍",dragonite:"快龍",mewtwo:"超夢",mew:"夢幻",chikorita:"菊草葉",bayleef:"月桂葉",meganium:"大竺葵",cyndaquil:"火球鼠",quilava:"火岩鼠",typhlosion:"火爆獸",totodile:"小鋸鱷",croconaw:"藍鱷",feraligatr:"大力鱷",sentret:"尾立",furret:"大尾立",hoothoot:"咕咕",noctowl:"貓頭夜鷹",ledyba:"芭瓢蟲",ledian:"安瓢蟲",spinarak:"圓絲蛛",ariados:"阿利多斯",crobat:"叉字蝠",chinchou:"燈籠魚",lanturn:"電燈怪",pichu:"皮丘",cleffa:"皮寶寶",igglybuff:"寶寶丁",togepi:"波克比",togetic:"波克基古",natu:"天然雀",xatu:"天然鳥",mareep:"咩利羊",flaaffy:"茸茸羊",ampharos:"電龍",bellossom:"美麗花",marill:"瑪力露",azumarill:"瑪力露麗",sudowoodo:"樹才怪",politoed:"蚊香蛙皇",hoppip:"毽子草",skiploom:"毽子花",jumpluff:"毽子棉",aipom:"長尾怪手",sunkern:"向日種子",sunflora:"向日花怪",yanma:"蜻蜻蜓",wooper:"烏波",quagsire:"沼王",espeon:"太陽伊布",umbreon:"月亮伊布",murkrow:"黑暗鴉",slowking:"呆呆王",misdreavus:"夢妖",unown:"未知圖騰",wobbuffet:"果然翁",girafarig:"麒麟奇",pineco:"榛果球",forretress:"佛烈托斯",dunsparce:"土龍弟弟",gligar:"天蠍",steelix:"大鋼蛇",snubbull:"布魯",granbull:"布魯皇",qwilfish:"千針魚",scizor:"巨鉗螳螂",shuckle:"壺壺",heracross:"赫拉克羅斯",sneasel:"狃拉",teddiursa:"熊寶寶",ursaring:"圈圈熊",slugma:"熔岩蟲",magcargo:"熔岩蝸牛",swinub:"小山豬",piloswine:"長毛豬",corsola:"太陽珊瑚",remoraid:"鐵炮魚",octillery:"章魚桶",delibird:"信使鳥",mantine:"巨翅飛魚",skarmory:"盔甲鳥",houndour:"戴魯比",houndoom:"黑魯加",kingdra:"刺龍王",phanpy:"小小象",donphan:"頓甲",porygon2:"多邊獸Ⅱ",stantler:"驚角鹿",smeargle:"圖圖犬",tyrogue:"無畏小子",hitmontop:"戰舞郎",smoochum:"迷唇娃",elekid:"電擊怪",magby:"鴨嘴寶寶",miltank:"大奶罐",blissey:"幸福蛋",raikou:"雷公",entei:"炎帝",suicune:"水君",larvitar:"幼基拉斯",pupitar:"沙基拉斯",tyranitar:"班基拉斯",lugia:"洛奇亞","ho-oh":"鳳王",celebi:"時拉比",treecko:"木守宮",grovyle:"森林蜥蜴",sceptile:"蜥蜴王",torchic:"火稚雞",combusken:"力壯雞",blaziken:"火焰雞",mudkip:"水躍魚",marshtomp:"沼躍魚",swampert:"巨沼怪",poochyena:"土狼犬",mightyena:"大狼犬",zigzagoon:"蛇紋熊",linoone:"直衝熊",wurmple:"刺尾蟲",silcoon:"甲殼繭",beautifly:"狩獵鳳蝶",cascoon:"盾甲繭",dustox:"毒粉蛾",lotad:"蓮葉童子",lombre:"蓮帽小童",ludicolo:"樂天河童",seedot:"橡實果",nuzleaf:"長鼻葉",shiftry:"狡猾天狗",taillow:"傲骨燕",swellow:"大王燕",wingull:"長翅鷗",pelipper:"大嘴鷗",ralts:"拉魯拉絲",kirlia:"奇魯莉安",gardevoir:"沙奈朵",surskit:"溜溜糖球",masquerain:"雨翅蛾",shroomish:"蘑蘑菇",breloom:"斗笠菇",slakoth:"懶人獺",vigoroth:"過動猿",slaking:"請假王",nincada:"土居忍士",ninjask:"鐵面忍者",shedinja:"脫殼忍者",whismur:"咕妞妞",loudred:"吼爆彈",exploud:"爆音怪",makuhita:"幕下力士",hariyama:"鐵掌力士",azurill:"露力麗",nosepass:"朝北鼻",skitty:"向尾喵",delcatty:"優雅貓",sableye:"勾魂眼",mawile:"大嘴娃",aron:"可可多拉",lairon:"可多拉",aggron:"波士可多拉",meditite:"瑪沙那",medicham:"恰雷姆",electrike:"落雷獸",manectric:"雷電獸",plusle:"正電拍拍",minun:"負電拍拍",volbeat:"電螢蟲",illumise:"甜甜螢",roselia:"毒薔薇",gulpin:"溶食獸",swalot:"吞食獸",carvanha:"利牙魚",sharpedo:"巨牙鯊",wailmer:"吼吼鯨",wailord:"吼鯨王",numel:"呆火駝",camerupt:"噴火駝",torkoal:"煤炭龜",spoink:"跳跳豬",grumpig:"噗噗豬",spinda:"晃晃斑",trapinch:"大顎蟻",vibrava:"超音波幼蟲",flygon:"沙漠蜻蜓",cacnea:"刺球仙人掌",cacturne:"夢歌仙人掌",swablu:"青綿鳥",altaria:"七夕青鳥",zangoose:"貓鼬斬",seviper:"飯匙蛇",lunatone:"月石",solrock:"太陽岩",barboach:"泥泥鰍",whiscash:"鯰魚王",corphish:"龍蝦小兵",crawdaunt:"鐵螯龍蝦",baltoy:"天秤偶",claydol:"念力土偶",lileep:"觸手百合",cradily:"搖籃百合",anorith:"太古羽蟲",armaldo:"太古盔甲",feebas:"醜醜魚",milotic:"美納斯",castform:"飄浮泡泡",kecleon:"變隱龍",shuppet:"怨影娃娃",banette:"詛咒娃娃",duskull:"夜巡靈",dusclops:"彷徨夜靈",tropius:"熱帶龍",chimecho:"風鈴鈴",absol:"阿勃梭魯",wynaut:"小果然",snorunt:"雪童子",glalie:"冰鬼護",spheal:"海豹球",sealeo:"海魔獅",walrein:"帝牙海獅",clamperl:"珍珠貝",huntail:"獵斑魚",gorebyss:"櫻花魚",relicanth:"古空棘魚",luvdisc:"愛心魚",bagon:"寶貝龍",shelgon:"甲殼龍",salamence:"暴飛龍",beldum:"鐵啞鈴",metang:"金屬怪",metagross:"巨金怪",regirock:"雷吉洛克",regice:"雷吉艾斯",registeel:"雷吉斯奇魯",latias:"拉帝亞斯",latios:"拉帝歐斯",kyogre:"蓋歐卡",groudon:"固拉多",rayquaza:"烈空坐",jirachi:"基拉祈","deoxys-normal":"代歐奇希斯",turtwig:"草苗龜",grotle:"樹林龜",torterra:"土台龜",chimchar:"小火焰猴",monferno:"猛火猴",infernape:"烈焰猴",piplup:"波加曼",prinplup:"波皇子",empoleon:"帝王拿波",starly:"姆克兒",staravia:"姆克鳥",staraptor:"姆克鷹",bidoof:"大牙狸",bibarel:"大尾狸",kricketot:"圓法師",kricketune:"音箱蟀",shinx:"小貓怪",luxio:"勒克貓",luxray:"倫琴貓",budew:"含羞苞",roserade:"羅絲雷朵",cranidos:"頭蓋龍",rampardos:"戰槌龍",shieldon:"盾甲龍",bastiodon:"護城龍",burmy:"結草兒","wormadam-plant":"結草貴婦",mothim:"紳士蛾",combee:"三蜜蜂",vespiquen:"蜂女王",pachirisu:"帕奇利茲",buizel:"泳圈鼬",floatzel:"浮潛鼬",cherubi:"櫻花寶",cherrim:"櫻花兒",shellos:"無殼海兔",gastrodon:"海兔獸",ambipom:"雙尾怪手",drifloon:"飄飄球",drifblim:"隨風球",buneary:"捲捲耳",lopunny:"長耳兔",mismagius:"夢妖魔",honchkrow:"烏鴉頭頭",glameow:"魅力喵",purugly:"東施喵",chingling:"鈴鐺響",stunky:"臭鼬噗",skuntank:"坦克臭鼬",bronzor:"銅鏡怪",bronzong:"青銅鐘",bonsly:"盆才怪","mime-jr":"魔尼尼",happiny:"小福蛋",chatot:"聒噪鳥",spiritomb:"花岩怪",gible:"圓陸鯊",gabite:"尖牙陸鯊",garchomp:"烈咬陸鯊",munchlax:"小卡比獸",riolu:"利歐路",lucario:"路卡利歐",hippopotas:"沙河馬",hippowdon:"河馬獸",skorupi:"鉗尾蠍",drapion:"龍王蠍",croagunk:"不良蛙",toxicroak:"毒骷蛙",carnivine:"尖牙籠",finneon:"螢光魚",lumineon:"霓虹魚",mantyke:"小球飛魚",snover:"雪笠怪",abomasnow:"暴雪王",weavile:"瑪狃拉",magnezone:"自爆磁怪",lickilicky:"大舌舔",rhyperior:"超甲狂犀",tangrowth:"巨蔓藤",electivire:"電擊魔獸",magmortar:"鴨嘴炎獸",togekiss:"波克基斯",yanmega:"遠古巨蜓",leafeon:"葉伊布",glaceon:"冰伊布",gliscor:"天蠍王",mamoswine:"象牙豬","porygon-z":"多邊獸Ｚ",gallade:"艾路雷朵",probopass:"大朝北鼻",dusknoir:"黑夜魔靈",froslass:"雪妖女",rotom:"洛托姆",uxie:"由克希",mesprit:"艾姆利多",azelf:"亞克諾姆",dialga:"帝牙盧卡",palkia:"帕路奇亞",heatran:"席多藍恩",regigigas:"雷吉奇卡斯","giratina-altered":"騎拉帝納",cresselia:"克雷色利亞",phione:"霏歐納",manaphy:"瑪納霏",darkrai:"達克萊伊","shaymin-land":"謝米",arceus:"阿爾宙斯",victini:"比克提尼",snivy:"藤藤蛇",servine:"青藤蛇",serperior:"君主蛇",tepig:"暖暖豬",pignite:"炒炒豬",emboar:"炎武王",oshawott:"水水獺",dewott:"雙刃丸",samurott:"大劍鬼",patrat:"探探鼠",watchog:"步哨鼠",lillipup:"小約克",herdier:"哈約克",stoutland:"長毛狗",purrloin:"扒手貓",liepard:"酷豹",pansage:"花椰猴",simisage:"花椰猿",pansear:"爆香猴",simisear:"爆香猿",panpour:"冷水猴",simipour:"冷水猿",munna:"食夢夢",musharna:"夢夢蝕",pidove:"豆豆鴿",tranquill:"咕咕鴿",unfezant:"高傲雉雞",blitzle:"斑斑馬",zebstrika:"雷電斑馬",roggenrola:"石丸子",boldore:"地幔岩",gigalith:"龐岩怪",woobat:"滾滾蝙蝠",swoobat:"心蝙蝠",drilbur:"螺釘地鼠",excadrill:"龍頭地鼠",audino:"差不多娃娃",timburr:"搬運小匠",gurdurr:"鐵骨土人",conkeldurr:"修建老匠",tympole:"圓蝌蚪",palpitoad:"藍蟾蜍",seismitoad:"蟾蜍王",throh:"投摔鬼",sawk:"打擊鬼",sewaddle:"蟲寶包",swadloon:"寶包繭",leavanny:"保母蟲",venipede:"百足蜈蚣",whirlipede:"車輪毬",scolipede:"蜈蚣王",cottonee:"木棉球",whimsicott:"風妖精",petilil:"百合根娃娃",lilligant:"裙兒小姐","basculin-red-striped":"野蠻鱸魚",sandile:"黑眼鱷",krokorok:"混混鱷",krookodile:"流氓鱷",darumaka:"火紅不倒翁","darmanitan-standard":"達摩狒狒",maractus:"沙鈴仙人掌",dwebble:"石居蟹",crustle:"岩殿居蟹",scraggy:"滑滑小子",scrafty:"頭巾混混",sigilyph:"象徵鳥",yamask:"哭哭面具",cofagrigus:"死神棺",tirtouga:"原蓋海龜",carracosta:"肋骨海龜",archen:"始祖小鳥",archeops:"始祖大鳥",trubbish:"破破袋",garbodor:"灰塵山",zorua:"索羅亞",zoroark:"索羅亞克",minccino:"泡沫栗鼠",cinccino:"奇諾栗鼠",gothita:"哥德寶寶",gothorita:"哥德小童",gothitelle:"哥德小姐",solosis:"單卵細胞球",duosion:"雙卵細胞球",reuniclus:"人造細胞卵",ducklett:"鴨寶寶",swanna:"舞天鵝",vanillite:"迷你冰",vanillish:"多多冰",vanilluxe:"雙倍多多冰",deerling:"四季鹿",sawsbuck:"萌芽鹿",emolga:"電飛鼠",karrablast:"蓋蓋蟲",escavalier:"騎士蝸牛",foongus:"哎呀球菇",amoonguss:"敗露球菇",frillish:"輕飄飄",jellicent:"胖嘟嘟",alomomola:"保母曼波",joltik:"電電蟲",galvantula:"電蜘蛛",ferroseed:"種子鐵球",ferrothorn:"堅果啞鈴",klink:"齒輪兒",klang:"齒輪組",klinklang:"齒輪怪",tynamo:"麻麻小魚",eelektrik:"麻麻鰻",eelektross:"麻麻鰻魚王",elgyem:"小灰怪",beheeyem:"大宇怪",litwick:"燭光靈",lampent:"燈火幽靈",chandelure:"水晶燈火靈",axew:"牙牙",fraxure:"斧牙龍",haxorus:"雙斧戰龍",cubchoo:"噴嚏熊",beartic:"凍原熊",cryogonal:"幾何雪花",shelmet:"小嘴蝸",accelgor:"敏捷蟲",stunfisk:"泥巴魚",mienfoo:"功夫鼬",mienshao:"師父鼬",druddigon:"赤面龍",golett:"泥偶小人",golurk:"泥偶巨人",pawniard:"駒刀小兵",bisharp:"劈斬司令",bouffalant:"爆炸頭水牛",rufflet:"毛頭小鷹",braviary:"勇士雄鷹",vullaby:"禿鷹丫頭",mandibuzz:"禿鷹娜",heatmor:"熔蟻獸",durant:"鐵蟻",deino:"單首龍",zweilous:"雙首暴龍",hydreigon:"三首惡龍",larvesta:"燃燒蟲",volcarona:"火神蛾",cobalion:"勾帕路翁",terrakion:"代拉基翁",virizion:"畢力吉翁","tornadus-incarnate":"龍捲雲","thundurus-incarnate":"雷電雲",reshiram:"萊希拉姆",zekrom:"捷克羅姆","landorus-incarnate":"土地雲",kyurem:"酋雷姆","keldeo-ordinary":"凱路迪歐","meloetta-aria":"美洛耶塔",genesect:"蓋諾賽克特",chespin:"哈力栗",quilladin:"胖胖哈力",chesnaught:"布里卡隆",fennekin:"火狐狸",braixen:"長尾火狐",delphox:"妖火紅狐",froakie:"呱呱泡蛙",frogadier:"呱頭蛙",greninja:"甲賀忍蛙",bunnelby:"掘掘兔",diggersby:"掘地兔",fletchling:"小箭雀",fletchinder:"火箭雀",talonflame:"烈箭鷹",scatterbug:"粉蝶蟲",spewpa:"粉蝶蛹",vivillon:"彩粉蝶",litleo:"小獅獅",pyroar:"火炎獅",flabebe:"花蓓蓓",floette:"花葉蒂",florges:"花潔夫人",skiddo:"坐騎小羊",gogoat:"坐騎山羊",pancham:"頑皮熊貓",pangoro:"流氓熊貓",furfrou:"多麗米亞",espurr:"妙喵","meowstic-male":"超能妙喵",honedge:"獨劍鞘",doublade:"雙劍鞘","aegislash-shield":"堅盾劍怪",spritzee:"粉香香",aromatisse:"芳香精",swirlix:"綿綿泡芙",slurpuff:"胖甜妮",inkay:"好啦魷",malamar:"烏賊王",binacle:"龜腳腳",barbaracle:"龜足巨鎧",skrelp:"垃垃藻",dragalge:"毒藻龍",clauncher:"鐵臂槍蝦",clawitzer:"鋼炮臂蝦",helioptile:"傘電蜥",heliolisk:"光電傘蜥",tyrunt:"寶寶暴龍",tyrantrum:"怪顎龍",amaura:"冰雪龍",aurorus:"冰雪巨龍",sylveon:"仙子伊布",hawlucha:"摔角鷹人",dedenne:"咚咚鼠",carbink:"小碎鑽",goomy:"黏黏寶",sliggoo:"黏美兒",goodra:"黏美龍",klefki:"鑰圈兒",phantump:"小木靈",trevenant:"朽木妖","pumpkaboo-average":"南瓜精","gourgeist-average":"南瓜怪人",bergmite:"冰寶",avalugg:"冰岩怪",noibat:"嗡蝠",noivern:"音波龍",xerneas:"哲爾尼亞斯",yveltal:"伊裴爾塔爾",zygarde:"基格爾德",diancie:"蒂安希",hoopa:"胡帕",volcanion:"波爾凱尼恩",rowlet:"木木梟",dartrix:"投羽梟",decidueye:"狙射樹梟",litten:"火斑喵",torracat:"炎熱喵",incineroar:"熾焰咆哮虎",popplio:"球球海獅",brionne:"花漾海獅",primarina:"西獅海壬",pikipek:"小篤兒",trumbeak:"喇叭啄鳥",toucannon:"銃嘴大鳥",yungoos:"貓鼬少",gumshoos:"貓鼬探長",grubbin:"強顎雞母蟲",charjabug:"蟲電寶",vikavolt:"鍬農炮蟲",crabrawler:"好勝蟹",crabominable:"好勝毛蟹","oricorio-baile":"花舞鳥",cutiefly:"萌虻",ribombee:"蝶結萌虻",rockruff:"岩狗狗","lycanroc-midday":"鬃岩狼人","wishiwashi-solo":"弱丁魚",mareanie:"好壞星",toxapex:"超壞星",mudbray:"泥驢仔",mudsdale:"重泥挽馬",dewpider:"滴蛛",araquanid:"滴蛛霸",fomantis:"偽螳草",lurantis:"蘭螳花",morelull:"睡睡菇",shiinotic:"燈罩夜菇",salandit:"夜盜火蜥",salazzle:"焰后蜥",stufful:"童偶熊",bewear:"穿著熊",bounsweet:"甜竹竹",steenee:"甜舞妮",tsareena:"甜冷美后",comfey:"花療環環",oranguru:"智揮猩",passimian:"投擲猴",wimpod:"膽小蟲",golisopod:"具甲武者",sandygast:"沙丘娃",palossand:"噬沙堡爺",pyukumuku:"拳海參","type-null":"屬性：空",silvally:"銀伴戰獸","minior-red-meteor":"小隕星",komala:"樹枕尾熊",turtonator:"爆焰龜獸",togedemaru:"托戈德瑪爾","mimikyu-disguised":"謎擬Ｑ",bruxish:"磨牙彩皮魚",drampa:"老翁龍",dhelmise:"破破舵輪","jangmo-o":"心鱗寶","hakamo-o":"鱗甲龍","kommo-o":"杖尾鱗甲龍","tapu-koko":"卡璞・鳴鳴","tapu-lele":"卡璞・蝶蝶","tapu-bulu":"卡璞・哞哞","tapu-fini":"卡璞・鰭鰭",cosmog:"科斯莫古",cosmoem:"科斯莫姆",solgaleo:"索爾迦雷歐",lunala:"露奈雅拉",nihilego:"虛吾伊德",buzzwole:"爆肌蚊",pheromosa:"費洛美螂",xurkitree:"電束木",celesteela:"鐵火輝夜",kartana:"紙御劍",guzzlord:"惡食大王",necrozma:"奈克洛茲瑪",magearna:"瑪機雅娜",marshadow:"瑪夏多",poipole:"毒貝比",naganadel:"四顎針龍",stakataka:"壘磊石",blacephalon:"砰頭小丑",zeraora:"捷拉奧拉",meltan:"美錄坦",melmetal:"美錄梅塔",grookey:"敲音猴",thwackey:"啪咚猴",rillaboom:"轟擂金剛猩",scorbunny:"炎兔兒",raboot:"騰蹴小將",cinderace:"閃焰王牌",sobble:"淚眼蜥",drizzile:"變澀蜥",inteleon:"千面避役",skwovet:"貪心栗鼠",greedent:"藏飽栗鼠",rookidee:"稚山雀",corvisquire:"藍鴉",corviknight:"鋼鎧鴉",blipbug:"索偵蟲",dottler:"天罩蟲",orbeetle:"以歐路普",nickit:"偷兒狐",thievul:"狐大盜",gossifleur:"幼棉棉",eldegoss:"白蓬蓬",wooloo:"毛辮羊",dubwool:"毛毛角羊",chewtle:"咬咬龜",drednaw:"暴噬龜",yamper:"來電汪",boltund:"逐電犬",rolycoly:"小炭仔",carkol:"大炭車",coalossal:"巨炭山",applin:"啃果蟲",flapple:"蘋裹龍",appletun:"豐蜜龍",silicobra:"沙包蛇",sandaconda:"沙螺蟒",cramorant:"古月鳥",arrokuda:"刺梭魚",barraskewda:"戽斗尖梭",toxel:"毒電嬰","toxtricity-amped":"顫弦蠑螈",sizzlipede:"燒火蚣",centiskorch:"焚焰蚣",clobbopus:"拳拳蛸",grapploct:"八爪武師",sinistea:"來悲茶",polteageist:"怖思壺",hatenna:"迷布莉姆",hattrem:"提布莉姆",hatterene:"布莉姆溫",impidimp:"搗蛋小妖",morgrem:"詐唬魔",grimmsnarl:"長毛巨魔",obstagoon:"堵攔熊",perrserker:"喵頭目",cursola:"魔靈珊瑚",sirfetchd:"蔥遊兵","mr-rime":"踏冰人偶",runerigus:"死神板",milcery:"小仙奶",alcremie:"霜奶仙",falinks:"列陣兵",pincurchin:"啪嚓海膽",snom:"雪吞蟲",frosmoth:"雪絨蛾",stonjourner:"巨石丁","eiscue-ice":"冰砌鵝","indeedee-male":"愛管侍",morpeko:"莫魯貝可",cufant:"銅象",copperajah:"大王銅象",dracozolt:"雷鳥龍",arctozolt:"雷鳥海獸",dracovish:"鰓魚龍",arctovish:"鰓魚海獸",duraludon:"鋁鋼龍",dreepy:"多龍梅西亞",drakloak:"多龍奇",dragapult:"多龍巴魯托","zacian-hero":"蒼響","zamazenta-hero":"藏瑪然特",eternatus:"無極汰那",kubfu:"熊徒弟","urshifu-single-strike":"武道熊師",zarude:"薩戮德",regieleki:"雷吉艾勒奇",regidrago:"雷吉鐸拉戈",glastrier:"雪暴馬",spectrier:"靈幽馬",calyrex:"蕾冠王"}}}};q.a.use(W.e).init({resources:C,lng:"zh-TW",fallbackLng:"en",interpolation:{escapeValue:!1}});q.a,o(57);var J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||t.d,R=Object(t.e)(k,{},J(Object(t.a)(s.a)));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,{store:R},i.a.createElement(A,null))),document.getElementById("root"))},7:function(e,a,o){"use strict";o.d(a,"d",(function(){return r})),o.d(a,"h",(function(){return i})),o.d(a,"b",(function(){return n})),o.d(a,"a",(function(){return l})),o.d(a,"e",(function(){return t})),o.d(a,"g",(function(){return s})),o.d(a,"f",(function(){return u})),o.d(a,"c",(function(){return c}));var r=o.p+"static/media/red-love.d1126d78.svg",i=o.p+"static/media/white-love.86d0adda.svg",n=o.p+"static/media/earth.766ba8ca.svg",l=o.p+"static/media/arrow.50703ef5.svg",t=o.p+"static/media/search.fe61fc2e.svg",s=o.p+"static/media/voice-open.f50aad78.svg",u=o.p+"static/media/voice-closed.2e9e21c1.svg",c=o.p+"static/media/github.c9c4779f.svg"},8:function(e,a,o){"use strict";a.a={ROOT:"/",DETAIL:"/detail"}}},[[58,4,6]]]);