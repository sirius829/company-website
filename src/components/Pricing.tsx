import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { DevicesOutlined, FactCheckOutlined, FindInPage, JoinInnerOutlined, TerminalOutlined } from '@mui/icons-material';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Step1Img from '../assets/images/step1.webp';
import Step2Img from '../assets/images/step2.webp';
import Step3Img from '../assets/images/step3.webp';
import Step4Img from '../assets/images/step4.webp';
import Step5Img from '../assets/images/step5.webp';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@mui/material';

interface step {
  icon: React.ElementType,
  title: string,
  img: string,
  desc: string
}

const approach: step[] = [
  {
    icon: FindInPage,
    title: "DIscovery & Planning",
    img: Step1Img,
    desc: 'The discovery and planning phase is the first stage of software product development, where the primary goal is to understand the end-user persona and also define the scope and goals of the project, as well as the associated risks. During this phase, our discovery team does extensive planning, research, data collection, and analysis. They assess the product concept’s feasibility, practicality, and usability.'
  },
  {
    icon: JoinInnerOutlined,
    title: "User Journey Mapping to System Design",
    img: Step2Img,
    desc: 'A lack of in-depth design can have a negative impact on the delivery and functionality of your software solution in line with the needs of stakeholders and users. Hence, we leverage the output of the previous phase. The team then works on the software design, such as the architecture, database tables and mock-ups of the user interface. The final design specification describes the technical implementation of the project.'
  },
  {
    icon: TerminalOutlined,
    title: "System Engineering & Development",
    img: Step3Img,
    desc: 'We start with the functional development of the new software system at this stage. This is the first time we have a real-world assessment of the system as it evolves. We get the opportunity to identify any potential bottlenecks in the development or planning process. During this phase, our development team troubleshoots solutions for any errors they find. By identifying an area of issue and thinking about how to alleviate that issue, we start developing innovative approaches that we can implement in the final system.'
  },
  {
    icon: FactCheckOutlined,
    title: "Quality Analysis & Testing",
    img: Step4Img,
    desc: 'During the quality assurance & testing stage, we migrate the system to the test environment and perform various types of testing, including integration and system testing. The last type of testing is user acceptance testing, which is done by end users to make sure the system is up to their expectations. At this stage, bugs may be discovered, and additional work may need to be done in analysis, design, or coding. Once all relevant parties have signed off on the application, the implementation and deployment process can start.'
  },
  {
    icon: DevicesOutlined,
    title: "Ultimate Deployment",
    img: Step5Img,
    desc: 'The complexity of the deployment depends on the scope of the project. Our software developers have experience with the correct deployment tools and integration servers and have a rollback strategy in place to correct errors. We offer necessary training for end-users, operations, and IT on-call staff. Deployment may be gradual, starting with a single branch and gradually adding all locations, or it may be a full-scale roll-out.'
  },
];

const Pricing = (): JSX.Element => {
  const theme = useTheme();
  const [curIndex, setCurIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);
  console.log(swiper);
  const changeActiveIndex = (index: number) => {
      setCurIndex(index);
      (swiper as any).slideTo(index);
  }

  return (
    <div id='pricing'>
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 10,
          px: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h5'
            align='center'
            fontWeight={700}
            marginTop={theme.spacing(1)}
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              textTransform: 'uppercase',
            }}
          >
            How We Approach Custom Software Development
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            marginTop={theme.spacing(1)}
            gutterBottom
            color={theme.palette.text.secondary}
          >
            We employ a consciously structured software development process adhering to the industry’s best security practices for <br /> building tailored software solutions for our clients across the globe.
          </Typography>
        </Box>
        <Container
          sx={{
            display: 'flex',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingTop: theme.spacing(2),
              paddingBottom: theme.spacing(2),
              justifyContent: 'space-between',
              flex: '1 1'
            }}
            
          >
            {approach.map((step, index) => (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing(1),
                  cursor: 'pointer'
                }}
                onClick={() => {changeActiveIndex(index)}}
                key={index}
              >
                <Button 
                  variant='outlined'
                  sx={{
                    borderRadius: "100%",
                    padding: 1,
                    minWidth: "48px",
                    minHeight: "48px",
                    color: curIndex === index ? theme.palette.primary.main : theme.palette.text.disabled,
                    borderColor: curIndex === index ? theme.palette.primary.main : theme.palette.text.disabled
                  }}
                >
                  <step.icon
                    sx={{
                      width: 24,
                      height: 24
                    }}
                  />
                </Button>
                <Typography
                  variant='subtitle1'
                  key={index}
                  sx={{
                    color: curIndex === index ? theme.palette.primary.main : theme.palette.text.disabled
                  }}
                >
                  {step.title}
                </Typography>
              </div>
            ))
            }
          </div>
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onActiveIndexChange={(swiper: any) => {setCurIndex(swiper.activeIndex)}}
            style={{
              flex: '3 1'
            }}
          >
            {approach.map((step, index) => (
              <SwiperSlide key={index}>
                <div style={{ position: 'relative' }}>
                  <img src={step.img} height="100%" />
                  <Typography
                    variant='body2'
                    sx={{
                      width: 500,
                      padding: "20px 15px",
                      background: "rgba(0,0,0,.72)",
                      color: "#fff"
                    }}
                    className='step-desc'
                  // color={theme.palette.text.secondary}
                  >
                    {step.desc}
                  </Typography>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </div>
  );
};

export default Pricing;
