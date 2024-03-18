'use client';

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useCookies } from "next-client-cookies";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/dashboard.css'

export default function SideMenu() {
    const t = useCookies();

    return (
        <div className="d-flex" style={{height: 500, overflow: 'scroll initial'}}>
            <Sidebar backgroundColor="8ecae6">
                <Menu>
                <MenuItem>Főoldal</MenuItem>
                <MenuItem>Menü</MenuItem>
                <MenuItem>Profil</MenuItem>
                <MenuItem>Hosszú a sor?</MenuItem>
                </Menu>
             </Sidebar>
       </div>
    )
}