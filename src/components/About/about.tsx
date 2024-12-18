import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <main className="py-16 bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
        {/* Hero Section */}
        <section className="text-center py-24">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-xl transform transition duration-500 hover:scale-105">
            About Ghifar's Tech Company
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90 transition-all duration-500 hover:opacity-100">
            Ghifar's Tech Company is dedicated to empowering individuals through
            digital skill development, helping them kick-start or enhance their
            careers in the tech industry.
          </p>
          <div className="flex justify-center space-x-8 mt-8">
            <img
              src="/abouthome.png"
              alt="Tech Training"
              className="rounded-lg shadow-xl w-1/5 transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            />
            <img
              src="/desaingrafis.png"
              alt="Tech Training"
              className="rounded-lg shadow-xl w-1/5 transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            />
            <img
              src="/dataanalis.png"
              alt="Tech Training"
              className="rounded-lg shadow-xl w-1/5 transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            />
          </div>
        </section>

        {/* Our Mission and Vision */}
        <section className="px-8 py-16 text-center bg-white rounded-lg shadow-2xl mb-16 transition-all duration-500 hover:shadow-2xl">
          <h3 className="text-4xl font-bold text-gray-800 mb-8 transition-all duration-500 hover:text-blue-600">
            Our Mission & Vision
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="transform transition-transform duration-300 hover:scale-105">
              <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  Mission
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to provide high-quality training in technology
                  to help individuals succeed in their careers in the digital
                  industry.
                </p>
              </div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-105">
              <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  Vision
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our vision is to become a leader in technology training,
                  producing highly skilled, job-ready, and innovative
                  professionals in the tech world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-16 text-center rounded-lg shadow-lg mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-8 transition-all duration-500 hover:text-blue-600">
            Our Impact
          </h3>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-8 transition-all duration-500 hover:text-gray-700">
            Since our inception, Ghifar's Tech Company has trained over 250
            students, providing them with the essential skills needed to excel
            in the tech industry.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center transition-all duration-500 hover:scale-105">
              <h2 className="text-5xl font-bold text-blue-600 mb-2">250+</h2>
              <p className="text-gray-600 text-lg">Students Trained</p>
            </div>
            <div className="text-center transition-all duration-500 hover:scale-105">
              <h2 className="text-5xl font-bold text-blue-600 mb-2">30</h2>
              <p className="text-gray-600 text-lg">Experienced Mentors</p>
            </div>
            <div className="text-center transition-all duration-500 hover:scale-105">
              <h2 className="text-5xl font-bold text-blue-600 mb-2">8</h2>
              <p className="text-gray-600 text-lg">Training Programs</p>
            </div>
          </div>
          <div className="flex justify-center space-x-8 mt-8">
            <img
              src="/dataanalis.png"
              alt="Impact"
              className="rounded-lg shadow-xl w-1/5 transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            />
            <img
              src="/editing.png"
              alt="Impact"
              className="rounded-lg shadow-xl w-1/5 transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            />
            <img
              src="/pemrograman.png"
              alt="Impact"
              className="rounded-lg shadow-xl w-1/5 transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-blue-600 text-white py-16 text-center rounded-lg shadow-xl mb-16">
          <h3 className="text-4xl font-bold mb-6 transition-all duration-500 hover:text-yellow-400">
            Ready to Advance Your Career?
          </h3>
          <p className="text-lg mb-8 transition-all duration-500 hover:text-gray-200">
            Join our programs today and start building your future with Ghifar's
            Tech Company.
          </p>
          <a
            href="/contact"
            className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Contact Us
          </a>
        </section>
      </main>
    </div>
  );
}
