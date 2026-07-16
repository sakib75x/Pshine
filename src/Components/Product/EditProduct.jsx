import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

export default function EditProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log("product", product);

  const loadProduct = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  };

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData,
      )
      .then((res) => {
        console.log(res);
      });
  };

  const submit = (data) => {
    axios
      .patch(`https://dummyjson.com/products/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Product Image
        </label>
        <label>
          <input
            name="image"
            type="file"
            accept="image/*"
            className=""
            onChange={handleImageChange}
          />
        </label>
      </div>

      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-xl font-semibold text-neutral-900 mb-1">
          Edit Product
        </h1>
        <p className="text-sm text-neutral-500 mb-6">
          Fill in the details below to list a new product.
        </p>

        <form onSubmit={handleSubmit(submit)} className="space-y-5">
          {/* Image upload */}
          {/* <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Product Image
            </label>
            <label>
              <input
                name="image"
                type="file"
                accept="image/*"
                className=""
                onChange={handleImageChange}
              />
            </label>
          </div> */}

          {/* Product name */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Product Name
            </label>
            <input
              defaultValue={product?.title}
              {...register("title", {
                required: true,
                maxLength: 65,
                minLength: 3,
              })}
              type="text"
              placeholder="e.g. Wireless Mouse"
              className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition"
            />
            {errors.title?.type === "required" && (
              <p role="alert" className="text-red-400">
                Name is required
              </p>
            )}
            {errors.title?.type === "maxLength" && (
              <p role="alert" className="text-red-400">
                Maximum name length have to be 2
              </p>
            )}
            {errors.title?.type === "minLength" && (
              <p role="alert" className="text-red-400">
                Minimum name length have to be 3
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Category
            </label>
            <select
              defaultValue={product?.category}
              {...register("category", {
                required: true,
              })}
              name=""
              className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition bg-white"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home & Living">Home & Living</option>
              <option value="Books">Books</option>
              <option value="Other">Other</option>
            </select>
            {errors.category?.type === "required" && (
              <p role="alert" className="text-red-400">
                Category is require
              </p>
            )}
          </div>

          {/* Price + Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Price
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 text-sm">
                  $
                </span>
                <input
                  defaultValue={product?.price}
                  {...register("price")}
                  type="number"
                  placeholder="0.00"
                  className="w-full rounded-lg border border-neutral-300 pl-7 pr-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Description
            </label>
            <textarea
              defaultValue={product?.description}
              {...register("description", {
                required: true,
              })}
              rows={3}
              placeholder="Short description of the product..."
              className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-neutral-900 text-white text-sm font-medium rounded-lg py-2.5 hover:bg-neutral-800 transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
