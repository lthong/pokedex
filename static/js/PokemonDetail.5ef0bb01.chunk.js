(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{101:function(e,t,a){"use strict";a.r(t);var n=a(23),c=a(62),o=a(28),l=a.n(o),i=a(25),r=a.n(i),s=a(0),m=a.n(s),u=a(1),d=a(5),v=a.n(d),f=a(76),b=a.n(f),g=a(6),p=a(60),N=a(63),E=a.n(N),k=a(24),j=a(98),O=a.n(j),y=a(66),h=a(11),w=a(8),I=a(65),x={en:"en","zh-Hant":"zh-TW"},D=function(e){var t,a=e.getPokemonDetail,n=e.pokemonDetail,c=Object(p.a)().t,o=Object(u.f)(),i=Object(u.e)(),d=E.a.parse(o.search).id,v=Object(s.useRef)(null),f=Object(s.useState)(!1),b=r()(f,2),N=b[0],j=b[1],D=Object(s.useState)(!1),M=r()(D,2),P=M[0],S=M[1],T=Object(s.useMemo)((function(){return n.get("basicInfo")}),[n]),_=Object(s.useMemo)((function(){return n.get("species")}),[n]),C=Object(s.useMemo)((function(){return n.get("abilities")}),[n]),z=Object(s.useMemo)((function(){return T.get("name")}),[T]),J=Object(s.useMemo)((function(){return d.toString().padStart(3,"0")}),[d]),A=Object(s.useMemo)((function(){return T.getIn(["types",0,"type","name"],"")}),[T]),B=Object(s.useMemo)((function(){var e;return null===(e=_.get("genera"))||void 0===e?void 0:e.filter((function(e){return x[e.getIn(["language","name"])]===g.a.language})).getIn([0,"genus"],"")}),[_,g.a.language]),L=Object(s.useMemo)((function(){var e;return null===(e=_.get("flavor_text_entries"))||void 0===e?void 0:e.filter((function(e){return x[e.getIn(["language","name"])]===g.a.language})).getIn([0,"flavor_text"],"")}),[_,g.a.language]),F=Object(s.useMemo)((function(){return C.size>0?{desc:C.get("desc",[]).filter((function(e){return x[e.getIn(["language","name"])]===g.a.language})).getIn([0,"flavor_text"],""),label:C.get("label",[]).filter((function(e){return x[e.getIn(["language","name"])]===g.a.language})).getIn([0,"name"],"")}:{}}),[C,g.a.language]),H=Object(s.useMemo)((function(){var e;return null===(e=T.get("stats"))||void 0===e?void 0:e.map((function(e){return{label:e.getIn(["stat","name"]),value:e.get("base_stat")}})).toJS()}),[T]),R=Object(s.useCallback)((function(e){"pre"===e?i.push("".concat(w.a.DETAIL,"?id=").concat(Number(d)-1)):"next"===e&&i.push("".concat(w.a.DETAIL,"?id=").concat(Number(d)+1))}),[d,i]),W=Object(s.useMemo)((function(){var e=Number(d)-1<=0,t=Number(d)+1>I.a;return[m.a.createElement("img",{key:"prePokeDetailBtn",className:Object(k.a)("arrow-btn left",{disabled:e}),src:h.a,alt:"arrow-icon",onClick:function(){!e&&R("pre")}}),m.a.createElement("img",{key:"nextPokeDetailBtn",className:Object(k.a)("arrow-btn right",{disabled:t}),src:h.a,alt:"arrow-icon",onClick:function(){!t&&R("next")}})]}),[d,R]),q=r()(W,2),G=q[0],K=q[1],Q=Object(s.useCallback)((function(){j(!0),S(!1),clearTimeout(v.current),a({id:d},(function(){j(!1),v.current=setTimeout((function(){S(!0)}),600)}))}),[a,d]);return Object(s.useEffect)((function(){Q()}),[Q]),Object(s.useEffect)((function(){return function(){clearTimeout(v.current)}}),[]),m.a.createElement("div",{className:"pokedex-detail"},N||String(T.get("id"))!==d?m.a.createElement("div",{className:"pokemon"},c("common.loading")):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"title"},m.a.createElement("div",{className:"name"},c("pokemonNames.".concat(z))),m.a.createElement("div",{className:"id"},"#".concat(J))),m.a.createElement("div",{className:Object(k.a)("pokemon",l()({},A,!!A))},G,m.a.createElement("div",{className:"data-box"},m.a.createElement("div",{className:"block"},m.a.createElement(y.a,{id:d}),m.a.createElement("div",{className:"img-container"},m.a.createElement("img",{className:"poke-photo",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(J,".png"),alt:z}))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-1-1"},m.a.createElement("div",{className:"label"},c("common.states")),m.a.createElement("div",{className:"content"},null==H?void 0:H.map((function(e,t){var a=e.label,n=e.value,o=O.a.div(n,300).mul(100).toNumber();return m.a.createElement("div",{key:"state-".concat(t),className:"state"},m.a.createElement("div",{className:"label"},c("common.".concat(a))),m.a.createElement("div",{className:"value"},m.a.createElement("div",{className:Object(k.a)("bar",{full:100===o}),style:P?{width:"".concat(o,"%")}:{}}),m.a.createElement("span",null,"".concat(n," / 300"))))})))))),m.a.createElement("div",{className:"data-box"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-1-2"},m.a.createElement("div",{className:"label"},c("common.height")),m.a.createElement("div",{className:"content"},"".concat(O.a.div(T.get("height",0),10).toNumber()," m"))),m.a.createElement("div",{className:"col-1-2"},m.a.createElement("div",{className:"label"},c("common.weight")),m.a.createElement("div",{className:"content"},"".concat(O.a.div(T.get("weight",0),10).toNumber()," kg")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-1-1"},m.a.createElement("div",{className:"label"},c("common.types")),m.a.createElement("div",{className:"content"},null===(t=T.get("types"))||void 0===t?void 0:t.map((function(e){var t=e.getIn(["type","name"]);return m.a.createElement("div",{key:t,className:Object(k.a)("type",l()({},t,!0))},c("common.".concat(t)))}))))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-1-1"},m.a.createElement("div",{className:"label"},c("common.category")),m.a.createElement("div",{className:"content"},B),m.a.createElement("div",{className:"content desc"},L))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-1-1"},m.a.createElement("div",{className:"label"},c("common.ability")),m.a.createElement("div",{className:"content"},F.label),m.a.createElement("div",{className:"content desc"},F.desc)))),K)))};D.propTypes={getPokemonDetail:v.a.func,pokemonDet:b.a.map};var M=D,P=(a(99),M),S=Object(n.b)((function(e){return{pokemonDetail:e.pokemon.pokemonDetail}}),{getPokemonDetail:c.a})(P);t.default=S},62:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return m}));var n=a(67),c=a.n(n),o=a(63),l=a.n(o),i=a(15),r=function(e,t){return function(a){var n=l.a.stringify(e);c.a.get("https://pokeapi.co/api/v2/pokemon?".concat(n)).then((function(e){var t=e.data.results.map((function(e,t){return{name:e.name,id:t+1}}));a({type:i.b,payload:t})})).finally((function(){t()}))}},s=function(e,t){var a=e.id;return function(e){Promise.all([c.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a)),c.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(a))]).then((function(t){var a,n,o,l,r=(null===(a=t[0])||void 0===a?void 0:a.data)||{},s=(null===(n=t[1])||void 0===n?void 0:n.data)||{},m=null==r||null===(o=r.abilities[0])||void 0===o||null===(l=o.ability)||void 0===l?void 0:l.url;c.a.get(m).then((function(t){var a=t.data,n=a.names,c=a.flavor_text_entries;e({type:i.a,payload:{basicInfo:r,species:s,abilities:{label:n,desc:c}}})}))})).finally((function(){t()}))}},m=function(e){return function(t,a){var n=a().pokemon.myPokeIds,c=n.includes(e)?n.filter((function(t){return t!==e})):n.push(e);t({type:i.c,payload:c})}}},64:function(e,t,a){},65:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=151},66:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(23),l=a(24),i=a(62),r=a(11),s=function(e){var t=e.id,a=String(t),s=Object(o.c)(),m=Object(o.d)((function(e){return e.pokemon.myPokeIds})),u=Object(n.useCallback)((function(e){e.stopPropagation(),s(Object(i.c)(a))}),[s,a]);return c.a.createElement("img",{className:Object(l.a)("save-my-poke-btn",{active:m.includes(a)}),alt:"save-my-poke-btn",src:m.includes(a)?r.c:r.g,onClick:function(e){u(e,a)}})};a(64),t.a=s},99:function(e,t,a){}}]);