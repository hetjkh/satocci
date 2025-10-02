'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { useMusic } from '@/contexts/MusicContext';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Music, 
  Search, 
  TrendingUp,
  SkipForward,
  SkipBack
} from 'lucide-react';
import type { YouTubeTrack } from '@/lib/youtube';

interface MusicPlayerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Declare YouTube types for TypeScript
declare global {
  interface Window {
    YT: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubeMusicPlayer({ isOpen, onClose }: MusicPlayerProps) {
  const music = useMusic();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<YouTubeTrack[]>([]);
  const [trendingTracks, setTrendingTracks] = useState<YouTubeTrack[]>([]);
  const [activeTab, setActiveTab] = useState<'search' | 'trending'>('search');
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingTrending, setIsLoadingTrending] = useState(false);

  // Load trending music on mount
  useEffect(() => {
    if (activeTab === 'trending' && trendingTracks.length === 0) {
      fetchTrendingMusic();
    }
  }, [activeTab, trendingTracks.length]);

  const fetchTrendingMusic = async () => {
    setIsLoadingTrending(true);
    try {
      const response = await fetch('/api/youtube/trending');
      const data = await response.json();
      setTrendingTracks(data.tracks || []);
    } catch (error) {
      console.error('Error fetching trending music:', error);
      toast.error('Failed to load trending music');
    } finally {
      setIsLoadingTrending(false);
    }
  };

  // Debounced search to prevent too many API calls
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);

  const searchTracks = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Set new timeout for debounced search
    const timeout = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(`/api/youtube/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setSearchResults(data.tracks || []);
      } catch (error) {
        console.error('Error searching tracks:', error);
        toast.error('Failed to search music');
      } finally {
        setIsSearching(false);
      }
    }, 500); // Wait 500ms after user stops typing

    setSearchTimeout(timeout);
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden bg-background border-2 border-foreground">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 Space text-2xl font-semibold">
            <Music className="w-6 h-6" />
            Music Player
            {!music.isPlayerReady && (
              <span className="text-xs text-foreground/50 font-normal Poppins">
                (Loading player...)
              </span>
            )}
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-foreground hover:bg-foreground/10"
          >
            ×
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Current Track Display */}
          {music.currentTrack && (
            <div className="bg-foreground/5 rounded-2xl p-4 border border-foreground/20">
              <div className="flex items-center gap-4">
                <img 
                  src={music.currentTrack.thumbnail} 
                  alt={music.currentTrack.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="Space text-lg font-semibold">{music.currentTrack.title}</h3>
                  <p className="Poppins text-sm text-foreground/70">{music.currentTrack.artist}</p>
                  <p className="Poppins text-xs text-foreground/50">{music.currentTrack.duration}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={music.previous}
                    disabled={music.currentIndex === 0}
                    className="rounded-full"
                  >
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={music.isPlaying ? music.pause : music.resume}
                    className="rounded-full"
                  >
                    {music.isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={music.next}
                    disabled={music.currentIndex === music.queue.length - 1}
                    className="rounded-full"
                  >
                    <SkipForward className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={music.toggleMute}
                className="rounded-full"
              >
                {music.isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={music.volume}
                onChange={(e) => music.setVolume(parseInt(e.target.value))}
                className="w-24"
              />
              <span className="text-xs text-foreground/70">{music.volume}%</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <Button
              variant={activeTab === 'search' ? 'default' : 'outline'}
              onClick={() => setActiveTab('search')}
              className="Poppins rounded-full"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button
              variant={activeTab === 'trending' ? 'default' : 'outline'}
              onClick={() => setActiveTab('trending')}
              className="Poppins rounded-full"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Trending
            </Button>
          </div>

          {/* Search Tab */}
          {activeTab === 'search' && (
            <div className="space-y-4">
              <div className="relative">
                <Input
                  placeholder="Search for any song, artist, or album..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    searchTracks(e.target.value);
                  }}
                  className="Poppins rounded-full pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/50" />
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto">
                {isSearching && (
                  <div className="text-center text-foreground/50 py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground mx-auto mb-2"></div>
                    <p>Searching...</p>
                  </div>
                )}
                {!isSearching && searchResults.length === 0 && searchQuery && (
                  <p className="text-center text-foreground/50 py-8">No results found. Try a different search.</p>
                )}
                {!isSearching && searchResults.map((track) => (
                  <div
                    key={track.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-foreground/20 hover:bg-foreground/5 cursor-pointer transition-colors"
                    onClick={() => music.play(track, searchResults)}
                  >
                    <img 
                      src={track.thumbnail} 
                      alt={track.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="Space text-sm font-semibold line-clamp-1">{track.title}</h4>
                      <p className="Poppins text-xs text-foreground/70 line-clamp-1">{track.artist}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {track.duration}
                    </Badge>
                    <Button size="sm" className="rounded-full">
                      <Play className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trending Tab */}
          {activeTab === 'trending' && (
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {isLoadingTrending ? (
                <div className="text-center text-foreground/50 py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground mx-auto mb-2"></div>
                  <p>Loading trending music...</p>
                </div>
              ) : trendingTracks.length === 0 ? (
                <p className="text-center text-foreground/50 py-8">No trending music found.</p>
              ) : (
                trendingTracks.map((track) => (
                  <div
                    key={track.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-foreground/20 hover:bg-foreground/5 cursor-pointer transition-colors"
                    onClick={() => music.play(track, trendingTracks)}
                  >
                    <img 
                      src={track.thumbnail} 
                      alt={track.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="Space text-sm font-semibold line-clamp-1">{track.title}</h4>
                      <p className="Poppins text-xs text-foreground/70 line-clamp-1">{track.artist}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {track.duration}
                    </Badge>
                    <Button size="sm" className="rounded-full">
                      <Play className="w-3 h-3" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

