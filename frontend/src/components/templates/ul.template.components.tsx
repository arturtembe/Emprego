import { UlTemplateInterface } from "@/interfaces/templates/ul.template.interface";

export default function UlTemplate(props: UlTemplateInterface){
    return (
        <ul 
            className={props.className}
            id={props.id}
        >{props.children}</ul>
    );
}