import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Button, Input, MenuItem, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { MuiTelInput } from 'mui-tel-input';

emailjs.init({
  publicKey: 'QWjm29WgYh7uf1vmC'
});

interface ContactProps {
  fullName?: string;
  email?: string;
  phone?: string;
  interest?: string;
  budget?: string;
  message?: string;
  file?: any;
}
const interests = [
  {
    value: "custom",
    label: "Custom Software Development"
  },
  {
    value: "web",
    label: "Web Development"
  },
  {
    value: "app",
    label: "App Development"
  },
  {
    value: "design",
    label: "Website redesign"
  },
  {
    value: "consult",
    label: "Digital Consulting"
  },
  {
    value: "etc",
    label: "Others"
  },
];

const budgets = [
  {
    value: '1k',
    label: '$1K - $5K'
  },
  {
    value: '5k',
    label: '$5K - $10K'
  },
  {
    value: '10k',
    label: '$10K - $15K'
  },
  {
    value: '15k',
    label: '$15K - $20K'
  },
  {
    value: '20k',
    label: '$20K - more'
  }
]

const Contact = (): JSX.Element => {
  const theme = useTheme();
  const [contact, setContact] = useState<ContactProps>();

  const onsubmit = (e: any) => {
    emailjs.sendForm('service_4g1x2pe', 'template_dwyf16d', "#contactForm")
      .then(() => {
        console.log('success');
      })
      .catch((err) => { console.log(err) })
    return;
  }

  return (
    <div id='contact'>
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 10,
          px: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >

        <Container>
          <Box marginBottom={4}>
            <Typography
              variant='h5'
              align='left'
              fontWeight={700}
              marginTop={theme.spacing(1)}
              gutterBottom
              sx={{
                color: theme.palette.text.primary,
                textTransform: 'uppercase',
              }}
            >
              Contact
            </Typography>
            <Typography
              variant='subtitle1'
              align='left'
              marginTop={theme.spacing(1)}
              gutterBottom
              color={theme.palette.text.secondary}
            >
              We would love to hear from you
            </Typography>
          </Box>
          <form id='contactForm'>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField variant='standard' label="Full Name" required sx={{ width: "100%" }}
                  value={contact?.fullName}
                  onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                  name='full_Name'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField name='email' variant='standard' label="Email address" required sx={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <MuiTelInput
                  placeholder="Enter phone Number"
                  variant='standard'
                  fullWidth
                  sx={{ marginTop: "16px" }}
                  value={contact?.phone}
                  name='phone'
                  onChange={(e) => {
                    setContact({
                      ...contact,
                      phone: e?.toString()
                    })
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField variant='standard' label="Area Of Interest" name='interest' select required sx={{ width: "100%" }}
                  value={contact?.interest}
                  onChange={(e) => setContact({ ...contact, interest: e.target.value })}
                >
                  {interests.map((interest, index) => (
                    <MenuItem key={index} value={interest.value}>
                      {interest.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField variant='standard' label="Budget" name='budget' select required sx={{ width: "100%" }}
                  value={contact?.budget}
                  onChange={(e) => setContact({ ...contact, budget: e.target.value })}
                >
                  {budgets.map((budget, index) => (
                    <MenuItem key={index} value={budget.value}>
                      {budget.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField variant='standard' label="message" name='message' required sx={{ width: "100%" }} multiline
                  value={contact?.message}
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} mt={4}>
                <Button
                  onClick={onsubmit}
                  variant='contained'
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
