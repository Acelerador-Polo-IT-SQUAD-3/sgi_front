/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly API_URL: string
    // define otras variables de entorno aquí
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  