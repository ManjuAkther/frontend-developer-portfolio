const Projects = () => {
  return (
    <div className="p-10">
  
     <h1 className="text-4xl font-bold mb-6 mt-10">My Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
  <div className="card bg-base-100 shadow-xl p-4">
          <h2 className="text-xl font-semibold">
             <a
          href="https://memorible-water-bottole.netlify.app/"
          target="_blank"
          className="btn btn-primary mt-4"
        >
         Project-1
        </a>
          </h2>
          <p>My awesome frontend project</p>
        </div>


        <div className="card bg-base-100 shadow-xl p-4">
          <h2 className="text-xl font-semibold">
             <a
          href="https://bd-tea.netlify.app/"
          target="_blank"
          className="btn btn-primary mt-4"
        >
         Project-2
        </a>
          </h2>
          <p>My awesome frontend project</p>
        </div>

        <div className="card bg-base-100 shadow-xl p-4">
          <h2 className="text-xl font-semibold">
     <a
          href="https://gleaming-fairy-dd9b64.netlify.app/"
          target="_blank"
          className="btn btn-primary mt-4"
        >
         Project-3
        </a>
         </h2>
          <p>Another cool project</p>
        </div>
      </div> 
    </div>
  );
};

export default Projects;
