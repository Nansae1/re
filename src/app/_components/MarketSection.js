export const MarketSection = () => {
  return (
    <div className="w-screen h-65 bg-[#101828] flex flex-col items-center justify-center gap-6 mb-26.75">
      <div className="flex flex-col items-center">
        <p className="text-[16px] text-white">The Only Market Update</p>
        <p className="text-[16px] text-white">You'll Actually Want to Read</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[16px] text-[#99A1AF]">
          Get weekly insights on the real estate market, new listings, and
          expert tips delivered to
        </p>
        <p className="text-[16px] text-[#99A1AF]">your inbox</p>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-white rounded-sm h-9 w-77 flex justify-center items-center pl-3"
        ></input>
        <button className="rounded-sm h-9 w-33 flex justify-center items-center bg-orange-500 text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};
