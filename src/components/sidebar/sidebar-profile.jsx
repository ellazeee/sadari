import React from "react"

export const SidebarProfile = () => {
  return (
    <div class="flex flex-1 items-start gap-4">
        <img src="/public/cover-article.jpg" 
        alt="Profile" 
        class="rounded-full w-8 h-8"/>
        <h1 class="my-auto text-sm">Your Name</h1>
    </div>
  );
};