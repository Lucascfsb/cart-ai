import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

client.chat.completions
  .create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: 'Escreva uma mensagem de boa noite sobre um unicórnio.',
      }
    ]
  })
  .then((completion) => {
    console.log(completion.choices[0].message.content);
})