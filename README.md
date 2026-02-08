# ⌨️ Typing Speed Test App

A simple and interactive typing speed test built using **React + Vite**.  
The app measures typing performance based on **speed, accuracy, and mistakes**.

---

## 🚀 Live Demo

🔗 https://github.com/lucky-KRMU/Typer/

---

## 🛠️ Tech Stack

- React (Hooks)
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- fast-levenshtein
- GitHub Pages

---

## ✨ Features

- Timer-based typing test
- Timer starts on first key press
- Accuracy calculation using Levenshtein Distance
- Words Per Minute (WPM) calculation
- Mistake tracking
- Paragraph-based typing
- Clean and minimal UI

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/lucky-KRMU/Typer.git
cd Typer
````

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

---

## 🧮 Accuracy Calculation

Accuracy is calculated using **Levenshtein distance**, which measures how different the typed text is from the original text.

Formula:

```
Accuracy = ((Original Length - Levenshtein Distance) / Original Length) × 100
```

Accuracy is clamped to never go below `0`.

---

## ⚡ WPM Calculation

```
WPM = Total Words Typed / Time (in minutes)
```

---

## 🧠 Custom Hook

### `useAccuracy`

A custom React hook used to calculate typing performance.

```js
useAccuracy(paragraphArray, userTypedArray, timeInSeconds)
```

Returns:

```js
[finalAccuracy, finalWPM, finalMistakes]
```

---

## 📁 Project Structure

```
src/
│
├── Components/
│   ├── Hero.jsx
│   ├── TypingArea.jsx
│
├── Hooks/
│   ├── useAccuracy.js
│   
│
├── data/
│   └── paragraphs.js
│
├── App.jsx
└── main.jsx
```

---

## 🌐 Deployment

This project is deployed using **GitHub Pages**.

Build & deploy:

```bash
npm run deploy
```

The production build is generated in the `dist/` folder.

---

## 🚧 Future Improvements

* Difficulty levels
* Per-word accuracy
* Leaderboard
* Dark mode (special)
* Sound effects
* Multiple test durations

---

## 👨‍💻 Author

**Lucky Pawar**

* GitHub: [https://github.com/lucky-KRMU](https://github.com/lucky-KRMU)

---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🐛 Report bugs
* 💡 Suggest new features

---

## 📜 License

This project is free to use (attribution required).


