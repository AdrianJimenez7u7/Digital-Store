import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import Error404 from "containers/error/Error404";
import Products from "containers/pages/Products";
import Footer from "containers/navigation/Footer";
import Navbar from "containers/navigation/Navbar";
import LateralBar from "components/lateralBar";
import Categories from "containers/pages/Categories";
function App() {
  return (
    
    <Provider store={store}>
      <LateralBar/>
      <div className="pages">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error404/>} />
            <Route path="/" element={<Products/>} />
            <Route path="/categories" element={<Categories/>} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </Provider>
    
  );
}

export default App