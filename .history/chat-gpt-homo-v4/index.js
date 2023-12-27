const axios = require("axios");

const apiKey = "SUA_CHAVE_DE_API_AQUI";
const apiURL = "https://api.openai.com/v1/completions";

const prompt = "Como fazer download de uma imagem usando o nodejs?";


axios
.post(
    apiURL,{
      model: "text-davinci-003",
      prompt,
      temperature: 0.5,
      max_tokens: 400,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
    }
  )
  .then(response=>{
    console.log(response.data.choices[0].text);
  })
  .catch((error) => console.log(error));
