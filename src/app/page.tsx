import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Sparkles, Download, Eye } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ResumeAI</span>
            </div>
            <Link href="/builder">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Create Resume
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Build Your Perfect Resume with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create professional, ATS-friendly resumes in minutes. Our AI helps you craft compelling content 
            while beautiful templates make you stand out.
          </p>
          <Link href="/builder">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Building
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-white/60 backdrop-blur-sm">
            <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Content</h3>
            <p className="text-gray-600">
              Generate professional summaries and achievement-focused bullet points with advanced AI.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-white/60 backdrop-blur-sm">
            <div className="bg-indigo-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Eye className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Beautiful Templates</h3>
            <p className="text-gray-600">
              Choose from professionally designed templates that get you noticed by recruiters.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-white/60 backdrop-blur-sm">
            <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Download className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant PDF Export</h3>
            <p className="text-gray-600">
              Download your resume as a high-quality PDF ready for job applications.
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to land your dream job?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of professionals who've upgraded their careers with ResumeAI.
            </p>
            <Link href="/builder">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Create My Resume
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}