import "./App.css";

//J'importe mes trois components
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Jobs />
      <Footer text="Made with React at Le Reacteur By Nono" />
    </>
  );
};

export default App;
