
// const api_url = process.env.REACT_APP_GPT_API_KEY as string;

export const CallGPT = async () => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are a helpful assistant."
        }
      ],
      temperature: 0.7,
      max_token: 1_000,
    })
  })
  const responseData = await response.json()
  console.log("=>응답값은 " + responseData)

  return responseData
}

