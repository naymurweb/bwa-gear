import React from "react";
import { FaStar, FaStarHalf, FaStarHalfAlt, IconName } from "react-icons/fa";
import user1 from "../../assets/person/person1.svg";
import user2 from "../../assets/person/person2.svg";
import user3 from "../../assets/person/person3.svg";

const Testimonial = () => {
  const users = [
    {
      id: 1,
      details:
        "Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif",
      profile: user1,
      name: "Wahid Ari",
      work: "Designer",
    },
    {
      id: 2,
      details:
        "Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif",
      profile: user2,
      name: "Wahid",
      work: "Developer",
    },
    {
      id: 3,
      details:
        "Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif",
      profile: user3,
      name: "Ari",
      work: "UI/UX Designer",
    },
  ];
  return (
    <section className=" py-12 bg-myBg3">
      <div className="container mx-auto px-5 mt-12">
        <div className="text-center">
          <h2 className="text-4xl font-semibold my-4 text-primaryDark">
            Testimonial
          </h2>
          <p className="text-lg">Designer and developer using the best tools</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 my-12">
          {users.map((data) => (
            <div
              key={data.id}
              className="bg-white p-6 border border-[#DEDEDE] rounded-lg"
            >
              <div className="flex text-[#FFC942] gap-0.5 my-5 text-lg">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalfAlt></FaStarHalfAlt>
              </div>
              <p>{data.details}</p>
              <div className="flex gap-4 items-center mt-3">
                <img src={data.profile} alt="" />
                <div>
                  <p className=" font-medium">{data.name}</p>
                  <small>{data.work}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
