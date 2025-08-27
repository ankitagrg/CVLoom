'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Eye } from 'lucide-react';
import { ResumeData, TemplateType } from '@/types/resume';
import { TemplateMinimal } from './templates/TemplateMinimal';
import { TemplateModern } from './templates/TemplateModern';
import { TemplateElegant } from './templates/TemplateElegant';
import { exportToPDF } from '@/lib/pdf-export';

interface ResumePreviewProps {
  data: ResumeData;
  template: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

export function ResumePreview({ data, template, onTemplateChange }: ResumePreviewProps) {
  const renderTemplate = () => {
    switch (template) {
      case 'minimal':
        return <TemplateMinimal data={data} />;
      case 'modern':
        return <TemplateModern data={data} />;
      case 'elegant':
        return <TemplateElegant data={data} />;
      default:
        return <TemplateModern data={data} />;
    }
  };

  const handleExportPDF = () => {
    const element = document.getElementById('resume-preview');
    if (element) {
      exportToPDF(element, `${data.personalInfo.name}-resume.pdf`);
    }
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Eye className="mr-2 h-5 w-5" />
            Preview
          </span>
          <div className="flex items-center gap-2">
            <Select value={template} onValueChange={(value: TemplateType) => onTemplateChange(value)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="elegant">Elegant</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={handleExportPDF}
              className="bg-green-600 hover:bg-green-700"
              size="sm"
            >
              <Download className="mr-1 h-4 w-4" />
              PDF
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          id="resume-preview"
          className="bg-white border rounded-lg p-8 shadow-sm transform scale-75 origin-top-left w-[133.33%] h-fit"
        >
          {renderTemplate()}
        </div>
      </CardContent>
    </Card>
  );
}