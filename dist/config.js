(()=>{"use strict";var o={460:()=>{const o={age:{version:"3.0.0"},calendar:{version:"0.6.0"},chatgpt:{version:"4.10.0"},concatenation:{version:"1.1.0"},editable:{version:"1.2.0"},"lookup-myself":{version:"3.0.0"},markdown:{version:"1.0.0"},ref:{version:"1.0.0"},"simply-copy":{version:"2.0.0"},slider:{version:"1.0.0"},"smart-view":{version:"3.5.0"},"smart-view-plus":{version:"4.5.0"},"sort-subtable":{version:"1.2.0"},tab:{version:"2.7.0"},tag:{version:"1.5.0"},template:{version:"1.0.0"},theme:{version:"1.0.0"},toc:{version:"1.2.0"},tooltip:{version:"2.1.0"},"unrelated-lookup":{version:"1.11.0"},xlsx:{version:"1.1.0"}};try{for(const[e,n]of Object.entries(o))for(const o of["ribbit-kintone-plugin-","kintone-plugin-"]){const t=`${o}${e}`,r=localStorage.getItem(t);if(!r)continue;const i=JSON.parse(r);i.latestVersion=n.version,localStorage.setItem(t,JSON.stringify(i))}}catch(o){}}},e={};function n(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={exports:{}};return o[t](i,i.exports,n),i.exports}(()=>{n(460);try{const o={hostname:location.hostname};kintone.plugin.app.setProxyConfig("https://kintone-api-v1.konomi.app/api/kintone/user","POST",{},o,(()=>null))}catch(o){}})()})();