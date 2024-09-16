import cors from 'cors';
import express from "express" ;
import bodyParser from "body-parser";
import fetch from "node-fetch";
const app = new express();
app.use(bodyParser.json());

app.use(cors())

// Endpoint to handle summarization request
app.post("/api/summarize", async (req, res) => {
  console.log("reached api launch");
  const text = req.body.text;
    
    const prompt= "sumarize :"+text;

    const generationConfig = {
        temperature: 1,
        topK: 64,
        topP: 0.95,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain"
      };
      
      const API_KEY = 'PUT_YOUR_API_KEY_HERE'; 
      const aiurl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
      
      
      async function generateText() {
        try {
          const response = await fetch(aiurl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    { text: prompt }
                  ]
                }
              ],
              generationConfig: generationConfig
            })
          });
      
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
      
          const data = await response.json();
          const generatedText = data?.candidates?.[0]?.content || 'No content generated';
          console.log('Generated Response:', generatedText.parts[0].text);
          res.status(200).json({text:generatedText.parts[0].text})  // Log the generated text
        } catch (error) {
          console.error('Error generating text:', error);
          res.send(error);
        }
      }
      await generateText();
});

// Serve static frontend files
app.use(express.static("/docs"));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
