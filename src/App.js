import {BrowserRouter,Routes,Route} from "react-router-dom"


import Home from "./components/Home"
import About from "./components/About"
import Shop from "./components/Shop"
import SpecificShop from "./components/SpecificShop"


import "./App.css"


const App = ()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shop/:1" element={<SpecificShop />} />
    </Routes>
  </BrowserRouter>
  
)

export default App;
