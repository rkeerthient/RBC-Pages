import * as React from "react";
import MarkdownView from "react-showdown";

/* This example requires Tailwind CSS v3.0+ */
const faqs = [
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function FAQs(inpData: any) {
  let data = inpData.inpData;
  let clData = data.c_associatedFAQs;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:py-40 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                customer support
              </a>{" "}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {clData.map((faq: any) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    <MarkdownView
                      markdown={faq.answer}
                      options={{ tables: true, emoji: true }}
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
