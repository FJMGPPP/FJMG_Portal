import {useEffect, useState} from 'react'
import {Proyect} from './Project.js'
import {Grid, RingProgress,Text} from '@mantine/core'
import AlertCartel from './alertCartel.js'

const LoadingStates = {
    "loading": 1,
    "sucess":2,
    "fail":3,
    "blank":4,
    "void":5
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export default function NoticesMain()
{
    const [porcentaje , setPorcentaje] = useState( 0);
    const [loading , setLoading] = useState(LoadingStates.blank);
    const [proyects , setProyects] = useState([]);
    
   useEffect(()=>{
   if(loading == LoadingStates.blank)
   {
    fetch('http://localhost:8180/api/project/All')
    .then((response) => response.json())
    .then((projectsData) => {
            if(projectsData.length > 0){
                setProyects(projectsData)
                setLoading(LoadingStates.loading);
            }
            else{
                setLoading(LoadingStates.void)
            }
    }).catch(err => setLoading(LoadingStates.fail))
   }
   if(loading == LoadingStates.loading)
   {
    var projectsData = proyects;
    var size = projectsData.length;
    var projects = projectsData; 
    var porcentajeload = 0;
    var count = 0;
    console.log(proyects)
    for (let i = 0; i < size; i++) 
    {
        projects[i] = 
        <Proyect
        key={projectsData[i].id}
        image={projectsData[i].url_port} 
        title={projectsData[i].title} 
        description={projectsData[i].description}
        progress={projectsData[i].progress}/>
        setTimeout(() => {
            count++;
            porcentajeload = Math.round(count / size * 100)
            setPorcentaje(porcentajeload)
            if(porcentajeload == 100)
            {
                setLoading(LoadingStates.sucess)
            }
        }, getRandomInt(15000));
    }
   }
   
   },[loading])

   if(loading == LoadingStates.fail)
   {
    return(
            <AlertCartel title = "Fuera de conexion"
            description = {`Lo siento querido usuario pero actualmente estamos fuera de linea.
            Intentaremos regresar lo antes posible`}
            image = "/mantenimiento.png"/>
    )
   }
    if(loading == LoadingStates.loading){
        
        return(
                <Grid justify="center">
                <RingProgress
                sections={[{ value: porcentaje, color: 'blue' }]}
                label=
                {
                        <Text color="blue" weight={700} align="center" size="xl">
                            {porcentaje}%
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
    if(loading == LoadingStates.void){
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
