"use client";
import HomeContextUtil from "@/utils/context/home.context.util";
import HeaderComponent from "../body/header/header.component";
import { useState } from "react";
import MainComponent from "../body/main/categoria.main";
import FooterComponent from "../body/footer/footer";

export default function CategoriaPageComponent(){
    const [openNavMenu,setOpenNavMenu] = useState<boolean>(false);
    const [positionNavHeader, setPositionNavHeader] = useState<number>(1)
    
    return(
        <HomeContextUtil.Provider value={{ 
            openNavMenu ,setOpenNavMenu,
            positionNavHeader, setPositionNavHeader
        }}>
            <HeaderComponent />
            {/* Main */}
            <MainComponent />
            {/* Footer */}
            <FooterComponent />
        </HomeContextUtil.Provider>
    )
}