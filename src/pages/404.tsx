import { Button } from "@/components/ui/button";
import NotFound from "@/assets/404.svg";

export default function Custom404() {
  return (
    <section className="pb-[100px] pt-[145px] md:pb-[212px]">
      <div className="container">
        <div className="text-center">
          <NotFound className="mx-auto h-[300px] w-[482px] max-w-full" />
        </div>
        <div className="pb-[150px] pt-[70px] md:pb-[50px]">
          <h2 className="mb-[10px] text-center text-[32px] font-bold text-dark-blue">
            Oops! Not Found
          </h2>
          <p className="text-center text-lg text-dark-blue">
            Halaman yang anda kunjungi sudah
            <br className="hidden sm:block" />
            tidak tersedia pada sistem kami dan menghubungi
          </p>
        </div>
        <div className="flex flex-col">
          <Button
            variant="primary"
            className="font-medium md:mx-auto md:w-[190px]"
          >
            Homepage
          </Button>
        </div>
      </div>
    </section>
  );
}
