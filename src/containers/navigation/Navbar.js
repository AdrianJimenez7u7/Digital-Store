import {connect } from "react-redux";

function Navbar() {
    return(
    <nav className="w-full py-10 shadow-md fixed">
        <div className="bg-white px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                        PSICOLOGIA
                    </h3>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                    <h3 className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">
                        PSICOLOGIA
                    </h3>
                    <button type="button" className="relative inline-flex items-center py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                        Cita
                    </button>
                </div>
                

            </div>
        </div>
    </nav>
    )
}

const mapStateToProps = state=>([

])

export default connect(mapStateToProps, {

}) (Navbar)