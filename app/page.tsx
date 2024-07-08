import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills"
import ToTop from "@/components/ToTop";

export default function Home() {
  return (
    <main className="mainPage flex min-h-screen flex-col items-center align-middle">
      
      <ToTop/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </main>
  );
}
