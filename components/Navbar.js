import Image from 'next/image'
import { Poppins } from '@next/font/google'
import styles from '@/styles/navbar.module.css'

const poppins = Poppins({ weight:"400", subsets: ['latin'] })

export default function Nav() {
  return (
    <>
      
      <nav className={`${styles['bg-nav-color']} navbar navbar-expand-lg px-5 ${poppins.className}`}>
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
        <a className="nav-link active lh-base" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles['text-dark-color']} lh-base`} href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles['text-dark-color']} lh-base`} href="#">MYplush AI</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles['text-dark-color']} lh-base`} href="#">contact us</a>
        </li>
        
        
      </ul>
    </div>
        </div>
      </nav>
      
    </>
  )
}
