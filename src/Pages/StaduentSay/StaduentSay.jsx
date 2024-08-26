import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import studentSay from "../../assets/data/studentSays";

const StaduentSay = () => {
  return (
    <section className="bg-[#DCE0E3] md:px-[90px] px-[20px] md:py-[50px] py-[25px]">
      <div className="text-center">
        <h2 className="font-bold text-3xl pb-[10px]">Student Says</h2>
        <p className="md:px-[400px] pb-[60px]">
          There are courses in a wide variety of subjects, from cosmetology to
          engineering, food and beverage studies to law and regulations.
        </p>
      </div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#49088a",
          "--swiper-pagination-bullet-size": "8px",
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {studentSay.map((user) => (
          <SwiperSlide className="bg-[white] p-[40px] rounded-lg cursor-pointer mb-[40px]">
            <div className="pb-[15px]">
              <p className="text-[#697b88]">" {user.description} "</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img
                className="h-[60px] w-[60px] rounded-full border-2"
                src={user.img}
                alt="image"
              />
              <div>
                <h4 className="font-bold">{user.name}</h4>
                <p className="text-[#697b88]">{user.subject}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default StaduentSay;
