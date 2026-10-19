declare module 'liquid-gl' {
  type LiquidGLOptions = {
    engine?: 'auto' | 'webgpu' | 'webgl2' | 'webgl';
    snapshot?: string;
    target?: string;
    content?: string | boolean;
    resolution?: number;
    zIndex?: number;
    refraction?: number;
    aberration?: number;
    bevelDepth?: number;
    bevelWidth?: number;
    frost?: number;
    shadow?: boolean;
    specular?: boolean;
    reveal?: 'none' | 'fade';
    tilt?: boolean;
    tiltFactor?: number;
    tiltEase?: number;
    draggable?: boolean;
    interaction?: 'none' | 'fluid';
    interactionStrength?: number;
    interactionRadius?: number;
    interactionViscosity?: number;
    magnify?: number;
    tint?: string | null;
    helper?: boolean;
    on?: {
      init?: (instance: unknown) => void;
      dragstart?: (instance: unknown, info: { x: number; y: number }) => void;
      drag?: (instance: unknown, info: { x: number; y: number }) => void;
      dragend?: (instance: unknown, info: { x: number; y: number }) => void;
    };
  };

  type LiquidGLInstance = {
    destroy: () => void;
    setTint?: (tint: string | null) => void;
    setDraggable?: (enabled: boolean) => void;
  };

  interface LiquidGLFn {
    (options?: LiquidGLOptions): LiquidGLInstance | LiquidGLInstance[];
    registerDynamic: (elements: string | Element | Element[]) => void;
    syncWith: (config?: Record<string, unknown>) => {
      lenis?: unknown;
      locomotiveScroll?: unknown;
    };
  }

  const liquidGL: LiquidGLFn;
  export default liquidGL;
}
