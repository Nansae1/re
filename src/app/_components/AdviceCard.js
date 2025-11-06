export const AdviceCard = (props) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="h-10 w-10 rounded-full shrink-0 border-2 border-orange-600 flex justify-center items-center">
        {props.number}
      </div>
      <div>
        <p className="text-black font-medium">{props.title}</p>
        <p className="text-[16px] text-[#4A5565]">{props.description}</p>
      </div>
    </div>
  );
};
