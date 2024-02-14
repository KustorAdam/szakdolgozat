'use client'

import React from "react";
import { 
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
    CDBIcon
} from "cdbreact";
import { useCookies } from "next-client-cookies";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";


export default function SideMenu() {
    const t = useCookies();

    return (
        <div className="d-flex" style={{height: '100vh', overflow: 'scroll initial'}}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<FaBars />}>
                    Kaja kezelő
                </CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <Link href="/">
                            <CDBSidebarMenuItem>
                                Főoldal
                            </CDBSidebarMenuItem>
                        </Link>
                    </CDBSidebarMenu>
                    <CDBSidebarMenu>
                        <Link href="/menu">
                            <CDBSidebarMenuItem>
                                Heti Menü
                            </CDBSidebarMenuItem>
                        </Link>
                    </CDBSidebarMenu>
                    <CDBSidebarMenu>
                        <Link href="/snake">
                            <CDBSidebarMenuItem>
                                Hosszú a sor?
                            </CDBSidebarMenuItem>
                        </Link>
                    </CDBSidebarMenu>
                    <CDBSidebarMenu>
                        <Link href="/messages">
                            <CDBSidebarMenuItem>
                                Üzenetek
                            </CDBSidebarMenuItem>
                        </Link>
                    </CDBSidebarMenu>
                    <CDBSidebarMenu>
                        <Link href="/user">
                            <CDBSidebarMenuItem>
                                Profil
                            </CDBSidebarMenuItem>
                        </Link>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter>
                    <div className="d-flex align-items-center justify-content-center p-3" onClick={() => {t.remove("user"); location.href="/login"}} style={{"cursor": "pointer"}}>
                        <LuLogOut className="me-2"/>
                        <span>Kijelentkezés</span>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}