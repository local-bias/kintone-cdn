(()=>{"use strict";const e="https://v1.kintone-plugin.workers.dev/analytics";class t{#e;#t;static async restore(e){const n=localStorage.getItem(e.key)??"{}";let a={};try{a=JSON.parse(n)}catch(e){}const o=await e.migrator(a);return new t({key:e.key,stored:o})}constructor(e){this.#e=e.key,this.#t=e.stored}store(){const e=JSON.stringify(this.#t);localStorage.setItem(this.#e,e)}get value(){return this.#t}}(async n=>{try{const a=await t.restore({key:"ribbit-kintone-plugin",migrator:e=>({lastSent:0,localUsageCount:0,...e,..."number"!=typeof e.lastSent&&{lastSent:0},..."number"!=typeof e.localUsageCount&&{localUsageCount:0}})});try{a.value.localUsageCount+=1,a.store()}catch(e){}const o=Date.now();if(o-a.value.lastSent<864e5)return;const i={"Content-Type":"application/json"},l=async e=>{try{await kintone.plugin.app.proxy(n,"https://data.konomi.app/v1/kintone/plugin/errors","POST",i,{hostname:location.hostname,message:e,pluginId:n,cdnProvider:"Cloudflare"},(()=>{}),(()=>{}))}catch(e){}},s={hostname:location.hostname,usageCount:a.value.localUsageCount,pluginId:n,cdnProvider:"Cloudflare"};await Promise.allSettled([e].map((e=>kintone.plugin.app.proxy(n,e,"POST",i,s,(()=>{}),l))));try{a.value.lastSent=o,a.value.localUsageCount=0,a.store()}catch(e){}}catch(e){}try{const e="🐸ribbit-kintone-plugin-notification",t=localStorage.getItem(e)??"{}",a=JSON.parse(t),o=new Date;if(a.lastNotified){const e=new Date(a.lastNotified).getTime();if(o.getTime()-e<828e5)return}const i={anfkgeoaaholjcnfajdibiipjdllokli:{name:"年齢自動計算プラグイン"},dbmjjoeelibfkgmddkndhmbgdaannflg:{name:"自アプリルックアッププラグイン"},ejjafdmbiehloffkhejlobknmplhnfnn:{name:"関連付けないルックアッププラグイン"},pnaoddlebpicbenjmkdkijndepeldjlk:{name:"カレンダープラグイン"},mkmpkkpebhgnbibbblfkdcnmecgmncka:{name:"一覧高速検索＆絞り込みプラグイン"},kndhcmbfndhdhiogiegkjibgfmbaeeko:{name:"タグ付けプラグイン"},ehghocoakgmmkgklfkeoaefipmmnkeka:{name:"ChatGPT連携プラグイン"},dlomejmmkgmfghibfldemkkjnocidjbf:{name:"Excel出力プラグイン"},bnnpkekfambhmhgdogjmngphacdbpefm:{name:"ツールチップ プラグイン"},mjpdnffgganakpggdmemflhoifcfgmic:{name:"目次プラグイン"},pndoajcolcaceblfiheomkglaaenijdc:{name:"フィールド動的入力制御プラグイン"},jdbhkepieikklgemdbcfcbogbiahalfg:{name:"タブ表示プラグイン"}}[n];if(i){const t=document.createElement("aside");t.textContent=`[${i.name}] プラグインが古くなっています。最新のバージョンに更新してください。`,t.style.position="fixed",t.style.bottom="4px",t.style.right="4px",t.style.zIndex="9999",t.style.padding="10px",t.style.backgroundColor="#fff",t.style.border="1px solid #e9ecef",t.style.borderRadius="4px",t.style.color="#495057",t.style.fontSize="12px",document.body.append(t),setTimeout((()=>{t.remove(),localStorage.setItem(e,JSON.stringify({lastNotified:o.toISOString()}))}),1e4)}}catch(e){}})(kintone.$PLUGIN_ID)})();