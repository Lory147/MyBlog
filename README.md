🚀 Next.js Blog

A modern blog application built with Next.js 14, Tailwind CSS, and TypeScript, featuring tag-based filtering and server-side data fetching.

🌍 Live Demo
👉 myblog-nextjs-xi.vercel.app

📦 Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/Lory147/MyBlog
cd blog-app

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

3. Modular & Scalable Architecture
   components/PostList.tsx → Reusable post listing component.
   hooks/usePosts.tsx → Handles filtering logic separately.

🛠️ Tech Stack
Frontend: Next.js, React, Tailwind CSS, TypeScript
Deployment: Vercel
API Data: JSONPlaceholder (for mock data)

👥 Contributing
Pull requests are welcome! Feel free to open an issue or suggest improvements.

📄 License
This project is MIT Licensed.
