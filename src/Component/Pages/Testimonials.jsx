import { RxDotFilled } from "react-icons/rx";

const Testimonials = () => {
  return (
    <div className="max-w-6xl p-3 my-16 mx-auto">
      <div className="flex flex-col justify-start items-start">
        <button className="px-4 py-1 rounded-3xl border-[1px] text-[#020043] font-semibold border-gray-300">
          {" "}
          Testimonials
        </button>
        <p className="text-start font-bold text-3xl leading-[45px] my-4 text-[#020043] ">
          What they say about us
        </p>
      </div>
      <div className="md:flex justify-between my-4 items-center gap-6 ">
        <div className="card   rounded-none bg-[#FFFFF5] p-0">
          <div className="card-body md:h-[305px] w-[350px]">
            <h2 className="card-title text-start text-[#020043] font-Inter">
              {" "}
              Expertise and Compassion Combined
            </h2>
            <p className="text-start text-sm">
              {" "}
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.{" "}
            </p>
            <div className="card-actions mt-3 justify-start items-center gap-3">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="../../../public/image/profile1.jpg" />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-[#020043]"> Sarah D, <span className="text-[#4D4C7B] font-normal">IT Professional</span>  </h2>
                <div className="rating flex justify-start text-start">
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4  bg-[#FFE03D]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]"   />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-none bg-[#FFFFF5] p-0">
          <div className="card-body md:h-[305px] w-[350px]">
            <h2 className="card-title text-start text-[#020043] font-Inter">
              {" "}
              Life-Saving Care, Life-Changing Experience
            </h2>
            <p className="text-start text-sm">
              {" "}
              My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.{" "}
            </p>
            <div className="card-actions mt-3 justify-start items-center gap-2">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="../../../public/image/profile2.png" />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-[#020043]"> Michael R,   <span className="text-[#4D4C7B] font-normal">Business Executive</span>  </h2>
                <div className="rating flex justify-start text-start">
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4  bg-[#FFE03D]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]"   />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-none bg-[#FFFFF5] p-0">
          <div className="card-body md:h-[305px] w-[350px]">
            <h2 className="card-title text-start text-[#020043] font-Inter">
              {" "}
              A Partner in Health and Wellness
            </h2>
            <p className="text-start text-sm">
              {" "}
              As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and{" "}
            </p>
            <div className="card-actions mt-2 justify-start items-center gap-3">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="../../../public/image/profile3.png" />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-[#020043]">  David S,   <span className="text-[#4D4C7B] font-normal">Lawyer</span>  </h2>
                <div className="rating flex justify-start text-start">
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4  bg-[#FFE03D]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]"   />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 w-4 bg-[#FFE03D]" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center ">
        <RxDotFilled className="text-[#e4e2ff]  w-5" />
        <RxDotFilled className="text-[#FFC637] w-6 h-6 "  />
        <RxDotFilled className="text-[#e4e2ff]  w-5" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
