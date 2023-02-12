import Image from 'next/image'
import { Poppins } from '@next/font/google'
import styles from '@/styles/engagestories.module.css'

//const poppins = Poppins({ weight:"400", subsets: ['latin'] })

export default function EngageStories() {
  return (
    <>
      
      <section className={`${styles['bg-engage-stories']} w-100`} >
        <p className={`${styles['engagestories-title']}`}>Create engaging Stories without stress with
Myplush Stories AI </p>
        <div className={`row w-100`}>
            <div className={`col-lg-3 offset-1 p-3 text-center`}>
                <div className={`container`}>
                    <div className={`card bg-white rounded-3`}>
                        <Image src={'/images/Lightbulb-amico1.png'} width={150} height={200} className={`w-100 ms-2`} alt={'lightbulb'} />
                    </div>
                    <p className={`${styles['engage-card-text']} text-center`}>Creative Thinking</p>
                </div>
                
            </div>
            <div className={`col-lg-3 p-3 text-center`}>
                <div className={`container`}>
                    <div className={`card bg-white rounded-3`}>
                        <Image src={'/images/Chatbot-amico1.png'} width={250} height={200} className={`w-100 ms-2`} alt={'chatbot'} />
                    </div>
                    <p className={`${styles['engage-card-text']} text-center`}>Input your imagination</p>
                </div>
                
            </div>
            <div className={`col-lg-3 p-3 text-center`}>
                <div className={`container`}>
                    <div className={`card bg-white rounded-3`}>
                        <Image src={'/images/Thesis-amico1.png'} width={150} height={200} className={`w-100 ms-2`} alt={'thesis image'}/>
                    </div>
                    <p className={`${styles['engage-card-text']} text-center`}>Generate your Story</p>
                </div>
                
            </div>
        </div>
      </section>
      
    </>
  )
}
