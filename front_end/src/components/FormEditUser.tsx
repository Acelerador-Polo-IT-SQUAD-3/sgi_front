import {
    IonButton,
    IonCol,
    IonGrid,
    IonInput,
    IonRow,
    IonSelect,
    IonTextarea,
    IonSelectOption,
    IonTitle,
    IonLabel,
    IonToast,
  } from "@ionic/react";
  import { useEffect, useState } from "react";
  import { useHistory, useParams } from "react-router-dom";
  import { Organization, Technology } from "../util/types";
  import { Participant } from "../pages/UserList";
  
  const FormEditUser: React.FC = () => {
    const { id, profile } = useParams<{ id: string, profile?: string }>();
    const [participant, setParticipant] = useState<Participant | null>(null);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState<number | null>(null);
    const [dni, setDni] = useState("");
    const [description, setDescription] = useState("");
    const [technologiesIds, setTechnologiesIds] = useState<number[]>([]);
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
  
    const apiUrl = import.meta.env.VITE_API_URL;
  
    useEffect(() => {
      const fetchParticipant = async () => {
        try {
          const response = await fetch(`${apiUrl}/user/${id}`);
          const data = await response.json();
          setParticipant(data);
          setName(data.name);
          setSurname(data.surname);
          setEmail(data.email);
          setCompany(data.organization_id);
          setDni(data.dni || "");
          setDescription(data.description || "");
          setTechnologiesIds(data.technologies_ids?.split(",").map(Number));
        } catch (error) {
          console.error("Error fetching participant:", error);
        }
      };
  
      fetchParticipant();
      fetchSelect(setOrganizations, "orgs");
      fetchSelect(setTechnologies, "tech");
    }, [id]);
  
    const fetchSelect = async (setArray: any, serviceName: string) => {
      try {
        const response = await fetch(`${apiUrl}/${serviceName}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Error al obtener los roles");
        }
        const data = await response.json();
        setArray(data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
  
    const handleSave = async (e: React.FormEvent) => {
      e.preventDefault();
      const updatedParticipant = {
        ...participant,
        name,
        surname,
        email,
        organization_id: company,
        technologies_ids: technologiesIds,
        dni,
        description,
      };
      try {
        const response = await fetch(`${apiUrl}/user/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedParticipant),
        });
        if (response.ok) {
          setIsOpen(true);
          history.push("/profile/view-participants");
        } else {
          console.error("Error updating participant:", response.statusText);
        }
      } catch (error) {
        console.error("Error updating participant:", error);
      }
    };
  
    if (!participant) {
      return <div className="text-center">Cargando...</div>
    }
  
    return (
      <section className="h-full w-full page-background m-0 p-0 overflow-y-scroll scrollbar-hide">
        <IonTitle className="p-0 ml-16 m-8 mb-2 text-sm font-poppins">
          Editar Participante
        </IonTitle>
        <form
          id="edit-user"
          onSubmit={handleSave}
          className="m-4 ml-24 items-center"
        >
          <IonGrid>
            <IonRow className="px-8">
              <IonCol size="2">{/*Foto de perfil*/}</IonCol>
              <IonCol size="4">
                <IonRow>
                  <IonCol className="mt-4">
                    <IonLabel className="font-poppins font-bold">Nombre</IonLabel>
                    <IonInput
                      id="name"
                      className="ion-padding bg-white shadow-md "
                      placeholder="Nombre"
                      value={name}
                      onIonChange={(e) => setName(e.detail.value!)}
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  {/*Email */}
                  <IonCol className="mt-4">
                    <IonLabel className="font-poppins font-bold">Email</IonLabel>
                    <IonInput
                      className="ion-padding bg-white shadow-md "
                      placeholder="john.doe@example.com"
                      value={email}
                      onIonChange={(e) => setEmail(e.detail.value!)}
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  {/*Tecnologia */}
                  <IonCol className="mt-4">
                    <IonSelect
                      className="rounded-md  bg-white px-2 shadow-md "
                      interface="popover"
                      label="Tecnología"
                      value={technologiesIds}
                      onIonChange={(e) => setTechnologiesIds(e.detail.value.map(Number))}
                      multiple={true}
                    >
                      {technologies.map((value) => {
                        return (
                          <IonSelectOption key={value.id} value={value.id}>
                            {value.name}
                          </IonSelectOption>
                        );
                      })}
                    </IonSelect>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonCol size="4">
                <IonRow>
                  <IonCol className="mt-4">
                    <IonLabel className="font-poppins font-bold">
                      Apellido
                    </IonLabel>
                    <IonInput
                      className="ion-padding bg-white shadow-md "
                      placeholder="Apellido"
                      value={surname}
                      onIonChange={(e) => setSurname(e.detail.value!)}
                    />
                  </IonCol>
                </IonRow>
  
                <IonRow>
                  <IonCol className="mt-4">
                    <IonLabel className="font-poppins font-bold">
                      DNI
                    </IonLabel>
                    <IonInput
                      className="ion-padding bg-white shadow-md "
                      placeholder="11.111.111"
                      value={dni}
                      onIonChange={(e) => setDni(e.detail.value!)}
                    />
                  </IonCol>
                </IonRow>
  
                <IonRow>
                  <IonCol className="mt-4">
                    <IonSelect
                      className="rounded-md bg-white px-2 shadow-md "
                      interface="popover"
                      label="Compañía"
                      value={company}
                      onIonChange={(e) => setCompany(Number(e.detail.value))}
                    >
                      {organizations.map((org) => {
                        return (
                          <IonSelectOption key={org.id} value={org.id}>
                            {org.name}
                          </IonSelectOption>
                        );
                      })}
                    </IonSelect>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="mx-64 h-auto">
                <IonTextarea
                  className="rounded-md  bg-white px-2 shadow-md  h-28 mb-4"
                  placeholder="Escribe aquí"
                  value={description}
                  onIonChange={(e) => setDescription(e.detail.value!)}
                />
              </IonCol>
            </IonRow>
            <IonRow className="justify-end items-center px-64 ">
              <IonButton
                fill="clear"
                className="bg-[#E65C4F] text-black normal-case rounded-lg"
                onClick={() => {
                  if(profile === 'undefined'){
                    history.push("/profile/view-participants");
                  }else{
                    history.push("/home");
                  }
                }}
              >
                Cancelar
              </IonButton>
              <IonButton
                fill="clear"
                className="bg-[#E65C4F] text-black normal-case rounded-lg mx-6"
                type="submit"
              >
                Guardar
              </IonButton>
            </IonRow>
          </IonGrid>
        </form>
        <IonToast
            isOpen={isOpen}
            message="Se ha modificado el participante correctamente"
            onDidDismiss={() => setIsOpen(false)}
            duration={3000}
            color={"light"}
            className="text-center"
         ></IonToast>
      </section>
    );
  };
  
  export default FormEditUser;
  
