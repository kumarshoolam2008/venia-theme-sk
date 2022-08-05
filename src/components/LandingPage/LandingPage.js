import React from "react";
import hero_component_image1 from "../../assets/images/hero-component-image1.jpg"
import hero_component_image2 from "../../assets/images/hero-component-image2.jpg"
import "../../assets/scss/landingPage.css";

function LandingPage() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6 header-one">
                <div className="text">
                  <h3>
                    Shop the new <br />
                    Signature Collection
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod <br />
                    tempor incididunt ut labore et dolore magna aliqua. Lobortis
                    mattis <br />
                    aliquam faucibus purus.
                  </p>
                  <input type="button" class="buttonone" value="SHOP NOW" />
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 header--two">
                <div>
                  <img src="https://thumbs.dreamstime.com/b/men-clothing-store-interior-s-mannequins-fashion-55762579.jpg"/>
                </div>
              </div>
            </div>
            {/* <img class="d-block w-100" src="https://media.istockphoto.com/photos/shopping-cart-full-of-food-on-yellow-background-grocery-and-food-picture-id1316968335?b=1&k=20&m=1316968335&s=170667a&w=0&h=PkK1r12jvNs3CiCsQIBFcTa0SO1kG5ZdsK_7Rz4PxyQ="  alt="First slide"/> */}
          </div>
          {/* <div class="carousel-item">
      <img class="d-block w-100" src="https://media.istockphoto.com/photos/shopping-cart-full-of-food-on-yellow-background-grocery-and-food-picture-id1316968335?b=1&k=20&m=1316968335&s=170667a&w=0&h=PkK1r12jvNs3CiCsQIBFcTa0SO1kG5ZdsK_7Rz4PxyQ="  alt="Second slide"/>
    </div> */}
          {/* <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div> */}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <br />
      <div className="text---one">
        <div className="container">
          <div class="aem-Grid aem-Grid--12 ">
            <div class="aem-GridColumn aem-GridColumn--default--3 cxz">
              <div className="card--one ">
                <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" />
                <div className="wq">
                  <h5>Shop Women</h5>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 cxz">
              <div className="card--two">
                <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
                <div className="wq">
                  <h5>Shop Men</h5>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 cxz">
              <div className="card--three">
                <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" />
                <div className="wq">
                  <h5>Jewellery</h5>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 cxz">
              <div className="card--four">
                <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" />
                <div className="wq">
                  <h5>Electronics</h5>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--8">
            <div className="take-off">
              <h4>
                Take off in the new <br />
                Signature Legging
              </h4>
              <h6>Lorem Ipsum Dolor Tempor</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                labore dolore magna lorem ipsum dolor sit dolore magna.
              </p>
            </div>
            <div className="btn-three">
              <input type="button" class="btn-one" value="SHOP COLLECTION " />
              <input type="button" class="btn-two" value="SHOP NOW" />
              <div className="lines-one">
                <hr />
              </div>
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--default--4">
            <div className="take-off-one">
              <img src="https://www.teahub.io/photos/full/208-2082657_little-girl-shopping.jpg"/>
              {/* <img src={hero_component_image1}/> */}
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="container">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--8">
            <div class="card-img">
              <img src={hero_component_image2}/>
            </div>
          </div>

          <div class="aem-GridColumn aem-GridColumn--default--4">
            <div class="one-card">
              <div class="two-card">
                <h5 class="three-card">Conquer your next adventure</h5>
                <p className="card-ab">Lorem Ipsum Dolor Tempor</p>
                <input type="button" class="btn-four" value="SHOP DEVICES" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
