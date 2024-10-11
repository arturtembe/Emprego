"use client";

import { dataLoadingLazyHelper } from "@/helpers/loading.helper";
import CardLoadCategoriaMainComponent from "./loading/cards.load.categoria";

export default function CardsCategoriaMainComponent(){
    //const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    return(
        <div className="cards-main">
            {/* Card */}
            {
                dataLoadingLazyHelper.map(el=>(
                    <CardLoadCategoriaMainComponent key={el} />
                ))
            }
        </div>
    )
}