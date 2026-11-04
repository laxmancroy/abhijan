const Features = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-900">Abhijan এ যা যা থাকছে</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">কোর্স</h3>
                    <p className="text-gray-700">ডিপ্লোমা জব প্রিপারেশন এর জন্য বিভিন্ন কোর্স।</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">মক টেস্ট</h3>
                    <p className="text-gray-700">ডিপ্লোমা জব প্রিপারেশন এর জন্য মক টেস্ট।</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">ফ্রি রিসোর্স</h3>
                    <p className="text-gray-700">ডিপ্লোমা জব প্রিপারেশন এর জন্য ফ্রি রিসোর্স।</p>
                </div>
            </div>
        </div>
    )
}

export default Features;