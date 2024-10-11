import { FormTemplateInterface } from "@/interfaces/templates/form.form.template.interface";

export default function FormTemplate(props: FormTemplateInterface){
    return ( 
        <form 
            action={props.action} 
            className={props.className}
            onSubmit={e=>props.submit(e)}
        >
            {props.children}
        </form>  
    );
}