import Image from "next/image";

export default function Services() {
  return (
    <section className="px-4 md:px-0">
      <div className="container mx-auto">
        <div>
          <h2 className="text-6xl flex justify-center my-10">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 my-0 md:my-10">
          <div className="flex flex-col justify-center gap-5 text-left p-5 h-[226px] border-2 border-borderGreen rounded-3xl hover:bg-green group transition-all ease-linear">
            <h3 className="text-4xl text-green group-hover:text-white">
              Psychosocial Recovery Coaching
            </h3>
            <p className=" group-hover:text-white">
              Rebuild confidence and reach goals thanks to our Psychosocial
              Recovery Coaches who are dedicated to helping you make progress by
              coordinating your recovery according to your needs
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 text-left p-5 h-[226px] border-2 border-borderGreen rounded-3xl hover:bg-green group transition-all ease-linear">
            <h3 className="text-4xl text-green  group-hover:text-white">
              Support Coordination
            </h3>
            <p className=" group-hover:text-white">
              Streamline the NDIS process so that it works for you – our mental
              health informed Support Coordinators will work closely with you to
              understand your needs, advocate on your behalf and help manage
              your plan as needed
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 my-5 md:my-10">
          <div className="flex flex-col justify-center gap-5 text-left p-5 h-[226px] border-2 border-borderGreen rounded-3xl hover:bg-green group transition-all ease-linear">
            <h3 className="text-4xl text-green group-hover:text-white">
              Nutrition Specialised Support Work
            </h3>
            <p className=" group-hover:text-white">
              Learn how to cook nutritious meals that are tailored to your
              budget and health needs from our mental health informed, certified
              Nutritionist.
            </p>
          </div>
          <div>
            <div className="flex flex-col justify-center gap-5 text-left p-5 h-[226px] border-2 border-borderGreen rounded-3xl hover:bg-green group transition-all ease-linear">
              <h3 className="text-4xl text-green group-hover:text-white">
                Mental Health Support Work
              </h3>
              <p className=" group-hover:text-white">
                Get one-on-one guidance from our qualified Mental Health
                Coaches. They’ll work alongside you helping you make steady
                progress towards reaching your goals.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:my-10">
          <div className="flex flex-col justify-center gap-5 text-left p-5 w-[720px] h-[226px] border-2 border-borderGreen rounded-3xl hover:bg-green group transition-all ease-linear">
            <h3 className="text-4xl text-green group-hover:text-white">
              Peer Support Work
            </h3>
            <p className=" group-hover:text-white">
              Get the empathy and understanding from someone who has lived
              experience, someone who can empathise with you and provide
              meaningful support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
