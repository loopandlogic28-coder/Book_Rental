// import express from "express";
// import fetch from "node-fetch";

// const router = express.Router();

// const GEMINI_KEY = process.env.GEMINI_API_KEY;
// const MODEL = process.env.MODEL || "gemini-2.5-flash";

// router.post("/", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) return res.status(400).json({ error: "Prompt required" });

//     const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

//     const body = {
//       contents: [
//         {
//           parts: [{ text: prompt }]
//         }
//       ]
//     };

//     const r = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-goog-api-key": GEMINI_KEY
//       },
//       body: JSON.stringify(body)
//     });

//     const data = await r.json();

//     const outputText =
//       data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply";

//     res.json({ reply: outputText });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;

// above is working properly trying ie it should work wiht custom qna

// import express from "express";
// import fetch from "node-fetch";

// const router = express.Router();

// const GEMINI_KEY = process.env.GEMINI_API_KEY;
// const MODEL = process.env.MODEL || "gemini-2.0-flash"; // use your model

// // ------------------------------
// // 1) CUSTOM QUESTIONS
// // ------------------------------
// const customFAQ = [
//   {
//     q: ["hi", "hello", "hey"],
//     a: "Hey! 👋 How can I help you today?"
//   },
//   {
//     q: ["what is your service", "what do you provide", "services"],
//     a: "We provide food ordering, rentals, user management, and a full e-commerce experience. What do you want to explore?"
//   },
//   {
//     q: ["how to register", "sign up", "create account"],
//     a: "To register, go to the signup page → enter email/password → done! 🚀"
//   },
//   {
//     q: ["how to rent", "rental process", "rent items"],
//     a: "To rent an item, browse the rental section → choose an item → click rent → complete payment."
//   },
// ];

// // Helper: match user prompt with custom questions
// function checkCustomAnswer(prompt) {
//   const lower = prompt.toLowerCase();

//   for (let item of customFAQ) {
//     for (let phrase of item.q) {
//       if (lower.includes(phrase)) {
//         return item.a;
//       }
//     }
//   }

//   return null; // no match → fallback to Gemini
// }


// // ------------------------------
// // 2) MAIN CHATBOT ROUTE
// // ------------------------------
// router.post("/", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     if (!prompt)
//       return res.status(400).json({ error: "Prompt required" });

//     // STEP 1 → check custom answers
//     const custom = checkCustomAnswer(prompt);
//     if (custom) {
//       return res.json({ reply: custom });
//     }

//     // STEP 2 → Call Gemini (fallback)
//     const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

//     const body = {
//       contents: [
//         {
//           parts: [{ text: prompt }]
//         }
//       ]
//     };

//     const r = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-goog-api-key": GEMINI_KEY
//       },
//       body: JSON.stringify(body)
//     });

//     const data = await r.json();

//     const outputText =
//       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "Sorry, I couldn't understand that.";

//     return res.json({ reply: outputText });
//   } catch (error) {
//     console.error("Chatbot error:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;

// uppar ka bhi ok hai but more  stufss add kr rahe 


import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const GEMINI_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.MODEL || "gemini-2.0-flash";

// ---------------------------------------------
// CUSTOM QUESTIONS BASED ON YOUR SUGGESTIONS
// ---------------------------------------------
const customFAQ = [
  {
    q: ["what is bookdow", "bookdow"],
    a: "BookDow is a smart platform where users can buy, sell, donate, and rent books easily. 📚🚀"
  },
  {
    q: ["book return policy", "return policy"],
    a: "Our return policy allows returns within 7 days if the book is in good condition. Simple and hassle-free. 🔄"
  },
  {
    q: ["cancellation policy", "cancel order"],
    a: "Orders can be cancelled within 2 hours of placing them. After that, processing begins. ❌"
  },
  {
    q: ["donate your book", "book donation", "donation"],
    a: "You can donate books via the Donate section. We pick it up for free! ❤️📚"
  },
  {
    q: ["founder of bookdow", "who created bookdow"],
    a: "BookDow was founded by passionate readers to make books more accessible for everyone. 🙌"
  }
];

// TRY MATCHING CUSTOM QUESTION
function checkCustomAnswer(prompt) {
  const lower = prompt.toLowerCase();

  for (let item of customFAQ) {
    for (let key of item.q) {
      if (lower.includes(key)) {
        return item.a;
      }
    }
  }

  return null; 
}


// ---------------------------------------------
// MAIN ROUTE
// ---------------------------------------------
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt required" });

    // STEP 1 → CUSTOM ANSWER
    const custom = checkCustomAnswer(prompt);
    if (custom) {
      return res.json({ reply: custom });
    }

    // STEP 2 → GEMINI FALLBACK WITH SHORT RESPONSE INSTRUCTIONS
    const shortPrompt = `
Answer the following question in max 180 characters. 
Do not write long paragraphs. Keep it simple and short.

User question: ${prompt}
`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

    const body = {
      contents: [
        {
          parts: [{ text: shortPrompt }]
        }
      ]
    };

    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_KEY
      },
      body: JSON.stringify(body)
    });

    const data = await r.json();

    let outputText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that.";

    // EXTRA SAFETY: HARD TRIM RESPONSE TO 180 CHARACTERS
    outputText = outputText.substring(0, 180);

    return res.json({ reply: outputText });
  } catch (error) {
    console.error("Chatbot error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
