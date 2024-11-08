// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo2 = () => {
//     const sectionsRef = useRef([]);
//     const [expanded, setExpanded] = useState({ mission: false });
//     const contentRefs = useRef({});

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     const toggleExpand = (section) => {
//         setExpanded((prevState) => {
//             const isExpanded = !prevState[section];

//             if (contentRefs.current[section]) {
//                 gsap.to(contentRefs.current[section], {
//                     height: isExpanded ? "auto" : 0,
//                     opacity: isExpanded ? 1 : 0,
//                     duration: 0.5,
//                     ease: "power3.inOut",
//                 });
//             }

//             return { ...prevState, [section]: isExpanded };
//         });
//     };

//     return (
//         <section className="bg-cover bg-center py-12 mt-24" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/mission-business-concept-finacial-success-chart-concept-virtual-screen-abstract-business-background_161452-12176.jpg?semt=ais_hybrid')` }}>
//             <div className="container mx-auto p-8">
//                 {/* Our Mission */}
//                 <div className="bg-white/90 rounded-xl p-6 mb-8 shadow-xl" ref={(el) => (sectionsRef.current[0] = el)}>
//                 <div className="mb-10 flex justify-center">
//                 <video autoPlay muted loop className="h-24 rounded-full w-64">
//                     <source src="mission.mp4" type="video/mp4" />
//                 </video>
//             </div>
//                     <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
//                     <p className="text-lg text-gray-700 mb-4">
//                         Our mission is to provide high-quality products that exceed expectations and contribute to sustainable growth...
//                     </p>
//                     <div
//                         className="overflow-hidden"
//                         style={{ height: 0, opacity: 0 }}
//                         ref={(el) => (contentRefs.current.mission = el)}
//                     >
//                         <p className="text-lg text-gray-700 mb-4">
//                             We aim to continuously innovate and enhance our offerings to meet the evolving needs of our customers...
//                         </p>
//                     </div>
//                     <button
//                         onClick={() => toggleExpand("mission")}
//                         className="flex items-center justify-center gap-2 py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                     >
//                         {expanded.mission ? "View Less" : "View More"}
//                         <svg
//                             className={`w-5 h-5 transition-transform duration-300 ${expanded.mission ? "rotate-180" : ""}`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                     </button>
//                 </div>
                
                
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo2;



// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo2 = () => {
//     const sectionsRef = useRef([]);
//     const [showMore, setShowMore] = useState(false);

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="py-12 mt-24">
//             {/* Title outside image */}
//             <div className="text-center mb-8">
//                 <h3 className="text-4xl font-bold text-gray-800">Our Mission</h3>
//                 <p className="text-lg text-gray-600 mt-2">Dedicated to delivering excellence and sustainability in all we do.</p>
//             </div>

//             {/* Mission content with background image */}
//             <div
//                 className="bg-cover bg-center py-12"
//                 style={{
//                     backgroundImage: `url('https://img.freepik.com/premium-photo/mission-business-concept-finacial-success-chart-concept-virtual-screen-abstract-business-background_161452-12176.jpg?semt=ais_hybrid')`,
//                 }}
//             >
//                 <div className="container mx-auto p-8">
//                     {/* Mission Section */}
//                     <div
//                         className="bg-white/90 rounded-xl p-6 shadow-xl"
//                         ref={(el) => (sectionsRef.current[0] = el)}
//                     >
//                         <div className="mb-10 flex justify-center">
//                             <video autoPlay muted loop className="h-24 rounded-full w-64">
//                                 <source src="mission.mp4" type="video/mp4" />
//                             </video>
//                         </div>
//                         <p className="text-lg text-gray-700 mb-4">
//                             Our mission is to provide high-quality products that exceed expectations and contribute to
//                             sustainable growth. We believe in the power of innovation and are committed to pushing the
//                             boundaries of what's possible to serve our clients with unmatched excellence.
//                         </p>
                        
//                         {/* Additional content visible on larger screens or with 'Show More' on mobile */}
//                         <div className={`text-lg text-gray-700 mb-4 ${showMore ? 'block' : 'hidden lg:block'}`}>
//                             By fostering a culture of integrity, dedication, and continuous improvement, we aim to create
//                             products that not only meet industry standards but also inspire confidence in every customer.
//                             With a focus on sustainability, we work diligently to enhance our processes and reduce our
//                             environmental footprint, contributing positively to communities and the environment.
//                         </div>

//                         {/* Show More button for mobile screens */}
//                         {!showMore && (
//                             <button
//                                 onClick={() => setShowMore(true)}
//                                 className="block lg:hidden py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                             >
//                                 Show More
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo2;




// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo2 = () => {
//     const sectionsRef = useRef([]);
//     const [showMore, setShowMore] = useState(false);
//     const [bgImage, setBgImage] = useState(null);
//     const [imageName, setImageName] = useState("");

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setBgImage(imageUrl);
//             setImageName(file.name);
//         }
//     };

//     return (
//         <section className="py-12 mt-24">
//             {/* Title outside image */}
//             <div className="text-center mb-8">
//                 <h3 className="text-4xl font-bold text-gray-800">Our Mission</h3>
//                 <p className="text-lg text-gray-600 mt-2">Dedicated to delivering excellence and sustainability in all we do.</p>
//             </div>

//             {/* Mission content with dynamic background image */}
//             <div
//                 className="bg-cover bg-center py-12"
//                 style={{
//                     backgroundImage: bgImage ? `url(${bgImage})` : "none",
//                     backgroundColor: bgImage ? "transparent" : "#ffffff"
//                 }}
//             >
//                 <div className="container mx-auto p-8">
//                     {/* Mission Section */}
//                     <div
//                         className="bg-white/90 rounded-xl p-6 shadow-xl"
//                         ref={(el) => (sectionsRef.current[0] = el)}
//                     >
//                         <div className="mb-10 flex justify-center">
//                             <video autoPlay muted loop className="h-24 rounded-full w-64">
//                                 <source src="mission.mp4" type="video/mp4" />
//                             </video>
//                         </div>
//                         <p className="text-lg text-gray-700 mb-4">
//                             Our mission is to provide high-quality products that exceed expectations and contribute to
//                             sustainable growth. We believe in the power of innovation and are committed to pushing the
//                             boundaries of what's possible to serve our clients with unmatched excellence.
//                         </p>
                        
//                         {/* Additional content visible on larger screens or with 'Show More' on mobile */}
//                         <div className={`text-lg text-gray-700 mb-4 ${showMore ? 'block' : 'hidden lg:block'}`}>
//                             By fostering a culture of integrity, dedication, and continuous improvement, we aim to create
//                             products that not only meet industry standards but also inspire confidence in every customer.
//                             With a focus on sustainability, we work diligently to enhance our processes and reduce our
//                             environmental footprint, contributing positively to communities and the environment.
//                         </div>

//                         {/* Show More button for mobile screens */}
//                         {!showMore && (
//                             <button
//                                 onClick={() => setShowMore(true)}
//                                 className="block lg:hidden py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                             >
//                                 Show More
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Upload Image Option */}
//             <div className="mt-6 text-center">
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg"
//                 />
//                 {/* Show selected image name below */}
//                 {imageName && <p className="mt-3 text-lg text-gray-700">Background Image: {imageName}</p>}
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo2;




// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo2 = () => {
//     const sectionsRef = useRef([]);
//     const [showMore, setShowMore] = useState(false);
//     const [bgImage, setBgImage] = useState(null);
//     const [imageName, setImageName] = useState("");

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setBgImage(imageUrl);
//             setImageName(file.name);
//         }
//     };

//     return (
//         <section className="py-12 mt-24">
//             {/* Title outside image */}
//             <div className="text-center mb-8">
//                 <h3 className="text-4xl font-bold text-gray-800">Our Mission</h3>
//                 <p className="text-lg text-gray-600 mt-2">Dedicated to delivering excellence and sustainability in all we do.</p>
//             </div>

//             {/* Mission content with dynamic background image */}
//             <div
//                 className="bg-cover bg-center py-12"
//                 style={{
//                     backgroundImage: bgImage ? `url(${bgImage})` : "none",
//                     backgroundColor: bgImage ? "transparent" : "#ffffff"
//                 }}
//             >
//                 <div className="container mx-auto p-8">
//                     {/* Mission Section */}
//                     <div
//                         className="bg-white/90 rounded-xl p-6 shadow-xl"
//                         ref={(el) => (sectionsRef.current[0] = el)}
//                     >
//                         <div className="mb-10 flex justify-center">
//                             <video autoPlay muted loop className="h-24 rounded-full w-64">
//                                 <source src="mission.mp4" type="video/mp4" />
//                             </video>
//                         </div>
//                         <p className="text-lg text-gray-700 mb-4">
//                             Our mission is to provide high-quality products that exceed expectations and contribute to
//                             sustainable growth. We believe in the power of innovation and are committed to pushing the
//                             boundaries of what's possible to serve our clients with unmatched excellence.
//                         </p>
                        
