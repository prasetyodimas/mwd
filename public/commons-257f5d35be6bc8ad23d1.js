"use strict";(self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5=self.webpackChunk_r_ichard_gatsby_starter_bootstrap_5||[]).push([[351],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return w},P:function(){return v},S:function(){return R},_:function(){return i},a:function(){return l},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],u=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(u,l({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,g);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var E;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],v=function(e){let{fallback:t}=e,a=i(e,b);return t?r.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(E=y.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const w=function(e){return r.createElement(r.Fragment,null,r.createElement(y,l({},e)),r.createElement("noscript",null,r.createElement(y,l({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=y.propTypes;const x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:s().object.isRequired,alt:x},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],_=new Set;let L,S;const T=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:m,onStartLoad:u,onLoad:p,onError:g}=e,h=i(e,k);const{width:f,height:y,layout:E}=n,b=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,E),{style:v,className:w}=b,x=i(b,C),N=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const O=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,f,y);return(0,r.useEffect)((()=>{L||(L=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return S=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(T);if(S&&_.has(T))return;let t,r;return L.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(l({isLoading:!0,isLoaded:_.has(T),image:n},h)),_.has(T)||(t=requestAnimationFrame((()=>{N.current&&(r=i(N.current,T,_,s,u,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(T)&&S&&(N.current.innerHTML=S(l({isLoading:_.has(T),isLoaded:_.has(T),image:n},h)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},x,{style:l({},v,s,{backgroundColor:c}),className:w+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));O.propTypes=N,O.displayName="GatsbyImage";const I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),A={src:s().string.isRequired,alt:x,width:q,height:q,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(P=O,function(e){let{src:t,__imageData:a,__error:n}=e,s=i(e,I);return n&&console.warn(n),a?r.createElement(P,l({image:a},s)):(console.warn("Image not loaded",t),null)});var P;R.displayName="StaticImage",R.propTypes=A},3544:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(1883),s=a(3723);var l=()=>r.createElement("header",null,r.createElement("div",{className:"top-header"},r.createElement("div",{className:"container-page block-table"},r.createElement("div",{className:"block-left"},r.createElement("div",{className:"block-table"},r.createElement("div",{className:"block-logo"},r.createElement("a",{href:"/"},r.createElement(s.S,{layout:"fixed",src:"../images/logo.png",width:236,height:36,quality:95,alt:"brand",loading:"lazy",__imageData:a(7931)}))),r.createElement("div",{className:"block-slogan"},r.createElement("p",null,"Asia Region global site")))),r.createElement("div",{className:"block-right"},r.createElement("div",null,r.createElement("div",{className:"block-table"},r.createElement("div",{className:"block-bars"},r.createElement("span",null)),r.createElement("div",{className:"block-menu"},r.createElement("nav",null,r.createElement("ul",{className:"level-1"},r.createElement("li",{className:"xxx home"},r.createElement("a",{href:"/",target:"_self",className:"home"},"Home")),r.createElement("li",{className:"xxx company"},r.createElement("a",{href:"/company/",target:"_self",className:"company"},"Company"),r.createElement("ul",{className:"sub-menu level-2"},r.createElement("li",{className:"xxx history"},r.createElement("a",{href:"/company/history/",target:"_self",className:"history"},"History")),r.createElement("li",{className:"xxx philosophy"},r.createElement("a",{href:"/company/philosophy/",target:"_self",className:"philosophy"},"Philosophy")),r.createElement("li",{className:"xxx glimpse"},r.createElement("a",{href:"/company/glimpse/",target:"_self",className:"glimpse"},"Glimpse")),r.createElement("li",{className:"xxx research"},r.createElement("a",{href:"/company/research/",target:"_self",className:"research"},"Research")),r.createElement("li",{className:"xxx footprint"},r.createElement("a",{href:"/company/footprint/",target:"_self",className:"footprint"},"Footprint"))))))),r.createElement("div",{className:"block-lang"})))))));const i=e=>{let{siteTitle:t}=e;return r.createElement(l,null)};i.defaultProps={siteTitle:""};var o=i;var c=e=>{var t;let{children:a}=e;const s=(0,n.useStaticQuery)("3649515864");return r.createElement("div",{className:"container p-0"},r.createElement(o,{siteTitle:(null===(t=s.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("main",null,a))}},1707:function(e,t,a){a.d(t,{p:function(){return s}});var r=a(7294),n=a(1883);const s=e=>{let{title:t,description:a,pathname:s,children:l}=e;const{title:i,description:o,siteUrl:c}=(0,n.useStaticQuery)("63159454").site.siteMetadata,d={title:t||i,description:a||o,url:""+c+(s||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,d.title),r.createElement("meta",{name:"description",content:d.description}),r.createElement("meta",{name:"twitter:title",content:d.title}),r.createElement("meta",{name:"twitter:url",content:d.url}),r.createElement("meta",{name:"twitter:description",content:d.description}),l)}},7931:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#383848","images":{"fallback":{"src":"/static/d020296658bd509ae30142929d782f53/740cd/logo.png","srcSet":"/static/d020296658bd509ae30142929d782f53/740cd/logo.png 236w","sizes":"236px"},"sources":[{"srcSet":"/static/d020296658bd509ae30142929d782f53/0bea4/logo.webp 236w","type":"image/webp","sizes":"236px"}]},"width":236,"height":36}')}}]);
//# sourceMappingURL=commons-257f5d35be6bc8ad23d1.js.map