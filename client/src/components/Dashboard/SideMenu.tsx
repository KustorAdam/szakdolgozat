'use client';


import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useCookies } from "next-client-cookies";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/dashboard.css'
import Link from "next/link";

import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useCookies } from "next-client-cookies";
import Link from "next/link";



export default function SideMenu() {
    const t = useCookies();

    return (

        <div className="d-flex" style={{ height: '100px', overflow: 'scroll initial' }}>
            <Sidebar backgroundColor="#00bbf0">
                <Menu>
                    <MenuItem className="sidebar">
                        <Link href="/login">

        <div className="d-flex" style={{height: '100vh', overflow: 'scroll initial'}}>

            <Sidebar className="sidebar">
                <Menu>
                    <MenuItem>

            <Sidebar backgroundColor="#00bbf0">
                <Menu>
                    <MenuItem className="sidebar">

                        <Link href="/">

                            Főoldal
                        </Link>
                    </MenuItem>
                    <MenuItem>

                        <Link href={"/menu/"}>
                            

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
                        <Link href="/">
                            Kijelentkezés
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/admin">
                            Admin
                        </Link>
                    </MenuItem>
                </Menu>

             </Sidebar>
       </div>

            </Sidebar>
        </div>

    )
}