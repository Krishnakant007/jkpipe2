// // src/RatingCarousel.jsx

// import React, { useEffect, useRef } from 'react';

// // Sample ratings data
// const ratings = [
//     { name: "Krishna chavan", rating: 5, review: "Excellent product!", time: "a month ago" },
//     { name: "Prakash bhoe", rating: 5, review: "Excellent product!", time: "a month ago" },
//     { name: "Ganesh Singare", rating: 5, review: "Excellent product!", time: "a year ago" },
//     { name: "Ankush Dongre", rating: 4, review: "Very good quality.", time: "2 years ago" },
//     { name: "Rahul Harke", rating: 5, review: "Perfect for my needs!", time: "2 years ago" },
//     { name: "ओमप्रकाश काळे", rating: 4.5, review: "Good service.", time: "4 years ago" },
//     { name: "Pravin Pisore", rating: 5, review: "Highly recommend.", time: "5 years ago" },
//     { name: "Deepak Dholke", rating: 5, review: "Fantastic!", time: "6 years ago" },
//     { name: "Rahul Rathi", rating: 4, review: "Satisfactory.", time: "6 years ago" },
// ];

// const RatingCarousel = () => {
//     const scrollRef = useRef();

//     // Auto-scroll effect
//     useEffect(() => {
//         const scroll = () => {
//             scrollRef.current.scrollLeft += 1; // Move to the right
//             if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
//                 scrollRef.current.scrollLeft = 0; // Reset to the start
//             }
//         };

//         const interval = setInterval(scroll, 30); // Adjust the speed by changing the interval time

//         return () => clearInterval(interval); // Clean up interval on unmount
//     }, []);

//     return (
//         <div className="relative py-12 bg-slate-200">
//             <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Customer Ratings</h2>
//             <div
//                 ref={scrollRef}
//                 className="overflow-hidden whitespace-nowrap border-b border-gray-300"
//                 style={{ scrollBehavior: 'smooth', display: 'flex', alignItems: 'center' }}
//             >
//                 {ratings.map((rating, index) => (
//                     <div key={index} className="inline-block p-4 mx-2 bg-white rounded-lg shadow-lg min-w-[250px]">
//                         <div className="flex items-center mb-2">
//                             {/* Star rating */}
//                             {[...Array(5)].map((_, starIndex) => (
//                                 <span key={starIndex} className={`text-yellow-500 ${starIndex < rating.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
//                                     ★
//                                 </span>
//                             ))}
//                             <span className="ml-2 text-gray-600">{rating.rating} out of 5</span>
//                         </div>
//                         <h3 className="font-semibold">{rating.name}</h3>
//                         <p className="text-gray-700">{rating.review}</p>
//                         <p className="text-gray-500 text-sm">{rating.time}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RatingCarousel;



// import { useEffect, useRef } from 'react';

// // Sample ratings data
// const ratings = [
//     { name: "Krishna Chavan", rating: 5, review: "Great products!", time: "a month ago" },
//     { name: "Prakash Bhoe", rating: 5, review: "Strong products!", time: "a month ago" },
//     { name: "Ganesh Singare", rating: 5, review: "Excellent product!", time: "a year ago" },
//     { name: "Ankush Dongre", rating: 4, review: "Very good quality.", time: "2 years ago" },
//     { name: "Rahul Harke", rating: 5, review: "Perfect for my needs!", time: "2 years ago" },
//     { name: "ओमप्रकाश काळे", rating: 4, review: "Good service.", time: "4 years ago" },
//     { name: "Pravin Pisore", rating: 5, review: "Highly recommend.", time: "5 years ago" },
//     { name: "Deepak Dholke", rating: 5, review: "Fantastic!", time: "6 years ago" },
//     { name: "Rahul Rathi", rating: 4, review: "Satisfactory.", time: "6 years ago" },
// ];

// const RatingCarousel = () => {
//     const scrollRef = useRef();

//     // Auto-scroll effect
//     useEffect(() => {
//         const scroll = () => {
//             scrollRef.current.scrollLeft += 1.9; // Increase scroll speed slightly
//             if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
//                 scrollRef.current.scrollLeft = 0; // Reset to the start
//             }
//         };

//         const interval = setInterval(scroll, 20); // Adjusted scroll speed
//         return () => clearInterval(interval); // Clean up interval on unmount
//     }, []);

//     const renderStars = (rating) => {
//         const stars = [];
//         for (let i = 0; i < 5; i++) {
//             if (i < Math.floor(rating)) {
//                 stars.push(<span key={i} className="text-yellow-500">★</span>);
//             } else if (i < rating) {
//                 stars.push(<span key={i} className="text-yellow-500">★</span>); // Full star for half ratings
//             } else {
//                 stars.push(<span key={i} className="text-gray-300">★</span>);
//             }
//         }
//         return stars;
//     };

//     return (
//         <div className="relative py-12 px-5 bg-slate-200">
//             <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Customer Ratings</h2>
//             <div
//                 ref={scrollRef}
//                 className="overflow-hidden whitespace-nowrap border-b border-gray-300"
//                 style={{ scrollBehavior: 'smooth', display: 'flex', alignItems: 'center' }}
//             >
//                 {ratings.map((rating, index) => (
//                     <div key={index} className="inline-block p-4 mx-2 bg-white rounded-lg shadow-lg min-w-[250px]">
//                         <div className="flex items-center mb-2">
//                             {/* Render stars based on rating */}
//                             {renderStars(rating.rating)}
//                             <span className="ml-2 text-gray-600">{rating.rating} out of 5</span>
//                         </div>
//                         <h3 className="font-semibold">{rating.name}</h3>
//                         <p className="text-gray-700">{rating.review}</p>
//                         <p className="text-gray-500 text-sm">{rating.time}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RatingCarousel;



