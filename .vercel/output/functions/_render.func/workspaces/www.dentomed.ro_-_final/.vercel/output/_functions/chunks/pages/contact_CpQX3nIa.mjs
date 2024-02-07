import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead, m as maybeRenderHead, f as renderComponent } from '../astro_Fhomfo5j.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                            */
/* empty css                            */

const $$Astro$4 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Head;
  return renderTemplate`<head><meta charset="UTF-8"><title>Dentomed</title><meta name="description" content="Clinica DentoMed feră tratamente dentare de înaltă calitate, restaurări, extracții, protezare, igienă orală, radiografii dentare, precum și îngrijire dentară"><meta property="og:title" content="DentoMed"><meta property="og:description" content="Clinica DentoMed feră tratamente dentare de înaltă calitate, restaurări, extracții, protezare, igienă orală, radiografii dentare, precum și îngrijire dentară"><meta property="twitter:title" content="DentoMed"><meta property="twitter:description" content="Clinica DentoMed feră tratamente dentare de înaltă calitate, restaurări, extracții, protezare, igienă orală, radiografii dentare, precum și îngrijire dentară"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"><link rel="stylesheet" href="https://assets-global.website-files.com/653b69fdc9577766a6574c93/css/saulkrastu-zobarstnieciba.webflow.fbe7a0602.min.css"><!-- Favicon --><link rel="icon" href="../images/logo-white.svg" type="../images/svg+xml"><!-- Favicon --><link rel="shortcut icon" href="../images/logo.svg" type="../image/x-icon"><link rel="apple-touch-icon" href="../images/logo.svg">${renderHead()}</head>`;
}, "/workspaces/www.dentomed.ro_-_final/src/components/Head.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<div data-animation="default" class="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="3952a8c0-04d3-aaa1-54fd-2cb892c097fa" role="banner" data-no-scroll="1" data-duration="400"> <div class="container-navbar"> <div class="left-nav-bar"> <a href="/" aria-current="page" class="link-brand-navbar w-inline-block w--current"> <img src="/images/logo.svg" loading="lazy" width="Auto" height="30" alt="" class="image-brand-nav"> <div class="brand-navbar">Clinica DentoMed</div> </a> </div> <div class="right-navbar"> <nav role="navigation" class="nav-menu w-nav-menu"> <a href="/index" class="nav-link w-nav-link">Acasa</a> <a href="/tratamente-laser" class="nav-link w-nav-link">Tratamente Laser</a> <a href="/despre" class="nav-link w-nav-link">Despre</a> <a href="/servicii" class="nav-link w-nav-link">Servicii</a> <a href="/preturi" class="nav-link w-nav-link">Preturi</a> <a href="/contact" class="nav-link w-nav-link">Contact</a> <a href="tel:+40787389952" class="cta-dark nav-cta w-button"> <span class="font-icon white margin-right"></span>
Suna pentru Programare
</a> </nav> <div class="menu-button w-nav-button"> <div class="wrap-menu-button"> <div class="line-menu first-line"></div> <div class="line-menu second-line"></div> </div> </div> </div> </div> </div>`;
}, "/workspaces/www.dentomed.ro_-_final/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<section class="section rounded-black footer-section"> <div class="w-layout-blockcontainer main-container w-container"> <div class="top-footer hide-on-desktop"> <a href="/" aria-current="page" class="brand-link-footer w-inline-block w--current"> <img src="/images/logo-white.svg" loading="lazy" alt="Clinica Stomotologica DentoMed Logo" height="80"> <div class="brand-footer">
Clinica <br>DentoMed
</div> </a> <div class="right-footer"> <a href="tel:40787389952" class="cta-white footer-cta w-button"> <span class="font-icon margin-right"></span>
Programati o vizita
</a> </div> </div> <div class="divider-top-footer hide-on-desktop"></div> <div class="second-footer"> <a href="/" aria-current="page" class="brand-link-footer hide-on-tablet w-inline-block w--current"> <img src="/images/logo-white.svg" loading="lazy" alt="" height="80"> <div class="brand-footer">Clinica DentoMed</div> </a> <div class="hide-on-tablet"></div> <div class="column-footer-links"> <a href="/acasa" class="link-footer">Acasa</a> <a href="/tratamente-laser" class="link-footer">Tratamente Laser</a> <a href="/despre" class="link-footer">Despre</a> <a href="/preturi" class="link-footer">Preturi</a> <a href="/servicii" class="link-footer">Servicii</a> <a href="/contact" class="link-footer">Contact</a> </div> <div class="column-footer-links"> <div class="link-footer">
luni - sambata<br>10:00 - 22:00
</div> <div class="link-footer">
Vatra Luminoasa 2-24, bloc D6, <br>scara B, apartament 50, Parter, <br>Bucuresti, Romania
</div> <div class="link-footer">
Nr. inreg instituției medicale <br>12345678912346
</div> </div> </div> <div class="divider-bottom-footer"></div> <div class="wrap-legal-footer"> <div class="text-legal-footer">2024 © DentoMed</div> <a href="/politica" class="text-legal-footer">politica noastra de confidențialitate</a> </div> </div> </section>`;
}, "/workspaces/www.dentomed.ro_-_final/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$GoogleMap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoogleMap;
  return renderTemplate`${maybeRenderHead()}<div class="map-container" data-astro-cid-l3oj3rjo> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424.3923851208963!2d26.137292199999994!3d44.43757699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fed59c81eb81%3A0x54f295d5cc843656!2sDentoMed!5e0!3m2!1sen!2sro!4v1707169890065!5m2!1sen!2sro" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%" height="100%" data-astro-cid-l3oj3rjo></iframe> </div> `;
}, "/workspaces/www.dentomed.ro_-_final/src/components/GoogleMap.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate(_a || (_a = __template(['<!-- Last Published: Thu Jan 11 2024 12:59:15 GMT+0000 (Coordinated Universal Time) --><html data-wf-domain="ai-gpt-trader.com" data-wf-page="654111f3c02358a5b7524072" data-wf-site="653b69fdc9577766a6574c93" lang="ro"> ', "", "<body> ", ' <section class="section"> <div class="w-layout-blockcontainer main-container w-container"> <div data-w-id="33167c1c-06db-a6fa-50da-d3c7b7fec04b" style="opacity:1" class="title-wrap-contact"> <h1 class="mega-h1">Contact</h1> </div> <div data-w-id="33167c1c-06db-a6fa-50da-d3c7b7fec04e" style="opacity:1" class="w-layout-grid grid-contact-halves"> <div id="w-node-_33167c1c-06db-a6fa-50da-d3c7b7fec04f-aa2c2386"> <div id="w-node-_33167c1c-06db-a6fa-50da-d3c7b7fec050-aa2c2386" data-w-id="33167c1c-06db-a6fa-50da-d3c7b7fec050" style="opacity:1" class="title-contact-form"> <div data-w-id="06d09c9f-3e01-4022-61d1-5b3a50cb1bc0" style="opacity:1" class="w-richtext"> <h3>Informatii despre vizita</h3> <p>Pentru a v\u0103 programa la o vizit\u0103, v\u0103 rug\u0103m s\u0103 ne contacta\u021Bi telefonic folosind num\u0103rul furnizat \u0219i s\u0103 conveni\u021Bi \xEEn prealabil o \xEEnt\xE2lnire. F\u0103r\u0103 o programare prealabil\u0103, medicii no\u0219tri denti\u0219ti nu vor putea s\u0103 primeasc\u0103 pacien\u021Bi. \xCEn cabinetul nostru dentar, nu se realizeaz\u0103 program\u0103ri pe loc.</p> <blockquote>Dac\u0103 nu pute\u021Bi participa la vizita programat\u0103, v\u0103 rug\u0103m s\u0103 ne informa\u021Bi cu cel pu\u021Bin 24 de ore \xEEnainte.\n</blockquote> <p>La Clinica DentoMed, dep\u0103\u0219im a\u0219tept\u0103rile pentru a oferi fiec\u0103rui pacient o experien\u021B\u0103 de neuitat. Ne m\xE2ndrim cu un mediu prietenos \u0219i o abordare personalizat\u0103, asigur\xE2ndu-v\u0103 c\u0103 fiecare vizit\u0103 este confortabil\u0103 \u0219i, mai presus de toate, eficienta.</p> <p>\u200D</p> </div> </div> <div data-w-id="33167c1c-06db-a6fa-50da-d3c7b7fec055" style="opacity:1" class="rick-text-contacts w-richtext"> <h3>Tehnologie de V\xE2rf \u0219i Profesionalism\n</h3> <p>Utiliz\u0103m cele mai avansate tehnologii din domeniul dentar pentru a v\u0103 oferi tratamente precise \u0219i minim invazive. Echipa noastr\u0103 de speciali\u0219ti este dedicat\u0103 excelen\u021Bei \xEEn toate aspectele \xEEngrijirii dentare, de la consultan\u021B\u0103 preventiv\u0103 \u0219i p\xE2n\u0103 la proceduri complexe de reabilitare oral\u0103.</p> <p>\u200D</p> <h3>Pasiunea Noastr\u0103, Z\xE2mbetul Dumneavoastr\u0103</h3> <p>Misiunea noastr\u0103 este s\u0103 v\u0103 vedem plec\xE2nd cu un z\xE2mbet larg \u0219i s\u0103n\u0103tos. La Clinica DentoMed, fiecare pacient este tratat cu cea mai mare grij\u0103 \u0219i respect, promi\u021B\xE2ndu-v\u0103 nu doar tratamente dentare de excep\u021Bie, ci \u0219i o experien\u021B\u0103 care v\u0103 va face s\u0103 reveni\u021Bi.</p> <p>Vizita\u021Bi-ne ast\u0103zi pentru a descoperi diferen\u021Ba pe care o poate face \xEEngrijirea dentar\u0103 de calitate superioar\u0103. Suntem aici pentru a v\u0103 transforma z\xE2mbetul \u0219i a v\u0103 \xEEmbun\u0103t\u0103\u021Bi via\u021Ba!</p> <p>Pentru un Z\xE2mbet Str\u0103lucitor \u0219i o S\u0103n\u0103tate Oral\u0103 Impecabil\u0103, Alege\u021Bi Clinica Dentomed</p> <p>\u200D</p> </div> </div> <div id="w-node-_33167c1c-06db-a6fa-50da-d3c7b7fec07a-aa2c2386" data-w-id="33167c1c-06db-a6fa-50da-d3c7b7fec07a" style="opacity:1" class="right-contact"> <div class="top-contact"> <a href="#" class="text-address-contact">Programati o vizita</a> <a href="tel:+40787389952" class="text-address-contact">+40 787 389 952</a> <a href="tel:+40787681941" class="text-address-contact">+40 787 681 941</a> </div> <div class="divider-contact"></div> <div class="middle-contact"> <div class="text-address-contact">\nAdresa<br> <br>\nVatra Luminoasa 2-24, bloc D6,<br>\nscara B, apartament 50, Parter,<br>\nBucuresti\n</div> </div> <div class="divider-contact"></div> <div class="bottom-contact"> <div class="text-address-contact">\nProgram<br> <br>\nluni - sambata<br>10:00 \u2013 22:00\n</div> </div> </div> </div> </div> </section> ', " ", ' <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=653b69fdc9577766a6574c93" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"><\/script> <script src="https://assets-global.website-files.com/653b69fdc9577766a6574c93/js/webflow.68021bc23.js" type="text/javascript"><\/script> </body> </html>'])), renderComponent($$result, "Head", $$Head, {}), maybeRenderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "GoogleMap", $$GoogleMap, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "/workspaces/www.dentomed.ro_-_final/src/pages/contact.astro", void 0);

const $$file = "/workspaces/www.dentomed.ro_-_final/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Footer as $, $$Navbar as a, $$Head as b, contact as c };
