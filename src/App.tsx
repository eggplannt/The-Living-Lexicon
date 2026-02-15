import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import TrendsPage from "./pages/TrendsPage";
import AboutUsPage from "./pages/AboutUsPage"; // Import the new AboutUsPage

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow flex">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/trends" element={<TrendsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}