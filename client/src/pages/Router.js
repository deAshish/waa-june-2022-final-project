import React from 'react'
import {Routes, Route} from 'react-router-dom'

import UserProfile from  '../components/profiles/UserProfile'
import Advertisement from '../components/job/Advertisement'
import Dashboard from '../components/dashboard/Dashboard'
export default function Router(){
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