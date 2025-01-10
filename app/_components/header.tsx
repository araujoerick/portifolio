import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-pear-100 container flex items-center justify-between gap-4 py-12">
      <h1 className="text-3xl font-bold">
        Araujo<span className="text-pear text-5xl leading-3">.</span>
      </h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
