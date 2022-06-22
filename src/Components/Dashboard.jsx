import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

function Dashboard() {
    const {logout} = useContext(AuthContext)
  return (
    <>
        <button onClick={logout}>Logout</button>
    </>
  )
}

export default Dashboard