import { ContactCard } from "./ContactCard";

const contacts = [
  {
    main: "NEED HELP",
    about: "Contact us",
    about1: "FAQ",
    about2: "Support",
  },
  {
    main: "COMPANY",
    about: "About Us",
    about1: "Careers",
    about2: "Blog",
    about3: "Press",
  },
  {
    main: "QUICK LINKS",
    about: "Buy",
    about1: "Sell",
    about2: "Rent",
    about3: "Mortgage",
  },
  {
    main: "FOLLOW",
    about: "Facebook",
    about1: "Twitter",
    about2: "Instagram",
    about3: "Linkedin",
  },
];

export const ContactSection = () => {
  return (
    <div className="w-screen h-85.5 flex flex-col gap-8 p-12 items-center border-t border-[#0000001A]">
      <div className="flex gap-8 justify-center">
        {contacts.map((contact, index) => {
          return (
            <ContactCard
              key={index}
              main={contact.main}
              about={contact.about}
              about1={contact.about1}
              about2={contact.about2}
              about3={contact.about3}
            />
          );
        })}
      </div>
      <div className="h-13 w-7xl border-t border-[#0000001A] flex justify-between p-4 ">
        <div className="text-[14px] text-[#4A5565]">
          © 2024 Real Estate Co. All rights reserved.
        </div>
        <div className="flex gap-4">
          <p className="text-[14px] text-[#4A5565]">Privacy Policy</p>
          <p className="text-[14px] text-[#4A5565]">Terms of Service</p>
        </div>
      </div>
    </div>
  );
};
