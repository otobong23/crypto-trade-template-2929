import { useEffect } from "react";

interface DriftWidgetProps {
   /** Your Drift embed ID, found in your Drift account settings. */
   embedId: string;
}

/**
 * DriftWidget
 *
 * Loads the Drift chat widget script once when mounted.
 * Usage: render <DriftWidget embedId="xxxxxxxxxx" /> once near the
 * root of your app (e.g. in App.tsx or a layout component).
 */
export default function DriftWidget({ embedId }: DriftWidgetProps) {
   useEffect(() => {
      if (!embedId) {
         console.error("DriftWidget: missing required `embedId` prop");
         return;
      }

      // Avoid double-injecting the snippet if this component
      // mounts more than once (e.g. React StrictMode, route changes).
      if (window.driftt || window.drift) {
         return;
      }

      (function () {
         const t = (window.driftt = window.drift = window.driftt || ([] as any));

         if (t.init) return;

         if (t.invoked) {
            if (window.console && console.error) {
               console.error("Drift snippet included twice.");
            }
            return;
         }

         t.invoked = true;
         t.methods = [
            "identify",
            "config",
            "track",
            "reset",
            "debug",
            "show",
            "ping",
            "page",
            "hide",
            "off",
            "on",
         ];

         t.factory = (method) =>
            (...args: unknown[]) => {
               const n = args as unknown[];
               n.unshift(method);
               t.push?.(n);
               return t;
            };

         t.methods.forEach((method) => {
            (t as any)[method] = t.factory!(method);
         });

         t.load = (id: string) => {
            const interval = 3e5; // 5 minutes, matches original cache-busting bucket
            const bucket = Math.ceil(Number(new Date()) / interval) * interval;

            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.crossOrigin = "anonymous";
            script.src = `https://js.driftt.com/include/${bucket}/${id}.js`;

            const firstScript = document.getElementsByTagName("script")[0];
            firstScript.parentNode?.insertBefore(script, firstScript);
         };
      })();

      window.drift!.SNIPPET_VERSION = "0.3.1";
      window.drift!.load!(embedId);
      window.drift!.show();

      // No cleanup: Drift's own loader guards against double-init,
      // and removing the widget script on unmount can break the
      // singleton it sets up on `window`.
   }, [embedId]);

   // This component renders nothing itself — Drift injects its own
   // widget UI into the page.
   return null;
}