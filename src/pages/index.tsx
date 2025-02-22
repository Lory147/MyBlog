import { usePosts } from "@/hooks/usePosts";
import { highlightText } from "@/utils/highlightText";
import PostList from "@/components/PostList";
import { Post } from "@/components/PostCard";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const postsWithImages = posts.map((post: Post) => ({
    ...post,
    image: `https://picsum.photos/seed/${post.id}/600/400`,
  }));

  return { props: { posts: postsWithImages } };
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
            onClick={() => removeTag("")}
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
