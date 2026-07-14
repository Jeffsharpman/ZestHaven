const DeveloperSchema = ({ projectName, projectUrl, projectDescription, technologies }) => {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: projectName,
    description: projectDescription,
    url: projectUrl,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Oyenuga Joshua",
      url: "https://sharpman.netlify.app",
      jobTitle: "Full Stack Web Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ikorodu",
        addressRegion: "Lagos",
        addressCountry: "NG"
      },
      sameAs: [
        "https://sharpman.netlify.app",
        "https://github.com/Jeffsharpman",
        "https://www.linkedin.com/in/oyenuga-joshua-058434417",
        "https://x.com/sharpman_dev",
        "https://www.instagram.com/sharpman_dev",
        "https://youtube.com/@sharpman_dev"
      ]
    },
    creator: {
      "@type": "Organization",
      name: "Sharpman",
      url: "https://sharpman.netlify.app",
      description: "Web development and digital solutions brand founded by Oyenuga Joshua",
      sameAs: [
        "https://sharpman.netlify.app",
        "https://github.com/Jeffsharpman",
        "https://www.linkedin.com/in/oyenuga-joshua-058434417",
        "https://x.com/sharpman_dev",
        "https://www.instagram.com/sharpman_dev",
        "https://youtube.com/@sharpman_dev"
      ]
    },
    publisher: {
      "@type": "Organization",
      name: "Sharpman",
      url: "https://sharpman.netlify.app"
    },
    isPartOf: {
      "@type": "Organization",
      name: "Sharpman",
      url: "https://sharpman.netlify.app"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": projectUrl
    },
    technologies: technologies,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NGN"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
    />
  );
};

export default DeveloperSchema;
