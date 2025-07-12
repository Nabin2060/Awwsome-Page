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
      <section className="min-h-screen bg-white flex flex-col md:flex-row items-center py-10 md:py-20 px-4 md:px-0">
        <div className="w-full flex justify-center items-center mb-6 md:mb-0 md:order-2 md:w-1/2">
          <img
            src="/homeimg.png"
            alt="Home Illustration"
            className="w-full max-w-xs md:max-w-[480px] h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-start space-y-6 md:px-24">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#22223B] leading-tight mb-2 md:mb-0 drop-shadow-md text-left"
            style={{ lineHeight: 1.1 }}
          >
            We do the work you stay <span>focused</span> on your{" "}
            <span>customers.</span>
          </h1>
          <div className="space-y-4 text-sm md:text-lg md:pt-4 text-[#888] text-left">
            <p>
              Awwwsome. is a digital agency passionate about storytelling,
              visual design, and technology. We collaborate with companies small
              to large around the world to help them engage their audiences and
              build brand awareness.
            </p>
            <p>
              Our team can create amazing web experiences, beginning with deep
              market research, practical strategies, and professional execution.
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full md:w-auto mt-2">
            <button className="px-8 py-3 rounded-lg font-bold bg-[#5B5BF6] text-white text-base">
              Explore Projects
            </button>
            <button className="px-8 py-3 rounded-lg font-bold bg-[#E6E6FA] text-[#5B5BF6] text-base">
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Section ko */}
      <section className="py-16 md:py-20 pt-7">
        <div className="container mx-auto px-4 md:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-4 text-[#39364f]">
              What we do
            </h2>
          </div>
          <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 items-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: service.iconBg }}
                >
                  <service.icon
                    className="w-10 h-10"
                    style={{ color: service.iconColor }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#39364f]">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-[#888] leading-relaxed">
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
