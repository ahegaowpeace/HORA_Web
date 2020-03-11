# 要件定義

- 麻雀の点数計算を覚えられる
- コンテナで高移植性
- １プロセス１コンテナ

# 各ファイル説明

- index.js
	- NODE.js実行プログラム
- start.sh
	- 複数CMD実行シェル

# 諸注意

- DockerfileでCMDを記述した場合はコンテナ起動時に引数でコマンドを渡さない
	- 上書きされる
- 「docker exec コンテナ名 node /myapp/index.js」を実行する
	- Dockerfile内で実行する方法を調査中
