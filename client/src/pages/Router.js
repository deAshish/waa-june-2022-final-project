import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Advertisement from './job/Advertisement'
import Dashboard from './dashboard/Dashboard'
import UserProfile from './profiles/UserProfile'
import UserProfile from '../components/profiles/UserProfile'
export default function Router(){

    import UserProfile from './profiles/UserProfile'
export default function MyRoutes(){
    return(
        <div>
            <Routes>
                {/* <Route path="/main" element={<Main />}>Main</Route> */}
                <Route path="/user-profile" element={<UserProfile />}>My Profile</Route>
                <Route path="/add-new-advertisement" element={<Advertisement />}>Add New Advertisement</Route>

                <Route path="/dashboard" element={<Dashboard />}>Dashboard</Route>

            </Routes>
        </div>
    )
}