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
import Hours from "../components/hours";
import StaticMap from "../components/static-map";
import "../index.css";
import { Image } from "@yext/pages/components";
import BlogPosts from "../components/relatedBlogs";
import ClientStories from "../components/clientStories";
import FAQs from "../components/faqs";
import Solutions from "../components/solutions";
import Schema from "../components/Schema";
import Web2Lead from "../components/web2Lead";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-2",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "description",
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
      "c_associatedInsights.externalArticlePostDate",
      "c_associatedInsights.c_category",
      "c_associatedInsights.photoGallery",
      "c_associatedSolutions.landingPageUrl",
      "c_associatedSolutions.title",
      "c_associatedSolutions.description",
      "c_associatedSolutions.name",
      "c_associatedSolutions.c_category",
      "c_associatedSolutions.photoGallery",
      "c_templateBBanner",
      "c_brandLogo",
      "c_advisorBio",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["financialProfessional"],
      savedFilterIds: ["1306234060"],
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
const Professional: Template<TemplateRenderProps> = ({ document }) => {
  const cpy = document;
  const {
    _site,
    name,
    address,
    hours,
    mainPhone,
    geocodedCoordinate,
    description,
    photoGallery,
    c_associatedBlogs,
    c_associatedClientStories,
    c_associatedFAQs,
    c_associatedSolutions,
    c_advisorBio,
    uid,
  } = document;
  const [pathLink, setPathLink] = React.useState<string>();
  React.useEffect(() => {
    if (typeof window === "object") {
      setPathLink(window.location.href);
    }
  }, []);
  return (
    <>
      <Schema document={cpy}></Schema>
      <span className="hidden md:block">
        <Image image={_site.c_deskHeader}></Image>
      </span>
      <span className="block md:hidden">
        <Image image={_site.c_mobHeader}></Image>
      </span>

      <div>
        <div className="bg-white w-full mb-4">
          <div>
            <div className="relative text-center">
              {_site.c_templateBBanner && (
                <Image
                  image={_site.c_templateBBanner}
                  style={{ maxHeight: "470px" }}
                ></Image>
              )}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2	">
                <div className="text-4xl headColor font-light h-64">
                  <div className="flex gap-6">
                    <div style={{ width: "16em" }}>
                      {_site.c_brandLogo && (
                        <Image className="w-15" image={_site.c_brandLogo} />
                      )}
                    </div>
                    {/* <div className="flex flex-col gap-3">
                      <div>RBC Wealth Management</div> */}
                    {/* <div className="text-3xl">
                        {name.includes("-")
                          ? name
                              .split("-")[1]
                              .replace("RBC Wealth Management ", "")
                          : ""}
                      </div> */}
                    {/* <div className="text-2xl">
                        {mainPhone &&
                          mainPhone
                            .replace("+1", "")
                            .replace(/\D+/g, "")
                            .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                      </div> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="" style={{ width: "50%", padding: "3em 14em" }}>
                {photoGallery && (
                  <img src={photoGallery[0].image.url} className="w-96"></img>
                )}
              </div>
              <div className="flex flex-col gap-3 mt-32">
                <div className="text-3xl text-[#003168]">
                  {name.includes("-") ? name.split("-")[0] : name}
                </div>
                <div className="text-2xl">
                  {name.includes("-")
                    ? name.split("-")[1].replace("RBC Wealth Management ", "")
                    : ""}
                </div>
                <div className="text-2xl">
                  {mainPhone &&
                    mainPhone
                      .replace("+1", "")
                      .replace(/\D+/g, "")
                      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                </div>
                <div className="  gap-y-5">
                  <div className="text-xl font-semibold mb-4">Address</div>

                  <div className="  gap-y-3">
                    <div>{address.line1}</div>
                    {address.line2 && <div>{address.line2}</div>}
                    <div>
                      {address.city}, {address.region} {address.postalCode}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-20">
              <div className="text-xl font-semibold mb-4 text-center">
                About me
              </div>

              <div className="text-center px-32">
                {c_advisorBio ? c_advisorBio : description}
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row  mt-4 centered-container justify-between">
              <div>
                <div>
                  {geocodedCoordinate && (
                    <StaticMap
                      latitude={geocodedCoordinate.latitude}
                      longitude={geocodedCoordinate.longitude}
                    ></StaticMap>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/3">
                {/* <span className=" hidden md:block">
                  <div className="  gap-y-5">
                    <div className="text-xl font-semibold mb-4">Address</div>

                    <div className="  gap-y-3">
                      <div>{address.line1}</div>
                      {address.line2 && <div>{address.line2}</div>}
                      <div>
                        {address.city}, {address.region} {address.postalCode}
                      </div>
                    </div>
                  </div>
                </span> */}
                <div className="mt-8">
                  {hours && <Hours title={"I'm available on"} hours={hours} />}
                </div>
              </div>
            </div>
            <div className="pt-20">
              {c_associatedSolutions && <Solutions inpData={cpy}></Solutions>}
            </div>
          </div>
        </div>
        <div className="pt-20">
          {" "}
          {c_associatedBlogs && <BlogPosts inpData={cpy}></BlogPosts>}
        </div>

        {c_associatedClientStories && (
          <ClientStories inpData={cpy}></ClientStories>
        )}
        {/* {c_associatedInsights && <Insights inpData={cpy} />} */}
        {c_associatedFAQs && <FAQs inpData={cpy}></FAQs>}
        <div className="my-6">
          <Web2Lead></Web2Lead>
        </div>
      </div>
      <span className="hidden md:block mt-8">
        <Image image={_site.c_deskFooter}></Image>
      </span>
      <span className="block md:hidden">
        <Image image={_site.c_mobFooter}></Image>
      </span>
      {pathLink?.includes("preview") && (
        <a
          href={`https://sandbox.yext.com/s/3194448/entity/edit3?entityIds=${uid}`}
          className="border bg-gray-200 px-4 py-2 fixed bottom-10 right-10"
        >
          Edit
        </a>
      )}
    </>
  );
};

export default Professional;
