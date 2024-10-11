import { ChangeEvent } from "react";

export interface InputTemplateInterface{
    type: string;
    name: string;
    id: string;
    pattern: string;
    placeholder: string;
    className: string;
    required: boolean;
    change: (e: ChangeEvent<HTMLInputElement>)=> void;
}