import React from "react";
import { Box, Container, Grid, Tab, Tabs, Typography, useTheme } from "@mui/material";

import Education from "../assets/images/industries/education.webp";
import Healthcare from "../assets/images/industries/healthcare.webp";
import Software from '../assets/images/industries/software.webp';
import Estate from '../assets/images/industries/estate.webp';
import Finance from '../assets/images/industries/finace.webp';
import Logistic from '../assets/images/industries/logistic.webp';
import Media from '../assets/images/industries/media.webp';
import Hospitality from '../assets/images/industries/hospitality.webp';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const industry = [
    {
        title: "Eudcation",
        src: Education,
        desc: `We provide top-notch and impactful eLearning software solutions to forward thinking Edtech companies that deliver enhanced end-user experiences and meet key objectives. Our engineering expertise combined with our deep understanding of the education industry allows us to meet the needs of EduTech leaders around the world.`
    },
    {
        title: "Healthcare",
        src: Healthcare,
        desc: `Whether you’re looking for a custom healthcare application, an interactive EMR, a SaaS product that solves business problems, or an AI-driven analytics solution, we have you covered. We ensure all our healthcare solutions are inline with required compliances and regulatory guidelines, and also strong data privacy protection. Use our proven healthcare software development expertise to build and enhance your business efficiency.`
    },
    {
        title: "Software & IT",
        src: Software,
        desc: `As a smart and Agile software company, we provide full-service IT consulting services to overcome the biggest business obstacles, enabling long-term business success at scale. Whether you’re modernizing your IT strategy, looking to build a SaaS product, modernizing your legacy systems, or recovering from a software project, our proven software developers have you covered.`
    },
    {
        title: 'Real Estate',
        src: Estate,
        desc: `At Unified Infotech, we have developed a number of bespoke software solutions, such as ERP CRM, SaaS solutions, that have enabled businesses in the real estate industry to digitize their operational processes and scale their business.`
    },
    {
        title: 'Finance',
        src: Finance,
        desc: `From the very beginning, we have provided enterprise-class banking and financial software services to fintech companies, financial institutions and banks to support their digital transformation and deliver seamless end user experiences for their customers and internal stakeholders.`
    },
    {
        title: 'Logistic',
        src: Logistic,
        desc: `Utilize our custom software development services in New York and take your business to the next level. Create a Media & Entertainment solution that is mission-critical to increasing viewer engagement, modernizing your processes, and improving your bottom line.`
    },
    {
        title: 'Media & Entertainment',
        src: Media,
        desc: `Utilize our custom software development services in New York and take your business to the next level. Create a Media & Entertainment solution that is mission-critical to increasing viewer engagement, modernizing your processes, and improving your bottom line.`
    },
    {
        title: 'Hospitality',
        src: Hospitality,
        desc: `Browse our complete suite of travel and hospitality software products to meet your customer’s needs. From fully-automated migration to bespoke software integration, we’re your partner for a more efficient and profitable hospitality business.`
    }
];

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{ width: '100%' }}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Industires = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <section id="industires" style={{minHeight: "850px"}}>
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
                        Industries We Serve
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        marginTop={theme.spacing(1)}
                        gutterBottom
                        color={theme.palette.text.secondary}
                    >
                        At Techcraft Solutions, we work with fast-growing companies, with dedicated teams that create cutting-edge, impeccable, and long-lasting software solutions. <br />
                        Trust us when we say that when your business is on a mission-critical trajectory, Techcraft Solutions can help guide you along the way.
                    </Typography>
                </Box>
                <Container
                    sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row-reverse' }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderLeft: 1, borderColor: 'divider', width: "200px" }}
                        TabIndicatorProps={{
                            sx: {
                                left: 0
                            }
                        }}
                    >
                        {industry.map((item, index) => (
                            <Tab label={item.title} {...a11yProps(index)} />
                        ))}
                    </Tabs>
                    {industry.map((item, index) => (
                        <TabPanel value={value} index={index}  >
                            <img style={{ width: "90%", height: 'auto' }} src={item.src} />
                            <Typography
                                variant="body1"
                                color={theme.palette.text.secondary}
                            >
                                {item.desc}
                            </Typography>
                        </TabPanel>
                    ))}

                </Container>
            </Box>
        </section>
    )
}

export default Industires;