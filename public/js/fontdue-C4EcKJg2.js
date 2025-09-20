function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["dist/index-BVtdPf9R.js","dist/_commonjsHelpers-BosuxZz1.js","dist/client-tZXV4evm.js","dist/index-w8i_6f5j.js","dist/index-Dbsn6Man.js","dist/preload-helper-CSk3H0E6.js","dist/jsx-runtime-BjG_zV1W.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./preload-helper-CSk3H0E6.js";import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{i as l}from"./sdk-BO0x4Wxd.js";window.global||(window.global=window);l({dsn:"https://f03414c618e541d7b30a919d792d6ed7@sentry.io/1238875",environment:"production",allowUrls:["https://js.stripe.com"].concat("https://js.fontdue.com")});const r={initialize:o=>{o.url||console.error("fontdue.initialize must be called with `url` option"),Promise.all([e(()=>import("./index-BVtdPf9R.js").then(t=>t.i),__vite__mapDeps([0,1])),e(()=>import("./client-tZXV4evm.js").then(t=>t.c),__vite__mapDeps([2,1,0,3])),e(()=>import("./index-Dbsn6Man.js").then(t=>t.q),__vite__mapDeps([4,5,6,0,1,3]))]).then(([{default:t},{createRoot:n},{default:d}])=>{if(!r._root){const i=document.createElement("div");document.body.append(i),r._root=n(i)}r._root.render(s.jsx(d,{...o}))})}};export{r as default};
