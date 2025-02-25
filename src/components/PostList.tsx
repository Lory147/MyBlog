import PostCard, { Post } from "./PostCard";

interface PostListProps {
  posts: Post[];
  capitalizeFirstLetter: (text: string) => string;
  onTagClick: (tag: string) => void;
}

export default function PostList({
  posts,
  capitalizeFirstLetter,
  onTagClick,
}: PostListProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-6 px-8">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          capitalizeFirstLetter={capitalizeFirstLetter}
          onTagClick={onTagClick}
        />
      ))}
    </div>
  );
}
