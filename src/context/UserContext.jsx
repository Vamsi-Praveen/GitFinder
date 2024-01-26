import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';
import toast from "react-hot-toast";


const UserContext = createContext()

export const useUserData = () => {
    let context = useContext(UserContext)
    if (!context) {
        throw new Error('useUserData hook must be called inside UserContext Provider');
    }
    return context
}

export const UserDataProvider = ({ children }) => {
    const [userId, setUserId] = useState('')
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(false)
    const onSubmit = () => {
        if (userId == '' || userId == null) {
            return toast.error('Username Required')
        }
        getUser(userId)
    }


    const getUser = async (userId) => {
        setLoading(true)
        await axios.get(`https://api.github.com/users/${userId}`)
            .then((data) => {
                setData(data.data);
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                if (err.response.status == 404) {
                    return toast.error('Username Not Found')
                }
                return toast.error(err.message)
            })

    }
    return <UserContext.Provider value={{ data, setUserId, onSubmit, isLoading }}>
        {children}
    </UserContext.Provider>
}