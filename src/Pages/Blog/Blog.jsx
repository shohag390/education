import React from "react";
import blog from "../../assets/data/latestnews";

const Blog = () => {
  return (
    <section className="md:py-[50px] py-[25px] md:px-[90px] px-[20px]">
      <div className="text-center">
        <h2 className="font-bold md:text-3xl text-2xl md:pb-[10px] pb-[6px]">
          Latest News
        </h2>
        <p className="md:px-[400px] md:pb-[60px] pb-[25px]">
          There are courses in a wide variety of subjects, from cosmetology to
          engineering, food and beverage studies to law and regulations.
        </p>
      </div>
      <div className="md:flex md:items-center md:gap-[30px] md:flex-row flex flex-col gap-[25px]">
        {blog.map((card) => (
          <div className="w-full text-center">
            <div className="relative h-[300px] flex flex-col items-center">
              <img
                className="absolute h-[300px] w-full rounded-lg"
                src={card.image}
                alt="image"
              />
              <p className="py-[5px] bottom-[-15px] absolute px-[40px] rounded-[30px] bg-[#49088A] text-white">
                {card.date}
              </p>
            </div>
            <div className="pt-[30px]">
              <p className="font-bold text-[#697b88]">{card.subject}</p>
              <h4 className="text-xl font-bold">{card.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
