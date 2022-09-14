import styles from "./app.module.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";

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
