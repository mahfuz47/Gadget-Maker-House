import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Title from "../../Utilities/Title";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "bbf2e00be48e3b47840eb1523b3c0438";

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
          const toolImage = result.data.url;
          const review = {
            toolName: data.toolName,
            description: data.description,
            quantity: data.quantity,
            price: data.price,
            toolImage,
            minQuantity: data.minQuantity,
            availableQuantity: data.availableQuantity,
            orderQuantity: data.orderQuantity,
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
    <div className="flex min-h-screen justify-center items-center">
      <Title title="Add Products"></Title>
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
              {errors.toolName?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.toolName.message}
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
              {...register("image", {
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
