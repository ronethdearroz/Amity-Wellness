import Image from "next/image";
import amityIconOne from "../../../public/AmityIconOne.svg";
import amityIconTwo from "../../../public/AmityIconTwo.svg";
import amityIconThree from "../../../public/AmityIconThree.svg";

export default function AboutUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div>
          <h1 className="text-6xl flex justify-center">About Us</h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src={amityIconOne}
              width={270}
              height={270}
              alt="Amity Icon One"
            />
            <h2 className="text-4xl my-2 -mt-10">We treat you like family</h2>
            <p className="text-grey max-w-80">
              We’ll go the extra mile to make sure you’re getting the services
              you need and deserve.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={amityIconTwo}
              width={270}
              height={270}
              alt="Amity Icon Two"
            />
            <h2 className="text-4xl my-2 -mt-10">We listen</h2>
            <p className="text-grey max-w-80">
              Our mental health informed Support Coordinators work with you to
              understand your needs and advocate on your behalf.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={amityIconThree}
              width={270}
              height={270}
              alt="Amity Icon Three"
            />
            <h2 className="text-4xl my-2 -mt-10">We’re accountable</h2>
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
