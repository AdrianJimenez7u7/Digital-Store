import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import Error404 from "containers/error/Error404";
import Home from "containers/pages/home";
import Footer from "containers/navigation/Footer";
import Navbar from "containers/navigation/Navbar";
import LateralBar from "components/lateralBar";
function App() {
  return (
    
    <Provider store={store}>
      <LateralBar/>
      <div className="pages">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error404/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </Provider>
    
  );
}

export default App