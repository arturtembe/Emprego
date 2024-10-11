import { InputTemplateInterface } from "@/interfaces/templates/input.template.interface";

export default function InputTemplate(props: InputTemplateInterface){
    return (
        <input 
            type= {props.type} 
            name= {props.name}
            id= {props.id}
            pattern= {props.pattern} 
            required={props.required}
            className={props.className}
            placeholder={props.placeholder}
            onChange={e=> props.change(e)}
        />
    );
}