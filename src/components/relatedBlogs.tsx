import * as React from "react";
import Ce_blog from "../types/blog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function BlogPosts(inpData: any) {
  let data = inpData.inpData;
  let clData = data.c_associatedBlogs;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto  mt-16  gap-5 lg:max-w-none ">
          <Slider {...settings}>
            {clData &&
              clData.map((post: any) => (
                <div
                  key={post.name}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0">
                    {post.photoGallery && (
                      <img
                        className="h-48 w-full object-cover"
                        src={post.photoGallery[0].image.url}
                        alt=""
                      />
                    )}
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
                      {data.photoGallery && (
                        <div className="flex-shrink-0">
                          <a href={data.landingPageUrl}>
                            <span className="sr-only">{data.name}</span>
                            <img
                              className="h-10 w-10 rounded-full"
                              src={data.photoGallery[0].image.url}
                              alt=""
                            />
                          </a>
                        </div>
                      )}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a
                            href={data.landingPageUrl}
                            className="hover:underline"
                          >
                            {data.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={data.c_datePublished}>
                            {data.c_datePublished}
                          </time>
                          <span aria-hidden="true">&middot;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
