import { IonContent, IonImg } from '@ionic/react'
import React from 'react'
import Carousel from './Carousel'
import homeMentor from '../../public/imgs/home-mentor.jpeg'
import homeAdmin from '../../public/imgs/home-admin.jpeg'
import card1 from '../../public/imgs/card1.jpg'
import card2 from '../../public/imgs/card2.jpg'
import card3 from '../../public/imgs/card3.jpg'
import card4 from '../../public/imgs/card4.jpg'
import '../components/ExploreContainer.css';

interface HomeRoleViewProps {
    role: number
}


const cards = [
    {
        title: "CURSOS",
        description: "Desbloquea tu potencial con nuestros cursos",
        informacion: "Conoce la gran variedad de opciones IT que tenemos para ofrecerte",
        image: card1,
        alt: "Cursos",
    },
    {
        title: "EVENTOS",
        description: "Súmate a nuestras charlas y eventos gratuitos",
        informacion: "Capacítate para el futuro con nuestros profesionales",
        image: card2,
        alt: "Eventos",
    },
    {
        title: "BOOTCAMPS",
        description: "Amplía tu camino con un bootcamp intensivo",
        informacion: "Prepárate para un cambio profesional  con nuestros bootcamps",
        image: card3,
        alt: "Bootcamps",
    },
    {
        title: "EMPLEO",
        description: "Descubre ofertas de empleo que te inspiren",
        informacion: "Encuentra las mejores oportunidades en nuestra bolsa de trabajo",
        image: card4,
        alt: "Empleo",
    },
];


const HomeRoleView: React.FC<HomeRoleViewProps> = ({ role }) => {
    return (
        <>
            {
                role === 1 && (
                    <IonContent>
                        <div className='h-[80%] flex justify-center items-center relative border-radius'>
                            <div className='relative' style={{ width: '1000px', height: '500px' }}>

                                <img
                                    src={homeAdmin}
                                    alt=''
                                    className='w-[1000px] h-[500px] object-cover object-center'
                                    style={{ clipPath: 'inset(95px 0 67px 0)' }}
                                />

                                <div className='absolute top-0 left-0 right-0 bottom-0 bg-red-500 opacity-40 rounded-[80px]'
                                    style={{ clipPath: 'inset(95px 0 67px 0)' }}></div>
                            </div>
                            <p className='absolute text-7xl font-bold text-white'>¡Te damos la bienvenida!</p>
                        </div>




                        <div className='flex justify-center gap-20 mt-10 mb-20'>
                            <div className='bg-white w-[285px] h-[334px] flex flex-col justify-center items-center gap-6 rounded-md shadow-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-[160px]' viewBox="0 0 640 512">
                                    <path fill="#ec6565" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                                </svg>
                                <p className='text-lg font-semibold'>Control de inscripciones</p>
                            </div>

                            <div className='bg-white w-[285px] h-[334px] flex flex-col justify-center items-center gap-6 rounded-md shadow-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-[160px]' viewBox="0 0 576 512">
                                    <path fill="#ec6565" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" />
                                </svg>
                                <p className='text-lg font-semibold'>Material didáctico</p>
                            </div>

                            <div className='bg-white w-[285px] h-[334px] flex flex-col justify-center items-center gap-6 rounded-md shadow-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-[160px]' viewBox="0 0 512 512">
                                    <path fill="#ec6565" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z" />
                                </svg>
                                <p className='text-lg font-semibold'>Comunicación</p>
                            </div>
                        </div>
                    </IonContent>
                )
            }
            {
                role === 2 && (
                    <IonContent style={{ backgroundColor: '#FFF4EA', height: '100vh' }}>

                        <div className='h-[80%] flex justify-center items-center relative border-radius'>
                            <div className='relative' style={{ width: '1000px', height: '500px' }}>

                                <img
                                    src={homeMentor}
                                    alt=''
                                    className='w-[1000px] h-[500px] object-cover object-center'
                                    style={{ clipPath: 'inset(95px 0 67px 0)' }}
                                />

                                <div
                                    className='absolute top-0 left-0 right-0 bottom-0'
                                    style={{
                                        backgroundColor: '#7788AA',
                                        opacity: 0.4,
                                        borderRadius: '80px',
                                        clipPath: 'inset(95px 0 67px 0)'
                                    }}
                                ></div>
                            </div>
                            <p className='absolute text-7xl font-bold text-white'>¡Te damos la bienvenida!</p>
                        </div>


                        <div className=' flex justify-center gap-32 mt-10 mb-20'>
                            <div className='bg-white w-[285px] h-[334px] flex flex-col justify-center items-center gap-6 rounded-md shadow-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-[190px]' viewBox="0 0 384 512"><path fill='#7788AA' d="M256 64A64 64 0 1 0 128 64a64 64 0 1 0 128 0zM152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.2 85.4s-18.7 29.7-8.9 44.4L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4L112 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 32 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-258.4c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6c-12.6 0-24.9-2-36.6-5.8c-.9-.3-1.8-.7-2.7-.9z" /></svg>
                                <p className='text-lg  font-semibold'>Recursos de aprendizaje</p>
                            </div>
                            <div className='bg-white w-[285px] h-[334px] flex flex-col justify-center items-center gap-6 rounded-md shadow-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-[190px]' viewBox="0 0 448 512"><path fill='#7788AA' d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" /></svg>
                                <p className='text-lg font-semibold'>Calendario</p>
                            </div>
                        </div>
                    </IonContent>
                )
            }
            {
                role === 3 && (
                    <IonContent>
                        <Carousel />

                        <div className="container mx-auto px-4 bg-[#FFF4EA] py-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg shadow-md overflow-hidden"
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.alt}
                                            className="w-full h-40 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">{card.title}</h3>
                                            <p className="text-gray-600">{card.description}</p>
                                            <br />
                                            <p className="text-xs text-[#8A8A8D]">{card.informacion}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </IonContent>
                )
            }
        </>

    )
}

export default HomeRoleView