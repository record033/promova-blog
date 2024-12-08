"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash-es";
import styles from "../page.module.css";
import posts from "@/app/posts.json";
import BlogPostCard from "@/components/blogPostCard/BlogPostCard";



type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  text: string;
};

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = +(searchParams.get('page') || "1")
  useEffect(() => {
    const query = searchParams.get("search") || "";
    setSearchQuery(query);
  }, [searchParams]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("page", (currentPage + 1).toString());
      router.push(newUrl.toString());
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("page", (currentPage - 1).toString());
      router.push(newUrl.toString());
    }
  };


  const handleSearchChange = useCallback(
    debounce((query: string) => {
      setSearchQuery(query);
      const newUrl = new URL(window.location.href);
      if (query) {
        newUrl.searchParams.set("search", query);
      }
      else {
        newUrl.searchParams.delete("search")
      }
      router.push(newUrl.toString());

    }, 800), []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    handleSearchChange(value)
  };



  return (
    <div className={styles.page}>
      <h1>Blog</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search posts..."
          className={styles.searchInput}
        />
      </div>


      <div className={styles.postContainer}>
        {currentPosts.map((post: BlogPost) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>


      <div className={styles.pagination}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          Previous
        </button>
        <span className={styles.paginationInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}