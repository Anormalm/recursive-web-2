# GM 套件 /gm/

robots.txt 已禁止索引本目录。不要把本目录链接发给玩家。

## 首次部署

1. 打开 `index.html`（本套件首页），确认封存口令与演示坐标。
2. 换取件地点：在套件页输入新地点的纬度/经度数字串，生成新密文，
   填入 `../config.js` 的 `pickup.encodedCoords`。
3. 若更换封存口令：
   - 重算 `sha256(大写去符号后的口令)` 填入 `pickup.sealSha256`；
   - 用新口令的字母部分作 Vigenère 密钥，重算第 16 卷 `masterkey` 的密文
     （明文 `THE WITNESS WAS WRITTEN NOT BORN`，空格按词分组保留），
     同步更新 `js/engine.js` 中 `sealed` 材料与 `acceptedHash.masterkey`；
   - 重新生成 `qr.svg` 并重印 `print.html`。
4. 打印 `print.html`（A4，整页仅一个居中 QR 码），放置在经许可的公共取件点。
   不要使用私人住址、宿舍或受管控区域。
5. 正式发布：`../config.js` 设 `previewMode:false`，`launchAt` 按北京时间填写。

## 玩家流程（实体层）

第 8 卷解出 `MIRROR YEAR 1986` → 用 1986 作循环数字密钥，逐位减去
第 12 卷页面上的 16 位密文 → 得到十进制经纬度 → 实地取纸 → 扫码 →
回站自动通关，回执显示封存口令 → 作为第 16 卷的解密密钥。
