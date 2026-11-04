const reviews = [
    { name: "Laxman", school: "BUET", comment: "This is a awesome for any kind of student"},
    { name: "Rana", school: "DU", comment: "This is a awesome for any kind of student"},
    { name: "Sakib", school: "NSU", comment: "This is a awesome for any kind of student"},
    { name: "Tarek", school: "IUT", comment: "This is a awesome for any kind of student"},
    { name: "Rifat", school: "AIUB", comment: "This is a awesome for any kind of student"},
    { name: "Rasel", school: "BRAC", comment: "This is a awesome for any kind of student"},
    { name: "Rafi", school: "NSU", comment: "This is a awesome for any kind of student"},
]

const Review = () => {
    return (
        <section className="">
            <h3 className="text-center text-2xl">Review</h3>
            <div className="flex flex-wrap justify-center">
                    {
                        reviews.map((item) => (
                            <div key="item.name" className="bg-popup p-4 m-2 text-foreground border border-border rounded">
                                <div className="flex flex-wrap item-around ">
                                    <span>{item.name}</span>
                                    <span>{item.school}</span>
                                </div>
                                <div>{item.comment}</div>
                            </div>
                        ))
                    }
            </div>
        </section>
    )
}

export default Review;