import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    
    apiKey: process.env.OPENAI_API_KEY
  });

  const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    try{

        let title = req.query.story;
    
        //console.log(title);
        res.status(200).json({ story: title });

        // let result = await openai.createCompletion({
        //     model:'text-davinci-003',
        //     prompt:title,
        //     temperature:0.2,
        //     max_tokens:365,
        //     frequency_penalty:0.5,
        //     presence_penalty:0
        // });

        // console.log(result);
    
        // let response = result.data.choices[0].text?.trim() || 'sorry there was a problem';
    
        // console.log(response);
        // res.status(200).json({ story: response });

        // //console.log(process.env.OPENAI_API_KEY);
    }catch(ex){
        console.log("Exception from api call: ",ex);
        res.status(400).json({Error:ex});
    }
    
    
  }


  