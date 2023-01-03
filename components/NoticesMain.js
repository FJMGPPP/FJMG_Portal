import { useEffect,useState } from 'react'
import {Proyect} from './Project.js'
import {Grid, RingProgress,Text} from '@mantine/core'
const LoadingStates = {
    "loading": 1,
    "sucess":2,
    "fail":3,
    "blank":4
}



export default function NoticesMain()
{
    
    const [loadPorcentaje , setLoadPorcentaje] = useState(0);
    const [loading , setLoading] = useState(LoadingStates.blank);
    const [proyects , setProyects] = useState([]);
    
    fetch('http://localhost:8180/api/project/All')
    .then((response) => response.json())
    .then((proyects) => {
        var count = 0;
        if(proyects.length > 0)
        {
            setLoading(LoadingStates.loading);
            for (let i = 0; i < proyects.length; i++) {
                proyects[i] = 
                    <Proyect
                      key={proyects[i].id}
                      image={proyects[i].url_port} 
                      title={proyects[i].title} 
                      description={proyects[i].description}
                      progress={proyects[i].progress}
                    />
                    count++;
                    console.log({"count" : count,"porcentaje" : loadPorcentaje})
                    setLoadPorcentaje(proyects.lenght / count * 100)
                
            }
            setProyects(proyects);
            //setLoading(LoadingStates.sucess);    
        }
        else
        {
            setLoading(LoadingStates.fail)
        }

    })
    
    if(loading == LoadingStates.loading){
        
        return(
                <Grid justify="center">
                <RingProgress
                sections={[[{ value: Math.round(loadPorcentaje), color: 'blue' }]]}
                label=
                {
                        <Text color="blue" weight={700} align="center" size="xl">
                            {Math.round(loadPorcentaje)}%
                        </Text>
                }
                />
                </Grid>
        )
    }
    if(loading == LoadingStates.sucess){
        return(
                <Grid justify="center">
                   {proyects}
                </Grid>
        )
    }
    if(loading == LoadingStates.fail){
        return(
            <Grid justify="center">
                <p>Sin Projectos actualmente</p>
            </Grid>
        )
    }
    if(loading == LoadingStates.blank){
        return(
            <Grid justify="center">
                
            </Grid>
        )
    }
    
}
