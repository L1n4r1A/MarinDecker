/* 起動時即TL(改良) */
/* Create by taiy (20041203t) */
(async()=>{const t=document.body,e={childList:!0,subtree:!0},n=async()=>{r.disconnect();try{const t=await(async()=>{try{return TD.settings.getComposeStayOpen()}catch(t){return null}})();if(!0===t){const e=document.querySelector('.js-compose-close');if(!e)throw new Error;const n=document.createElement('style');return n.insertAdjacentHTML('beforeend','html .drawer[data-drawer=compose]{visibility:hidden!important}html .js-app-content,html .js-app-content.is-open{transition-duration:0s!important;transform:translateX(0)!important;margin-right:0!important}'),document.head.insertAdjacentElement('beforeend',n),e.click(),await(async t=>new Promise((e=>setTimeout(e,t))))(500),n.remove(),t}if(!1===t)return t;throw new Error}catch{r.observe(t,e)}},r=new MutationObserver((()=>{n()}));r.observe(t,e),n()})();