// import "./App.css";
import Crypto1 from "./Crypto1";
import Crypto2 from "./Crypto2";

function App() {
  return (
    <>
      <div style={styles.div}>
        <Crypto1 />
        <Crypto2 />
      </div>
    </>
  );
}

const styles = {
  div: {
    margin: "auto",
    width: "50%",
  },
  div2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default App;
