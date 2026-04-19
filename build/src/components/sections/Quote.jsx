import React from 'react';

const Quote = () => {
  return (
    <section className="py-32 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-medium leading-[1.3] tracking-tight">
          <span className="text-white opacity-100">
            Creating products that not only look great but drive real
          </span>{' '}
          <span className="text-white opacity-100 font-bold">results.</span>{' '}
          <span className="text-white opacity-40">
            No more one-sided wins — I create experiences that delight users and deliver business impact.
          </span>{' '}
          <span className="text-white opacity-100 font-bold">
            Let's build something that scales.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Quote;
