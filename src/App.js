import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Rooms from "./pages/rooms";
import Amenities from "./pages/amenities";
import Contact from "./pages/contact";
import Photo from "./pages/photo";



import"./App.css";



function App(){
  return(
 
<BrowserRouter>
    
      <Header />
     
  

<Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/rooms" element={<Rooms/>}/>
     <Route path="/amenities" element={<Amenities/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/photo" element={<Photo/>}/>



  


</Routes>
<Footer/>
</BrowserRouter>

   
  );
}
export default App;
