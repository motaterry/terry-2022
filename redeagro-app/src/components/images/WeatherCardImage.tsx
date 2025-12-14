import { Cloud, Sun, CloudRain } from 'lucide-react'

export function WeatherCardImage() {
  // Using Unsplash placeholder for weather map - can be replaced with actual weather map image
  // Using a gradient background with weather icons as fallback
  return (
    <div className="w-full h-48 bg-gradient-to-br from-info/10 via-background to-primary/5 flex items-center justify-center border-b border-border mb-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4">
          <Sun className="h-12 w-12 text-warning" />
        </div>
        <div className="absolute top-8 right-8">
          <Cloud className="h-10 w-10 text-muted-foreground" />
        </div>
        <div className="absolute bottom-6 left-1/3">
          <CloudRain className="h-8 w-8 text-info" />
        </div>
      </div>
      
      {/* Weather map placeholder - using Unsplash */}
      <img 
        src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=192&fit=crop&q=80" 
        alt="Weather map"
        className="w-full h-full object-cover opacity-60"
        loading="lazy"
        onError={(e) => {
          // Fallback to gradient if image fails to load
          const target = e.currentTarget as HTMLImageElement
          target.style.display = 'none'
        }}
      />
      
      {/* Overlay gradient to match color scheme */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-transparent" />
    </div>
  )
}

