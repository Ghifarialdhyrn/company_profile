"use client";
import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";

const Teams: NextPage = () => {
  const [results, setResults] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Define expertise based on the programs
  const expertise = [
    "Digital Marketing",
    "Data Analysis",
    "Pemrograman Dasar",
    "Desain Grafis",
    "SEO Optimization",
    "Copywriting",
    "Video Editing",
    "UI/UX Design",
  ];

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/?results=20");
      const { results } = await res.json();
      setResults(results);
    };

    fetchData();
  }, []);

  // Pagination logic
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = results.slice(startIndex, endIndex);

  // Total pages
  const totalPages = Math.ceil(results.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-10">
      <Head>
        <title>Meet Our Team</title>
      </Head>
      <main className="py-16 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-white">
            Meet Our Amazing Team
          </h2>
          <p className="text-lg text-white mb-12 max-w-3xl mx-auto opacity-90 transition-all duration-500 hover:opacity-100">
            Our team is a group of passionate individuals with diverse
            expertise, all working together to deliver top-quality services for
            your success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {paginatedUsers.map((user: any, index: number) => (
              <div
                key={user.login.uuid}
                className="group bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={user.picture.large}
                  alt={user.name.first}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mt-6 transition-all duration-300 transform group-hover:scale-110"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-center text-gray-800 mb-2">
                    {user.name.first} {user.name.last}
                  </h4>
                  <p className="text-center text-sm text-gray-600 mb-4">
                    {user.email}
                  </p>
                  <p className="text-center text-gray-500 text-sm mb-4 font-bold">
                    Expertise: {expertise[index % expertise.length]}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold transform hover:scale-105 transition-all">
                      View Profile
                    </button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full text-sm font-semibold transform hover:scale-105 transition-all">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-full mx-2 transition-all duration-300 hover:bg-indigo-700"
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span className="text-lg text-white">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-full mx-2 transition-all duration-300 hover:bg-indigo-700"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Teams };
