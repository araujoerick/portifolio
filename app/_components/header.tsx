import Menu from "./menu";
import ButtonDownloadCv from "./ui/button-cv";

const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-9">
          <span className="text-3xl font-bold">
            Araujo<span className="text-5xl leading-3 text-pear-600">.</span>
          </span>
          <div className="flex items-center gap-4">
            <ButtonDownloadCv variant="outline">Download CV</ButtonDownloadCv>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
