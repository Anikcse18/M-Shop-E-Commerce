// import { Save } from "lucide-react";

import ComputerAcess from "../../components/home/computerAcess";
import Featureproduct from "../../components/home/featureproduct";

import Hero from "../../components/home/hero";
import Intriducing from "../../components/home/intriducing";

import Newsletter from "../../components/home/newsletter";
import Shopcategory from "../../components/home/shopcategory";
import Saveupto from "../../components/home/saveupto";
import Flashsell from "../../components/home/flashsell";
// import LatestNews from "./components/home/latest";
import BestDeal from "@/components/home/bestdeal";
import LatestNews from "@/components/home/latest";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <Hero />
      <BestDeal />
      <Shopcategory />
      <Featureproduct />
      <Intriducing />
      <ComputerAcess />
      <Saveupto />
      <Flashsell />
      {/* <LatestNews /> */}
      <LatestNews />
      <Newsletter />
    </div>
  );
}
