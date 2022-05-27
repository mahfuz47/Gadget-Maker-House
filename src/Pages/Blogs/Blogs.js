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
                  <p>
                    <b>Ans:</b> Optimized framework and state variable useage in
                    every dynamic cases could be help to optimize the react
                    application. Code-splitting in React using dynamically and
                    using react hooks are very initiative. The react hooks are
                    much more powerful and full optimized. At last, the data
                    files, should be compressed in any cases to optimize fast.
                  </p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    2. What are the different ways to manage a state in a React
                    application?
                  </h1>
                  <p>
                    <b>Ans:</b> There are four types of state vaiable. Local
                    state, Global state, Server state and URL state. Local state
                    is the data when we manage in one or another component.
                    Global state is the data when we manage across multiple
                    components. Server state is the data that comes from an
                    external server that must be integrated with our UI state.
                    And the last one URL state is the data that exists on our
                    URLs, including the pathname and query parameters.
                  </p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    3.How does prototypical inheritance work?
                  </h1>
                  <p>
                    <b>Ans:</b> Javascript will be used to add methods and
                    properties in objects in the feature, Which name is The
                    Prototypal Inheritance. It is a method by which an object
                    can inherit the properties and methods of another object.
                    When we read a property from an object, and it’s missing,
                    JavaScript automatically takes it from the prototype. In
                    programming, this is called “prototypal inheritance”.
                  </p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    4.You have an array of products. Each product has a name,
                    price, description, etc. How will you implement a search to
                    find products by name?
                  </h1>
                  <p>
                    <b>Ans. </b>
                    const findProduct = arrayOfProducts.filter((product) =>
                    product.name === name.
                  </p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    5. What is a unit test? Why should write unit tests?
                  </h1>
                  <p>
                    <b>Ans.</b> A unit test runs some code over a segment of
                    your program checking the input and output. JavaScript Unit
                    Testing is a method where JavaScript test code is written
                    for a web page or web application module. It is then
                    combined with HTML as an inline event handler. executed in
                    the browser to test if all functionalities are working as
                    desired.
                  </p>
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
