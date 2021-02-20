## 気づきにくい要素とかまとめ


### センシティブメディア警告
**The following media may contain sensitive material.**
(センシティブなメディアを表示しない設定にしてる際に出てくる警告文)

```CSS
/* 冒頭太文字 */
	.media-sensitive-title (html.dark .media-sensitive-title)
/* 背景と文字色 */
	.media-sensitive (html.dark .media-sensitive)
```

```css
/* HTMLタグ構成のまとめ,colorはDolceの物 */
p.tweet-text ~
div.media-preview
  > div.media-preview-container.media-sensitive-detail (min-height: 130px;)
    > a.med-link[href=https://t.co...] (visibility: hidden;)
    > div.media-sensitive(当てられているCSSは画像)
      > div.padding-am
        > b.media-sensitive-title (color: #38444d;)
        > p (クラス無し)
　　　　> a{View}
        >  ·
        > a{Always show me sensitive media}
```




a,p タグは特に指定されていないので`.media-sensitive a`等で🉑
また`.media-sensitive-detail`に対しては、最小値(130px)が指定されてるので`min-height: auto;`で初期化することも🉑。


### Like failed等のボタン
`button:not(.Button--link) {}`を`button:not(.Button--link):not(.Notification-closeButton) {}`に変更


### アカウント管理画面
color(下記はDolceの文字色`color: #714116`)をテーマの文字色に置き換える。

```CSS
.accounts-drawer {
  color: #714116 !important;
}
.accounts-drawer a,
.accounts-drawer .column-title,
.accounts-drawer .column-close-link,
.accounts-drawer .icon,
.accounts-drawer .accordion .is-active,
.accounts-drawer .accordion,
.join-team {
  color: inherit !important;
}
.account-settings-row,
.account-profile-header,
.join-team {
  background-color: #0000 !important;
}
```

Fw.taiy
