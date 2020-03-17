# 要件定義

- 麻雀の点数計算を覚えられる
- 入力フォームページ/結果出力ページ
- AWSで自動起動
	- CloudFormationでインスタンス,AMI,SG
- １プロセス１コンテナ
	- DB連携

# 各機能

- 計算機能
	- エラーチェック

# 各ファイル説明

- index.js
	- NODE.js実行プログラム
- CloudFromation.yml
	- AWSスタック作成用
	- UserDataのシェル実行確認済み

# 諸注意

- DockerfileでCMDを記述した場合はコンテナ起動時に引数でコマンドを渡さない
	- 上書きされる
- 「docker exec コンテナ名 node /myapp/index.js」を実行する
	- ~~Dockerfile内で実行する方法を調査中~~
	- CloudFormationで代用

# コマンド

```
yum -y update; yum -y install git docker; systemctl start docker;
git clone 【リポジトリURL】
cd HORA_Web
docker build -t nodejs .
docker run -itd --name nodejs --privileged -p 3000:3000 nodejs /sbin/init
```
