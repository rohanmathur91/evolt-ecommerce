import React from "react";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { Category, BrandList, Footer } from "../../components";
import banner from "../../assets/images/banner.jpg";
import "./Home.css";

export const Home = () => {
  useScrollToTop();
  useDocumentTitle("Home");

  return (
    <div>
      <header className="overflow-hidden gutter-bottom">
        <img className="banner w-100" src={banner} alt="banner" />
      </header>

      <section className="category-container m-auto p-1 gutter-bottom ">
        <Category />
        <BrandList />
      </section>
      <Footer />
    </div>
  );
};
