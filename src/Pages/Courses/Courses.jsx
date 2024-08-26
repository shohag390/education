import courses from "../../assets/data/courses";
import userLOgo from "../../assets/images/users.png";
import duration from "../../assets/images/duration.png";

const Courses = () => {
  return (
    <section className="bg-[#DCE0E3] md:px-[90px] px-[20px] md:py-[50px] py-[30px]">
      <div className="text-center">
        <h2 className="font-bold md:text-3xl text-xl md:pb-[10px] pb-[6px]">
          Our Popular Courses
        </h2>
        <p className="md:px-[400px] md:pb-[60px] pb-[25px]">
          There are courses in a wide variety of subjects, from cosmetology to
          engineering, food and beverage studies to law and regulations, biology
          to fashion.
        </p>
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-[30px] gap-[20px] flex flex-col items-center justify-centers">
        {courses.map((item) => (
          <div
            key={item.id}
            className="bg-[white] rounded-[10px] border-2 border-[#cdc8c8]"
          >
            <img
              className="w-[100%] rounded-t-[10px]"
              src={item.img}
              alt="image"
            />
            <div className="px-[15px] pt-[10px]">
              <div className="border-b-[1px] border-[#697b88]">
                <h4 className="font-bold md:text-xl">{item.courseName}</h4>
                <p className="text-[#697b88]">{item.courseTecher}</p>
                <p className="py-[10px] text-[#697b88]">{item.description}</p>
              </div>
              <div className="flex justify-between items-center py-[20px]">
                <div className="flex items-center gap-[5px]">
                  <img
                    className="h-[20px] w-[20px]"
                    src={userLOgo}
                    alt="icone"
                  />
                  <p className="font-bold">{item.totalSits}</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img
                    className="h-[20px] w-[20px]"
                    src={duration}
                    alt="icone"
                  />
                  <p className="font-bold">{item.courseLimit}</p>
                </div>
                <div>
                  <p className="font-bold">${item.enrolPrice}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
