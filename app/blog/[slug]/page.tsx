import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { compileMDXContent } from '@/lib/mdx'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  try {
    const { source } = getPostBySlug(slug)
    const content = await compileMDXContent(source)

    return (
      <article
        className="
        prose prose-slate
        dark:prose-invert
        max-w-none
        prose-h1:mt-12
        prose-h2:mt-10
        prose-h3:mt-8
        prose-p:leading-7
        prose-pre:rounded-xl
        prose-code:text-blue-600
        dark:prose-code:text-blue-400
      "
      >
        {content}
      </article>

    )
  } catch {
    notFound()
  }
}
