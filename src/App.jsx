import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">おげんきですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
