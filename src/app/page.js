import Image from "next/image";
import { EmployeeCard } from "./_components/EmployeeCard";
import { LandingSection } from "./_components/LandingSection";
import { EmployeeSection } from "./_components/EmployeeSection";
import { AdviceSection } from "./_components/AdviceSection";
import { MenuSection } from "./_components/MenuSection";
import { SuggestionSection } from "./_components/SuggestionSection";
import { MarketSection } from "./_components/MarketSection";
import { ContactSection } from "./_components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center  gap-3">
      <LandingSection />
      <AdviceSection />
      <MenuSection />
      <EmployeeSection />
      <SuggestionSection />
      <MarketSection />
      <ContactSection />
    </div>
  );
}
