import { GetServerSidePropsContext } from "next";
import jwtDecode from "jwt-decode";

import { Sidebar } from "@/components/organisms/member/sidebar";
import { OverviewContent } from "@/components/organisms/member/overview";
import { JWTPayloadTypes, UserTypes } from "@/services/types";

export default function Member() {
  return (
    <section className="overflow-auto bg-[#FBFCFD]">
      <Sidebar />
      <OverviewContent />
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

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  userFromPayload.avatar = `${IMAGE_URL}/${userFromPayload.avatar}`;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
