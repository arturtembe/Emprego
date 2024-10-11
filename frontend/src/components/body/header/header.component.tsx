"use client";
import LiTemplate from "@/components/templates/li.template.components";
//import { useState } from "react";

// Components
import SearchDesktop from "./search/search.header.component";
import NavHeaderComponent from "./nav/header.nav";
import ButtonTemplate from "@/components/templates/button.template.components";
import { useContext } from "react";
import HomeContextUtil from "@/utils/context/home.context.util";
import LinkTemplate from "@/components/templates/link.template.components";

export default function HeaderComponent() {
    const context = useContext(HomeContextUtil);

    const openMenu = ()=>{
        context.setOpenNavMenu(prev=>!prev);
    }
    return (
        <header>
            {/* Icon Menu */}
            <ButtonTemplate 
                className="icon-menu"
                id=""
                name=""
                click={openMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </ButtonTemplate>

            {/* LogoMarca */}
            <div className="logo-menu">
                <LinkTemplate 
                    className=""
                    target="_self"
                    href="/"
                    value="JobMoz"
                />
            </div>

            {/* Nav */}
            <NavHeaderComponent />
            {/* Search */}
            <SearchDesktop />      
        </header>
    );
}