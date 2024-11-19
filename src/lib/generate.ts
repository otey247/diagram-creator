// lib/generate.ts
import OpenAI from 'openai';

export const generate = async ({ input, selectedTemplate }) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OpenAI API key not configured. Please add OPENAI_API_KEY to your .env.local file");
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const syntaxDoc = await import(
      `./syntax/${selectedTemplate.toLowerCase()}.md`
    );

    const prompt = `${syntaxDoc.default}
    
Instructions:
- Use different shapes, colors and also use icons when possible as mentioned in the doc
- Do not add Note and do not explain the code and do not add any additional text except code
- Do not use 'end' syntax
- Do not use any parenthesis inside block

Create a ${selectedTemplate} diagram in mermaid syntax about: ${input}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.9,
      max_tokens: 1500,
    });

    return { text: completion.choices[0].message.content || '' };
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error(error.message || "Failed to generate diagram");
  }
};
