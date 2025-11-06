import { SuggestionCard } from "./SuggestionCard";

const suggestions = [
  {
    img: "./Container.png",
    title: "Find your dream home for life",
    description: "Browse thousands of properties and find the perfect place",
  },
  {
    img: "./Container (1).png",
    title: "Pre-Approved Loan $1 to $5",
    description: "Get pre-approved quickly and know your budget",
  },
  {
    img: "./Container (2).png",
    title: "Commission free for life",
    description: "Save thousands with our commission-free model",
  },
];

export const SuggestionSection = () => {
  return (
    <div className="h-91.5 w-screen flex justify-center items-center">
      <div className="flex gap-8">
        {suggestions.map((suggestion, index) => {
          return (
            <SuggestionCard
              key={index}
              img={suggestion.img}
              title={suggestion.title}
              description={suggestion.description}
            />
          );
        })}
      </div>
    </div>
  );
};
