import React, { useEffect, useRef } from 'react';

const CoupleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen items-top justify-center pt-16 opacity-0 bg-hero-pattern bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://serandev.github.io/serena-invitation/20250424_SR_SJ_0.jpg')",
      }}
    >
      <div className="container mx-auto mt-10 px-9 py-3 bg-background/70 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          {/* <p className="text-accent font-light mb-4 tracking-widest"> */}
            {/* <strong>저희 결혼합니다</strong> */}
          {/* </p> */}
          <h1 className="font-himelody text-5xl md:text-7xl text-primary mb-8">
            저희 결혼합니다
          </h1>
          <p className="text-lg md:text-xl text-secondary">
            9월 20일 토요일
            <br />
            서울 수서에서 결혼합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
