'use client';

import { SplineScene } from '@/components/ui/spline';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        // fill="white" // Removed fill prop as it's no longer supported by the updated Spotlight component
      />
      
      <div className="flex h-full justify-center items-center"> {/* Centering the Spline scene */}
        {/* Spline scene now takes full width and height of the card */}
        <div className="w-full h-full relative"> {/* Ensure Spline takes full space */}
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full" 
          />
        </div>
      </div>
    </Card>
  )
}
