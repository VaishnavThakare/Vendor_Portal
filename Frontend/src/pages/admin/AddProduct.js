import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddProduct() {
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    shortDescription: "",
    longDescription: "",
    unitType: "",
    size: "",
    specification: "",
    productCategory: "",
    productSubCategory: "",
  });

  useEffect(() => {
    // You can add any necessary logic or fetch data for dropdowns here
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/Product/Create`,
        productData
      );
      if (response.status === 200) alert("Product Added");
      setProductData({
        name: "",
        image: "",
        shortDescription: "",
        longDescription: "",
        unitType: "",
        size: "",
        specification: "",
        productCategory: "",
        productSubCategory: "",
      });
    } catch (error) {
      console.error("Error adding Product:", error.message);
    }
  };

  return (
    <>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 py-3 pb-8 rounded-bl-lg rounded-br-lg">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8" >
            <div className="flex text-2xl font-bold text-gray-500 mb-5">
                <h2>Create Product</h2>
            </div> 
            <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              value={productData.image}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="shortDescription" className="block mb-2 text-sm font-medium text-gray-900">
              Short Description
            </label>
            <input
              type="text"
              id="shortDescription"
              name="shortDescription"
              value={productData.shortDescription}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="longDescription" className="block mb-2 text-sm font-medium text-gray-900">
              Long Description
            </label>
            <input
              type="text"
              id="longDescription"
              name="longDescription"
              value={productData.longDescription}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="unitType" className="block mb-2 text-sm font-medium text-gray-900">
              Unit Type
            </label>
            <select
              id="unitType"
              name="unitType"
              value={productData.unitType}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
             
            </select>
          </div>

        

          <div className="mb-6">
            <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900">
              Size
            </label>
            <input
              type="number"
              id="size"
              name="size"
              value={productData.size}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="longDescription" className="block mb-2 text-sm font-medium text-gray-900">
              Specification
            </label>
            <input
              type="text"
              id="Specification"
              name="Specification"
              value={productData.specification}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="unitType" className="block mb-2 text-sm font-medium text-gray-900">
                Product Category
            </label>
            <select
              id="productCategory"
              name="productCategory"
              value={productData.productCategory}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {/* Add options based on your unit types */}
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="unitType" className="block mb-2 text-sm font-medium text-gray-900">
                Product Sub Category
            </label>
            <select
              id="productSubCategory"
              name="producSubtCategory"
              value={productData.productSubCategory}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {/* Add options based on your unit types */}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
