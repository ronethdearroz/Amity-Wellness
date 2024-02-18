export default function Hero() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-6xl">Hero heading</h1>
            <h2 className="text-4xl font-medium">sub heading</h2>
            <button className="bg-green w-40 h-14 rounded-full text-white text-lg">
              CTA Button
            </button>
          </div>
          <div>image</div>
        </div>
      </div>
    </section>
  );
}
