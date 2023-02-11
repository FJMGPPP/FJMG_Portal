import {
    AppShell,
    Text
} from "@mantine/core"
import SimpleFooter from "./SimpleFooter"
import Header from "./SimpleHeader"
import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    body: {
        width: "100%",
        height: "90vh",
        backgroundColor : theme.colorScheme === 'dark' ? theme.colors.dark[7] : "#ffffff"
    },
  }));


export const ApplicationContainer = ({children}) => {
    const { classes, cx } = useStyles();
    return(
        <AppShell
        fixed 
        footer={
           <SimpleFooter links={[{link:"localhost:8080",label:"Conoceme"}]}/>
        }
        header={
            <Header links={[{link:"localhost:8080",label:"Inico"}]}/>
        }
        >
        <div className={classes.body}>
            {children}
        </div>
          
        </AppShell>
    )
}