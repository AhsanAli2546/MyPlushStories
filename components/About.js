import Image from 'next/image'
import { Poppins } from '@next/font/google'
import styles from '@/styles/about.module.css'

//const poppins = Poppins({ weight:"400", subsets: ['latin'] })

export default function About() {
  return (
    <>
      
      <section className={`${styles['bg-about-color']} pb-5 pt-1
        position-relative `} >
          <div className={`container p-3 justify-content-center`}>
            <div className={`d-flex ${styles['bg-robot']} `}>
              <div className='flex-fill'>
                <Image src={`/images/Group2.png`} alt={'benefit of myplushstory'} 
                  width={500}  height={500}  />
                {/* <Image src={`/images/Group3.png`} alt={'benefit of myplushstory'} 
                  width={500}  height={500} className={`rounded-3 position-absolute ${styles['robot-shadow']} `} /> */}
              </div>

              <div className='flex-fill '>
                <p className={`text-center mt-5 h3`}> About MyPlush Stories AI</p>
                <p className={`${styles['robot-text']}`}>
                "Myplush Stories AI uses AI to create personalized, unique stories in various genres. Our platform combines creativity and innovation for a custom storytelling experience. Our mission is to bring your stories to life. Explore endless possibilities with Myplush Stories AI
                </p>
              </div>
            </div>
          </div>
        </section>
      
    </>
  )
}
