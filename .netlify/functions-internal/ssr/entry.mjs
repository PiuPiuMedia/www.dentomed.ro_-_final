import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Iaoc1It2.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_p5-Ergsq.mjs');
const _page1 = () => import('./chunks/index_DuTECByA.mjs');
const _page2 = () => import('./chunks/contact_ibuYcrWJ.mjs');
const _page3 = () => import('./chunks/despre_SbAgEJzo.mjs');
const _page4 = () => import('./chunks/dsd_weQw0d-4.mjs');
const _page5 = () => import('./chunks/preturi_-r30GtWd.mjs');
const _page6 = () => import('./chunks/servicii_6VldLd65.mjs');
const _page7 = () => import('./chunks/tratamente-laser_zTh1h7Vy.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/despre.astro", _page3],
    ["src/pages/dsd.astro", _page4],
    ["src/pages/preturi.astro", _page5],
    ["src/pages/servicii.astro", _page6],
    ["src/pages/tratamente-laser.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "93854311-1185-430e-90ab-e130b5d5fa67"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
