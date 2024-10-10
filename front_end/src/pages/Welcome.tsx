//Pagina que muestra informacion a traves de fotos, contiene los vectores que enrutan hacia register y login


import { IonPage, IonContent } from "@ionic/react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import card1 from '../../public/imgs/card1.jpg'
import card2 from '../../public/imgs/card2.jpg'
import card3 from '../../public/imgs/card3.jpg'
import card4 from '../../public/imgs/card4.jpg'

const Welcome: React.FC = () => {
  const headerButtons = [

    { label: "Crear cuenta", routerLink: "/signin" },
    { label: "Iniciar Sesión", routerLink: "/login" },
  ];

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


  return (
    <IonPage>
      <Header buttons={headerButtons} activeSidebar={false} />
      <IonContent className="w-full" fullscreen>
        <Carousel />

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

export default Welcome;
