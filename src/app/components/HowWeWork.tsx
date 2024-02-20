import Image from "next/image";

export default function HowWeWork() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div>
          <h2 className="text-6xl flex justify-center">How We Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src={"/ListenIcon.svg"}
              width={270}
              height={270}
              alt="Listen Icon"
            />
            <h3 className="text-4xl my-2 -mt-10">Listen</h3>
            <p className="text-grey max-w-80">
              We’ll have a chat to learn what your health and wellness needs
              are.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={"/IndividualisedIcon.svg"}
              width={270}
              height={270}
              alt="Individualised Icon"
            />
            <h3 className="text-4xl my-2 -mt-10">Individualised plan</h3>
            <p className="text-grey max-w-80">
              Our plans are always personalised to you.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={"/OngoingSupportIcon.svg"}
              width={270}
              height={270}
              alt="Ongoing Support Icon"
            />
            <h3 className="text-4xl my-2 -mt-10">Ongoing support</h3>
            <p className="text-grey max-w-80">
              We always make sure we’re getting feedback to make sure you’re
              getting the services you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
