import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={ Home } />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
