
import ContactSection from "@/components/Contact";
import NossaAtuacao from "@/components/NossaAtuacao";
import { TeamCarousel } from "@/components/TeamCarousel";
import { VideoCarousel } from "@/components/VideoCarousel";



export default function Home() {
  return (
    <>
    <NossaAtuacao/>
    <VideoCarousel/>
    <TeamCarousel/>
    <ContactSection/>

    </>
  );
}
