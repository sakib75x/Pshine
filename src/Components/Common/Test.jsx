import { useState } from "react";
import axios from "axios";
export default function Test() {
  const [formData, setFormData] = useState({
    name: "Mobile",
    price: "1000",
    description: "Smartphone",
    image: null,
  });

  const [uploadStatus, setUploadStatus] = useState("");

  const handleChange = (event) => {
    const { name, value, files, type } = event.target;
    console.log(name, value, files, type);

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleAddData = async (event) => {
    event.preventDefault();

    try {
      let imageUrl = "";

      if (formData.image) {
        const imagePayload = new FormData();
        imagePayload.append("image", formData.image);

        const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

        if (!apiKey) {
          setUploadStatus("Add VITE_IMGBB_API_KEY to upload images.");
          return;
        }

        setUploadStatus("Uploading image to imgbb...");

        const imageResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          imagePayload
        );

        imageUrl = imageResponse.data?.data?.url || "";
      }

      const payload = {
        name: formData.name,
        price: formData.price,
        description: formData.description,
        image: imageUrl,
      };

      const response = await axios.post(
        "https://dummyjson.com/products/add",
        payload
      );

      console.log(response.data);
      setUploadStatus("Product added successfully.");
    } catch (error) {
      console.error(error);
      setUploadStatus("Image upload failed.");
    }
  };
  return (
    <div className="min-h-screen p-4">
      <form
        className="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        onSubmit={handleAddData}
      >
        <h1 className="mb-4 text-xl font-semibold text-slate-800">Add Product</h1>

        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
          <input
            className="w-full rounded-md border border-gray-300 p-2 text-gray-900 placeholder-gray-400 outline-none focus:border-green-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium text-gray-700">Price</label>
          <input
            className="w-full rounded-md border border-gray-300 p-2 text-gray-900 placeholder-gray-400 outline-none focus:border-green-500"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="w-full rounded-md border border-gray-300 p-2 text-gray-900 placeholder-gray-400 outline-none focus:border-green-500"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">Image</label>
          <input
            className="w-full rounded-md border border-gray-300 p-2 text-gray-900 outline-none focus:border-green-500"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button
          className="rounded-lg bg-green-500 px-4 py-2 text-white font-medium hover:bg-green-600 transition-colors"
          type="submit"
        >
          Add Data
        </button>

        {uploadStatus ? (
          <p className="mt-3 text-sm text-gray-600">{uploadStatus}</p>
        ) : null}
      </form>
    </div>
  );
}
