
const BASE_URL = process.env.REACT_APP_GPT_API_URL as string;

export const CallGPT = async (endpoint: string): Promise<string> => {
  const response = await fetch(BASE_URL + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: '안녕',
        },
      ],
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