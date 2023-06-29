import { GetServerSideProps } from "next";
import jwtDecode from "jwt-decode";

import { Sidebar } from "@/components/organisms/member/sidebar";
import { TransactionsDetailContent } from "@/components/organisms/member/transactions-detail";
import { JWTPayloadTypes, UserTypes } from "@/services/types";

export default function TransactionsDetail() {
  return (
    <section className="overflow-auto bg-[#FBFCFD]">
      <Sidebar />
      <TransactionsDetailContent />
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  userFromPayload.avatar = `${IMAGE_URL}/${userFromPayload.avatar}`;

  return {
    props: {},
  };
};
