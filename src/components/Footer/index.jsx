import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <footer id="contact" className="bg-[#123458] text-white">
      <div
        className="absolute left-0 right-0 h-16 bg-[#123458]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          top: "-64px",
        }}
      />

      <div className="container mx-auto pt-20 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="mr-2" size={24} />
              <h3 className="text-xl font-bold">CharityName</h3>
            </div>
            <p className="text-[#F1EFEC] mb-6">
              Making a difference in the lives of those who need it most. Join
              us in our mission to create positive change.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F1EFEC] text-[#123458] flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F1EFEC] text-[#123458] flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F1EFEC] text-[#123458] flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-[#F1EFEC] hover:text-[#D4C9BE] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#mission"
                  className="text-[#F1EFEC] hover:text-[#D4C9BE] transition-colors duration-300"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-[#F1EFEC] hover:text-[#D4C9BE] transition-colors duration-300"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#F1EFEC] hover:text-[#D4C9BE] transition-colors duration-300"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#F1EFEC] hover:text-[#D4C9BE] transition-colors duration-300"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#F1EFEC] hover:text-[#D4C9BE] transition-colors duration-300"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="mr-2 mt-1 flex-shrink-0 text-[#D4C9BE]"
                  size={18}
                />
                <span>123 Charity Street, City, Country, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone
                  className="mr-2 flex-shrink-0 text-[#D4C9BE]"
                  size={18}
                />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0 text-[#D4C9BE]" size={18} />
                <span>info@charityname.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-[#F1EFEC] mb-4">
              Subscribe to our newsletter to receive updates on our work and
              upcoming events.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md text-[#030303] focus:outline-none focus:ring-2 focus:ring-[#D4C9BE]"
                  required
                />
                <button
                  type="submit"
                  className={`absolute right-0 top-0 h-full bg-[#D4C9BE] text-[#123458] px-4 rounded-r-md transition-all duration-300 ${
                    isHovering ? "bg-[#F1EFEC]" : ""
                  }`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Subscribe
                </button>
              </div>
              {isSubmitted && (
                <p className="text-[#D4C9BE] mt-2 text-sm">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F1EFEC]/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#F1EFEC] mb-4 md:mb-0">
              © {new Date().getFullYear()} CharityName. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-[#F1EFEC]">
              <a
                href="#"
                className="hover:text-[#D4C9BE] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="#"
                className="hover:text-[#D4C9BE] transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span>|</span>
              <a
                href="#"
                className="hover:text-[#D4C9BE] transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="h-24 bg-[#123458] relative overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#F1EFEC"
            opacity="0.2"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#F1EFEC"
            opacity="0.1"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
