import Header from "./components/header/header";
import IntroHero from "./components/hero/introHero";
import FeaturesHero from "./components/hero/featuresHero";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <IntroHero />
        <FeaturesHero />
        <Footer />
      </div>
    </>
  );
}
