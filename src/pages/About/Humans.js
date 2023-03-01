import React from "react";
import user1 from "../../assets/person/person1.svg";
import user2 from "../../assets/person/person2.svg";
import user3 from "../../assets/person/person3.svg";
const Humans = () => {
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
    <section className="container mx-auto my-20 px-5">
      <div className="text-center">
        <h2 className="md:text-4xl text-3xl font-semibold my-4 text-primaryDark">
          The humans behind the product
        </h2>
        <p className="text-lg">Most popular tools for designer and developer</p>
      </div>

      <div className="grid md:grid-cols-3 gap-20 mt-14">
        {users.map((data) => (
          <div key={data.id} className="text-center ">
            <div className="flex justify-center">
              <img src={data.profile} alt="" className="w-36" />
            </div>
            <h3 className="text-2xl font-semibold text-primaryDark mt-6 mb-2">
              {data.name}
            </h3>
            <p className="text-secondary">{data.work}</p>
            <p className="mt-3 mb-9">{data.details}</p>
            <small>Github - Linkedin</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Humans;
