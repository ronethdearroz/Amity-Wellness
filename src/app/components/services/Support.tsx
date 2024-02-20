import Image from "next/image";

export default function Support() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={"/SupportImg.png"}
              width={547}
              height={506}
              alt="Support Image"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className=" text-5xl my-2  text-green">Headline</h2>
            <p className="max-w-[503px] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in lobortis augue, a tempor erat.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="flex flex-col justify-center items-end">
            <h2 className=" text-5xl my-2  text-green">Headline</h2>
            <p className="max-w-[503px] text-xl text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in lobortis augue, a tempor erat.{" "}
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src={"/NotesImg.png"}
              width={547}
              height={506}
              alt="Notes Image"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={"/EatingImg.png"}
              width={547}
              height={506}
              alt="Eating Image"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className=" text-5xl my-2  text-green">Headline</h2>
            <p className="max-w-[503px] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in lobortis augue, a tempor erat.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
