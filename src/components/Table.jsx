import React from 'react';

function Table({ products }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="col-span-12">
        <div className="overflow-auto lg:overflow-visible">
          <table className="table text-gray-400 border-separate space-y-6 text-sm table-fixed">
            <thead className="bg-gray-800 text-gray-500 dark:bg-gray-900">
              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Product</th>
                <th className="p-3">Brand</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Stock</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="products bg-gray-800 dark:bg-gray-900">
                  <td className="p-3 font-bold image">
                    <img className="rounded-full h-12 w-12 object-cover" src= {`data:image/jpeg;base64, ${product.image}`} alt={product.name} />
                  </td>
                  <td className="p-3 font-bold product-name">
                    {product.name}
                  </td>
                  <td className="p-3">
				  <div className="flex align-items-center">
								<img className="rounded-full h-12 w-12  object-cover" src= {`data:image/jpeg;base64, ${product.brand.image}`} alt="unsplash image"/>
								<div className="ml-3">
									<div className="">{product.brand.name}</div>
									<div className="text-gray-500">{product.brand.mail}</div>
								</div>
							</div>
                  </td>
                  <td className="p-3">
                    {product.category.name}
                  </td>
                  <td className="p-3 font-bold">
                    {product.price}
                  </td>
                  <td className="p-3">
                    {product.stock}
                  </td>
                  <td className="p-3">
                    <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                      <i className="material-icons-outlined text-base">{product.views}</i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
                      <i className="material-icons-outlined text-base">edit</i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                      <i className="material-icons-round text-base">delete_outline</i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
