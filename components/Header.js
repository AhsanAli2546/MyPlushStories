import Image from 'next/image'
//import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Header.module.css'

//const josefin_Sans = Josefin_Sans({ weight:"300", subsets: ['latin'] })

export default function Header() {
  return (
    <>
      
      <header className={` position-relative w-100 `}>
        <Image src={`/images/bearh.png`} alt={`bear logo`}
            width={600} height={450} className={`mx-auto pt-5 d-block`} />
        <div className={`position-absolute ${styles['header']} top-0 bottom-0
            end-0 start-0 opacity-75 w-100 `}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-lg-5 offset-1`}>
                        <div className={`container ps-5`}>
                            <p className={`${styles['title']}`}>
                                If you can <strong className={`text-white`} >imagine</strong>  it <br/>
                                Then you can <strong className={`text-white`} >WRITE</strong> it
                            </p>
                            <div className={`mt-5`}>
                                <button className={`${styles['button']} ${styles['idea-button']} mx-3`}>
                                    Enter your Idea
                                </button>
                                <button className={`${styles['button']} ${styles['write-button']} mx-3`}>
                                    start writing for free
                                </button>
                            </div>
                            <Image src={`/images/robotheader.png`} alt={`bear logo`}
            width={150} height={150} className={`ms-0 pt-5 d-block`} />
                        </div>
                        
                    </div>

                    <div className={`col-lg-4`}>
                    <Image src={`/images/group5.png`} alt={`bear logo`}
            width={650} height={400} className={`ml-0 d-block`} />
                        
                    </div>

                </div>
            </div>
                
        </div>
      </header>
      
    </>
  )
}
