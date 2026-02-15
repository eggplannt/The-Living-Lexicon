import Header from "./components/Header";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <MainPage />
    </div>
  );
}
