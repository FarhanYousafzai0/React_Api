import React, { useState } from "react";
import { useReducer } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [products, setProducts] = useState([]); // Store multiple form submissions

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if(!name || !email || !message){
      dispatch({type:EMPTY_VALUE})
    }
    e.preventDefault();

    // Store the new product in the array
    setProducts([...products, formData]);

    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };
const reducer = ()=>{};

const initailState ={

  error:false,
  success:false,
  message:'',
  data:'',
}


  const [state,dispatch] = useReducer(reducer,initailState)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#111827] px-4">
      <div className="w-full max-w-md p-6 rounded-2xl border-2 border-transparent bg-white bg-opacity-10 backdrop-blur-lg shadow-lg 
                      transition-all duration-300 hover:border-gradient-to-r hover:from-purple-500 hover:to-blue-500">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">Add Product</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-3 bg-transparent border border-gray-400 rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 bg-transparent border border-gray-400 rounded-l  focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Product Description"
            rows="3"
            className="w-full p-3 bg-transparent border border-gray-400 rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500  p-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Add Product 🚀
          </button>
        </form>
      </div>

      {/* Product List */}
      {products.length > 0 && (
        <div className="mt-8 w-full p-10 ">
          <h2 className="text-xl text-white font-semibold text-center mb-4">Product List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((item, index) => (
              <div key={index} className="bg-white w-full bg-opacity-10 p-10 rounded-lg shadow- border border-gray-500">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-blaack">{item.email}</p>
                <p className="text-blaack">{item.message}</p>
                <button className="bg-red-600 mt-9 p-3 rounded-md cursor-pointer text-white">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
