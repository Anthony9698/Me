import styles from "./app.module.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
