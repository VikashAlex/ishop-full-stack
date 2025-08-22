import Image from "next/image";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white py-6 px-4">
      {/* <div className="container mx-auto px-4 py-6 my-4"> */}
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Info */}
          <div className="flex-1">
            <h1 className="font-bold text-lg sm:text-xl lg:text-[18px]">
              Swoo - 1st NYC tech online market
            </h1>
            <div>
              <div className="my-3">
                <p className="text-sm">hotline 24/7</p>
                <h3 className="font-bold text-2xl sm:text-3xl text-[#1ABA1A]">
                  (025) 3686 25 16
                </h3>
              </div>
              <div className="my-3 text-sm sm:text-base">
                <p>257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
                <p>contact@Swootechmart.com</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                {[FaTwitter, FaFacebook, FaInstagram, FaGithub, FaPinterest].map(
                  (Icon, idx) => (
                    <div
                      key={idx}
                      className="p-2 flex justify-center items-center bg-[#E1E3EB] rounded-full"
                    >
                      <Icon />
                    </div>
                  )
                )}
              </div>

              <div className="flex gap-4 mt-5 w-fit flex-wrap">
                <select className="rounded-md border focus:outline-none focus:ring-2 border-[#E1E3EB] py-[1px] px-[10px] focus:ring-blue-500 text-sm">
                  <option value="usdt">Usdt</option>
                  <option value="inr">INR</option>
                  <option value="eur">EUR</option>
                </select>

                <select className="rounded-md border focus:outline-none focus:ring-2 border-[#E1E3EB] py-[1px] px-[10px] focus:ring-blue-500 text-sm">
                  <option value="eng">Eng</option>
                  <option value="hin">Hindi</option>
                  <option value="gra">Gujarati</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Links & Subscribe */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <ul>
                <h3 className="text-lg font-semibold mb-3 capitalize">
                  top Categories
                </h3>
                {[
                  "Laptops",
                  "PC & Computers",
                  "Cell Phones",
                  "Tablets",
                  "Gaming & VR",
                  "networks",
                  "Cameras",
                  "Sounds",
                  "Office",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-[#666666]">
                    {item}
                  </li>
                ))}
              </ul>

              <ul>
                <h3 className="text-lg font-semibold mb-3 capitalize">company</h3>
                {[
                  "About Swoo",
                  "Contact",
                  "Career",
                  "Blog",
                  "Sitemap",
                  "Store Locations",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-[#666666]">
                    {item}
                  </li>
                ))}
              </ul>

              <ul>
                <h3 className="text-lg font-semibold mb-3 capitalize">help center</h3>
                {[
                  "Customer Service",
                  "Policy",
                  "Terms & Conditions",
                  "Trach Order",
                  "FAQs",
                  "My Account",
                  "Product Support",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-[#666666]">
                    {item}
                  </li>
                ))}
              </ul>

              <ul>
                <h3 className="text-lg font-semibold mb-3 capitalize">partner</h3>
                {["Become Seller", "Affiliate", "Advertise", "Partnership"].map(
                  (item, i) => (
                    <li key={i} className="text-sm text-[#666666]">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="my-6">
              <div className="font-bold text-lg capitalize mb-3">
                subscribe & get <span className="text-red-500">10%</span> off for
                your first order
              </div>
              <div className="border-b-2 border-[#CCCCCC] flex justify-between items-center px-4 py-2 my-2">
                <input
                  type="text"
                  placeholder="enter your email address..."
                  className="border-0 capitalize outline-0 text-sm flex-1"
                />
                <button className="uppercase text-[#1ABA1A] text-sm font-semibold">
                  Subscribe
                </button>
              </div>
              <p className="text-[#666666] text-xs sm:text-sm">
                By subscribing, you’re accepting our Policy
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-[#E1E3EB] mt-6 pt-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-sm text-center lg:text-left">
            © 2024 <span className="font-bold">Shawonetc3</span>. All Rights
            Reserved
          </div>

          <div className="flex gap-3 items-center justify-center flex-wrap">
            {["/payment/pay1.png","/payment/pay2.png","/payment/pay3.png","/payment/pay4.png","/payment/pay5.png"].map((src, i) => (
              <Image key={i} src={src} alt="Logo" width={40} height={20} />
            ))}
          </div>

          <div className="text-[#0D6EFD] font-semibold text-sm cursor-pointer">
            Mobile Site
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
