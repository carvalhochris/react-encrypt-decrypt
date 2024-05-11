import { AES, enc } from "crypto-js";
import { SetStateAction, useState } from "react";

export default function Decrypt() {
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
    var cipherText = cText;
    var password = pw;
    var bytes = AES.decrypt(cipherText, password);
    // console.log(bytes.words)
    var originalText = bytes.toString(enc.Utf8);
    if (originalText.length < 1) {
      console.log('failed')
        alert('probably incorrect')
    }
    console.log(originalText)
    setOGText(originalText);
  };

  return (
    <>
      <h2>Decrypt here</h2>
      <p>Encrypted content:</p>
      <input type="text" value={cText} onChange={handleCTChange} />
      <p>Key:</p>
      <input type="password" value={pw} onChange={handlePwChange} />
      <button onClick={deCrypt}>Decrypt</button>
      {ogText && <p>Decrypted Text: {ogText}</p>}
    </>
  );
}
