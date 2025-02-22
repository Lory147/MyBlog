🚀 Next.js Blog

A modern blog application built with Next.js 14, Tailwind CSS, and TypeScript, featuring tag-based filtering, highlighted search results, and server-side data fetching.

🌍 Live Demo
👉 Visit the Deployed App

📦 Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/Lory147/MyBlog
cd nextjs-blog

2️⃣ Install Dependencies
npm install

# or

yarn install

3️⃣ Run the Development Server
npm run dev

# or

yarn dev
Open http://localhost:3000 in your browser.

4️⃣ Build & Deploy
To build the project for production:

npm run build && npm start
For deployment on Vercel, install the CLI and run:

npm install -g vercel
vercel

🔍 Features & Approach

1. Server-Side Rendering & Static Generation
   Uses getStaticProps to fetch posts from an API at build time for better performance.
   Generates random images for each post using picsum.photos.

2. Tag-Based Filtering
   Users can filter posts by tags (extracted from post content).
   Clicking a hashtag dynamically updates the URL query.
   Tags are highlighted in the post content when filtering.

3. Advanced Text Highlighting
   Implements a custom utility function to highlight matching words.
   Uses Regular Expressions (RegEx) to detect words case-insensitively.

4. Modular & Scalable Architecture
   components/PostList.tsx → Reusable post listing component.
   hooks/usePosts.tsx → Handles filtering logic separately.
   utils/highlightText.tsx → Keeps text formatting functions outside the components.

   🚀 Future Improvements
   [ ] User authentication (NextAuth.js)
   [ ] CMS integration (Contentful / Sanity)
   [ ] Dark mode support
   [ ] Infinite scrolling with pagination

   🛠️ Tech Stack
   Frontend: Next.js, React, Tailwind CSS, TypeScript
   Deployment: Vercel
   API Data: JSONPlaceholder (for mock data)
   👥 Contributing

   Pull requests are welcome! Feel free to open an issue or suggest improvements.

📄 License
This project is MIT Licensed.
