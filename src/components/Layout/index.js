import s from "./style.module.css";

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  const sectionStyles = {};

  if (urlBg) {
    sectionStyles.backgroundImage = `url(${urlBg})`;
  }

  if (colorBg) {
    sectionStyles.backgroundColor = colorBg;
  }

  return (
    <section className={s.root} id={id} style={sectionStyles}>
      <div className={s.wrapper}>
        <article>
          {title && (
            <div className={s.title}>
              <h3>{title}</h3>
              <span className={s.separator}></span>
            </div>
          )}
          {descr && (
            <div className={`${s.desc} ${s.full}`}>
              <p>{descr}</p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Layout;
