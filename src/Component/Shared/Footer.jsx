import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#020043]">
      <footer className="footer max-w-[1130px] mx-auto text-[#fffff5] px-9 py-14">
        <aside>
          <img src="../../../public/image/logo light.png" alt="" />
          <div className="my-3 flex flex-col justify-start items-start">
            <p>123 Main Street Anytown, USA</p>
            <p>Postal Code: 12345</p>
          </div>
          <div className="  flex flex-col justify-start items-start">
            <p>Support: support@oyolloo.com</p>
            <p>(Available : 10:00am to 07:00pm) </p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title"> </h6>
          <a className=" md:mt-8 footer-title">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Therms and conditions</a>
        </nav>
        <nav>
          <h6 className="footer-title"></h6>
          <a className=" md:mt-8 footer-title">Services</a>
          <a className="link link-hover">Scheduling </a>
          <a className="link link-hover">Contact Us </a>
          <a className="link link-hover"> Patient Portal</a>
        </nav>
        <nav>
          <h6 className="footer-title"> </h6>
          <a className=" md:mt-8 footer-title">Follow us</a>
          <div className="flex gap-5 text-2xl">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaYoutube /></a>
          </div>
          <a className=" ">@docplus 2024</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
