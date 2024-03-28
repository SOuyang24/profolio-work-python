import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";
import "semantic-ui-css/semantic.min.css";

export default function Home() {
  return (
    <>
    <ContainerBlock
      title="Simon Ouyang - Innovator, Tech Lead, Developer"
      description="Developer portfolio to show what I have done"
    >
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
    </>
  );
}
