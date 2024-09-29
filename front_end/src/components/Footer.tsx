import { IonFooter } from "@ionic/react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <IonFooter className="w-full bg-[#FFF4EA] py-4">
      <div className="w-full flex justify-between items-center px-4">



        <div className="ml-8 flex-grow text-left font-roboto text-sm lg:text-base font-semibold text-black-700">
          2024&nbsp;
          <a href="https://www.poloitbuenosaires.com" className="text-[#0E4EAD] hover:underline">
            Polo IT Buenos Aires
          </a>
          &nbsp;. @Todos los derechos reservados
        </div>


        <div className="flex items-center space-x-8 mr-12">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-black hover:text-[#0E4EAD] text-xl lg:text-2xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-black hover:text-[#0E4EAD] text-xl lg:text-2xl" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-black hover:text-[#0E4EAD] text-xl lg:text-2xl" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-black hover:text-[#0E4EAD] text-xl lg:text-2xl" />
          </a>
        </div>
      </div>
    </IonFooter>
  );
}

export default Footer;
