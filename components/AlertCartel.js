
import { Image, Container,createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
    container: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4],
      borderStyle: "solid",
      borderRadius: "5px",
      paddingBottom:"6vh",
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
