import { Footer } from "@/components/footer";
import { Main } from "@/components/Home/main";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="font-sans antialiased bg-gray-50">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
