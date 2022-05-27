import React from "react";

const Features = () => {
  return (
    <div className="relative bg-white overflow-hidden my-20 py-16">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-indigo-700 sm:text-6xl">
              Have A look!
            </h1>
            <p className="mt-4 text-xl texxt-gray-500">
              Our company always takes customer satisfaction as our service goal
              and provides integrated services for customers. With profound
              industry experience and extensive resources, the company continues
              to explore new markets, strive to build a complete industrial
              model, always adhere to the business philosophy of "promise,
              win-win and mutual benefit, eternal quality", focus on the
              stainless steel industry, and has a good reputation and popularity
              in the industry.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://media.istockphoto.com/photos/steel-sheet-coils-picture-id1097843582?k=20&m=1097843582&s=612x612&w=0&h=VSb8zu48HLIRF8x5K73Xlx50Rv4rJEbPz0kdfRl-T9s="
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://media.istockphoto.com/photos/industrial-area-sunset-in-winter-picture-id1206216813?b=1&k=20&m=1206216813&s=170667a&w=0&h=APYnH9Dlziei7i3zcxTUssBrmjpPmqK7Wq2ia-22-jw="
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://i.ytimg.com/vi/ivp3rZcsOTo/hqdefault.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://previews.123rf.com/images/fanjianhua/fanjianhua1706/fanjianhua170600620/80665830-interior-view-of-a-steel-factory-steel-industry-in-city-of-china-.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://i0.wp.com/www.bioenergyconsult.com/wp-content/uploads/2021/07/green-steel-production.jpg?ssl=1"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1474674556023-efef886fa147?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RlZWwlMjBmYWN0b3J5fGVufDB8fDB8fA%3D%3D&w=1000"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://cdn.pixabay.com/photo/2017/04/28/09/01/architecture-2267789__340.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/"
                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
