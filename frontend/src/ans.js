const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBSd6wvgH3elg7tvspk8onVU1BfnyrjU24");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run() {
  const prompt = "Write about Pepper__bell___Bacterial_spot in 3 lines, suggest treatment give your answers in hindi";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text(); // Await the text extraction
  return text; // Return the text to be used in TypeScript
}

module.exports = run;