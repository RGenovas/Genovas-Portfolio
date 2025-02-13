
// Components
import { ButtonPrimary, ButtonOutline } from "./Button"



const Hero = () => {
  return (
   <section 
   className="pt-28 lg:p-10"
   id="home">
    <div className="container items-center lg:grid lg:grid-cols-2  lg:gap-10">
        <div>
            <div className="flex items-center gap-3">
          
                <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                    <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                    </span>
                    Available for work
                </div>

            </div>
            <h2 className="headline-2 max-w-[10ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Junior JavaScript 
            Full-Stack Developer
            </h2>

            <div className="flex item-center gap-3">
            <a href="https://drive.google.com/file/d/1xX8dKM0xjEDYrAikaRt9sy8483hAOpd-/view?usp=sharing" target="_blank">  <ButtonPrimary 
               label="Download CV"
               icon="download"> </ButtonPrimary></a>

               <ButtonOutline 
               href="#about"
               label="Scroll down"
               icon="arrow_downward"
               />
            </div>
  
        </div>
        <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400
            40 to-80% rounded-[60px] overflow-hidden">
                <img 
                src="/images/appphoto1.png" 
                width={600}
                height={800}
                alt="Herobrodude"
                />

            </figure>

        </div>

    </div>

   </section>
  )
}

export default Hero
