import { EmployeeCard } from "./EmployeeCard";

const Informations = [
  {
    img: "./Michael.jpg",
    name: "Michael Chen",
    occupation: "Senior Real Estate Agent",
    solditems: "24 Properties Sold",
  },
  {
    img: "./david.jpg",
    name: "David Martinez",
    occupation: "Property Specialist",
    solditems: "18 Properties Sold",
  },
  {
    img: "./james.jpg",
    name: "James Wilson",
    occupation: "Investment Advisor",
    solditems: "32 Properties Sold",
  },
  {
    img: "./e687fe92be8006ca506f1ceab96c5104b66382ca.jpg",
    name: "Robert Thompson",
    occupation: "Luxury Home Expert",
    solditems: "28 Properties Sold",
  },
];

export const EmployeeSection = () => {
  return (
    <div className="bg-[#F9FAFB] w-screen h-174.5 flex flex-col p-10 gap-10 items-center">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center">
          <p className="text-[20px] font-medium">Meet the People</p>
          <p className="text-[20px] font-medium">Behind the Process</p>
        </div>
        <p className="text-[16px] text-[#4A5565]">
          Our experienced team is dedicated to helping you find your perfect
          home
        </p>
      </div>
      <div className="flex gap-6 justify-center">
        {Informations.map((Information, index) => {
          return (
            <EmployeeCard
              name={Information.name}
              occupation={Information.occupation}
              img={Information.img}
              solditems={Information.solditems}
              key={index}
            />
          );
        })}
      </div>
      <button className=" w-41 h-9 bg-orange-500 rounded-xl flex justify-center items-center text-white">
        Meet the Team
      </button>
    </div>
  );
};
