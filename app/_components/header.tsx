import Link from "next/link";

const Header = () => {
  return (
    <header className="container fixed left-1/2 top-0 z-20 -translate-x-1/2">
      <div className="flex items-center justify-between gap-4 py-8">
        <span className="text-3xl font-bold">
          Araujo<span className="text-5xl leading-3 text-pear-600">.</span>
        </span>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portifolio">Portifolio</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
