

import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonRow, IonSelect, IonTextarea, IonSelectOption, IonTitle } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Role, Organization, Technology } from "../util/types"

const FormNewUser: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dni, setDni] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rolId, setRolId] = useState('');
    const [organizationId, setOrganizationId] = useState('');
    const [technologiesIds, setTechnologiesIds] = useState<string[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const history = useHistory();

    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(`${apiUrl}/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
                    technologies_ids: technologiesIds 
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            history.push('/profile/view-participants')
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }

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
<<<<<<< HEAD
        fetchRoles();
    }, []);
=======
        fetchSelect(setRoles, "roles");
        fetchSelect(setOrganizations, "orgs");
        fetchSelect(setTechnologies, "tech");
    },[]);
>>>>>>> origin/develop
    //const { name, surname, dni, description, email, password, role_id } = req.body;
    return (
        <IonContent>
            <section className="mt-8 mx-16 mb-4 md:px-10 page-background">
                <IonTitle className="p-0 mb-2 text-sm font-bold font-poppins">
                    Nuevo Participante
                </IonTitle>
                <form id='new-user' onSubmit={handleSubmit} className="m-4 items-center">

                        <IonGrid >
                            <IonRow>
                                <IonCol>
                                    <IonInput id='name'
                                        className="ion-margin rounded-md bg-white"
                                        label="Nombre"
                                        labelPlacement="stacked"
                                        placeholder="Nombre"
                                        value={name}
                                        onIonChange={(e) => setName(e.detail.value!)} />
                                </IonCol>
                                <IonCol>
                                    <IonInput className="ion-margin rounded-md bg-white"
                                        label="Apellido"
                                        labelPlacement="stacked"
                                        placeholder="Apellido"
                                        value={surname}
                                        onIonChange={(e) => setSurname(e.detail.value!)} />
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonInput className="ion-margin rounded-md bg-white"
                                        label="Email"
                                        labelPlacement="stacked"
                                        placeholder="john.doe@example.com"
                                        value={email}
                                        onIonChange={(e) => setEmail(e.detail.value!)} />

                                </IonCol>
                                <IonCol>
                                    <IonInput className="ion-margin rounded-md bg-white"
                                        label="Contraseña"
                                        labelPlacement="stacked"
                                        placeholder="********"
                                        type="password"
                                        value={password}
                                        onIonChange={(e) => setPassword(e.detail.value!)} />
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol className="ion-padding">
                                    <IonTextarea className="ion-margin rounded-md bg-white"
                                        label="Información del perfil"
                                        labelPlacement="stacked"
                                        placeholder="Información del perfil"
                                        value={description}
                                        onIonChange={(e) => setDescription(e.detail.value!)} />
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol>
                                    <IonInput className="ion-margin rounded-md bg-white"
                                        label="DNI"
                                        labelPlacement="stacked"
                                        placeholder="11.111.111"
                                        value={dni}
                                        onIonChange={(e) => setDni(e.detail.value!)} />

                                </IonCol>
                                <IonCol>
                                    <IonSelect className="ion-margin rounded-md bg-white"
                                        interface="popover"
                                        label="Rol"
                                        labelPlacement="stacked"
                                        placeholder="Rol"
                                        value={rolId}
                                        onIonChange={(e) => setRolId(e.detail.value)}>
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
                                <IonCol>
                                    <IonSelect className="ion-margin rounded-md bg-white"
                                        interface="popover"
                                        label="Compañía"
                                        labelPlacement="stacked"
                                        placeholder="Compañía"
                                        value={organizationId}
                                        onIonChange={(e) => setOrganizationId(e.detail.value)}>
                                        {organizations.map((org) => {
                                            return (
                                                <IonSelectOption key={org.id} value={org.id}>
                                                    {org.name} 
                                                </IonSelectOption>
                                            );
                                        })}
                                    </IonSelect>
                                </IonCol>
                                <IonCol>  
                                    <IonSelect
                                        className="ion-margin rounded-md bg-white"
                                        interface="popover"
                                        label="Áreas de Conocimiento"
                                        labelPlacement="stacked"
                                        placeholder="Áreas de Conocimiento"
                                        value={technologiesIds}
                                        onIonChange={(e) => setTechnologiesIds(e.detail.value)}
                                        multiple={true}
                                    >
                                    {technologies.map((value) => {
                                        return (
<<<<<<< HEAD
                                            <IonSelectOption key={role.id} value={role.id}>
                                                {role.name}
                                            </IonSelectOption>
=======
                                        <IonSelectOption key={value.id} value={value.id}>
                                            {value.name}
                                        </IonSelectOption>
>>>>>>> origin/develop
                                        );
                                    })}
                                    </IonSelect>
                                </IonCol>
                            </IonRow>

                            <IonRow className="justify-end items-center ">
                                <button
                                    style={{ width: "105px", height: "40px" }}
                                    className="bg-[#E65C4F] text-black font-bold rounded-lg py-1"
                                    onClick={(e) => {
                                        setName('');
                                        setSurname('');
                                        setDni('');
                                        setDescription('');
                                        setEmail('');
                                        setPassword('');
                                        setRolId('');
                                        setOrganizationId('');
                                        setTechnologiesIds([]);
                                        history.push('/profile/view-participants')
                                    }}
                                >
                                    Cancelar
                                </button>
                                <button
                                    style={{ width: "105px", height: "40px" }}
                                    className="bg-[#E65C4F] text-black font-bold rounded-lg py-1"
                                    type="submit"
                                >
                                    Guardar
                                </button>
                            </IonRow>
                        </IonGrid>

                </form>
            </section>
        </IonContent >
    );
}

export default FormNewUser;