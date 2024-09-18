

import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonRow, IonSelect, IonTextarea, IonSelectOption } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

type Role = {
    id: number;
    name: string;
  };

const FormNewUser: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dni, setDni] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rolId, setRolId] = useState('');
    const [roles, setRoles] = useState<Role[]>([]);
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/auth/', {
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
                    role_id: rolId
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
    const fetchRoles = async () => {
        try {
            // Realizamos la solicitud GET
            const response = await fetch('http://localhost:3000/roles', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Si la solicitud fue exitosa, procesamos la respuesta
            if (!response.ok) {
                throw new Error('Error al obtener los roles');
            }

            // Parseamos el resultado a formato JSON
            const data = await response.json();
            setRoles(data);
        }
        catch (error) {
            console.error('Error fetching roles:', error);
        }
    }
    useEffect(() => {
        fetchRoles();
    },[]);
    //const { name, surname, dni, description, email, password, role_id } = req.body;
    return (
        <IonContent>
            <form id='new-user' onSubmit={handleSubmit} className="m-4 items-center">
                <IonItem lines="none">
                    <IonGrid >
                        <IonRow>
                            <IonCol>
                                <IonInput id='name'
                                    className="ion-margin"
                                    label="Name"
                                    labelPlacement="stacked"
                                    placeholder="Name"
                                    value={name}
                                    onIonChange={(e) => setName(e.detail.value!)} />
                            </IonCol>
                            <IonCol>
                                <IonInput className="ion-margin"
                                    label="Surname"
                                    labelPlacement="stacked"
                                    placeholder="Surname"
                                    value={surname}
                                    onIonChange={(e) => setSurname(e.detail.value!)} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonInput className="ion-margin"
                                    label="E-mail"
                                    labelPlacement="stacked"
                                    placeholder="john.doe@example.com"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)} />

                            </IonCol>
                            <IonCol>
                                <IonInput className="ion-margin"
                                    label="Password"
                                    labelPlacement="stacked"
                                    placeholder="********"
                                    type="password"
                                    value={password}
                                    onIonChange={(e) => setPassword(e.detail.value!)} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-padding">
                                <IonTextarea className="ion-margin"
                                    label="Description"
                                    labelPlacement="stacked"
                                    placeholder="Description"
                                    value={description}
                                    onIonChange={(e) => setDescription(e.detail.value!)} />
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonInput className="ion-margin"
                                    label="DNI"
                                    labelPlacement="stacked"
                                    placeholder="11.111.111"
                                    value={dni}
                                    onIonChange={(e) => setDni(e.detail.value!)} />

                            </IonCol>
                            <IonCol>
                                <IonSelect className="ion-margin"
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

                        <IonRow className="justify-end items-center">
                            <IonButton className="m-4 items-stretch"
                                onClick={(e) => {
                                    setName('');
                                    setSurname('');
                                    setDni('');
                                    setDescription('');
                                    setEmail('');
                                    setPassword('');
                                    setRolId('');
                                    history.push('/profile/view-participants')
                                }}
                                size="default"> CANCEL
                            </IonButton>

                            <IonButton className="m-4 items-stretch" size="default" type='submit' > SUBMIT

                            </IonButton>
                        </IonRow>
                    </IonGrid>
                </IonItem>
            </form>
        </IonContent >
    );
}

export default FormNewUser;