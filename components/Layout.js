import Footer from './Footer'
import Navbar from './Navbar'
import Image from 'next/image';

export default function Layout ({ children }) {
  return (
    <>
        <Navbar />
        { children }
        <Footer />
    </>
    );
}