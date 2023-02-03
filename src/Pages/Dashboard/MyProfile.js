import React from "react";
import { useNavigate } from "react-router-dom";
import useProfileData from "../../Hooks/useProfileData";
import Loading from "../../Utilities/Loading";
import Title from "../../Utilities/Title";
const MyProfile = () => {
  const navigate = useNavigate();

  const [profile, loading] = useProfileData();
  console.log(profile);
  const handleNavigate = (id) => {
    navigate(`/updateProfile/${id}`);
  };
  return (
    <div className="hero h-full bg-base-100">
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Title title="Profile"></Title>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={profile ? profile.myphotourl : ""}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-2xl font-bold leading-6  text-purple-600">
                      Profile
                    </h3>{" "}
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Personal information and attachments.
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigate(profile?._id)}
                    className="btn btn-secondary btn-sm uppercase text-white"
                  >
                    Update
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {profile ? profile?.name : ""}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {profile ? profile?.email : ""}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Education
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {profile ? profile?.education : ""}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {profile ? profile?.phone : ""}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {profile ? profile?.address : ""}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Passion
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {profile ? profile?.passion : ""}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Attachments
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <a
                        className="text-indigo-500 hover:text-indigo-600 no-underline px-1 font-bold btn-ghost rounded-xl py-1"
                        target="_blank"
                        rel="noreferrer"
                        href={profile ? profile?.facebook : ""}
                      >
                        Facebook
                      </a>
                      <a
                        className="text-indigo-500 hover:text-indigo-600 no-underline px-1 font-bold btn-ghost rounded-xl py-1"
                        target="_blank"
                        rel="noreferrer"
                        href={profile ? profile?.twitter : ""}
                      >
                        Twitter
                      </a>
                      <a
                        className="text-indigo-500 hover:text-indigo-600 no-underline px-1 font-bold btn-ghost rounded-xl py-1"
                        target="_blank"
                        rel="noreferrer"
                        href={profile ? profile?.github : ""}
                      >
                        Git Hub
                      </a>
                      <a
                        className="text-indigo-500 hover:text-indigo-600 no-underline px-1 font-bold btn-ghost rounded-xl py-1"
                        target="_blank"
                        rel="noreferrer"
                        href={profile ? profile?.stackoverflow : ""}
                      >
                        Stackoverflow
                      </a>
                      <a
                        className="text-indigo-500 hover:text-indigo-600 no-underline px-1 font-bold btn-ghost rounded-xl py-1"
                        target="_blank"
                        rel="noreferrer"
                        href={profile ? profile?.linkedin : ""}
                      >
                        Linkedin
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyProfile;
