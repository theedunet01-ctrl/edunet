
import React, { useRef, useEffect } from "react";

// Professional animated background with subtle geometric patterns
const Animated3DBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const width = window.innerWidth;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    // Professional geometric shapes with subtle animation
    const shapes = Array.from({ length: 12 }, (_, i) => ({
      x: (i % 4) * (width / 5) + width / 10,
      y: Math.floor(i / 4) * 130 + 60,
      size: Math.random() * 40 + 60,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.3 + 0.1,
      type: i % 3 // 0: circle, 1: square, 2: triangle
    }));

    function draw(t: number) {
      // Professional gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#f8fafc');
      gradient.addColorStop(0.5, '#e2e8f0');
      gradient.addColorStop(1, '#cbd5e1');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      shapes.forEach((shape, idx) => {
        ctx.save();
        
        // Update rotation
        shape.rotation += shape.rotationSpeed;
        
        // Subtle floating animation
        const floatY = Math.sin(t / 1000 + idx * 0.5) * 10;
        
        ctx.translate(shape.x, shape.y + floatY);
        ctx.rotate(shape.rotation);
        
        // Professional color palette
        const colors = ['#1e40af', '#0f172a', '#475569'];
        ctx.fillStyle = colors[idx % colors.length] + Math.floor(shape.opacity * 255).toString(16).padStart(2, '0');
        
        ctx.beginPath();
        
        if (shape.type === 0) {
          // Circle
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
        } else if (shape.type === 1) {
          // Square
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        } else {
          // Triangle
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.closePath();
        }
        
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    draw(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 w-full pointer-events-none z-0">
      <canvas 
        ref={canvasRef} 
        aria-hidden 
        height={400} 
        className="block w-full h-[400px] min-h-[300px] opacity-40" 
      />
      {/* Professional overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/60 to-slate-100/80" />
    </div>
  );
};

export default Animated3DBackground;
