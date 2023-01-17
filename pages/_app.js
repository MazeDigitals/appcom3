import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Layout } from "antd";
import "antd/dist/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  const { Content } = Layout;
  return (
    <Layout>
      <Header />
      <Content>
        <div className="site-layout-content">
          <div className="page_data">
            <Component {...pageProps} />
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
