import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import interceptor from '../lib/interceptor';

function usePostRegister() {
 const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({address,numberPass,phone,internationalNumber,valueName, nameCompony, valueFamily, activeTab, setPostalCode}) => {

            const data = JSON.stringify({
                phone: phone,
                role: activeTab,
                name: valueName,
                family: valueFamily,
                company_name: nameCompony,
                national_code: internationalNumber,
                id_number: numberPass,
                address: address,
                postal_code: setPostalCode
            });

            const res = await interceptor.post(`account/mobile/api/v1/register/users/`, data);
            return res.data;
        },
        onSuccess: (data) => {
            // queryClient.removeQueries('allRider');
        },
    });
}

export default usePostRegister
