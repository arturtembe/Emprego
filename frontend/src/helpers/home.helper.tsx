"use client";
import { HomeContextType } from "@/types/home.type";

export const homeContextDefaultValues: HomeContextType = {
    openNavMenu: false,
    setOpenNavMenu: () => {},
    positionNavHeader: 0,
    setPositionNavHeader: () => {},
};