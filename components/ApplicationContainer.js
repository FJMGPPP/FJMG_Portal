import {
    AppShell,
    Text
} from "@mantine/core"
import Footer from "./Footer"
import Header from "./SimpleHeader"
export const ApplicationContainer = ({children}) => {
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
           <Footer links={[{link:"localhost:8080",label:"Conoceme"}]}/>
        }
        header={
            <Header links={[{link:"localhost:8080",label:"Inico"}]}/>
        }
        >
          {children}
        </AppShell>
    )
}