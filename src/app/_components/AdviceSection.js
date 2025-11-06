import { AdviceCard } from "./AdviceCard";

const Advices = [
  {
    number: 1,
    title: "Browse Curated Homes",
    description:
      "Explore our carefully selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information.",
  },
  {
    number: 2,
    title: "Build a Tour",
    description:
      "Schedule viewings at your convenience and visit multiple properties in one trip. Our team coordinates everything to save you time.",
  },
  {
    number: 3,
    title: "Get Expert Advice",
    description:
      "Connect with experienced agents who understand the market and can guide you through every step of your home-buying journey.",
  },
  {
    number: 4,
    title: "Offer & Close",
    description:
      "Explore our carefully selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information.",
  },
];

export const AdviceSection = () => {
  return (
    <div className="m-20  h-120 w-screen bg-[#F9FAFB] flex flex-col items-center p-5 gap-9">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <p className="text-black font-medium">Buying Doesn't Have to</p>
          <p className="text-black font-medium">Be Overwhelming</p>
        </div>
        <p className="text-[16px] text-[#4A5565]">
          Our streamlined process makes finding your dream home simple and
          stress-free
        </p>
      </div>
      <div className="max-w-312 grid grid-cols-2 gap-10 ">
        {Advices.map((advice, index) => {
          return (
            <AdviceCard
              number={advice.number}
              title={advice.title}
              description={advice.description}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
