import { ReactTyped, Typed } from 'react-typed';
import './App.css';
import TerrainScene from './components/Terrain';
import InfoCard from './components/Infocard';
import CodeIcon from '@mui/icons-material/Code';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { useEffect, useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Switch, Tooltip, tooltipClasses } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import { Swiper, SwiperSlide } from 'swiper/react';
import EmailIcon from '@mui/icons-material/Email';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import minhaFoto from './assets/minhaFoto.jpeg';
import bim1 from './assets/bim1.png';
import bim2 from './assets/bim2.png';
import bim3 from './assets/bim3.png';
import bim4 from './assets/bim4.png';
import bim5 from './assets/bim5.png';
import bim6 from './assets/bim6.png';
import dre1 from './assets/dre1.png';
import dre2 from './assets/dre2.png';
import dre3 from './assets/dre3.png';
import rr1 from './assets/rr1.png';
import rr2 from './assets/rr2.png';
import rr3 from './assets/rr3.png';
import rug1 from './assets/rug1.png';
import rug2 from './assets/rug2.png';
import seg1 from './assets/seg1.png';
import seg2 from './assets/seg2.png';
import seg3 from './assets/seg3.png';
import seg4 from './assets/seg4.png';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { styled } from 'styled-components';

export const isMobile = () => {
  const isMobileDevice = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );
  return isMobileDevice
}

const languageTexts = {
  pt: {
    contact: [
      '<strong>Desenvolvedor</strong> Front-End.',
      '<strong>Desenvolvedor</strong> Freelance.',
      '<strong>Designer</strong> de Interfaces.',
      'Entre em <strong>Contato</strong>.',
    ],
    contactDesc: 'Meu nome é Bruno Leonardi, eu sou desenvolvedor há 3 anos, desenvolvo diversos tipos de páginas, buscando estilos modernos e inovadores.',
    contactButton: 'Entre em contato',
    introduction: 'Oi! Sou Bruno, desenvolvedor e designer.',
    aboutMe: 'Sobre Mim',
    projects: 'Meus Projetos',
    titles: {
      developer: 'Desenvolvedor Front-End',
      designer: 'Designer de Interfaces',
      services: 'Serviços Oferecidos',
      certifications: 'Certificações e Cursos',
      projects: 'Meus Projetos',
      desc: 'Clique e Saiba Mais'
    },
    developerDescription: `Sou formado em TI. Comecei minha carreira como desenvolvedor front-end, criando interfaces interativas e trabalhando com mapas dinâmicos para melhorar a visualização de dados geoespaciais. Utilizando tecnologias como HTML, CSS, JavaScript e React, desenvolvo soluções que priorizam a performance e eficiência.`,
    designerDescription: `Buscando aprimorar minhas habilidades, fiz uma pós-graduação em User Experience (UX), onde aprendi sobre princípios de design, heurísticas de usabilidade e como criar interfaces mais intuitivas. Essa formação me permitiu aplicar conceitos sólidos de design, melhorando a experiência do usuário em cada projeto que desenvolvo.`,
    servicesDescription: `Hoje, atuo em uma empresa e também trabalho como freelancer, oferecendo serviços que buscam sempre criar soluções que equilibrem personalidade, usabilidade e eficiência. Estou disponível para o desenvolvimento de interfaces interativas, design de experiência do usuário e soluções personalizadas para atender às necessidades de cada cliente.`,
    certificationsDescription: `Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade São Judas Tadeu, onde me graduei em 2021. Finalizei minha pós-graduação em User Experience (UX) em 2024, onde aprofundei meus conhecimentos em design de interfaces e usabilidade. Além disso, concluí diversos cursos adicionais nas áreas de React, JavaScript, CSS e design, aprimorando ainda mais minhas habilidades técnicas.`,
    tooltips: {
      home: 'Início',
      projects: 'Em meus projetos, você notará que em algumas imagens, ao clicar, uma mensagem informa que o site é privado. Isso ocorre porque é um serviço restrito, acessível apenas com login e senha para usuários específicos. Por isso, adicionei imagens que permitem uma visualização detalhada: basta passar o mouse sobre elas para conferir melhor os detalhes da interface.',
    },
  },
  en: {
    contact: [
      '<strong>Front-End</strong> Developer.',
      '<strong>Freelance</strong> Developer.',
      '<strong>Interface</strong> Designer.',
      'Get in <strong>Touch</strong>.',
    ],
    contactDesc: "My name is Bruno Leonardi, I have been a developer for 3 years, creating various types of pages, aiming for modern and innovative styles.",
    contactButton: 'Get in touch',
    introduction: 'Hi! I am Bruno, a developer and designer.',
    aboutMe: 'About Me',
    projects: 'My Projects',
    titles: {
      developer: 'Front-End Developer',
      designer: 'Interface Designer',
      services: 'Offered Services',
      certifications: 'Certifications and Courses',
      projects: 'My Projects',
      desc: 'Click to Learn More'
    },
    developerDescription: `I have a degree in IT. I started my career as a front-end developer, creating interactive interfaces and working with dynamic maps to improve the visualization of geospatial data. Using technologies like HTML, CSS, JavaScript, and React, I develop solutions that prioritize performance and efficiency.`,
    designerDescription: `Seeking to improve my skills, I pursued a postgraduate degree in User Experience (UX), where I learned about design principles, usability heuristics, and how to create more intuitive interfaces. This training allowed me to apply solid design concepts, enhancing user experience in every project I develop.`,
    servicesDescription: `Today, I work at a company and also as a freelancer, offering services that always aim to create solutions that balance personality, usability, and efficiency. I am available for the development of interactive interfaces, user experience design, and custom solutions tailored to meet each client's needs.`,
    certificationsDescription: `I graduated in Systems Analysis and Development from São Judas Tadeu University in 2021. I completed my postgraduate degree in User Experience (UX) in 2024, where I deepened my knowledge in interface design and usability. Additionally, I completed several additional courses in React, JavaScript, CSS, and design, further enhancing my technical skills.`,
    tooltips: {
      home: 'Home',
      projects: 'In my projects, you will notice that for some images, when clicked, a message will indicate that the site is private. This is because it is a restricted service, accessible only with login and password for specific users. Therefore, I have added images that allow detailed visualization: just hover over them to better view the interface details.',
    },
  },
};





