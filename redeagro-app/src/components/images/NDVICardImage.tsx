export function NDVICardImage() {
  // Using Unsplash placeholder for satellite/NDVI map - can be replaced with actual NDVI map
  return (
    <div className="w-full h-48 bg-gradient-to-br from-success/10 via-background to-primary/5 flex items-center justify-center border-b border-border mb-6 relative overflow-hidden">
      {/* NDVI map placeholder - using Unsplash satellite/agricultural image */}
      <img 
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=192&fit=crop&q=80" 
        alt="NDVI vegetation map"
        className="w-full h-full object-cover opacity-70"
        loading="lazy"
        onError={(e) => {
          // Fallback to gradient if image fails to load
          const target = e.currentTarget as HTMLImageElement
          target.style.display = 'none'
        }}
      />
      
      {/* Color overlay to simulate NDVI color mapping (green = healthy vegetation) */}
      <div className="absolute inset-0 bg-gradient-to-br from-success/30 via-transparent to-success/10" />
      
      {/* Optional: Add NDVI color scale indicator */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-background/90 px-2 py-1 border border-border">
        <div className="flex gap-0.5">
          <div className="w-3 h-3 bg-red-500" title="Low vegetation" />
          <div className="w-3 h-3 bg-yellow-500" title="Moderate vegetation" />
          <div className="w-3 h-3 bg-green-500" title="High vegetation" />
        </div>
        <span className="text-[8px] font-semibold text-secondary/70 ml-1">NDVI</span>
      </div>
    </div>
  )
}

