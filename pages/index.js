import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col items-center font-popins bg-[#F3EBE6] justify-center min-h-screen'>
      <Head>
        <title>The Daniel Experience</title>
      </Head>
      <header
        className='w-full h-28 md:h-36 lg:h-48 bg-bottom  bg-cover'
        style={{
          backgroundImage: "url('/header-bg.png')",
          backgroundPositionX: "left",
        }}
      >
        <div className='text-lg w-full h-full flex items-center justify-center md:justify-start text-white'>
          <img
            className='w-auto  h-12 lg:h-16 ml-10 mb-5'
            src='/logo.png'
            alt='logo'
          />
        </div>
      </header>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='container mx-auto text-left'>
          <div className='mb-5'>
            <h1 className='md:text-6xl text-4xl font-bold text-main mb-5'>
              Ahoy!
            </h1>
            <p className='md:text-lg text-base'>
              Thank you for being part of my journey! I am still building my
              website, finding solutions to some new real-world problems that
              users are facing.
            </p>
          </div>
          <div className='mb-5'>
            <h1 className='md:text-2xl text-xl font-bold text-main mb-1'>
              Meanwhile
            </h1>
            <p className='md:text-lg text-base'>
              Feel free to contact me or download my profile:
            </p>
            <p className='md:text-lg text-base'>Hi@thedanielexperience.com</p>
            <p className='md:text-lg text-base'>+964 750 244 9783</p>
          </div>
          <button className='btn btn-main' onClick=''>
            <a href='/portfolio.pdf' target='_blank'>
              Download Portfolio
            </a>
          </button>
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <p className='md:text-base text-xs'>
          The Daniel Experience - All Rights Reserverd
        </p>
      </footer>
    </div>
  );
}
