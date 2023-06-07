import { Sidebar } from "@/components/organisms/member/sidebar";
import { OverviewContent } from "@/components/organisms/member/overview";

export default function Member() {
  return (
    <section className="overflow-auto bg-[#FBFCFD]">
      <Sidebar />
      <OverviewContent />
    </section>
  );
}
