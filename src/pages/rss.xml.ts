// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('articles');

  return rss({
    title: 'ToriScript',
    description: '脚本・映画・考察のエンタメ雑記',
    site: 'https://toriscript.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.intro,
      link: `/articles/${post.slug}/`,
    })),
    stylesheet: '/rss.xsl', // optional
  });
}
