import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div>
          <h2 className="text-6xl flex justify-center">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 my-10">
          <div className="flex flex-col gap-5 p-5 border-2 border-borderGreen rounded-3xl  py-10 text-center h-64">
            <h3 className="text-4xl">Name</h3>
            <p className=" group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in lobortis augue, a tempor erat.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-5 border-2 border-borderGreen rounded-3xl  py-10 text-center h-64">
            <h3 className="text-4xl">Name</h3>
            <p className=" group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in lobortis augue, a tempor erat.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-5 border-2 border-borderGreen rounded-3xl  py-10 text-center h-64">
            <h3 className="text-4xl">Name</h3>
            <p className=" group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in lobortis augue, a tempor erat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
