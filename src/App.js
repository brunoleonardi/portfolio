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
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip, tooltipClasses } from '@mui/material';
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

export const isMobile = () => {
  const isMobileDevice = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );
  return isMobileDevice
}

function App() {
  const scrollContainerRef = useRef([]);
  const sectionRefs = useRef([]);
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);
  const swiper3Ref = useRef(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [viewMode, setViewMode] = useState(isMobile() ? 'Desenvolvedor Front-End' : undefined);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    let lastScrollTop = 0; // To track the last scroll position

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

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Attach the scroll event listener to the scrollable container
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      console.log('Scroll event listener attached');
    }

    // Clean up both observers on component unmount
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
                strings={[
                  '<strong>Desenvolvedor</strong> Front-End.',
                  '<strong>Desenvolvedor</strong> Freelance.',
                  '<strong>Designer</strong> de Interfaces.',
                  'Entre em <strong>Contato</strong>.'
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <div className='contactDesc'>
              Meu nome é Bruno Leonardi, eu sou desenvolvedor há 3 anos, desenvolvo diversos tipos de páginas, buscando estilos modernos e inovadores
              <button onClick={() => redirectHandle('email')} className='contactButton'>Entre em contato</button>
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
          <Tooltip
            title={'Início'}
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
            title={'Início'}
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
            title={'Projetos'}
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
          <Tooltip
            title={'Início'}
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
            title={'Projetos'}
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
            <div data-index="1" ref={(el) => (sectionRefs.current[0] = el)} className="section" style={{ flexDirection: "column" }}>
              <div className='contact'>
                <div className='contactInfos'>
                  <div className='contactTitle'>
                    <ReactTyped
                      strings={[
                        '<strong>Desenvolvedor</strong> Front-End.',
                        '<strong>Desenvolvedor</strong> Freelance.',
                        '<strong>Designer</strong> de Interfaces.',
                        'Entre em <strong>Contato</strong>.'
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
                  </div>
                  <div className='contactDesc'>
                    Meu nome é Bruno Leonardi, eu sou desenvolvedor há 3 anos, desenvolvo diversos tipos de páginas, buscando estilos modernos e inovadores
                    <button onClick={() => redirectHandle('email')} className='contactButton'>Entre em contato</button>
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
                <div className='defaultIntrodution' >Oi! Sou Bruno, desenvolvedor e designer.</div>
              </div>
            </div>
          )}
          <div data-index={!isMobile() ? "1" : "2"} ref={(el) => !isMobile() ? (sectionRefs.current[0] = el) : (sectionRefs.current[1] = el)} className="section cards-section">
            {isMobile() ? (
              <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                <div style={{ width: '110px', textAlign: "center", backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '30px', transform: 'translateY(-20px)', fontSize: isMobile() ? '20px' : '30px', color: '#fff' }}>
                  Sobre Mim
                </div>
                <div className='infoCardsSetup'>
                  <InfoCard setViewMode={setViewMode} viewMode={viewMode} title={'Desenvolvedor Front-End'} icon={<CodeIcon />} />
                  <InfoCard setViewMode={setViewMode} viewMode={viewMode} title={'Designer de Interfaces'} icon={<BrushOutlinedIcon />} />
                  <InfoCard setViewMode={setViewMode} viewMode={viewMode} title={'Serviços Oferecidos'} icon={<WorkOutlineOutlinedIcon />} />
                  <InfoCard setViewMode={setViewMode} viewMode={viewMode} title={'Certificações e Cursos'} icon={<TaskOutlinedIcon />} />
                  <InfoCard scrollToSection={scrollToSection} setViewMode={setViewMode} title={'Meus Projetos'} icon={<AccountTreeOutlinedIcon />} />
                </div>
              </div>
            ) : (
              <div className='infoCardsSetup'>
                <InfoCard setViewMode={setViewMode} viewMode={viewMode} title={'Desenvolvedor Front-End'} icon={<CodeIcon />} />
                <InfoCard setViewMode={setViewMode} viewMode={viewMode} title={'Designer de Interfaces'} icon={<BrushOutlinedIcon />} />
                <InfoCard setViewMode={setViewMode} viewMode={viewMode} title={'Serviços Oferecidos'} icon={<WorkOutlineOutlinedIcon />} />
                <InfoCard setViewMode={setViewMode} viewMode={viewMode} title={'Certificações e Cursos'} icon={<TaskOutlinedIcon />} />
                <InfoCard scrollToSection={scrollToSection} setViewMode={setViewMode} title={'Meus Projetos'} icon={<AccountTreeOutlinedIcon />} />
              </div>
            )}
            {viewMode ? (
              viewMode === 'Desenvolvedor Front-End' ? (
                <div className='introdutionText'>
                  Sou formado em <strong>TI</strong>. Comecei minha carreira como <strong>desenvolvedor front-end</strong>, criando <strong>interfaces interativas</strong> e trabalhando com <strong>mapas dinâmicos</strong> para melhorar a visualização de <strong>dados geoespaciais</strong>. Utilizando tecnologias como <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e <strong>React</strong>, desenvolvo soluções que priorizam a performance e eficiência.
                </div>
              ) : viewMode === 'Designer de Interfaces' ? (
                <div className='introdutionText'>
                  Buscando aprimorar minhas habilidades, fiz uma pós-graduação em <strong>User Experience (UX)</strong>, onde aprendi sobre <strong>princípios de design</strong>, <strong>heurísticas de usabilidade</strong> e como criar <strong>interfaces mais intuitivas</strong>. Essa formação me permitiu aplicar conceitos sólidos de design, melhorando a experiência do usuário em cada projeto que desenvolvo.
                </div>
              ) : viewMode === 'Serviços Oferecidos' ? (
                <div className='introdutionText'>
                  Hoje, atuo em uma empresa e também trabalho como <strong>freelancer</strong>, oferecendo serviços que buscam sempre criar soluções que equilibrem <strong>personalidade</strong>, <strong>usabilidade</strong> e <strong>eficiência</strong>. Estou disponível para o desenvolvimento de interfaces interativas, design de experiência do usuário e soluções personalizadas para atender às necessidades de cada cliente.
                </div>
              ) : (
                <div className='introdutionText'>
                  Sou formado em <strong>Análise e Desenvolvimento de Sistemas</strong> pela <strong>Universidade São Judas Tadeu</strong>, onde me graduei em 2021. Finalizei minha pós-graduação em <strong>User Experience (UX)</strong> em 2024, onde aprofundei meus conhecimentos em <strong>design de interfaces</strong> e <strong>usabilidade</strong>. Além disso, concluí diversos cursos adicionais nas áreas de <strong>React</strong>, <strong>JavaScript</strong>, <strong>CSS</strong> e <strong>design</strong>, aprimorando ainda mais minhas habilidades técnicas.
                </div>
              )
            ) : isMobile() ? (
              <div></div>
            ) : (
              <div className='defaultHub'>
                <div className='defaultPic'>
                  <img src={minhaFoto} alt='myPic'></img>
                </div>
                <div className='defaultIntrodution' >Oi! Sou Bruno, desenvolvedor e designer.</div>
              </div>
            )}
          </div>
          <div data-index={!isMobile() ? "2" : "3"} ref={(el) => !isMobile() ? (sectionRefs.current[1] = el) : (sectionRefs.current[2] = el)} className="section">
            <div className='projects'>
              <div style={{ backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '30px', marginBottom: '30px', fontSize: isMobile() ? '20px' : '30px' }}>
                Meus Projetos
                {!isMobile() && (
                  <Tooltip
                    title={'Em meus projetos, você notará que em algumas imagens, ao clicar, uma mensagem informa que o site é privado. Isso ocorre porque é um serviço restrito, acessível apenas com login e senha para usuários específicos. Por isso, adicionei imagens que permitem uma visualização detalhada: basta passar o mouse sobre elas para conferir melhor os detalhes da interface.'}
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
    </div >
  );
}

export default App;
