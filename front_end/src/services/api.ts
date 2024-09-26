
export interface User {
    id: number;
    name: string;
    surname: string;
    dni: string;
    description: string;
    email: string;
}

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/user/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users: User[] = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
