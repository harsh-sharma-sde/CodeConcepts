import Image from 'next/image'
import ProjectCard from '@/components/about/ProjectCard'
import Skills from '@/components/about/Skills'
import Experience from '@/components/about/Experience'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="py-12 sm:py-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Hi, I’m Harsh Sharma 👋
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Software Development Engineer (SDE-2) with 3+ years of experience
            building scalable full-stack web applications. I enjoy working on
            system design, performance optimization, and writing deep-dive
            articles on JavaScript internals.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/harsh-sharma-sde"
              target="_blank"
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/harsh-sharma-5112b4185"
              target="_blank"
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <Skills />

      {/* EXPERIENCE */}
      <Experience />

      {/* PORTFOLIO */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl font-semibold mb-8">Selected Work</h2>

        <div className="grid gap-6">
          <ProjectCard
            title="AI Safety Monitoring Platform"
            problem="Manual safety monitoring in factories is error-prone and reactive."
            solution="Built a real-time CCTV-based platform to detect helmet violations,
            fire, and smoke using computer vision."
            role="Owned frontend dashboard, backend APIs, and notification system."
            tech={[
              'React',
              'Node.js',
              'AWS',
              'YOLO',
              'WebSockets',
            ]}
          />

          <ProjectCard
            title="Carbon Sequestration Platform"
            problem="Accurate carbon sequestration assessment at scale is complex."
            solution="Designed a microservices-based web platform for environmental
            impact analysis and reporting."
            role="Lead full-stack developer responsible for architecture, APIs,
            frontend dashboards, and mentoring."
            tech={[
              'React',
              'Node.js',
              'Microservices',
              'AWS Lambda',
              'ECS',
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t">
        <p className="text-lg font-medium">
          Interested in systems, JavaScript internals, or scalable products?
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Feel free to reach out — I’m always happy to talk engineering.
        </p>
      </section>
    </div>
  )
}
