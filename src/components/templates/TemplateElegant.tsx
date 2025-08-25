import { ResumeData } from '@/types/resume';

interface TemplateElegantProps {
  data: ResumeData;
}

export function TemplateElegant({ data }: TemplateElegantProps) {
  const formatDate = (date: string) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-900 text-white p-6">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <h1 className="text-2xl font-bold mb-1">{data.personalInfo.name}</h1>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              {data.personalInfo.email && (
                <div className="break-all">{data.personalInfo.email}</div>
              )}
              {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
              {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
              {data.personalInfo.linkedin && (
                <div className="break-all">{data.personalInfo.linkedin}</div>
              )}
              {data.personalInfo.website && (
                <div className="break-all">{data.personalInfo.website}</div>
              )}
            </div>

            {/* Skills */}
            {data.skills.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">Skills</h3>
                <div className="space-y-2">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="text-sm text-gray-300">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {data.education.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">Education</h3>
                <div className="space-y-3">
                  {data.education.map((edu) => (
                    <div key={edu.id} className="text-sm">
                      <div className="font-medium text-white">
                        {edu.degree}
                      </div>
                      <div className="text-gray-300">{edu.field}</div>
                      <div className="text-gray-400 text-xs">{edu.institution}</div>
                      <div className="text-gray-400 text-xs">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </div>
                      {edu.gpa && (
                        <div className="text-gray-400 text-xs">GPA: {edu.gpa}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-6">
          {/* Professional Summary */}
          {data.summary && (
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-3 text-gray-900 border-b-2 border-yellow-400 pb-1">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-yellow-400 pb-1">
                Professional Experience
              </h2>
              <div className="space-y-5">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-yellow-600 font-medium">{exp.company}</p>
                        <span className="text-sm text-gray-500">
                          {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>
                    {exp.description && (
                      <div className="text-gray-700 text-sm leading-relaxed">
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
        </div>
      </div>
    </div>
  );
}