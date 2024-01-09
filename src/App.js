import "../src/assets/styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./sharedComponents/Header";
import HomePage from "./pages/HomePage";
import Collactions from "./pages/Collactions";
import Showroom from "./pages/Showroom";
import Footer from "./sharedComponents/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Collactions/>
      <Showroom/>
      <Footer/>
    </div>
  );
}

export default App;
