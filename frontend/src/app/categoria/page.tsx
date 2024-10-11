import CategoriaPageComponent from "@/components/pages/categoria.page.component";
import { Metadata } from "next";
import '@/styles/scss/_categoria.scss';

export const metadata: Metadata = {
    title: 'Lista das categoria',
    description: '',
};

export default function Categoria() {
    return (<CategoriaPageComponent />);
}

