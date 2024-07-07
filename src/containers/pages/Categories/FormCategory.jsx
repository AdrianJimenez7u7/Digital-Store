import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { get_categories_list } from "redux/actions/categories/categories";

export function FormCategory({ get_categories_list, categories }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    parent: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example of how to handle form submission with image upload
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("parent", formData.parent);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    // Dispatch an action to handle form submission or API call
    console.log("Form Data:", formDataToSend);

    // Example dispatch to Redux action
    // saveCategory(formDataToSend);
  };

  useEffect(() => {
    get_categories_list();
  }, [get_categories_list]);

  return (
    <div className="pt-5">
      <h1 className="text-gray-900 text-center text-5xl dark:text-gray-100">
        Nueva Categoria
      </h1>
      <div className="flex m-80 mt-3 overflow-hidden rounded-lg shadow justify-center bg-gray-100 dark:bg-gray-900 p-3">
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          />
          <label
            htmlFor="Parent"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Categoria
          </label>
          <select
            id="parents"
            name="parent"
            value={formData.parent}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category) => (
              <option 
              className=""
              key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <input
            type="file"
            id="user_avatar"
            name="image"
            onChange={handleInputChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
          />
          <button
            type="submit"
            className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories ? state.categories.categories: [],
});

export default connect(mapStateToProps, {
  get_categories_list,
})(FormCategory);
