
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import GameScreen from '@/components/GameScreen';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<GameScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
