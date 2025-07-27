import api from '@/lib/api'
import React, { useEffect, useState } from 'react'
import { useToast } from './use-toast';
import { AxiosError } from 'axios';

const useUser = () => {
   const [user, setUser] = useState<userType>(null)
   const { toast } = useToast();
   useEffect(() => {
      const getUser = async () => {
         const LOCALSTORAGE_TOKEN = localStorage.getItem('authToken')
         if (!LOCALSTORAGE_TOKEN) {
            window.location.href = "/login";
            return
         }
         try {
            api.defaults.headers.common["Authorization"] = `Bearer ${LOCALSTORAGE_TOKEN}`;
            const response = await api.get<profileResponse>('/user/getUser',)
            setUser(response.data.user)
         } catch (err) {
            if (err instanceof AxiosError) {
               toast({
                  title: "Error",
                  description: err.response?.data.message,
                  variant: "destructive",
               });
            } else {
               toast({
                  title: "Error",
                  description: 'Failed to load User Details. Please try again later or reload page',
                  variant: "destructive",
               });
            }
         }
      }
      getUser()
   }, [])
   return {user, setUser}
}

export default useUser