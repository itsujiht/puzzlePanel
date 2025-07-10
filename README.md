# Puzzle Panel
<img src='https://github.com/itsujiht/puzzlePanel/blob/main/public/pplogo.png' width='50%' height='auto' style='text-align: center; margin:0 auto;'>

## デモプレイ映像
https://drive.google.com/file/d/1Bc1UShWAOgY0uBP6H0AD8wD05pCkaZI3/view?usp=sharing

## ルール

### 画面
上から、現在のレベル(何問クリアしたか)、残機(失敗して良い回数)、お手本グリッド、操作グリッド、残り操作回数、答えの表示ボタン、難易度設定(easy : 3×3、medium : 4×4、hard : 5×5のグリッド)が表示されています。
<img src='https://github.com/itsujiht/puzzlePanel/blob/main/public/description1.png' width='60%' height='auto'>

### ゲームの流れ
このゲームにおいての操作は基本的に操作グリッド内に示された"0"から"8"の9つのマスのいずれかをクリックすることだけです。
マスをクリックすると、そのマスを含む周囲9マスが反転します。

例えば、以下の画像の左に示されるような状態で"4"のマスをクリックすると、右のように変化することになります。
<div style='display: flex;'>
<img src='https://github.com/itsujiht/puzzlePanel/blob/main/public/description2.png' width='40%' height='auto'>
<img src='https://github.com/itsujiht/puzzlePanel/blob/main/public/description3.png' width='40%' height='auto'>
</div>
"2"のグリッドの場合は次のような変化が見られます。
<div style='display: flex;'>
<img src='https://github.com/itsujiht/puzzlePanel/blob/main/public/description4.png' width='40%' height='auto'>
<img src='https://github.com/itsujiht/puzzlePanel/blob/main/public/description5.png' width='40%' height='auto'>
</div>

クリックすると、残り操作回数は1つ減ります。

この操作を現在のレベル分の回数内で繰り返し、操作グリッドをお手本グリッドと同じパターンにすることが各レベルでの共通の目標となります。残り操作回数が0になった時点でお手本と同じになっていない場合は残機が一つ減り、異なるパターンで再度挑戦することになります。残機が0になるとその時点でゲームオーバーとなり、レベルはリセットとなります。

### 解答表示
showAnswerボタンをクリックすると正解(の一例)の手順がマスの数字で表示されます。