import { FcEngineering } from "react-icons/fc";

const categories = [
    {
        name: "Job",
        icon: <FcEngineering size={34} />,
        description: "Civil, Electrical etc"
    },
    {
        name: "DUET",
        icon: <FcEngineering size={34} />,
        description: "Dhaka University Entrance Test"
    },
    {
        name: "Academic",
        icon: <FcEngineering size={34} />,
        description: "Academic preparation"
    },
    {
        name: "General",
        icon: <FcEngineering size={34} />,
        description: "General knowledge and aptitude"
    }
];

const Hero = () => {
    return (
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-around gap-8 px-4 py-8 md:px-16 md:py-16">
            <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-medium">Bangladesh's #1 platform for Job, DUET, Academic and General preperation</h2>
                    <p>Abhijan is one of Bangladesh's leading online preparation platforms — an academy, and website with 4K+ Users — covering Job, Duet, Academic and General preparation.</p>

                    {/* Category Selection */}
                <div className="flex flex-col gap-2">
                    <h3>Which exam are you studying for?</h3>
                    <div className="grid grid-cols-2 items-stretch gap-3">
                        {
                            categories.map((category) => (
                                <div key={category.name} className="border-2 border-border px-4 py-2 rounded-lg w-full h-full hover:border-gray-500 cursor-pointer">
                            <FcEngineering  size={34}/>
                            <div className="flex flex-col">
                                <h5 className="font-semibold">{ category.name}</h5>
                            <p className="text-sm text-muted-foreground">{ category.description }</p>
                            </div>
                        </div>
                            )
                        )
                        }
                        
                    </div>
                </div>
            </div>
            {/* This is the why choose us section */}
            <div>
                <div className="bg-card border border-border p-4 rounded-xl mb-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
                    <p className="text-gray-700">Join thousands of students who have successfully prepared for their exams with our comprehensive study materials and expert guidance.</p>
                    </div>


                    {/* Stats Section */}

                <div className="bg-card flex rounded-xl px-6 py-4 gap-4 border border-border text-center grid grid-cols-3">
                    <div className="border-r border-border">
                        <h4 className="font-extrabold text-2xl">4K+</h4>
                        <p className="text-sm text-muted-foreground">active users</p>
                    </div>
                    <div className="border-r border-border">
                        <h4 className="font-extrabold text-2xl">#1</h4>
                        <p className="text-sm text-muted-foreground">education platform</p>
                    </div>
                    <div className="">
                        <h4 className="font-extrabold text-2xl">4+</h4>
                        <p className="text-sm text-muted-foreground">years of experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;