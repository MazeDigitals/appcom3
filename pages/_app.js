import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "antd/dist/reset.css";
import "../styles/index.scss";
import { Layout } from "antd";

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
