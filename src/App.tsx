import { motion } from 'framer-motion';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <motion.div
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Background />
      <div className="relative z-10">
        <Header className="pt-6" />
        <main className="flex flex-col items-center">
          <Hero />
        </main>
      </div>
    </motion.div>
  );
}

export default App;