//                         {/* Additional content visible on larger screens or with 'Show More' on mobile */}
//                         <div className={`text-lg text-gray-700 mb-4 ${showMore ? 'block' : 'hidden lg:block'}`}>
//                             By fostering a culture of integrity, dedication, and continuous improvement, we aim to create
//                             products that not only meet industry standards but also inspire confidence in every customer.
//                             With a focus on sustainability, we work diligently to enhance our processes and reduce our
//                             environmental footprint, contributing positively to communities and the environment.
//                         </div>

//                         {/* Show More button for mobile screens */}
//                         {!showMore && (
//                             <button
//                                 onClick={() => setShowMore(true)}
//                                 className="block lg:hidden py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                             >
//                                 Show More
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Upload Image Option */}
//             <div className="mt-6 text-center">
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg"
//                 />
//                 {/* Show selected image name below */}
//                 {imageName && <p className="mt-3 text-lg text-gray-700">Background Image: {imageName}</p>}
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo2;


// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo2 = () => {
//     const sectionsRef = useRef([]);
//     const [showMore, setShowMore] = useState(false);

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="py-12 mt-24">
//             {/* Title */}
//             <div className="text-center mb-8">
//                 <h3 className="text-4xl font-bold text-gray-800">Our Mission</h3>
//                 <p className="text-lg text-gray-600 mt-2">Dedicated to delivering excellence and sustainability in all we do.</p>
//             </div>

//             {/* Full-Width Image */}
//             <div className="w-full overflow-hidden mb-8">
//                 <img
//                     src="img6.jpg"
//                     alt="Our Mission Background"
//                     className="w-full h-auto object-cover"
//                 />
//             </div>

//             {/* Mission Section */}
//             <div className="container mx-auto p-8">
//                 <div
//                     className="rounded-xl p-6 shadow-xl"
//                     ref={(el) => (sectionsRef.current[0] = el)}
//                 >
//                     <div className="mb-10 flex justify-center">
//                         <video autoPlay muted loop className="h-24 rounded-full w-64">
//                             <source src="mission.mp4" type="video/mp4" />
//                         </video>
//                     </div>
//                     <p className="text-lg text-gray-700 mb-4">
//                         Our mission is to provide high-quality products that exceed expectations and contribute to
//                         sustainable growth. We believe in the power of innovation and are committed to pushing the
//                         boundaries of whats possible to serve our clients with unmatched excellence.
//                     </p>
                    
//                     {/* Additional content visible on larger screens or with 'Show More' on mobile */}
//                     <div className={`text-lg text-gray-700 mb-4 ${showMore ? 'block' : 'hidden lg:block'}`}>
//                         By fostering a culture of integrity, dedication, and continuous improvement, we aim to create
//                         products that not only meet industry standards but also inspire confidence in every customer.
//                         With a focus on sustainability, we work diligently to enhance our processes and reduce our
//                         environmental footprint, contributing positively to communities and the environment.
//                     </div>

//                     {/* Show More button for mobile screens */}
//                     {!showMore && (
//                         <button
//                             onClick={() => setShowMore(true)}
//                             className="block lg:hidden py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                         >
//                             Show More
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo2;





// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo2 = () => {
//     const sectionsRef = useRef([]);
//     const [showMore, setShowMore] = useState(false);

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="py-12 mt-24">
//             {/* Title */}
//             <div className="text-center mb-8">
//                 <h3 className="text-4xl font-bold text-gray-800">Our Mission</h3>
//                 <div className="mb-10 flex justify-center">
//                         <video autoPlay muted loop className="h-24 rounded-full w-64">
//                             <source src="mission.mp4" type="video/mp4" />
//                         </video>
//                     </div>
//                 <p className="text-lg text-gray-600 mt-2">Dedicated to delivering excellence and sustainability in all we do.</p>
//             </div>

//             {/* Full-Width Image with max width for desktop */}
//             <div className="w-full max-w-6xl mx-auto overflow-hidden mb-8 rounded-2xl">
//                 <img
//                     src="img6.jpg"
//                     alt="Our Mission Background"
//                     className="w-full h-auto object-cover"
//                 />
//             </div>

