import Target from "../../components/dashboard/Target";
import Layout from "hocs/layouts/layout";
import { get_categories } from "redux/actions/categories/categories";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import DetailsCategory from "components/dashboard/Details";
import { get_product_list } from "redux/actions/products/products";

function Categories({get_categories, categories, get_product_list}) {
    const [noCategories, setNoCategories] = useState(0);

    useEffect(() => {
        get_product_list();
        get_categories();

        // Función para obtener el número de elementos con la clase "carta"
        const obtenerNumeroCartas = () => {
            const cartas = document.querySelectorAll('.carta');
            const numeroDeCartas = cartas.length;
    
            // Incrementar gradualmente el valor de noCategories
            for (let i = 1; i <= numeroDeCartas; i++) {
                setTimeout(() => {
                    setNoCategories(prevNoCategories => prevNoCategories + 1);
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
                <h1 className="text-black dark:text-gray-50 text-center text-5xl ">Categorias</h1>
                <div className="m-2 justify-around flex">
                    <Target value={noCategories} name={"No. Categorias"} imageURL={""}/>
                    <Target value={"200"} name={"Vistas totales"}/>
                    <Target value={200} name={"Agotados"}/>
                </div>
                <div className="flex flex-wrap m-8 mt-5 overflow-y-auto overflow-x-hidden rounded-lg shadow justify-normal">
                    <DetailsCategory categories={categories&&categories}/>
                </div>
            </div>
        </Layout>
    );
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  products: state.product_list,
});

export default connect(mapStateToProps, {
    get_categories,
    get_product_list
}) (Categories);
