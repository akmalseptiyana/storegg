export function CheckoutDetail() {
  return (
    <>
      <div className="pt-[30px] md:pt-[50px]">
        <h2 className="mb-5 text-xl font-bold text-dark-blue">
          Purchase Details
        </h2>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Your Game ID <span className="block font-medium">masayoshizero</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Order ID <span className="block font-medium">#GG001</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Item <span className="block font-medium">250 Diamonds</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Price <span className="block font-medium">Rp 42.280.500</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Tax (10%) <span className="block font-medium">Rp 4.228.000</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Total{" "}
          <span className="block font-medium text-primary">Rp 55.000.600</span>
        </p>
      </div>
      <div className="py-[10px] md:py-[50px]">
        <h2 className="mb-5 text-xl font-bold text-dark-blue md:flex md:items-center md:justify-between">
          Payment Informations
        </h2>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Your Account Name{" "}
          <span className="block font-medium">Masayoshi Angga Zero</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Type <span className="block font-medium">Worldwide Transfer</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Bank Name <span className="block font-medium">Mandiri</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Bank Account Name{" "}
          <span className="block font-medium">PT Store GG Indonesia</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Bank Number{" "}
          <span className="block font-medium">1800 - 9090 - 2021</span>
        </p>
      </div>
    </>
  );
}
