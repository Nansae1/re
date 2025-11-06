export const ContactCard = (props) => {
  return (
    <div className="flex flex-col gap-4 h-40 w-74">
      <p className="text-[16px] font-medium">{props.main}</p>
      <div className="flex flex-col gap-2">
        <p className="text-[16px] text-[#4A5565]">{props.about}</p>
        <p className="text-[16px] text-[#4A5565]">{props.about1}</p>
        <p className="text-[16px] text-[#4A5565]">{props.about2}</p>
        <p className="text-[16px] text-[#4A5565]">{props.about3}</p>
      </div>
    </div>
  );
};
