
import Navbar from '../components/nav'
import Main from '../components/home/main'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className=" bg-black">
      <div className='mb-10'>
      <Navbar />
      <div className="flex sm:justify-center h-full mt-48">
        <Main />
      </div>
      <div className='absolute bottom-0 flex justify-center w-screen my-6'>
        <Footer />
      </div>
      </div>
    </div>
  );
}