function App() {
  const scrollContainerRef = useRef([]);
  const sectionRefs = useRef([]);
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);
  const swiper3Ref = useRef(null);
  const [language, setLanguage] = useState('pt');
  const [currentSection, setCurrentSection] = useState(null);
  const [viewMode, setViewMode] = useState(isMobile() ? 'Desenvolvedor Front-End' : undefined);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const scrollPosition = scrollContainer.scrollTop;
        scrollContainer.style.backgroundPositionY = `-${scrollPosition * 0.3}px`;
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = entry.target.getAttribute('data-index');
          setCurrentSection(sectionIndex);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      console.log('Scroll event listener attached');
    }

    return () => {
      observer.disconnect();
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const contactStyle = {
    transform: currentSection === '2' ? 'rotate(90deg)' : currentSection === '3' ? 'rotate(180deg)' : '',
  }

  const scrollToSection = (index) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // Combine all the imported assets into a single array
  const allImages = [
    bim1, bim2, bim3, bim4, bim5, bim6,
    dre1, dre2, dre3,
    rr1, rr2, rr3,
    rug1, rug2,
    seg1, seg2, seg3, seg4
  ];

  // Shuffle the array
  const shuffledImages = shuffle(allImages);

  // Split shuffled images into 3 arrays
  const array1 = shuffledImages.slice(0, Math.floor(shuffledImages.length / 3));
  const array2 = shuffledImages.slice(Math.floor(shuffledImages.length / 3), Math.floor((shuffledImages.length / 3) * 2));
  const array3 = shuffledImages.slice(Math.floor((shuffledImages.length / 3) * 2));

  const handleImageClick = (img) => {
    const rrImages = [rr1, rr2, rr3];

    if (rrImages.includes(img)) {
      // Open the external website if it's an "rr" image
      window.open('https://rrstetic.vercel.app/', '_blank');
    } else {
      // Show an alert for other images
      setOpen(true);
    }
  };

  const redirectHandle = (mode) => {
    const urls = {
      linkedln: 'https://www.linkedin.com/in/bruno-leonardi-705875180',
      whatsapp: 'https://wa.me/5511941182631',
      email: 'mailto:bruno_m_leonardi@hotmail.com'
    };

    // Create a temporary link element and click it
    const link = document.createElement('a');
    link.href = urls[mode] || urls.email;
    link.target = '_blank';
    link.click();
  };

  const GreySwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
      color: '#fff', // Thumb color when unchecked
      '&.Mui-checked': {
        color: '#fff', // Thumb color when checked
      },
      '&.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#aaa', // Track color when checked
        opacity: 1,
      },
    },
    '& .MuiSwitch-track': {
      backgroundColor: '#aaa', // Track color when unchecked
      opacity: 1,
    },
  }));

  const [checked, setChecked] = useState(true)

  const changeLanguage = (event) => {
    setChecked(event.target.checked);
    const newLanguage = event.target.checked ? 'pt' : 'en';
  
    // Find the matching key in the current language
    const currentLanguage = language;
    const matchingKey = Object.entries(languageTexts[currentLanguage].titles).find(
      ([key, value]) => value === viewMode
    )?.[0];
  
    // Set the new language and update viewMode if a matching key was found
    setLanguage(newLanguage);
    if (matchingKey) {
      setViewMode(languageTexts[newLanguage].titles[matchingKey]);
    }
  };

  return (
    <div className='home-page'>
      {!isMobile() && (
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <TerrainScene />
        </div>
      )}
      {!isMobile() && (
        <>
          <div style={{ width: '50vw' }}></div>
          <div className='contact' style={contactStyle} />
          <div className='contactInfos'>
            <div className='contactTitle'>
              <ReactTyped
                strings={languageTexts[language].contact}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <div className='contactDesc'>
              {languageTexts[language].contactDesc}
              <button onClick={() => redirectHandle('email')} className='contactButton'>{languageTexts[language].contactButton}</button>
              <div className='buttonsContact'>
                <img onClick={() => redirectHandle('linkedln')} src='https://cdn-icons-png.flaticon.com/256/61/61109.png'></img>
                <img onClick={() => redirectHandle('whatsapp')} src='https://static-00.iconduck.com/assets.00/whatsapp-icon-495x512-y1nyb5ge.png'></img>
                <img onClick={() => redirectHandle('email')} src='https://cdn-icons-png.flaticon.com/512/561/561188.png'></img>
                {/* <EmailIcon sx={{fontSize: '33px', marginBottom: '-4px', cursor: 'pointer'}} /> */}
              </div>
            </div>
          </div>
        </>
      )}
      {isMobile() ? (
        <div className='navigation-hub'>
          <div style={{ display: 'flex', alignItems: "center", padding: '0px 10px' }}>
            <img style={{ height: '10px', marginRight: '5px' }} src='https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg' alt='brazilFlag'></img>
            <GreySwitch size='small' checked={checked} onChange={changeLanguage} />
            <img style={{ height: '10px', marginLeft: '5px' }} src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png' alt='brazilFlag'></img>
            <div style={{ height: '30px', width: '1px', background: '#777', marginLeft: '15px', marginRight: '-3px' }} />
          </div>
          <Tooltip
            title={languageTexts[language].tooltips.home}
            PopperProps={{
              sx: {
                [`& .MuiTooltip-tooltip`]: {
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px',
                  background: '#0000004a',
                  maxWidth: 'none',
                },
              },
            }}
            placement="bottom"
          >
            <IconButton
              className={currentSection === '1' ? 'iconActivated' : ''}
              style={{ transition: '.8s' }}
              onClick={() => scrollToSection(0)}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={languageTexts[language].aboutMe}
            PopperProps={{
              sx: {
                [`& .MuiTooltip-tooltip`]: {
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px',
                  background: '#0000004a',
                  maxWidth: 'none',
                },
              },
            }}
            placement="bottom"
          >
            <IconButton
              className={currentSection === '2' ? 'iconActivated' : ''}
              style={{ transition: '.8s' }}
              onClick={() => scrollToSection(1)}
            >
              <PersonIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={languageTexts[language].projects}
            PopperProps={{
              sx: {
                [`& .MuiTooltip-tooltip`]: {
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px',
                  background: '#0000004a',
                  maxWidth: 'none',
                },
              },
            }}
            placement="bottom"
          >
            <IconButton
              className={currentSection === '3' ? 'iconActivated' : ''}
              style={{ transition: '.8s' }}
              onClick={() => scrollToSection(2)}
            >
              <AccountTreeOutlinedIcon />
            </IconButton>
          </Tooltip>
          {/* <IconButton
          className={currentSection === '3' ? 'iconActivated' : ''}
          style={{ transition: '.8s' }}
          onClick={() => scrollToSection(2)}
        >
          <HelpIcon />
        </IconButton> */}
        </div>
      ) : (
        <div className='navigation-hub'>
          <div style={{ display: 'flex', alignItems: "center", padding: '0px 10px' }}>
            <img style={{ height: '13px' }} src='https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg' alt='brazilFlag'></img>
            <GreySwitch checked={checked} onChange={changeLanguage} />
            <img style={{ height: '13px' }} src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png' alt='brazilFlag'></img>
            <div style={{ height: '30px', width: '1px', background: '#777', marginLeft: '15px', marginRight: '-3px' }} />
          </div>
          <Tooltip
            title={languageTexts[language].tooltips.home}
            PopperProps={{
              sx: {
                [`& .MuiTooltip-tooltip`]: {
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px',
                  background: '#0000004a',
                  maxWidth: 'none',
                },
              },
            }}
            placement="bottom"
          >
            <IconButton
              className={currentSection === '1' ? 'iconActivated' : ''}
              style={{ transition: '.8s' }}
              onClick={() => scrollToSection(0)}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={languageTexts[language].projects}
            PopperProps={{
              sx: {
                [`& .MuiTooltip-tooltip`]: {
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px',
                  background: '#0000004a',
                  maxWidth: 'none',
                },
              },
            }}
            placement="bottom"
          >
            <IconButton
              className={currentSection === '2' ? 'iconActivated' : ''}
              style={{ transition: '.8s' }}
              onClick={() => scrollToSection(1)}
            >
              <AccountTreeOutlinedIcon />
            </IconButton>
          </Tooltip>
          {/* <IconButton
          className={currentSection === '3' ? 'iconActivated' : ''}
          style={{ transition: '.8s' }}
          onClick={() => scrollToSection(2)}
        >
          <HelpIcon />
        </IconButton> */}
        </div>
      )}
      <div className='info-area'>
        <div className="scroll-container" ref={scrollContainerRef}>
          {isMobile() && (
            <div data-index="1" ref={(el) => (sectionRefs.current[0] = el)} className="section" style={{ flexDirection: "column", justifyContent: 'initial' }}>
              <div className='contact'>
                <div className='contactInfos'>
                  <div className='contactTitle'>
                    <ReactTyped
                      strings={languageTexts[language].contact}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
                  </div>
                  <div className='contactDesc'>
                    {languageTexts[language].contactDesc}
                    <button onClick={() => redirectHandle('email')} className='contactButton'>{languageTexts[language].contactButton}</button>
                    <div className='buttonsContact'>
                      <img onClick={() => redirectHandle('linkedln')} src='https://cdn-icons-png.flaticon.com/256/61/61109.png'></img>
                      <img onClick={() => redirectHandle('whatsapp')} src='https://static-00.iconduck.com/assets.00/whatsapp-icon-495x512-y1nyb5ge.png'></img>
                      <img onClick={() => redirectHandle('email')} src='https://cdn-icons-png.flaticon.com/512/561/561188.png'></img>
                      {/* <EmailIcon sx={{fontSize: '33px', marginBottom: '-4px', cursor: 'pointer'}} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='defaultHub'>
                <div className='defaultPic'>
                  <img src={minhaFoto} alt='myPic'></img>
                </div>
                <div className='defaultIntrodution'>{languageTexts[language].introduction}</div>
              </div>
            </div>
          )}
          <div data-index={!isMobile() ? "1" : "2"} ref={(el) => !isMobile() ? (sectionRefs.current[0] = el) : (sectionRefs.current[1] = el)} className="section cards-section">
            <div className='infosHub'>
              {isMobile() ? (
                <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                  <div style={{ width: '110px', textAlign: "center", backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '30px', margin: '20px 0px', fontSize: isMobile() ? '20px' : '30px', color: '#fff' }}>
                    {languageTexts[language].aboutMe}
                  </div>
                  <div className='infoCardsSetup'>
                    <InfoCard setViewMode={setViewMode} viewMode={viewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.developer} icon={<CodeIcon />} />
                    <InfoCard setViewMode={setViewMode} viewMode={viewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.designer} icon={<BrushOutlinedIcon />} />
                    <InfoCard setViewMode={setViewMode} viewMode={viewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.services} icon={<WorkOutlineOutlinedIcon />} />
                    <InfoCard setViewMode={setViewMode} viewMode={viewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.certifications} icon={<TaskOutlinedIcon />} />
                    <InfoCard scrollToSection={scrollToSection} setViewMode={setViewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.projects} icon={<AccountTreeOutlinedIcon />} />
                  </div>
                </div>
              ) : (
                <div className='infoCardsSetup'>
                  <InfoCard setViewMode={setViewMode} viewMode={viewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.developer} icon={<CodeIcon />} />
                  <InfoCard setViewMode={setViewMode} viewMode={viewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.designer} icon={<BrushOutlinedIcon />} />
                  <InfoCard setViewMode={setViewMode} viewMode={viewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.services} icon={<WorkOutlineOutlinedIcon />} />
                  <InfoCard setViewMode={setViewMode} viewMode={viewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.certifications} icon={<TaskOutlinedIcon />} />
                  <InfoCard scrollToSection={scrollToSection} setViewMode={setViewMode} desc={languageTexts[language].titles.desc} title={languageTexts[language].titles.projects} icon={<AccountTreeOutlinedIcon />} />
                </div>
              )}
              {viewMode ? (
                viewMode === 'Desenvolvedor Front-End' ? (
                  <div className='introdutionText'>
                    <div>{viewMode}</div>
                    {languageTexts[language].developerDescription}
                  </div>
                ) : viewMode === 'Designer de Interfaces' ? (
                  <div className='introdutionText'>
                    <div>{viewMode}</div>
                    {languageTexts[language].designerDescription}
                  </div>
                ) : viewMode === 'Serviços Oferecidos' ? (
                  <div className='introdutionText'>
                    <div>{viewMode}</div>
                    {languageTexts[language].servicesDescription}
                  </div>
                ) : (
                  <div className='introdutionText'>
                    <div>{viewMode}</div>
                    {languageTexts[language].certificationsDescription}
                  </div>
                )
              ) : isMobile() ? (
                <div></div>
              ) : (
                <div className='defaultHub'>
                  <div className='defaultPic'>
                    <img src={minhaFoto} alt='myPic'></img>
                  </div>
                  <div className='defaultIntrodution' >{languageTexts[language].introduction}</div>
                </div>
              )}
            </div>
          </div>
          <div data-index={!isMobile() ? "2" : "3"} ref={(el) => !isMobile() ? (sectionRefs.current[1] = el) : (sectionRefs.current[2] = el)} className="section">
            <div className='projects'>
              <div style={{ backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '30px', marginBottom: '20px', fontSize: isMobile() ? '20px' : '30px' }}>
                {languageTexts[language].projects}
                {!isMobile() && (
                  <Tooltip
                    title={languageTexts[language].tooltips.projects}
                    PopperProps={{
                      sx: {
                        [`& .MuiTooltip-tooltip`]: {
                          fontSize: '14px',
                          fontWeight: 'bold',
                          // padding: '10px',
                          background: '#000000aa',
                          // maxWidth: 'none',
                        },
                      },
                    }}
                    placement="right"
                  >
                    <InfoOutlinedIcon sx={{ pl: 2, mb: '-3px', fontSize: '22px', cursor: 'pointer' }} />
                  </Tooltip>
                )}
              </div>
              {/* First Swiper */}
              <Swiper
                grabCursor={true}
                // centeredSlides={true}
                slidesPerView={isMobile() ? 2 : 4}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                initialSlide={5}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
                onSwiper={(swiper) => {
                  swiper1Ref.current = swiper;
                }}
              >
                {array1.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Tooltip
                      title={
                        <div>
                          <img
                            src={img}
                            style={{
                              width: '40vw',
                              height: 'auto',
                            }}
                            alt={`slide-${index}`}
                          />
                        </div>
                      }
                      PopperProps={{
                        modifiers: [
                          {
                            name: 'flip',
                            options: {
                              fallbackPlacements: [],
                            },
                          },
                          {
                            name: 'zIndex',
                            options: {
                              zIndex: 9999,
                            },
                          },
                        ],
                        sx: {
                          display: isMobile() ? 'none' : 'flex',
                          pointerEvents: 'none', // Add this line
                          [`& .MuiTooltip-tooltip`]: {
                            fontSize: '12px',
                            padding: '3px',
                            paddingBottom: '1px',
                            background: '#222',
                            maxWidth: 'none',
                          },
                        },
                      }}
                      placement="left"
                    >
                      <img
                        src={img}
                        alt={`slide-${index}`}
                        className="swiper-image"
                        onClick={() => handleImageClick(img)}
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => swiper1Ref.current.autoplay.stop()}
                        onMouseLeave={() => swiper1Ref.current.autoplay.start()}
                      />
                    </Tooltip>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Second Swiper */}
              <Swiper
                grabCursor={true}
                centeredSlides={true}
                style={{ paddingRight: '15px' }}
                slidesPerView={isMobile() ? 2 : 4}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
                onSwiper={(swiper) => {
                  swiper2Ref.current = swiper;
                }}
              >
                {array2.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Tooltip
                      title={
                        <div>
                          <img
                            src={img}
                            style={{
                              width: '40vw',
                              height: 'auto',
                            }}
                            alt={`slide-${index}`}
                          />
                        </div>
                      }
                      PopperProps={{
                        modifiers: [
                          {
                            name: 'flip',
                            options: {
                              fallbackPlacements: [],
                            },
                          },
                          {
                            name: 'zIndex',
                            options: {
                              zIndex: 9999,
                            },
                          },
                        ],
                        sx: {
                          display: isMobile() ? 'none' : 'flex',
                          pointerEvents: 'none', // Add this line
                          [`& .MuiTooltip-tooltip`]: {
                            fontSize: '12px',
                            padding: '3px',
                            paddingBottom: '1px',
                            background: '#222',
                            maxWidth: 'none',
                          },
                        },
                      }}
                      placement="left"
                    >
                      <img
                        src={img}
                        alt={`slide-${index}`}
                        className="swiper-image"
                        onClick={() => handleImageClick(img)}
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => swiper2Ref.current.autoplay.stop()}
                        onMouseLeave={() => swiper2Ref.current.autoplay.start()}
                      />
                    </Tooltip>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Third Swiper */}
              <Swiper
                grabCursor={true}
                // centeredSlides={true}
                slidesPerView={isMobile() ? 2 : 4}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                initialSlide={5}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
                onSwiper={(swiper) => {
                  swiper3Ref.current = swiper;
                }}
              >
                {array3.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Tooltip
                      title={
                        <div>
                          <img
                            src={img}
                            style={{
                              width: '40vw',
                              height: 'auto',
                            }}
                            alt={`slide-${index}`}
                          />
                        </div>
                      }
                      PopperProps={{
                        modifiers: [
                          {
                            name: 'flip',
                            options: {
                              fallbackPlacements: [],
                            },
                          },
                          {
                            name: 'zIndex',
                            options: {
                              zIndex: 9999,
                            },
                          },
                        ],
                        sx: {
                          display: isMobile() ? 'none' : 'flex',
                          pointerEvents: 'none', // Add this line
                          [`& .MuiTooltip-tooltip`]: {
                            fontSize: '12px',
                            padding: '3px',
                            paddingBottom: '1px',
                            background: '#222',
                            maxWidth: 'none',
                          },
                        },
                      }}
                      placement="left"
                    >
                      <img
                        src={img}
                        alt={`slide-${index}`}
                        className="swiper-image"
                        onClick={() => handleImageClick(img)}
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => swiper3Ref.current.autoplay.stop()}
                        onMouseLeave={() => swiper3Ref.current.autoplay.start()}
                      />
                    </Tooltip>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Site Privado</DialogTitle>
        <DialogContent>Este site é privado e não pode ser acessado.</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
