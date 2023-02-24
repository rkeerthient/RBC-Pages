import * as React from "react";
import Ce_blog from "../types/blog";

export default function BlogPosts(inpData: any) {
  let data = inpData.inpData;

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blogposts
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {data.c_associatedBlogs.map((post: Ce_blog) => (
            <div
              key={post.name}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.photoGallery[0].image.url}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <div className="hover:underline">{post.c_category}</div>
                  </p>
                  <a href={post.landingPageUrl} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.name}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={data.slug}>
                      <span className="sr-only">{data.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={data.photoGallery[0].image.url}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={data.slug} className="hover:underline">
                        {data.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={data.c_datePublished}>
                        {data.c_datePublished}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      {/* <span>{post.readingTime} read</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
