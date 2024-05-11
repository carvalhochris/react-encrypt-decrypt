// import "./App.css";
import Decrypt from "./Decrypt";
import Encrypt from "./Encrypt";

function App() {
  return (
    <>
      <div style={styles.div}>
        <Encrypt />
        <Decrypt />
        <p>built by <a href="https://christophercarvalho.com" target="#">chris</a></p>
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
