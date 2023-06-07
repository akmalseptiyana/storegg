import { TransactionsTable } from "./table";
import { ButtonTab } from "./button-tab";

export function TransactionsContent() {
  return (
    <main className="relative ml-[340px] mr-auto h-full py-[50px] pr-[50px]">
      <div className="lg:pl-0">
        <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
          My Transactions
        </h2>
        <div className="mb-[30px]">
          <p className="mb-3 text-lg text-gray">You’ve spent</p>
          <h3 className="text-[42px] font-medium text-dark-blue">
            Rp 4.518.000.500
          </h3>
        </div>
        <div className="mb-5 mt-[30px]">
          <div>
            <div className="flex items-center gap-x-[18px]">
              <ButtonTab title="All Trx" active />
              <ButtonTab title="Success" />
              <ButtonTab title="Pending" />
              <ButtonTab title="Failed" />
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[1047px] overflow-auto rounded-2xl bg-white px-[30px] py-5">
            <TransactionsTable />
          </div>
        </div>
      </div>
    </main>
  );
}
