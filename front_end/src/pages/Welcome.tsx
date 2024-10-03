//Pagina que muestra informacion a traves de fotos, contiene los vectores que enrutan hacia register y login


import { IonPage, IonContent } from "@ionic/react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
      image: "src/dummy-images/card1.jpg",
      alt: "Cursos",
    },
    {
      title: "EVENTOS",
      description: "Súmate a nuestras charlas y eventos gratuitos",
      informacion: "Capacítate para el futuro con nuestros profesionales",
      image: "src/dummy-images/card2.jpg",
      alt: "Eventos",
    },
    {
      title: "BOOTCAMPS",
      description: "Amplía tu camino con un bootcamp intensivo",
      informacion: "Prepárate para un cambio profesional  con nuestros bootcamps",
      image: "src/dummy-images/card3.jpg",
      alt: "Bootcamps",
    },
    {
      title: "EMPLEO",
      description: "Descubre ofertas de empleo que te inspiren",
      informacion: "Encuentra las mejores oportunidades en nuestra bolsa de trabajo",
      image: "src/dummy-images/card4.jpg",
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
