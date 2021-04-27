(()=>{
/* テーマの設定ここから */
const theme = {
  /* 必須 prefix: テーマを示す一意の単語 / 例: taiyme */
  prefix: '',
  /* 必須 name: テーマ名 / 例: Taiy.me */
  name: '',
  /* 必須 version: バージョン名 / 例: 33.4 */
  version: '',
  /* 以降オプション[,]を忘れずに */
  /* author: 製作者名 / 例: taiy */
  author: ''
};
/* CSSを記入 */
const css = ``;
/* テーマの設定ここまで */
const h=document.documentElement;h.classList.add(`md-theme-${theme.prefix}`);h.id=theme.prefix;h.dataset.mdTheme=`${theme.name}/${theme.version}`;const s=document.createElement('style');s.insertAdjacentHTML('beforeend',css);h.insertAdjacentElement('beforeend',s)
})();

/* Create by taiy (@20041203t) */
