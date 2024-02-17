import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_K2bR2KYz.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".cta-dark[data-astro-cid-5blmo7yk] nav-cta[data-astro-cid-5blmo7yk] w-button[data-astro-cid-5blmo7yk]{padding-left:40px}.submenu[data-astro-cid-5blmo7yk]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px #0003;z-index:1}@media (min-width: 769px){.nav-link[data-astro-cid-5blmo7yk].w-nav-link:hover .submenu[data-astro-cid-5blmo7yk],.nav-link[data-astro-cid-5blmo7yk].w-nav-link:focus-within .submenu[data-astro-cid-5blmo7yk]{display:block}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".cta-dark[data-astro-cid-5blmo7yk] nav-cta[data-astro-cid-5blmo7yk] w-button[data-astro-cid-5blmo7yk]{padding-left:40px}.submenu[data-astro-cid-5blmo7yk]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px #0003;z-index:1}@media (min-width: 769px){.nav-link[data-astro-cid-5blmo7yk].w-nav-link:hover .submenu[data-astro-cid-5blmo7yk],.nav-link[data-astro-cid-5blmo7yk].w-nav-link:focus-within .submenu[data-astro-cid-5blmo7yk]{display:block}}\n.map-container[data-astro-cid-l3oj3rjo]{position:relative;width:100%;height:100vh;overflow:hidden}iframe[data-astro-cid-l3oj3rjo]{position:absolute;top:0;left:0;width:100%;height:100%}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".cta-dark[data-astro-cid-5blmo7yk] nav-cta[data-astro-cid-5blmo7yk] w-button[data-astro-cid-5blmo7yk]{padding-left:40px}.submenu[data-astro-cid-5blmo7yk]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px #0003;z-index:1}@media (min-width: 769px){.nav-link[data-astro-cid-5blmo7yk].w-nav-link:hover .submenu[data-astro-cid-5blmo7yk],.nav-link[data-astro-cid-5blmo7yk].w-nav-link:focus-within .submenu[data-astro-cid-5blmo7yk]{display:block}}\n"}],"routeData":{"route":"/despre","isIndex":false,"type":"page","pattern":"^\\/despre\\/?$","segments":[[{"content":"despre","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/despre.astro","pathname":"/despre","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".cta-dark[data-astro-cid-5blmo7yk] nav-cta[data-astro-cid-5blmo7yk] w-button[data-astro-cid-5blmo7yk]{padding-left:40px}.submenu[data-astro-cid-5blmo7yk]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px #0003;z-index:1}@media (min-width: 769px){.nav-link[data-astro-cid-5blmo7yk].w-nav-link:hover .submenu[data-astro-cid-5blmo7yk],.nav-link[data-astro-cid-5blmo7yk].w-nav-link:focus-within .submenu[data-astro-cid-5blmo7yk]{display:block}}\n"},{"type":"external","src":"/_astro/dsd.evic_FhG.css"}],"routeData":{"route":"/dsd","isIndex":false,"type":"page","pattern":"^\\/dsd\\/?$","segments":[[{"content":"dsd","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dsd.astro","pathname":"/dsd","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".cta-dark[data-astro-cid-5blmo7yk] nav-cta[data-astro-cid-5blmo7yk] w-button[data-astro-cid-5blmo7yk]{padding-left:40px}.submenu[data-astro-cid-5blmo7yk]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px #0003;z-index:1}@media (min-width: 769px){.nav-link[data-astro-cid-5blmo7yk].w-nav-link:hover .submenu[data-astro-cid-5blmo7yk],.nav-link[data-astro-cid-5blmo7yk].w-nav-link:focus-within .submenu[data-astro-cid-5blmo7yk]{display:block}}\n"}],"routeData":{"route":"/preturi","isIndex":false,"type":"page","pattern":"^\\/preturi\\/?$","segments":[[{"content":"preturi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/preturi.astro","pathname":"/preturi","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".cta-dark[data-astro-cid-5blmo7yk] nav-cta[data-astro-cid-5blmo7yk] w-button[data-astro-cid-5blmo7yk]{padding-left:40px}.submenu[data-astro-cid-5blmo7yk]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px #0003;z-index:1}@media (min-width: 769px){.nav-link[data-astro-cid-5blmo7yk].w-nav-link:hover .submenu[data-astro-cid-5blmo7yk],.nav-link[data-astro-cid-5blmo7yk].w-nav-link:focus-within .submenu[data-astro-cid-5blmo7yk]{display:block}}\n@import\"https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css\";@import\"https://fonts.googleapis.com/css2?family=Exo+2:wght@300;500;700&display=swap\";[data-astro-cid-fladuhz2],[data-astro-cid-fladuhz2]:before,[data-astro-cid-fladuhz2]:after{margin:0;padding:0;box-sizing:border-box}body{--color: rgba(30, 30, 30);--bgColor: rgba(245, 245, 245);min-height:100vh;display:grid;align-content:center;gap:2rem;padding:2rem;font-family:\"Exo 2\",sans-serif;color:var(--color);background:var(--bgColor)}h1[data-astro-cid-fladuhz2]{text-align:center}ol[data-astro-cid-fladuhz2]{width:min(60rem,90%);margin-inline:auto;display:flex;justify-content:center;flex-wrap:wrap;gap:2rem;list-style:none;counter-reset:stepnr}ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2] .icon[data-astro-cid-fladuhz2]{font-size:2rem;color:var(--accent-color);text-align:center;margin-bottom:1rem}li[data-astro-cid-fladuhz2]:nth-child(6n+1){--accent-color: #b8df4e }li[data-astro-cid-fladuhz2]:nth-child(6n+2){--accent-color: #4cbccb }li[data-astro-cid-fladuhz2]:nth-child(6n+3){--accent-color: #7197d3 }li[data-astro-cid-fladuhz2]:nth-child(6n+4){--accent-color: #ae78cb }li[data-astro-cid-fladuhz2]:nth-child(6n+5){--accent-color: #7dc7a4 }li[data-astro-cid-fladuhz2]:nth-child(6n+6){--accent-color: #f078c2 }ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2]{counter-increment:stepnr;width:18rem;--borderS: 2rem;aspect-ratio:1;display:flex;flex-direction:column;justify-content:center;padding-left:calc(var(--borderS) + 2rem);position:relative}ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2]:before,ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2]:after{inset:0;position:absolute;border-radius:50%;border:var(--borderS) solid var(--bgColor);line-height:1.1}ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2]:before{content:counter(stepnr);color:var(--accent-color);padding-left:10rem;font-size:12rem;font-weight:700;overflow:hidden}ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2]:after{content:\"\";filter:drop-shadow(-.25rem .25rem .0675rem rgba(0,0,0,.75)) blur(5px)}ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2]>[data-astro-cid-fladuhz2]{width:7.5rem}ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2] .icon[data-astro-cid-fladuhz2]{font-size:2rem;color:var(--accent-color);text-align:center}ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2] .title[data-astro-cid-fladuhz2]{font-size:2rem;font-weight:500}ol[data-astro-cid-fladuhz2] li[data-astro-cid-fladuhz2] .descr[data-astro-cid-fladuhz2]{font-size:.8rem;font-weight:300}.credits[data-astro-cid-fladuhz2]{margin-top:2rem;text-align:right}.credits[data-astro-cid-fladuhz2] a[data-astro-cid-fladuhz2]{color:var(--color)}\n"}],"routeData":{"route":"/servicii","isIndex":false,"type":"page","pattern":"^\\/servicii\\/?$","segments":[[{"content":"servicii","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicii.astro","pathname":"/servicii","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".cta-dark[data-astro-cid-5blmo7yk] nav-cta[data-astro-cid-5blmo7yk] w-button[data-astro-cid-5blmo7yk]{padding-left:40px}.submenu[data-astro-cid-5blmo7yk]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px #0003;z-index:1}@media (min-width: 769px){.nav-link[data-astro-cid-5blmo7yk].w-nav-link:hover .submenu[data-astro-cid-5blmo7yk],.nav-link[data-astro-cid-5blmo7yk].w-nav-link:focus-within .submenu[data-astro-cid-5blmo7yk]{display:block}}\n"}],"routeData":{"route":"/tratamente-laser","isIndex":false,"type":"page","pattern":"^\\/tratamente-laser\\/?$","segments":[[{"content":"tratamente-laser","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tratamente-laser.astro","pathname":"/tratamente-laser","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/workspaces/www.dentomed.ro_-_final/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/workspaces/www.dentomed.ro_-_final/src/pages/despre.astro",{"propagation":"none","containsHead":true}],["/workspaces/www.dentomed.ro_-_final/src/pages/dsd.astro",{"propagation":"none","containsHead":true}],["/workspaces/www.dentomed.ro_-_final/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/workspaces/www.dentomed.ro_-_final/src/pages/preturi.astro",{"propagation":"none","containsHead":true}],["/workspaces/www.dentomed.ro_-_final/src/pages/servicii.astro",{"propagation":"none","containsHead":true}],["/workspaces/www.dentomed.ro_-_final/src/pages/tratamente-laser.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/despre.astro":"chunks/pages/despre_fFhBAR-D.mjs","/src/pages/dsd.astro":"chunks/pages/dsd_rxuBU5SZ.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_AqvGX_zN.mjs","/src/pages/index.astro":"chunks/pages/index_sFi_y4hJ.mjs","/src/pages/preturi.astro":"chunks/pages/preturi_Q2i6oaZT.mjs","/src/pages/servicii.astro":"chunks/pages/servicii_G64n0AEu.mjs","/src/pages/tratamente-laser.astro":"chunks/pages/tratamente-laser_y1b_Ljz6.mjs","\u0000@astrojs-manifest":"manifest_LH3DxdfT.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_p5-Ergsq.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DuTECByA.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_ibuYcrWJ.mjs","\u0000@astro-page:src/pages/despre@_@astro":"chunks/despre_SbAgEJzo.mjs","\u0000@astro-page:src/pages/dsd@_@astro":"chunks/dsd_6L6hloSy.mjs","\u0000@astro-page:src/pages/preturi@_@astro":"chunks/preturi_-r30GtWd.mjs","\u0000@astro-page:src/pages/servicii@_@astro":"chunks/servicii_6VldLd65.mjs","\u0000@astro-page:src/pages/tratamente-laser@_@astro":"chunks/tratamente-laser_zTh1h7Vy.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/dsd.evic_FhG.css","/Tel1.png","/Tel2.png","/WhatsAppButtonWhiteLarge1.png","/WhatsAppButtonWhiteLarge2.png","/dinti3.PNG","/dsd3.PNG","/e-max.jpeg","/estetica3.PNG","/fatete3.PNG","/implant3.PNG","/laser3.PNG","/laser31.jpg","/odo3.PNG","/orto3.PNG","/paro3.PNG","/prot3.PNG","/receptie.png","/video/3dscan.mp4","/video/dentomed-dsd.mp4","/video/smile.mp4","/images/DSD01.png","/images/dsd4.jpg","/images/dsdcard.png","/images/dsdsmile3.jpg","/images/logo-white.svg","/images/logo.svg"],"buildFormat":"directory"});

export { manifest };
