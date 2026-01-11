import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'

export async function compileMDXContent(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true, // Recommended since you use frontmatter
      mdxOptions: {
        remarkPlugins: [
          remarkGfm, 
          remarkMath // Parses the $O(1)$ symbols
        ],
        rehypePlugins: [
          rehypeHighlight, 
          rehypeKatex // Renders the math into HTML
        ],
      },
    },
  })

  return content
}