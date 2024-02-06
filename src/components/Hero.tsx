import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Spacer from './Spacer';
import { Button } from '@mui/material';
import Testmonial from './Testmonial';

const Hero = (): JSX.Element => {
  const theme = useTheme();

  return (
    <section id='home'>
      <Box
        sx={{
          pt: 10,
          pl: 24,
          backgroundColor: theme.palette.background.default,
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e1e1e1',
        }}
      >
        <Box>
          <Typography
            align='left'
            color={theme.palette.text.primary}
            variant='h3'
            sx={{ fontWeight: 700 }}
            gutterBottom
          >
            TechCraft Solutions Company
          </Typography>

          <Typography
            variant='h6'
            component='p'
            color={theme.palette.text.secondary}
            sx={{ fontWeight: 400, maxWidth: 700 }}
          >
            <strong>TechCraft Solutions</strong> is a premier software consulting firm specializing in web development.
            Our team of expert developers is dedicated to <strong>bringing your digital dreams to life</strong>.
            From concept to implementation, we're here to guide you every step of the way.
          </Typography>

          <Testmonial
            clientName='Bogomil Stoev'
            clientPosition='CEO of the commenter.ai'
            review='As the CEO of Commenter.ai, I am highly impressed by the expertise and professionalism of TechCraft Solutions.
            Their meticulous attention to detail, innovative solutions, and dedication to client satisfaction set them apart in the consulting industry.
            TechCraft Solutions is a trusted partner for businesses seeking top-tier software consulting services.
            I highly recommend them to anyone looking to elevate their digital presence and achieve their goals.'
            rate={5}
          />
          <Button variant='outlined' sx={{ marginTop: 4, borderRadius: 1, mb: 4 }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} >
            Contact US
          </Button>
        </Box>


        <object
          width="40%"
          type='image/svg+xml'
          data='https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-f98a5ab/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/animate-computer.svg'
        />
      </Box>
      <Spacer sx={{ paddingTop: 6 }} />
    </section>
  );
};

export default Hero;
