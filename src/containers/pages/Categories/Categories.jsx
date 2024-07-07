import Target from "../../../components/dashboard/Target";
import Layout from "hocs/layouts/layout";
import { get_categories } from "redux/actions/categories/categories";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import DetailsCategory from "components/dashboard/Details";

function Categories({get_categories, categories}) {
    const [noCategories, setNoCategories] = useState(0);

    useEffect(() => {
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
                <a href="/category/new" type="button" class="ml-8 mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Nueva Categoria
                    </a>
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Excel
                    </button>
                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        PDF
                    </button>

                <div className="flex flex-wrap m-8 mt-1 overflow-y-auto overflow-x-hidden rounded-lg shadow justify-normal">
                    
                    <DetailsCategory categories={categories&&categories}/>
                </div>
            </div>
        </Layout>
    );
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps, {
    get_categories,
}) (Categories);
