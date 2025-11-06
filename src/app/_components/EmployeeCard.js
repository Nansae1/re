export const EmployeeCard = (props) => {
  return (
    <div className="flex flex-col gap-10  w-75.5 items-center border-[0.5px] border-[#0000001A] rounded-2xl">
      <img className="h-64 w-75.5 rounded-t-2xl" src={props.img}></img>
      <div className="flex flex-col items-center justify-center h-26.5 w-61.5">
        <p className="text-[16px]">{props.name}</p>
        <p className="text-[14px] text-[#4A5565]">{props.occupation}</p>
        <p className=" text-[14px] text-[#FF6900]">{props.solditems}</p>
      </div>
    </div>
  );
};
