/* empty css                                     */
import { c as createComponent, a as createAstro, f as renderComponent, e as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_xKypHrCT.mjs';
import 'kleur/colors';
import { a as getCollection } from '../../chunks/_astro_content_jZOFgtci.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CpBBRv8o.mjs';
import { t as tagMap } from '../../chunks/tagMap_BpbKxcov.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allArticles = await getCollection("articles");
  const allTags = Array.from(
    new Set(allArticles.flatMap((article) => article.data.tags ?? []))
  );
  return allTags.map((tag) => ({
    params: { tag }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const allArticles = await getCollection("articles");
  const articles = allArticles.filter(
    (article) => article.data.tags?.includes(tag)
  );
  const tagLabel = tagMap[tag] ?? tag;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `タグ: ${tagLabel}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[48rem] mx-auto"> <h1 class="text-2xl font-bold text-gray-800 mb-6">タグ: ${tagLabel}</h1> ${articles.length > 0 ? renderTemplate`<ul class="space-y-6"> ${articles.map((article) => renderTemplate`<li class="border-b pb-4"> <a${addAttribute(`${"/toriscript-site/"}articles/${article.slug}`, "href")} class="block hover:underline"> <h2 class="text-xl font-semibold">${article.data.title}</h2> ${article.data.description && renderTemplate`<p class="text-sm text-gray-500">${article.data.description}</p>`} </a> </li>`)} </ul>` : renderTemplate`<p class="text-gray-500">記事が見つかりませんでした。</p>`} </div> ` })}`;
}, "C:/Users/rei/Documents/tori/new tori/src/pages/tag/[tag].astro", void 0);
const $$file = "C:/Users/rei/Documents/tori/new tori/src/pages/tag/[tag].astro";
const $$url = "/toriscript-site/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