//             {/* Mission Section */}
//             <div className="container mx-auto p-8">
//                 <div
//                     className="rounded-xl p-6 shadow-xl"
//                     ref={(el) => (sectionsRef.current[0] = el)}
//                 >
                    
                    
//                     {/* Updated Mission Content */}
//                     <p className="text-lg text-gray-700 mb-4 font-bold">
//                         We are producing high-quality HDPE pipes, fittings, and sprinkler systems. Our HDPE pipes range from 20mm to 200mm across all pressure classes and are manufactured in PE 80 and PE 100 grades, adhering to international standards such as IS:4984:2016.
//                     </p>
//                     <p className="text-lg text-gray-700 mb-4  font-bold">
//                         We manufacture HDPE pipes in sizes from 63mm to 75mm with different pressure classes. These pipes are made from high-grade HDPE polymers and produced using fully automated machines. They are equipped with couplers and welded using the latest socket fusion technology, ensuring robust connections.
//                     </p>
//                     <p className="text-lg text-gray-700 mb-4 font-bold">
//                         Our HDPE coils are properly stripped and packed in woven sack fabric for added safety. Each product is line-tested by our expert technicians at maximum pressure ratings for HDPE sprinkler applications, ensuring reliability and quality.
//                     </p>
                    
//                     {/* Additional content visible on larger screens or with 'Show More' on mobile */}
//                     <div className='text-lg text-gray-700 mb-4  font-bold '>
//                         Our focus on quality, sustainability, and innovation allows us to provide products that meet industry standards and exceed customer expectations.
//                     </div>

//                     {/* Show More button for mobile screens */}
//                     {!showMore && (
//                         <button
//                             onClick={() => setShowMore(true)}
//                             className="block lg:hidden py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                         >
//                             Show More
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo2;




// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo2 = () => {
//     const sectionsRef = useRef([]);
//     const [showMore, setShowMore] = useState(false);

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="py-12 mt-24">
//             {/* Title */}
//             <div className="text-center mb-8">
//                 <h3 className="text-4xl font-bold text-gray-800">Our Mission</h3>
//                 <div className="mb-10 flex justify-center">
//                     <video autoPlay muted loop className="h-24 rounded-full w-64">
//                         <source src="mission.mp4" type="video/mp4" />
//                     </video>
//                 </div>
//                 <p className="text-lg text-gray-600 mt-2">Dedicated to delivering excellence and sustainability in all we do.</p>
//             </div>

//             {/* Full-Width Image with Fixed Background */}
//             <div className="w-full max-w-6xl mx-auto overflow-hidden mb-8 rounded-2xl relative" style={{ height: "400px" }}>
//                 {/* Background image with fixed position */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
//                      style={{ backgroundImage: "url('img6.jpg')" }} />
//             </div>

//             {/* Mission Section */}
//             <div className="container mx-auto p-8">
//                 <div
//                     className="rounded-xl p-6 shadow-xl"
//                     ref={(el) => (sectionsRef.current[0] = el)}
//                 >
//                     {/* Updated Mission Content */}
//                     <p className="text-lg text-gray-700 mb-4 font-bold">
//                         We are producing high-quality HDPE pipes, fittings, and sprinkler systems. Our HDPE pipes range from 20mm to 200mm across all pressure classes and are manufactured in PE 80 and PE 100 grades, adhering to international standards such as IS:4984:2016.
//                     </p>
//                     <p className="text-lg text-gray-700 mb-4 font-bold">
//                         We manufacture HDPE pipes in sizes from 63mm to 75mm with different pressure classes. These pipes are made from high-grade HDPE polymers and produced using fully automated machines. They are equipped with couplers and welded using the latest socket fusion technology, ensuring robust connections.
//                     </p>
//                     <p className="text-lg text-gray-700 mb-4 font-bold">
//                         Our HDPE coils are properly stripped and packed in woven sack fabric for added safety. Each product is line-tested by our expert technicians at maximum pressure ratings for HDPE sprinkler applications, ensuring reliability and quality.
//                     </p>

//                     {/* Additional content visible on larger screens or with 'Show More' on mobile */}
//                     <div className="text-lg text-gray-700 mb-4 font-bold">
//                         Our focus on quality, sustainability, and innovation allows us to provide products that meet industry standards and exceed customer expectations.
//                     </div>

//                     {/* Show More button for mobile screens */}
//                     {!showMore && (
//                         <button
//                             onClick={() => setShowMore(true)}
//                             className="block lg:hidden py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                         >
//                             Show More
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo2;



// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CompanyInfo2 = () => {
//     const sectionsRef = useRef([]);
//     const [showMore, setShowMore] = useState(false);

//     useEffect(() => {
//         sectionsRef.current.forEach((section) => {
//             gsap.fromTo(
//                 section,
//                 { opacity: 0, y: 50 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: section,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse",
//                     },
//                 }
//             );
//         });
//     }, []);

//     return (
//         <section className="py-12 mt-24">
//             {/* Title */}
//             <div className="text-center mb-8">
//                 <h3 className="text-4xl font-bold text-blue-600">Our Mission</h3>
//                 <div className="mb-10 flex justify-center">
//                     <video autoPlay muted loop className="h-24 rounded-full w-64">
//                         <source src="mission.mp4" type="video/mp4" />
//                     </video>
//                 </div>
//                 <p className="text-lg text-gray-600 mt-2">Dedicated to delivering excellence and sustainability in all we do.</p>
//             </div>

