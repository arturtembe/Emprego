"use client";
import BarraTitleHomeMainComponent from "./barra.title.home.main";
import CardsCategoriaMainComponent from "./categoria/cards.categoria.main";

export default function CategoriaMainComponent(){
    
    return(
        <main>
            {/* Barra Title */}
            <BarraTitleHomeMainComponent 
                value="Lista das categorias"
            />
            {/* Cards */}
            <CardsCategoriaMainComponent />
        </main>
    )
}