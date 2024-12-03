import Navbar from "@/components/layout/navbar";
import "../globals.css";
import Footer from "@/components/layout/footer";
import HeaderRoute from "@/components/common/headerroute";
// import Footer from "../../components/layout/footer";
// import Navbar from "./components/layout/navbar";

export const metadata = {
  title: "M Shop",
  description: "A shop where you can get all items here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <HeaderRoute />
        {children}

        <div className="bg-[#191C1F] public-sans">
          <Footer />
        </div>
      </body>
    </html>
  );
}
