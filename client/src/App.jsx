import "./App.css";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sliders from "./components/Slider/Sliders";

function App() {
  return (
    <div>
      <Header />
      <Sliders/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
