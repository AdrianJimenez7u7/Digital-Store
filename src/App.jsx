import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import Error404 from "containers/error/Error404";
import Products from "containers/pages/Products";
import Footer from "containers/navigation/Footer";
import Navbar from "containers/navigation/Navbar";
import LateralBar from "components/lateralBar";
import Categories from "containers/pages/Categories";
import Login from "containers/pages/Login";
function App() {
  return (    
    <Provider store={store}>  
        <BrowserRouter>
          <NavigationWrapper/>
        </BrowserRouter>    
    </Provider>  
  );
}

function NavigationWrapper() {
  // Verifica si la ruta actual está en las rutas con LateralBar
  //const showPagesClass = lateralBarRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <div className="pages" >     
      <LateralBar/>
      <Routes>
        <Route path="*" element={<Error404/>} />
        <Route path="/products" element={<Products/>} />   
        <Route path="/categories" element={<Categories/>} />
      </Routes>
      </div>     
    </>
  );
}

export default App