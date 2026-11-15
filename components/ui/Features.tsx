const Features = () => {
    return (
        <div className="bg-card border-t border-border py-5">
            <h2 className="text-3xl font-bold text-center text-gray-900">Abhijan এ যা যা থাকছে</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">প্রিলিমিনারি</h3>
                    <p className="text-gray-700">প্রিলিমিনারি পরীক্ষার জন্য প্রস্তুতি।</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">লিখিত</h3>
                    <p className="text-gray-700">লিখিত পরীক্ষার জন্য প্রস্তুতি।</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">ভাইভা</h3>
                    <p className="text-gray-700">ভাইভা পরীক্ষার জন্য প্রস্তুতি।</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">বোর্ড প্রশ্ন</h3>
                    <p className="text-gray-700">বোর্ড প্রশ্নের জন্য প্রস্তুতি।</p>
                </div>
            </div>
        </div>
    )
}

export default Features;