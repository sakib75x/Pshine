import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleuploadImage = async (item) => {
    console.log("item", item);

    const image = item?.[0] || item;

    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      formData,
    );

    return response.data?.data?.url || null;
  };

  const submit = async (data) => {
    const imageUrl = data.image ? await handleuploadImage(data.image) : null;

    console.log("image url", imageUrl);

    const productData = {
      ...data,
      image: imageUrl,
    };

    console.log("productData", productData);

    axios
      .post("https://dummyjson.com/products/add", productData)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-xl font-semibold text-neutral-900 mb-1">
          Add Product
        </h1>
        <p className="text-sm text-neutral-500 mb-6">
          Fill in the details below to list a new product.
        </p>

        <form onSubmit={handleSubmit(submit)} className="space-y-5">
          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Product Image
            </label>
            <label>
              <input
                {...register("image")}
                type="file"
                accept="image/*"
                className=""
              />
            </label>
          </div>

          {/* Product name */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Product Name
            </label>
            <input
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
              {...register("category", {
                required: true,
              })}
              name=""
              className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition bg-white"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="1">Electronics</option>
              <option value="2">Clothing</option>
              <option value="3">Home & Living</option>
              <option value="4">Books</option>
              <option value="5">Other</option>
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
                  {...register("price", {
                    required: true,
                  })}
                  type="number"
                  required
                  min={5}
                  max={100}
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
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
