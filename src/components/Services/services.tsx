"use client";

import contentfulClient from "@/contentful/contenfulClients";
import { TypeCompanyProfileSkeleton } from "@/contentful/types/servicesPost.type";
import Head from "next/head";
import { useEffect, useState } from "react";

// Program data
const getServicesPost = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeCompanyProfileSkeleton>({
      content_type: "companyProfile",
    });

    console.log(data.items);
    return data.items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default function Services() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServicesPost();
      setPosts(data); // Update the state with the fetched posts
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, []);

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  // Determine the start and end index for the current page's slice
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentPrograms = posts.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / cardsPerPage);

  return (
    <div className="mt-10">
      <Head>
        <title>Our Services</title>
      </Head>
      <main className="py-16 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-white">
            Our Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 opacity-90 transition-all duration-500 hover:opacity-100">
            We offer a variety of high-quality programs designed to equip you
            with essential skills and knowledge to advance your career in the
            tech industry.
          </p>

          {/* Programs Section */}
          <section className="py-14 bg-white rounded-lg shadow-xl mb-12">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Program-program Terbaik untuk Mengawali Karirmu
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
              {loading
                ? // Skeleton loader if data is still loading
                  Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl overflow-hidden animate-pulse transform transition-all duration-300 hover:scale-105"
                      >
                        <div className="bg-gray-300 w-full h-40 mb-6"></div>
                        <div className="p-6">
                          <div className="bg-gray-300 w-3/4 h-6 mb-4"></div>
                          <div className="bg-gray-300 w-full h-4"></div>
                        </div>
                      </div>
                    ))
                : // Actual content when posts are loaded
                  currentPrograms.map((post, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <img
                        src={post.fields.image.fields.file.url}
                        alt={post.fields.title}
                        width={500}
                        height={300}
                        className="object-cover w-full h-40 transition-all duration-300 hover:scale-110"
                      />
                      <div className="p-6">
                        <h4 className="font-bold text-xl text-gray-800 mb-4">
                          {post.fields.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {post.fields.description}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => paginate(currentPage - 1)}
                className="px-4 py-2 mx-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 mx-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-indigo-700 text-white"
                      : "bg-white text-indigo-700 hover:bg-indigo-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                className="px-4 py-2 mx-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
