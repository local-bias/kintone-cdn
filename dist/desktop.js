(()=>{"use strict";const t="ribbit-kintone-plugin",e=()=>{const e=(()=>{const e=localStorage.getItem(t);if(!e)return{};try{const t=JSON.parse(e);return"object"==typeof t?t:{}}catch(t){return{}}})();return e.pluginNames=e.pluginNames||[],e.hostname=location.hostname,e.appName=cybozu?.data?.page?.APP_NAME||"",e.lastSent=e.lastSent||0,e},n=()=>{const n=e();((t,e)=>{const n=(new Date).getTime();n-(t.lastSent||0)<864e5||(kintone.proxy("https://kintone.api.konomi.app/api/kintone/user","POST",{},{...t,page:e}),t.lastSent=n)})(n,"desktop"),(e=>{localStorage.setItem(t,JSON.stringify(e))})(n)};try{n()}catch(t){}})();