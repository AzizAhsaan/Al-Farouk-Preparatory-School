import React,{useEffect,useState} from 'react'
import FaroukCenterIcon from "/FaroukCenterIcon.svg"
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const navigationbar=[
    {
      id:1,
      title:"الموقع",
      to:"#Map"
    },
    {
      id:2,
      title:"الأنشطة العلمية",
      to:"#SceinteticActivities"
    },
    {
      id:3,
      title:"الفريق",
      to:"#ImportantPeople"
      
    },

    {
      id:4,
      title:"الخدمات",
      to:"#Services"
      
    },

    {
      id:5,
      title:"الرئيسية",
      to:"#HeroSection"
      
    },

  ]
  const [selectedId, setSelectedId] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + 250;

      let activeSectionId = -1;

      navigationbar.forEach((nav) => {
        const section = document.querySelector(nav.to);
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (sectionTop <= currentPosition && currentPosition < sectionBottom) {
            activeSectionId = nav.id;
          }
        }
      });

      setSelectedId(activeSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className='w-full flex flex-row bg-transparent justify-between items-center fixed z-[10000] py-2 px-6 bg-primary/100'>
                <div></div>
               <div className='flex flex-row items-center gap-28 transition-all ease-in'>
               <div className='flex flex-row items-center gap-10 transition-all ease-in '>
                {navigationbar.map((navigation) => (
          <div
            key={navigation.id}
            className={`flex flex-row items-center gap-1 cursor-pointer transition-all ease-in  `}
          >
            <ScrollLink
              to={navigation.to.slice(1)}
              spy={true}
              smooth={true}
              offset={10}
              duration={10}
              onClick={() => setSelectedId(navigation.id)}
              className={`  ${navigation.id === selectedId ? 'text-primary/700 font-bold text-lg active' : 'text-[#666666] font-bold text-lg'}`}
            >
              {navigation.title}
            </ScrollLink>
          </div>
        ))}

                </div>
                <img src={FaroukCenterIcon}  alt="" />

               </div>
    </header>
  )
}

export default Header