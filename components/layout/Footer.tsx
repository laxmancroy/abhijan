import Link from "next/link";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const socialIcons = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    href: "https://facebook.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    href: "https://youtube.com",
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    href: "https://x.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-bdr py-6">
      <div className="flex items-center justify-center">
        {socialIcons.map((btn) => (
          <Link
            key={btn.name}
            href={btn.href}
            className="*:border *:border-bdr *:mx-3 *:rounded-full *:size-6 *:box-content *:p-2 *:hocus:border-fg"
          >
            {btn.icon}
          </Link>
        ))}
      </div>
      <p className="text-center pt-4">2026 @ Abhijan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
