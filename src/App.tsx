
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Visa from "./pages/Visa";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import StudyAbroad from "./pages/StudyAbroad";
import StudyAbroadMalta from "./pages/StudyAbroadMalta";
import StudyAbroadDenmark from "./pages/StudyAbroadDenmark";
import StudyAbroadCyprus from "./pages/StudyAbroadCyprus";
import StudyAbroadMalaysia from "./pages/StudyAbroadMalaysia";
import StudyAbroadChina from "./pages/StudyAbroadChina";
import StudyAbroadSweden from "./pages/StudyAbroadSweden";
import StudyAbroadSouthKorea from "./pages/StudyAbroadSouthKorea";
import StudyAbroadRussia from "./pages/StudyAbroadRussia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/study-abroad/malta" element={<StudyAbroadMalta />} />
          <Route path="/study-abroad/denmark" element={<StudyAbroadDenmark />} />
          <Route path="/study-abroad/cyprus" element={<StudyAbroadCyprus />} />
          <Route path="/study-abroad/malaysia" element={<StudyAbroadMalaysia />} />
          <Route path="/study-abroad/china" element={<StudyAbroadChina />} />
          <Route path="/study-abroad/sweden" element={<StudyAbroadSweden />} />
          <Route path="/study-abroad/south-korea" element={<StudyAbroadSouthKorea />} />
          <Route path="/study-abroad/russia" element={<StudyAbroadRussia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
