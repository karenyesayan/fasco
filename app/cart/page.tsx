import Header from "../ui/header";
import Breadcrumbs from "../ui/breadcrumbs";
import ProductsTable from "../ui/cart/table";
import Newsletter from "../ui/newsletter";
import Footer from "../ui/footer";
import { volkhov } from "../ui/fonts";

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full">
        <h1
          className={`${volkhov.className} pb-5 text-center text-[2.625rem] leading-8 font-normal text-black capitalize not-italic`}
        >
          Shopping Cart
        </h1>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Your Shopping Cart",
              href: "/cart",
              active: true,
            },
          ]}
        />
        <ProductsTable />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
