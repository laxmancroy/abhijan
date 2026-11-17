import Link from "next/link";

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
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 w-full h-dvh bg-black/50 backdrop-blur-xs md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <nav
            className="fixed top-0 right-0 h-dvh w-1/2 flex flex-col overflow-y-auto border-l border-bdr bg-card shadow-lg pt-14"
            onClick={(e) => e.stopPropagation()}
          >
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
              className="bg-primary text-primary-fg text-center py-3 mx-8 mt-6 rounded-lg hover:bg-primary-btn-hv"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
