import { Post } from "@/components/PostCard";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post: Post = await res.json();

  // Generate a random image for the post
  const imageUrl = `https://picsum.photos/seed/${post.id}/800/500`;

  return { props: { post: { ...post, image: imageUrl } } };
};

export default function PostPage({ post }: { post: Post }) {
  return (
    <main className="max-w-3xl mx-auto p-4 mt-12">
      {" "}
      {/* Added mt-12 for spacing */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div
          className="w-full h-64 md:h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="mt-4 text-gray-700">{post.body}</p>
          <p className="mt-2 text-gray-500">Author ID: {post.userId}</p>

          {/* Back to Home Button */}
          <div className="mt-6">
            <Link href="/" className="text-blue-500 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
