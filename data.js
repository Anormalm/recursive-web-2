/* ZEPHYR · 剧情资料、对外证据与步骤，不包含制作人答案。 */
window.ZEPHYR_DATA = (() => {
 const sources = {
  nus1946: {title:'NUS 官方 · Raffles College 战后恢复教学',url:'https://fass.nus.edu.sg/ecs/about-us-history/',detail:'核对 1946 年当时使用的学校名称。'},
  nus1980: {title:'NUS 官方 · 建校历史',url:'https://www.nus.edu.sg/about/founded-by-the-community',detail:'当前 NUS 名称何时才成立？'},
  ntuHistory: {title:'NTU 官方 · Our History',url:'https://www.ntu.edu.sg/about-us/history',detail:'NTI、NTU 的年代并不相同。'},
  ntuHive: {title:'NTU 官方 · Campus Art Trail',url:'https://www.ntu.edu.sg/life-at-ntu/museum/campus-art-trail',detail:'记录建筑的旧称和新称。'},
  ntu2015: {title:'NTU 2015 · The Hive',url:'https://blogs.ntu.edu.sg/hey/2015/10/29/whats-buzzing-at-the-hive/',detail:'对照 2015 年的叫法。'},
  ntu2026: {title:'NTU 2026 · UOB Innovation Hub',url:'https://www.ntu.edu.sg/news/detail/ntu-boosts-innovation-with-launch-of-uob-innovation-hub',detail:'注意发布日期。'},
  mandai: {title:'Mandai · Bird Paradise 开放公告',url:'https://www.mandai.com/en/about-mandai/media-centre/bird-paradise-welcomes-first-guests-at-the-soft-opening-of-singapores-new-bird-park.html',detail:'核对 Bird Paradise 首次试营业日期。'},
  earth: {title:'Zephyruz / Earth-online',url:'https://github.com/Zephyruz/Earth-online',detail:'个人项目的公开源码。'},
  earthData: {title:'Earth-online · 卡池定义',url:'https://github.com/Zephyruz/Earth-online/blob/main/src/data/defaults.ts',detail:'找 ACTIVE_BANNER_ID 和展示卡。'},
  earthCards: {title:'Earth-online · 展示卡组件',url:'https://github.com/Zephyruz/Earth-online/blob/main/src/components/GachaPanel.tsx',detail:'这张卡为什么出现在首页？'},
  earthCommit: {title:'Earth-online · 初始化提交',url:'https://github.com/Zephyruz/Earth-online/commit/6ad7826bae8dfc56d5720b2f39bb42c076280dfc',detail:'审查原始提交的日期。'},
  recursive: {title:'Anormalm / recursive-web',url:'https://github.com/Anormalm/recursive-web',detail:'前代实验可能保存在旧项目里。'},
  node3: {title:'recursive-web · node3.txt',url:'https://github.com/Anormalm/recursive-web/blob/main/node3.txt',detail:'Encoded Timestamp，真正的原始索引。'},
  dcode: {title:'dCode · Vigenère Cipher',url:'https://www.dcode.fr/vigenere-cipher',detail:'解密时仅处理英文字母 A–Z。'},
  dcodeBook: {title:'dCode · Book Cipher',url:'https://www.dcode.fr/book-cipher',detail:'书籍密码可将文本位置当作地址。'},
  archive: {title:'Internet Archive · Wayback Machine',url:'https://web.archive.org/',detail:'旧网页快照不保证某个日期存在。'},
  mai: {title:'maiノーツ · 谱面编辑器',url:'https://mai-notes.com/',detail:'八键布局与原创谱面可以相互核对。'},
  arcaea: {title:'Arcaea 官方站点',url:'https://arcaea.lowiro.com/',detail:'注意 SKY 与 FLOOR 两种轨道。'}
 };
 const manual = [
 '凌晨的雨沿着铁皮棚滴下来，许多收音机都受了潮。',
 '值班员说，隔壁的钟走得比这里快了四分钟。',
 '修理桌下有只褪色的木箱，锁孔很小。',
 '一张旧单据把无线电和仪表列成同一种器材。',
 '记录纸留下的字迹淡得几乎不能辨认。',
 '有人坚持说那段声音来自港口附近。',
 '静静地听久了，噪声有时会像人在说话。',
 '不要在未检查原件之前抄写第二卷编号。',
 '仪器若未校准，重复的数字只能说明重复。',
 '我们没有找到与呼号相符的人员档案。'
 ];
 const annex = [
 'The damage report arrived without an inventory cover and no signature',
 'Before any reconstruction the technician must preserve the original source',
 'The author of the first transcript did not identify the transmitter',
 'It is essential to retain the untouched magnetic reel in cabinet B',
 'Two samples with identical noise cannot be called independent recordings',
 'A later annotation should never replace the original handwritten entry',
 'Every witness statement requires its own provenance and author signature',
 'Not every missing account belongs to a missing human',
 'A witness must not be treated as the author of an unsigned note',
 'A sealed record without a chain of custody is only a copy'
 ];
 const steps = [
 {id:'header',day:1,time:'01 / 03',kind:'hex',title:'第一份没有收件人的档案',subtitle:'WX-17 无线电登记表。持有人栏缺失。',description:[
  '一份标着“1946.11.17”的无线电登记表。持有人栏在扫描后被重新盖上一块黑色矩形——不是墨迹渗透，是后期处理。',
  '表角留有一串字节，管理员未加说明。铅笔批注：“别去找人。先把设备的名字找出来。”——字迹未鉴定。'
 ],refs:[],evidence:['a1946'],hints:['两位一组的数更像编码，不像日期。','十六进制转 ASCII；任意进制转换工具都可以。','每两个数字还原一个字符；结果是设备代号的形式。'],'answerLabel':'恢复出的设备登记代号',clue:'59 48 2D 31 37'},
 {id:'history',day:1,time:'02 / 03',kind:'source',title:'1946 年不可能存在的校徽',subtitle:'档案 A 附件。印章年份待核。',description:[
  '扫描件背页盖着“NUS / 1946”。若文件为原件，该印章必须在 1946 年即已存在。',
  '许闻舟批注：“只要有一个年代对不上，就先别把它叫历史。查当年的机构名称，别查今天的校名。”'
 ],refs:['nus1946','nus1980'],evidence:['a1946','aNus'],hints:['机构名称以官方校史为准，不以百科为准。','1946 年时今天的 NUS 尚未成立；查它当时的文学院前身。','输入当年的英文机构名称，两个词。'],'answerLabel':'1946 年恢复教学的机构英文名'},
 {id:'namecode',day:1,time:'03 / 03',kind:'book-zh',title:'值班名单上的幽灵',subtitle:'附页三组行字索引。配套抄本未见原件。',description:[
  '“失踪记录员”的姓名被完全抹去。复印附页保留三组行字索引。许闻舟确认，这些索引只能与同版本的手写抄本配套使用。',
  '抄本里的标点为后期校订所加。逐行从第一个汉字数起，跳过标点；三组索引对应三个字。'
 ],refs:['dcodeBook'],evidence:['aManual','aName'],hints:['这是位置索引，不是把数字当作字符编码。','格式是 行号:字位；只数汉字，忽略标点，从 1 开始。','三组索引取自同一版本抄本，拼成一个中文人名。'],'answerLabel':'复原姓名（三个汉字）',clue:'01:13  /  07:01  /  04:11'},
 {id:'rename',day:2,time:'01 / 03',kind:'source',title:'蜂巢改过名字',subtitle:'同一建筑的两种名称记录。年度待核。',description:[
  '第二份档案声称来自“1986 年 NTU”，注脚却把一栋 2015 年才出现的建筑列为内部代号。林澄没有批评这份文件，只划掉了一处年份。',
  '两篇公开的 NTU 资料描述同一栋建筑：一个保留 2015 年名称，一个使用 2026 年名称。恢复新名字；旧名字下一页还要用。'
 ],refs:['ntuHistory','ntu2015','ntuHive','ntu2026','archive'],evidence:['aNtu','a1986'],hints:['先确认 1986 年那所学校的名称，再谈建筑。','在 NTU 的校园建筑介绍中寻找 The Hive 的改名记录。','输入 2026 年使用的完整英文名称。'],'answerLabel':'该建筑的 2026 年名称'},
 {id:'vigenere',day:2,time:'02 / 03',kind:'cipher',title:'第二卷录音',subtitle:'REEL-B 内页。密文与解密参数附注。',description:[
  '两份录音编号之间夹着一张纸条。纸条上的字母分组保留了单词间空格，不像随机噪声。',
  '林澄只写了一句：“别用现在的名字。回到蜂巢第一次被叫出名字的时候。”密钥必须从上一份历史证据中得到。'
 ],refs:['dcode','ntu2015'],evidence:['aCipher'],hints:['一种经典的多表替换密码；dCode 可以直接处理。','算法是 Vigenère；密钥不在密文里，在上一份文件的建筑旧名中。','密钥由 2015 年的名称得到；THE 和空格都不是密钥的一部分。'],'answerLabel':'解密出的英文指令',clue:'JWHTHZZ FVBC VLKJVKQIKZ'},
 {id:'wave',day:2,time:'03 / 03',kind:'wave',title:'相同的噪声',subtitle:'REEL-A / REEL-B 采样清单。原件校验栏缺失。',description:[
  'NTU 的结论建立在“第二份独立录音”上。林澄留下八格数字采样，每格代表录音中的一个短片段。两卷磁带的顺序并不完全相同。',
  '选择 A、B 两卷中真正相同的一格，系统会比较采样值并计算摘要。'
 ],refs:[],evidence:['aSignal'],hints:['分别在上下两行各选一个片段，再使用“校验采样”。','比较器只在 16 个采样点逐项相等时才通过。','完全一致的一对，其编号在 A、B 两卷中并不相同。'],'answerLabel':'比较器校验',clue:''},
 {id:'maimai',day:3,time:'01 / 03',kind:'maimai',title:'八个触点',subtitle:'八触点排列图。标注方式异常。',description:[
  '损坏的记录里恢复出八个触点的排列。林澄日志：“这根本不是调频波段，是在描述触点顺序。”',
  '触点编为 1 至 8，数字沿顺时针递增，字符直接印在触点上。八次 TAP 依次对应要读出的字母。没有长按、没有滑动。'
 ],refs:['mai'],evidence:['aPattern'],hints:['触点布局与 maiノーツ 谱面编辑器的八键一致。','读字符按 TAP 的先后次序，不按数字大小排列。','八次 TAP，每次只读触点上印的一个字符。'],'answerLabel':'依次读取八个字符',clue:'6 8 7 2 1 4 5 3'},
 {id:'arcaea',day:3,time:'02 / 03',kind:'arcaea',title:'天空轨道的证词',subtitle:'双轨信号修复界面。轨道归属待判定。',description:[
  '修复界面把十组信号画在上下两层。1986 年的抄录员把两层统称为“地面与天空”；2026 年的林澄在旁边写下了 Arcaea。',
  '每一拍只有一条轨道激活。按音符出现的次序，只记下激活轨道的字符。'
 ],refs:['arcaea'],evidence:['aRails'],hints:['Arcaea 的 Sky 与 Floor 是两层独立输入。','每一拍只有一条轨道有激活提示，只读那一条。','十个字符连写，不要保留空格。'],'answerLabel':'恢复的归档路径标识'},
 {id:'hamming',day:3,time:'03 / 03',kind:'hamming',title:'第七位之前的错误',subtitle:'磁带附页。校验记录一份，单比特错误。',description:[
  'B 柜的磁带附有一份电气工程校验记录。七个比特中有一个在复制时被翻转。林澄留下三条校验关系和一张接线图。',
  '选择你认为出错的一位并翻转。三项校验全为 0 时，记录才是一个有效的偶校验字。'
 ],refs:[],evidence:['aECC'],hints:['Hamming(7,4) 偶校验；第 1、2、4 位是校验位。','三条校验分别覆盖 (1,3,5,7)、(2,3,6,7)、(4,5,6,7)。','非零的 S4S2S1 读作二进制数，即出错位的编号。'],'answerLabel':'恢复七位合法码字'},
 {id:'earth',day:4,time:'01 / 03',kind:'earth',title:'未来的卡牌，写在过去的纸上',subtitle:'1986 影印件中的异常插入行。字段不属于无线电。',description:[
  '1986 年记录的影印件里多出一行英文：GACHA_ID、FEATURED_CARD、SOURCE_COMMIT。林澄在旁边圈起两个字段，写着：“这些不是无线电术语。”',
  '调查 Zephyr 的 Earth-online 仓库：真实卡池 ID、首页展示卡原始 ID、卡池系统首次进入公开 Git 提交的日期。三者用斜杠连接。'
 ],refs:['earth','earthData','earthCards','earthCommit'],evidence:['aEarth'],hints:['别只看 README；答案在源码文件和提交历史里。','卡池 ID、展示卡 ID、初始提交日期，三处分别核对。','格式 ID/ID/YYYYMMDD；三个值都取自仓库本身。'],'answerLabel':'BANNER / CARD / YYYYMMDD'},
 {id:'mandai',day:4,time:'02 / 03',kind:'source',title:'八十年前的鸟园',subtitle:'照片说明一张。地名与标注年代待核。',description:[
  '许静仪的档案里夹着一张照片说明：“1946，Bird Paradise，Mandai”。地点名称与标注年代待核。',
  '以 Mandai 官方资料确认该场所首次对公众开放的日期。输入公历日期，格式为 YYYYMMDD。'
 ],refs:['mandai'],evidence:['aMandai'],hints:['Bird Paradise 与旧的 Jurong Bird Park 不是同一处。','Mandai 官网的媒体新闻稿记录了首次试营业。','新闻稿第一段写有确切日期；按 YYYYMMDD 输入。'],'answerLabel':'对公众首次试营业日期 YYYYMMDD'},
 {id:'sling',day:4,time:'03 / 03',kind:'memory',title:'酒单上的另一位证人',subtitle:'修复后的酒单残页。地点栏被加粗。',description:[
  '修复后的酒单角落有一个被加粗的地点：YC Dining Bar。旁边只保留饮品类别——鸡尾酒。',
  '酒单编写年代不明。它是否引用了现代人的真实生活，取决于你那晚亲自点过什么。'
 ],refs:[],evidence:['aBar'],hints:['要输入的不是店名，是那晚的饮品本身。','酒单上只保留了类别；其余信息不在纸上。','英文名两个词；第二个词是这一类饮品的通用后缀。'],'answerLabel':'饮品的英文名称'},
 {id:'annex',day:5,time:'01 / 03',kind:'book-en',title:'B 柜里的维修手册',subtitle:'英文附录一页。四组索引，无签发人。',description:[
  '1986 年的第二份维修备忘录使用英文。角落有四组三位以内的号码，形如 03.02。抄录员标注“line.word”，词按空格划分。',
  '若未从 maimai 找到 B 柜、未修正过磁带上的误码，仅凭这张索引不足以确认哪份手册是正确版本。'
 ],refs:['dcodeBook'],evidence:['aAnnex'],hints:['取整行中第几个以空格分隔的英文单词，从 1 开始。','索引只对 B 柜维修手册这份英文文本有效。','连起来是一句关于作者与证人的英文判断。'],'answerLabel':'从维修手册取出的四个英文单词',clue:'03.02 / 04.02 / 08.01 / 07.02'},
 {id:'binary',day:5,time:'02 / 03',kind:'binary',title:'较早的一次递归',subtitle:'旧项目引用一段。出处与年代不符。',description:[
  '许闻舟最后一封内部邮件引用了一段旧项目文字：“The street remembers the group chat.” 出处并非 ZEPHYR 的原生文档。',
  '找到那个项目的第三个节点，将原样保存的二进制转成 ASCII，得到一个十二位的日期时间索引。'
 ],refs:['recursive','node3'],evidence:['aRecursive'],hints:['去 recursive-web 的 node3.txt，不要只读首页。','二进制按每 8 位一组还原为一个 ASCII 字符。','结果是 YYYYMMDDHHMM 格式的 12 位索引。'],'answerLabel':'12 位时间索引'},
 {id:'provenance',day:5,time:'03 / 03',kind:'provenance',title:'所有道路都通往同一个目录',subtitle:'三份档案的处理日志摘录。来源字段待比对。',description:[
  '系统开放三份档案的部分处理日志。它们来自不同年代、不同研究人员递交，却在“上游来源”字段里存在一个相同的构建标记。',
  '找出它们共同继承的核心标识。短字符串，不是日期，也不是人名。'
 ],refs:[],evidence:['aTrace'],hints:['关注 PROVENANCE / PARENT 字段，而不是 FILE ID。','三份档案的文件名不同；对齐它们最末一级的共同祖先。','标识很短，共 7 个字符，含一个连字符。'],'answerLabel':'共同来源的标识'},
 {id:'physical',day:6,time:'01 / 02',kind:'physical',title:'最后一封没有投递的信',subtitle:'取件通知。收件人栏已填写。',description:[
  '林澄恢复的索引不指向图书馆，也不指向校园机房。它指向一处一楼公共区域。',
  '许闻舟便签：“原件从来不在服务器里。要验证一份数字记录，先拿到它声称复制的纸。”',
  '现场领取一张事先准备好的 A4 原始审计记录，扫描上面的 QR，或输入实体纸张上的封存口令。仅使用经许可的取件方式。'
 ],refs:[],evidence:['aPickup'],hints:['取件地点不是隐藏在网页源码中的真实私人住址。','在事先获准的公共取件点领取 Z-00 信封。','口令在纸张底部的封存条上；扫描二维码也会把口令带回本站。'],'answerLabel':'实体纸张的封存口令'},
 {id:'verdict',day:6,time:'02 / 02',kind:'verdict',title:'第零号证人的真相',subtitle:'原始审计表。四行，无结论栏。',description:[
  '纸上的原始审计表只有四行。没有失踪人口，没有时间旅行。三份看似独立的文件，在它的来源图谱里指向同一个 2026 年工作目录。',
  '许闻舟留下最后一条指令：“别猜我希望你相信什么。只判断这些句子能不能由证据支持。”完成四项判断。'
 ],refs:[],evidence:['aVerdict'],hints:['每一项判断都必须能指回一份具体档案。','不能指回原件的陈述，无论出自谁，都判假。','四项判断并不一致；与任何人的期望无关。'],'answerLabel':'四项证据判断'}
 ];
 const records = {
 a1946:{date:'1946 · 原始记录',title:'设备登记记录 / WX-17',type:'史料副本（游戏虚构）',body:'17 NOV 1946  /  23:17\nMAINTENANCE CHANNEL: WX/17\nREGISTER INDEX: 59 48 2D 31 37\nRECEIVED PULSES: 8\nOPERATOR: [FIELD LOST]\n\n扫描批次：2026-B\n备注：页眉校验栏部分损坏。'},
 aNus:{date:'2026 · 批注',title:'许闻舟 / 档案 A 的年代问题',type:'私人研究笔记（游戏虚构）',body:'那份 1946 年的 NUS 公文头是后来补上的。年代上不成立。\n\n1946 年存在的是另一所机构；今天的 NUS 在 1980 年之后。\n出处待查：NUS 官方校史。'},
 aManual:{date:'1946 · 抄本',title:'维修台手记 / 第三抄本',type:'书籍密码文本（固定版本）',body:manual.map((l,i)=>String(i+1).padStart(2,'0')+'  '+l).join('\n')+'\n\n索引按“行号:字位”，从 1 开始；只数汉字，忽略所有标点和空格。'},
 aName:{date:'2026 · 人名索引',title:'身份卡片 / 人员名单',type:'疑似被修改的文件（游戏虚构）',body:'档案标题：WX-17 / OPERATOR\n姓名：██████\n籍贯：未见原件\n亲属签字：未见原件\n\n注意：即使能从索引取出名字，也还不能证明这个人在 1946 年存在。'},
 aNtu:{date:'2015—2026 · 校园线索',title:'建筑名称更改备忘',type:'历史考证提示',body:'2015: THE HIVE\n2026: [REDACTED]\n1986: NTI（不是今天名义上的 NTU）\n\n不要把本备忘当成正式大学文件。请以 NTU 官网和历史报道核对。'},
 a1986:{date:'1986 · 声称日期',title:'第二卷 / 声音重建记事',type:'来源不明的拷贝（游戏虚构）',body:'REEL-B\n原件校验：缺失\n档案整理：1986\n再次数字化：2026\n\n抄录员备注：“这段声音像是被复制出来的，甚至连背景杂音都在同一位置出现。”'},
 aCipher:{date:'2026 · 林澄便签',title:'双卷比对指令',type:'密文',body:'JWHTHZZ FVBC VLKJVKQIKZ\n\nALGORITHM: VIGENERE\nKEY: THE NAME USED IN 2015\nALPHABET: A-Z\n\n证据一经解出，必须在独立数据中得到验证。'},
 aSignal:{date:'2026 · 声纹修复',title:'数字采样列表 / REEL-A / REEL-B',type:'信号对照说明',body:'每段含 16 个整数采样值。\n比较器仅在两个片段完全相同时报告 SHA-256 摘要一致。\n\n这是刻意制作的实验数据，而非真实 1946 年磁带。'},
 aPattern:{date:'1986 / 修复于 2026',title:'八触点信号转盘',type:'维修图（游戏虚构）',body:'触点按 1—8 依顺时针编号。\n单击顺序：6,8,7,2,1,4,5,3\n\n旧注记：“如果第一个八连拍对应一个柜名，别再用信号里看到的时间当地址。”'},
 aRails:{date:'2026 · 林澄',title:'双轨修复备忘',type:'信号图像',body:'上层：SKY / 天空\n下层：FLOOR / 地面\n\n每一拍只有一条轨道收到确认脉冲。\n按顺序读取被点亮轨道的字符，不要混入未点亮轨道。'},
 aECC:{date:'2026 · EE 实验纸',title:'错误检测 / Hamming(7,4)',type:'电路备忘',body:'RECEIVED: 0110111\n校验位位置：1、2、4\n偶校验分组：\nS1 = XOR(1,3,5,7)\nS2 = XOR(2,3,6,7)\nS4 = XOR(4,5,6,7)\n\n单比特错误位置由 S4S2S1（二进制）指出。'},
 aEarth:{date:'档案标注：1946',title:'未来招募数据 / 第 345 号池',type:'异常插入内容',body:'GACHA_ID = [UNKNOWN]\nFEATURED_CARD_SOURCE_ID = [UNKNOWN]\nSOURCE_COMMIT = [UNKNOWN]\nLOCAL_SAVE_KEY = earth-online-solo-save\n\n若真实源代码在 2026 才公开，不可能凭这份档案证明它写于 1946。'},
 aMandai:{date:'档案标注：1946',title:'彩色鸟园的照片说明',type:'后期插入内容',body:'BIRD PARADISE / MANDAI\n附注：此地的名称可能属于后来时代。\n\n请直接查 Mandai 的开放新闻稿，不要以网络相册的文件创建时间替代开放日期。'},
 aBar:{date:'来源未明',title:'酒单与见证者',type:'私人经历索引',body:'VENUE: YC Dining Bar\nBEVERAGE: [REDACTED]\n\n这条线索来自参与者真实经历的摘要，可能由第三人补录。没有独立来源的私人细节，不足以证明“未来传信”。'},
 aAnnex:{date:'1986 · B 柜附录',title:'信号采样维修备忘 / 固定文本',type:'英文书籍密码',body:annex.map((l,i)=>String(i+1).padStart(2,'0')+'  '+l).join('\n')+'\n\n坐标按 line.word，英文单词仅按单个空格划分。'},
 aRecursive:{date:'2025 · 旧网页',title:'前代终端的第三个节点',type:'旧项目关联',body:'Encoded Timestamp:\n001100100011000000110010001101010011000000110100001100000011001100110001001101110011001100110000\n\nHint: The street remembers the group chat. It’s a part of history.\n\n这是旧项目实际保留的内容；不代表当天一定有与 Zephyr 的真实聊天。'},
 aTrace:{date:'2026 · 内部处理日志',title:'追溯表 / 三份材料',type:'来源字段',body:'1946-DIARY.TIF\n  PARENT: narrative-v3\n  INGEST_ROOT: CORE-17\n\n1986-REEL-B.WAV\n  PARENT: signal-v2\n  INGEST_ROOT: CORE-17\n\n2026-INDEPENDENT-AUDIT.PDF\n  PARENT: eval-v6\n  INGEST_ROOT: CORE-17\n\n外部存档与内部“独立审计”使用了同一个生成根。'},
 aPickup:{date:'现场 · 2026',title:'取件通知 / Z-00',type:'实境道具',body:'收件人：Zephyr\n物品：A4 原始审计表（复制件）\n地点：管理员预先获准的一楼公共取件点\n\n不会要求进入私人房间、公共机关管控区，也不会要求联系不知情的工作人员。'},
 aVerdict:{date:'2026 · 恢复',title:'未修改的审计摘要',type:'关键原件（游戏虚构）',body:'原始 1946 设备记录：八组脉冲，只有设备编号 YH-17。\n\n“许静仪”的身份记录：未见当年原始登记；人物信息在 2026 的修复文本中首次出现。\n\n第二卷录音：与第一卷共享完全相同的样本段及上游数据。\n\n所谓独立评估：项目内部曾筛选或改写调查结果。\n\n最初的 WX/17 是设备登记，不是人的签名。'}
 };
 const interludes={
  header:{speaker:'记录转录 / 1946',text:'“八下就是八下。我没听见什么女人的声音。若有人这么写，让他拿原件来。”\n——未署名维修人员的便条'},
  history:{speaker:'许闻舟 / 2026.09.21',text:'“查过两遍。印章年份早于该名称的设立。原件疑为后期重排。”'},
  namecode:{speaker:'人员档案 / WX-17',text:'姓名栏恢复：许静仪。\n签发人栏：缺失。\n系统补录：『遗失者已确认。』'},
  rename:{speaker:'林澄 / 未发送的邮件',text:'“那栋楼我每周都路过。名字变了，我还叫它 The Hive。”'},
  vigenere:{speaker:'林澄 / REEL-B / 01:46',text:'“磁带原件的申请，第三次被驳回。理由：不必重复已经完成的验证。”'},
  wave:{speaker:'内部聊天截取',text:'林澄：同一段噪声都被带过去了。\n周启山：所以呢？\n（其后消息被归档系统标记为“与研究目标无关”。）'},
  maimai:{speaker:'林澄 / 屏幕边注',text:'“有人选了 Zephyr 会懂的阅读方式。”'},
  arcaea:{speaker:'1986 / 镜像索引',text:'封面年份：1986。\n内页夹页落款：2026。\n夹入时间未鉴定。'},
  hamming:{speaker:'林澄 / 工作日志',text:'“修正以后，标签还是 B。有时候真的只是铜线松了。”'},
  earth:{speaker:'许闻舟 / 私人草稿',text:'“我们给一个 1946 年的人编身世，最后让一个 2026 年的仓库把她出卖了。”'},
  mandai:{speaker:'许闻舟 / 时间线',text:'“不存在的记忆写得够细，就会让人忘记先问它什么时候才可能发生。”'},
  sling:{speaker:'匿名项目问卷 / 2026',text:'“只需要一个恰好正确的细节。这个结论有用得让我不舒服。”'},
  annex:{speaker:'1986 附录 / 末页手写',text:'AUTHOR IS NOT WITNESS.\n许闻舟补记：“从无数真实的字里，可以拼出一个不存在的人。”'},
  binary:{speaker:'许闻舟 / 最后草稿',text:'“有人把另一个谜题的习惯和索引方式搬了进来。不像修复历史，像在写剧本。”'},
  provenance:{speaker:'系统内部 / 处理日志',text:'“三个年代，三个提交人，一个根目录。我们在同一个人手里买了三份证词。”\n——工程师日志'},
  physical:{speaker:'原始审计 / Z-00',text:'“那份报告跑了二十四次测试，九次识破了造假。发表时只保留另外十五次。”'},
  verdict:{speaker:'最后一条录音 / 许闻舟',text:'“我没有失踪。我在那天被停掉了权限。连删掉一个人，都可以写成一个很像样的故事。”'}
 };
 const finale={
  preface:'CASE Z-00 CLOSED :: 身份：许静仪 · 合成于 2026 :: SOURCE ROOT: CORE-17',
  letters:[
   '“我想听原件。”——林澄 / 最后一次录音',
   '“账号上的 MISSING 是一种权限状态，不是一个人的命运。”——许闻舟'
  ]
 };
 return {sources,manual,annex,steps,records,interludes,finale};
})();
