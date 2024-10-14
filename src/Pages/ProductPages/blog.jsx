import React from 'react';
import './index.css'; // Ensure this path is correct
import Navbar from "../../Components/Navbar";
import Footer from '../../Pages/Footer'; // Correct path



const Blog = () => {
  const posts = [
    {
      imgSrc: "./icons/house.png",
      title: "Navigating the Real Estate Market: Tips and Trends",
      category: "Real Estate",
      date: "12th October 2024",
      description: "Real estate remains a stable investment option. With an increasing demand for housing, understanding market trends is essential. Buyers should focus on location, property condition, and market timing. Sellers can benefit from staging and professional photography..."
    },
    {
      imgSrc: "./icons/security.png",
      title: "The Importance of Reliable Security Services",
      category: "Security",
      date: "12th October 2024",
      description: "In an increasingly uncertain world, security services play a crucial role. From personal bodyguards to cybersecurity, comprehensive protection is essential to ensure safety in both personal and business contexts."
    },
    {
      imgSrc: "./icons/cab.png",
      title: "Transforming Urban Travel: The Rise of Cab Services",
      category: "Cab",
      date: "12th October 2024",
      description: "Cab services have revolutionized urban transportation. With apps, hailing a ride is now at our fingertips, providing convenience and flexibility for commuters in bustling cities."
    },
    {
      imgSrc: "./icons/housekeeping.png",
      title: "The Benefits of Professional Cleaning Services",
      category: "Cleaning",
      date: "12th October 2024",
      description: "Professional cleaning services not only save time but also provide a level of cleanliness that is hard to achieve alone. They use specialized equipment and techniques to keep your space spotless and hygienic."
    },
    {
      imgSrc: "./icons/homecare.png",
      title: "Creating Your Oasis: The Art of Landscaping",
      category: "Landscaping",
      date: "12th October 2024",
      description: "Landscaping enhances the beauty of your outdoor space. A well-designed landscape can increase property value, provide relaxation, and create an inviting environment for gatherings."
    },
    {
      imgSrc: "./icons/plumber.png",
      title: "Why IT Support is Crucial for Your Business",
      category: "IT Support",
      date: "12th October 2024",
      description: "Reliable IT support ensures your business runs smoothly. From troubleshooting to cybersecurity, having a dedicated team helps prevent disruptions and keeps your data secure."
    },
    {
      imgSrc: "./icons/Gardening.png",
      title: "Gardening for Beginners: Tips to Get Started",
      category: "Gardening",
      date: "12th October 2024",
      description: "Gardening is a rewarding hobby that promotes relaxation and creativity. Starting with easy-to-grow plants can boost your confidence and allow you to enjoy the beauty of nature at home."
    },
    {
      imgSrc: "./icons/Packers.png",
      title: "Making Moving Easy: Tips for a Smooth Transition",
      category: "Moving",
      date: "12th October 2024",
      description: "Moving can be stressful, but with proper planning, it can be a breeze. Create a checklist, hire reliable movers, and pack strategically to ensure a smooth transition to your new home."
    },
    {
        imgSrc: "./icons/security.png",
        title: "The Importance of Reliable Security Services",
        category: "Security",
        date: "12th October 2024",
        description: "In an increasingly uncertain world, security services play a crucial role. From personal bodyguards to cybersecurity, comprehensive protection is essential to ensure safety in both personal and business contexts."
      },
  ];

  return (
    <main id='main'>  
            <Navbar/>

    <div className="blog-container">
      <div className="inner-page-header">
        <h1>Blog</h1>
        <p className="sub-text">Latest Updates and Insights</p>
      </div>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div className="blog-post" key={index}>
            <img src={post.imgSrc} alt={post.title} className="blog-image" />
            <h2 className="blog-title">{post.title}</h2>
            <div className="meta">
              <span>Category: <a href="#">{post.category}</a></span>
              <span>Date: {post.date}</span>
            </div>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />

    </main>
  );
};

export default Blog;
