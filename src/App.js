import styles from "./app.module.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
