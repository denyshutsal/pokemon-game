import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import BackgroundImage1 from "./assets/bg1.jpg";
import BackgroundImage3 from "./assets/bg3.jpg";

const App = () => {
  return (
    <>
      <Header
        title="Hello World, React.JS!"
        descr="Гораздо легче найти ошибку, чем истину."
      />
      <Layout
        id="section1"
        title="Section #1"
        descr="Лучший человек скромен в своей речи, но решителен в своих действиях."
        urlBg={BackgroundImage1}
        colorBg={false}
      />
      <Layout
        id="section2"
        title="Section #2"
        descr="В одном часе любви – целая жизнь."
        urlBg={false}
        colorBg="red"
      />
      <Layout
        id="section3"
        title="Section #3"
        descr="Жизнь требует движений."
        urlBg={BackgroundImage3}
        colorBg={false}
      />
      <Footer />
    </>
  );
};

export default App;
