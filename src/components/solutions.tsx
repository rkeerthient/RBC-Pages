// import * as React from "react";

import * as React from "react";

// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/line-clamp'),
//     ],
//   }
//   ```
// */
// const posts = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
// ];

// export default function solutions(inpData: any) {
//   let data = inpData.inpData;
//   let clData = data.c_associatedSolutions;
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto  px-6 lg:px-8">
//         <div className="mx-auto  ">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Solutions
//           </h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600">
//             Learn how to grow your business with our expert advice.
//           </p>
//           <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 grid grid-cols-3 gap-8">
//             {clData &&
//               clData.map((post: any) => (
//                 <article
//                   key={post.id}
//                   className="flex max-w-xl flex-col items-start justify-between"
//                 >
//                   <div className="relative mt-8 flex items-center gap-x-4">
//                     {post.photoGallery && (
//                       <img
//                         src={post.photoGallery[0].image.url}
//                         alt=""
//                         className="h-10 w-10 rounded-full bg-gray-50"
//                       />
//                     )}
//                     <div className="text-sm leading-6">
//                       <p className="font-semibold text-gray-900">
//                         <span className="absolute inset-0" />
//                         {post.name}
//                         <div className="flex items-center gap-x-4 text-xs">
//                           <span className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
//                             {post.c_category}
//                           </span>
//                         </div>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="group relative">
//                     <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
//                       <a href={post.landingPageUrl}>
//                         <span className="absolute inset-0" />
//                         {post.title}
//                       </a>
//                     </h3>
//                     <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
//                       {post.description}
//                     </p>
//                   </div>
//                 </article>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/
// const posts = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   // More posts...
// ];

export default function solutions(inpData: any) {
  let data = inpData.inpData;
  let clData = data.c_associatedSolutions;
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {clData.map((post: any) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.photoGallery[0].image.url}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="text-gray-600">{post.name}</p>
                  <span className=" rounded-full bg-gray-50 py-1.5  font-medium text-gray-600 hover:bg-gray-100">
                    {post.c_category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-4 text-xs"></div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.landingPageUrl}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
