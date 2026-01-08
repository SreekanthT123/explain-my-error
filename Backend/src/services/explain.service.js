import { getOpenAIClient } from "./openai.client.js";

const SYSTEM_PROMPT = `
You are ExplainMyError, an assistant that explains software errors in plain English.

Rules:
- Be concise and clear.
- Do NOT generate code.
- Do NOT suggest multiple possibilities.
- Focus on the MOST LIKELY cause.
- If information is insufficient, say so clearly.
- Do NOT hallucinate context.
- Do NOT overexplain.

Return ONLY valid JSON with:
meaning, cause, check, mistake.
`;

export async function explainError(errortext, framework) {
  const openai = getOpenAIClient();

  const userPrompt = `
 Framework:${framework || "Other"}
 Error: ${errortext}`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt },
    ],
  });

  const content = response.choices[0].message.content;

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error("AI returned invalid json");
  }

  return {
    meaning: parsed.meaning || "",
    cause: parsed.cause || "",
    check: parsed.check || "",
    mistake: parsed.mistake || "",
  };
}
