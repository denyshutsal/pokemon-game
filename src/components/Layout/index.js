import s from "./style.module.css";

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  const sectionStyles = {
    backgroundImage: `url(${urlBg})`,
    backgroundColor: `${colorBg}`,
  };
  return (
    <section className={s.root} id={id} style={sectionStyles}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            {title && <h3>{title}</h3>}
            <span className={s.separator}></span>
          </div>
          <div className={s.desc + " " + s.full}>{descr && <p>{descr}</p>}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
