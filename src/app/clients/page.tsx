import Image from "next/image";

const logos = [
  "3m.png",
  "Picture1.png",
  "Picture2.png",
  "Picture3.png",
  "Picture4.png",
  "Picture5.png",
  "Picture6.png",
  "Picture7.png",
  "Picture8.png",
  "basf.png",
  "ge.png",
  "siemens.png",
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Trusted by <span className="text-sky-600">Industry Leaders</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We are proud to partner with some of the most innovative and respected companies across the globe.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-40"
            >
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={`/logos/${logo}`}
                  alt={`Client logo ${logo.split(".")[0]}`}
                  fill
                  className="object-contain p-4 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
