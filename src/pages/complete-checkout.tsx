import { Button } from "@/components/ui/button";
import CheckoutIllustration from "@/assets/checkout.svg";

export default function CompleteCheckout() {
  return (
    <section className="mx-auto pb-20 pt-[100px] lg:py-[145px]">
      <div className="container">
        <div className="flex justify-center">
          <CheckoutIllustration className="h-[300px] w-[343px] max-w-full" />
        </div>
        <div className="pb-[50px] pt-[70px]">
          <h2 className="mb-[10px] text-center text-[32px] font-bold text-dark-blue">
            Checkout Completed
          </h2>
          <p className="text-center text-lg text-dark-blue">
            Kami akan periksa pembayaran Anda
            <br className="hidden sm:block" /> dan menghubungi via WhatsApp
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <Button
            variant="primary"
            className="font-medium sm:mx-auto sm:w-[240px]"
          >
            My Dashboard
          </Button>
          <Button variant="secondary" className="sm:mx-auto sm:w-[240px]">
            WhatsApp ke Admin
          </Button>
        </div>
      </div>
    </section>
  );
}
