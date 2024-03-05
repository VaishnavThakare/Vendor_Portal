import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    {
      text: "Dashboard",
      icon: "ri-home-2-line",
      link: "dashboard",
      bgColor: "bg-cyan-100", 
     
    },
    {
      text: "Users",
      icon: "bx bx-user",
      link: "#",
      subItems: [{ text: "All", link: "allusers" }],
      bgColor: "bg-cyan-200", 
    },
    {
      text: "Vendor",
      icon: "bx bx-category",
      link: "#",
      bgColor: "bg-cyan-300", 
      subItems: [
        { text: "Create Vendor", link: "create-vendor" },
        { text: "All Vendor Category", link: "vendor-category" },
        { text: "Add Vendor Category", link: "add-vendor-category" },
      ],

    },
    {
      text: "Project Head",
      icon: "bx bx-user",
      link: "#",
      subItems: [{ text: "Create Project Head", link: "create-project-head" }],
      bgColor: "bg-cyan-400",
      
    },
    {
      text: "Project",
      icon: "ri ri-projector-line",
      link: "#",
      subItems: [
        { text: "All Project", link: "projects" },
        { text: "Create Project", link: "create-project" },
      ],
      bgColor: "bg-cyan-500", 
    },

    
    {
      text: "Products",
      icon: "ri ri-product-hunt-line  ",
      link: "#",
      subItems: [
        { text: "All Product", link: "products" },
        { text: "Create Product", link: "create-product" },
      ],
      bgColor: "bg-cyan-600", 
    },

    {
      text: "Request for Proposal",
      icon: "ri-file-copy-2-line",
      link: "#",
      subItems: [
        { text: "All RFP", link: "rfp" },
        { text: "Create RFP", link: "create-rfp" },
      ],
      bgColor: "bg-cyan-700", 
    },
    ///////////


    {
      text: "Document Verification",
      icon: "ri ri-verified-badge-fill",
      link: "#",
      subItems: [
        { text: "All RFP", link: "rfp" },
        { text: "Create RFP", link: "create-rfp" },
      ],
      bgColor: "bg-cyan-800", 
    },

    {
      text: "Dummy Item 3 ",
      icon: "ri-file-copy-2-line",
      link: "#",
      subItems: [
        { text: "All RFP", link: "rfp" },
        { text: "Create RFP", link: "create-rfp" },
      ],
      bgColor: "bg-cyan-900", 
    },

    {
      text: "Dummy Item 4",
      icon: "ri-file-copy-2-line",
      link: "#",
      subItems: [
        { text: "All RFP", link: "rfp" },
        { text: "Create RFP", link: "create-rfp" },
      ],
      bgColor: "bg-cyan-950", 
    },
    
    /////////////
  ];

 

  const handleMenuVisible = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <Sidebar
        isMenuVisible={isMenuVisible}
        handleMenuVisible={handleMenuVisible}
        menuItems={menuItems}
      />
      <main class="w-full md:w-[calc(100%-256px)] sm:ml-0 md:ml-64 bg-gray-200 min-h-screen transition-all main">
        <Navbar handleMenuVisible={handleMenuVisible} />
        <div class="p-6">
          <Outlet />
        </div>
      </main>
    </>
  );
}