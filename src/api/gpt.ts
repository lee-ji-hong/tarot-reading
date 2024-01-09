
const BASE_URL = process.env.REACT_APP_GPT_API_URL as string;

export const CallGPT = async ({
  endpoint,
  prompt
}: {
  endpoint: string
  prompt: string
}): Promise<string> => {
  const messages = [
    {
      role: 'system',
      content: '테스트 중입니다.',
    },
    {
      role: 'user',
      content: `${prompt}`
    },
  ]
  const response = await fetch(BASE_URL + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const responseData = await response.json();
  const message = responseData.choices[0].message.content;
  console.log(message)
  return message;
};