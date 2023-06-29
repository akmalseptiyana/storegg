import { GetServerSidePropsContext } from "next";

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

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
