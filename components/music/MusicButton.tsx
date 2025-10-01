'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Music, Music2 } from 'lucide-react';
import MusicPlayer from './MusicPlayer';

export default function MusicButton() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsPlayerOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 bg-green-400 text-foreground border-2 border-foreground hover:bg-green-500 transition-colors shadow-lg"
        size="icon"
      >
        <Music2 className="w-6 h-6" />
      </Button>

      <MusicPlayer 
        isOpen={isPlayerOpen} 
        onClose={() => setIsPlayerOpen(false)} 
      />
    </>
  );
}
