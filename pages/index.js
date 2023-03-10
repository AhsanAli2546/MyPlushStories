import Head from 'next/head'
import Image from 'next/image'
import { Poppins, Josefin_Sans } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import About from '@/components/About'
import Story from '@/components/Story'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'
import EngageStories from '@/components/EngageStories'


const poppinsWs600 = Poppins({ weight: "600", subsets: ['latin'] })
const poppinsWs500 = Poppins({ weight: "500", subsets: ['latin'] })
const josefin_Sans500 = Josefin_Sans({ weight: "500", subsets: ['latin'] })



export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header/>
      <main className={`${poppinsWs500.className} ${styles['body']}`} >
        
        <EngageStories/>
        <About/>
        <Story/>
        <section className={` ${styles['bg-ben-sec']} p-3 pb-5 pt-5 position-relative top-0`} >
          <div className={`container justify-content-center`}>
            <div className={`row bg-white rounded-3 shadow`}>
              <div className='col-lg-3 col-md-3 col-sm-5 p-0'>
                <Image src={`/images/benefit.png`} alt={'benefit of myplushstory'} 
                  width={450}  height={500} className={'w-100 h-100 rounded-3'} />
              </div>

              <div className='col-lg-9 col-md-9 col-sm-7'>
                <p className={`text-center mt-5 ${poppinsWs600.className} h3`}> Benefit of using Myplush Stories AI</p>
                <ol className={`mt-5 ${josefin_Sans500.className} h5`}>
                  <li className='m-4'>
                    Unique and captivating stories generated through AI technology.
                  </li>
                  <li className='m-4'>
                    personalized tailes crafted to your preferences.
                  </li>
                  <li className='m-4'>
                    A wide range of genre options, including adventure, romance, and sci-fi.
                  </li>
                  <li className='m-4'>
                    Blend of creativity and innovation in story generation.
                  </li>
                  <li className='m-4'>
                    Mission to bring everyone&apos;s stories to life.
                  </li>
                  <li className='m-4'>
                    Immersive experience with endless possibilities.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      <Footer/> 
      </main>
    </>
  )
}
