"use client";
import HomeContextUtil from "@/utils/context/home.context.util";
import HeaderComponent from "../body/header/header.component";
import { useState } from "react";
import MainComponent from "../body/main/home.main";
import FooterComponent from "../body/footer/footer";

export default function HomePageComponent(){
    const [openNavMenu,setOpenNavMenu] = useState(false);
    const [positionNavHeader, setPositionNavHeader] = useState<number>(0)
    
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