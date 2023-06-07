import { Sidebar } from "@/components/organisms/member/sidebar";
import { TransactionsContent } from "@/components/organisms/member/transactions";

export default function Transactions() {
  return (
    <section className="overflow-auto bg-[#FBFCFD]">
      <Sidebar />
      <TransactionsContent />
    </section>
  );
}
