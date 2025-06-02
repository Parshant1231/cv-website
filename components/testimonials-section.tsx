// import { Star } from "lucide-react"

// interface Testimonial {
//   id: number
//   name: string
//   position: string
//   company: string
//   content: string
//   rating: number
// }

// export default function TestimonialsSection() {
//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: "John Smith",
//       position: "CEO",
//       company: "TechCorp",
//       content:
//         "Parshant delivered an exceptional website for our company. His MERN stack expertise helped us create a seamless user experience with robust backend functionality.",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "Sarah Johnson",
//       position: "Marketing Director",
//       company: "CreativeMinds",
//       content:
//         "Working with Parshant was a pleasure. He understood our requirements perfectly and delivered a beautiful, responsive website that exceeded our expectations.",
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "Michael Brown",
//       position: "Founder",
//       company: "StartupLaunch",
//       content:
//         "Parshant's technical skills and attention to detail are impressive. He built our web application from scratch and implemented all the complex features we needed.",
//       rating: 4,
//     },
//   ]

//   return (
//     <div className="mt-16">
//       <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-3 mb-8 inline-block">Testimonials</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="bg-[#222] p-6 rounded-lg">
//             <div className="flex mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`w-4 h-4 ${i < testimonial.rating ? "text-[#6366f1] fill-[#6366f1]" : "text-gray-600"}`}
//                 />
//               ))}
//             </div>
//             <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
//             <div className="flex items-center">
//               <div className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-[#6366f1] font-bold mr-3">
//                 {testimonial.name.charAt(0)}
//               </div>
//               <div>
//                 <h4 className="text-white font-medium">{testimonial.name}</h4>
//                 <p className="text-gray-400 text-sm">
//                   {testimonial.position}, {testimonial.company}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
