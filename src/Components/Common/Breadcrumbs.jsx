import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ currentPage }) {
  return (
    <>
      <section class="page-area area-120">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-12 col-lg-12 col-md-12 justify-content-start align-items-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="breadcrumb-title">
                <div class="white-headline">
                  <h2>
                    <span class="sp-color">{currentPage}</span>
                  </h2>
                </div>
              </div>
              <div class="breadcrumb-page">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      {currentPage}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
