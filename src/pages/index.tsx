import { usePosts } from "@/hooks/usePosts";
import { highlightText } from "@/utils/highlightText";
import PostList from "@/components/PostList";
import { Post } from "@/components/PostCard";
import router from "next/router";

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }

    const posts = await res.json();

    const postsWithImages = posts.map((post: Post) => ({
      ...post,
      image: `https://picsum.photos/seed/${post.id}/600/400`,
    }));

    return { props: { posts: postsWithImages } };
  } catch (error) {
    console.error("Error fetching posts:", error);

    return { props: { posts: [] } };
  }
}

export default function Home({ posts }: { posts: Post[] }) {
  const { tags, filteredPosts, capitalizeFirstLetter, onTagClick, removeTag } =
    usePosts(posts);

  return (
    <main className="max-w-full mx-auto p-4">
      {tags.length > 0 && (
        <div className="mt-4 px-8">
          <span className="text-gray-600">Filtering by: </span>
          {tags.map((tag, index) => (
            <span key={index} className="inline-block mr-2">
              <button
                onClick={() => removeTag(tag)}
                className="text-blue-500 hover:underline"
              >
                #{capitalizeFirstLetter(tag)}
              </button>
            </span>
          ))}
          <button
            onClick={() => router.push("/")}
            className="ml-4 text-red-500 underline"
          >
            Clear All Filters
          </button>
        </div>
      )}

      <PostList
        posts={filteredPosts}
        tags={tags}
        highlightText={highlightText}
        capitalizeFirstLetter={capitalizeFirstLetter}
        onTagClick={onTagClick}
      />
    </main>
  );
}
