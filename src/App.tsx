import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TVC from "./pages/TVC";
import AngelCare from "./pages/AngelCare";
import AyushJain from "./pages/AyushJain";
import Chandrani from "./pages/Chandrani";
import ChandraniWebsite from "./pages/ChandraniWebsite";
import ChanchalPatra from "./pages/ChanchalPatra";
import KushChand from "./pages/KushChand";
import FoodPanda from "./pages/FoodPanda";
import LeisureAudioConsolidated from "./pages/LeisureAudioConsolidated";
import InFlow from "./pages/InFlow";
import InexCollection from "./pages/InexCollection";
import AmitKumar from "./pages/AmitKumar";
import LinenStory from "./pages/LinenStory";
import LegalMedia from "./pages/LegalMedia";
import Subba from "./pages/Subba";
import AssamEduverse from "./pages/AssamEduverse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tvc" element={<TVC />} />
          <Route path="/angelcare" element={<AngelCare />} />
          <Route path="/ayushjain" element={<AyushJain />} />
          <Route path="/chandrani" element={<Chandrani />} />
          <Route path="/chandrani-website" element={<ChandraniWebsite />} />
          <Route path="/chanchal-patra" element={<ChanchalPatra />} />
          <Route path="/kushchand" element={<KushChand />} />
          <Route path="/foodpanda" element={<FoodPanda />} />
          <Route path="/leisure-audio" element={<LeisureAudioConsolidated />} />
          <Route path="/inflow" element={<InFlow />} />
          <Route path="/inex-collection" element={<InexCollection />} />
          <Route path="/amit-kumar" element={<AmitKumar />} />
          <Route path="/linen-story" element={<LinenStory />} />
          <Route path="/legal-media" element={<LegalMedia />} />
          <Route path="/subba" element={<Subba />} />
          <Route path="/assam-eduverse" element={<AssamEduverse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
