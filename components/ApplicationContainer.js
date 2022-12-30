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
    },
  }));


export const ApplicationContainer = ({children}) => {
    const { classes, cx } = useStyles();
    return(
        <AppShell
        styles={{
            main: {
                background: '#FFFFFF',
                width: "100vw",
                height: "100vh",
                paddingLeft: '0px',
            }
        }}
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