import React, { useState } from "react";
import generateDumyText from "./generateText";

const DumyTextGenerator = () => {
  const [dumyText, setDumyText] = useState("");
  const [userInput, setUserInput] = useState({ word: 0, paragraph: 0 });
  const [err, setErr] = useState(false);
  return (
    <>
      <div className="max-w-xl mx-auto">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);

            const rowData = Object.fromEntries(formData.entries());
            const words = parseInt(rowData.word);
            const paragraph = parseInt(rowData.paragraph);

            if (!words || words <= 0 || !paragraph || paragraph <= 0) {
              setErr(true);
              return;
            }
            setUserInput({ words, paragraph });
            setDumyText(generateDumyText(words, paragraph));
            setErr(false)
          }}
        >
          <div className="flex flex-col mb-5">
            <label htmlFor="para">Number of paragraph</label>
            <input
              type="number"
              name="paragraph"
              id="para"
              className={`border-2 border-blue-600 outline-0 px-2 py-1 rounded ${err ? 'border-2 border-red-600 bg-red-200/20': ''}`}
              placeholder="Number of paragraph"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="word">Number of words per sentence</label>
            <input
              type="number"
              name="word"
              id="word"
              className={`border-2 border-blue-600 outline-0 px-2 py-1 rounded ${err ? 'border-2 border-red-600 bg-red-200/20': 'border-2 border-blue-600 bg-none'}`}
              placeholder="Number of words per sentence"
            />
          </div>
          <button className="px-5 py-2 bg-blue-500 text-white rounded ">
            Generate Text
          </button>
        </form>

        {dumyText && (
          <div>
            <h1 className="text-2xl font-bold mt-10">
              {" "}
              {`Generated Text: user typed ${userInput.words} words per sentence and ${userInput.paragraph} paragraphs`}
            </h1>

            {dumyText.map((text, ind) => {
              return (
                <p className="py-2" key={ind}>
                  {text}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default DumyTextGenerator;
