import { GoArrowUpRight } from "react-icons/go";

const Appointment = () => {
  return (
    <div className="max-w-6xl my-20 relative mx-auto">
      <div className=" rounded-3xl">
        <img
          className="rounded-3xl w-full"
          src="../../../public/image/Rectangle 32.png"
          alt=""
        />{" "}
      </div>
      <div className="w-full rounded-3xl h-full bg-gradient-to-r from-[#020043] via-[#0200439f] to-[#0200434d] top-0 left-0  absolute">
        <div className="absolute top-4  left-4 md:top-[20%] md:left-[10%] right-12  ">
            <div className="flex justify-end "><img className="w-16 md:w-28" src="../../../public/image/logo light.png" alt="" /></div>
          <p className="md:text-4xl text-2xl font-semibold text-start text-white leading-normal md:leading-[50px]">Get Your <br /> First Appointment <br /> at 50% Off!</p>
        
        <div className=" flex justify-start items-center gap-6 md:mt-6">
            <button className="btn flex items-centergap-2 border-none hover:bg-[#FFC637] bg-[#FFC637]">Appointment <GoArrowUpRight /></button>
            <button className="btn flex items-centergap-2 border-[1px] border-[#FFFFF5] hover:bg-[#020043] bg-transparent text-[#FFFFF5] ">Learn more <GoArrowUpRight /></button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
