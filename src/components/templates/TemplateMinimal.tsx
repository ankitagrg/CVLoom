import { ResumeData } from '@/types/resume';

interface TemplateMinimalProps {
  data: ResumeData;
}

export function TemplateMinimal({ data }: TemplateMinimalProps) {
  const formatDate = (date: string) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed font-light">
      {/* Header */}
      <header className="text-center mb-8 pb-6 border-b border-gray-300">
        <h1 className="text-3xl font-light mb-3 tracking-wide">{data.personalInfo.name}</h1>
        <div className="text-sm text-gray-600 space-x-4">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>•</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>•</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
        {(data.personalInfo.linkedin || data.personalInfo.website) && (
          <div className="text-sm text-gray-600 mt-1 space-x-4">
            {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
            {data.personalInfo.website && data.personalInfo.linkedin && <span>•</span>}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        )}
      </header>

      {/* Professional Summary */}
      {data.summary && (
        <section className="mb-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-800 mb-3">
            Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-800 mb-4">
            Experience
          </h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <div>
                    <h3 className="font-medium text-gray-900">{exp.position}</h3>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
                {exp.description && (
                  <div className="text-sm text-gray-700 mt-2 pl-0">
                    {exp.description.split('\n').map((line, index) => (
                      <p key={index} className="mb-1">{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-800 mb-4">
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                    {edu.gpa && <p className="text-xs text-gray-500">GPA: {edu.gpa}</p>}
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-800 mb-3">
            Skills
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {data.skills.join(' • ')}
          </p>
        </section>
      )}
    </div>
  );
}