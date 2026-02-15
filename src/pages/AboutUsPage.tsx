import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-alternative-background p-4 sm:p-6 lg:p-8 text-onbackground flex justify-center items-start w-full">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-onbackground">
          About The Living Lexicon
        </h1>
        <div className="space-y-6 text-lg">
          <p>
            Welcome to The Living Lexicon, the internet's premier destination
            for chronicling the ever-evolving, often bewildering, and always
            entertaining world of modern slang. We are a community-driven
            project dedicated to defining the words and phrases that bubble up
            from the depths of internet forums, social media, and late-night
            gaming sessions.
          </p>
          <p>
            Our mission is to capture language as it lives and breathes. Before
            a word is officially recognized by a dusty old dictionary, it lives
            here, on our pages, defined by the very people who use it. We
            believe that language is a collaborative art form, and our platform
            is the canvas.
          </p>
          <p>
            Whether you're a seasoned netizen trying to keep up, a linguist
            studying the evolution of digital communication, or just someone who
            heard your kid say something weird and you want to know what it
            means, The Living Lexicon is for you. So, dive in, contribute your
            own definitions, and help us build the most vibrant, up-to-date
            dictionary on the planet.
          </p>
          <div className="text-center pt-6">
            <p className="text-2xl font-bold text-primary">No cap.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
