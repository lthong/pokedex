(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,n,t){"use strict";t.r(n);var a=t(23),c=t(62),o=t(25),i=t.n(o),r=t(0),s=t.n(r),u=t(5),l=t.n(u),m=t(76),p=t.n(m),d=t(1),f=t(60),v=t(66),k=t(8),b=t(65),g=t(11),y=function(e){var n=e.getPokemonNames,t=e.pokemonNames,a=Object(f.a)().t,c=Object(d.e)(),o=Object(r.useState)(!1),u=i()(o,2),l=u[0],m=u[1],p=Object(r.useState)(""),y=i()(p,2),N=y[0],h=y[1],E=Object(r.useMemo)((function(){var e=N.toLowerCase();return e?t.filter((function(n){return n.get("name").includes(e)||String(n.get("id")).includes(e)||a("pokemonNames.".concat(n.get("name"))).includes(e)})):t}),[N,t,a]),j=Object(r.useCallback)((function(e){var n=e.id;c.push("".concat(k.a.DETAIL,"?id=").concat(n))}),[c]),O=Object(r.useCallback)((function(){var e=t.size;e<b.a&&(m(!0),n({offset:e,limit:b.a},(function(){m(!1)})))}),[t,n]),w=Object(r.useCallback)((function(e){var n=e.target.value;h(n)}),[]);return Object(r.useEffect)((function(){O()}),[]),s.a.createElement("div",{className:"pokedex-list"},s.a.createElement("div",{className:"search-field"},s.a.createElement("label",{htmlFor:"keyword"},s.a.createElement("img",{src:g.d,alt:"search-icon"})),s.a.createElement("input",{id:"keyword",className:"keyword-input",value:N,onChange:w,placeholder:a("common.search_placeholder")})),s.a.createElement("div",{className:"content"},E.map((function(e){var n=e.toJS(),t=n.name,c=n.id;return s.a.createElement("div",{key:c,className:"pokemon",onClick:function(){j({id:c,name:t})}},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(c.toString().padStart(3,"0"),".png"),alt:t})),s.a.createElement("div",{className:"info"},s.a.createElement(v.a,{id:c}),s.a.createElement("span",{className:"number"},c.toString().padStart(3,"0")),s.a.createElement("h3",{className:"name"},a("pokemonNames.".concat(t)))))}))),l&&a("common.loading"))};y.propTypes={getPokemonNames:l.a.func,pokemonNames:p.a.list};var N=y,h=(t(97),N),E=Object(a.b)((function(e){return{pokemonNames:e.pokemon.pokemonNames}}),{getPokemonNames:c.b})(h);n.default=E},62:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u})),t.d(n,"c",(function(){return l}));var a=t(67),c=t.n(a),o=t(63),i=t.n(o),r=t(15),s=function(e,n){return function(t){var a=i.a.stringify(e);c.a.get("https://pokeapi.co/api/v2/pokemon?".concat(a)).then((function(e){var n=e.data.results.map((function(e,n){return{name:e.name,id:n+1}}));t({type:r.b,payload:n})})).finally((function(){n()}))}},u=function(e,n){var t=e.id;return function(e){Promise.all([c.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t)),c.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(t))]).then((function(n){var t,a,o,i,s=(null===(t=n[0])||void 0===t?void 0:t.data)||{},u=(null===(a=n[1])||void 0===a?void 0:a.data)||{},l=null==s||null===(o=s.abilities[0])||void 0===o||null===(i=o.ability)||void 0===i?void 0:i.url;c.a.get(l).then((function(n){var t=n.data,a=t.names,c=t.flavor_text_entries;e({type:r.a,payload:{basicInfo:s,species:u,abilities:{label:a,desc:c}}})}))})).finally((function(){n()}))}},l=function(e){return function(n,t){var a=t().pokemon.myPokeIds,c=a.includes(e)?a.filter((function(n){return n!==e})):a.push(e);n({type:r.c,payload:c})}}},64:function(e,n,t){},65:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=151},66:function(e,n,t){"use strict";var a=t(0),c=t.n(a),o=t(23),i=t(24),r=t(62),s=t(11),u=function(e){var n=e.id,t=String(n),u=Object(o.c)(),l=Object(o.d)((function(e){return e.pokemon.myPokeIds})),m=Object(a.useCallback)((function(e){e.stopPropagation(),u(Object(r.c)(t))}),[u,t]);return c.a.createElement("img",{className:Object(i.a)("save-my-poke-btn",{active:l.includes(t)}),alt:"save-my-poke-btn",src:l.includes(t)?s.c:s.g,onClick:function(e){m(e,t)}})};t(64),n.a=u},97:function(e,n,t){}}]);