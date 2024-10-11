import HomePageComponent from "@/components/pages/home.page.component";
import { Metadata } from "next";
import '@/styles/scss/_home.scss';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Ultimas vagas"
    // description: 'codingbeautydev.com: Coding - the art, the science, and the passion.',
  };
}

export default function Home() {
  return (<HomePageComponent />);
}

