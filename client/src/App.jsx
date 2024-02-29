import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Sliders from "./components/Slider/Sliders";
import Campaigns from "./components/Campaigns/Campaigns";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Sliders/>
      <Categories/>
      <Products/>
      <Campaigns/>
      <Footer/>
    </div>
  );
}

export default App;
