import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'

export const AuthContext = React.createContext();

export  const AuthProvider  = (props)=>{
    const [isLoading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    const navigate = useNavigate();
    
    useEffect(() => {
        if(localStorage.getItem('user'))
        setUser(JSON.parse(localStorage.getItem('user')))
        else
        setUser(null)
       }, []);

    const logout = ()=>{
        localStorage.removeItem('user');
        setUser(null)
        const response = axios.get(`${process.env.REACT_APP_BASE_URL}user/logout`)
        navigate('/');
    }

    const login = async(username, password)=>{
        try{
            setLoading(true)
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,{
                username:username,
                password:password
            })
            if(response){
                setUser(response.data)
                setLoading(false)
                localStorage.setItem('user', JSON.stringify(response.data))
            }else{
                setTimeout(()=>{
                    setLoading(false)
                },2000)
            }
        }
        catch(err){
            console.log(err.response.data)
            setError(err.response.data || err.message)
            setLoading(true)
            setTimeout(()=>{
                setError('')
                setLoading(false)
                setUser(null)
            },2000)
        }
    }

    
    return(
        <AuthContext.Provider
            value={
               { isLoading,
                user,
                error,
                login,
                logout,
                setUser
            }
            }
        >
            {props.children}
        </AuthContext.Provider>
    )
}
