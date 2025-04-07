import { c as createComponent, a as createAstro, e as renderTemplate, d as renderSlot, b as addAttribute, r as renderHead, g as renderScript } from './astro/server_xKypHrCT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="ja"> <head><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><!-- ✅ グローバルCSS --><!-- ✅ Google アナリティクス（GA4） --><script async src="https://www.googletagmanager.com/gtag/js?id=G-147344458"></script>', '<!-- ✅ Google AdSense --><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2685020883138124" crossorigin="anonymous"></script>', '</head> <body class="font-sans text-gray-800 bg-white"> <header class="py-8"> <!-- ✅ ロゴ --> <div class="text-center mt-6 mb-2"> <img', ' alt="Tori Script ロゴ" class="h-20 mx-auto"> </div> <!-- ✅ 本文 --> <main class="max-w-7xl mx-auto flex px-4 py-8 gap-8"> <!-- メイン --> <div class="flex-1 max-w-[48rem]"> ', " ", ' </div> <!-- サイドバー --> <aside class="hidden lg:block w-[20rem]"> ', " </aside> </main> </header></body></html>"])), title, renderScript($$result, "C:/Users/rei/Documents/tori/new tori/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), addAttribute(`${"/toriscript-site/"}images/tori-logo2.png`, "src"), renderSlot($$result, $$slots["main"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["sidebar"]));
}, "C:/Users/rei/Documents/tori/new tori/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
