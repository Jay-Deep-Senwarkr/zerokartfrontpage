import Behind from "@/components/Behind";
import Blac from "@/components/Blac";
import Footer from "@/components/Footer";
import GetTheLook from "@/components/GetTheLook";
import LeftSide from "@/components/LeftSide";
import MainPortion from "@/components/MainPortion";
import Navbar from "@/components/Navbar";
import Popular from "@/components/Popular";
import Shippment from "@/components/Shippment";
import ShopByBrand from "@/components/ShopByBrand";

export default function Home() {
  return (
    <div>
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>
      <main>
        <MainPortion />
      </main>
      <aside>
        <LeftSide />
      </aside>
      <ShopByBrand />
      <GetTheLook />
      <Shippment />
      <Popular />
      <Blac />
      <Behind />
      <Footer />
    </div>
  );
}
