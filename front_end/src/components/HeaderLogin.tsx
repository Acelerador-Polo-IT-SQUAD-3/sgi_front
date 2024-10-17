/* import React from 'react';
import { IonButton, IonMenuButton } from '@ionic/react';
import Sidebar from './Sidebar';
import Logo from '../dummy-images/polo-it.png';
import IconoChat from '../dummy-images/img-HeaderLogin/chatbubbles.png';
import IconoLogOut from '../dummy-images/img-HeaderLogin/log-out.png';
import IconoPerson from '../dummy-images/img-HeaderLogin/person-sharp.png';

const HeaderLogin: React.FC = () => {
    return (
        <>
            <Sidebar />


            <div className="flex items-center justify-between px-4 py-2 bg-[#407A92]">

                <IonButton slot="start" className="mr-4">
                    <IonMenuButton />
                </IonButton>


                <img src={Logo} alt="Polo IT Logo" className="h-8" />


                <div className="flex items-center space-x-4">
                    <img src={IconoChat} alt="Chat Icon" className="w-6 h-6" />
                    <img src={IconoPerson} alt="Person Icon" className="w-6 h-6" />
                    <img src={IconoLogOut} alt="LogOut Icon" className="w-6 h-6" />
                </div>
            </div>
        </>
    );
};

export default HeaderLogin;
 */