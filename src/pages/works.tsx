import Head from 'next/head';
import Footer from '../components/footer';
import Navbar  from '../components/nav';
import MainWorks from "../components/works/main";
export default function Workds() {


  return (
    <>
      <Head>
        <title>Caslu \\ Works</title>
      </Head>
      ;
      <div className=" bg-black">
        <Navbar />
        <div className="mt-5">
          <MainWorks />
        </div>

      </div>
    </>
  );

}