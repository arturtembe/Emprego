"use client";
import { Dispatch, SetStateAction } from "react";

export type HomeContextType = {
    openNavMenu: boolean;
    setOpenNavMenu: Dispatch<SetStateAction<true | false>>;
    positionNavHeader: number; 
    setPositionNavHeader: Dispatch<SetStateAction<number>>
}