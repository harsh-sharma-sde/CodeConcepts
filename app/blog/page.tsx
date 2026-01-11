import { getAllPosts } from '@/lib/posts'
import ChapterCard from '@/components/ChapterCard'

export default function BlogPage() {
  const posts = getAllPosts().sort((a, b) => a.order - b.order)

  return (
    <section className="py-6 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        All Chapters
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <ChapterCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  )
}