// import { useEffect, useRef } from 'react';

// // Sample ratings data
// const ratings = [
//     { name: "Krishna Chavan", rating: 5, review: "Great products!", time: "a month ago" },
//     { name: "Prakash Bhoe", rating: 5, review: "Strong products!", time: "a month ago" },
//     { name: "Ganesh Singare", rating: 5, review: "Excellent product!", time: "a year ago" },
//     { name: "Ankush Dongre", rating: 4, review: "Very good quality.", time: "2 years ago" },
//     { name: "Rahul Harke", rating: 5, review: "Perfect for my needs!", time: "2 years ago" },
//     { name: "ओमप्रकाश काळे", rating: 4, review: "Good service.", time: "4 years ago" },
//     { name: "Pravin Pisore", rating: 5, review: "Highly recommend.", time: "5 years ago" },
//     { name: "Deepak Dholke", rating: 5, review: "Fantastic!", time: "6 years ago" },
//     { name: "Rahul Rathi", rating: 4, review: "Satisfactory.", time: "6 years ago" },
// ];

// const RatingCarousel = () => {
//     const scrollRef = useRef();

//     const renderStars = (rating) => {
//         return Array.from({ length: 5 }, (_, i) => (
//             <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
//                 ★
//             </span>
//         ));
//     };

//     // Duplicate ratings array to create an infinite scroll effect
//     const ratingsList = [...ratings, ...ratings];

//     return (
//         <div className="relative py-12 px-5 bg-slate-200">
//             <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Customer Ratings</h2>
//             <div
//                 ref={scrollRef}
//                 className="overflow-hidden whitespace-nowrap border-b border-gray-300"
//                 style={{ display: 'flex', alignItems: 'center' }}
//             >
//                 <div className="flex animate-scroll">
//                     {ratingsList.map((rating, index) => (
//                         <div key={index} className="inline-block p-4 mx-2 bg-white rounded-lg shadow-lg min-w-[250px]">
//                             <div className="flex items-center mb-2">
//                                 {renderStars(rating.rating)}
//                                 <span className="ml-2 text-gray-600">{rating.rating} out of 5</span>
//                             </div>
//                             <h3 className="font-semibold">{rating.name}</h3>
//                             <p className="text-gray-700">{rating.review}</p>
//                             <p className="text-gray-500 text-sm">{rating.time}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Add this CSS for the scroll effect */}
//             <style jsx>{`
//                 .animate-scroll {
//                     animation: scroll 15s linear infinite;
//                 }

//                 @keyframes scroll {
//                     0% {
//                         transform: translateX(0);
//                     }
//                     100% {
//                         transform: translateX(-50%);
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default RatingCarousel;



import { useRef } from 'react';

// Sample ratings data
const ratings = [
    { name: "Krishna Chavan", rating: 5, review: "Great products!", time: "a month ago" },
    { name: "Prakash Bhoe", rating: 5, review: "Strong products!", time: "a month ago" },
    { name: "Ganesh Singare", rating: 5, review: "Excellent product!", time: "a year ago" },
    { name: "Ankush Dongre", rating: 4, review: "Very good quality.", time: "2 years ago" },
    { name: "Rahul Harke", rating: 5, review: "Perfect for my needs!", time: "2 years ago" },
    { name: "ओमप्रकाश काळे", rating: 4, review: "Good service.", time: "4 years ago" },
    { name: "Pravin Pisore", rating: 5, review: "Highly recommend.", time: "5 years ago" },
    { name: "Deepak Dholke", rating: 5, review: "Fantastic!", time: "6 years ago" },
    { name: "Rahul Rathi", rating: 4, review: "Satisfactory.", time: "6 years ago" },
];

const RatingCarousel = () => {
    const scrollRef = useRef();

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
                ★
            </span>
        ));
    };

    // Duplicate ratings array to create an infinite scroll effect
    const ratingsList = [...ratings, ...ratings];

    return (
        <div className="relative py-12 px-5 bg-slate-200">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Customer Ratings</h2>
            <div
                ref={scrollRef}
                className="overflow-hidden whitespace-nowrap border-b border-gray-300"
                style={{ display: 'flex', alignItems: 'center' }}
            >
                <div className="flex animate-scroll">
                    {ratingsList.map((rating, index) => (
                        <div key={index} className="inline-block p-6 mx-4 bg-white rounded-lg shadow-lg min-w-[300px]">
                            <div className="flex items-center mb-2">
                                {renderStars(rating.rating)}
                                <span className="ml-2 text-gray-600">{rating.rating} out of 5</span>
                            </div>
                            <h3 className="font-semibold">{rating.name}</h3>
                            <p className="text-gray-700">{rating.review}</p>
                            <p className="text-gray-500 text-sm">{rating.time}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add this CSS for the scroll effect */}
            <style jsx>{`
                .animate-scroll {
                    animation: scroll 40s linear infinite; /* Slowed down the scroll speed to 30s */
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
};

export default RatingCarousel;
