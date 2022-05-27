module.exports = {
    plugins: [
        {
            resolve: "gatsby-theme-portfolio-minimal",
            options: {
                siteUrl: "https://www.chris-young.dev", // Used for sitemap generation
                    manifestSettings: {
                    favicon: "./content/images/golfer.png", // Path is relative to the root
                    siteName: "Chris Young Portfolio", // Used in manifest.json
                    shortName: "Chris Young", // Used in manifest.json
                    startUrl: "/", // Used in manifest.json
                    backgroundColor: "#FFFFFF", // Used in manifest.json
                    themeColor: "#154360", // Used in manifest.json
                    display: "minimal-ui", // Used in manifest.json
                },
                contentDirectory: "./content",
                blogSettings: {
                    path: "/blog", // Defines the slug for the blog listing page
                    usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
                },
                // googleAnalytics: {
                //     trackingId: "UA-XXXXXX-X",
                //     anonymize: true, // Default true
                //     environments: ["production", "development"] // Default ["production"]
                // }
            },
        },
    ],
};
