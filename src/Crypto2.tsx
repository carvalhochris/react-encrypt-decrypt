import { AES, enc } from "crypto-js";
import { SetStateAction, useState } from "react";

export default function Crypto2() {
  const [pw, setPw] = useState("");
//   const [content, setContent] = useState("");
  const [cText, setCText] = useState("");
  const [ogText, setOGText] = useState("");

  const handleCTChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCText(event.target.value);
  };

  const handlePwChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPw(event.target.value);
  };

  const deCrypt = () => {
    var cipherText = cText
    var password = pw
    var bytes = AES.decrypt(cipherText, password);
    var originalText = bytes.toString(enc.Utf8);
    setOGText(originalText)
  };

  return (
    <>
        <p>Content:</p>
        <input type="text" value={cText} onChange={handleCTChange} />
        <p>Key:</p>
        <input type="password" value={pw} onChange={handlePwChange} />
        <button onClick={deCrypt}>Decrypt</button>
        {ogText && <p>Decrypted Text: {ogText}</p>}
    </>
  );
}


