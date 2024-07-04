import { GoArrowUpRight } from "react-icons/go";

const Mission = () => {
  return (
    <div className="max-w-6xl p-1 mx-auto md:flex my-20 justify-between items-center gap-6">
      <div className="flex flex-col justify-start text-start items-start max-w-[470px]">
        <button className="px-4 py-1 rounded-3xl border-[1px] text-[#020043] font-semibold border-gray-300">
          {" "}
          Who we are
        </button>
        <p className="text-start font-bold text-3xl leading-[45px] my-4 text-[#020043] ">
          We Help To Get <br /> Soultions{" "}
        </p>
        <p className="my-2">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="btn mt-7 flex items-centergap-2 border-none hover:bg-[#FFC637] bg-[#FFC637]">
          Learn more <GoArrowUpRight />
        </button>
      </div>
      <div className="max-w-[510px] mt-2 md:mt-0 relative h-[390px]">
        <img
          className="w-full h-full"
          src="../../../public/image/Rectangle 24.png"
          alt=""
        />
        <div className="bg-[#343268] w-80 text-start rounded-xl md:-left-20 md:-bottom-8 bottom-0 absolute p-6">
          <h2 className="text-white font-semibold text-xl">
            Our mission is simple
          </h2>
          <p className="text-white  text-sm mt-3">
            {" "}
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
