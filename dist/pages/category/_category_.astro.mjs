/* empty css                                     */
import { c as createComponent, a as createAstro, f as renderComponent, e as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_xKypHrCT.mjs';
import 'kleur/colors';
import { a as getCollection } from '../../chunks/_astro_content_jZOFgtci.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CpBBRv8o.mjs';
import { c as categoryMap } from '../../chunks/categoryMap_CPiG5rlq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allArticles = await getCollection("articles");
  const uniqueSlugs = new Set(
    allArticles.map((article) => {
      const id = article.data.category;
      return categoryMap[id]?.slug;
    }).filter(Boolean)
  );
  return Array.from(uniqueSlugs).map((slug) => ({
    params: { category: slug }
  }));
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const allArticles = await getCollection("articles");
  const articles = allArticles.filter(
    (article) => categoryMap[article.data.category]?.slug === category
  );
  const categoryLabel = categoryMap[allArticles.find((a) => categoryMap[a.data.category]?.slug === category)?.data.category]?.label;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${categoryLabel} の記事一覧` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[48rem] mx-auto"> <h1 class="text-2xl font-bold mb-6 text-center text-[#4a4a4a]"> ${categoryLabel} の記事一覧
</h1> <ul class="space-y-6"> ${articles.map((article) => renderTemplate`<li class="border-b pb-4"> <a${addAttribute(`${"/toriscript-site/"}articles/${article.slug}`, "href")} class="block hover:underline"> <h2 class="text-xl font-semibold">${article.data.title}</h2> ${article.data.description && renderTemplate`<p class="text-sm text-gray-500">${article.data.description}</p>`} </a> </li>`)} </ul> </div> ` })}`;
}, "C:/Users/rei/Documents/tori/new tori/src/pages/category/[category].astro", void 0);
const $$file = "C:/Users/rei/Documents/tori/new tori/src/pages/category/[category].astro";
const $$url = "/toriscript-site/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
