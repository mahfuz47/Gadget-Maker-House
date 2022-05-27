import React from "react";
import Title from "../../Utilities/Title";

const Blogs = () => {
  return (
    <div>
      <Title title={"Blogs"}></Title>
      <div>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-5xl text-indigo-600  font-bold font-serif">
                Blogs of Questions
              </h2>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 bg-indigo-100 rounded-xl p-16">
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    1. How will you improve the performance of a React
                    Application?
                  </h1>
                  <p></p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    2. What are the different ways to manage a state in a React
                    application?
                  </h1>
                  <p></p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    3.How does prototypical inheritance work?
                  </h1>
                  <p></p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    4. Why you do not set the state directly in React. For
                    example, if you have const [products, setProducts] =
                    useState ([]). Why you do not set products = [...] instead,
                    you use the setProducts
                  </h1>
                  <p></p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    5.You have an array of products. Each product has a name,
                    price, description, etc. How will you implement a search to
                    find products by name?
                  </h1>
                  <p></p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    6. What is a unit test? Why should write unit tests?
                  </h1>
                  <p></p>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
