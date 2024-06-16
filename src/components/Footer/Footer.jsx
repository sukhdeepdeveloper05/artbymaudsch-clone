import classes from "./Footer.module.css";
import Faqs from "./Faqs";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={classes["site-footer"]}>
      <div className={classes["faq-with-guarantee__wrapper"]}>
        <div className={classes["faq-with-guarantee__inner"]}>
          <Faqs />
          <div className={classes["guarantee_col"]}>
            <div className={classes["guarantee_div"]}>
              <h5 className={classes["guarantee_title"]}>Our Guarantee</h5>
              <div className={classes["guarantee_description"]}>
                Get image previews of your painting before shipment + 60 day
                extended returns.
              </div>
            </div>

            <div className={classes["guarantee_div"]}>
              <h5 className={classes["guarantee_title"]}>24/7 Support</h5>
              <div className={classes["guarantee_description"]}>
                Contact us with any questions you have. Our support team is
                available 24/7
              </div>
            </div>

            <div className={classes["guarantee_div"]}>
              <h5 className={classes["guarantee_title"]}>Free Shipping</h5>
              <div className={classes["guarantee_description"]}>
                All products are shipped worldwide free of charge. Framed
                paintings arrive ready to hang.
              </div>
            </div>

            <div className={classes["guarantee_div"]}>
              <h5 className={classes["guarantee_title"]}>Hand Painted</h5>
              <div className={classes["guarantee_description"]}>
                All products are handmade by professional artists. Oil &amp;
                acrylic paint on canvas.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["main-footer"]}>
        <div className={classes["footer__inner"]}>
          <div className={classes["footer-left"]}>
            <div className={classes["footer-logo"]}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0379/6680/7179/files/artbymaudsch_logo_300x.png?v=1628086269"
                alt="site-footer-logo"
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>
            <p className={classes["description"]}>
              Art by Maudsch is an Amsterdam-based art collective that presents
              the world with art from emerging and aspiring artists.
            </p>
            <div className={classes["newsletter-wrapper"]}>
              <h2>Subscribe to our newsletter</h2>
              <p>Occasionally receive latest news and promotions.</p>
              <form className={classes["newsletter-form"]}>
                <input
                  type="email"
                  name="email"
                  autoComplete="true"
                  className={classes["newsletter_input"]}
                  placeholder="Your email"
                  required
                />
                <button
                  type="submit"
                  className={classes["newsletter-submit-btn"]}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className={classes["footer-right"]}>
            <div className={classes["company-links"]}>
              <h2 className={classes["links__title"]}>Company</h2>
              <ul className={classes["links__list"]}>
                <li className={classes["links-list__item"]}>
                  <Link href="#">About Us</Link>
                </li>
                <li className={classes["links-list__item"]}>
                  <Link href="#">Reviews</Link>
                </li>
                <li className={classes["links-list__item"]}>
                  <Link href="#">Press</Link>
                </li>
                <li className={classes["links-list__item"]}>
                  <Link href="#">Terms of Service</Link>
                </li>
                <li className={classes["links-list__item"]}>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className={classes["shop-links"]}>
              <h2 className={classes["links__title"]}>Shop</h2>
              <ul className={classes["links__list"]}>
                <li className={classes["links-list__item"]}>
                  <Link href="/collections/all-pieces">All Paintings</Link>
                </li>
                <li className={classes["links-list__item"]}>
                  <Link href="/collections/new-pieces">New Pieces</Link>
                </li>
                <li className={classes["links-list__item"]}>
                  <Link href="/collections/trending">Trending</Link>
                </li>
                <li className={classes["links-list__item"]}>
                  <Link href="/collections/bestsellers">Best sellers</Link>
                </li>
                <li className={classes["links-list__item"]}>
                  <Link href="/collections">Collections</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
