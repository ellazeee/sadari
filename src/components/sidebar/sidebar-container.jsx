import React from "react"
import { SidebarProfile } from "./sidebar-profile.jsx"
import { SidebarList } from "./sidebar-list.jsx"

export const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-pink-600 text-white p-3 fixed">
      <div className="flex flex-col gap-5 p-2">
        <div className="flex items-start mb-5">
            <h1 className="text-xl m-0 font-semibold my-auto">SADARI</h1>
        </div>
        <SidebarProfile/>
        <SidebarList />
        </div>
        </div>
  )
};