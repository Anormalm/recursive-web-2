/* ZEPHYR · 馆藏数据：卷宗著录、来源索引与调阅步骤。 */
window.ZEPHYR_DATA = (() => {
 const days = {1:'第一日 · 灰尘与墨',2:'第二日 · 回声',3:'第三日 · 触点',4:'第四日 · 空白页',5:'第五日 · B 柜',6:'第六日 · 第零号证人'};
 const sources = {
  nus1946: {title:'NUS 官方 · Raffles College 战后恢复教学',url:'https://fass.nus.edu.sg/ecs/about-us-history/',detail:'核对 1946 年当时使用的学校名称。'},
  ntuHistory: {title:'NTU 官方 · Our History',url:'https://www.ntu.edu.sg/about-us/history',detail:'NTI、NTU 的年代并不相同。'},
  ntu2015: {title:'NTU 2015 · The Hive',url:'https://blogs.ntu.edu.sg/hey/2015/10/29/whats-buzzing-at-the-hive/',detail:'对照 2015 年的叫法。'},
  ntu2026: {title:'NTU 2026 · UOB Innovation Hub',url:'https://www.ntu.edu.sg/news/detail/ntu-boosts-innovation-with-launch-of-uob-innovation-hub',detail:'注意发布日期。'},
  earth: {title:'Zephyruz / Earth-online',url:'https://github.com/Zephyruz/Earth-online',detail:'个人项目的公开源码。'},
  earthData: {title:'Earth-online · 卡池定义',url:'https://github.com/Zephyruz/Earth-online/blob/main/src/data/defaults.ts',detail:'找 ACTIVE_BANNER_ID 和展示卡。'},
  earthCards: {title:'Earth-online · 展示卡组件',url:'https://github.com/Zephyruz/Earth-online/blob/main/src/components/GachaPanel.tsx',detail:'这张卡为什么出现在首页？'},
  earthCommit: {title:'Earth-online · 初始化提交',url:'https://github.com/Zephyruz/Earth-online/commit/6ad7826bae8dfc56d5720b2f39bb42c076280dfc',detail:'审查原始提交的日期。'},
  recursive: {title:'Anormalm / recursive-web',url:'https://github.com/Anormalm/recursive-web',detail:'前代实验可能保存在旧项目里。'},
  node3: {title:'recursive-web · node3.txt',url:'https://github.com/Anormalm/recursive-web/blob/main/node3.txt',detail:'Encoded Timestamp，真正的原始索引。'},
  dcode: {title:'dCode · Vigenère Cipher',url:'https://www.dcode.fr/vigenere-cipher',detail:'解密时仅处理英文字母 A–Z。'},
  dcodeBook: {title:'dCode · Book Cipher',url:'https://www.dcode.fr/book-cipher',detail:'书籍密码可将文本位置当作地址。'},
  mai: {title:'maiノーツ · 谱面编辑器',url:'https://mai-notes.com/',detail:'环形布局与原创谱面可以相互核对。'},
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
 {id:'registry',day:1,kind:'hex',title:'第一份没有收件人的档案',subtitle:'WX-17 无线电登记表。持有人栏缺失。',description:['一份标着“1946.11.17”的无线电登记表。持有人栏在扫描后被重新盖上一块黑色矩形——不是墨迹渗透，是后期处理。'],refs:[],evidence:['aRegistry']},
 {id:'institution',day:1,kind:'source',title:'1946 年不可能存在的校徽',subtitle:'档案 A 附件。印章年份待核。',description:['扫描件背页盖着“NUS / 1946”。若文件为原件，该印章必须在 1946 年即已存在。'],refs:['nus1946'],evidence:['aLetterhead']},
 {id:'namecode',day:1,kind:'book-zh',title:'值班名单上的幽灵',subtitle:'附页索引七组。配套抄本未见原件。',description:['“失踪记录员”的姓名被完全抹去。复印附页保留七组索引。许闻舟确认，这些索引只能与同版本的手写抄本配套使用。'],refs:['dcodeBook'],evidence:['aWorkbook'],clue:'15:10 / 16:10 / 03:02 / 13:01 / 01:07 / 11:04 / 02:05'},
 {id:'building',day:2,kind:'source',title:'蜂巢改过名字',subtitle:'同一建筑的三个年代名称。最新一格空白。',description:['第二份档案声称来自“1986 年 NTU”，注脚却把一栋 2015 年才出现的建筑列为内部代号。林澄没有批评这份文件，只划掉了一处年份。'],refs:['ntuHistory','ntu2015','ntu2026'],evidence:['aBuilding']},
 {id:'reelnote',day:2,kind:'cipher',title:'第二卷录音',subtitle:'REEL-B 内页。密文与一枚印章。',description:['两份录音编号之间夹着一张纸条。纸条上的字母分组保留了单词间空格，不像随机噪声。'],refs:['dcode'],evidence:['aReelnote'],clue:'KHJ YHS KKUYLPY WYAWJ L WAPUWP WUYICJ'},
 {id:'reels',day:2,kind:'wave',title:'相同的噪声',subtitle:'REEL-A / REEL-B 采样清单。原件校验栏缺失。',description:['NTU 的结论建立在“第二份独立录音”上。林澄留下八格数字采样，每格代表录音中的一个短片段。两卷磁带的顺序并不完全相同。'],refs:[],evidence:['aSamples']},
 {id:'dial',day:3,kind:'maimai',title:'十三个触点',subtitle:'触点排列图。纸上只留一串编号。',description:['损坏的记录里恢复出十三个触点的排列。林澄日志：“这根本不是调频波段，是在描述触点顺序。”'],refs:['mai'],evidence:['aDial'],clue:'7 2 6 10 3 4 5 9 8 11 13 12 1'},
 {id:'tracks',day:3,kind:'arcaea',title:'天空轨道的证词',subtitle:'双轨信号修复界面。轨道归属待判定。',description:['修复界面把十四组信号画在上下两层。1986 年的抄录员把两层统称为“地面与天空”；2026 年的林澄在旁边写下了 Arcaea。'],refs:['arcaea'],evidence:['aRails']},
 {id:'parity',day:3,kind:'hamming',title:'第七位之前的错误',subtitle:'磁带附页。校验记录一份，单比特错误。',description:['B 柜的磁带附有一份电气工程校验记录。七个比特中有一个在复制时被翻转。林澄留下三条校验关系和一张接线图。'],refs:[],evidence:['aParity']},
 {id:'audit',day:4,kind:'earth',title:'未来的卡牌，写在过去的纸上',subtitle:'1986 影印件中的异常插入行。字段不属于无线电。',description:['1986 年记录的影印件里多出一行英文：GACHA_ID、FEATURED_CARD、SOURCE_COMMIT。林澄在旁边圈起两个字段，写着：“这些不是无线电术语。”'],refs:['earth','earthData','earthCards','earthCommit'],evidence:['aAudit']},
 {id:'hiddenindex',day:4,kind:'absent',title:'没有材料的卷宗',subtitle:'第 042 号卷。数字化失败。',description:['这一卷在数字化系统里没有任何页面。调阅记录显示它曾被分发为四段残片，随后全部注销。'],refs:[],evidence:['aHidden']},
 {id:'dropcoords',day:4,kind:'drop',title:'最后一封没有投递的信',subtitle:'取件通知。收件人栏已填写。',description:['林澄恢复的索引不指向图书馆，也不指向校园机房。它指向一处公共地点。许闻舟便签：“原件从来不在服务器里。要验证一份数字记录，先拿到它声称复制的纸。”'],refs:[],evidence:['aDrop']},
 {id:'annex',day:5,kind:'book-en',title:'B 柜里的维修手册',subtitle:'英文附录一页。索引六组，无签发人。',description:['1986 年的第二份维修备忘录使用英文。角落有六组罗马数字索引。'],refs:['dcodeBook'],evidence:['aAnnex'],clue:'IX.I / IX.II / IV.II / IX.IV / IX.VIII / IX.IX'},
 {id:'recursion',day:5,kind:'binary',title:'较早的一次递归',subtitle:'旧项目引用一段。出处与年代不符。',description:['许闻舟最后一封内部邮件引用了一段旧项目文字：“The street remembers the group chat.” 出处并非 ZEPHYR 的原生文档。'],refs:['recursive','node3'],evidence:['aRecursive']},
 {id:'provenance',day:5,kind:'provenance',title:'所有道路都通往同一个目录',subtitle:'三份档案的处理日志摘录。来源字段待比对。',description:['系统开放三份档案的部分处理日志。它们来自不同年代、不同研究人员递交，却在“上游来源”字段里指向同一处。'],refs:[],evidence:['aTrace']},
 {id:'masterkey',day:6,kind:'sealed',title:'不许拆开的信',subtitle:'原始审计表。加密。封条完整。',description:['项目最终审计表的扫描件。它没有随数字化系统入库——馆方说明只有一行：原件不在服务器里。'],refs:[],evidence:['aSealed']},
 {id:'judgment',day:6,kind:'verdict',title:'第零号证人的真相',subtitle:'审计判断表。四行，无结论栏。',description:['解密后的审计表只有四行。没有失踪人口，没有时间旅行。三份看似独立的文件，在它的来源图谱里指向同一个 2026 年工作目录。'],refs:[],evidence:['aVerdict']}
 ];
 const records = {
 aRegistry:{date:'1946 · 原始记录',title:'设备登记记录 / WX-17',type:'史料副本',body:'17 NOV 1946  /  23:17\nMAINTENANCE CHANNEL: WX/17\nREGISTER: 21 OCTETS / 见卷面\nRECEIVED PULSES: 8\nOPERATOR: [FIELD LOST]\n\n扫描批次：2026-B\n备注：登记栏完整，持有人栏缺失。'},
 aLetterhead:{date:'2026 · 批注',title:'许闻舟 / 档案 A 的年代问题',type:'私人研究笔记',body:'那份 1946 年的公文头是后来补上的。年代上不成立。\n\n1946 年存在的是另一所机构；今天的 NUS 在 1980 年之后。\n出处待查：NUS 官方校史。\n\n批注末行：“把当年的全名找出来。它是下一把钥匙。”'},
 aWorkbook:{date:'1946 · 抄本',title:'维修台手记 / 第三抄本',type:'书籍密码文本（固定版本）',body:manual.map((l,i)=>String(i+1).padStart(2,'0')+'  '+l).join('\n')+'\n\n附页索引七组，抄录自原件。索引本身未经任何说明。'},
 aBuilding:{date:'2015—2026 · 校园线索',title:'建筑名称更改备忘',type:'历史考证提示',body:'2015: THE HIVE\n2026: [ ？？？ ]\n1986: NTI（不是今天名义上的 NTU）\n\n不要把本备忘当成正式大学文件。请以 NTU 官网和历史报道核对。'},
 aReelnote:{date:'2026 · 林澄便签',title:'双卷比对指令',type:'密文',body:'纸条夹在 REEL-A 与 REEL-B 之间。\n纸角盖一枚章：KEY: AS REGISTERED IN 1946。\n\n除密文与印章外，纸上再无任何文字。'},
 aSamples:{date:'2026 · 声纹修复',title:'数字采样列表 / REEL-A / REEL-B',type:'信号对照说明',body:'每段含 16 个整数采样值。'},
 aDial:{date:'1986 / 修复于 2026',title:'十三触点信号转盘',type:'维修图',body:'触点沿顺时针编号 1—13。\n纸上只留一行编号：7 2 6 10 3 4 5 9 8 11 13 12 1。\n\n旧注记：“如果这串编号对应一个柜名，别再用信号里看到的时间当地址。”'},
 aRails:{date:'2026 · 林澄',title:'双轨修复备忘',type:'信号图像',body:'上层：SKY / 天空\n下层：FLOOR / 地面'},
 aParity:{date:'2026 · EE 实验纸',title:'错误检测 / Hamming(7,4)',type:'电路备忘',body:'RECEIVED: 0110111\n校验位位置：1、2、4\n偶校验分组：\nS1 = XOR(1,3,5,7)\nS2 = XOR(2,3,6,7)\nS4 = XOR(4,5,6,7)'},
 aAudit:{date:'档案标注：1946',title:'未来招募数据 / 第 345 号池',type:'异常插入内容',body:'GACHA_ID = [UNKNOWN]\nFEATURED_CARD_SOURCE_ID = [UNKNOWN]\nSOURCE_COMMIT = [UNKNOWN]\nLOCAL_SAVE_KEY = earth-online-solo-save\n\n若真实源代码在 2026 年才公开，不可能凭这份档案证明它写于 1946。'},
 aHidden:{date:'2026 · 处理日志',title:'第 042 号卷宗 / 数字化失败',type:'系统记录',body:'TRANSFER STATUS: FAILED\nPAGES DIGITIZED: 0\n\n调阅记录显示，该卷曾以四段残片的形式对外分发。\n分发渠道：系统日志、索引之外、错误页、目录注释。\n四段残片的注销申请全部成功——但分发无法撤回。'},
 aDrop:{date:'现场 · 2026',title:'取件通知 / Z-00',type:'实境道具',body:'收件人：Zephyr\n物品：A4 纸一张（仅印 QR）\n\n位置密文：十六位数字。\n本馆原始记录均为十进制度；纬度在前，经度在后。\n\nQR 链接携带封存条，回到本站即完成核验。'},
 aAnnex:{date:'1986 · B 柜附录',title:'信号采样维修备忘 / 固定文本',type:'英文书籍密码',body:annex.map((l,i)=>String(i+1).padStart(2,'0')+'  '+l).join('\n')+'\n\n角落索引六组，形如 IX.I。'},
 aRecursive:{date:'2025 · 旧网页',title:'前代终端的第三个节点',type:'旧项目关联',body:'Encoded Timestamp 见卷面。'},
 aTrace:{date:'2026 · 内部处理日志',title:'追溯表 / 三份材料',type:'来源字段',body:'1946-DIARY.TIF\n1986-REEL-B.WAV\n2026-INDEPENDENT-AUDIT.PDF\n\n外部存档与内部“独立审计”使用了同一个生成根。'},
 aSealed:{date:'2026 · 馆方说明',title:'原始审计表 / 封存',type:'加密文件',body:'该扫描件由林澄生前最后一次提交。\n提交说明只有一行：“原件不在服务器里。”\n\n加密方式与密钥均未随文件保存。'},
 aVerdict:{date:'2026 · 恢复',title:'未修改的审计摘要',type:'关键原件',body:'原始 1946 设备记录：八组脉冲，只有设备。\n\n“许静仪”的身份记录：未见当年原始登记；人物信息在 2026 的修复文本中首次出现。\n\n第二卷录音：与第一卷共享完全相同的样本段及上游数据。\n\n所谓独立评估：项目内部曾筛选或改写调查结果。\n\n最初的 WX/17 是设备登记，不是人的签名。'}
 };
 const interludes={
 registry:{speaker:'未署名便条 / 1946',text:'“八组脉冲，一台设备。登记表上从来没有过人。”\n——纸背有一行小字，字迹未鉴定：“谁在往里面加名字？”'},
 institution:{speaker:'许闻舟 / 2026.09.21',text:'“查过两遍。印章年份早于校名设立。原件疑为后期重排。”\n他把那页翻过来，贴了一张便签：“先查机构，再查人。”'},
 namecode:{speaker:'人员档案 / WX-17',text:'姓名栏恢复：档案员许静仪。\n签发人栏：缺失。\n系统补录：『遗失者已确认。』'},
 building:{speaker:'林澄 / 未发送的邮件',text:'“那栋楼我每周都路过。名字换了三次，楼还是那栋楼。”\n“人也一样吗？”\n这句话写完就被她删掉了。'},
 reelnote:{speaker:'林澄 / REEL-B / 01:46',text:'“纸条是后来夹进去的。写纸条的人，手里一定有 1946 年的登记册。”'},
 reels:{speaker:'内部聊天截取',text:'林澄：同一段噪声被原样带过去了。\n周启山：所以呢？\n（其后消息被归档系统标记为“与研究目标无关”。）'},
 dial:{speaker:'林澄 / 屏幕边注',text:'“十三次 TAP，读出来像一句地址。B 柜，附页。”'},
 tracks:{speaker:'1986 / 镜像索引',text:'封面年份：1986。\n内页夹页落款：2026。\n夹入时间未鉴定。'},
 parity:{speaker:'林澄 / 工作日志',text:'“修正以后，标签还是不对。有时候真的只是铜线松了。”'},
 audit:{speaker:'许闻舟 / 私人草稿',text:'“我们给一个 1946 年的人编身世，最后让一个 2026 年的仓库把她出卖了。”'},
 hiddenindex:{speaker:'系统内部 / 处理日志',text:'“第 042 号卷宗数字化失败。原因不明。”\n“有人删过它的调阅记录——但没人删得掉分发出去的残片。”'},
 dropcoords:{speaker:'原始审计 / Z-00 · 回执背面',text:'“那份报告跑了二十四次测试，九次识破了造假。发表时只保留另外十五次。”\n——手写，笔迹与林澄存档样本一致。'},
 annex:{speaker:'1986 附录 / 末页手写',text:'A WITNESS IS NOT THE AUTHOR.\n许闻舟补记：“从无数真实的字里，可以拼出一个不存在的人。”'},
 recursion:{speaker:'许闻舟 / 最后草稿',text:'“有人把另一个谜题的索引方式搬了进来。不像修复历史，像在写剧本。”'},
 provenance:{speaker:'系统内部 / 处理日志',text:'“三个年代，三个提交人，一个根目录。我们在同一个人手里买了三份证词。”\n——工程师日志'},
 masterkey:{speaker:'林澄 / 最后一次录音',text:'“我想听原件。原件从来不在服务器里——”\n“你手里那张纸，就是原件。”'},
 judgment:{speaker:'最后一条录音 / 许闻舟',text:'“我没有失踪。我在那天被停掉了权限。连删掉一个人，都可以写成一个很像样的故事。”'}
 };
 const finale={
 preface:'CASE Z-00 CLOSED :: 身份：许静仪 · 合成于 2026 :: SOURCE ROOT: CORE-17',
 letters:[
  '“我想听原件。”——林澄 / 最后一次录音',
  '“账号上的 MISSING 是一种权限状态，不是一个人的命运。”——许闻舟'
 ]
 };
 return {days,sources,manual,annex,steps,records,interludes,finale};
})();
