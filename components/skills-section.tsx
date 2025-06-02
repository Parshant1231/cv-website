export default function SkillsSection() {
  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React.js", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "Express.js", percentage: 85 },
    { name: "TypeScript", percentage: 70 },
    { name: "Next.js", percentage: 75 },
  ]

  return (
    <div className="mt-16">
      {/* <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-3 mb-8 inline-block">My Skills</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-[#6366f1]">{skill.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-[#222] rounded-full overflow-hidden">
              <div className="h-full bg-[#6366f1] rounded-full" style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
