import { NextApiRequest, NextApiResponse } from "next";
import { TemplateEnum } from "@/lib/prompt-by-template";
import { generate } from "@/lib/generate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { input, selectedTemplate = TemplateEnum.FLOWCHART } = req.body;

  if (!input) {
    return res.status(400).json({ message: "No input in the request" });
  }

  try {
    const ans = await generate({ input, selectedTemplate });

    const text = ans.text
      .replaceAll("```", "")
      .replaceAll(`"`, `'`)
      .replaceAll(`end[End]`, `ends[End]`)
      .replace("mermaid", "");

    return res.status(200).json({ text });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ 
      error: process.env.NODE_ENV === "development" 
        ? error.message 
        : "An error occurred while generating the diagram" 
    });
  }
}