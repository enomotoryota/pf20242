import "../Footer/Footer.css";

import IMG1 from "../img//グッズ/名刺.png";

function Footer() {
  return (
    <div className="footer">
      <section className="footerSection">
        <div className="footerSectionIcons">
          <img src={IMG1} alt="" />
        </div>

        {/* <p>React✖️TypeScript✖️vite</p> */}

        <div className="footerSectionSns">
          <a href="https://twitter.com/On__Diary">
            <div>X/Twitter</div>
          </a>

          <a href="https://www.youtube.com/channel/UCi23wOJCjMeDEHkGtco74Ng">
            <div>Youtube</div>
          </a>
          <a href="https://store.line.me/stickershop/product/26475694/ja">
            <div>LINEスタンプ</div>
          </a>
          <a href="https://www.wantedly.com/id/o1992">
            <div>Wantedly</div>
          </a>
        </div>
      </section>
      <div className="footerFooter">
        <p>©on◉uə</p>

        <h1>FOOTER</h1>
        <p className="footerFooter-p">©en◉m0To</p>
      </div>
    </div>
  );
}

export default Footer;
