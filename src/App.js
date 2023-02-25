import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className=" content card mt-5">
          <NavBar />
          <main>
            <MainContent />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
