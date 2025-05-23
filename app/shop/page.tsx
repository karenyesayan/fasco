import Header from "../ui/header";
import Breadcrumbs from "../ui/breadcrumbs";
import Slider from "../ui/slider";
import Features from "../ui/features";
import InfiniteSlider from "../ui/infinite-slider";
import Newsletter from "../ui/newsletter";
import Footer from "../ui/footer";
import { volkhov } from "../ui/fonts";

export default function Shop() {
  return (
    <>
      <Header />
      <main className="w-full">
        <h1
          className={`${volkhov.className} pb-5 text-center text-[2.625rem] leading-8 font-normal text-black capitalize not-italic`}
        >
          Fashion
        </h1>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Fashion",
              href: "/shop",
              active: true,
            },
          ]}
        />
        <Slider />
        <Features />
        <InfiniteSlider />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
