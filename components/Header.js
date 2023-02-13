import Image from 'next/image'
//import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Header.module.css'

//const josefin_Sans = Josefin_Sans({ weight:"300", subsets: ['latin'] })

export default function Header() {
  return (
    <>
      
      <header className={` position-relative w-100 ${styles['bg-header']} ${styles['header']}`} id='home'>
        {/* <Image src={`/images/bearh.png`} alt={`bear logo`}
            width={580} height={450} className={`mx-auto pt-5 d-block`} /> */}
        <div className={`opacity-75 w-100 `}>
            <div className={`container ${styles['bg-container']}`}>
                <div className={`row`}>
                    <div className={`col-lg-5 col-md-5 col-sm-5 `}>
                        <div className={`container ps-5 text-center`}>
                            <p className={`${styles['title']}`}>
                                If you can <strong className={`text-white`} >imagine</strong>  it <br/>
                                Then you can <strong className={`text-white`} >WRITE</strong> it
                            </p>
                            <div className={`mt-5 `}>
                                <button className={`${styles['button']} ${styles['idea-button']} mx-2`}>
                                    Enter your Idea
                                </button>
                                <button className={`${styles['button']} ${styles['write-button']} mx-2`}>
                                    start writing for free
                                </button>
                            <Image src={`/images/robotheader.png`} alt={`bear logo`}
            width={150} height={150} className={`ms-0 pt-5 d-block`} />
                            </div>
                        </div>
                        
                    </div>

                    <div className={`col-lg-6 col-md-6 col-sm-8`}>
                    <Image src={`/images/group5.png`} alt={`landing page image`}
                        width={500} height={400} className={`ml-0 d-block w-100`} />             
                    </div>

                </div>
            </div>
                
        </div>
      </header>
      
    </>
  )
}
