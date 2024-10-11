import { FormEvent } from "react";

export interface FormTemplateInterface{
    className: string;
    action: string;
    submit: (e:FormEvent<HTMLFormElement>)=>void;
    children: React.ReactNode;
}