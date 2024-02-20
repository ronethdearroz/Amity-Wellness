import Image from "next/image";
import facebookIcon from "../../../public/Facebook.svg";
import twitterIcon from "../../../public/TwitterX.svg";
import instagramIcon from "../../../public/Instagram.svg";

export default function Hero() {
  return (
    <section className="bg-cream py-20 relative px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}

          <div className="flex justify-center items-center flex-col gap-4">
            <h1 className="text-4xl md:text-6xl">Hero heading</h1>
            <h2 className="text-3xl md:text-4xl font-medium ">sub heading</h2>
            <button className="bg-green w-40 h-10 rounded-full text-white text-lg">
              CTA Button
            </button>
          </div>
          {/* Column 2 */}
          <div className="flex justify-center items-center">
            <Image
              src={"https://dummyimage.com/640x360/fff/aaa"}
              width={600}
              height={400}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      {/* social icons */}

      <div className="flex gap-2 absolute left-20 bottom-6">
        <Image src={facebookIcon} width={32} height={32} alt="Facebook Icon" />
        <Image src={twitterIcon} width={32} height={32} alt="Facebook Icon" />
        <Image src={instagramIcon} width={32} height={32} alt="Facebook Icon" />
      </div>
    </section>
  );
}
