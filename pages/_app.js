import '@styles/globals.css'
import {MantineProvider} from "@mantine/core"
import { ApplicationContainer } from '@components/ApplicationContainer'
import UserProvider from '@components/UseProvider'
function MyApp({ Component, pageProps }) {
  return(
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light" , 
          primaryColor : "blue"
          
          }}>
        <ApplicationContainer>
          <Component {...pageProps}/>
        </ApplicationContainer>
      </MantineProvider>
  )
}
export default MyApp
