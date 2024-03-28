import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import userData from "@constants/data";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const category = process.env.NEXT_PUBLIC_CATEGORY || "frontend"
  let title = userData.title.fullstack
  let category_description = "building responsive, user-friendly, and performant web and mobile applications with cutting-edge modern technologies and frameworks";
  if (category.includes("frontend")) {
    title = userData.title.frontend
    categorydescription = `building responsive, user-friendly, and performant interfaces with cutting-edge modern technologies and frameworks.`
  } else if (category.includes("backend")) {
    title = userData.title.backend
    categorydescription = `building scalable, performant and secure APIs to query and expose data over the Internet with cutting-edge modern technologies,frameworks and architectures with the highest security standards.`
  }
  const meta = {
    title: `Simon Ouyang - ${title}`,
    name: "Simon Ouyang",
    description: `I am proficient in ${category_description}. I am passionate about building web and mobile applications. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head> 
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://simon-ouyang.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://simon-ouyang.vercel.app/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@souyang" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full dark:text-white">
        <Navbar />
        <div >{children}</div>
        <Footer />
      </main>
    </div>
  );
}
