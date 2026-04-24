import React, { useEffect, useRef } from 'react';

const InteractiveGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const activeCellsRef = useRef<Map<string, number>>(new Map());
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cellSize = 32;
    const driftSpeed = 0.05; // Slightly increased speed for more dynamic movement
    const decaySpeed = 0.02; // How fast the hover fill fades

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    handleResize();

    let lastTime = performance.now();
    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Update Drift smoothly without jumps
      offsetRef.current.x -= driftSpeed * deltaTime;
      offsetRef.current.y -= driftSpeed * deltaTime;

      // Continuous wrap-around prevents 'blinking'
      while (offsetRef.current.x <= -cellSize) offsetRef.current.x += cellSize;
      while (offsetRef.current.y <= -cellSize) offsetRef.current.y += cellSize;
      while (offsetRef.current.x > 0) offsetRef.current.x -= cellSize;
      while (offsetRef.current.y > 0) offsetRef.current.y -= cellSize;

      // 2. Identify and Update Active Cells
      const gridX = Math.floor((mouseRef.current.x - offsetRef.current.x) / cellSize);
      const gridY = Math.floor((mouseRef.current.y - offsetRef.current.y) / cellSize);
      const cellKey = `${gridX}_${gridY}`;

      if (mouseRef.current.x >= 0) {
        activeCellsRef.current.set(cellKey, 1.0);
      }

      // 3. Draw Grid Lines
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)'; // Increased visibility
      const isDarkMode = document.documentElement.classList.contains('dark');
      if (isDarkMode) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      }

      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = offsetRef.current.x - cellSize; x < canvas.width + cellSize; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offsetRef.current.y - cellSize; y < canvas.height + cellSize; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 4. Draw & Update Active Cells
      activeCellsRef.current.forEach((alpha, key, map) => {
        const [cx, cy] = key.split('_').map(Number);
        const drawX = cx * cellSize + offsetRef.current.x;
        const drawY = cy * cellSize + offsetRef.current.y;

        ctx.fillStyle = isDarkMode
          ? `rgba(255, 255, 255, ${alpha * 0.15})`
          : `rgba(0, 0, 0, ${alpha * 0.08})`;
        ctx.fillRect(drawX + 1, drawY + 1, cellSize - 1, cellSize - 1);

        const newAlpha = alpha - decaySpeed;
        if (newAlpha <= 0) {
          map.delete(key);
        } else {
          map.set(key, newAlpha);
        }
      });

      requestAnimationFrame(animate);
    };

    const requestId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  );
};

export default InteractiveGrid;
