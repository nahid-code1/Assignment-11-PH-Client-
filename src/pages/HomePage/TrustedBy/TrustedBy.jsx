import React from 'react';

const TrustedBy = () => {
    return (
        <section className="py-14 bg-base-200">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <h3 className="text-4xl font-bold text-primary">50K+</h3>
                        <p className="mt-2">Books Delivered</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-primary">64</h3>
                        <p className="mt-2">District Coverage</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-primary">10K+</h3>
                        <p className="mt-2">Happy Readers</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-primary">99%</h3>
                        <p className="mt-2">Safe Delivery</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
