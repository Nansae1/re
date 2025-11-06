export const FeatureCard = (props) => {
  return (
    <div className="h-60 w-102.5 border-[0.5px] border-[#0000001A] rounded-lg flex flex-col items-center gap-9 p-6">
      <img className="h-12 w-12" src={props.img}></img>
      <p className="text-[16px]">{props.title}</p>
      <p className="text-[16px] text-[#4A5565]">{props.description}</p>
    </div>
  );
};
