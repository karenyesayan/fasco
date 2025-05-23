import Header from "../ui/header";
import CheckoutForm from "../ui/checkout/checkout-form";
import Newsletter from "../ui/newsletter";
import Footer from "../ui/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full">
        <CheckoutForm />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
