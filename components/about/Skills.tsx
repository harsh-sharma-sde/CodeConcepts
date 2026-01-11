export default function Skills() {
  return (
    <section className="py-12 sm:py-16 border-t">
      <h2 className="text-2xl font-semibold mb-8">Tech Stack</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <SkillBlock
          title="Frontend"
          items="React, Next.js, Angular, TypeScript, Tailwind CSS"
        />
        <SkillBlock
          title="Backend"
          items="Node.js, Express, Python, Flask, REST APIs"
        />
        <SkillBlock
          title="Databases"
          items="MongoDB, PostgreSQL, MySQL, Redis"
        />
        <SkillBlock
          title="Cloud & DevOps"
          items="AWS (EC2, S3, Lambda, ECS), Docker, CI/CD"
        />
      </div>
    </section>
  )
}

function SkillBlock({ title, items }: { title: string; items: string }) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{items}</p>
    </div>
  )
}
