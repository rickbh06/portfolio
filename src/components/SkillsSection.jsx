function SkillGroup({ label, items }) {
  return (
    <div className="py-6 border-b border-field-200 last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:gap-12">
        <div className="w-32 shrink-0 mb-3 sm:mb-0">
          <span className="eyebrow text-ground-60">{label}</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 flex-1">
          {items.map((skill) => (
            <span key={skill} className="text-sm text-ground font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection({ skills }) {
  return (
    <div>
      <SkillGroup label="CAD & Design" items={skills.cad} />
      <SkillGroup label="Analysis" items={skills.analysis} />
      <SkillGroup label="Fabrication" items={skills.fabrication} />
    </div>
  );
}
