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


export default function SideMenu() {
    const t = useCookies();

    return (
        <div className="d-flex" style={{height: '100vh', overflow: 'scroll initial'}}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<FaBars />}>
                    Kaja kezelő
                </CDBSidebarHeader>
            </CDBSidebar>
        </div>
    )
}