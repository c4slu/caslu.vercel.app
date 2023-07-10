import Footer from './components/home/footer';
import NavBar  from './components/home/navbar'
import MainWorks from './components/works/main';
export default function Workds() {

  return (
    <div className=" bg-black">
      <NavBar />
      <div className="">
        <MainWorks />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );

}