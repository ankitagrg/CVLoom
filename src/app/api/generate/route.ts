import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const mockResponses = {
  summary: "Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of leading cross-functional teams to deliver high-quality applications that serve millions of users. Passionate about clean code, performance optimization, and mentoring junior developers.",
  
  enhancedExperience: [
    "Led development of microservices architecture serving 2M+ daily active users, resulting in 40% improved system performance",
    "Implemented automated CI/CD pipelines reducing deployment time by 60% and eliminating production downtime",
    "Mentored team of 4 junior developers, establishing code review processes that reduced bug reports by 35%",
    "Architected and built real-time data processing system handling 10K+ transactions per second"
  ]
};

export async function POST(request: NextRequest) {
  try {
    const { resumeData } = await request.json();
    
    // For demo purposes, we'll return mock enhanced content
    // In production, you would use OpenAI API here
    
    const response = {
      summary: mockResponses.summary,
      experience: resumeData.experience.map((exp: any, index: number) => ({
        ...exp,
        description: exp.description || mockResponses.enhancedExperience[index % mockResponses.enhancedExperience.length]
      }))
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error generating AI content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}

// Uncomment and configure this section when you have OpenAI API key
/*
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { resumeData } = await request.json();

    const prompt = `You are a professional resume writer. Generate enhanced content for this resume:

Name: ${resumeData.personalInfo.name}
Experience: ${JSON.stringify(resumeData.experience)}
Education: ${JSON.stringify(resumeData.education)}
Skills: ${resumeData.skills.join(', ')}

Please provide:
1. A compelling professional summary (2-3 sentences)
2. Enhanced job descriptions with achievement-focused bullet points for each experience
3. Format the response as JSON with "summary" and "experience" fields

Focus on quantifiable achievements, action verbs, and industry-relevant keywords.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const aiResponse = JSON.parse(completion.choices[0].message.content || '{}');
    
    return NextResponse.json(aiResponse);
  } catch (error) {
    console.error('Error generating AI content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}
*/