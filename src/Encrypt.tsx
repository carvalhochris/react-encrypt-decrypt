import { AES } from "crypto-js";
import { SetStateAction, useState } from "react";

export default function Encrypt() {
  const [pw, setPw] = useState("");
  const [content, setContent] = useState("");
  const [cText, setCText] = useState("");

  const handleContentChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setContent(event.target.value);
  };

  const handlePwChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPw(event.target.value);
  };

  const enCrypt = () => {
    var ciphertext = AES.encrypt(content, pw).toString();
    // console.log(ciphertext);
    setCText(ciphertext);
  };

  return (
    <>
      <h2>Encrypt here</h2>
      <p>Content:</p>
      <input type="text" value={content} onChange={handleContentChange} />
      <p>Key:</p>
      <input type="password" value={pw} onChange={handlePwChange} />
      <button onClick={enCrypt}>Encrypt</button>
      {cText && <p>Encrypted Text: {cText}</p>}
    </>
  );
}
