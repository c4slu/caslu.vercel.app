import Main from "@/components/about/main";
import Footer from "@/components/footer";
import Navbar from "@/components/nav";

export default function About() {
  return (
    <div>
      <Navbar />
      <div>
        <Main />
      </div>
      <div className="flex justify-center my-6">
        <Footer />
      </div>
    </div>
  );
}