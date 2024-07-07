import Table from "components/Table"
import Target from "../../../components/dashboard/Target"
import Layout from "hocs/layouts/layout"
import { useEffect, useState } from "react";
import { get_product_list, get_product_list_category_page } from "redux/actions/products/products";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Tablenext from "components/table/Tablenextjs";

function Products({ get_product_list, get_product_list_category_page, products }) {
    const [noProductos, setNoProductos] = useState(0);


    const param = useParams();
    const slug = param.slug;
    const page = param.page;
    //console.log(param);
    useEffect(() => {

        if (slug === undefined) {
            get_product_list();
        } else {
            if (page === undefined) {
                get_product_list_category_page(slug, 1);
            } else {
                get_product_list_category_page(slug, page);
            }

        }
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


    return (
        <Layout>

            <div className="pt-5">
                <h1 className="text-gray-50 text-center text-5xl dark:text-gray-700">Productos</h1>
                <div className="m-2 justify-around flex">
                    <Target value={noProductos} name={"Productos"} />
                    <Target value={200} name={"Total Stock"} />
                </div>
                <a href="/newproduct" type="button" class="ml-8 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Nuevo Producto
                </a>
                <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Excel
                </button>
                <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    PDF
                </button>
                <div className="flex m-8 mt-3 overflow-hidden rounded-lg shadow">
                    <Table products={products || []} />
                </div>
            </div>
            <Tablenext></Tablenext>
        </Layout>
    )
}

const mapStateToProps = state => ({
    products: state.products.product_list ? state.products.product_list.products : [],
});

export default connect(mapStateToProps, {
    get_product_list,
    get_product_list_category_page
})(Products);