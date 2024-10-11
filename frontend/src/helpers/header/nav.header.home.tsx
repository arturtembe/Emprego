import { NavHeaderHomeDTO } from "@/interfaces/dtos/header/nav.header.home.interface";

const navListHome:NavHeaderHomeDTO[]=[
    {
        li: {
            children: null,
            className: ""
        },
        link:{
            className:"",
            href: "/",
            target: "_self",
            value: "Inicio"
        }
    },
    {
        li: {
            children: null,
            className: ""
        },
        link:{
            className:"",
            href: "/categoria",
            target: "_self",
            value: "Categoria"
        }
    }
];

export default navListHome;