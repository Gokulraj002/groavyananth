const fs = require('fs');
const path = require('path');

// Define the path to the JSON file
const blogPostsPath = path.resolve(__dirname, 'src/Component/Media/Blogs/blogPosts.json');
console.log('Loading blog data from:', blogPostsPath);

// Load blog data from JSON file
let blogPostsData;
try {
  blogPostsData = require(blogPostsPath);
  console.log("Loaded blog posts data:", blogPostsData);
} catch (error) {
  console.error("Error loading blogPosts.json:", error);
  process.exit(1);
}

// Get the latest two blog posts
const latestBlogs = blogPostsData
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 2); // Only the latest two posts
console.log("Latest blogs:", latestBlogs);

// Generate RSS XML content
const generateRSSXML = () => {
    const items = latestBlogs
      .map((post, index) => `
        <!-- Example item ${index + 1} -->
        <item>
          <title>${post.title}</title>
          <link>https://www.groavy.com${post.link}</link>
          <description>${post.description}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <guid>https://www.groavy.com${post.link}</guid>
        </item>
      `)
      .join('');

  return `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Groavy Blog</title>
    <link>https://www.groavy.com</link>
    <description>The latest updates from Groavy</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    ${items}
  </channel>
</rss>
  `.trim();
};

// Define the path for the output RSS file in the public folder
const rssPath = path.join(__dirname, 'public', 'rss.xml');
console.log('Saving rss.xml to:', rssPath);

// Generate and write the RSS XML to rss.xml
const rssXML = generateRSSXML();
console.log("Generated RSS XML:", rssXML);

try {
  fs.writeFileSync(rssPath, rssXML, 'utf-8');
  console.log('rss.xml has been generated with the latest blog posts.');
} catch (error) {
  console.error("Error writing rss.xml:", error);
}
