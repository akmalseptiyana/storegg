import Image from "next/image";

import { Divider } from "@/components/atoms/divider";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import { Row } from "./row";

export function TransactionsDetailContent() {
  return (
    <main className="relative ml-[340px] mr-auto h-full py-[50px] pr-[50px]">
      <div className="lg:pr-0">
        <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
          Details #GG001
        </h2>
        <div>
          <div className="w-full max-w-[860px] overflow-auto rounded-2xl bg-white p-[30px]">
            <section className="mx-auto">
              <div className="mb-[30px] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <div className="pr-4">
                    <figure className="relative h-[130px] w-[200px] overflow-hidden rounded-[26px]">
                      <Image
                        src="/images/Thumbnail-3.png"
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </figure>
                  </div>
                  <div>
                    <p className="mb-10 text-xl font-bold text-dark-blue">
                      Mobile Legends:
                      <br /> The New Battle 2021
                    </p>
                    <p className="text-gray">Category: Mobile</p>
                  </div>
                </div>
                <Badge variant="pending" className="h-10 w-[130px]">
                  Pending
                </Badge>
              </div>
              <Divider orientation="horizontal" />
              <div className="pt-[30px]">
                <h2 className="mb-5 text-xl font-bold text-dark-blue">
                  Purchase Details
                </h2>
                <Row label="Your Game ID" value="masyoshizero" />
                <Row label="Order ID" value="#GG001" />
                <Row label="Item" value="250 Diamonds" />
                <Row label="Price" value={42280500} />
                <Row label="Tax (10%)" value={4228000} />
                <Row
                  label="Total"
                  value={55000600}
                  className="font-semibold text-primary"
                />
              </div>
              <div className="py-[10px]">
                <h2 className="mb-5 text-xl font-bold text-dark-blue">
                  Payment Informations
                </h2>
                <Row label="Your Account Name" value="Masayoshi Angga Zero" />
                <Row label="Type" value="WorldWide Transfer" />
                <Row label="Bank Name" value="Mandiri" />
                <Row label="Bank Account Name" value="PT Store GG Indonesia" />
                <Row label="Bank Number" value="1800 - 9090 - 2021" />
              </div>
              <div className="mt-[50px]">
                <Button variant="primary" className="w-[250px]">
                  WhatsApp ke Admin
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
