
import express from "express" ;
import bodyParser from "body-parser";
import fetch from "node-fetch";
const app = new express();
app.use(bodyParser.json());



// Endpoint to handle summarization request
app.post("/api/summarize", async (req, res) => {
    const { text } = req.body;

    // Replace with Gemini API integration
    try {
        const apiResponse = await fetch("https://api.gemini.com/v1/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer YOUR_GEMINI_API_KEY`,
            },
            body: JSON.stringify({ text }),
        });

        const apiData = await apiResponse.json();

        if (apiResponse.ok) {
            res.json({ summary: apiData.summary });
        } else {
            res.status(500).json({ error: "Failed to generate summary" });
        }
    } catch (error) {
        console.error("Error in API call:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Serve static frontend files
app.use("public");

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
