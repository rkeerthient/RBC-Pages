/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Cta from "../components/cta";
import Hours from "../components/hours";
import List from "../components/list";
import PageLayout from "../components/page-layout";
import StaticMap from "../components/static-map";
import "../index.css";
import { Image } from "@yext/pages/components";
import BlogPosts from "../components/relatedBlogs";
import ClientStories from "../components/clientStories";
import FAQs from "../components/faqs";
import Solutions from "../components/solutions";
import Teams from "../components/Team";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "services",
      "photoGallery",
      "c_associatedBlogs.landingPageUrl",
      "c_associatedBlogs.description",
      "c_associatedBlogs.name",
      "c_associatedBlogs.c_category",
      "c_associatedBlogs.c_datePublished",
      "c_associatedBlogs.photoGallery",
      "c_associatedClientStories.landingPageUrl",
      "c_associatedClientStories.title",
      "c_associatedClientStories.description",
      "c_associatedClientStories.name",
      "c_associatedClientStories.photoGallery",
      "c_associatedFAQs.answer",
      "c_associatedFAQs.question",
      "c_associatedInsights.title",
      "c_associatedInsights.description",
      "c_associatedInsights.name",
      "c_associatedInsights.c_category",
      "c_associatedInsights.photoGallery",
      "c_associatedSolutions.landingPageUrl",
      "c_associatedSolutions.title",
      "c_associatedSolutions.description",
      "c_associatedSolutions.name",
      "c_associatedSolutions.c_category",
      "c_associatedSolutions.photoGallery",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["financialProfessional"],
      savedFilterIds: ["1151082997"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Professional: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const cpy = document;
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    services,
    photoGallery,
    c_associatedBlogs,
    c_associatedClientStories,
    c_associatedFAQs,
    c_associatedInsights,
    c_associatedSolutions,
  } = document;

  return (
    <>
      <PageLayout _site={_site}>
        {/* <Banner name={name} address={address} openTime={openTime}>
          <div className="bg-white h-40 w-1/5 flex items-center justify-center text-center flex-col space-y-4 rounded-lg">
            <div className="text-black text-base">Visit Us Today!</div>
            <Cta
              buttonText="Get Directions"
              url="http://google.com"
              style="primary-cta"
            />
          </div>
        </Banner> */}
        <div className="bg-gray-300 h-screen">
          {/* <div className="bg-white absolute w-full">
            <div className="centered-container bg-white ">
              <div className="section relative -bottom-24  bg-white">
                <div className="text-4xl headColor font-light h-64 justify-center items-center flex ">
                  <div className="flex gap-6">
                    <div>
                      {photoGallery && (
                        <Image
                          className="inline-block h-32 w-32 rounded-full"
                          image={photoGallery[0]}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>{name.substring(0, name.indexOf("-"))}</div>
                      <div className="text-2xl">
                        {mainPhone &&
                          mainPhone
                            .replace("+1", "")
                            .replace(/\D+/g, "")
                            .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <BlogPosts inpData={cpy}></BlogPosts>
          <ClientStories inpData={cpy}></ClientStories>
          <FAQs inpData={cpy}></FAQs>
          <Solutions inpData={cpy}></Solutions> */}
          {/* <Teams inpData={cpy}></Teams> */}
          {/* <div className="bg-white w-full">
            <div className="centered-container bg-white ">
              <div className="section  bg-white">
                <div className="centered-container">
                  <div className="section">
                    <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                      <div className="bg-gray-100 p-5 space-y-12">
                        <Contact address={address} phone={mainPhone}></Contact>
                        {services && <List list={services}></List>}
                      </div>
                      <div className="col-span-2 pt-5 space-y-10">
                        <div>
                          {hours && (
                            <Hours title={"Restaurant Hours"} hours={hours} />
                          )}
                        </div>
                        {geocodedCoordinate && (
                          <StaticMap
                            latitude={geocodedCoordinate.latitude}
                            longitude={geocodedCoordinate.longitude}
                          ></StaticMap>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="centered-container">
          <div className="section">
            <div className="grid grid-cols-3 gap-x-10 gap-y-10">
              <div className="bg-gray-100 p-5 space-y-12">
                <Contact address={address} phone={mainPhone}></Contact>
                {services && <List list={services}></List>}
              </div>
              <div className="col-span-2 pt-5 space-y-10">
                <div>
                  {hours && <Hours title={"Restaurant Hours"} hours={hours} />}
                </div>
                {geocodedCoordinate && (
                  <StaticMap
                    latitude={geocodedCoordinate.latitude}
                    longitude={geocodedCoordinate.longitude}
                  ></StaticMap>
                )}
              </div>
            </div>
          </div>
        </div> */}
      </PageLayout>
    </>
  );
};

export default Professional;
