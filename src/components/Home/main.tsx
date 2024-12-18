"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import contentfulClient from "@/contentful/contenfulClients";
import { TypeCompanyProfileSkeleton } from "@/contentful/types/servicesPost.type";
import { useEffect, useState } from "react";

const getServicesPost = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeCompanyProfileSkeleton>({
      content_type: "companyProfile",
    });

    console.log(data.items); // Menampilkan data yang diambil
    return data.items; // Mengembalikan hanya items yang diperlukan
  } catch (err) {
    console.error(err);
    return [];
  }
};

export function Main() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServicesPost();
      setPosts(data.slice(0, 6)); // Update the state to only include the 6 most recent posts
    };

    fetchData();
  }, []);

  const testimonials = [
    {
      text: "LKP Mandiri memberikan pengalaman belajar terbaik!",
      name: "Anis W.",
      image: "/ava.png",
    },
    {
      text: "Program yang sangat membantu untuk pemula.",
      name: "Ayu S.",
      image: "/ava2.jpg",
    },
    {
      text: "Kursus yang sangat bermanfaat dan instruktur profesional.",
      name: "Budi S.",
      image: "/ava.png",
    },
    {
      text: "Saya siap kerja setelah ikut kursus ini!",
      name: "Citra R.",
      image: "/ava2.jpg",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Advance Your Career with <br /> Ghifar's Tech Company
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Tingkatkan kemampuanmu untuk masa depan yang lebih baik dengan program
          pelatihan komprehensif.
        </p>
      </section>

      {/* Statistics */}
      <section className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 py-12 bg-gray-100">
        {["250+ Siswa", "30 Mentor", "8 Program"].map((stat, index) => (
          <div
            key={index}
            className="text-center transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2 drop-shadow-sm">
              {stat.split(" ")[0]}
            </h2>
            <p className="text-gray-600 text-lg">{stat.split(" ")[1]}</p>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="bg-white py-14">
        <div className="w-full mx-auto flex flex-col sm:flex-row items-center gap-10 sm:gap-52 px-8 sm:px-24">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              About Ghifar's Tech Company
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ghifar's Tech Company adalah perusahaan yang berfokus pada
              pengembangan keterampilan digital untuk membantu individu memulai
              atau mengembangkan karir mereka di dunia teknologi.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/abouthome.png"
              alt="Ghifar's Tech Company"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-14 bg-white">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Program-program Terbaik untuk Mengawali Karirmu
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 justify-items-center">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col h-full"
            >
              <img
                src={post.fields.image.fields.file.url}
                alt={post.fields.title}
                className="object-cover w-full h-40" // Keep the image size consistent
              />
              <div className="p-6 flex-grow">
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  {post.fields.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {post.fields.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/services">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all">
              Load More
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-14">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Pendapat Orang-orang tentang Ghifar's Tech Company
        </h3>
        <div className="px-8">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000 }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg text-center h-full transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-blue-500 mb-4"
                  />
                  <p className="italic text-gray-600 mb-4">
                    "{testimonial.text}"
                  </p>
                  <h5 className="font-semibold text-blue-700">
                    {testimonial.name}
                  </h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
