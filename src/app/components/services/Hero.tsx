import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-cream py-40 relative px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-10">
          <h1 className="text-4xl md:text-6xl">
            Service Headline - Solution Benefit Driven
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium ">
            Subheadline describe how the solution gets to the consumers wants
            and needs
          </h2>
          <button className="bg-green w-40 h-10 rounded-full text-white text-lg">
            CTA Button
          </button>
        </div>
      </div>
    </section>
  );
}
