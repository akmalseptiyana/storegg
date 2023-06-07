import { ReactElement } from "react";

interface StepItemProps {
  icon: ReactElement;
  title: string;
  desc1: string;
  desc2: string;
}

export function StepItem({ icon, title, desc1, desc2 }: StepItemProps) {
  return (
    <div className="flex-1 lg:max-w-[360px]">
      <div className="rounded-[26px] bg-[#F9FAFF] p-[30px] lg:p-5 xl:p-[30px]">
        {icon}
        <h3 className="mb-2 mt-[30px] text-[22px] font-semibold text-dark-blue">
          {title}
        </h3>
        <p className="text-lg text-dark-blue">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}