//             {/* Full-Width Image with Fixed Background */}
//             <div className="w-full max-w-full mx-auto overflow-hidden mb-8 rounded-2xl relative" style={{ height: "500px" }}>
//                 {/* Background image with fixed position */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
//                      style={{ backgroundImage: "url('img6.jpg')" }} />
//             </div>

//             {/* Mission Section */}
//             <div className="container mx-auto p-8">
//                 <div
//                     className="rounded-xl p-6 shadow-xl"
//                     ref={(el) => (sectionsRef.current[0] = el)}
//                 >
//                     {/* Updated Mission Content */}
//                     <p className="text-lg text-gray-700 mb-4 font-bold">
//                         We are producing high-quality HDPE pipes, fittings, and sprinkler systems. Our HDPE pipes range from 20mm to 200mm across all pressure classes and are manufactured in PE 80 and PE 100 grades, adhering to international standards such as IS:4984:2016.
//                     </p>
//                     <p className="text-lg text-gray-700 mb-4 font-bold">
//                         We manufacture HDPE pipes in sizes from 63mm to 75mm with different pressure classes. These pipes are made from high-grade HDPE polymers and produced using fully automated machines. They are equipped with couplers and welded using the latest socket fusion technology, ensuring robust connections.
//                     </p>
//                     <p className="text-lg text-gray-700 mb-4 font-bold">
//                         Our HDPE coils are properly stripped and packed in woven sack fabric for added safety. Each product is line-tested by our expert technicians at maximum pressure ratings for HDPE sprinkler applications, ensuring reliability and quality.
//                     </p>

//                     {/* Additional content visible on larger screens or with 'Show More' on mobile */}
//                     <div className="text-lg text-gray-700 mb-4 font-bold">
//                         Our focus on quality, sustainability, and innovation allows us to provide products that meet industry standards and exceed customer expectations.
//                     </div>

//                     {/* Show More button for mobile screens */}
//                     {!showMore && (
//                         <button
//                             onClick={() => setShowMore(true)}
//                             className="block lg:hidden py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                         >
//                             Show More
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CompanyInfo2;



import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyInfo2 = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="py-12 mt-24">
            {/* Title */}
            <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-blue-600">Our Mission</h3>
                <div className="mb-10 flex justify-center">
                    <video autoPlay muted loop className="h-24 rounded-full w-64">
                        <source src="mission.mp4" type="video/mp4" />
                    </video>
                </div>
                {/* Updated bold and larger text */}
                <p className="text-xl font-bold text-gray-600 mt-2">Dedicated to delivering excellence and sustainability in all we do.</p>
            </div>

            {/* Full-Width Image with Fixed Background */}
            <div className="w-full max-w-full mx-auto overflow-hidden mb-8 rounded-2xl relative" style={{ height: "500px" }}>
                {/* Background image with fixed position */}
                <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed" 
                     style={{ backgroundImage: "url('img6.jpg')" }} />
            </div>

            {/* Mission Section */}
            <div className="container mx-auto p-8">
                <div
                    className="rounded-xl p-6 shadow-xl"
                    ref={(el) => (sectionsRef.current[0] = el)}
                >
                    {/* Mission Content */}
                    <p className="text-lg text-gray-700 mb-4 font-bold">
                        We are producing high-quality HDPE pipes, fittings, and sprinkler systems. Our HDPE pipes range from 20mm to 200mm across all pressure classes and are manufactured in PE 80 and PE 100 grades, adhering to international standards such as IS:4984:2016.
                    </p>
                    <p className="text-lg text-gray-700 mb-4 font-bold">
                        We manufacture HDPE pipes in sizes from 63mm to 75mm with different pressure classes. These pipes are made from high-grade HDPE polymers and produced using fully automated machines. They are equipped with couplers and welded using the latest socket fusion technology, ensuring robust connections.
                    </p>
                    <p className="text-lg text-gray-700 mb-4 font-bold">
                        Our HDPE coils are properly stripped and packed in woven sack fabric for added safety. Each product is line-tested by our expert technicians at maximum pressure ratings for HDPE sprinkler applications, ensuring reliability and quality.
                    </p>

                    {/* Additional content visible on larger screens */}
                    <div className="text-lg text-gray-700 mb-4 font-bold">
                        Our focus on quality, sustainability, and innovation allows us to provide products that meet industry standards and exceed customer expectations.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo2;
