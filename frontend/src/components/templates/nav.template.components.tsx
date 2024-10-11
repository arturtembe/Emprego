import { NavTemplateInterface } from "@/interfaces/templates/nav.template.interface";

export default function NavTemplate(props: NavTemplateInterface){
    return (
        <nav 
            className={props.className}
            id={props.id}
        >{props.children}</nav>
    );
}