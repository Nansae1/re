export const SuggestionCard = (props) => {
  return (
    <div className="h-38 max-w-[320px] text-center flex flex-col items-center gap-4">
      <img className="h-16 w-16" src={props.img}></img>
      <div className="flex flex-col gap-2 items-center">
        <p>{props.title}</p>
        <div className="flex flex-col w-full h-10.5 justify-start items-center">
          <p className="text-[14px] text-[#4A5565]">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
