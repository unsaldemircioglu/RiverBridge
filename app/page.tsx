// import Image from "next/image";
import Navbar from "@/app/components/Navbar/Navbar"
import  Footer  from "./components/Footer/Footer";
import Article from "@/app/components/Articles/Articles"

export default function Home() {
  return (
    <main>
      <>
      <Navbar/>
      <Article/>
      <Footer/>
      </>
    </main>
  );
}
