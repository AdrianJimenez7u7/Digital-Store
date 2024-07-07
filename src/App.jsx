import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import Error404 from "containers/error/Error404";
import LateralBar from "components/lateralBar";
import Categories from "containers/pages/Categories/Categories";
import Login from "containers/pages/Login";
import FormCategory from "containers/pages/Categories/FormCategory";
import Products from "containers/pages/Products/Products";
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
        <Route path={"/products/:slug"} element={<Products/>} />   
        <Route path={"/products/:slug/:page"} element={<Products/>} />
        <Route path={'/products'} element={<Products/>} />   
        <Route path={'/category/new'} element={<FormCategory/>} />   
        <Route path="/categories" element={<Categories/>} />

      </Routes>
      </div>     
    </>
  );
}

export default App