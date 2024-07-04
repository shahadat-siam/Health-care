const Faq = () => {
  return (
    <div className="max-w-6xl p-3 mx-auto my-16">
      <div className="flex flex-col justify-start items-start">
        <button className="px-4 py-1 rounded-3xl border-[1px] text-[#020043] font-semibold border-gray-300">
          {" "}
          Faq
        </button>
        <p className="text-start font-bold text-3xl leading-[45px] my-4 text-[#020043] ">
        Frequntly Asked Question 
        </p>
      </div>
      <div>
      <div className="join join-vertical w-full">
          <div className="collapse my-2 px-5 collapse-arrow join-item border-none bg-[#FFFFF5]">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl text-start font-medium font-Inter "> What are your office hours?</div>
            <div className="collapse-content text-start">
              <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
            </div>
          </div>
          <div className="collapse my-2 px-5 font-Inter collapse-arrow join-item border-none bg-[#FFFFF5]">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl text-start font-medium"> How can I schedule an appointment?</div>
            <div className="collapse-content text-start">
              <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
            </div>
          </div>
          <div className="collapse my-2 px-5 font-Inter collapse-arrow join-item border-none bg-[#FFFFF5]">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl text-start font-medium">What should I bring to my appointment?</div>
            <div className="collapse-content text-start">
              <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
            </div>
          </div>
        </div>
          <div className="collapse my-2 px-5 font-Inter collapse-arrow join-item border-none bg-[#FFFFF5]">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl text-start font-medium"> Do you offer telemedicine appointments?</div>
            <div className="collapse-content text-start">
              <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Faq;
