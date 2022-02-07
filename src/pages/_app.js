import "src/common/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
// import Aside from "src/common/components/Aside";
// import Header from "src/common/components/Header";
// import Footer from "src/common/components/Footer";

// redux, persis provider
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
