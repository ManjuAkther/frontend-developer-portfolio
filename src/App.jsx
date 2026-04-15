import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />   {/* pages will render here */}
    </div>
  );
}

export default App;

// import './App.css'
// import About from './components/About'
// import Certificate from './components/Certificate'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'
// // import Projects from './components/Projects'
// import Skills from './components/Skills'


// function App() {


//   return (
//     <div> 
// <Navbar></Navbar>

// <Hero></Hero>
// <About></About>
// <Skills></Skills>
// {/* <Projects></Projects> */}
// <Certificate></Certificate>
// <Contact></Contact>
// <Footer></Footer>
//     </div>
//   )
// }

// export default App
