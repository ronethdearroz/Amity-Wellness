import Image from "next/image";

export default function GetSupport() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="bg-[url('/GetSupportImg.png')] bg-no-repeat bg-cover bg-center rounded-3xl max-w-[815px] h-[506px] flex flex-col justify-end text-white p-10">
          <h2 className="text-4xl my-2">Get the support you need</h2>
          <p className="max-w-[503px]">
            Our mental health informed support coordinators are always listening
            and understanding your needs. We’ll make sure you’re getting the
            services you need.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="bg-[url('/NDISImg.png')] bg-no-repeat bg-cover bg-center rounded-3xl max-w-[815px] h-[506px] flex flex-col justify-end flex-1 text-white p-10 my-10 md:my-20">
            <h2 className="text-4xl my-2">NDIS Made Simple</h2>
            <p className="max-w-[503px]">
              Navigating the codes, line items and service providers can be
              tricky. Rest assure we’ll help simplify your services.
            </p>
          </div>
        </div>
        <div className="bg-[url('/HealthyEatingImg.png')] bg-no-repeat bg-cover bg-center rounded-3xl max-w-[815px] h-[506px] flex flex-col justify-end text-white p-10">
          <h2 className="text-4xl my-2">Healthy eating, living and mind.</h2>
          <p className="max-w-[503px]">
            Learn how to cook nutritious meals, get back on your feet or feel
            more confident in yourself. Work with the amazing crew here focused
            on your health needs.
          </p>
        </div>
      </div>
    </section>
  );
}
