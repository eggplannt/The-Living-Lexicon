export type SlangWordSlug =
  | "meme"
  | "blunder"
  | "lowkenuinely"
  | "bet"
  | "cap"
  | "simp";

export interface UsageSeries {
  label: string;
  data: Array<number | null>;
}

export interface EraDefinition {
  era: string;
  label: string;
  definition: string;
  example: string;
}

export interface SlangWord {
  slug: SlangWordSlug;
  word: string;
  shortDefinition: string;
  shortExample: string;
  years: number[];
  usageSeries: UsageSeries[];
  eraDefinitions: EraDefinition[];
}

export const slangWords: SlangWord[] = [
  {
    slug: "meme",
    word: "Meme",
    shortDefinition:
      "A viral joke, image, or format remixed so hard that the internet adopts it as a shared language.",
    shortExample:
      "That distracted boyfriend meme is ancient, but it still hits when someone edits it right.",
    years: [1980, 1990, 2000, 2010, 2020, 2025],
    usageSeries: [
      { label: "Cultural unit (academic)", data: [70, 66, 48, 18, 7, 5] },
      { label: "Internet joke format", data: [2, 8, 28, 62, 95, 92] },
    ],
    eraDefinitions: [
      {
        era: "1980s-1990s",
        label: "Cultural Unit",
        definition:
          "An idea that spreads from person to person, similar to genes in biology.",
        example: "In class, we called fashion trends a meme before social media existed.",
      },
      {
        era: "2000s-2010s",
        label: "Image Macro",
        definition:
          "A reusable joke template, usually an image with text people remix endlessly.",
        example: "Post that meme with top text and bottom text, everyone will get it.",
      },
      {
        era: "2020s",
        label: "Internet Language",
        definition:
          "Any recurring online reference used to signal community, irony, or shared context.",
        example: "The group chat speaks almost entirely in memes now.",
      },
    ],
  },
  {
    slug: "blunder",
    word: "Blunder",
    shortDefinition:
      "A huge, public mistake that is so avoidable it becomes part of your personal lore.",
    shortExample:
      "I sent the roast to the person we were roasting. Absolute blunder.",
    years: [1980, 1990, 2000, 2010, 2020, 2025],
    usageSeries: [
      { label: "Classic mistake", data: [75, 72, 65, 60, 54, 52] },
      { label: "Epic fail moment", data: [5, 10, 26, 50, 78, 81] },
    ],
    eraDefinitions: [
      {
        era: "1980s-1990s",
        label: "Serious Error",
        definition: "A major mistake, often in formal situations like politics or chess.",
        example: "That policy blunder cost them the election.",
      },
      {
        era: "2000s-2010s",
        label: "Public Oops",
        definition: "A visible mistake amplified by forums, comments, or screenshots.",
        example: "Deleting the tweet made the blunder trend even harder.",
      },
      {
        era: "2020s",
        label: "Lore-Worthy Fail",
        definition:
          "A cringe mistake your friends keep referencing long after it happened.",
        example: "You wore two different shoes to prom? Legendary blunder.",
      },
    ],
  },
  {
    slug: "lowkenuinely",
    word: "Lowkenuinely",
    shortDefinition:
      "Saying something is low-key and genuinely true at the same time; secretly honest without making it a big speech.",
    shortExample: "Lowkenuinely, that tiny cafe has the best coffee in town.",
    years: [1980, 1990, 2000, 2010, 2020, 2025],
    usageSeries: [
      // Intentionally one modern meaning with a recent rise only.
      { label: "Low-key genuine admission", data: [null, null, null, null, 58, 84] },
    ],
    eraDefinitions: [
      {
        era: "2020s",
        label: "Lowkey and Genuinely",
        definition:
          "A mashup used to signal genuine confession without making a big scene.",
        example: "Lowkenuinely, your playlist carried my entire week.",
      },
    ],
  },
  {
    slug: "bet",
    word: "Bet",
    shortDefinition:
      "A one-word response meaning yes, understood, challenge accepted, or say less depending on tone.",
    shortExample: "Meet at 7? Bet.",
    years: [1980, 1990, 2000, 2010, 2020, 2025],
    usageSeries: [
      { label: "Wager", data: [82, 80, 72, 55, 41, 36] },
      { label: "Agreement / challenge accepted", data: [8, 12, 32, 58, 89, 94] },
    ],
    eraDefinitions: [
      {
        era: "1980s-1990s",
        label: "Wager",
        definition: "To risk something on an uncertain outcome.",
        example: "I bet ten bucks they lose in overtime.",
      },
      {
        era: "2000s-2010s",
        label: "Say Less",
        definition: "Short for agreement, acknowledgment, or confirmation.",
        example: "You handle tickets, I handle snacks? Bet.",
      },
      {
        era: "2020s",
        label: "Challenge Accepted",
        definition: "A confident signal that you are ready to follow through immediately.",
        example: "You think I cannot finish this by noon? Bet.",
      },
    ],
  },
  {
    slug: "cap",
    word: "Cap",
    shortDefinition:
      "A claim that sounds fake; if it is true, people say 'no cap' to prove it.",
    shortExample: "You said you bench 400? Cap.",
    years: [1980, 1990, 2000, 2010, 2020, 2025],
    usageSeries: [
      { label: "Hat / headwear", data: [86, 84, 76, 63, 48, 45] },
      { label: "Lie / exaggeration", data: [2, 6, 18, 52, 91, 96] },
    ],
    eraDefinitions: [
      {
        era: "1980s-2000s",
        label: "Hat",
        definition: "A cap as physical headwear, especially baseball-style hats.",
        example: "He forgot his cap and got sunburned at the game.",
      },
      {
        era: "2010s",
        label: "Exaggeration",
        definition:
          "A statement that is probably stretched or not fully true in casual speech.",
        example: "You met Beyonce at the mall? That sounds like cap.",
      },
      {
        era: "2020s",
        label: "Lie / False Claim",
        definition: "Direct callout for dishonesty; opposite phrase is 'no cap'.",
        example: "No cap, that was the fastest lap all season.",
      },
    ],
  },
  {
    slug: "simp",
    word: "Simp",
    shortDefinition:
      "Someone who over-invests attention, money, or effort into a crush with little reciprocation.",
    shortExample:
      "He bought concert tickets, merch, and flowers for someone who never replies. Simp behavior.",
    years: [1980, 1990, 2000, 2010, 2020, 2025],
    usageSeries: [
      { label: "Simpleton (older usage)", data: [61, 54, 38, 20, 10, 7] },
      { label: "Overeager romantic", data: [5, 9, 24, 57, 88, 82] },
    ],
    eraDefinitions: [
      {
        era: "1980s-2000s",
        label: "Simpleton",
        definition: "An old insult for someone seen as naive or foolish.",
        example: "People used simp as a basic insult back then.",
      },
      {
        era: "2010s",
        label: "Overly Devoted",
        definition: "Someone doing too much for romantic attention.",
        example: "He skipped finals review to drive her to brunch. Simp.",
      },
      {
        era: "2020s",
        label: "Meme Label",
        definition: "A teasing tag for visible thirst, often used jokingly online.",
        example: "He changed his pfp to match hers in two minutes, full simp mode.",
      },
    ],
  },
];

export const slangWordBySlug: Record<SlangWordSlug, SlangWord> = slangWords.reduce(
  (accumulator, item) => {
    accumulator[item.slug] = item;
    return accumulator;
  },
  {} as Record<SlangWordSlug, SlangWord>,
);
