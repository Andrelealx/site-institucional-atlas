/// <reference types="astro/client" />

/**
 * API global exposta por `src/components/MetaPixel.astro`.
 * Opcional de propósito: o script é `is:inline` no <head>, então na prática já
 * existe quando a ilha React hidrata — mas marcar como opcional evita que o site
 * quebre se o componente do Pixel for removido.
 */
declare global {
  interface Window {
    atlasTrack?: (name: string, params?: Record<string, unknown>) => void;
  }
}

export {};
