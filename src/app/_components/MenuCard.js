export const MenuCard = (props) => {
  return (
    <div className="flex flex-col gap-6 w-102 h-92.5 border-[0.5px] border-[#0000001A] rounded-2xl ">
      <img src={props.img} className="w-100% h-48 rounded-t-2xl"></img>
      <div className="flex flex-col justify-center h-42 gap-3 pl-4">
        <p className="text-[#FF6900]">{props.price}</p>
        <p>{props.place}</p>
        <div>
          <div className="flex items-center gap-0.5">
            <img className="h-4 w-4" src={props.bedimg}></img>
            <p>{props.bed}</p>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-0.5 items-center">
              <img className="h-4 w-4" src={props.bathimg}></img>
              <p>{props.bath}</p>
            </div>
            <div className="flex gap-0.5 items-center">
              <img className="h-4 w-4" src={props.sizeimg}></img>
              <p>{props.size}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
