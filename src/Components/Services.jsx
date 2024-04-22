import React from 'react'
import ServicesSectionFirstPhoto from "/ServicesSectionFirstPhoto.svg"
import ServicesSectionSecondPhoto from "/ServicesSectionSecondPhoto.svg"
import ServicesSectionThirdPhoto from "/ServicesSectionThirdPhoto.svg"

const Services = () => {
  return (
    <section id='Services' className=' container flex flex-col items-center my-12 '>
        <h1 className='lg:text-4xl text-3xl font-semibold'>الخدمات</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1  gap-24  items-center my-8'>
        <div className='flex flex-col justify-between items-center gap-4'>
                <img src={ServicesSectionThirdPhoto} alt="ServicesSectionThirdPhoto" />
                <h1 className='text-xl font-bold'>الادارة</h1>
                <p className='text-center text-base font-sm max-w-80 text-[#666680]'>تمتلك الاعدادية نظام ذكي في ارشفة البيانات الخاصة بالطالبات ولنا منسق الكتروني للتعلم عن بعد</p>
            </div>

            <div className='flex flex-col  justify-between items-center gap-4'>
                <img src={ServicesSectionSecondPhoto} alt="ServicesSectionSecondPhoto" />
                <h1 className='text-xl font-bold'>مختبر الحاسوب</h1>
                <p className='text-center text-base font-sm max-w-96 text-[#666680]'>يحوي مختبر الحاسوب 22 حاسبة الكترونية ونظام ذكي للتواصل بين الطالبات والمدرسة والادارة تعتمد على نظام انترنت الاشياء في فتح المختبر ونظام سيكيورتي امني قوي</p>
            </div>
            <div className='flex flex-col justify-between items-center gap-4'>
                <img src={ServicesSectionFirstPhoto} alt="ServicesSectionFirstPhoto" />
                <h1 className='text-xl font-bold'>المواد التي تدرس</h1>
                <p className='text-center text-base font-sm max-w-80 text-[#666680]'>يتمكن الطالبات من استخدام الحاسوب بطريقة احترافية تتضمن المواد السكراتش و تصميم موقع وانترنت الاشياء ونظام المكتبي اوفس
</p>
            </div>

        </div>
    </section>
  )
}

export default Services