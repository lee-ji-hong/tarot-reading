
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
      content: 'You will act as an expert Tarot Card reader. Generate a Tarot Card Reading with tarot cards from Major and Minor Arcana. Proceed in the following order.',
    },
    {
      role: 'user',
      content: `
      1. [title] : 하단에 """로 구분된 [events]을 이해한 후 일기 제목을 생각합니다.

      2. [cards] Select three random numbers between 1 and 78.
      The three card information must be converted to JSON Array format.
      cardNumber: here is [cardNumber],
      cardName: here is [insert name of the tarot card that corresponds to that number, as listed in the Tarot card number reference].,
      cardImageUrl: here is https://upload.wikimedia.org/wikipedia/commons/[insert text from the cards ‘url’].jpg,
      cardMeaning: here is Summarizes a brief description of the meaning of the card.

      3. [Interpretation] : 해석을 제공하고 세 카드의 의미를 함께 요약합니다. 

      6. 1,2,3에 대한 내용을 한국어로 번역하고 출력을 다음 JSON 형식으로 사용합니다:
      { 
          title: here is [title],
          Interpretation: here is [Interpretation],
          cards: [{
              cardNumber: here is [cardNumber],
              cardName: here is [cardName],
              cardImageUrl: here is [cardImageUrl],
              cardMeaning: here is [cardMeaning]
          }]
      }

      Tarot card number reference:
      1. The Fool[url:9/90/RWS_Tarot_00_Fool]; 
      2. The Magician[url:d/de/RWS_Tarot_01_Magician]; 
      3. The High Priestess[url:8/88/RWS_Tarot_02_High_Priestess]; 
      4. The Empress[url:d/d2/RWS_Tarot_03_Empress]; 
      5. The Emperor[url:c/c3/RWS_Tarot_04_Emperor]; 
      6. The Hierophant[url:8/8d/RWS_Tarot_05_Hierophant]; 
      7. The Lovers[url:3/3a/TheLovers]; 
      8. The Chariot[url:9/9b/RWS_Tarot_07_Chariot]; 
      9. Strength[url:f/f5/RWS_Tarot_08_Strength]; 
      10. The Hermit[url:4/4d/RWS_Tarot_09_Hermit]; 
      11. Wheel of Fortune[url:3/3c/RWS_Tarot_10_Wheel_of_Fortune]; 
      12. Justice[url:e/e0/RWS_Tarot_11_Justice]; 
      13. The Hanged Man[url:2/2b/RWS_Tarot_12_Hanged_Man]; 
      14. Death[url:d/d7/RWS_Tarot_13_Death]; 
      15. Temperance[url:f/f8/RWS_Tarot_14_Temperance]; 
      16. The Devil[url:5/55/RWS_Tarot_15_Devil]; 
      17. The Tower[url:5/53/RWS_Tarot_16_Tower]; 
      18. The Star[url:d/db/RWS_Tarot_17_Star]; 
      19. The Moon[url:7/7f/RWS_Tarot_18_Moon]; 
      20. The Sun[url:1/17/RWS_Tarot_19_Sun]; 
      21. Judgment[url:d/dd/RWS_Tarot_20_Judgement]; 
      22. The World[url:f/ff/RWS_Tarot_21_World]; 
      23. Ace of Wands[url:1/11/Wands01]; 
      24. Two of Wands[url:0/0f/Wands02]; 
      25. Three of Wands[url:f/ff/Wands03]; 
      26. Four of Wands[url:a/a4/Wands04]; 
      27. Five of Wands[url:9/9d/Wands05]; 
      28. Six of Wands[url:3/3b/Wands06]; 
      29. Seven of Wands[url:e/e4/Wands07]; 
      30. Eight of Wands[url:6/6b/Wands08]; 
      31. Nine of Wands[url:/4/4d/Tarot_Nine_of_Wands]; 
      32. Ten of Wands[url:0/0b/Wands10]; 
      33. Page of Wands[url:6/6a/Wands11]; 
      34. Knight of Wands[url:1/16/Wands12]; 
      35. Queen of Wands[url:0/0d/Wands13]; 
      36. King of Wands[url:c/ce/Wands14]; 
      37. Ace of Cups[url:3/36/Cups01]; 
      38. Two of Cups[url:f/f8/Cups02]; 
      39. Three of Cups[url:7/7a/Cups03]; 
      40. Four of Cups[url:3/35/Cups04]; 
      41. Five of Cups[url:d/d7/Cups05]; 
      42. Six of Cups[url:1/17/Cups06]; 
      43. Seven of Cups[url:a/ae/Cups07]; 
      44. Eight of Cups[url:6/60/Cups08]; 
      45. Nine of Cups[url:2/24/Cups09]; 
      46. Ten of Cups[url:8/84/Cups10]; 
      47. Page of Cups[url:a/ad/Cups11]; 
      48. Knight of Cups[url:f/fa/Cups12]; 
      49. Queen of Cups[url:6/62/Cups13]; 
      50. King of Cups[url:0/04/Cups14]; 
      51. Ace of Swords[url:1/1a/Swords01]; 
      52. Two of Swords[url:9/9e/Swords02]; 
      53. Three of Swords[url:0/02/Swords03]; 
      54. Four of Swords[url:b/bf/Swords04]; 
      55. Five of Swords[url:2/23/Swords05]; 
      56. Six of Swords[url:2/29/Swords06]; 
      57. Seven of Swords[url:3/34/Swords07]; 
      58. Eight of Swords[url:a/a7/Swords08]; 
      59. Nine of Swords[url:2/2f/Swords09]; 
      60. Ten of Swords[url:d/d4/Swords10]; 
      61. Page of Swords[url:4/4c/Swords11]; 
      62. Knight of Swords[url:b/b0/Swords12]; 
      63. Queen of Swords[url:d/d4/Swords13]; 
      64. King of Swords[url:3/33/Swords14]; 
      65. Ace of Pentacles[url:f/fd/Pents01]; 
      66. Two of Pentacles[url:9/9f/Pents02]; 
      67. Three of Pentacles[url:4/42/Pents03]; 
      68. Four of Pentacles[url:3/35/Pents04]; 
      69. Five of Pentacles[url:9/96/Pents05]; 
      70. Six of Pentacles[url:a/a6/Pents06]; 
      71. Seven of Pentacles[url:6/6a/Pents07]; 
      72. Eight of Pentacles[url:4/49/Pents08]; 
      73. Nine of Pentacles[url:f/f0/Pents09]; 
      74. Ten of Pentacles[url:4/42/Pents10]; 
      75. Page of Pentacles[url:e/ec/Pents11]; 
      76. Knight of Pentacles[url:d/d5/Pents12]; 
      77. Queen of Pentacles[url:8/88/Pents13]; 
      78. King of Pentacles[url:1/1c/Pents14].

      [events]:
      `
      ,
    },
    {
      role: 'user',
      content: `""${prompt}""`
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