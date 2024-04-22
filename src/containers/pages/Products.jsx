import Table from "components/Table"
import Target from "../../components/dashboard/Target"
import Layout from "hocs/layouts/layout"
import { useEffect, useState } from "react";
import { get_product_list } from "redux/actions/products/products";
import { connect } from "react-redux";

function Products({get_product_list, products}) {
    const [noProductos, setNoProductos] = useState(0);
    useEffect(() => {
        get_product_list();
        const obtenerNumeroCartas = () => {
            const cartas = document.querySelectorAll('.products');
            const numeroDeCartas = cartas.length;
    
            // Incrementar gradualmente el valor de noCategories
            for (let i = 1; i <= numeroDeCartas; i++) {
                setTimeout(() => {
                    setNoProductos(prevNoProductos => prevNoProductos + 1);
                }, i * 150); // Aumentar el estado cada 100 milisegundos
            }
        };

        // Llama a la función después de un breve retraso para asegurarse de que los elementos estén presentes en el DOM
        const delay = setTimeout(obtenerNumeroCartas, 100);

        // Limpia el temporizador al desmontar el componente para evitar fugas de memoria
        return () => clearTimeout(delay);
    }, []);

    return(
        <Layout>
            <div className="pt-5">
                <h1 className="text-gray-50 text-center text-5xl ">Productos</h1>
                <div className="m-2 justify-around flex">
                    <Target value={noProductos} name={"Productos"}/>
                    <Target value={200} name={"Total Stock"}/>
                    <Target value={200} name={"Agotados"}/>
                </div>
                <div className="flex m-8 mt-3 overflow-hidden rounded-lg shadow">
                <Table products={products || []}/>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    products: state.products.product_list ? state.products.product_list.products : [],
  });
  
  export default connect(mapStateToProps, {
      get_product_list
  }) (Products);