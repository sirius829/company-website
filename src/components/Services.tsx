import { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { AppShortcut, BugReport, Category, DeveloperMode, Language, MobileFriendly } from '@mui/icons-material';

interface ServicesProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: ServicesProps[] = [
  {
    title: "Web Development",
    description: "We have plenteous experience in web development, creating websites and web apps that stand out in the crowd and streamline business solutions.",
    icon: <DeveloperMode color='primary' sx={{ width: 32, height: 32 }} />
  },
  {
    title: "Mobile App Development",
    description: "We focus on developing highly innovative and scalable mobile apps that enhance customer experience and build brand value.",
    icon: <MobileFriendly color='primary' sx={{ width: 32, height: 32 }} />
  },
  {
    title: "Product Engineering",
    description: "To help you achieve your business goals, our team plans, designs, develops, tests, and scales software products. We provide custom software product development services that involve ideation, development, and product innovation.",
    icon: <Category color='primary' sx={{ width: 32, height: 32 }} />
  },
  {
    title: "App Modernization",
    description: "We provide specialized consulting and upgradation of legacy applications for businesses around the world, using the latest technologies, in-trend user experiences and modern cloud infrastructures. In this ever changing digital landscape, opting for legacy application modernisation is a must for businesses.",
    icon: <AppShortcut color='primary' sx={{ width: 32, height: 32 }} />
  },
  {
    title: "Web 3.0 Development",
    description: "We build distributed and decentralized web based systems using a variety of technologies like smart contracts, blockchain, DeFi, IoT, AI, VR, and ML. Invest in our Web 3.0 Development Service and see a tangible impact on your business.",
    icon: <Language color='primary' sx={{ width: 32, height: 32 }} />
  },
  {
    title: "QA/testing",
    description: "Our quality assurance team ensures quality testing of the product across the entire lifecycle of your app.",
    icon: <BugReport color='primary' sx={{ width: 32, height: 32 }} />
  },

]

const Services = (): JSX.Element => {
  const theme = useTheme();

  return (
    <section id='services' >
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 10,
          px: 2,
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
            Services
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            marginTop={theme.spacing(1)}
            gutterBottom
            color={theme.palette.text.secondary}
          >
            Full-cycle services that cover every aspect of software engineering.
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={4}>
            {services.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box component={Card} padding={4} width={1} height={1} borderRadius={4} className='service-component'>
                  <Box display='flex' flexDirection='column'>
                    {item.icon}
                    <Typography
                      variant='h6'
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color={theme.palette.text.secondary}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Services;
