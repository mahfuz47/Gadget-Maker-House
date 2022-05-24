import React from "react";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpeg";

const Banner = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold font-mono tracking-tight text-indigo-800 sm:text-4xl">
              <span className="text-2xl">Welcome to</span> Gadget Maker House
            </h2>
            <p className="mt-4 text-gray-500">
              One of the largest manufacturing company in Asia
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 bg-gray-100 rounded-xl">
              <div className="border-t border-gray-200 pt-4 p-2">
                <dt className="font-medium text-gray-900">
                  Sustainable Products
                </dt>
                <dd className="mt-2 text-sm text-gray-500 ">
                  Our Special Engineers cares for our every single elements.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 p-2">
                <dt className="font-medium text-gray-900">Delivery and time</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  For your wholesale matters, we deliver on our conditions as
                  much as faster.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 p-2">
                <dt className="font-medium text-gray-900">Stock</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Our stock is limited for always because we always try to make
                  our best supplies.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 p-2">
                <dt className="font-medium text-gray-900">Dealership</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Our Dealers will get extra 6% discount for over the years
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 p-2">
                <dt className="font-medium text-gray-900">
                  One Day Delivery Condition
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  We care of your extra demands, so we deliver our products just
                  in 2 days on our terms and conditions.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 p-2">
                <dt className="font-medium text-gray-900">Payment Advantage</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  You dont need to worry about payments, just select and go
                  through the payment section and pay online
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src={banner1}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="bg-gray-100 rounded-lg"
              />
              <img
                src={banner2}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="bg-gray-100 rounded-lg"
              />
              <img
                src={banner3}
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="bg-gray-100 rounded-lg"
              />
              <img
                src={banner4}
                alt="Side of walnut card tray with card groove and recessed card area."
                className="bg-gray-100 rounded-lg"
              />
            </div>
            <div className="text-center my-12">
              <button className="btn bg-indigo-600 rounded-xl  w-full font-bold mt-6 hover:bg-indigo-800 text-white hover:text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
