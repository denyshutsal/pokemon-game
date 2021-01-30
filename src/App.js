import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import BackgroundImage1 from "./assets/bg1.jpg";
import BackgroundImage3 from "./assets/bg3.jpg";

const App = () => {
  return (
    <>
      <Header
        title="Pokemon Game"
        descr="This is simple triple triad card game"
      />
      <Layout
        id="rules"
        title="Section #1"
        descr="Лучший человек скромен в своей речи, но решителен в своих действиях."
        urlBg={BackgroundImage1}
      />
      <Layout
        id="cards"
        title="Section #2"
        descr="В одном часе любви – целая жизнь."
        colorBg="#a49da7"
      />
      <Layout
        id="about"
        title="Section #3"
        descr="Жизнь требует движений."
        urlBg={BackgroundImage3}
      />
      <Footer />
    </>
  );
};

export default App;
