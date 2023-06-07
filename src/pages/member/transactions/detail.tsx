import { Sidebar } from "@/components/organisms/member/sidebar";
import { TransactionsDetailContent } from "@/components/organisms/member/transactions-detail";

export default function TransactionsDetail() {
  return (
    <section className="overflow-auto bg-[#FBFCFD]">
      <Sidebar />
      <TransactionsDetailContent />
    </section>
  );
}
