import React from 'react'
import WasanPicture from "../../public/WasanPicture.png"
import Vector from "../../public/Vector.svg"
import SecondLeftArrow from "../../public/SecondLeftArrow.svg"
import RightArrow from "../../public/RightArrow.svg"

const ImportantPeople = () => {
  return (
    <section id='ImportantPeople' className='w-full flex flex-col container px-8 '>
        <div className='flex justify-between items-center'>

            <div className='flex flex-row items-center gap-6'>
                <div className='lg:w-12 lg:h-12 h-8 w-8 rounded-full bg-primary/500 flex items-center justify-center'><img className='w-8 h-8 text-white' src={SecondLeftArrow} alt="Left Arrow" /></div>
                <div className='lg:w-12 lg:h-12 h-8 w-8 rounded-full bg-white border-[#E8E8F6] border-[2px] flex items-center justify-center'><img className='w-8 h-8 text-white' src={RightArrow} alt="Right Arrow" /></div>

            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='lg:text-xl text-lg text-right text-[#B0B0C0]'>اشخاص مهمين</h1>
                <h1 className='lg:text-4xl text-2xl text-right  text-black font-medium'>أعضاء الفريق</h1>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1  gap-x-36 gap-y-12 justify-center my-8'>
            <div className='flex flex-col items-center'>
                <div className='w-72 h-80 rounded-3xl flex items-center justify-center bg-primary/100 '><img src={Vector} className=' object-cover rounded-3xl' alt="" /></div>
                <h1 className='my-2 text-xl font-semibold'>يسرى شكر</h1>
                <small className='text-base font-normal'>شريك</small>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-72 h-80 rounded-3xl flex items-center justify-center bg-primary/100'><img src={Vector} className=' object-cover rounded-3xl' alt="" /></div>
                <h1 className='my-2 text-xl font-semibold'>سناء عبد الحميد</h1>
                <small className='text-base font-normal'>مديرة</small>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-72 h-80 rounded-3xl '><img src={WasanPicture} className='w-full h-full object-cover rounded-3xl' alt="" /></div>
                <h1 className='my-2 text-xl font-semibold'>وسن مداح</h1>
                <small className='text-base font-normal'>مدرسة الحاسوب</small>
            </div>
        </div>

    </section>
  )
}

export default ImportantPeople