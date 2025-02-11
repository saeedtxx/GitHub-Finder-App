import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import User from "./pages/User";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
function App() {
  return (
    <div>
      <GithubProvider>
        <AlertProvider>
          <BrowserRouter>
            <div className="flex flex-col justify-between h-screen ">
              <Navbar />
              <main className="container mx-auto px-3 pb-12">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<Error404 />} />
                  <Route path="/user/:login" element={<User />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </AlertProvider>
      </GithubProvider>
    </div>
  );
}

export default App;
