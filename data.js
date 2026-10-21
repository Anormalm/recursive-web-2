/* ZEPHYR · 馆藏数据：卷宗著录、来源索引与调阅步骤。 */
window.ZEPHYR_DATA = (() => {
 const days = {1:'第一日 · 灰尘与墨',2:'第二日 · 回声',3:'第三日 · 触点',4:'第四日 · 空白页',5:'第五日 · B 柜',6:'第六日 · 第零号证人'};
 const manual = [
 '凌晨的雨沿着铁皮棚滴下来，许多收音机都受了潮。',
 '值班员说，隔壁的钟走得比这里快了四分钟。',
 '修理桌下有只褪色的木箱，锁孔很小。',
 '一张旧单据把无线电和仪表列成同一种器材。',
 '记录纸留下的字迹淡得几乎不能辨认。',
 '有人坚持说那段声音来自旧楼的机房里。',
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
 {id:'registry',day:1,kind:'hex',title:'第一份没有收件人的档案',subtitle:'WX-17 无线电登记表。四栏十六进制，栏序不明。',description:['一份标着“1946.11.17”的无线电登记表。四栏内容全部以十六进制字节誊录，誊录顺序不随纸面排列。馆藏同时存有两份批次单，各自给出一种栏序——一份是数字化修复件。'],evidence:['aRegistry','aBatchA','aBatchB']},
 {id:'institution',day:1,kind:'source',title:'两枚都像真的印章',subtitle:'档案 A 附件。两枚 1946 印章，一枚属于本表。',description:['扫描件背页并排盖着两枚印章，墨迹都与年代相符。许闻舟的批注只有两行：哪一枚盖在文理注册渠道的表上，哪一所就是登记表所属的机构。'],evidence:['aLetterhead']},
 {id:'namecode',day:2,kind:'book-zh',title:'值班名单上的幽灵',subtitle:'附页索引七组。配套抄本未见原件。',description:['“失踪记录员”的姓名被完全抹去。复印附页保留七组索引，索引本身未经任何说明。许闻舟确认，这些索引只能与同版本的手写抄本配套使用，抄本的装订与计数另有讲究。'],evidence:['aWorkbook'],clue:'01:04 / 10:03 / 00:06 / 12:00 / 02:01 / 15:09 / 14:09'},
 {id:'building',day:2,kind:'source',title:'不止一个旧名',subtitle:'校园建筑名称变更备忘。最新一格空白。',description:['备忘残片记录同一建筑的三个年代。1986 年它还叫 NTI；2015 年的格子里写着两个名字——都是真的。2026 年的格子是空白。'],evidence:['aBuilding']},
 {id:'reelnote',day:2,kind:'cipher',title:'第二卷录音',subtitle:'REEL-B 内页。密文与一枚印章。',description:['两份录音编号之间夹着一张纸条。五字一组的字母，不保留任何单词间隔。纸角盖一枚章，落款是“电报式”。写纸条的人，手里应当有 1946 年的登记册。'],evidence:['aReelnote'],clue:'PQLDA XGZNU ANGPH RFOCS QXNPK SMMNL KCX'},
 {id:'reels',day:2,kind:'wave',title:'相同的噪声',subtitle:'REEL-A / REEL-B 采样清单。原件校验栏缺失。',description:['比对结论建立在“第二份独立录音”上。系统保留两卷各八段十六点整数采样。哪两段才是同一段，校验栏没有说。'],evidence:['aSamples']},
 {id:'dial',day:3,kind:'maimai',title:'十三个触点',subtitle:'触点排列图。纸上只留一串编号。',description:['损坏的记录里恢复出十三个编号触点的转盘。触点上的字符须逐个触发才会显示。纸上只留一行编号——但纸角另有小字：抄录时顺序已乱。'],evidence:['aDial'],clue:'9 2 11 5 13 7 1 4 10 6 3 12 8'},
 {id:'tracks',day:3,kind:'arcaea',title:'天空轨道的证词',subtitle:'双轨信号修复界面。上层与下层各十四格。',description:['修复界面把信号画在上下两层，每一拍只有一格被点亮。全部亮格连读，得到一串字符；界面下方另有第二行密文——连读得到的，未必是答案。'],evidence:['aRails']},
 {id:'parity',day:3,kind:'hamming',title:'三个接收字',subtitle:'磁带附页。校验记录三份，交互板其一。',description:['B 柜的磁带附有一份电气工程校验记录，纸面备份了三个接收字：甲、乙、丙。交互板上显示其中之一。七个比特至多允许一个错。'],evidence:['aParity']},
 {id:'audit',day:4,kind:'earth',title:'未来的卡牌，写在过去的纸上',subtitle:'1986 影印件中的异常插入行。字段不属于无线电。',description:['1986 年记录的影印件里多出一行英文：GACHA_ID、FEATURED_CARD、SOURCE_COMMIT。影印件末尾的引用栏里印着一个 2026 年才出现的项目名。林澄在旁边圈起两个字段，写着：“这些不是无线电术语。”'],evidence:['aAudit']},
 {id:'hiddenindex',day:4,kind:'absent',title:'没有材料的卷宗',subtitle:'第 042 号卷。数字化失败。',description:['这一卷在数字化系统里没有任何页面。调阅记录显示它曾被分发为数段残片，随后的注销申请只成功了一部分——分发本身无法撤回。'],evidence:['aHidden']},
 {id:'dropcoords',day:4,kind:'drop',title:'最后一封没有投递的信',subtitle:'取件通知。收件人栏已填写。',description:['恢复出的索引不指向图书馆，也不指向校园机房。它指向一处公共地点。许闻舟便签：“原件从来不在服务器里。要验证一份数字记录，先拿到它声称复制的纸。”'],evidence:['aDrop']},
 {id:'annex',day:5,kind:'book-en',title:'B 柜里的两列索引',subtitle:'英文附录一页。角落两列罗马数字，各盖一枚章。',description:['1986 年的第二份维修备忘录使用英文。页面角落并排两列索引：甲列盖着“B 柜附录·本册”，乙列盖着“第三抄本”。两列都像是真的——但只有一列通向你要的那句话。'],evidence:['aAnnex'],clue:'甲列（章：B 柜附录·本册）IX.I / IX.II / IV.II / IX.IV / IX.VIII / IX.IX\n乙列（章：第三抄本）VIII.VII / VIII.VIII / VIII.I / VIII.III / VI.XIII / VI.XVII'},
 {id:'recursion',day:5,kind:'binary',title:'较早的一次递归',subtitle:'旧档引用一段。出处与年代不符。',description:['许闻舟最后一封内部邮件引用了一段旧档文字：“The street remembers the group chat.” 出处不是本馆藏件——是一份更早的递归实验残档，节点编号不详。'],evidence:['aRecursive']},
 {id:'provenance',day:5,kind:'provenance',title:'所有道路都通往同一个目录',subtitle:'四份档案的处理日志摘录。一条已注销。',description:['系统开放四份档案的部分处理日志。其中一条链盖着注销章，被馆方声明“不在馆藏范围”。其余三条来自不同年代、不同研究人员递交，却在“上游来源”字段里指向同一处。'],evidence:['aTrace']},
 {id:'masterkey',day:6,kind:'sealed',title:'不许拆开的信',subtitle:'原始审计表。加密。封条完整。',description:['项目最终审计表的扫描件。它没有随数字化系统入库——馆方说明只有一行：原件不在服务器里。加密方式与密钥均未随文件保存。'],evidence:['aSealed']},
 {id:'judgment',day:6,kind:'verdict',title:'第零号证人的真相',subtitle:'审计判断表。六行，无结论栏。',description:['解密后的审计表有六行。没有失踪人口，没有时间旅行。三份看似独立的文件，在它的来源图谱里指向同一个 2026 年工作目录；两枚印章与两个旧名，则各占一行。'],evidence:['aVerdict']}
 ];
 const records = {
 aRegistry:{date:'1946 · 原始记录',title:'设备登记记录 / WX-17',type:'史料副本',body:'17 NOV 1946  /  23:17\nMAINTENANCE CHANNEL: WX/17\nREGISTER: 4 FIELDS / C1–C4 / 见卷面\nRECEIVED PULSES: 8\nOPERATOR: [FIELD LOST]\n\n扫描批次：2026-B\n备注：四栏十六进制誊录完整；栏序另见批次单。'},
 aBatchA:{date:'2026 · 数字化修复件',title:'批次单 甲（修复件）',type:'工序记录',body:'COLUMN ORDER: 2-1-4-3\n工序：2026 年数字化修复时重新誊录。\n\n馆方注记：修复件的栏序以修复员当时判读为准，未经原件复核。'},
 aBatchB:{date:'1946 · 缩微副本',title:'批次单 乙（缩微）',type:'工序记录',body:'COLUMN ORDER: 3-1-4-2\n工序：随原件同步缩微，未经重排。\n\n缩微注记：栏序照录自誊录原件。'},
 aLetterhead:{date:'2026 · 批注',title:'许闻舟 / 两枚印章',type:'私人研究笔记',body:'两张都是真的。1946 年那座岛上不止一所学校。\n\n问题不在真假，在渠道：WX/17 是文理注册渠道的表。\n批注末行：“盖在文理表上的那所，当年的全名。它是下一把钥匙。”'},
 aWorkbook:{date:'1946 · 抄本',title:'维修台手记 / 第三抄本',type:'书籍密码文本（固定版本）',body:manual.map((l,i)=>String(i+1).padStart(2,'0')+'  '+l).join('\n')+'\n\n抄录尾注（原件戳记三枚）：\n本册以零计数。附页自下而上装订。索引两段互为倒置。标点不计入字数。'},
 aBuilding:{date:'2015—2026 · 校园线索',title:'建筑名称更改备忘',type:'历史考证提示',body:'1986: NTI / SOUTH-WEST CAMPUS\n2015: THE HIVE · THE LEARNING HUB\n2026: [ ？？？ ]\n\n注：本楼不止一个旧名；2015 年那一对名字都曾被正式使用。\n新名见本校 2026 年新闻稿（何处发布，本备忘不载）。'},
 aReelnote:{date:'2026 · 林澄便签',title:'双卷比对指令',type:'密文',body:'纸条夹在 REEL-A 与 REEL-B 之间。\n纸角盖一枚章：KEY: AS REGISTERED IN 1946 · TELEGRAPHIC FORM。\n\n除密文与印章外，纸上再无任何文字。'},
 aSamples:{date:'2026 · 声纹修复',title:'数字采样列表 / REEL-A / REEL-B',type:'信号对照说明',body:'每段含 16 个整数采样值。\n比对基线：十六点整数采样，任何一位不一致即视为不同片段。'},
 aDial:{date:'1986 / 修复于 2026',title:'十三触点信号转盘',type:'维修图',body:'触点沿顺时针编号 1—13，字符须逐个触发显示。\n纸上只留一行编号：9 2 11 5 13 7 1 4 10 6 3 12 8。\n\n纸角小字：“抄录时顺序已乱。转盘自己有它自己的次序。”'},
 aRails:{date:'2026 · 林澄',title:'双轨修复备忘',type:'信号图像',body:'上层：SKY\n下层：FLOOR\n\n页脚：亮格连读，是给下一层用的。'},
 aParity:{date:'2026 · EE 实验纸',title:'错误检测 / Hamming(7,4)',type:'电路备忘',body:'RECEIVED WORDS（纸面备份）：\n甲: 1010101\n乙: 0100011\n丙: 1010011\n\n校验位位置：1、2、4\n偶校验分组：\nS1 = XOR(1,3,5,7)\nS2 = XOR(2,3,6,7)\nS4 = XOR(4,5,6,7)\n\n注：交互板显示其中一字。七位中至多允许一个错。'},
 aAudit:{date:'档案标注：1946',title:'未来招募数据 / 第 345 号池',type:'异常插入内容',body:'GACHA_ID = [UNKNOWN]\nFEATURED_CARD_SOURCE_ID = [UNKNOWN]\nSOURCE_COMMIT = [UNKNOWN]\nLOCAL_SAVE_KEY = earth-online-solo-save\n\n引用栏印有项目名（见卷面）。\n若真实源代码在 2026 年才公开，不可能凭这份档案证明它写于 1946。\n注意区分现役池与遗留池。'},
 aHidden:{date:'2026 · 处理日志',title:'第 042 号卷宗 / 数字化失败',type:'系统记录',body:'TRANSFER STATUS: FAILED\nPAGES DIGITIZED: 0\n\n调阅记录显示，该卷曾以数段残片的形式对外分发。\n分发渠道各有代号；渠道顺序见系统日志。\n注销申请：部分成功。分发：无法撤回。'},
 aDrop:{date:'现场 · 2026',title:'取件通知 / Z-00',type:'实境道具',body:'收件人：Zephyr\n物品：A4 纸一张（仅印 QR）\n\n位置密文：十六位数字。\n本馆原始记录均为十进制度；纬度在前，经度在后。\n位移密钥见第六卷采样摘要：取其前八位数字，循环使用，逢十取模。\n\nQR 链接携带封存条，回到本站即完成核验。'},
 aAnnex:{date:'1986 · B 柜附录',title:'信号采样维修备忘 / 固定文本',type:'英文书籍密码',body:annex.map((l,i)=>String(i+1).padStart(2,'0')+'  '+l).join('\n')+'\n\n角落两列索引（见卷面），各盖一枚章。'},
 aRecursive:{date:'2025 · 旧档',title:'递归实验残档 · 节点不详',type:'旧档关联',body:'Encoded Timestamp 见卷面。\n残档出处仅存一句记录：“那栋楼里最早的住户。”\n提交说明残行：“…recursive…”'},
 aTrace:{date:'2026 · 内部处理日志',title:'追溯表 / 四份材料',type:'来源字段',body:'1946-DIARY.TIF\n1986-REEL-B.WAV\n1998-SURVEY.TIF\n2026-INDEPENDENT-AUDIT.PDF\n\n其中一条链已盖注销章，馆方声明其不在馆藏范围。\n外部存档与内部“独立审计”使用了同一个生成根。'},
 aSealed:{date:'2026 · 馆方说明',title:'原始审计表 / 封存',type:'加密文件',body:'该扫描件由林澄生前最后一次提交。\n提交说明只有一行：“原件不在服务器里。”\n\n加密方式未随文件保存。封条完整，未经拆封。\n封条印字：Z00。'},
 aVerdict:{date:'2026 · 恢复',title:'未修改的审计摘要',type:'关键原件',body:'原始 1946 设备记录：八组脉冲，只有设备。\n\n“许静仪”的身份记录：未见当年原始登记；人物信息在 2026 的修复文本中首次出现。\n\n第二卷录音：与第一卷共享完全相同的样本段及上游数据。\n\n所谓独立评估：项目内部曾筛选或改写调查结果。\n\n第二枚 1946 印章：真实存在，但盖在与本表渠道不同的机构。\n\n2015 年建筑双名：两个名字都曾被正式使用。'}
 };
 const interludes={
 registry:{speaker:'未署名便条 / 1946',text:'“你不是在整理档案，你是在替它说话。”\n——纸背有一行小字，字迹未鉴定：“谁在往里面加名字？”'},
 institution:{speaker:'许闻舟 / 2026.09.21',text:'“在两枚真印章里挑一枚，先问表格自己。”\n——他翻过那页，贴了一张便签。'},
 namecode:{speaker:'旧抄录员守则 / 残页',text:'“修到第三遍，抄本会自己认错。”\n——守则只余第一条，其余被水渍洇掉。纸角另有一枚批注，笔迹要新得多：“第五遍之后别再往下修。再往下，就是它在替你写字了。”'},
 building:{speaker:'林澄 / 未发送的邮件',text:'“复述一遍：名字换了三次，楼还是那栋楼。人也一样吗？”\n这句话写完就被她删掉了。'},
 reelnote:{speaker:'林澄 / REEL-B / 01:46',text:'“档号对上了，纸条还是读不通。写纸条的人，手里一定有 1946 年的登记册，而且惯用那一年的电报式。”'},
 reels:{speaker:'内部聊天截取',text:'案卷比人诚实：同一段噪声，不会自己长出两份。\n（其后消息被归档系统标记为“与研究目标无关”。）'},
 dial:{speaker:'林澄 / 屏幕边注',text:'“其实盘面没坏。坏的从来是抄录的顺序——转盘上的编号才是它自己的次序。”'},
 tracks:{speaker:'1986 / 镜像索引',text:'“实验做完了才明白：亮着的格子连出来的是钥匙，不是结论。界面上还有第二层。”\n——夹层落款 2026，夹入时间未鉴定。'},
 parity:{speaker:'EE 实验纸背面',text:'“档案室三张纸，只有一张值得修——校验和会告诉你哪张，以及修哪一位。”'},
 audit:{speaker:'许闻舟 / 私人草稿',text:'“案卷会说谎，仓库不会。引用栏里那个名字，去外面找它的仓库。翻到最底下之前，先分清现役与遗留。”\n——草稿背面另有一行，写得急：“1986 的纸上印着 2026 的行。不是那一行印错了年份——是那一年，被后来写过。”'},
 hiddenindex:{speaker:'系统内部 / 处理日志',text:'“也有注销不掉的残片。渠道代号在系统日志里排着队。”\n——“第 042 号卷宗数字化失败。原因不明。”'},
 dropcoords:{speaker:'原始审计 / Z-00 · 回执背面',text:'“在纸面前，数字都是抄本。位移密钥就压在第六卷的摘要里，取它的前八位数字。”\n——手写，笔迹与林澄存档样本一致。右下角还有半句，被水洇掉了：“替我把它拿出来。它没有被写过。”'},
 annex:{speaker:'1986 附录 / 末页手写',text:'“悄悄告诉你：印章说自己是哪本书时，先看看它盖在哪一页。本册之外，第三抄本也在架上。”'},
 recursion:{speaker:'许闻舟 / 最后草稿',text:'“悄声说：钥匙不用找新的，第八卷亮格里那一串已经给过了。”\n——草稿末页夹着一张便签，只写了四行：平台在 04-03 那次维护里往 1946 年写进了一个名字；维护只用了四分钟；当班栏是空的；名字是“许静仪”。'},
 provenance:{speaker:'系统内部 / 处理日志',text:'“修复历史的人，也会往历史里加目录。认准没有盖注销章的那几条。”\n——工程师日志'},
 masterkey:{speaker:'林澄 / 最后一次录音',text:'“复印件看久了会忘记：钥匙从来不在服务器里。封条上印着它——把数字扔掉，字母留下。”'},
 judgment:{speaker:'最后一条录音 / 许闻舟',text:'“你的最后一件事：把六行写完。别忘了那两枚印章，和 2015 年的那一对名字。”\n——磁带转完没有停。噪声里还有半句话，被人从中间剪断：“六行写完，卷宗闭合。闭合的时候，登记进去的是——”'}
 };
  return {days,manual,annex,steps,records,interludes};
})();
