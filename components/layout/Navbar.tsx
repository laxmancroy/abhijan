import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";

const navMenu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Help", href: "/help" },
];

const Navbar = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}) => {
  return (
    <>
      <nav className="hidden md:flex">
        {navMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 lg:px-6 py-2 hocus:text-primary rounded"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Menu Bar */}
        <div
          className={`fixed inset-0 w-full h-dvh overflow-hidden bg-black/50 backdrop-blur-xs md:hidden transform transition-transform duration-300 ease-in-out z-30 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          
          <nav
            className={`fixed top-0 right-0 h-full w-1/2 flex flex-col overflow-y-auto border-l border-bdr bg-card/90 backdrop-blur-md pt-4 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="self-end mr-6 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                <MdOutlineClose size={30} />
            </button>
            
            {navMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mx-8 pl-3 py-3 border-b border-bdr hocus:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/signin"
              className="bg-primary text-primary-fg text-center py-3 mx-8 mt-6 rounded-lg hocus:bg-primary-hocus"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
    </>
  );
};

export default Navbar;
