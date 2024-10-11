import { LiTemplateInterface } from "@/interfaces/templates/li.template.interface";

export default function LiTemplate(props: LiTemplateInterface){
    return (
        <li className={props.className}>{props.children}</li>
    );
}