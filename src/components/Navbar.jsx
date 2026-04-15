const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50">
      
      <div className="flex-1">
        <a href="#home" className="btn btn-ghost text-xl">
          MyPortfolio
        </a>
      </div>

      <div className="flex gap-4">
        <a href="#about" className="btn btn-ghost">About</a>
        <a href="#skills"  className="btn btn-ghost">Skills</a>
        <a href="#projects"  className="btn btn-ghost">Projects</a>
        <a href="#certificate"  className="btn btn-ghost">Certificate</a>
        <a href="#contact" className="btn btn-primary">Contact</a>
      </div>

    </div>
  );
};

export default Navbar;