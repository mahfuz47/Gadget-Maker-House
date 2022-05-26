import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "79b4e9d89e0427cc256d9618a64c72fc";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          console.log(img);
          const review = {
            name: data.name,
            opinion: data.review,
            ratings: data.ratings,
            img: img,
          };
          // send to database
          fetch("http://localhost:5000/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add the Product");
              }
            });
        }
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-6/12 bg-base-100 shadow-xl px-3">
        <h2 className="text-3xl text-indigo-700 font-bold text-center uppercase">
          Add a Review
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full"
              {...register("toolName", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.tool?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.tool.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              className="input input-bordered w-full"
              {...register("description", {
                required: {
                  value: true,
                  message: "description is Required",
                },
              })}
            />
            <label className="label">
              {errors.review?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.review?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className="input input-bordered w-full"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.review?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.review?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
              {...register("price", {
                required: {
                  value: true,
                  message: "price is Required",
                },
              })}
            />
            <label className="label">
              {errors.ratings?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.ratings?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Minimum Order Quantity
              </span>
            </label>
            <input
              type="number"
              placeholder="minimum quantity"
              className="input input-bordered w-full"
              {...register("minQuantity", {
                required: {
                  value: true,
                  message: "minimum quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.ratings?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.ratings?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Available Order Quantity
              </span>
            </label>
            <input
              type="number"
              placeholder="available quantity"
              className="input input-bordered w-full"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "available quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.ratings?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.ratings?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Order Quantity</span>
            </label>
            <input
              type="number"
              placeholder="order quantity"
              className="input input-bordered w-full"
              {...register("orderQuantity", {
                required: {
                  value: true,
                  message: "order quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.ratings?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.ratings?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Tools Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full"
              {...register("toolImage", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.image?.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn w-full btn-secondary text-white"
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
