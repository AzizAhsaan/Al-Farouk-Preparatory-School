import React from 'react'
import Header from './Header'
import HeroSectionGirlPhoto from "../../public/HeroSectionGirlPhoto.png"
import WasanPicture from "../../public/WasanPicture.png"

const HeroSection = () => {
  return (
    <section id='HeroSection' className='w-full h-fit bg-primary flex flex-col   pb-2 bg-primary/100'>
        <Header />
        
        <div className='flex lg:flex-row flex-col-reverse items-center justify-center gap-24 my-24 '>

        <div className='relative bg-[#FFD6B0]/30 lg:w-[400px] lg:h-[400px] w-full h-[200px] -rotate-12 rounded-[3rem]'>
    <div className='bg-[#FFD6B0] lg:w-[400px] lg:h-[400px] w-full h-[200px] absolute rotate-[20deg]  overflow-hidden rounded-[3rem]  flex flex-col items-center   '>
        <div className='lg:w-[400px] lg:h-[400px] w-full h-[200px] relative overflow-hidden'>
        <img src={HeroSectionGirlPhoto} className='w-full lg:h-[30rem] h-[15rem] md:h-[20rem] rotate-[-8deg] inset-0  object-cover ' alt="HeroSectionGirlPhoto" />

        </div>

    </div>
    <div className='lg:w-[400px] lg:h-[400px] w-full h-[200px] '>
    <div className='absolute  lg:top-36 top-12 lg:left-[-4rem] left-[-2rem] flex  z-50 flex-row items-center gap-2 w-fit lg:py-3 lg:px-4 py-1 px-2 bg-[#FFFFFF] rotate-[12deg] rounded-xl '>
        <div className='flex flex-col gap-1'>
                <p className='lg:text-xs text-[8px] text-right font-semibold'>وسن مداح</p>
                <p className='lg:text-xs text-[8px] text-right'>مدرسة الحاسوب</p>
            </div>
            <div className='lg:w-12 lg:h-12 w-6 h-6 rounded-full border-primary/500 border-[2px] overflow-hidden'><img src={WasanPicture} className='w-full h-full object-cover' alt="" /></div>

        </div>

        <div className='absolute lg:top-36 top-12 lg:right-[-5rem] right-[-2rem] flex items-center gap-2 w-fit lg:py-3 lg:px-4 py-1 px-2 bg-[#FFFFFF] rotate-[12deg] rounded-xl '>
        <div className='flex flex-col gap-1'>
        <p className='lg:text-base text-[10px] text-center text-secondary/600 font-semibold'>+10 نشاط علمي</p>
                <p className='lg:text-xs text-[8px] text-[#666680] text-right'>العديد من الأنشطة العلمية</p>
            </div>

        </div>
        <div className='absolute lg:bottom-[-2rem] bottom-[-1rem] lg:left-24 left-12 flex items-center gap-2 w-fit lg:py-3 lg:px-4 py-1 px-2 bg-[#FFFFFF] rotate-[12deg] rounded-xl '>
        <div className='flex flex-col items-center gap-2'>
        <div className='lg:w-12 lg:h-12 w-6 h-6 bg-secondary/100 rounded-full border-secondary/600 border-[2px] flex items-center justify-center'>
            <p className='lg:text-sm text-[8px] text-secondary/800 font-bold'>+250</p>
        </div>
                <p className='lg:text-sm text-[8px] font-medium text-[#666680] text-center '>عدد الطالبات في المركز</p>
            </div>

        </div>
    </div>


</div>
<h1 className='lg:text-right text-center lg:text-3xl text-2xl'>
    مرحبا بكم في <span className='text-primary/500 font-semibold'>مركز الفاروق العلمي الذكر</span>

<br />
مستقبل جديد لعالم التكنولوجيا الذكية
</h1>



        </div>

    </section>
  )
}

export default HeroSection