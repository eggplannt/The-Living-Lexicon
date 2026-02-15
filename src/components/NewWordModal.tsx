import React, { useState } from "react";

interface NewWordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewWordModal(props: NewWordModalProps) {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");

  if (!props.isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock-up, so we just log the data and close the modal
    console.log({ word, definition, example });
    props.onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl relative">
        <button
          onClick={props.onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-onbackground mb-6">
          Define a New Word
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="word"
              className="block text-lg font-medium text-gray-700"
            >
              Word
            </label>
            <input
              type="text"
              id="word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="definition"
              className="block text-lg font-medium text-gray-700"
            >
              Definition
            </label>
            <textarea
              id="definition"
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="example"
              className="block text-lg font-medium text-gray-700"
            >
              Example
            </label>
            <textarea
              id="example"
              value={example}
              onChange={(e) => setExample(e.target.value)}
              rows={2}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Submit Definition
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
