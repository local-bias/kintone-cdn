(()=>{"use strict";const e={template:{version:"1.0.0"},"smart-view":{version:"2.26.0"},"smart-view-plus":{version:"3.26.0"},chatgpt:{version:"4.2.0"},"unrelated-lookup":{version:"1.10.0"},"sort-subtable":{version:"1.2.0"},tag:{version:"1.3.0"},toc:{version:"1.2.0"},calendar:{version:"0.6.0"},editable:{version:"1.2.0"},ref:{version:"1.0.0"},slider:{version:"1.0.0"},tab:{version:"2.6.0"},tooltip:{version:"1.1.0"},theme:{version:"1.0.0"},age:{version:"2.1.0"},xlsx:{version:"1.1.0"},"lookup-myself":{version:"2.1.0"},"simply-copy":{version:"2.0.0"},markdown:{version:"1.0.0"}};(()=>{try{for(const[o,n]of Object.entries(e))for(const e of["ribbit-kintone-plugin-","kintone-plugin-"]){const t=`${e}${o}`,i=localStorage.getItem(t);if(!i)continue;const s=JSON.parse(i);s.latestVersion=n.version,localStorage.setItem(t,JSON.stringify(s))}}catch(e){}})();try{const e={hostname:location.hostname};kintone.plugin.app.setProxyConfig("https://kintone-api-v1.konomi.app/api/kintone/user","POST",{},e,(()=>null))}catch(e){}})();