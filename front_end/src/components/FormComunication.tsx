import {
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  useIonToast,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton
} from "@ionic/react";
import React, { useState } from "react";

interface FormComunicationProps {
  data: Array<{
    user_id: number;
    user_name: string;
    user_email: string;
    team_names: string;
  }> | null;
}

function FormComunication({ data }: FormComunicationProps) {
  const [affair, setAffair] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [errors, setErrors] = useState<{
    affair?: string;
    message?: string;
    selectedOptions?: string;
  }>({});
  const [present] = useIonToast();

  const clearForm = () => {
    setAffair("");
    setMessage("");
    setSelectedOptions([]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});
    const newErrors: {
      affair?: string;
      message?: string;
      selectedOptions?: string;
    } = {};

    if (selectedOptions.length === 0) {
      newErrors.selectedOptions = "Selecciona al menos un email";
    }
    if (affair.trim() === "") {
      newErrors.affair = "El asunto no puede estar vacío";
    }
    if (message.trim() === "") {
      newErrors.message = "El mensaje no puede estar vacío";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const messageData = {
      affair,
      message,
      selectedOptions,
    };

    try {
      const storedUser = JSON.parse(sessionStorage.getItem("user") || "{}");
      const fromReception = storedUser?.email;
      const apiUrl = import.meta.env.VITE_API_URL;

      const response = await fetch(`${apiUrl}/teams/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...messageData, fromReception }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el envío del correoo");
      }

      const responseData = await response.json();
      console.log("Envío exitoso:", responseData);
      present({
        message: "Email enviado correctamente",
        duration: 2000,
        color: "success",
      });
      clearForm();
    } catch (error) {
      console.error("El error en el envío del correo:", error);
      present({
        message: "Error al enviar el email. Intenta de nuevo.",
        duration: 2000,
        color: "danger",
      });
    }
  };

  return (
    <section className="w-full px-16 p-0 m-0 page-background h-full">
      <IonTitle className="text-md font-bold  my-6 text-left text-gray-800">
        Comunicación
      </IonTitle>
      <form onSubmit={handleSubmit} className="space-y-4">
      <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonItem
                lines="none"
                className="rounded-md h-10 items-center m-0 mr-28 shadow-lg"
              >
                <IonSelect
                  label="Destinatario"
                  multiple={true}
                  value={selectedOptions}
                  onIonChange={(e: CustomEvent) =>
                    setSelectedOptions(e.detail.value)
                  }
                  interface="popover"
                  className="text-md text-black"
                >
                  {data ? (
                    data.map((user) => (
                      <IonSelectOption
                        key={user.user_id}
                        value={user.user_email}
                      >
                        {`${user.user_name} - ${user.team_names}`}
                      </IonSelectOption>
                    ))
                  ) : (
                    <IonSelectOption value="">Cargando...</IonSelectOption>
                  )}
                </IonSelect>
                {errors.selectedOptions && (
                  <p className="text-red-500 text-xs">
                    {errors.selectedOptions}
                  </p>
                )}
              </IonItem>
            </IonCol>
            <IonCol size="6">
              <IonItem lines="none" className="h-10 shadow-lg">
                <IonInput
                  placeholder="Asunto"
                  value={affair}
                  minlength={3}
                  onIonChange={(e: CustomEvent) => setAffair(e.detail.value!)}
                />
                {errors.affair && (
                  <p className="text-red-500 text-xs">{errors.affair}</p>
                )}
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="flex my-10">
              <IonItem lines="none" className="w-full rounded-xl shadow-lg">
                <IonTextarea
                  value={message}
                  onIonChange={(e: CustomEvent) => setMessage(e.detail.value!)}
                  placeholder="Escribe aquí"
                  className="h-80"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="flex justify-end space-x-4">
            <IonButton
              className="bg-[#E65C4F] text-black normal-case rounded-xl px-2 m-0 p-0 h-10"
              fill="clear"
              type="button"
              onClick={clearForm}
            >
              Cancelar
            </IonButton>
            <IonButton
              className="bg-[#E65C4F] text-black normal-case rounded-xl px-2 p-0 m-0 mx-2 h-10"
              type="submit"
              fill="clear"
            >
              Enviar
            </IonButton>

          </IonRow>
        </IonGrid>
      </form>
    </section>
  );
}

export default FormComunication;
