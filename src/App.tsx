import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import TrendsPage from "./pages/TrendsPage";
import TrendsWordPage from "./pages/TrendsWordPage";
import AboutUsPage from "./pages/AboutUsPage";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow flex">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/trends" element={<TrendsPage />} />
            <Route path="/trends/:slug" element={<TrendsWordPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
