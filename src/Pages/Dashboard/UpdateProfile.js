import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useProfileData from "../../Hooks/useProfileData";
import Title from "../../Utilities/Title";
const UpdateProfile = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useProfileData();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "660e13aa92adcb40f7f24dc490320425";
  const handleDeleteData = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const url = `http://localhost:5000/profile/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = profile.filter((data) => data._id !== id);
          toast("Data Cleared");
          setProfile(remaining);
        });
    }
  };
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
          const myPhoto = result.data.url;
          console.log(myPhoto);
          const profile = {
            name: user?.displayName,
            passion: data.passion,
            email: user.email,
            myphotourl: myPhoto,
            phone: data.phone,
            address: data.address,
            education: data.education,
            stackoverflow: data.stackoverflow,
            facebook: data.facebook,
            twitter: data.twitter,
            linkedin: data.linkedin,
            github: data.github,
          };
          // send to database
          fetch(`http://localhost:5000/profile`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(profile),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                toast.success("Profile Updated");
                reset();
              } else {
                toast.error("Please Clear the Data first");
              }
            });
        }
      });
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Title title="Update"></Title>
      <div className="card w-6/12 bg-base-100 shadow-xl px-3">
        <h2 className="text-3xl text-indigo-700 font-bold text-center uppercase">
          Update Profile
        </h2>
        <div className="flex justify-end">
          <button
            onClick={() => handleDeleteData(id)}
            className="btn-sm btn-secondary btn text-white"
          >
            Clear Data
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input
              input-bordered w-full"
              value={user?.displayName}
              disabled
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              className="input
              input-bordered w-full"
              value={user?.email}
              disabled
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Passion</span>
            </label>
            <input
              type="text"
              placeholder="Passion"
              className="input input-bordered
              w-full"
              {...register("passion", {
                required: {
                  value: true,
                  message: "passion is Required",
                },
              })}
            />
            <label className="label">
              {errors.passion?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.passion?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="Phone"
              className="input input-bordered
              w-full"
              {...register("phone", {
                required: {
                  value: true,
                  message: "phone is Required",
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
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Address</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered
              w-full"
              {...register("address", {
                required: {
                  value: true,
                  message: "address is Required",
                },
              })}
            />
            <label className="label">
              {errors.address?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.address?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Education</span>
            </label>
            <input
              type="text"
              placeholder="Education"
              className="input
              input-bordered w-full"
              {...register("education", {
                required: {
                  value: true,
                  message: "education is Required",
                },
              })}
            />

            <label className="label">
              {errors.education?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.education?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                Stackoverflow Id link
              </span>
            </label>
            <input
              type="text"
              placeholder="stackoverflow"
              className="input
              input-bordered w-full"
              {...register("stackoverflow", {
                required: {
                  value: true,
                  message: "stackoverflow is Required",
                },
              })}
            />
            <label className="label">
              {errors.stackoverflow?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.stackoverflow?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Facebook Id</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              className="input
              input-bordered w-full"
              {...register("facebook", {
                required: {
                  value: true,
                  message: "facebook is Required",
                },
              })}
            />
            <label className="label">
              {errors.facebook?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.facebook?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Twitter Id</span>
            </label>
            <input
              type="text"
              placeholder="twitter"
              className="input input-bordered
              w-full"
              {...register("twitter", {
                required: {
                  value: true,
                  message: "twitter is Required",
                },
              })}
            />
            <label className="label">
              {errors.twitter?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.twitter?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Github</span>
            </label>
            <input
              type="text"
              placeholder="twitter"
              className="input input-bordered
              w-full"
              {...register("github", {
                required: {
                  value: true,
                  message: "github is Required",
                },
              })}
            />
            <label className="label">
              {errors.github?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.github?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">linkedin Id</span>
            </label>
            <input
              type="text"
              placeholder="twitter"
              className="input input-bordered
              w-full"
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "linkedin is Required",
                },
              })}
            />
            <label className="label">
              {errors.linkedin?.type === "required" && (
                <span className="label-text font-bold-alt text-red-500">
                  {errors.linkedin?.message}
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

export default UpdateProfile;
