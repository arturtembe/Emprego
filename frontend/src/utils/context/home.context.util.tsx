'use client';
import { homeContextDefaultValues } from "@/helpers/home.helper";
import { HomeContextType } from "@/types/home.type";
import { createContext } from "react";

const HomeContextUtil = createContext<HomeContextType>(homeContextDefaultValues);
export default HomeContextUtil;
/*
export function useHomeContext(){
    return useContext(HomeContextUtil);
};
*/