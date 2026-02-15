import { useState } from "react";
import logo from "../assets/CalgaryHacks 2026 Logo.png";
import NewWordModal from "../components/NewWordModal"; // Import the modal

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col items-center bg-background px-30 w-full min-h-full overflow-auto">
        <div className="flex w-full bg-primary p-20 rounded-lg flex-grow">
          <div className="flex flex-1 flex-col justify-center">
            <div className="text-onbackground text-8xl font-bold">
              See Through Time
            </div>
            <div className="h-15" />
            <div className="flex h-16 w-full overflow-clip rounded-md bg-white items-center pl-5 ">
              <div className="text-gray-600 text-2xl">Search for a word</div>
            </div>
            <div className="h-6" />
            <button
              onClick={openModal} // Corrected: changed onClick={() => {}} back to onClick={openModal}
              className="flex h-16 w-72 bg-secondary overflow-clip rounded-md items-center justify-center text-onbackground text-lg transition-transform transform hover:scale-105"
            >
              Enter new word definition
            </button>
          </div>
          <div className="w-50" /> {/* Spacer */}
          <div className="flex flex-1 items-center">
            {" "}
            {/* Image container */}
            <img
              src={logo}
              alt="The Living Lexicon logo"
              className="max-h-200 w-auto object-contain"
            />
          </div>
        </div>
        <div className="flex w-full h-24 items-center"></div> {/* Footer div */}
      </div>

      <NewWordModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
