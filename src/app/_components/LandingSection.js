import { FeatureCard } from "./FeatureCard";

const Features = [
  {
    img: "./App.png",
    title: "Top-end Curation",
    description:
      "Carefully selected properties that meet our high standards of quality",
  },
  {
    img: "./App (1).png",
    title: "Personalized Insight",
    description:
      "Expert guidance tailored to your unique needs and preferences",
  },
  {
    img: "./App (2).png",
    title: "Transaction Moving",
    description:
      "Streamlined process from viewing to closing with dedicated support",
  },
];

export const LandingSection = () => {
  return (
    <div className="flex flex-col items-center p-7 gap-3">
      <h1 className="text-3xl text-black font-semibold">Smart Tools</h1>
      <h1 className="text-3xl text-black font-semibold">
        Real Experts, Easy Moves
      </h1>
      <div className="text-2xl text-gray-500 p-10">
        Your journey to finding the perfect home starts here
      </div>
      <div className="flex flex-row gap-6">
        {Features.map((feature, index) => {
          return (
            <FeatureCard
              key={index}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
      <button className="h-10 w-40 bg-orange-400 m-5 rounded-md text-white">
        Get Started
      </button>
    </div>
  );
};
