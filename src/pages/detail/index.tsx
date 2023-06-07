import { Layout } from "@/components/templates/layout";
import { Divider } from "@/components/atoms/divider";
import { TopUpForm } from "@/components/organisms/detail/form";
import { TopUpItem } from "@/components/organisms/detail/topup";

export default function Detail() {
  return (
    <Layout>
      <section className="pb-[50px] lg:pt-[60px]">
        <div className="container">
          <div className="pb-[50px]">
            <h2 className="mb-[10px] text-start text-[32px] font-bold text-dark-blue">
              Top Up
            </h2>
            <p className="text-lg font-normal text-dark-blue">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="flex flex-wrap gap-x-[50px] md:flex-nowrap">
            <div className="pb-[30px] md:pb-0 md:text-start">
              <TopUpItem type="mobile" />
            </div>

            <div>
              <TopUpItem type="desktop" />
              <Divider orientation="horizontal" />
              <TopUpForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
