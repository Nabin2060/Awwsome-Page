import React from "react";

const blogPosts = [
  {
    date: "November 10, 2021",
    title: "LaserNetUs Website Launch",
    desc: "LaserNetUs has a new brand identity and website designed by eDesign Interactive. The homepage is dynamic and eye-catching. The website aims to highlight the innovative nature of high-intensity laser technology",
    img: (
      <img
        src="/images/tshirt.png"
        alt="LaserNetUs Website Launch"
        className="w-full h-64 object-cover rounded-lg"
      />
    )
  },
  {
    date: "February 21, 2021",
    title: "How we helped an Orthopedic Practice Increase their traffic",
    desc: "We are honored and excited to be working with The Orthopedic Institute of New Jersey, the largest practice in northwest New Jersey.",
    img: (
      <img
        src="/images/second.png"
        alt="Orthopedic Practice"
        className="w-full h-64 object-cover rounded-lg"
      />
    )
  },
  {
    date: "July 03, 2021",
    title: "The Increasing importance of Web Accessibility",
    desc: "Is your website accessible to visitors with impairments?",
    img: (
      <img
        src="/images/third.png"
        alt="Web Accessibility"
        className="w-full h-64 object-cover rounded-lg"
      />
    )
  }
];

const Blog = () => {
  return (
    <section className="w-full bg-[#f5f6fa] py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#22223B] mb-2 tracking-tight">
          Blog
        </h2>
        <p className="text-center text-gray-500 mb-10 md:mb-14 max-w-2xl mx-auto text-base md:text-lg">
          Insights, thoughts, industry trends, marketing tips, eDesign news,
          nerdy stuff, it’s all here.
        </p>
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-8 justify-center mb-10 md:mb-14">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4 md:p-6 w-full md:flex-1 md:min-w-[390px] md:max-w-[390px] flex flex-col h-[430px] md:h-[430px] mx-auto"
              style={{ boxShadow: "0 4px 24px 0 rgba(34, 34, 59, 0.07)" }}
            >
              {post.img}
              <div className="mt-5 text-xs text-gray-400 font-medium">
                {post.date}
              </div>
              <div className="font-bold text-xl text-[#22223B] mt-1 mb-2 leading-snug">
                {post.title}
              </div>
              <div className="text-gray-500 text-sm mb-2 flex-1">
                {post.desc}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-[#5B5BF6] text-white font-bold rounded-lg px-8 py-3 shadow-md hover:bg-[#6C63FF] transition text-base md:text-lg"
            style={{ minWidth: 120 }}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
