import React from 'react';
import { useLocation } from 'react-router-dom';

function Category({ category }) {
    return (
        <div className="block rounded-3xl bg-white shadow-xl dark:bg-gray-900 text-center w-64 h-80 m-2 mx-4 overflow-hidden carta hover:transform hover:-translate-y-2">
            <a href="#!">
                <img className="rounded-t-lg object-cover w-full h-28" src={`data:image/jpeg;base64, ${category.image}`} alt="" />
            </a>
            <div className="p-6">
                <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                    {category.name}
                </h5>
                <p className="mb-2 text-base text-center h-5 overflow-hidden text-neutral-500 dark:text-neutral-300 ">
                    {category.description}
                </p>
                <a href={`/products/${category.slug}/1`}
                    className="mt-1 inline-block rounded bg-purple-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Ver Productos
                </a>
                
            </div>
            <div className="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
                <h5 className="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
                    <span
                        className="inline-block whitespace-nowrap rounded-[0.27rem] bg-gray-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-700">
                        {category.views}
                    </span>
                    <span className="ml-2">
                        Vistas
                    </span>
                </h5>
            </div>
        </div>
    );
}

function DetailsCategory({ categories }) {
    const location = useLocation();

    const renderCategories = (categories) => {
        return categories.map((category) => (
            <Category key={category.id} category={category} />
        ));
    };

    const renderSubCategories = (categories) => {
        return categories.flatMap((category) => {
            if (category.sub_categories && category.sub_categories.length > 0) {
                return [
                    <Category key={category.id} category={category} />,
                    renderCategories(category.sub_categories)
                ];
            } else {
                return <Category key={category.id} category={category} />;
            }
        });
    };

    return (
        <>
            {categories && renderSubCategories(categories)}
        </>
    );
}

export default DetailsCategory;
