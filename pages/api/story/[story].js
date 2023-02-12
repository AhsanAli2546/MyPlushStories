import { Configuration, OpenAIApi } from "openai";



  
  export default async function handler(req, res) {
    try{
      const configuration = new Configuration({
    
        apiKey: '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'
      });
      const openai = new OpenAIApi(configuration);

        let title = req.query.story;
    
        //console.log(title);
        //res.status(200).json({ story: title });

        let result = await openai.createCompletion({
             model:'text-davinci-003',
             prompt:title,
             temperature:0.2,
             max_tokens:365,
             frequency_penalty:0.5,
             presence_penalty:0
        });

        // console.log(result);
    
        let response = result.data.choices[0].text?.trim() || 'sorry there was a problem';
    
        // console.log(response);
        res.status(200).json({ story: response });

        // //console.log(process.env.OPENAI_API_KEY);
    }catch(ex){
        //console.log("Exception from api call: ",ex);
        throw ex;
        //res.status(400).json({Error:ex});
    }
    
    
  }


  