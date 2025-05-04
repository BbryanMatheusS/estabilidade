
import ContactSection from "@/components/Contact";
import NossaAtuacao from "@/components/NossaAtuacao";
import SobrePage from "@/components/Sobre";
import { TeamCarousel } from "@/components/TeamCarousel";
import { VideoCarousel } from "@/components/VideoCarousel";



export default function Home() {
  return (
    <>
    <SobrePage/>
    <NossaAtuacao/>
    <VideoCarousel/>
    <TeamCarousel/>
    <ContactSection/>

    </>
  );
}
