import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '../components/home/nav'
import Main from '../components/home/main'
import Footer from '../components/home/footer'

export default function Home() {
  return (
    <div className="mx-auto bg-black">
      <div className='mb-10'>
      <Navbar />
      <div className="mt-56">
        <Main />
      </div>
      <div className=''>
        <Footer />
      </div>
      </div>
    </div>
  );
}
