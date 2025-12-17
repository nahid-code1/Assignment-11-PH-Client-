import React from 'react';

const ChooseUs = () => {
    const features = [
        {
            title: "Book-Safe Packaging",
            desc: "We use special packaging to keep your books safe from damage."
        },
        {
            title: "Fast Delivery",
            desc: "Quick and reliable delivery across all 64 districts."
        },
        {
            title: "Affordable Cost",
            desc: "Courier rates designed especially for book lovers."
        },
        {
            title: "Trusted Service",
            desc: "Thousands of readers and bookstores trust BookCourier."
        }
    ];

    return (
        <div>
            <section className="my-20 w-11/12 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Why Choose Book Courier
                </h2>
                <p className="text-center text-base-content/70 max-w-2xl mx-auto mb-12">
                    This section explains why people should choose BookCourier instead of
                    other courier services when sending or receiving books.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="
              card bg-base-100 shadow-md p-6
              transition-all duration-300 ease-in-out
              hover:-translate-y-2 hover:shadow-xl
            "
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-base-content/70">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default ChooseUs;