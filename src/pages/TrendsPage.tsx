import { Link } from "react-router-dom";
import WordCard from "../components/WordCard";
import { slangWords } from "../data/trendsData";

export default function TrendsPage() {
  return (
    <div className="bg-alternative-background p-4 sm:p-6 lg:p-8 w-full overflow-auto">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-red-900">
          Trending Words
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {slangWords.map((entry) => (
            <Link
              key={entry.slug}
              to={`/trends/${entry.slug}`}
              className="block h-full focus:outline-none focus:ring-4 focus:ring-red-200 rounded-xl"
            >
              <WordCard
                word={entry.word}
                definition={entry.shortDefinition}
                example={entry.shortExample}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
