import Link from "next/link";
import { IoLocationOutline, IoLogoInstagram } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import { RiTiktokLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
const companyLinks = [
  { title: "About Us", href: "/about-us" },
  { title: "Project Showcase", href: "/projects" },
  { title: "Contact Us", href: "/contact-us" },
  { title: "Find Installers", href: "/find-installers" },
];

const productLinks = [
  "Solar Panels",
  "Solar Batteries",
  "Solar Inverters",
  "Charge Controllers",
  "Solar Street Lights",
  "Solar Lights",
];

const socialLinks = [
  {
    icon: IoLogoInstagram,
    href: "#",
  },
  {
    icon: RiTiktokLine,
    href: "#",
  },
  {
    icon: FiLinkedin,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-560 mx-auto px-6 lg:px-12 py-16">
        <div className="grid max-mdPhone:grid-cols-1 max-md:grid-cols-2 grid-cols-4 gap-14">
          {/* Brand Section */}
          <div className="max-lg:col-span-2 col-span-1">
            <Link href="/" className="">
              <Image src="/images/logo.png" loading="eager"
                width={100} height={120}
                alt="Logo" className="w-24 h-24" />
            </Link>


            <p className="text-gray-300 text-2xl font-medium">
              Delivering reliable solar systems, CCTV surveillance, electric fencing, and electrical installations to homes and businesses across Nigeria — since 2021.
            </p>

            <div className="flex items-center gap-5 mt-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-primary transition"
                  >
                    <Icon size={28} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">
              Company
            </h3>

            <ul className="space-y-5 text-gray-300 text-xl">
              {companyLinks.map((v, index) => (
                <li key={index}>
                  <Link
                    href={v.href}
                    className="hover:text-primary transition"
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">
              Products
            </h3>

            <ul className="space-y-5 text-gray-300 text-xl">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/products/${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-primary transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="max-lg:col-span-2 col-span-1">
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">
              Contact Info
            </h3>

            <div className="space-y-7">
              {/* Phones */}
              <div className="flex items-start gap-4">
                <LuPhone
                  className="text-blue-600 mt-1 shrink-0"
                  size={24}
                />

                <div className="text-gray-300 text-xl leading-9">
                  <p>+234 813 730 6375</p>
                  <p>+234 909 219 3041</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <CiMail
                  className="text-blue-600 mt-1 shrink-0"
                  size={24}
                />

                <p className="text-gray-300 text-xl break-all">
                  info.Syniciat@gmail.com
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <IoLocationOutline
                  className="text-blue-600 mt-1 shrink-0"
                  size={24}
                />

                <p className="text-gray-300 text-xl leading-9">
                  2 Micheal Alade St, Ifako-Ijaiye, Lagos 101232, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}