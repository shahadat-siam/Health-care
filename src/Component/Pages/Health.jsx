import { GoArrowUpRight } from "react-icons/go";

const Health = () => {
  return (
    <div className="max-w-[1150px] mt-12 bg-[#FFFFF5] px-3 md:px-12 py-3 md:py-7 mx-auto my-20">
      <div className=" p-1  md:flex  justify-between items-center gap-6">
        <div className="flex flex-col justify-start text-start items-start max-w-[470px]">
          <button className="px-4 py-1 rounded-3xl border-[1px] text-[#020043] font-semibold border-gray-300">
            {" "}
            Service
          </button>
          <p className="text-start font-bold text-3xl leading-[45px] my-4 text-[#020043] ">
            Empowering Health, <br /> Enriching Lives
          </p>
          <p className="my-2">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <button className="btn mt-7 flex items-centergap-2 border-none hover:bg-[#FFC637] bg-[#FFC637]">
            Appointment <GoArrowUpRight />
          </button>
        </div>
        <div className="max-w-[500px] mt-2 md:mt-0 relative h-[380px]">
          <img
            className="w-full rounded-3xl h-full"
            src="../../../public/image/Rectangle 27-2.png"
            alt=""
          />
          <div className="bg-[#020043c7] flex flex-col w-80 text-start rounded-xl left-4  bottom-4 absolute p-6">
            <h2 className="text-white font-semibold text-xl">
              Advanced Technology
            </h2>
            <p className="text-white max-w-[240px] text-sm mt-3">
              {" "}
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <div className=" flex justify-end -mt-8">
              <p className="p-3  rounded-full w-10 text-[#FFFFF5] bg-[#FFC637]">
                <GoArrowUpRight />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between items-center mt-10 gap-7">
        <div className="max-w-[500px] relative h-[380px]">
          <img
            className="w-full rounded-3xl h-full"
            src="../../../public/image/Rectangle 27-1.png"
            alt=""
          />
          <div className="bg-[#020043c7] flex flex-col w-80 text-start rounded-xl left-4  bottom-4 absolute p-6">
            <h2 className="text-white font-semibold text-xl">
            Online Doctor Meet
            </h2>
            <p className="text-white max-w-[240px] text-sm mt-3">
              {" "}
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
            </p>
            <div className=" flex justify-end -mt-8">
              <p className="p-3  rounded-full w-10 text-[#FFFFF5] bg-[#FFC637]">
                <GoArrowUpRight />
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[500px] mt-2 md:mt-0 relative h-[380px]">
          <img
            className="w-full rounded-3xl h-full"
            src="../../../public/image/Rectangle 27.png"
            alt=""
          />
          <div className="bg-[#020043c7] flex flex-col w-80 text-start rounded-xl left-4  bottom-4 absolute p-6">
            <h2 className="text-white font-semibold text-xl">
            Consultancy your health 
            </h2>
            <p className="text-white max-w-[240px] text-sm mt-3">
              {" "}
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
            </p>
            <div className=" flex justify-end -mt-8">
              <p className="p-3  rounded-full w-10 text-[#FFFFF5] bg-[#FFC637]">
                <GoArrowUpRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
