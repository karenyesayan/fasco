import Header from "./ui/header";
import Hero from "./ui/home/hero";
import Brands from "./ui/home/brands";
import Promo from "./ui/promo";
import Slider from "./ui/slider";
import Features from "./ui/features";
import InfiniteSlider from "./ui/infinite-slider";
import Testimonials from "./ui/home/testimonials";
import Newsletter from "./ui/newsletter";
import Footer from "./ui/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <Brands />
        <Promo />
        <Slider />
        <Features />
        <InfiniteSlider />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
