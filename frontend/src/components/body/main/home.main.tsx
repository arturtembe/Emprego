"use client";
import BarraTitleHomeMainComponent from "./barra.title.home.main";
import CardsHomeMainComponent from "./home/cards.home.main";

export default function HomeMainComponent(){
    
    return(
        <main>
            {/* Barra Title */}
            <BarraTitleHomeMainComponent
                value="Ultimas vagas"
            />
            {/* Cards */}
            <CardsHomeMainComponent />
        </main>
    )
}