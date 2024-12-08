import {instance} from './axios.js';
import Cookies from 'js-cookie';

//Visualizar coach por parte del admi
export const VisualizarCoachRequest = () => {
    const token = Cookies.get('token');
    return instance.get('/admin/coachinfo', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

//Visualizar Nutriologo por parte del admi
export const VisualizarNutriRequest = () => {
    const token = Cookies.get('token');
    return instance.get(`/admin/nutriinfo`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

//Visualizar coach por parte del admi
export const VisualizarClienteRequest = () => {
    const token = Cookies.get('token');
    return instance.get(`/admin/clientinfo`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

