import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10">
                    How Book Courier Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card bg-base-200 shadow-sm">
                        <div className="card-body text-center">
                            <h3 className="text-xl font-semibold">📚 Place Order</h3>
                            <p>Select your books and place an order in minutes.</p>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-sm">
                        <div className="card-body text-center">
                            <h3 className="text-xl font-semibold">🚚 We Deliver</h3>
                            <p>We carefully pack and ship your books nationwide.</p>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-sm">
                        <div className="card-body text-center">
                            <h3 className="text-xl font-semibold">📦 Receive Safely</h3>
                            <p>Get your books safely at your doorstep.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
