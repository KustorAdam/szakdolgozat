'use client'

import { 
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter
} from "cdbreact";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

export default function SideMenu() {
    const t = useCookies();

    return (<div className="d-flex" style={{height: '100vh', overflow: 'scroll initial'}}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader>
                    Szabadság kezelő
                </CDBSidebarHeader>

                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <Link href="/">
                        <CDBSidebarMenuItem>
                            Dashboard
                        </CDBSidebarMenuItem>
                        </Link>
                    </CDBSidebarMenu>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem>
                            Menü
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

            </CDBSidebar>
        </div>
    )
}