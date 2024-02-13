import Target from "../../components/dashboard/Target"
import Layout from "hocs/layouts/layout"

function Home() {
    return(
        <Layout>
            <div className="pt-5">
                <h1 className="text-gray-50 text-center text-5xl ">Productos</h1>
                <div className="m-2 justify-around flex">
                    <Target value={200} name={"Ventas"}/>
                    <Target value={200} name={"Productos"}/>
                    <Target value={200} name={"Agotados"}/>
                </div>
                <div class="flex inline-block m-8 mt-5 overflow-hidden rounded-lg shadow">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-500 uppercase bg-black border-b border-gray-700">
                                Id
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-500 uppercase bg-black border-b border-gray-700">
                                Nombre
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-500 uppercase bg-black border-b border-gray-700">
                                Descripcion
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-500 uppercase bg-black border-b border-gray-700">
                                existencia
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-500 uppercase bg-black border-b border-gray-700">
                                precio
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-500 uppercase bg-black border-b border-gray-700">
                                Imagen
                            </th>
                        </tr>
                    </thead>
                </table>
                </div>
            </div>
        </Layout>
    )
}

export default Home