import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div>
          <h2 className="text-6xl flex justify-center">About Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src={"/AmityIconOne.svg"}
              width={270}
              height={270}
              alt="Amity Icon One"
            />
            <h3 className="text-4xl my-2 -mt-10">We treat you like family</h3>
            <p className="text-grey max-w-80">
              We’ll go the extra mile to make sure you’re getting the services
              you need and deserve.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={"/AmityIconTwo.svg"}
              width={270}
              height={270}
              alt="Amity Icon Two"
            />
            <h3 className="text-4xl my-2 -mt-10">We listen</h3>
            <p className="text-grey max-w-80">
              Our mental health informed Support Coordinators work with you to
              understand your needs and advocate on your behalf.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={"/AmityIconThree.svg"}
              width={270}
              height={270}
              alt="Amity Icon Three"
            />
            <h3 className="text-4xl my-2 -mt-10">We’re accountable</h3>
            <p className="text-grey max-w-80">
              We make sure our team are focused on you and are up to date with
              all the best practices and current strategies. Meaning you’re
              getting the best treatment possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
