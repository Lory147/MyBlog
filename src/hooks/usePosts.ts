import { Post } from "@/components/PostCard";
import { useRouter } from "next/router";

export function usePosts(posts: Post[]) {
  const router = useRouter();
  const tagQuery = router.query.tag;
  const tags = Array.isArray(tagQuery) ? tagQuery : tagQuery ? [tagQuery] : [];

  const capitalizeFirstLetter = (text: string) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const filteredPosts =
    tags.length > 0
      ? posts.filter((post) =>
          tags.some(
            (tag) =>
              post.body.toLowerCase().includes(tag.toLowerCase()) ||
              post.title.toLowerCase().includes(tag.toLowerCase())
          )
        )
      : posts;

  const onTagClick = (tag: string) => {
    router.push({ query: { tag: [...tags, tag] } });
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    router.push({ pathname: router.pathname, query: { tag: updatedTags } });
  };

  return { tags, filteredPosts, capitalizeFirstLetter, onTagClick, removeTag };
}
