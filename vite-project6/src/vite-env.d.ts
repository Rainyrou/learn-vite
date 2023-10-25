/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_IMG_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
