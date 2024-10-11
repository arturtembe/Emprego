import { InputTemplateInterface } from "@/interfaces/templates/input.template.interface";
import { LinkTemplateInterface } from "@/interfaces/templates/link.template.interface";
import Link from "next/link";

export default function LinkTemplate(props: LinkTemplateInterface){
    return (
        <Link 
            href={props.href}
            target={props.target}
            className={props.className}
        >
            {
                props.value
            }
        </Link>
    );
}