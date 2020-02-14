import { useEffect } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Prism from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-okaidia.css";
import "../styles/normalize.scss";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
