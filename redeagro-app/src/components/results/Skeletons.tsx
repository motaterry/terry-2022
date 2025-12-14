export function PriceCardSkeleton() {
  return (
    <div className="border border-border bg-white/[0.20] rounded-none shadow-md p-4 animate-pulse">
      <div className="h-5 bg-gray-200 w-32 mb-3" />
      <div className="h-8 bg-gray-200 w-40 mb-2" />
      <div className="h-6 bg-gray-200 w-full mb-3" />
      <div className="h-4 bg-gray-200 w-48" />
    </div>
  )
}

export function WeatherCardSkeleton() {
  return (
    <div className="border border-border bg-white/[0.20] rounded-none shadow-md p-4 animate-pulse">
      <div className="h-5 bg-gray-200 w-32 mb-3" />
      <div className="grid grid-cols-7 gap-2 mb-3">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-3 bg-gray-200 w-full" />
            <div className="h-8 bg-gray-200" />
            <div className="h-3 bg-gray-200 w-full" />
          </div>
        ))}
      </div>
      <div className="h-4 bg-gray-200 w-48" />
    </div>
  )
}

export function NDVICardSkeleton() {
  return (
    <div className="border border-border bg-white/[0.20] rounded-none shadow-md p-4 animate-pulse">
      <div className="h-5 bg-gray-200 w-32 mb-3" />
      <div className="h-8 bg-gray-200 w-24 mb-2" />
      <div className="h-4 bg-gray-200 w-40 mb-3" />
      <div className="h-10 bg-gray-200 w-full" />
    </div>
  )
}
