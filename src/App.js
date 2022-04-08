import "./App.css";
import { Header } from "./components/Header";
import Home from "./components/Home";
import Reciters from "./components/Reciters";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Context from "./components/Context";
import Recitations from "./components/Recitations";
import { AppProvider } from "./context/AppProvider";
import { ReciterExtraDetailsContext } from "./context/ReciterExtraDetailsContext";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ReciterExtraDetailsContext>
          <AppProvider>
            <Context>
              <Header>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/reciters" element={<Reciters />} />
                  <Route path="/recitations" element={<Recitations />} />
                </Routes>
              </Header>
            </Context>
          </AppProvider>
        </ReciterExtraDetailsContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
