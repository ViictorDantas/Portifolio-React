import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from '../../../../assets/images/avatar.jpg'
import DownloadIcon from '@mui/icons-material/Download'

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        background: "black",
        height: '100vh'
    }))

    const StyledImg = styled("img")(() => ({
        width: '100%',
        borderRadius: '50%',
    }))
    return (
        <>
            <StyledHero>
                <Container>

                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography color="primary" variant="h1">João Victor</Typography>
                        <Typography color="primary" variant="h2">I'am a Software Engineer</Typography>
                        <button>
                            <DownloadIcon/>
                            Donwload CV</button>
                        <button>Contact me</button>
                    </Grid>
                </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
