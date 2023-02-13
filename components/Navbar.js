import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from '@next/font/google'
import styles from '@/styles/navbar.module.css'

const poppins = Poppins({ weight:"400", subsets: ['latin'] })

export default function Nav() {
  return (
    <>
      
      <nav className={`${styles['bg-nav-color']} navbar navbar-expand-lg px-3 ${poppins.className}`}>
        <div className="container-fluid mx-5">
        <a className="navbar-brand" href="#">
            <Image src="/images/navlogo.png" alt="main logo"
              width={100} height={40} className="d-inline-block align-text-top"/>
            {/* Bootstrap */}
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles['text-dark-color']} `}>
        <li className="nav-item">
        <Link href="#home" className="nav-link active lh-base">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="#about" className={`nav-link ${styles['text-dark-color']} lh-base`}>About us</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${styles['text-dark-color']} lh-base`} href="#myplush">MYplush AI</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${styles['text-dark-color']} lh-base`} href="#contact">contact us</Link>
        </li>
        
        
      </ul>
    </div>
        </div>
      </nav>
      
    </>
  )
}
