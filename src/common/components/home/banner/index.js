import React from "react";
import Image from "next/image";
import styles from "src/common/styles/Banner.module.css";
import bannerImg from "src/assets/image/homabannerst.png";
import gplay from "src/assets/image/gplay.svg";
import astore from "src/assets/image/appstore.svg";
import phone from "src/assets/image/additional/phone.svg";
import lock from "src/assets/image/additional/lock.svg";
import download from "src/assets/image/additional/download.svg";
import p1 from "src/assets/image/brandlogo/airbnb.svg";
import p2 from "src/assets/image/brandlogo/cannon.svg";
import p3 from "src/assets/image/brandlogo/dropbox.svg";
import p4 from "src/assets/image/brandlogo/dell.svg";
import p5 from "src/assets/image/brandlogo/microsoft.svg";
import p6 from "src/assets/image/brandlogo/hnm.svg";

export default function Banner() {
  return (
    <>
      <div className={`${styles["banner-section"]} row`}>
        <div className="col-11 col-sm-6 col-md-6 col-lg-5">
          <Image src={bannerImg} alt="banner image" />
        </div>
        <div className="col-11 col-sm-6 col-md-6 col-lg-5">
          <p className={styles.title}>
            Awesome App For Saving <span>Time.</span>
          </p>
          <p className={styles["title-description"]}>
            We bring you a mobile app for banking problems that oftenly wasting
            much of your times.
          </p>
          <button className={`${styles["banner-btn"]} btn btn-primary`}>
            Try it free
          </button>
          <div className="row">
            <p className={styles["title-description"]}>available</p>
            <div className="col-2">
              <Image src={gplay} alt="gplay" />
            </div>
            <div className="col-2">
              <Image src={astore} alt="astore" />
            </div>
          </div>
        </div>
      </div>

      {/* partner */}
      <div className={`${styles.partner} row`}>
        <div className="col-4 col-sm-2">
          <Image src={p1} alt="banner partner" />
        </div>
        <div className="col-4 col-sm-2">
          <Image src={p2} alt="banner partner" />
        </div>
        <div className="col-4 col-sm-2">
          <Image src={p3} alt="banner partner" />
        </div>
        <div className="col-4 col-sm-2">
          <Image src={p4} alt="banner partner" />
        </div>
        <div className="col-4 col-sm-2">
          <Image src={p5} alt="banner partner" />
        </div>
        <div className="col-4 col-sm-2">
          <Image src={p6} alt="banner partner" />
        </div>
      </div>

      {/* about */}
      <div className={styles.about}>
        <p className={styles.title}>
          <span>About </span>the Application.
        </p>
        <p className={styles["title-description"]}>
          We have some great features from the application and it’s totally free{" "}
          <br /> to use by all users around the world.
        </p>
        {/* card */}
        <div className="row mx-auto w-100 justify-content-center align-items-xl-center">
          <div className="col-10 col-md-3 col-lg-3">
            <div className="card">
              <Image src={phone} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">
                  We have 24/7 contact support so you can contact us whenever
                  you want and we will respond it.
                </p>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-3 col-lg-3">
            <div className="card">
              <Image src={lock} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Data Privacy</h5>
                <p className="card-text">
                  We make sure your data is safe in our database and we will
                  encrypt any data you submitted to us.
                </p>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-3 col-lg-3">
            <div className="card">
              <Image src={download} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Easy Download</h5>
                <p className="card-text">
                  Zwallet is 100% totally free to use it’s now available on
                  Google Play Store and App Store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* features */}
      <div className={`${styles["features-section"]} row`}>
        <div className="col-11 col-sm-6 col-md-6 col-lg-4">
          <Image src={bannerImg} alt="banner image" />
        </div>
        <div className="col-11 col-sm-6 col-md-6 col-lg-6">
          <p className={styles.title}>
            All The <span>Great</span>
            Zwallet Features.
          </p>
          <div className={`${styles["features-card"]} col-12 col-md-12`}>
            <p>
              <strong>
                <span>1. </span>Small Fee
              </strong>
            </p>
            <p>
              We only charge 5% of every success transaction done in Zwallet
              app.
            </p>
          </div>
          <div className={`${styles["features-card"]} col-12 col-md-12`}>
            <p>
              <strong>
                <span>2. </span>Data Secured
              </strong>
            </p>
            <p>
              All your data is secured properly in our system and it’s
              encrypted.
            </p>
          </div>
          <div className={`${styles["features-card"]} col-12 col-md-12`}>
            <p>
              <strong>
                <span>3. </span>User Friendly
              </strong>
            </p>
            <p>
              Zwallet come up with modern and sleek design and not complicated.
            </p>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className={styles.about}>
        <p className={styles.title}>
          What Users are <span>Saying.</span>
        </p>
        <p className={styles["title-description"]}>
          We have some great features from the application and it’s totally free
          to <br /> use by all users around the world.
        </p>
        {/* card testimonial*/}
        <div className="row justify-content-center align-items-center w-100">
          <div className="col-2 col-sm-2 col-md-2">
            <button className="btn btn-light w-25 h-25"><i className="bi bi-arrow-left-circle"></i></button>
          </div>
          <div className="col-7 col-sm-7 col-md-7">
            <div className="container">
              <Image
             src={lock}
             width={150}
             height={150} alt="user testiimonial" />
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Alex Hansinburg</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Designer</h6>
                  <p className="card-text">
                    “This is the most outstanding app that I’ve ever try in my
                    live, this app is such an amazing masterpiece and it’s
                    suitable for you who is bussy with their bussiness and must
                    transfer money to another person aut there. Just try this
                    app and see the power!”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 col-sm-2 col-md-2">
            <button className="btn btn-light w-25 h-25"><i className="bi bi-arrow-right-circle"></i></button>
          </div>
        </div>
      </div>
    </>
  );
}
