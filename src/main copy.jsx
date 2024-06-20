import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../index.css'
import Admin from './components/admin/Admin';
import AdminLogin from './components/admin/AdminLogin.jsx';
import AdminMain from './components/admin/AdminMain';
import UserServices from './components/user/UserServices.jsx';
import AdminServices from './components/admin/AdminServices';
import AdminMeetings from './components/admin/AdminMeetings';
import AdminAddService from './components/admin/AdminAddService';

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserServices />,
        errorElement: <div>UserServices error</div>
    },
    {
        path: "/admin",
        element: <Admin />,
        errorElement: <div>Admin error</div>,
        children: [
            {
                path: "",
                element: <AdminLogin />,
                errorElement: <div>AdminLogin error</div>
            },
            {
                path: "login",
                element: <AdminLogin />,
                errorElement: <div>AdminLogin error</div>
            },
            {
                path: "main",
                element: <AdminMain />,
                errorElement: <div>AdminMain error</div>,
                children: [
                    {
                        path: "services",
                        element: <AdminServices />,
                        errorElement: <div>AdminServicesContent error</div>
                    },
                    {
                        path: "meetings",
                        element: <AdminMeetings />,
                        errorElement: <div>AdminServicesContent error</div>
                    }
                ]
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
