const CACHE = "hasyin-b1-trainer-beta-3-0-1-r1";
const ASSETS = [
  "./index.html",
  "./cards-v3.js",
  "./checker-v3.js",
  "./app-v3.js", "./packages.js", "./schema.js",
  "./manifest.webmanifest",
  "./icon.svg",
];
const scope = self.registration.scope;
const paths = new Set(
  ASSETS.map((asset) => new URL(asset, self.registration.scope).href),
);

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll(
        ASSETS.map(
          (asset) =>
            new Request(asset + "?release=" + CACHE, { cache: "reload" }),
        ),
      );
      const shell = await cache.match("./index.html", { ignoreSearch: true });
      if (
        !shell ||
        !(await shell.text()).includes(
          'name="application-version" content="3.0.1"',
        )
      ) {
        throw new Error("Incomplete Beta 3.0.1 release");
      }
      await self.skipWaiting();
    })(),
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(
            (key) => key.startsWith("hasyin-b1-trainer-") && key !== CACHE,
          )
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});
self.addEventListener("fetch", (event) => {
  const url = event.request.url.split("?")[0];
  if (event.request.method !== "GET" || (url !== scope && !paths.has(url)))
    return;
  event.respondWith(
    (async () => {
      const cached = await (
        await caches.open(CACHE)
      ).match(url === scope ? "./index.html" : event.request, {
        ignoreSearch: true,
      });
      return cached || fetch(event.request);
    })(),
  );
});
