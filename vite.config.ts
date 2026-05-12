// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// ... (resto dos comentários originais)
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { 
      entry: "server",
      preset: "vercel" // <-- Adiciona esta vírgula em cima e esta linha!
    },
  },
});