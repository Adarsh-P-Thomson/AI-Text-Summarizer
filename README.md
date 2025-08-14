# AI-Text-Summarizer

**AI-Text-Summarizer** is a lightweight, web-based application enabling users to paste any text into a browser and receive a concise summary instantly—powered by the GEMINI AI model.

---

##  Features

- **Quick Summarization:** Paste blocks of text and obtain a summarized version instantly.
- **GEMINI AI Integration:** Leverages the power of Google’s GEMINI model to generate summaries.
- **Simple & Intuitive UI:** Clean interface with a dedicated “Summarize” button.
- **Ease of Setup:** Built with HTML and JavaScript. Runs smoothly with Node.js and your GEMINI API key.

---

##  Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, etc.)
- Node.js (version 14+ recommended)
- A valid **Gemini API Key** (available via [Google AI Studio](https://studio.google.ai), if not already onboarded)

### Setup Instructions

1. **Clone the repository:**

   ``bash
   git clone https://github.com/Adarsh-P-Thomson/AI-Text-Summarizer.git
   cd AI-Text-Summarizer
``

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure your API key:**

   * Open `server.js`
   * Set your GEMINI API key in the designated field (avoid committing it to version control)

4. **Run the server:**

   ```bash
   node server.js
   ```

5. **Use the app:**

   * Visit `http://localhost:3000` (or whichever port your server uses)
   * Paste your text into the provided field and hit **Summarize**
   * View your AI-generated summary instantly

---

## Project Structure

* **`index.html`** – Front-end template with text input and “Summarize” button
* **`server.js`** – Backend logic handling requests to GEMINI API
* **`package.json` / `package-lock.json`** – Project dependencies and metadata
* **`.gitignore`** – Ensures sensitive files (like your API key) aren’t committed
* **`docs/`** – (Optional) Documentation folder for future use
* **`README.md`, `SECURITY.md`** – Documentation and security policy

---

## Usage Example

```text
Original Text:
"AI is transforming how we interact with content. With models like GEMINI, summarizing long text has become faster and more accurate."

Summarized Output:
"AI, especially through GEMINI, makes summarization faster and more accurate."
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request for review


---

## Contact

Created by **Adarsh-P-Thomson**.
For inquiries, suggestions, or feedback, please open an issue on the repository or contact me directly.
