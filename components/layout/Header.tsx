import Link from "next/link";

const navMenu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" }
];

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-black px-4 py-2 flex justify-around items-center">
            <div className="text-xl">Abhijan</div>

            <div className="flex">
            {/* Desktop Navigation Menu Bar */}
            <nav className="hidden sm:flex mr-8">
                {
                    navMenu.map((item) => (
                        <Link key={item.href} href={item.href} className="px-4 py-2 hover:text-blue-700 rounded">
                            { item.name }
                            </Link>
                    )
                )
                }
            </nav>
            <button className="">
                <Link href="/login" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">
                Login
                </Link>
            </button>
            </div>
        </header>
    );
}

export default Header;