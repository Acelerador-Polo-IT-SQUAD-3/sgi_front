import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Logout: React.FC = () => {
    const history = useHistory();
    const handleLogout = () => {
        sessionStorage.removeItem('user');
        history.push('/login');
    };
    useEffect(handleLogout);
    return <>
    </>
}

export default Logout