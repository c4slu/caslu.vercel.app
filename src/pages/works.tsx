import Footer from './components/home/footer';
import Navbar  from './components/home/nav';
import MainWorks from './components/works/main';
export default function Workds() {

  return (
    <div className="mb-10 bg-black">
      <Navbar />
      <div className="mt-20">
        <MainWorks />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );

}