'use client';

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useCookies } from "next-client-cookies";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/dashboard.css'
import Link from "next/link";

export default function SideMenu() {
    const t = useCookies();

    return (
        <div className="d-flex" style={{height: '100vh', overflow: 'scroll initial'}}>
            <Sidebar className="sidebar">
                <Menu>
                    <MenuItem>
                        <Link href="/">
                            Főoldal
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={"/menu/"}>
                            
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/messages">
                            Üzenetek
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/profil">
                            Profil
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/login">
                            Kijelentkezés
                        </Link>
                    </MenuItem>
                </Menu>
             </Sidebar>
       </div>
    )
}