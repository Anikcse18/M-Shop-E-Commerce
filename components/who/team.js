import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Software Engineer",
      image: "/who/t-1.png",
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      image: "/who/t-2.png",
    },
    {
      name: "Emily Johnson",
      position: "UI/UX Designer",
      image: "/who/t-3.png",
    },
    {
      name: "Michael Brown",
      position: "Data Scientist",
      image: "/who/t-4.png",
    },
    {
      name: "Sarah Williams",
      position: "Marketing Specialist",
      image: "/who/t-5.png",
    },
    {
      name: "David Wilson",
      position: "DevOps Engineer",
      image: "/who/t-6.png",
    },
    {
      name: "Olivia Taylor",
      position: "QA Engineer",
      image: "/who/t-7.png",
    },
    {
      name: "William Anderson",
      position: "Business Analyst",
      image: "/who/t-8.png",
    },
  ];

  return (
    <section className="mt-14 md:mt-32">
      <div>
        <h1 className="text-3xl text-center font-semibold public-sans ">
          Our core team members
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="min-w-[300px] flex flex-row items-center gap-4 p-5 border-[1px] public-sans mx-auto"
          >
            <div>
              <Image
                src={member.image}
                width={70}
                height={70}
                alt="Who We Are"
              />
            </div>
            <div className="public-sans space-y-2">
              <h1 className="font-semibold">{member.name}</h1>
              <p className="text-sm text-gray-500">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
