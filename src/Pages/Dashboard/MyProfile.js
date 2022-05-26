import React from "react";

const MyProfile = () => {
  const profileDetails = {
    myphotourl:
      "https://scontent.fdac8-1.fna.fbcdn.net/v/t1.6435-9/167937758_975649856336680_2331237556065199555_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=fcuntipv450AX9LcRIh&_nc_ht=scontent.fdac8-1.fna&oh=00_AT9uILB-66SMThhhS-AquLVp6cgLgzGtWGjlN5f0DWX0qQ&oe=62B518A9",
    name: "Mahfuz Rahman",
    passion: "Web Developer",
    email: "mahfuz@gmail.com",
    phone: "+88017265846555",
    address: "Tongi, Gazipur, Dhaka, Bangladesh",
    education: "Honours in English",
    social: {
      facebook: "",
      twitter: "",
      linkedin: "",
      github: "",
    },
  };
  const { myphotourl, name, email, phone, address, education, passion } =
    profileDetails;
  const { facebook, twitter, linkedin, github } = profileDetails.social;
  return (
    <div>
      <h2 className="font-bold text-3xl my-5">My Profile</h2>
      <div className="grid grid-cols-2">
        <div className="w-[200px]">
          <img
            src={myphotourl}
            className="w-full object-cover rounded-md"
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl">{name}</h1>
          <h1 className="text-indigo-600">{passion}</h1>
          <div>
            <span>
              <a href={facebook}>Facebook</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
