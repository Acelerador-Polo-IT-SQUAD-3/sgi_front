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
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Role, Organization, Technology } from "../util/types";

const FormNewUser: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dni, setDni] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rolId, setRolId] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [technologiesIds, setTechnologiesIds] = useState<string[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const history = useHistory();

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          dni: dni,
          description: description,
          email: email,
          password: password,
          role_id: rolId,
          organization_id: organizationId,
          technologies_ids: technologiesIds,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      history.push("/profile/view-participants");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

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

  useEffect(() => {
    fetchSelect(setRoles, "roles");
    fetchSelect(setOrganizations, "orgs");
    fetchSelect(setTechnologies, "tech");
  }, []);
  //const { name, surname, dni, description, email, password, role_id } = req.body;
  return (
    <section className="h-full w-full page-background m-0 p-0 overflow-y-scroll scrollbar-hide">
      <IonTitle className="p-0 ml-16 m-8 mb-2 text-sm font-poppins">
        Nuevo Participante
      </IonTitle>
      <form
        id="new-user"
        onSubmit={handleSubmit}
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
                {/*Rol */}
                <IonCol className="mt-4">
                  <IonSelect
                    className="rounded-md  bg-white px-2 shadow-md "
                    interface="popover"
                    label="Rol"
                    value={rolId}
                    onIonChange={(e) => setRolId(e.detail.value)}
                  >
                    {roles.map((role) => {
                      return (
                        <IonSelectOption key={role.id} value={role.id}>
                          {role.name}
                        </IonSelectOption>
                      );
                    })}
                  </IonSelect>
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
                    onIonChange={(e) => setTechnologiesIds(e.detail.value)}
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
                  <IonLabel className="ion-padding font-poppins font-bold">
                    Contraseña
                  </IonLabel>
                  <IonInput
                    className="ion-padding bg-white shadow-md "
                    placeholder="********"
                    type="password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="mt-4">
                  <IonSelect
                    className="rounded-md bg-white px-2 shadow-md "
                    interface="popover"
                    label="Compañía"
                    value={organizationId}
                    onIonChange={(e) => setOrganizationId(e.detail.value)}
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
              onClick={(e) => {
                setName("");
                setSurname("");
                setDni("");
                setDescription("");
                setEmail("");
                setPassword("");
                setRolId("");
                setOrganizationId("");
                setTechnologiesIds([]);
                history.push("/profile/view-participants");
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
    </section>
  );
};

export default FormNewUser;
