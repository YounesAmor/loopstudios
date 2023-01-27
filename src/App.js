import "./App.css";
import FirstContent from "./components/firstContent";
import Footer from "./components/footer";
import Header from "./components/header";
import SecondContent from "./components/secondContent";
function App() {
  return (
    <div className="App w-screen">
      <Header />
      <FirstContent />
      <SecondContent />
      <Footer />
    </div>
  );
}

export default App;
