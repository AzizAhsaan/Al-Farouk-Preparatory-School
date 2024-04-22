import React from 'react'
import CalendarIcon from "/CalendarIcon.svg"
import SciencetificIcon from "/SciencetificIcon.svg"
import Pc from "/Pc.png"
import Polygon from "/Polygon.svg"
import Rectangle from "/Rectangle.svg"
import LeftArrow from "/LeftArrow.svg"

const SceinteticActivities = () => {
  return (
    <section id='SceinteticActivities' className='container flex flex-col items-center relative overflow-hidden lg:px-1 px-2 '>
        <h1 className='lg:text-3xl text-2xl'>الأنشطة العلمية</h1>
        <div className='flex flex-row lg:gap-6 gap-4 items-center my-4'>   
                 <div className='flex flex-row lg:p-4 p-2 items-center gap-2'>
            <h1 className='lg:text-lg text-xs font-semibold text-Neutral/700'>الأحداث السابقة</h1>
                <img src={SciencetificIcon} className='lg:w-6 lg:h-6 w-4 h-4' alt="" />
            </div>
            <div className='border-b-2 border-primary/500 lg:p-4 p-2 bg-gradient-to-t from-[#FF59823D] from-10% to-white to-80% flex flex-row items-center gap-2'>
                <h1 className='lg:text-lg text-xs font-semibold text-primary/500'>الأحداث القادمة</h1>
                <img src={CalendarIcon} className='lg:w-6 lg:h-6 w-4 h-4' alt="" />
            </div>

        </div>

        <div className='flex flex-row items-center lg:p-4 p-2 bg-primary/100 rounded-3xl gap-4'>
            <div className='flex flex-col'>
                <h1 className='lg:text-2xl text-xs font-semibold text-right my-4'>مسابقة ألكترونية</h1>
                <div className='flex flex-col w-full relative'>
                    <h1 className='text-right text-[#666666] text-xs lg:text-sm'>التاريخ : 2024/3/15</h1>
                    <p className='text-right text-[#666666] lg:text-sm text-[10px] my-1'>تقام مسابقات الكترونية بين الطالبات حول الذكاء الاصطناعي وانترنت الاشياء وباستخدام الاسئلة الرقمية</p>
                    <div className='lg:w-28 w-24 lg:h-10 h-8 lg:p-4 p-2 flex flex-row gap-2 items-center rounded-full bg-primary/500 mt-4 '>
                        <img className='text-white' src={LeftArrow} alt="" />
                        <h1 className='text-[#fff] font-medium text-xs'>اقرأ المزيد</h1>

                    </div>
                </div>
            </div>
            <div className='lg:w-64 lg:h-48 w-40 h-24 rounded-lg'><img src={Pc} className='w-full h-full object-cover rounded-xl' alt="" /></div>

        </div>
        <img src={Polygon} className='absolute hidden lg:block right-[-2rem] overflow-hidden w-48 h-48 top-24' alt="" />
        <img src={Rectangle} className='absolute hidden lg:block left-[-2rem] overflow-hidden w-48 h-48 top-24' alt="" />

    </section>
  )
}

export default SceinteticActivities