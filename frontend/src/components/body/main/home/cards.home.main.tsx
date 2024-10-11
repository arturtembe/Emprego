"use client";
import { dataLoadingLazyHelper } from "@/helpers/loading.helper";
import CardLoadHomeMainComponent from "./loading/cards.load.home";

export default function CardsHomeMainComponent(){
    
    return(
        <div className="cards-main">
            {/* Card */}
            {   
                dataLoadingLazyHelper.map(el=>(
                    <CardLoadHomeMainComponent key={el} />
                ))
            }
        </div>
    )
}