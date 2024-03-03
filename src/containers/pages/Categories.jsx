import Target from "../../components/dashboard/Target"
import Layout from "hocs/layouts/layout"
import { get_categories } from "redux/actions/categories/categories";
import { useEffect } from "react";
import { connect } from "react-redux";
import Details from "components/dashboard/Details";

function Categories({get_categories, categories}) {
    useEffect(() => {
        get_categories()
    }, [])

    return(
        <Layout>
            <div className="pt-5">
                <h1 className="text-black dark:text-gray-50 text-center text-5xl ">Categorias</h1>
                <div className="m-2 justify-around flex">
                    <Target value={200} name={"Ventas"}/>
                    <Target value={200} name={"Productos"}/>
                    <Target value={200} name={"Agotados"}/>
                </div>
                <div className="flex  m-8 mt-5 overflow-hidden rounded-lg shadow">
                    <Details name={"compu"}/>
                </div>
                
            </div>
        </Layout>
    )
}
const mapStateToProps = state => ({
  categories: state.categories.categories
})

export default connect(mapStateToProps, {
    get_categories
}) (Categories)