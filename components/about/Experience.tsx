export default function Experience() {
  return (
    <section className="py-12 sm:py-16 border-t">
      <h2 className="text-2xl font-semibold mb-8">Experience</h2>

      <div className="space-y-8">
        <ExperienceItem
          role="Software Engineer"
          company="bluCursor Infotech"
          period="Oct 2024 – Present"
          points={[
            'Built scalable MERN stack applications used in production',
            'Optimized APIs and database queries (~30% improvement)',
            'Worked on microservices using AWS Lambda and ECS',
            'Reviewed code, mentored developers, and handled task planning',
          ]}
        />

        <ExperienceItem
          role="Full Stack Developer"
          company="Siya Tech Ventures"
          period="Mar 2023 – Sep 2024"
          points={[
            'Developed responsive UIs using React and Angular',
            'Built backend services using Node.js and Python Flask',
            'Improved database performance and caching strategies',
            'Worked in Agile/Scrum environments with frequent deployments',
          ]}
        />
      </div>
    </section>
  )
}

function ExperienceItem({
  role,
  company,
  period,
  points,
}: {
  role: string
  company: string
  period: string
  points: string[]
}) {
  return (
    <div>
      <h3 className="font-medium">
        {role} — {company}
      </h3>
      <p className="text-sm text-gray-500 mb-3">{period}</p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  )
}
