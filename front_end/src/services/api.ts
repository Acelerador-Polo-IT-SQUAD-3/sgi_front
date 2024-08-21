
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
        const response = await fetch('http://localhost:3000/user');
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
