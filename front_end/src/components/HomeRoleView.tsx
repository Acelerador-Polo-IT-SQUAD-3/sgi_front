import { IonContent } from '@ionic/react'
import React from 'react'
import Carousel from './Carousel'

interface HomeRoleViewProps {
    role: number
}

const HomeRoleView : React.FC<HomeRoleViewProps> = ({role}) => {
  return (
    <>
    {
        role === 1 && (
            <IonContent>
                <p>Admin</p>
                <Carousel/>
            </IonContent> 
        )
    }
        {
        role === 2 && (
            <IonContent>
                <p>Mentor</p>
                <Carousel/>
            </IonContent> 
        )
    }
        {
        role === 3 && (
            <IonContent>
                <p className='text-xl'>Graduado</p>
                <Carousel/>
            </IonContent> 
        )
    }
    </>
      
  )
}

export default HomeRoleView