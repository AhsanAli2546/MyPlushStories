import { useState } from 'react';
import Image from 'next/image'
//import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Story.module.css'

//const josefin_Sans = Josefin_Sans({ weight:"300", subsets: ['latin'] })


export default function Story() {

  let [title, setTitle] = useState('');
  let [story, setStory] = useState('');
  let [storyTextCounter, setStoryTextCounter] = useState(0);
  let [titleCounter, setTitleCounter] = useState(0);
  let [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (type) => {

    try {
      //console.log(title);
      if (title == null || title == '' || title == undefined) {
        alert("some thing went wrong...!");
        return;
      }

      let withTypeTitle = title + " " + type;
      //alert(withTypeTitle);

      //console.log(withTypeTitle);
      setIsLoading(true);
      
      let res = await fetch('api.my-plush-stories.vercel.app/api/story/' + withTypeTitle);
      let data = await res.json();
      
      //console.log(data.story);
      // if(res.status == 400){
      //   setIsLoading(false);
      //   alert('some thing went wrong')
      //   return;
      // }
      setIsLoading(false);
      setStory(data.story);
      setStoryTextCounter(story.length)

    } catch (ex) {
      setIsLoading(false);
      //console.log("Error:", ex);
    }
  }

  const handleCopyText = async () =>{
    navigator.clipboard.writeText(story);
  }

  return (
    <>

      <section className={`${styles['story-sec']} w-100 position-relative `}>
        <div className={`container`}>
          <div className={`row ${styles['story-row-sec']} p-2 rounded-2`}>
            <div className={`col-lg-4 p-3 `}>
              <div className={`bg-white rounded-2 p-3 h-100`} >
                <div className={`form-group`}>

                  <label className={`form-label ${styles['prompt-label']}`} >Your Prompt:</label>
                  <textarea type="text" className={`form-control ${styles['story-input']}`}
                    placeholder="Enter your idea" value={title} onChange={(e) => { setTitle(e.target.value);setTitleCounter(title.length);}} >
                  </textarea>
                  <span className={`form-text ${styles['story-input-text']}`}>Number of words (1000:) {titleCounter}</span>
                </div>
                <div className={`row mt-4`}>
                  <div className={`col text-center`}>
                    <button className={`${styles['tag']} mx-2`} onClick={() => handleSubmit('original')}>Original</button>
                    <button className={`${styles['tag']} mx-2`} onClick={() => handleSubmit('Humor')}>Humor</button>
                  </div>
                </div>
                <div className={`row mt-4`}>
                  <div className={`col text-center`}>
                    <button className={`${styles['tag']} mx-2`} onClick={() => { handleSubmit('Thriller') }}>Thriller</button>
                    <button className={`${styles['tag']} mx-2`} onClick={() => { handleSubmit('Romance') }}>Romance</button>
                    <button className={`${styles['tag']} mx-2`} onClick={() => { handleSubmit('realism') }}>realism</button>
                  </div>
                </div>
                <div className={`row mt-4`}>
                  <div className={`col text-center`}>
                    <button className={`${styles['tag']} mx-2`} onClick={() => { handleSubmit('SciFi') }}>SciFi</button>
                    <button className={`${styles['tag']} mx-2`} onClick={() => { handleSubmit('Comedy') }}>comedy</button>
                    <button className={`${styles['tag']} mx-2`} onClick={() => { handleSubmit('Adventures') }}>Adventures</button>
                  </div>
                </div>
                <label className={`text-center mt-5`}>
                  Whether you&apos;re looking for a gripping adventure, a heartwarming romance, or a thought-provoking sci-fi, our story generator has got you covered
                </label>
                {/* <button type="submit" class="btn btn-primary" >Submit</button> */}
              </div>
            </div>
            <div className={`col-lg-8 p-3`}>
              <div className={`bg-white rounded-2 p-3`}>
                <div className={`form-group`}>

                  <label className={`form-text ${styles['text-area-label']}`} >Story Generated by the Myplush Stories AI:</label>
                  <textarea type="text" className={`form-control ${styles['story-textarea']}`} value={story}
                    readOnly={true} maxLength={1000}>
                  </textarea>
                  <div className="d-flex justify-content-center">
                    <div className={`${isLoading ? 'spinner-border' : ''} position-absolute top-50`} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>

                  <span className={`form-text ${styles['story-input-text']}`}>Number of words (1000:) {storyTextCounter}</span>
                  <button className='btn' onClick={handleCopyText} data-bs-toggle="tooltip" data-bs-placement="top" title="text copied">
                    <Image src={`/images/copytext.png`} width={20} height={20} 
                      alt={'copy text icon'} className={`mt-1`} />
                  </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}
