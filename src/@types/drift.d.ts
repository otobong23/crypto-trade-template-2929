export { };

type DriftMethodName =
   | "identify"
   | "config"
   | "track"
   | "reset"
   | "debug"
   | "show"
   | "ping"
   | "page"
   | "hide"
   | "off"
   | "on";

interface DriftApi {
   (...args: unknown[]): DriftApi;

   api: any;

   init?: boolean;
   invoked?: boolean;
   methods?: DriftMethodName[];
   factory?: (method: DriftMethodName) => (...args: unknown[]) => DriftApi;
   load?: (embedId: string) => void;
   push?: (args: unknown[]) => void;
   SNIPPET_VERSION?: string;

   identify: (userId: string, attributes?: Record<string, unknown>) => void;
   config: (options: Record<string, unknown>) => void;
   track: (event: string, attributes?: Record<string, unknown>) => void;
   reset: () => void;
   debug: (enabled?: boolean) => void;
   show: () => void;
   ping: () => void;
   page: (path?: string) => void;
   hide: () => void;
   off: (event: string, handler: (...args: unknown[]) => void) => void;
   on: (event: string, handler: (...args: unknown[]) => void) => void;
}

declare global {
   interface Window {
      drift?: DriftApi;
      driftt?: DriftApi;
   }
}