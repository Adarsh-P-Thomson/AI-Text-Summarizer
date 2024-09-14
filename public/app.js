// Variables
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const fileInput = document.getElementById("fileInput");
const generateBtn = document.getElementById("generateBtn");

// Event Listener for Generate Button
generateBtn.addEventListener("click", () => {
    const text = inputText.value;

    if (!text) {
        alert("Please enter text or upload a file.");
        return;
    }

    // Call the backend API to get the summary
    fetchSummary(text);
});

// Event Listener for File Input
fileInput.addEventListener("change", handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = function(e) {
            inputText.value = e.target.result;
        };
        reader.readAsText(file);
    } else {
        alert("Unsupported file type. Please upload a .txt file.");
    }
}

// Fetch Summary using backend API
async function fetchSummary(text) {
    try {
        const response = await fetch("/api/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        if (response.ok) {
            const data = await response.json();
            outputText.value = data.summary;
        } else {
            alert("Failed to generate summary.");
        }
    } catch (error) {
        console.error("Error fetching summary:", error);
        alert("Error generating summary. Please try again.");
    }
}
