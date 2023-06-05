import Image from "next/image";

import { Sidebar } from "@/components/member/sidebar";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TransactionsDetail() {
  return (
    <section className="overflow-auto bg-[#FBFCFD]">
      <Sidebar />
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
                <Divider />
                <div className="pt-[30px]">
                  <h2 className="mb-5 text-xl font-bold text-dark-blue">
                    Purchase Details
                  </h2>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Your Game ID{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      masayoshizero
                    </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Order ID{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      #GG001
                    </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Item{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      250 Diamonds
                    </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Price{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      Rp 42.280.500
                    </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Tax (10%){" "}
                    <span className="text-lg font-medium text-dark-blue">
                      Rp 4.228.000
                    </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Total{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      Rp 55.000.600
                    </span>
                  </p>
                </div>
                <div className="py-[10px]">
                  <h2 className="mb-5 text-xl font-bold text-dark-blue">
                    Payment Informations
                  </h2>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Your Account Name{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      Masayoshi Angga Zero
                    </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Type{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      Worldwide Transfer
                    </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Bank Name{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      Mandiri
                    </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Bank Account Name{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      PT Store GG Indonesia
                    </span>
                  </p>
                  <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
                    Bank Number{" "}
                    <span className="text-lg font-medium text-dark-blue">
                      1800 - 9090 - 2021
                    </span>
                  </p>
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
    </section>
  );
}
