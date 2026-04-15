import { Link } from "react-router-dom";
const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
};
const Hero = () => {
    
    return (
      <section id="home" className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/public/image/20250222_142804.jpg" alt="Profile" className="w-64 md:w-80 rounded-lg shadow-2xl object-cover mx-auto" />
    
    <div>
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-primary">Manju</span>
      </h1>
      <p className="py-6">
        Frontend Developer skilled in React, Tailwind & JavaScript.
      </p>
      {/* <button onClick={projects} className="btn btn-primary mr-2">View Projects</button>  */}
          {/* <button
        className="btn btn-primary mt-4"
        onClick={() => scrollToSection("projects")}
      > View Projects</button> */}
    <Link to="/projects" className="btn btn-primary mr-2">
            View Projects
          </Link>
       
      <button  className="btn btn-outline">Download CV</button>
    </div>
  </div>
</section>
    );
};

export default Hero;


