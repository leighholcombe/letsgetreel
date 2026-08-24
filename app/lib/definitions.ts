export interface Reel {
  id: number;
  source: string;
  description: string;
  location: string;
  music_title: string;
  music_artist: Array<string>;
  date: string;
}

export interface PageProps {
  searchParams: Promise<{ index?: string }>;
}