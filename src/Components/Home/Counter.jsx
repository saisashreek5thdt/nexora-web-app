import React from "react";

export default function Counter() {
  return (
    <>
      <div className="counter-area bg-color">
        <div className="container">
          <div className="row counter-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-fun">
                    <div className="fun-icon">
                      <img src="img/about/f1.png" alt="" />
                    </div>
                    <div className="fun_text">
                      <span className="counter">320</span>
                      <h5>3D ANIMATION</h5>
                    </div>
                  </div>
                </div>
                {/* fun_text */}
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-fun three-fun">
                    <div className="fun-icon">
                      <img src="img/about/f2.png" alt="" />
                    </div>
                    <div className="fun_text">
                      <span className="counter">210</span>
                      <h5>SORT MOVIE</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-fun">
                    <div className="fun-icon">
                      <img src="img/about/f3.png" alt="" />
                    </div>
                    <div className="fun_text">
                      <span className="counter">410</span>
                      <h5>CARTON MOVIE</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="single-fun last-item">
                    <div className="fun-icon">
                      <img src="img/about/f4.png" alt="" />
                    </div>
                    <div className="fun_text">
                      <span className="counter">30</span>
                      <h5>AWARDS WON</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
