import Image from 'next/image'
import { Poppins } from '@next/font/google'
import styles from '@/styles/footer.module.css'

//const poppins = Poppins({ weight:"400", subsets: ['latin'] })

export default function Footer() {
  return (
    <>
      
      <footer className={`${styles['bg-footer-color']} mt-0`} id="contact">
        <div className={`container`}>
        <div className={`row w-100 py-5`}>
            <div className={`col-lg-8`}>
              <p className={`text-white h2`} >Myplush stories AI</p>
              <Image src={`/images/footerlogo.png`} alt={`footer logo`} 
                width={228} height={45} className={`mt-2`} />
            </div>
            <div className={`col-lg-4 `}>
              <div className={`container text-start`}>
              <p className={`text-white h4`} >Unique Story Generator AI</p>
              <p className={`text-white h5`} >Connect with us</p>
              <div className={`d-flex gap-2`}>
                <Image src={`/images/facebook.svg`} width={40} height={40} alt={`facebook link`} />
                <Image src={`/images/instagram.svg`} width={40} height={40} alt={`instagram link`} />
                <Image src={`/images/tweeter.svg`} width={40} height={40} alt={`tweeter link`} />
                <Image src={`/images/gmaill.svg`} width={40} height={40} alt={`gmaill link`} />
              </div>
              </div>
              
              
            </div>
          </div>
        </div>
      
      </footer>
      
    </>
  )
}
