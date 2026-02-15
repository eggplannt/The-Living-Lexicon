import { Link, useParams } from "react-router-dom";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  type SlangWordSlug,
  slangWordBySlug,
  slangWords,
} from "../data/trendsData";

export default function TrendsWordPage() {
  const { slug } = useParams<{ slug: SlangWordSlug }>();

  if (!slug || !(slug in slangWordBySlug)) {
    return (
      <div className="w-full bg-alternative-background p-8 overflow-auto">
        <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-red-900 mb-4">
            Word not found
          </h1>
          <p className="text-gray-700 mb-6">
            This trend page does not exist yet.
          </p>
          <Link to="/trends" className="text-red-800 font-semibold underline">
            Back to Trending Words
          </Link>
        </div>
      </div>
    );
  }

  const wordData = slangWordBySlug[slug as SlangWordSlug];

  return (
    <div className="w-full bg-alternative-background p-4 sm:p-6 lg:p-8 overflow-auto">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
        <section className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-red-900">
              {wordData.word}
            </h1>
            <Link to="/trends" className="text-red-900 font-semibold underline">
              Back to Trends
            </Link>
          </div>
          <p className="text-gray-700 text-lg">{wordData.shortDefinition}</p>
          <blockquote className="mt-4 border-l-4 border-orange-300 italic text-gray-600 pl-4">
            {wordData.shortExample}
          </blockquote>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-5">
            Definition Popularity Over Time (Mock Data)
          </h2>
          <div className="w-full overflow-x-auto">
            <LineChart
              xAxis={[
                {
                  data: wordData.years,
                  label: "Year",
                  // Keep plain year labels (e.g. 2025) instead of locale commas (2,025).
                  valueFormatter: (value: number) => `${value}`,
                },
              ]}
              yAxis={[
                {
                  label: "Relative Popularity",
                  min: 0,
                  max: 100,
                },
              ]}
              series={wordData.usageSeries.map((series) => ({
                data: series.data,
                label: series.label,
                showMark: true,
                curve: "monotoneX",
              }))}
              height={360}
              margin={{ top: 30, right: 30, bottom: 50, left: 60 }}
              slotProps={{
                legend: {
                  direction: "horizontal",
                  position: { vertical: "top", horizontal: "center" },
                },
              }}
            />
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-5">
            Popular definitions through eras
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wordData.eraDefinitions.map((item) => (
              <article
                key={`${item.era}-${item.label}`}
                className="h-full flex flex-col rounded-lg border border-red-100 p-4 bg-red-50/40"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-red-800 mb-1">
                  {item.era}
                </p>
                <h3 className="text-lg font-bold text-red-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-700 mb-3">{item.definition}</p>
                <p className="text-gray-600 italic mt-auto">"{item.example}"</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Explore Other Words
          </h2>
          <div className="flex flex-wrap gap-3">
            {slangWords
              .filter((entry) => entry.slug !== wordData.slug)
              .map((entry) => (
                <Link
                  key={entry.slug}
                  to={`/trends/${entry.slug}`}
                  className="px-4 py-2 rounded-full bg-red-100 text-red-900 font-semibold hover:bg-red-200 transition-colors"
                >
                  {entry.word}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
