(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{159:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(97),i=a(170);t.default=function(){return n.a.createElement(o.default,null,n.a.createElement(i.a,{title:"404: Not found"}),n.a.createElement("h1",null,"NOT FOUND"),n.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},168:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),c=a(40),s=a.n(c);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return c.withPrefix});a(169);var l=n.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,r=e.query,o=e.render,i=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,i&&o(i),!i&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,o=e.children;return n.a.createElement(l.Consumer,null,function(e){return n.a.createElement(d,{data:t,query:a,render:r||o,staticQueryData:e})})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},169:function(e,t,a){var r;e.exports=(r=a(172))&&r.default||r},170:function(e,t,a){"use strict";var r=a(171),n=a(0),o=a.n(n),i=a(4),c=a.n(i),s=a(177),l=a.n(s),d=a(168);function u(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title;return o.a.createElement(d.b,{query:p,render:function(e){var r=e.site.siteMetadata.keywords.general,s=e.site.siteMetadata.keywords[a],d=e.site.siteMetadata.description[a],u=t||d;return i=i.concat(r).concat(s),c=c||e.site.siteMetadata.title[a],o.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:url",content:e.site.siteMetadata.url},{property:"og:description",content:u},{property:"og:type",content:"website"},{property:"og:site_name",content:c},{name:"og:image",content:"MISSING"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u},{name:"twitter:image",content:"MISSING"},{name:"robots",content:"index, follow"},{name:"viewport",content:"width=device-width,initial-scale=1"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)},o.a.createElement("link",{rel:"canonical",href:"https://sag-dev.com"}))},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string},t.a=u;var p="2722393399"},171:function(e){e.exports={data:{site:{siteMetadata:{title:{en:"Sergio Abreu García | Software developer",es:"Sergio Abreu García | Desarrollador de software",gl:"Sergio Abreu García | Desarrollador de software"},description:{en:"Portfolio website of Sergio Abreu García, software developer.",es:"Página portfolio de Sergio Abreu García, desarrollador de software",gl:"Páxina portfolio de Sergio Abreu García, desarrollador de software"},author:"Sergio Abreu García",url:"https://sag-dev.com",keywords:{general:["sergio","abreu","garcía","software","blockchain","portfolio","frontend","backend","cv"],en:["english","developer"],gl:["galego","desarrollador"],es:["español","desarrollador"]}}}}}},172:function(e,t,a){"use strict";a.r(t);a(41);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),c=a(66),s=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-404-js-3928072ade8683e479b2.js.map