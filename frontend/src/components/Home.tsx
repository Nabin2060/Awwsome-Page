import { Globe, Rocket, Gamepad2, Brain } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application",
    description:
      "Platform independant business solutions for maximum availability",
    iconBg: "#FFF2F2",
    iconColor: "#FF6A6A"
  },
  {
    icon: Rocket,
    title: "SEO",
    description: "Let the world find you on top of others",
    iconBg: "#F2F8FF",
    iconColor: "#5B9EFF"
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Interactive games with perfect graphics",
    iconBg: "#FFFDEB",
    iconColor: "#FFD600"
  },
  {
    icon: Brain,
    title: "Iot/ AI/ Robotic",
    description: "Advanced autonomous technologies to make life simple",
    iconBg: "#F9F2FF",
    iconColor: "#C86DD7"
  }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-white flex items-center py-20">
        <div className="container mx-auto px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1
                className="text-5xl lg:text-6xl font-bold"
                style={{ color: "#22223B", lineHeight: 1.1 }}
              >
                We do the work you stay <span>focused</span> on your{" "}
                <span>customers.</span>
              </h1>
              <div className="space-y-6 text-lg">
                <p style={{ color: "#888" }}>
                  Awwwsome. is a digital agency passionate about storytelling,
                  visual design, and technology. We collaborate with companies
                  small to large around the world to help them engage their
                  audiences and build brand awareness.
                </p>
                <p style={{ color: "#888" }}>
                  Our team can create amazing web experiences, beginning with
                  deep market research, practical strategies, and professional
                  execution.
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-8 py-3 rounded-md font-bold transition-colors"
                  style={{
                    background: "#5B5BF6",
                    color: "#fff",
                    borderRadius: 8
                  }}
                >
                  Explore Projects
                </button>
                <button
                  className="px-8 py-3 rounded-md font-bold transition-colors"
                  style={{
                    background: "#F5F6FA",
                    color: "#5B5BF6",
                    borderRadius: 8
                  }}
                >
                  About Us
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className="flex justify-center items-center">
              <img
                src="/homeimg.png"
                alt="Home Illustration"
                className="w-full max-w-[480px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 pt-7">
        <div className="container mx-auto px-24 ">
          <div className="text-center mb-16 ">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#22223B" }}
            >
              What we do
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {services.map((service, index) => (
              <div
                key={index}
                className=" rounded-2xl  p-8 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: service.iconBg }}
                >
                  <service.icon
                    className="w-8 h-8"
                    style={{ color: service.iconColor }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#22223B" }}
                >
                  {service.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#888" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
