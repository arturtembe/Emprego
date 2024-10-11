import { ButtonTemplateInterface } from "@/interfaces/templates/button.template.interface";

export default function ButtonTemplate(props: ButtonTemplateInterface){
    return (
        <button 
            className={props.className} 
            type="button"
            name={props.name}
            id={props.id}
            onClick={props.click}
        >
            {props.children}
        </button>
    );
}