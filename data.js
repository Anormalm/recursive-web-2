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
 {id:'header',day:1,time:'01 / 03',kind:'hex',title:'第一份没有收件人的档案',subtitle:'最初的文件不是信。它是一份设备登记记录。',description:[
  '档案馆于深夜重新上线。页面上没有搜索栏，只有一份标着“1946.11.17”的无线电登记表。最上方的持有人栏被整齐地涂掉；不是墨迹渗透，而是有人在扫描之后重新盖上了一块黑色矩形。',
  '登记表角落留着一串 ASCII 字节。档案管理员没有解释它的含义。旁边的铅笔字却写着：“别去找人。先把设备的名字找出来。”'
 ],refs:[],evidence:['a1946'],hints:['那一串看起来像两位一组的十六进制数，不是日期。','尝试搜索“hex to ASCII”，或使用任意在线进制转换工具。','每两个十六进制数字对应一个 ASCII 字符。'],'answerLabel':'恢复出的设备登记代号',clue:'59 48 2D 31 37'},
 {id:'history',day:1,time:'02 / 03',kind:'source',title:'1946 年不可能存在的校徽',subtitle:'一枚大学印章，比任何口供都容易被忽略。',description:[
  '扫描件的背页盖着“NUS / 1946”。如果这份文件真是原件，那么这个印章必须在 1946 年就已经存在。',
  '许闻舟写下一句很不客气的批注：“只要有一个年代对不上，就先别把它叫历史。查当年的机构名称，别查今天的校名。”'
 ],refs:['nus1946','nus1980'],evidence:['a1946','aNus'],hints:['查大学官方历史，而不只看百科。','NUS 的前身并非始终叫 NUS。寻找 1946 年恢复教学的文科学院。','答案为当年的英文机构名称，两个词。'],'answerLabel':'1946 年恢复教学的机构英文名'},
 {id:'namecode',day:1,time:'03 / 03',kind:'book-zh',title:'值班名单上的幽灵',subtitle:'三次索引，拼出一位不存在于名单里的人。',description:[
  '所谓“失踪记录员”的姓名被完全抹去了。但是复印附页保留了三组行字索引。许闻舟确认，这些索引只能和同版本的手写抄本配套使用。',
  '抄本里的标点是后来校订时加上的。逐行从第一个汉字数起，跳过标点；三组索引对应三个字。'
 ],refs:['dcodeBook'],evidence:['aManual','aName'],hints:['这是位置索引，不是把数字作为字符编码。','格式是 行号:字位；忽略标点，所有索引从 1 开始。','索引 01:13、07:01、04:11 分别取出三个汉字。'],'answerLabel':'复原姓名（三个汉字）',clue:'01:13  /  07:01  /  04:11'},
 {id:'rename',day:2,time:'01 / 03',kind:'source',title:'蜂巢改过名字',subtitle:'同一栋楼，在两种年代里有不同身份。',description:[
  '第二份档案声称来自“1986 年 NTU”，但注脚又把某栋 2015 年才出现的建筑称为其内部代号。研究员林澄没有批评这份文件，她只是划掉了一处年份。',
  '两篇公开的 NTU 资料描述同一栋建筑。一个保留了 2015 年的名字，一个使用 2026 年的名字。你需要恢复新名字；旧名字留着，下一页还会用到。'
 ],refs:['ntuHistory','ntu2015','ntuHive','ntu2026','archive'],evidence:['aNtu','a1986'],hints:['先确认 1986 年那所学校叫 NTI 还是 NTU。','在 NTU 的校园建筑介绍中寻找 The Hive 的改名记录。','输入 2026 年使用的完整英文名称。'],'answerLabel':'该建筑的 2026 年名称'},
 {id:'vigenere',day:2,time:'02 / 03',kind:'cipher',title:'第二卷录音',subtitle:'密码从来没有藏得很深，关键是知道哪份记录可靠。',description:[
  '林澄在两份录音编号之间夹了一张纸条。纸条上的字母分组保留了单词之间的空格，看起来不像随机噪声。',
  '她只写了一句：“别用现在的名字。回到蜂巢第一次被叫出名字的时候。”你可以使用任何公开解密工具，但密钥必须从上一份历史证据中得到。'
 ],refs:['dcode','ntu2015'],evidence:['aCipher'],hints:['一种经典的多表替换密码；可以直接用 dCode。','算法是 Vigenère，英文字母 A–Z，密钥为建筑 2015 年的名字（去掉 THE）。','密钥 HIVE，解出一条要求比较两份录音的命令。'],'answerLabel':'解密出的英文指令',clue:'JWHTHZZ FVBC VLKJVKQIKZ'},
 {id:'wave',day:2,time:'03 / 03',kind:'wave',title:'相同的噪声',subtitle:'如果它们是两次独立录制，为什么连错误都一样？',description:[
  'NTU 的结论建立在“第二份独立录音”上。林澄却留下八格数字采样，每一格代表录音中的一个短片段。两卷磁带的顺序并不完全相同。',
  '选择 A、B 两卷中真正相同的一格，网站会比较其中的采样值并计算摘要。不要只看相似的形状：真正的重复必须一个采样点都不差。'
 ],refs:[],evidence:['aSignal'],hints:['分别在上下两行点选一个片段，再使用“校验采样”。','只有一个片段在 A 和 B 中逐项相等；其他形状再像也有至少一个样本不同。','A 的第 4 段与 B 的第 7 段使用同一份采样。'],'answerLabel':'比较器校验',clue:''},
 {id:'maimai',day:3,time:'01 / 03',kind:'maimai',title:'八个触点',subtitle:'一份 1986 年维修图，竟然像一台现代音游机。',description:[
  '林澄从损坏的记录里找回八个触点的排列。她在日志中写道：“这根本不是调频波段，是在描述触点顺序。”',
  '她把触点编成 1 至 8，数字沿顺时针增加，字符直接印在触点上。下面八次 TAP 依次对应要读出的字母。没有长按、没有滑动；只需要把读法统一。'
 ],refs:['mai'],evidence:['aPattern'],hints:['触点位置就是 maimai 的八键布局。','严格按 TAP 的先后顺序，而不是数字从小到大排列。','顺序 6、8、7、2、1、4、5、3。'],'answerLabel':'依次读取八个字符',clue:'6 8 7 2 1 4 5 3'},
 {id:'arcaea',day:3,time:'02 / 03',kind:'arcaea',title:'天空轨道的证词',subtitle:'两条轨道，不代表同一份时间。',description:[
  '修复界面把十组信号画在上下两层。1986 年的抄录员把两层统称为“地面与天空”；2026 年的林澄却在旁边写下了 Arcaea。',
  '每一拍只有一条轨道真正激活。不要同时读取两个字母，也不要只读取上面的。按照音符出现的次序，只记下被激活轨道的字符。'
 ],refs:['arcaea'],evidence:['aRails'],hints:['Arcaea 的 Floor 与 Sky Notes 是两层输入。','每个节拍上有蓝色或金色的激活提示，只读那条轨道。','十个结果连起来，不要保留空格。'],'answerLabel':'恢复的归档路径标识'},
 {id:'hamming',day:3,time:'03 / 03',kind:'hamming',title:'第七位之前的错误',subtitle:'误码不意味着整封电报无法阅读。',description:[
  'B 柜的磁带附有一份电气工程校验记录。七个比特中有一个在复制时被翻转。林澄没有写下正确答案，只把三条校验关系和一张简单的接线图留在页边。',
  '选择你认为出错的一位并翻转。系统会显示校验综合征。三项都为 0 时，记录才是一个有效的偶校验字。'
 ],refs:[],evidence:['aECC'],hints:['使用 Hamming(7,4) 偶校验。第 1、2、4 位是校验位。','检查组分别是 (1,3,5,7)、(2,3,6,7)、(4,5,6,7)。','收到的 0110111 在第 5 位发生了错误。'],'answerLabel':'恢复七位合法码字'},
 {id:'earth',day:4,time:'01 / 03',kind:'earth',title:'未来的卡牌，写在过去的纸上',subtitle:'这份记录第一次提到了 Zephyr 自己写过的程序。',description:[
  '1986 年记录的影印件里，突然多了一行英文：GACHA_ID、FEATURED_CARD、SOURCE_COMMIT。林澄在旁边圈起其中两个字段，写着：“这些不是无线电术语。”',
  '你要调查 Zephyr 的 Earth-online 仓库。找到真实卡池 ID、首页展示卡原始 ID，并核实 PJSK 卡池系统首次进入公开 Git 提交的日期。三者用斜杠连接。'
 ],refs:['earth','earthData','earthCards','earthCommit'],evidence:['aEarth'],hints:['别只看 README。答案在 defaults.ts、GachaPanel.tsx 和提交历史里。','卡池与卡牌编号不同；初始提交时间以 GitHub 页面为准。','格式示例 123/456/20260101；本仓库实际的第一项是 345。'],'answerLabel':'BANNER / CARD / YYYYMMDD'},
 {id:'mandai',day:4,time:'02 / 03',kind:'source',title:'八十年前的鸟园',subtitle:'一段过分精确的回忆，反而证明它是后来写的。',description:[
  '许静仪的档案里夹着一张照片说明：“1946，Bird Paradise，Mandai”。照片里的鸟没有问题，地点名称却让林澄起了疑心。',
  '不要去猜照片究竟是什么时候拍的。先用 Mandai 官方资料确认这个场所首次对公众开放的日期。输入公历日期，格式为 YYYYMMDD。'
 ],refs:['mandai'],evidence:['aMandai'],hints:['Bird Paradise 与以前的 Jurong Bird Park 不要混淆。','Mandai 官网新闻稿保留了 2023 年试营业的明确日期。','答案是 2023 年 5 月 8 日。'],'answerLabel':'对公众首次试营业日期 YYYYMMDD'},
 {id:'sling',day:4,time:'03 / 03',kind:'memory',title:'酒单上的另一位证人',subtitle:'最令人不安的档案，是它知道你确实去过的地方。',description:[
  '修复后的酒单角落有一个被加粗的地点：YC Dining Bar。旁边只保留饮品类别——鸡尾酒。',
  '与其相信这份编写年代不明的酒单，不如回忆那天你亲自点过什么。这不是考验私人感情的关卡；它在检查一条所谓“历史文书”是否引用了现代人的真实生活。'
 ],refs:[],evidence:['aBar'],hints:['不是店名，而是那晚点过的饮品名称。','这种鸡尾酒的名字中有 Singapore。','英文名由 SINGAPORE 和 SLING 两个词组成。'],'answerLabel':'饮品的英文名称'},
 {id:'annex',day:5,time:'01 / 03',kind:'book-en',title:'B 柜里的维修手册',subtitle:'一本书、一张索引，揭示证人和作者不是同一个人。',description:[
  '1986 年的第二份维修备忘录使用英文。在角落，有四组三位以内的号码，形如 03.02。抄录员标注“line.word”，并强调词只按空格划分。',
  '如果你没有从 maimai 找到 B 柜、没有修正过磁带上的误码，光凭这张索引还不足以确认哪份手册是正确版本。'
 ],refs:['dcodeBook'],evidence:['aAnnex'],hints:['取整行中第几个以空格分隔的英文单词，从 1 开始。','四个索引依次是 03.02、04.02、08.01、07.02。','连起来是一句关于作者与证人的英文判断。'],'answerLabel':'从维修手册取出的四个英文单词',clue:'03.02 / 04.02 / 08.01 / 07.02'},
 {id:'binary',day:5,time:'02 / 03',kind:'binary',title:'较早的一次递归',subtitle:'一份还没诞生的项目，不该拥有自己的旧版本。',description:[
  '许闻舟最后一封内部邮件引用了一段旧项目里的文字：“The street remembers the group chat.” 他确信那并非 ZEPHYR 的原生文档，而是某个先前谜题网站里留下的脚注。',
  '找到那个项目的第三个节点。将原样保存的二进制转成 ASCII，得到一个十二位的日期时间索引。不要把它当成现实中已确认的私人聊天日期。'
 ],refs:['recursive','node3'],evidence:['aRecursive'],hints:['访问 recursive-web 的 node3.txt，而不是只读首页。','二进制按每 8 位对应一个 ASCII 字符分组。','格式应是 YYYYMMDDHHMM，共 12 位。'],'answerLabel':'12 位时间索引'},
 {id:'provenance',day:5,time:'03 / 03',kind:'provenance',title:'所有道路都通往同一个目录',subtitle:'互相独立的报告，不应该共享同一份生成源。',description:[
  '系统终于开放三份档案的部分处理日志。它们来自不同年代、由不同研究人员递交，却在“上游来源”字段里存在一个相同的构建标记。',
  '别关心表面的文件名。找出它们共同继承的核心标识。它是一个短字符串，不是日期，也不是人物姓名。'
 ],refs:[],evidence:['aTrace'],hints:['关注 PROVENANCE / PARENT 字段，而不是 FILE ID。','三份档案的文件名不同，但最末一级共同祖先完全相同。','核心标识以 CORE 开头，后面是两位数字。'],'answerLabel':'共同来源的标识'},
 {id:'physical',day:6,time:'01 / 02',kind:'physical',title:'最后一封没有投递的信',subtitle:'第一次，档案给出了网页以外的坐标。',description:[
  '林澄恢复的索引并没有指向图书馆，也没有指向校园机房。它指向一处普通得不能再普通的一楼公共区域。',
  '许闻舟在便签上写：“原件从来不在服务器里。要验证一份数字记录，先拿到它声称复制的纸。”',
  '现场领取一张事先准备好的 A4 原始审计记录，扫描上面的 QR，或输入实体纸张上的封存口令。任何官方柜台都不应被蒙在鼓里，请只使用经许可的取件方式。'
 ],refs:[],evidence:['aPickup'],hints:['取件地点不是隐藏在网页源码中的真实私人住址。','请在事先获准的公共取件点领取 Z-00 信封。','从纸张底部的封存条输入短口令；扫描二维码也会把口令带回本站。'],'answerLabel':'实体纸张的封存口令'},
 {id:'verdict',day:6,time:'02 / 02',kind:'verdict',title:'第零号证人的真相',subtitle:'现在你拥有的，不是密码，而是证据。',description:[
  '纸上的原始审计表只有四行。它没有列出任何失踪人口，没有提到时间旅行。三份看似独立的文件，在它的来源图谱里指向同一个 2026 年工作目录。',
  '许闻舟留下最后一条指令：“别猜我希望你相信什么。只判断这些句子能不能由证据支持。”完成四项判断，才能打开第零号证人真正的身份。'
 ],refs:[],evidence:['aVerdict'],hints:['原始 1946 记录是否真的包含八组电脉冲？','许静仪是否能在未经改写的当时人员名单中得到证明？第二卷录音是否独立？','四题顺序的真假为 真、假、假、真。'],'answerLabel':'四项证据判断'}
 ];
 const records = {
 a1946:{date:'1946 · 原始记录',title:'设备登记记录 / WX-17',type:'史料副本（游戏虚构）',body:'17 NOV 1946  /  23:17\nMAINTENANCE CHANNEL: WX/17\nREGISTER INDEX: 59 48 2D 31 37\nRECEIVED PULSES: 8\nOPERATOR: [FIELD LOST]\n\n扫描批次：2026-B\n备注：页眉校验栏部分损坏。'},
 aNus:{date:'2026 · 批注',title:'许闻舟 / 档案 A 的年代问题',type:'私人研究笔记（游戏虚构）',body:'那份 1946 年的 NUS 公文头是后来补上的。不是“有点可疑”，是年代上就不成立。\n\n原件的历史背景必须查公开史料。1946 年存在的是别的机构，1980 年以后才有今天的 NUS。\n\n不要把“文档提到真实事物”当成“文档在那个年代就存在”的证明。'},
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
  header:{speaker:'记录转录 / 1946',text:'“我把它归进了设备档案，不是人员档案。前一天也是八下，昨晚还是八下。我没听见什么女人的声音。若有人这么写，请他拿原件来。”\n——未署名维修人员的便条'},
  history:{speaker:'许闻舟 / 2026.09.21',text:'“我查了两遍。NUS 这个名字出现得太早了。文件后来重排过版，扫描件边缘的纸张纤维倒像真的。老板让我别纠结排版，说大方向对就行。我不知道历史从什么时候起，也有了大方向。”'},
  namecode:{speaker:'人员档案 / WX-17',text:'系统恢复出了三个字：许静仪。\n\n她的档案有出生年份，有一张模糊得像雾的相片，有最后一次值班的钟点。唯独没有能找到的签名原件。\n\n屏幕下面悄悄多出一行：『遗失者已确认。』'},
  rename:{speaker:'林澄 / 未发送的邮件',text:'“我一开始也没看出来。那栋楼我几乎每周都路过，名字变了，我却还是叫它 The Hive。反倒是文件编辑程序会把旧名统一替换掉。它比我们更肯定什么叫现在。”'},
  vigenere:{speaker:'林澄 / REEL-B / 01:46',text:'“如果第二卷真是独立取得的，他们为什么不肯给我听磁带原件？我已经在申请表上写了三次。第三次他们回我：不必重复已经完成的验证。我觉得好笑，验证怎么会是不能重复的东西。”'},
  wave:{speaker:'林澄 / 内部聊天截取',text:'林澄：这两个片段不是像，是完全一样。\n周启山：所以呢？\n林澄：同一段噪声都被带过去了。你要我怎么把它们当成两份独立证据？\n\n此处之后的消息被归档系统标记为“与研究目标无关”。'},
  maimai:{speaker:'损坏的维修图 / 批注',text:'八个触点恢复以后，导出的并不是乐谱。那是一只柜子的名字。\n\n林澄在屏幕边沿写：“有人选了 Zephyr 会懂的阅读方式。为什么？他们知道下一位读档案的人是谁吗？”'},
  arcaea:{speaker:'1986 / 镜像索引',text:'镜像档案的封面上只有年份。内页却夹着一张 2026 年的修复清单。纸张是真的，墨水也是，谁又能保证夹进去的那一页与整本书同龄？'},
  hamming:{speaker:'林澄 / 工作日志',text:'“找到了。只有一位错。修正以后，磁带标签还是 B，没有其他可能。不是每个错误都意味着阴谋，有时候真的只是铜线松了。但他们偏偏只肯让我改这些小错误。”'},
  earth:{speaker:'许闻舟 / 私人草稿',text:'“那行 GACHA_ID 我看了很久。我不玩那种游戏，照着 GitHub 一项一项查过去，居然真能对上。真荒唐，我们费了这么大功夫给一个 1946 年的人编身世，最后让一个 2026 年的仓库把她出卖了。”'},
  mandai:{speaker:'许闻舟 / 时间线',text:'“我知道照片里的鸟是真的，那个地方也是真的。唯一的问题是，1946 年的记录员没有去过 Bird Paradise。不存在的记忆如果写得足够细，就会让人忘记先问一句：它什么时候才可能发生？”'},
  sling:{speaker:'匿名项目问卷 / 2026',text:'“参与者更愿意相信提及私人经历的历史资料。我们不需要知道全部经过，只需要一个恰好正确的细节。\n\n——这个结论有用得让我不舒服。”'},
  annex:{speaker:'1986 附录 / 末页手写',text:'AUTHOR IS NOT WITNESS.\n\n许闻舟在旁边补了一句中文：“名字能从纸里解出来，不代表这个人曾经写过那张纸。你可以找到一位证人，也可以从无数真实的字里拼出一个不存在的人。”'},
  binary:{speaker:'许闻舟 / 最后草稿',text:'“我把原来的节点找回来了。时间是 2025 年的，早在所谓项目档案被上传之前。有人直接把另一个谜题的习惯、口气和索引方式搬了进来。这个人不像在修复历史。倒像在写剧本。”'},
  provenance:{speaker:'系统内部 / 处理日志',text:'1946 的照片。1986 的磁带。2026 的独立评估。\n\n三个不同年代，三个不同提交人，最后都回到一个根目录。CORE-17。\n\n有位工程师在日志最后写：“我们根本不是在找第二个见证者。我们在同一个人手里买了三份证词。”'},
  physical:{speaker:'原始审计 / Z-00',text:'“别碰他们给你的结论。纸在这里，我留了副本。那份报告总共跑了二十四次测试，其中九次识破了造假；后来发表的统计只保留另外十五次。\n\n他们没有让实验失败。只是把识破实验的人从结果里拿掉了。”'},
  verdict:{speaker:'最后一条录音 / 许闻舟',text:'“我没有死，也没有失踪。我在那天被停掉了权限。后来他们把我的账号标成 MISSING，就像一条设备日志。你看，连删掉一个人，都可以写成一个很像样的故事。”'}
 };
 const finale={
  preface:'审计完成。你找到的不是一个被困在 1946 年的女人，而是一份被改写成“失踪者”的设备档案。一个名字、一段声音、三份来源不独立的报告，使不存在的人获得了近乎完整的人生。',
  letters:[
   '林澄在最后一次录音中没有哭，也没有慷慨陈词。她只是反复说：“我想听原件。”她一直以为自己在校准一台旧机器，后来才明白，真正需要校准的是每个人对证据的信任。',
   '许闻舟的账号确实被删了。但他并没有从现实世界消失。服务器上的“失踪”是一种权限状态，不是一个人的命运。有人故意让你混淆两者。',
   '项目负责人留下的最后一句话是：“如果我们能制造一个被历史承认的人，谁来保证下一个人不是你？”真正需要公布的不是你的私人记忆，而是那些报告如何被制造出来的。'
  ]
 };
 return {sources,manual,annex,steps,records,interludes,finale};
})();
