import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanstackProvider from "@/components/Providers/TanstackProvider";
import StoreProvider from "@/components/Providers/StoreProvider";
import CartModal from "@/components/CartModal/CartModal";

export const metadata = {
  title: "Buy Handmade Paintings Online - Art By Maudsch",
  description:
    "ArtbyMaudsch.com is the number one place to buy unique handmade paintings. Whether you're decorating, renovating or building, Art by Maudsch handmade paintings are the best way to add character and colors to your space.",
};

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <TanstackProvider>
          <StoreProvider>
            <>
              <Header />
              {children}
              <Footer />
              <div id="modal" />
              <CartModal />
            </>
          </StoreProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
