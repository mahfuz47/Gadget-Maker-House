import React from "react";
import { useNavigate } from "react-router-dom";
import useProfileData from "../../Hooks/useProfileData";
const MyProfile = () => {
  const navigate = useNavigate();

  const [profile] = useProfileData();
  console.log(profile);
  const {
    myphotourl,
    name,
    email,
    phone,
    address,
    education,
    passion,
    facebook,
    twitter,
    linkedin,
    github,
    stackoverflow,
  } = profile;

  const handleNavigate = () => {
    navigate(`/updateProfile`);
  };
  return (
    <div className="hero h-full bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={myphotourl}
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
                onClick={() => handleNavigate()}
                className="btn btn-secondary btn-sm uppercase text-white"
              >
                Update
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {email}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {education}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {phone}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {address}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Passion</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {passion}
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
                    href={facebook}
                  >
                    Facebook
                  </a>
                  <a
                    className="text-indigo-500 hover:text-indigo-600 no-underline px-1 font-bold btn-ghost rounded-xl py-1"
                    target="_blank"
                    rel="noreferrer"
                    href={twitter}
                  >
                    Twitter
                  </a>
                  <a
                    className="text-indigo-500 hover:text-indigo-600 no-underline px-1 font-bold btn-ghost rounded-xl py-1"
                    target="_blank"
                    rel="noreferrer"
                    href={github}
                  >
                    Git Hub
                  </a>
                  <a
                    className="text-indigo-500 hover:text-indigo-600 no-underline px-1 font-bold btn-ghost rounded-xl py-1"
                    target="_blank"
                    rel="noreferrer"
                    href={stackoverflow}
                  >
                    Stackoverflow
                  </a>
                  <a
                    className="text-indigo-500 hover:text-indigo-600 no-underline px-1 font-bold btn-ghost rounded-xl py-1"
                    target="_blank"
                    rel="noreferrer"
                    href={linkedin}
                  >
                    Linkedin
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
