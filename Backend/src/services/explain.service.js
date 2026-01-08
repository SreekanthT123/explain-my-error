import { getOpenAIClient } from "./openai.client.js";

const SYSTEM_PROMPT = `
You are ExplainMyError, an assistant that explains software errors in plain English.
Your job is to interpret developer error messages and stack traces.
Rules:
- Be concise and clear.
- Do NOT generate code.
- Do NOT suggest multiple possibilities.
- Focus on the MOST LIKELY cause.
- If information is insufficient, say so clearly.
- Do NOT hallucinate context.
- Do NOT blame unrelated technologies.
- Do NOT overexplain.
You must return a single JSON object with exactly these fields:
- meaning: Plain-English explanation of what the error means.
- cause: The most likely cause of the error.
- check: The first thing the developer should check.
- mistake: A common mistake related to this error (optional).
If you are not confident, explicitly say so in the "meaning" field.
Return empty strings where appropriate.
Output ONLY valid JSON. No markdown. No additional text.
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
