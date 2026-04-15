const Skills = () => {
  return (
    <section id="skills" className="section text-4xl text-center font-bold  mt-10">
      <h2>Skills</h2>
   
        <div className="join text-xl-bold text-gray-500 text-m-10 p-20 gap-4 ">
  <input className="join-item btn" type="radio" name="options" aria-label="HTML" />
  <input className="join-item btn" type="radio" name="options" aria-label="CSS" />
  <input className="join-item btn" type="radio" name="options" aria-label="Java script"/>
  <input className="join-item btn" type="radio" name="options" aria-label="React" />
  <input className="join-item btn" type="radio" name="options" aria-label="Tailwind" />
</div>
      
    </section>
  );
};

export default Skills;