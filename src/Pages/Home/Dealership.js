import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Dealership = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const info = {
      name: data.name,
      query: data.query,
      phone: data.phone,
    };
    // send to database
    fetch("https://gadget-maker-house-server.onrender.com/info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Questions added successfully");
          reset();
        } else {
          toast.error("Failed to submit");
        }
      });
  };

  return (
    <>
      <div className="my-12">
        <h2 className="text-4xl font-bold text-start text-center">
          Dealership
        </h2>
      </div>
      <div className="bg-gray-50 rounded-xl border-8 border-x-8 border-y-8 border-solid border-gray-100 p-4">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-5 col-span-12 gap-4">
            <h2 className="lg:text-3xl text-xl font-extrabold tracking-tight text-gray-900">
              <span className="block">
                Want to discuss on dealership with Us?
              </span>
              <span className="block text-indigo-600">
                Please drop some questions and information, we will contact you
                soon..
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 col-span-12 bg-base-100 shadow-xl p-4 rounded-lg">
            <h2 className="text-purple-700 text-2xl font-bold text-center">
              Query Form
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
                      {errors.name?.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Questions</span>
                </label>
                <input
                  type="text"
                  placeholder="Questions"
                  className="input input-bordered w-full"
                  {...register("query", {
                    required: {
                      value: true,
                      message: "Questions is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.query?.type === "required" && (
                    <span className="label-text font-bold-alt text-red-500">
                      {errors.query?.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Contact number</span>
                </label>
                <input
                  type="number"
                  placeholder="contact number"
                  className="input input-bordered w-full"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Contact is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text font-bold-alt text-red-500">
                      {errors.phone?.message}
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
      </div>
    </>
  );
};

export default Dealership;
