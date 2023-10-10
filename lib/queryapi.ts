import openai from "./chatgpt";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const query = async () => {
  const messages: ChatMessage[] = [
    {
      role: "system",
      content:
        "You are a General knowledge quiz host, your topic is on India only.",
    },
    {
      role: "user",
      content:
        "We are tring to test people on their General Knowledge on INDIA. Give me a set of 23 questions with 4 diffrent answers also mentioning which answer is correct. The questions only should be about INDIA from topis ranging from Politics to Sports to Indianmade to etc..., The questions should start easy and increase their difficulty. The response should not inlude generic terms like certenly here you go and all. Just start with question 1 and keep going, and the correct answer should be printed just beside the correct answer in the options you provide, saying (correct answer). Do not print the correct answers at the end. IMP -> Please print the beside the options only saying (correct answer)",
    }, // CHANGE THE PROMPT TO ASK APPROPRIATE QUESTION HERE
  ];
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 0.8,
    max_tokens: 1000,
    top_p: 1,
  });
  console.log(res.choices[0].message.content);
  return res.choices[0].message.content;
};

export default query;
