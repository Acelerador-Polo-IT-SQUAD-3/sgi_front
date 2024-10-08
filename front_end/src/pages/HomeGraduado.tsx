import { IonPage, IonContent } from "@ionic/react";
import CarouselGraduado from "../components/CarouselGraduado";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card1 from "../dummy-images/card1.jpg"
import Card2 from "../dummy-images/card2.jpg"
import Card3 from "../dummy-images/card3.jpg"
import Card4 from "../dummy-images/card4.jpg"

const HomeGraduado: React.FC = () => {
    const headerButtons = [

        { label: "Crear cuenta", routerLink: "/signin" },
        { label: "Iniciar Sesión", routerLink: "/login" },
    ];

    const cards = [
        {
            title: "CURSOS",
            description: "Desbloquea tu potencial con nuestros cursos",
            informacion: "Conoce la gran variedad de opciones IT que tenemos para ofrecerte",
            image: Card1,
            alt: "Cursos",
        },
        {
            title: "EVENTOS",
            description: "Súmate a nuestras charlas y eventos gratuitos",
            informacion: "Capacítate para el futuro con nuestros profesionales",
            image: Card2,
            alt: "Eventos",
        },
        {
            title: "BOOTCAMPS",
            description: "Amplía tu camino con un bootcamp intensivo",
            informacion: "Prepárate para un cambio profesional  con nuestros bootcamps",
            image: Card3,
            alt: "Bootcamps",
        },
        {
            title: "EMPLEO",
            description: "Descubre ofertas de empleo que te inspiren",
            informacion: "Encuentra las mejores oportunidades en nuestra bolsa de trabajo",
            image: Card4,
            alt: "Empleo",
        },
    ];


    return (
        <IonPage>
            <Header buttons={headerButtons} activeSidebar={false} />
            <IonContent className="w-full" fullscreen>
                <CarouselGraduado />

                <section className="bg-[#FFF4EA] py-8">
                    <div className="container mx-auto px-4">
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
                </section>

            </IonContent>
            <Footer />
        </IonPage>

    );
};

export default HomeGraduado;