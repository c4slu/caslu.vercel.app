import Image from 'next/image'
import { Inter } from 'next/font/google'

import NavBar from './components/home/navbar'
import Main from './components/home/main'
import Footer from './components/home/footer'

export default function Home() {
  return (
    <div className="mx-auto bg-black">
      <div className=''>
      <NavBar />
      <div className="mt-52">
        <Main />
      </div>
      <div className=''>
        <Footer />
      </div>
      </div>
    </div>
  );
}
