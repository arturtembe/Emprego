import { ButtonFormTemplateInterface } from "@/interfaces/templates/button.form.template.interface";

export default function ButtonFormTemplate(props: ButtonFormTemplateInterface){
    return (
        <button 
            className={props.className} 
            type={props.type}
            name={props.name}
            id={props.id}
        >
            {/* {props.children} */}
        </button>
    );
}