//Remembers the UI state when data is updated.
import { useState } from "react";
//Loads the logo.
import logo from "../assets/CalgaryHacks 2026 Logo.png";
//Import the modal for entering a new word definition.
import NewWordModal from "../components/NewWordModal";

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/*Uses Tailwind classes to set width, colour, spacing, and scrolling behaviour.*/}
      <div className="flex flex-col items-center bg-background px-30 w-full max-h-full overflow-auto">
        {/*Main content panel.*/}
        <div className="flex w-full bg-primary rounded-lg grow">
          {/*Left side of homepage stuff.*/}
          <div className="flex flex-1 flex-col justify-center py-20 pl-20">
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
          <div className="flex flex-1 items-center">
            {" "}
            {/*For the logo.*/}
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
