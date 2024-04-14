import "./assets/css/App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Brands />
      <Tasks />
      <Footer />
    </>
  );
}

export default App;
