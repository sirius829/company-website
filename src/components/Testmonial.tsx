import { Avatar, Box, Card, Rating, Typography, useTheme } from "@mui/material"



const Testmonial = ({ clientName, clientPosition,  review, rate } : {
    clientName: string,
    clientPosition: string,
    review: string,
    rate: number
} ) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                padding: 2,
                marginTop: 4,
                borderRadius: 1,
                background: theme.palette.background.paper,
                maxWidth: 900
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 2
                        }}
                    >
                        <Avatar sx={{ width: 48, height: 48 }} />
                        <Typography
                            variant='h6'
                            component='p'
                            color={theme.palette.text.primary}
                        >
                            {clientName}
                            <Typography
                                variant='body1'
                                component='p'
                                color={theme.palette.text.secondary}
                            >
                                {clientPosition}
                                {/* CEO of commenter.ai */}
                            </Typography>
                        </Typography>
                    </Box>
                    <Rating value={rate} readOnly />
                </Box>
                <Typography
                    variant='body2'
                    component='p'
                    color={theme.palette.text.secondary}
                >
                    {review}
                </Typography>
            </Box>
        </Card>
    )
}

export default Testmonial;