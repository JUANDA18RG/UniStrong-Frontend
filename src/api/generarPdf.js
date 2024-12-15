import {instance} from './axios.js';
import Cookies from 'js-cookie';

export const GenerarPdf = (id) => {
    return instance.get(`/get-pdf-characteristics/${id}`, );
};

export const sendPdfByEmail = (id) => {
    const token = Cookies.get('token');
    return instance.post(
        `/client/send-pdf/${id}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
              }
        }
     );
};
