
// const apiKey = "";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const MODEL_NAME="gemini-2.0-flash";
  const API_KEY =" AIzaSyDVLxWGvPOBvybFtQOukbHpA0NnLcRf0I0";
  
  async function run(prompt) {
    const genAI =new GoogleGenerativeAI(API_KEY);
    const model =genAI.getGenerativeModel({model:MODEL_NAME});

  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    
  };
  const safetySettings =[
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,

    } ,
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    } ,  

  

  ];
  
  
    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
        ],
    });
  
    const result = await chat.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;