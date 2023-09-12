const axios = require("axios");

const apiKey = "SUA_CHAVE_DE_API_AQUI";
const apiURL = "https://api.openai.com/v1/models";

axios
  .get(
    apiURL,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
    }
  )
  .then(response=>{
      console.log(response.data.data.map(i => i.id))
  })
  .catch((error) => console.log(error));
