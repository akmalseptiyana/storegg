import Step1 from "@/assets/step1.svg";
import Step2 from "@/assets/step2.svg";
import Step3 from "@/assets/step3.svg";
import { StepItem } from "@/components/molecules/home/step-item";

export function TransactionStep() {
  return (
    <section id="feature" className="py-[50px]">
      <div className="container">
        <h2 className="mb-[30px] text-center text-[32px] font-bold text-dark-blue">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div
          className="flex flex-col gap-x-5 gap-y-6 lg:flex-row xl:gap-x-[50px]"
          data-aos="fade-up"
        >
          <StepItem
            icon={<Step1 />}
            title="1. Start"
            desc1="Pilih salah satu game"
            desc2="yang ingin kamu top up"
          />
          <StepItem
            icon={<Step2 />}
            title="2. Fill Up"
            desc1="Top up sesuai dengan"
            desc2="nominal yang sudah tersedia"
          />
          <StepItem
            icon={<Step3 />}
            title="1. Be a Winner"
            desc1="Siap digunakan untuk"
            desc2="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
