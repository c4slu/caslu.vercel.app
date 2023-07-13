import Main from "@/components/about/main";
import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>Caslu \\ About</title>
      </Head>
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