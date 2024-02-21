import Header from "./components/header/header";
import IntroHero from "./components/hero/introHero";
import FeaturesHero from "./components/hero/featuresHero";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <IntroHero />
        <FeaturesHero />
      </div>
    </>
  );
}
