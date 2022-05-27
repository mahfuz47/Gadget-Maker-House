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
                    1. What is the difference between javascript and node js?
                  </h1>
                  <p>
                    JavaScript is a programming language, which runs in web
                    browsers.Node.js also holds a lot of relative libraries,
                    which we normally use in javascript for general purpose
                    programming language. NodeJS is a cross-platform and
                    opensource Javascript runtime environment that allows the
                    javascript to be run on the server-side. Javascript is a
                    high-level programming language that uses the concept of
                    Oops but it is based on prototype inheritance.
                  </p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    1. What is the difference between javascript and node js?
                  </h1>
                  <p>
                    JavaScript is a programming language, which runs in web
                    browsers.Node.js also holds a lot of relative libraries,
                    which we normally use in javascript for general purpose
                    programming language. NodeJS is a cross-platform and
                    opensource Javascript runtime environment that allows the
                    javascript to be run on the server-side. Javascript is a
                    high-level programming language that uses the concept of
                    Oops but it is based on prototype inheritance.
                  </p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    1. What is the difference between javascript and node js?
                  </h1>
                  <p>
                    JavaScript is a programming language, which runs in web
                    browsers.Node.js also holds a lot of relative libraries,
                    which we normally use in javascript for general purpose
                    programming language. NodeJS is a cross-platform and
                    opensource Javascript runtime environment that allows the
                    javascript to be run on the server-side. Javascript is a
                    high-level programming language that uses the concept of
                    Oops but it is based on prototype inheritance.
                  </p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    2. When should you use node js and when should you use mongo
                    db?
                  </h1>
                  <p>
                    when application needs the ability to persistently store
                    data in a way that you can efficiently query or update it
                    later, then I should typically use MongoDb. Node.js is an
                    interpreter or runtime/ running environment for JavaScript.
                    built on Chrome's V8 JavaScript engine. responsibility is
                    especially to execute your application.is a No-SQL database
                    for storing data. when you need high availability of data
                    with automatic, fast, and instant data recovery.
                  </p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    3. What is the difference between sql and no sql database?
                  </h1>
                  <p>
                    SQL databases are vertically scalable, while NoSQL databases
                    are horizontally scalable.NoSQL databases have dynamic
                    schemas for unstructured data, and the data is stored in
                    many ways.SQL databases are primarily called as Relational
                    Databases (RDBMS).NoSQL database are primarily called as
                    non-relational or distributed database. In almost all
                    situations SQL databases are vertically scalable. But on the
                    other hand NoSQL databases are horizontally scalable.
                  </p>
                </div>
                <div className="bg-indigo-200 hover:scale-105 p-10 rounded-2xl">
                  <h1 className="text-2xl font-bold font-serif mb-2">
                    4. What is the purpose of JWT and how does it work?
                  </h1>
                  <p>
                    JSON Web Token is a standard used to create access tokens
                    for an application. It works this way: the server generates
                    a token that certifies the user identity, and sends it to
                    the client. The purpose of using JWT is not to hide data but
                    to ensure the authenticity of the data. JWT is signed and
                    encoded, not encrypted.
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
