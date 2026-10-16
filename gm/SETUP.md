# GM 套件 /gm/

robots.txt 已禁止索引本目录。不要把本目录链接发给玩家。

## 当前封存参数（第三期）

- 封存口令：`Z00-PALIMPSEST`（norm 后 `Z00PALIMPSEST`）
- sealSha256：`b199dda7b9c08bc21053794ecedb18ad9cdc7b1e7a54f39090dfaa89bb577bc5`
- 取件地点：N 1.290270 / E 103.851789（数字串 `1290270103851789`）
- 坐标密文（已写入 config.js）：`1777005708629035`
- 坐标密钥：`05878356` = SHA-256(A4 采样) 十六进制摘要中的**前 8 位数字**（跳过字母）
- 终局拆封口令（幕间语藏头）：`你在修复档案其实档案也在悄悄修复你`

## 首次部署

1. 打开 `index.html`（本套件首页），确认封存口令与坐标密文。
2. 换取件地点：在套件页输入新地点的纬度/经度数字串与 8 位数字密钥，生成新密文，
   填入 `../config.js` 的 `pickup.encodedCoords`。
   注意：密钥 = SHA-256(A4) 的前 8 位数字，A4 采样由引擎的 `generateWave(3*167+41)` 决定，
   不换谜面就不要换密钥。
3. 若更换封存口令：
   - 重算 `sha256(大写去符号后的口令)` 填入 `pickup.sealSha256`；
   - 用新口令的字母部分作 **Vigenère Autokey 的 primer**（密钥流 = primer + 明文），
     重算第 16 卷 `masterkey` 密文
     （明文 `THE WITNESS WAS WRITTEN NOT BORN AND THE INK IS STILL WET`），
     同步更新 `js/engine.js` 中 `sealed` 材料与 `acceptedHash.masterkey`；
   - 重新生成 `qr.svg` 并重印 `print.html`。
4. 打印 `print.html`（A4，整页仅一个居中 QR 码），放置在经许可的公共取件点。
   不要使用私人住址、宿舍或受管控区域。
5. 正式发布：`../config.js` 设 `previewMode:false`，`launchAt` 按北京时间填写。

## 玩家流程（实体层）

第 6 卷比对出 A4=B7，卷面留 SHA-256(A4) 摘要 → 取摘要**前 8 位数字**作循环密钥 →
逐位减去第 12 卷页面上的 16 位密文（逢十取模）→ 得到十进制经纬度 →
实地取纸 → 扫码 → 回站自动通关，回执显示封存口令 →
去掉数字与连字符，字母部分 `ZPALIMPSEST` 即第 16 卷 Autokey 的 primer。

## 答案变更须知

受口令影响的哈希：`sealSha256`、`acceptedHash.masterkey`。
`acceptedHash` 其余 12 项与幕间语藏头（`finaleCapstoneHash`）只在改答案或改幕间语首字时重算。
