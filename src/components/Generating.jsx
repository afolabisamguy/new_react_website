import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] 
      text-sm md:text-base whitespace-nowrap ${className || ""}`}
    >
      <img className="w-5 h-5 mr-2 md:mr-4" src={loading} alt="Loading" />
      Your dream apartment is loading…
    </div>
  );
};

export default Generating;
