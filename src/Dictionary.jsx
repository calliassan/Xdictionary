import { useEffect, useState } from "react";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];
export function Dictionary() {
  const [datas, setdatas] = useState("");
  const [result, setresult] = useState("");
  const handlechange = (e) => {
    setdatas(e.target.value);
  };
  const handlesearchclick = (e) => {
    e.preventDefault();
    const foundword = dictionary.find(
      (item) => item.word.toLowerCase() === datas.toLowerCase()
    );
    if (foundword) {
      setresult(foundword.meaning);
    } else {
      setresult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word"
        name="search"
        id="search"
        onChange={handlechange}
        value={datas}
      />
      <button onClick={handlesearchclick}>Search</button>
      <h4>Definition:</h4>
      <p>{result}</p>
    </div>
  );
}
