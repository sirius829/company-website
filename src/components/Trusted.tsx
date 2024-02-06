import { Box, Container, Grid, Typography, useTheme } from "@mui/material";


const steps = [
    {
        title: "01. Consulting",
        desc: "Techcraft Solutions's software consulting service will guide you through the process of digitizing operations and streamlining workflows to meet your business objectives. Our expert advice will help you select the right solutions for faster business growth."
    },
    {
        title: "02. Proactivity",
        desc: "One of the most challenging aspects of software outsourcing is that most development firms act as robots, waiting for the client to provide clear instructions. However, we project ourselves as proactive experts, one who looks to reduce operational overheads by proactively communicating and engaging with the client, guiding and monitoring the progress of the project."
    },
    {
        title: "03. Best Practices",
        desc: "At UI we believe the success mantra for ensuring top quality software products lies in the process, through which it is being engineered. We follow CMMI Level 3 protocols and industry best practices all around to ensure all our products are engineered through a highly established set of protocols."
    },
    {
        title: "04. Accountability",
        desc: "We believe every project is a milestone in our journey. So we hold ourselves accountable to deliver results for our clients and leave no stone unturned in our quest to deliver the best of digital solutions. This ensures we have a portfolio full of success stories and not just a list of random projects."
    }
];

const Trusted = () => {
    const theme = useTheme();

    return (
        <section id="trusted">
            <Box
                sx={{
                    paddingTop: 5,
                    paddingBottom: 10,
                    px: 2,
                }}
            >
                <Container>
                    <Grid container spacing={8}>
                        <Grid item sm={12} md={6}>
                            <Box sx={{ position: 'sticky', top: "50px" }}>
                                <Typography
                                    variant="h5"
                                    color={theme.palette.text.primary}
                                >
                                    Why Are We The Most Trusted Custom Software Development Company?
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    marginTop={theme.spacing(1)}
                                    color={theme.palette.text.secondary}
                                >
                                    Techcraft Solutions focuses on engineering top-of-the-line solutions that deliver growth-oriented competitive edge to your business.
                                    Our process transparency and consistent, well-defined methodology make us the right fit for your custom software development project.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: theme.spacing(1)
                            }}
                            sm={12} md={6}
                        >
                            {steps.map((step, index) => (
                                <Box
                                    sx={{
                                        padding: theme.spacing(2),
                                        border: '1px solid',
                                        borderColor: theme.palette.divider,
                                        borderRadius: 4
                                    }}
                                    key={index}
                                >
                                    <Typography variant="h6">
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {step.desc}
                                    </Typography>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </section>
    )
}

export default Trusted;