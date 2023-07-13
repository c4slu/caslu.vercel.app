import Head from 'next/head';
import Footer from '../components/footer';
import Navbar  from '../components/nav';
import MainWorks from '../components/works/main';
export default function Workds() {


  return (
    <>
      <Head>
        <title>Caslu \\ Works</title>
      </Head>
      ;
      <div className="mb-10 bg-black">
        <Navbar />
        <div className="mt-20">
          <MainWorks />
        </div>
        <div className="absolute bottom-0 flex justify-center w-screen my-6">
          <Footer />
        </div>
      </div>
    </>
  );

}