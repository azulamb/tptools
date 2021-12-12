# tptools

TitanPocketで動く何かを作るために作ったTypeScript製のツールです。
とりあえずキーボードなどのWebComponentsを作っておきキーコンフィグなどに使おうかなと考えています。

製品はこちら： https://www.unihertz.com/collections/smartphones/products/titan-pocket

## Build

```
tsc -p src/
```

## あるもの

* tplib.js
  * TypeScript関連のライブラリになる予定。
* titan-pocket.js
  * `<titan-pocket>`
  * 以下の `<tp-screen>` と `<tp-keyboard>` を子要素に入れるといい感じに配置してくれる。
* tp-screen.js
  * `<tp-screen>`
  * 一応画面解像度に対応したCanvasが埋め込まれている。
* tp-keyboard
  * `<tp-keyboard>`
  * TitanPocketのキーボード。属性を追加することでそれっぽい動きや `push` イベントによるキーの取得が可能になる。
  * 単に光らせるだけも可能。
