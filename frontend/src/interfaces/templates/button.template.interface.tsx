
export interface ButtonTemplateInterface{
    name: string;
    id: string;
    className: string;
    children: React.ReactNode;
    click: ()=> void;
}