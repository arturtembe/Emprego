
export interface ButtonFormTemplateInterface{
    type: "submit" | "button" | "reset" | undefined;
    name: string;
    id: string;
    className: string;
    // value: string;
    children: React.ReactNode;
}