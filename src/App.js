
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import Section1 from "./components/section1";
import Header from "./components/header";
import Section4 from "./components/Section4";
import Section3 from './components/Section3';
import BG1 from './images/BG1.jpg'

function App() {
  const router= createBrowserRouter([
    {
      path: '/', // Route for root URL ("/")
      element: <> 
   {/* <div className="bg-no-repeat bg-cover" style={{backgroundImage: `url(${})`}}> */}
      <Header/>
      <Section1/>
      <Navbar/>
      {/* </div> */}
      </>
    },
    {
      path: '/Section1',
      element: <> 
      {/* <div className="bg-no-repeat bg-cover" style={{backgroundImage: `url(${})`}}> */}
      <Header/>
      <Section1/>
      <Navbar/>
      {/* </div> */}
      </>
  
   
    },
    {
      path: '/Section2',
      element: <> 
       <Header/>
      <Section2/>
      <Navbar className="absolute bottom-0 "/>
      </>
    },
    {
      path: '/Section3',
      element: <>
      <Header/> 
      <Section3/>
      <Navbar/>
      </>
    },
    {
      path: '/Section4',
      element: <> 
      <Header/>
      <Section4/>
      <Navbar />
      </>
    }
    
  ])

  return (
    <>
   
    
       
   
        <RouterProvider router={router} />
     {/* <Section1/>
     <Section2/>
     <Section3/>
     <Section4/> */}

    </>
  );
}

export default App;
