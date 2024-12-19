import React from "react";
import Hero from "./Hero";
import Pricing from "../Pricing/Pricing";
import FAQ from "../Layout/FAQ";
import { Footer } from "../Layout/Footer";
import { DragCards } from "../DragBox/DragCards";
import { ParallaxScroll } from "../ui/ParallaxScroll";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ParallaxScroll images={images} />
      <DragCards />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;

const images = [
  "https://assets.illustraai.com/illustrations/woman-with-laptop-and-cat.svg",
  "https://assets.illustraai.com/illustrations/muslim-girl-walking.svg",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734586183/generated_images/eec8c5ff-ba5f-40fa-a7b6-1cb4046c12f0.jpg",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734379168/generated_images/3e560f30-eca2-4ebc-bede-4556f69462e8.jpg",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734505298/generated_images/44dddbd9-8ae6-42d7-a36a-cc2ec6f0e648.jpg",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734578353/generated_images/7a8206cd-2f25-4556-9775-69b24d6b7e9b.jpg",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734543349/generated_images/79b7b542-c473-4265-8792-6c1f60da53d7.jpg",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734586039/generated_images/befbe926-efc5-4559-9455-37f34ecfde8c.jpg",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734586285/generated_images/900a1463-8f2c-452e-9486-35e7fcdd39b7.jpg",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734542383/generated_images/1ab3ce61-8ea7-4ac2-be68-6b12f4293ded.jpg",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734586039/generated_images/befbe926-efc5-4559-9455-37f34ecfde8c.jpg",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734586183/generated_images/eec8c5ff-ba5f-40fa-a7b6-1cb4046c12f0.jpg",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://res.cloudinary.com/dpitkojhg/image/upload/v1734586285/generated_images/900a1463-8f2c-452e-9486-35e7fcdd39b7.jpg",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
];
