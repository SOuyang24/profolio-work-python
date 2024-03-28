"use client";
import React, { useState } from "react";
import userData from "@constants/data";
import SocialLink from "./SocialLink";
import MotionProvider from "./MotionProvider";

export default function AboutMe() {
  let title = userData.title.fullstack
  const category = process.env.NEXT_PUBLIC_CATEGORY || "frontend"

  if (category.includes("frontend")) {
    title = userData.title.frontend
  } else if (category.includes("backend")) {
    title = userData.title.backend
  }
  let description = userData.description.frontend
  let techstacks = [];
  switch (category) {
    case "frontend":
      description = userData.description.frontend
      techstacks = userData.techstacks.filter(item => ["javascript", "frontend"].includes(item.tag))
      console.log("tech",techstacks);
      break;
    case "javascript_backend":
      description = userData.description.javascript_backend
      techstacks = userData.techstacks.filter(item => ["javascript", "backend"].includes(item.tag))
      break;
    case "javascript_fullstack":
      description = userData.description.javascript_fullstack
      techstacks = userData.techstacks.filter(item => ["javascript", "fullstack", "frontend", "backend"].includes(item.tag))
      console.log("techstacks",techstacks)
      break;
    case "python_backend":
      description = userData.description.python_backend
      techstacks = userData.techstacks.filter(item => ["python", "backend"].includes(item.tag))     
      break;
    case "python_fullstack":
      description = userData.description.python_fullstack
      techstacks = userData.techstacks.filter(item => ["python", "fullstack", "frontend", "backend"].includes(item.tag))   
      break;
    case "java_backend":
      description = userData.description.java_backend
      techstacks = userData.techstacks.filter(item => ["java", "backend"].includes(item.tag))  
      break;
    case "java_fullstack":
      description = userData.description.java_fullstack
      techstacks = userData.techstacks.filter(item => ["java", "fullstack", "frontend", "backend"].includes(item.tag)) 
      break
    default:
  }
  
  
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800  md:pl-10">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
          About Me
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900 text-gray-700 dark:text-gray-200" >
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {title} Currently work in{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white hover:text-black"
              href={userData.about.currentCompanyUrl}
              target="_blank"
            >
              {userData.about.currentCompany} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any inquiry, shoot me an{" "}
                <a
                  target="_blank"
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  email
                </a>{" "}
                and I'll get back as soon as I can.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                New Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm open for new opportunities, If you see me as a good fit, reach me in <a href={`${userData.linkedin}`}  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300" target="_blank">Linkedin</a> or <a href={`mailto:${userData.email}`}  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300" target="_blank">Email</a>. I would love to hear more from your part.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-1 ml-4">
              {/* peerlist */}
              {userData.socialLinks.peerlist && (
              <SocialLink title="PeerList" link={userData.socialLinks.peerlist}  />
              )}
              {/* facebook */}
              {userData.socialLinks.facebook && (<SocialLink title="Facebook" link={userData.socialLinks.facebook}  />)}
               {/* twitter */}
              {userData.socialLinks.twitter && (<SocialLink title="Twitter" link={userData.socialLinks.twitter}  />)}
              {/* github */}
              {/* {userData.socialLinks.github && (<SocialLink title="Github" link={userData.socialLinks.github}  />)} */}
              {userData.socialLinks.linkedin && (<SocialLink title="Linkedin" link={userData.socialLinks.linkedin}  />)}
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>

            <div className="flex flex-row flex-wrap mt-8">
              {
                techstacks?.map((techstack, index) => (
                  <MotionProvider key={index} index={index} pageSize={6} >
                    <TechstackCard id={techstack.id} name={techstack.name} imageUrl={techstack.imageUrl} />
                  </MotionProvider>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TechstackCard = ({ id, name, imageUrl }) => {
  const [isLegendVisible, setLegendVisibility] = useState(false);

  const handleMouseEnter = () => {
    setLegendVisibility(true);
  };

  const handleMouseLeave = () => {
    setLegendVisibility(false);
  };
  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imageUrl} alt={id} className="w-24 h-auto m-3" />
      {isLegendVisible && (
        <div className="popup-legend absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white">
          <p className="text-center">{name}</p>
        </div>
      )}
    </div>
  );
}
