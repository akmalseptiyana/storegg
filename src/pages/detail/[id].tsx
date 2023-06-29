import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Layout } from "@/components/templates/layout";
import { Divider } from "@/components/atoms/divider";
import { TopUpForm } from "@/components/organisms/detail/form";
import { TopUpItem } from "@/components/organisms/detail/topup";
import { getDetailVoucher } from "@/services/player";

export default function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    name: "",
    thumbnail: "",
    category: {
      name: "",
    },
  });
  const [nominals, setNominals] = useState([]);
  const [payments, setPayments] = useState([]);

  const getVoucherDetailAPI = useCallback(
    async (id: string | string[] | undefined) => {
      const data = await getDetailVoucher(id);
      setDataItem(data.detail);
      localStorage.setItem("data-item", JSON.stringify(data.detail));
      setNominals(data.detail.nominals);
      setPayments(data.payment);
    },
    []
  );

  useEffect(() => {
    if (isReady) {
      getVoucherDetailAPI(query.id);
    }
  }, [isReady]);

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
              <TopUpItem data={dataItem} type="mobile" />
            </div>

            <div>
              <TopUpItem data={dataItem} type="desktop" />
              <Divider orientation="horizontal" />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
