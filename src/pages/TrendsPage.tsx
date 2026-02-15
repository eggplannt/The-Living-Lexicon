import WordCard from "../components/WordCard";

export default function TrendsPage() {
  return (
    <div className="bg-alternative-background p-4 sm:p-6 lg:p-8 w-full">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-red-900">
          Trending Words
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          <WordCard
            word="Cap"
            definition="The modern-day equivalent of 'I swear on my mother's grave,' but with 99% less commitment. The act of making a statement so unbelievable, it might as well be a work of fiction. The opposite of 'no cap,' which is the universal sign for 'I'm being deadly serious right now.'"
            example="He said he beat the new Call of Duty in one night? That's major cap."
          />
          <WordCard
            word="Bet"
            definition="The most versatile word in the English language. It can mean 'yes,' 'okay,' 'challenge accepted,' or 'I'll be there.' The ultimate expression of agreement and confidence, often used right before someone attempts something either very brave or very stupid."
            example="You think I can't eat this whole pizza? Bet."
          />
          <WordCard
            word="Simp"
            definition="Someone who has fallen so deep into the friendzone, they've started paying rent. A person who will go to extreme lengths to win the affection of someone who probably just sees them as a convenient, walking ATM with a shoulder to cry on."
            example="He bought her a car and she still won't text him back. He's the king of all simps."
          />
          <WordCard
            word="Drip"
            definition="The physical manifestation of looking so good, it's practically a health hazard. A level of style so profound, it's as if you're literally dripping with sauce. Not to be confused with a leaky faucet."
            example="Check out my new kicks, the drip is immaculate today."
          />
          <WordCard
            word="Cheugy"
            definition="The cringey-yet-lovable aesthetic of someone who is gloriously out of touch with current trends. Think 'Live, Laugh, Love' signs, minion memes, and anything from the early 2010s that has made a premature comeback. We all have a little cheugy in us."
            example="My older sister still uses the dog filter on Snapchat, it's so cheugy."
          />
          <WordCard
            word="Glow up"
            definition="The magical transformation from an ugly duckling to a majestic swan, usually documented with a dramatic before-and-after photo montage. The ultimate revenge on anyone who peaked in high school."
            example="Wow, after she moved to the city and got that new job, her glow up was insane."
          />
        </div>
      </div>
    </div>
  );
}
