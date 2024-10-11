"use client";

import { BarraTitleHomeDTO } from "@/interfaces/dtos/barra.tiltle.dtos";

export default function BarraTitleHomeMainComponent({value}:BarraTitleHomeDTO){
    
    return(
        <div className="nav-title-main">
            <h1>{value}</h1>
        </div>
    )
}