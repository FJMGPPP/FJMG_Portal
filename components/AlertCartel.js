
import { Image, Container,createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
    container: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      boxShadow: theme.colorScheme === 'dark' ? "rgb(85, 87, 89) 0px 20px 30px -10px" : "rgb(38, 57, 77) 0px 20px 30px -10px",
      paddingBottom:"6vh",
      borderRadius:"30px"
    }
}))

export default function AlertCartel({title,description,image})
{
    const { classes, theme } = useStyles();
    return (
        <Container className={classes.container} size="xl" px={0}>
            <h1 align="center">{title}</h1>
            <p align="center">{description}</p>
            <Image src={image} height={180}  fit="contain"/>
        </Container>
    )
}
