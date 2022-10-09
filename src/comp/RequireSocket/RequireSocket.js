import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useSocketContext from '../../hooks/useSocketContext'

const RequireSocket = () => {
    const { socket } = useSocketContext()
    const location = useLocation()

    return (
        socket?.connected ? <Outlet /> : <Navigate to="/" state={{ from: location}} replace />
    );
}

export default RequireSocket