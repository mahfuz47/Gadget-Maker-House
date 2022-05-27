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

  const imageStorageKey = "0f2051578179d1dc78313d55428ca1e6";

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
          const review = {
            name: data.name,
            opinion: data.review,
            ratings: data.ratings,
            img: img,
          };
          // send to database
          fetch("https://polar-refuge-25611.herokuapp.com/reviews", {
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
                toast.success("Review added successfully");
                reset();
              } else {
                toast.error("Failed to add the review");
              }
            });
        }
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Title title="Add Review"></Title>
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
              placeholder="Your Name"
              className="input input-bordered w-full"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Review</span>
            </label>
            <input
              type="text"
              placeholder="Review"
              className="input input-bordered w-full"
              {...register("review", {
                required: {
                  value: true,
                  message: "Review is Required",
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
              <span className="label-text font-bold">Ratings</span>
            </label>
            <input
              type="number"
              placeholder="rate out of 5"
              className="input input-bordered w-full"
              {...register("ratings", {
                required: {
                  value: true,
                  message: "ratings is Required",
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
              <span className="label-text font-bold">Your Photo</span>
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
