'use client'

import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useCookies } from "next-client-cookies";
import Link from "next/link";



export default function SideMenu() {
    const t = useCookies();

    return (
        <div className="d-flex" style={{height: '100vh', overflow: 'scroll initial'}}>
            <Sidebar backgroundColor="#00bbf0">
                <Menu>
                    <MenuItem className="sidebar">
                        <Link href="/">
                            Főoldal
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/menu">
                            Heti Menü
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