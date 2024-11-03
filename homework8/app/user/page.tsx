'use client'
import React, { useEffect, useState } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
}

interface Title {
    id: number;
    title: string;
}
export default function UserInformation() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [titles, setTitles] = useState<Title[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch('/api/vercel');
                const res2 = await fetch('/api/jsonplaceholder');
                const data = await res.json();
                const data2 = await res2.json();
                setPosts(data);  // Assuming 'data' is an array of Post objects
                setTitles(data2); // Assuming 'data2' is an array of Title objects
            } catch (err) {
                console.log("Error:", err);
            }
        }
        fetchPosts();
    }, []);

    if (!posts.length || !titles.length) return <div>Loading...</div>;

    return (
        <>
            {posts.map((post, index) => (
                <div key={post.id}>
                    <article className="mx-auto max-w-screen-sm m-3 rounded-xl border-2 border-gray-100 bg-white">

                        <div className="flex justify-end">
                            <strong className="inline-flex items-center gap-1 rounded-bl-xl rounded-tr-xl  bg-[#775b45] px-3 py-1.5 text-white">
                                <span className="text-[10px] font-medium sm:text-xs">{post.category}</span>
                            </strong>
                        </div>
                        <div className="flex items-start gap-4 p-4 pt-0 sm:p-6 sm:pt-0 lg:p-8 lg:pt-0">
                            <a href="#" className="block shrink-0">
                                <img
                                    alt=""
                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-a_Za5lq2SKxAZU0E55cyjMd3m2Fvwbufw&s" //{titles[index]?.thumbnailUrl || ""}
                                    className="size-14 rounded-lg object-cover"
                                />
                            </a>
                            <div>
                                <h3 className="font-medium sm:text-lg">
                                    <a href="#" className="hover:underline"> {titles[index]?.title || 'No title available'} </a>
                                </h3>

                                <p className="line-clamp-2 text-sm text-gray-700">{post.content}</p>

                                <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <p className="text-xs"> {post.date}</p>
                                    </div>

                                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                    <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                        Posted by
                                        <a href="#" className="font-medium underline hover:text-gray-700"> {post.author} </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            ))}
        </>
    );
}
