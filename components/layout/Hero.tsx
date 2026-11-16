import { FaBriefcase } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { FaUniversity } from "react-icons/fa";
import { MdScience } from "react-icons/md";

const categories = [
  {
    name: "Job",
    icon: <FaBriefcase size={30} className="shrink-0" />,
    description: "Civil, Electrical etc",
  },
  {
    name: "DUET",
    icon: <FaUniversity size={30} className="shrink-0" />,
    description: "Dhaka University Entrance Test",
  },
  {
    name: "Academic",
    icon: <HiAcademicCap size={30} className="shrink-0" />,
    description: "Academic preparation",
  },
  {
    name: "General",
    icon: <MdScience size={30} className="shrink-0" />,
    description: "General knowledge and aptitude",
  },
];

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 px-4 py-8 md:px-16 md:py-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-medium">
          Bangladesh's <b className="text-primary-btn">#1</b> platform for{" "}
          <em>Job, DUET and Academic</em> preperation for Diploma students.
        </h2>
        <p className="text-muted-foreground text-sm font-light">
          Abhijan is one of Bangladesh's leading online preparation platforms —
          an academy and website trusted by 4,000+ users — covering Job, DUET
          admission, Academic, and General preparation. Dedicated to making
          quality education accessible across the country, Abhijan combines
          expert mentorship, structured courses, 24/7 study resources, and
          regular live model tests with detailed performance analytics to help
          students build strong foundations and achieve success in competitive
          exams.
        </p>

        {/* Category Selection */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium ">Which exam are you studying for?</h3>
          <div className="grid grid-cols-2 items-stretch gap-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center space-x-4 border-2 border-border md:px-4 md:py-2 px-2 py-1 rounded-lg hover:border-gray-500 cursor-pointer"
              >
                {category.icon}
                <div className="flex flex-col">
                  <h5 className="font-bold">{category.name}</h5>
                  <p className="text-xs font-medium text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* This is the why choose us section */}
      <div>
        <div className="bg-card border border-border px-8 py-6 rounded-xl mb-6 text-center">
          <h3 className="text-xl font-semibold mb-5">Why Choose Us?</h3>
          <p className="text-muted-foreground text-md font-light text-justify">
            Join thousands of students who have successfully prepared for their
            exams with our comprehensive study materials and expert guidance.
            Designed to simplify complex topics and boost your confidence,
            Abhijan provides structured courses, regular live model tests with
            instant performance analytics, and 24/7 access to curated lecture
            sheets and recorded classes. Whether you are aiming for government
            jobs, DUET admission, or academic excellence, our dedicated mentors
            and supportive learning community ensure you stay consistent,
            overcome exam anxiety, and turn your hard work into real-world
            success. Stay with us!
          </p>
        </div>

        {/* Stats Section */}

        <div className="bg-card flex rounded-xl px-6 py-4 gap-4 border border-border text-center grid grid-cols-3">
          <div className="border-r border-border">
            <h4 className="font-extrabold text-2xl">4K+</h4>
            <p className="text-xs font-medium text-muted-foreground">
              active users
            </p>
          </div>
          <div className="border-r border-border">
            <h4 className="font-extrabold text-2xl">#1</h4>
            <p className="text-xs font-medium text-muted-foreground">
              education platform
            </p>
          </div>
          <div className="">
            <h4 className="font-extrabold text-2xl">4+</h4>
            <p className="text-xs font-medium text-muted-foreground">
              years of experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
