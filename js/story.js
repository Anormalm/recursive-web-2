/* ZEPHYR · supplemental campaign. Authored staff material is not independent historical corroboration. */
(() => {
 'use strict';
 const b = (zh, en) => ({zh, en});
 const p = (zh, en) => ({zh, en});
 window.ZEPHYR_STORY = Object.freeze({
  rev: 1,
  chapters: [
   {day:1,title:b('第一章 · 没交完的工作','Chapter 1 · Unfinished work'),question:b('你接的是一份材料，还是替材料作证的责任？','Are you taking custody of a file, or responsibility for what it claims?')},
   {day:2,title:b('第二章 · 名字已经填好了','Chapter 2 · The name was filled in'),question:b('几份材料说同一件事，是否就有了几个证人？','When several records agree, how many witnesses do you actually have?')},
   {day:3,title:b('第三章 · 修掉的部分','Chapter 3 · What repair removes'),question:b('一个能读的版本，能替它来自的东西说多少话？','How much can a readable reconstruction say for its source?')},
   {day:4,title:b('第四章 · 退回的复核申请','Chapter 4 · The returned review request'),question:b('申请没有后续受理凭证，接下来还欠哪些回应？','When a request has no later acceptance record, what answers remain owed?')},
   {day:5,title:b('第五章 · 索引外的人','Chapter 5 · People outside the index'),question:b('材料可以结项，材料里的人也能被一起结项吗？','Can closing a project also close the questions about its people?')},
   {day:6,title:b('第六章 · 你要签什么','Chapter 6 · What you will sign'),question:b('怎样把已经知道的交出去，而不替不知道的作结？','How do you hand over what is known without closing what is not?')}
  ],
  exhibits: {
   nHandover: {
    day:1,anchor:0,title:b('交接清单背页：剩下哪一栏','Handover list, reverse: the field still open'),author:b('综合组交接员 · 未署名','General affairs handover worker · unsigned'),date:'2026-10-11',status:b('关闭前整理的补充工作页；不是原交接单的替换件','Supplementary working page assembled before closure; does not replace the original handover'),
    text:p([
     '接手的人：原交接单还是按原样留着。这张是清单背页，不跟它合订。事情本来很小：把首批登记材料、附件和修复说明放到一起，写明哪些能交，哪些还欠复核。别替我补一个正式职务，我只是这几天代收材料的人。',
     '周五清点时，大家都想先把件数填齐。我把“交齐”写上，又划掉了。文件夹确实交齐了，里面有一页勘误没有签发人。有人说既然旧版还在，新版先用也没有损失。我说读的人未必知道还有旧版。最后这一栏又空着。',
     '林澄以前给暂存件用蓝色夹子，许闻舟嫌颜色不好登记，贴了纸条写“待查”。他们两个都对，夹子褪色，纸条也会掉。这回我把待查写进清单，不靠夹子了。桌边那把椅子留宽一点，两个人看同一页时不必挤着站。',
     '你先接收材料，结论等核过再签。每次写工作意见，都带上实际看过的出处。你的回应只存为本地工作副本，标作未发送。旧往来按原页日期读，这里没有人接收或回复新邮件。'
    ],[
     'To the next worker: leave the original handover note as it is. This is the back of the checklist, not an attachment to be bound into it. The job was supposed to be small: bring the first registry, its attachments and the repair notes together, and say what can be handed over and what still needs checking. Do not give me an official title. I am only taking receipt of materials this week.',
     'At Friday’s inventory everyone wanted the item count settled first. I wrote “complete,” then crossed it out. All the folders had arrived, but one correction had no issuing signature. Someone said we could use the new version without losing anything, since the old one remained. I said the reader might not know the old one existed. That field stayed empty.',
     'Lin Cheng used blue clips for pending work. Xu Wenzhou thought colors were hard to register and added slips marked “to check.” Both had a point: clips fade and slips fall off. This time I have put pending status into the list itself. Leave room beside the chair so two people can examine one page without standing on top of each other.',
     'Receive the material first; sign findings after checking. Attach a source you have actually examined to each working position. Your responses stay in the local copy, marked unsent. Read old exchanges by their original dates. No one here receives or replies to new email.'
    ])
   },
   nCorrection: {
    day:1,anchor:1,title:b('未签发的勘误与两次回批','Unsigned correction with two replies'),author:b('林澄、许闻舟 · 恢复的工作往来','Lin Cheng and Xu Wenzhou · recovered working exchange'),date:'2026-02-05',status:b('早期往来摘录；十月结项整理时归入补充材料','Early exchange excerpt; filed as supplementary material during the October closing inventory'),
    text:p([
     '未签发勘误稿的拟用句：“本工作版暂将人员附件列作登记材料的关联索引，供继续查阅；尚未取得人员原始登记，不作身份认证。”前一稿只写了前半句，待核说明放在脚注。林澄上午回批：这次不是字写错，脚注会被漏掉。两句并排放在首页，旧批次记录也留着。我同意工作版，不同意叫定稿。',
     '许闻舟，午后一点四十分：窗口的人已经问了三次。我可以在首页写“暂用，待核”，不用等整批退回来。我知道不是签个字就能解决，但现在谁都不接这栏，下一班还是会照旧版抄。总要让他们有一个不那么错的版本用。',
     '林澄，下午两点零六分：那就把“谁暂用、凭什么暂用、何时重看”一起写。你是在减轻下一班的麻烦，也在把一部分麻烦交给他们。我不反对先做，只反对把暂时做的事写成早就成立的事。',
     '许闻舟，下午两点二十三分：同意保留旧件。我把签发格空着，另存工作说明。蓝夹子请别收，我还没对完。附记：本页没有完成签发；往来表达的是双方当时的主张，不是对登记身份的认证。'
    ],[
     'Proposed sentence in the unsigned correction: “This working version provisionally lists the personnel attachment as a related registry index for further consultation; no original personnel registration has been obtained and no identity is authenticated.” The preceding draft put only the first half in the body, with the qualification in a footnote. Lin’s morning reply: This is not a spelling correction. A footnote gets missed. Put both sentences on the front and keep the batch records. I agree to a working version, not a final one.',
     'Xu, 13:40: The reading desk has asked three times. I can put “temporary use, verification pending” on the front rather than returning the whole batch. A signature will not solve this, I know, but if nobody takes the field, the next shift will copy the old version again. We should give them something less wrong to use.',
     'Lin, 14:06: Then write who is using it temporarily, on what grounds, and when it gets reviewed. You are saving the next shift some trouble and passing them some trouble too. I do not object to starting. I object to describing a temporary act as something long established.',
     'Xu, 14:23: Agreed: keep the old materials. I will leave the issuing field empty and save a separate working explanation. Please leave the blue clip; I have not finished checking. Archival note: this page was never issued. The exchange records their positions at the time, not a certification of the registry identity.'
    ])
   },
   nName: {
    day:2,anchor:2,title:b('人员附件核对工作纸','Personnel attachment checking sheet'),author:b('林澄 · 工作草稿，许闻舟边注','Lin Cheng · working draft, marginal notes by Xu Wenzhou'),date:'2026-02-11',status:b('近现代工作人员的核对记录；不是新增的历史人员登记','Modern staff checking record; not a newly discovered historical personnel entry'),
    text:p([
     '林澄：我把那份人员附件单独放了。现在能说的是“附件上有一个姓名条目”，不能说“我们找到了一名当年的记录员”。第一句听着费事，第二句好写，也好传播。窗口昨天把第二句抄进答复，我去请他们先改回来。对方问，改成这样，读者会不会觉得我们什么都没做。',
     '我们确实做了很多事。做了很多事和找到了这个人不是同一件事。我没有查到原始人员登记；未查到不等于那个人不存在，但不能由我补上一段生活来填这个空。我连他几点上班都不知道，更不该写他最后在哪里出现。',
     '许闻舟边注：我起初觉得她过分小心。好几份抄件都有这条，格式也一致。我说可先作为索引入口。她把“入口”两个字圈出来，问我入口后面有没有独立的材料。没有的话，我们只是给读者多开了一扇回到原处的门。',
     '林澄末行：先找材料，看看附件的解释能不能站得住，别替它把故事讲完。今天先核对所在机构和地方。地点能核实，附在地点上的每个人还得另查。'
    ],[
     'Lin: I have separated the personnel attachment. We can currently say “the attachment contains a name entry,” not “we have found a registrar from that period.” The first sentence is awkward; the second is easy to write and repeat. Yesterday the desk copied the second into a reply. I asked them to change it. They asked whether readers would think we had done nothing.',
     'We have done a great deal. Doing a great deal and finding this person are not the same thing. I have not found an original personnel registry. Not finding it does not prove the person never existed, but I cannot fill the gap by inventing a life. I do not even know their working hours. I certainly cannot write where they were last seen.',
     'Xu’s margin: At first I thought she was being too cautious. Several copies had the entry in matching formats. I suggested using it as an index entrance. She circled “entrance” and asked whether there was independent material beyond it. Otherwise we were just opening another door back to the same place.',
     'Lin’s last line: Look for material that constrains the attachment’s interpretation, not material that completes its story for it. Check the institution and the place first. A verified place does not verify every person attached to it.'
    ])
   },
   nReels: {
    day:2,anchor:4,title:b('给双卷比对留的空栏','The empty field reserved for the reel comparison'),author:b('许闻舟、林澄 · 会前工作记录','Xu Wenzhou and Lin Cheng · preparatory working record'),date:'2026-02-13',status:b('引用既有采样工作的讨论；不增加一份独立录音','Discussion of existing sampling work; does not add an independent recording'),
    text:p([
     '许闻舟：地方核对完，我以为至少能把附件的范围写清。林澄同意地方那一项，说录音那项另算。我又说，两卷都附在这批材料后面，不是已经互相支持了吗。她没有接话，把我的句子复制到空白页，标题写“等待比对”。',
     '林澄：你把“有两份文件”和“有两次记录”当成一句话了。上次暂停上线后，这一项还没有重新签过。先别急着用它给人员附件补证据。我想知道，比对说明靠的是哪一层材料，从那里还能不能查回载体。纸条只记了有人怎样安排工作，不能算作又一个人听见过声音。',
     '许闻舟：会议前我得交一页说明。那页若空着，会问我们这个月究竟做了什么。她说，把实际做过的写上，把没做完的也写上，这就有一页。我觉得她不懂窗口的难处，后来发现她把对方可能问的四个问题都写在背面了，连“暂缓以后读者怎么办”也有。',
     '林澄给窗口的末句：现有材料保持可阅，不把待查的独立性写成已证实。不要再换标题来躲开这一项。附记：本页只记录分歧与待办；双卷的技术结果仍须由原材料检验。'
    ],[
     'Xu: Once the place had been checked, I thought we could at least define the attachment’s scope. Lin agreed about the place, but treated the recordings separately. I said both reels were attached to this batch, so surely they supported one another. She copied my sentence onto a blank page headed “Awaiting comparison.”',
     'Lin: You have made “two files” and “two recordings” into one sentence. This item has not been signed off again since the earlier suspension. Do not use it to corroborate the personnel attachment yet. I want to know which material layer supports the comparison and how that layer connects to the carrier. A slip can show how someone arranged work. It is not a second person who heard the sound.',
     'Xu: I owed the meeting a one-page explanation. If the page stayed blank, they would ask what we had done all month. She said to write what we had done and what remained unfinished; that would make a page. I thought she did not understand the reading desk’s difficulties. Then I found she had written their four likely questions on the back, including what readers should do during the hold.',
     'Lin’s closing line to the desk: Keep existing material readable; do not call independence verified while it is pending. Do not change the title again to evade this item. Archival note: this page records disagreement and duties only. The original materials still govern the technical comparison.'
    ])
   },
   nSession: {
    day:3,anchor:6,title:b('修复班次记录：先留什么','Repair shift record: what to retain first'),author:b('林澄 · 当班草稿，许闻舟回批','Lin Cheng · shift draft, reply by Xu Wenzhou'),date:'2026-02-19',status:b('林澄三月未到岗之前的工作材料；非当前通信','Working material from before Lin’s absence in March; not current correspondence'),
    text:p([
     '林澄：今天先不换那张底纸。旧版边注不适用了，我写另附的勘误，不擦旧字。仪器上的编号、纸上的记法和修复时采用的约定，分别登记。读法整理好以后，后面留对应的依据页，改动记在哪一层，下一位问起时才能查。',
     '许闻舟：这样每交一页就带三页，库房说厚得装不下。我建议把说明缩成一张。林澄说可以缩，不可以把不同人的判断缩成一个人的签名。她让我先写一段，我写了“经修复确认”，她改成“本工作版本采用”，又把笔递给我，让我自己落款。',
     '午后三点，开水房没热水。她把保温杯推过来，我没喝，说还要去开会。她说不是让你喝，是别把杯子放在稿纸上。底下那一圈水印到晚上还没干。我把湿页摊到椅子上，她拿蓝夹子挂起一角，说别贴着灯烤，纸会翘。',
     '许闻舟末记：我后来把三页留了。会上的人只拿第一页，第二天有人问我为何采用这一版，我才知道后两页不是多余。附记：这些生活细节见于班次记录，编者不把它们算作独立的现场见证；修复方法以当时原件及勘误为准。'
    ],[
     'Lin: Keep the backing sheet today. The old margin is out of date; attach the correction and leave the old words. Register instrument labels, paper notation and adopted repair conventions separately. Keep corresponding source pages behind the working reading. Record the layer of each change so the next worker can check when asked.',
     'Xu: That means three supporting pages for every page we hand over. Storage says the folders are too thick. I suggested a one-sheet explanation. Lin agreed to shorten it, but not to compress different people’s judgments into one signature. I drafted “confirmed by restoration.” She changed it to “adopted in this working version,” handed back the pen and asked me to sign it myself.',
     'After three there was no hot water. She pushed her flask towards me. I said I had a meeting and would not drink. She said it was not an offer: I should stop putting the flask on drafts. The ring underneath was still wet that evening. I spread the page on a chair. She lifted a corner with the blue clip and said not to dry it against the lamp; it would curl.',
     'Xu’s final note: I kept all three pages. The meeting took only the first. Next day someone asked why I had adopted that version, and I understood the other two were not excess. Archival note: the domestic details belong to the shift account, not an independent eyewitness finding by the editor. Technical practice remains governed by the originals and their correction.'
    ])
   },
   nMargins: {
    day:3,anchor:9,title:b('一份能读的稿，两个署名栏','One readable draft, two attribution fields'),author:b('林澄、许闻舟 · 摘要修订页','Lin Cheng and Xu Wenzhou · summary revision page'),date:'2026-02-24',status:b('修复摘要的署名分歧；不是录音原文的新增部分','Disagreement over summary attribution; not additional content from the original recording'),
    text:p([
     '林澄：你把“林澄要求保留原始载体”改成“修复组要求保留原始载体”，请改回来。以后有人问为何延期，要能找到提出要求的人。我的理由若错了，这一行也能直接找到我和当时的依据。只写组名，就看不出是谁作的判断。',
     '许闻舟：我没有想拿掉你。我想让这成为组里的责任，不至于你一个人被问来问去。但我把自己那行“同意先用工作版”也改成了组里意见，这确实省掉了我个人的解释。你那行和我那行应该同样处理，不能只让你出现在需要担责的地方。',
     '林澄：你可以不同意我，可以把你的理由写在后面。别替我写“经讨论一致”。昨天没一致，今天也没。她在页尾添了一格“保留的分歧”，位置挤得很窄。许闻舟另打一张，没把窄格删掉，说还是让人看见原来为什么装不下。',
     '结项整理附记：两人的签名只对应各自的工作主张。此补充页不能证明旧录音的说话者身份。后来的工作摘要可以选实名或岗位标注，但须保留到这份原始署名页的引用，不得宣称岗位标注使公开原件匿名。'
    ],[
     'Lin: You changed “Lin Cheng requests retention of the original carriers” to “the repair group requests retention.” Please change it back. Someone asking why work was delayed should be able to find who requested it. If my reasons are wrong, that line should lead directly to me and my grounds. A group name does not identify who made the judgment.',
     'Xu: I was not trying to remove you. I wanted it to become a group responsibility so you would not face every question alone. But I also changed my own “agree to temporary use of the working version” into a group view. That saved me a personal explanation. Your line and mine must be handled the same way. You cannot appear only where someone needs to bear a cost.',
     'Lin: You can disagree and put your reasons after mine. Do not write “unanimously agreed” for us. We were not unanimous yesterday and are not today. She squeezed a “disagreement retained” field into the footer. Xu printed another page but kept the cramped field, saying people should see why the first layout had not been enough.',
     'Closing inventory note: each signature belongs only to that person’s working position. This supplementary page cannot identify speakers on a historical recording. A later working summary may use names or roles, but must cite this signed source. Role attribution does not anonymize originals that remain public.'
    ])
   },
   nRefusal: {
    day:4,anchor:10,title:b('退回的复核申请：缺哪一项','Returned review request: which item is missing'),author:b('林澄申请；经办岗位回批，个人未署名','Request by Lin Cheng; reply from the handling office, individual unsigned'),date:'2026-02-27',status:b('三月以前的申请及退回件；未署名回复不等于没有经办程序','Request and return from before March; unsigned reply does not establish absence of a handling process'),
    text:p([
     '申请：请分别复核材料形成时间、加工时间和开放时间。现在的摘要把它们合成一个日期。我申请的不是把整批材料撤下，而是先停止用这一个日期替全部来源作担保。附件中的几个判断需要看到各自的加工记录，不能由同一份摘要互相证明。',
     '回批：现有材料不足以启动专项复核，请补齐原始材料及对应登记后再报。已开放卷宗暂按现状维护。回批在“经办意见”栏，个人署名栏空白。页上没有说明究竟哪份附件不足，也没有给出补交后的受理日期。',
     '林澄未发出的补充：我要查的就是缺失材料为何被写成齐备。若必须先交齐才许查，缺失本身永远不能成为问题。我可以把申请缩小，请给一个具体缺项。不要替我把“要求复核”改成“待补后自行撤回”。我没有撤回。',
     '许闻舟次日边注：我建议过她先改成一般咨询，比较容易走。她说改标题可以，不要改事实。我的建议也留在这一页。我没替她找到原件；替她把语气改软，并不算完成申请。此件无后续受理凭证。'
    ],[
     'Request: Review the dates of formation, processing and release separately. The present summary combines them into one date. I am not asking for the entire batch to be withdrawn, only that this date stop guaranteeing every source. The attachment’s judgments need their own processing records; they cannot corroborate one another through a single summary.',
     'Reply: Insufficient material to initiate a special review. Please supply original materials with the corresponding registrations and resubmit. Open files will be maintained as they stand. The reply is in the handling-opinion field; the individual signature is blank. It does not identify the deficient attachment or state when a completed submission would be accepted.',
     'Lin’s unsent supplement: I am trying to find out why missing material is described as complete. If it must all be supplied before inquiry is allowed, the absence can never become a question. I can narrow the request. Please name the missing item. Do not change “review requested” to “withdrawn pending supplementation.” I have not withdrawn it.',
     'Xu’s margin next day: I suggested reframing it as a general enquiry, which might pass more easily. She said the title could change, not the facts. Keep my suggestion here too. I did not locate the originals for her. Softening her wording is not completing the request. No subsequent acceptance receipt survives with this file.'
    ])
   },
   nCustody: {
    day:4,anchor:12,title:b('数字保管附记：通知不是物品','Digital custody note: a notice is not the item'),author:b('综合组数字材料整理员 · 未署名','General affairs digital-materials compiler · unsigned'),date:'2026-09-29',status:b('结项时对取件记录的回顾；不是实体纸张上的信，也不是现场见证','Closing-period review of pickup records; not a letter on the physical sheet or an eyewitness account'),
    text:p([
     '整理取件材料时，请不要把这一页打印后叫作“原件”。这一页写的是数字档案如何登记一份取件通知。通知声称有一张纸，纸只印二维码；本附记没有见到纸，也不补写纸上没有的文字。谁完成过现场交接、何时完成，此处没有独立签收单。',
     '上一版清单把“取件通知已存”勾在“物品已交”下。我把勾移到“通知副本已交”，原来的勾另存。移这一格不能证明物品仍在，不能证明谁曾到过，也不能代替实际核验。若有后续核验，只在它自己的范围内登记，不把一个客户端状态扩写成现场经过。',
     '林澄早期工作边注的转录，原页标为2026年2月：只要还没见到材料，就不要替材料描述手感、折痕和纸背。许闻舟整理时在旁边写：这句话适用于我们，也适用于后来的整理员。两条都是工作要求，不是物品保管证明。',
     '尚欠事项：核对通知描述了什么，实际核验又确认了什么，保存数字出处，另列没有签收证明的部分。“未数字化”不能自动算作“独立可靠”；这一步仍要你实际去核，数字工作副本代做不了。'
    ],[
     'Do not print this page and call it “the original.” It records how the digital archive registers a pickup notice. The notice describes a sheet bearing only a QR code. This note has not seen the sheet and adds no writing to it. No independent signed receipt here establishes who collected it or when.',
     'The preceding checklist ticked “pickup notice stored” under “item delivered.” I moved the tick to “notice copy delivered” and retained the earlier mark separately. Moving a tick does not prove the item remains, that anyone visited, or that physical verification happened. Any later verification must be recorded within its own scope, not expanded from a client status into an account of a visit.',
     'Transcription of an early margin by Lin, on a page marked February 2026: Until you have seen the material, do not describe its texture, folds or reverse. Xu added during compilation: This applies to us and to later compilers. Both are working requirements, not proof of physical custody.',
     'Outstanding duty: compare what the notice describes with what the actual verification establishes; preserve the digital source; list the lack of a signed receipt separately. “Not digitized” does not automatically mean “independently reliable.” It means the digital working copy cannot do this part for you.'
    ])
   },
   nVersions: {
    day:5,anchor:14,title:b('许闻舟留存的两版说明','Two explanations retained by Xu Wenzhou'),author:b('许闻舟 · 对本人旧稿的修订','Xu Wenzhou · revision of his own earlier draft'),date:'2026-09-19',status:b('离职前留存的版本说明；不替来源日志作技术结论','Version note retained before resignation; not a substitute for a technical provenance finding'),
    text:p([
     '旧稿的一句：“材料已由多项比对支持，可以作为结项说明。”我当时写这句，是想让窗口有个简明答复。我现在收回“可以作为结项说明”。请别把整份旧稿删掉，删了以后，看的人会以为我从来没说过那句话。',
     '林澄二月给我的回批还在。她问，每一项比对究竟接到哪个原件上。我当时回复正在补，后来把“正在补”缩成了“见附件”。附件就是那几张工作页，并没有多出原件。我当时已经明白她的意思，仍这样写了。这一项未完成，记在我名下。',
     '她也改过边注，有些假设还待查。整理她的意见时，请把修改和原先的依据一起留着。我的旧稿、她的异议和我们各自后来的改动，都得能查回去。下一位才好判断哪一项仍站得住，不必只信其中一人的最后版。',
     '本次修订只撤回我曾经给出的使用建议。事实判断还要跟对应的来源记录核对。不同清单的件数暂不合并；它们的日期、范围和材料单位不一样，不先叫任何一份“造假”。蓝夹子最后夹在旧稿上，新稿另列版本。'
    ],[
     'A sentence from my earlier draft: “Several comparisons support the material; it may be used in the closing statement.” I wanted a simple answer for the reading desk. I now withdraw “may be used in the closing statement.” Do not delete the entire old draft. Otherwise a reader may think I never wrote it.',
     'Lin’s February reply remains. She asked which original each comparison reached. I answered that I was supplying them, then shortened “being supplied” to “see attachments.” The attachments were the same working sheets; no originals had appeared. I understood her question at the time and wrote it that way anyway. Register this unfinished item under my name.',
     'She revised margins too and had hypotheses pending. Keep her changes with their earlier grounds. My draft, her objections and our later revisions must remain checkable so the next worker can judge which position still holds, without trusting only one person’s latest version.',
     'This revision withdraws my recommendation for use only. Findings still require the corresponding source records. Do not merge counts from differing inventories yet: their dates, scopes and units differ. Do not first call one fraudulent. The blue clip ended up on the old draft; the new draft received its own version entry.'
    ])
   },
   nDeparture: {
    day:5,anchor:17,title:b('离职交接里的待办页','Outstanding-work page in the resignation handover'),author:b('许闻舟 · 离职前起草，离职后留存边注','Xu Wenzhou · drafted before resignation, retained annotation after leaving'),date:'2026-09-21（草稿始于2026-09-19）',status:b('关闭前已恢复的离职材料；不是离职后的实时回复','Departure material recovered before closure; not a live reply after resignation'),
    text:p([
     '我九月二十日办离职，手续和研究结论不是一张表。人事那一张我签了，材料那一张没有写“无未尽事宜”。请不要因为系统不再给我账号，就把没做完的工作也清掉。我已经离开岗位，不等于我曾作的批注变成没有作者。',
     '三月以后，我没有拿到能说明林澄去向的材料。岗位调整说明记录未到岗和联系未果，没有记录她后来在哪里。有人问我，既然结项了，这一行是不是也可以关。我说项目那一栏关了，人那一栏不能跟着打同一个勾。',
     '交接员让我把“待查”都排在后面，怕前面看着不整齐。我照做了，另在首页写“后有未尽事项”。她看一遍说，那等于没排。我说是，要让翻第一页的人也知道。她没再删，把椅子挪开，给我腾了一块放两版纸的地方。',
     '九月二十一日留存边注：林澄的异议留下，我没有资格替她删，也没办法替她答复。交给下一位时，请把前后两版都带上。她提出的各项问题和我欠的核对仍在待办页，不能用我的离职手续替它们结项。'
    ],[
     'I completed my resignation on 20 September. Personnel procedure and research conclusions are not the same form. I signed the personnel sheet. I did not write “no outstanding matters” on the materials sheet. Losing my account must not clear unfinished work. Leaving a role does not make my annotations authorless.',
     'Since March I have received nothing that establishes where Lin Cheng is. The reassignment statement records nonattendance and unsuccessful contact; it does not record her later whereabouts. Someone asked if that line could close now the project was closing. I said closing the project field does not put the same tick beside the person.',
     'The handover worker asked me to put all the pending items at the back so the front looked orderly. I did, and put “outstanding matters follow” on the first page. She said that defeated the arrangement. Yes, I said: someone reading the first page still needs to know. She left it and moved the chair to make room for both versions.',
     'Retained annotation, 21 September: Keep Lin’s objections. I have no authority to delete them and cannot answer for her. Pass both versions to the next worker. Her questions and my unfinished checks remain on the pending page; my resignation procedure cannot close them.'
    ])
   },
   nAudit: {
    day:6,anchor:18,title:b('结项复核的范围栏','Scope field for the closing review'),author:b('综合组复核整理员 · 未署名','General affairs review compiler · unsigned'),date:'2026-10-08',status:b('结项后的范围说明；不提前代开封存原件','Post-closing scope note; does not open or replace the sealed original'),
    text:p([
     '这页放在最终审计前面，不能代替最终审计。请把三件事分开：材料的技术结论、工作处理是否妥当、有关人员的去向。技术结论即使完成，也不自动填满后两栏。若签结项说明，请写清签的是哪一栏。',
     '许闻舟留存的修订说明可以证明他收回了自己的使用建议，不能单独证明每条旧材料怎样形成。林澄提出的申请可以证明她提出过申请，不能单独证明申请中每一个怀疑。综合组的移交清点只计收到的电子材料，不替从未入库的载体开接收证明。',
     '清单里有几处空的署名栏。保留空栏，也保留已有的经办文字。空白可能有很多原因，我们没有材料指定哪一个。不得为了让结项表完整而填一个人，也不得因为填不出人就填“系统自行决定”。',
     '后续责任写成可办的事：由材料保管岗位核对形成和移交记录，由复核岗位处理异议，由有权限的人事核查岗位另行核查联系记录。这里的工作副本不向任何岗位发送材料，不含联系人或可用的投诉渠道；下一位须在本站之外依法确认接收安排。'
    ],[
     'Place this page before the final audit, not instead of it. Separate the technical findings, the adequacy of handling, and the whereabouts of staff. Completing the first does not fill the other two. A closing signature must state which field it covers.',
     'Xu’s retained revision can establish that he withdrew his recommendation. Alone it cannot establish how every old item formed. Lin’s request establishes that she requested review, not that each suspicion in it was true. The general affairs transfer count covers electronic material received. It cannot issue a receipt for a carrier never accessioned.',
     'Several signature fields remain blank. Keep the blanks and the handling text that does exist. Many causes are possible; our material specifies none. Do not insert a person to complete the form, or “the system decided autonomously” because no person can be named.',
     'Make follow-up duties actionable: custody staff check formation and transfers; review staff address the objections; authorized personnel staff separately examine contact records. This working copy sends nothing to any office. It contains no contact or functioning complaints channel. A later worker must establish lawful receiving arrangements outside this site.'
    ])
   },
   nLastNote: {
    day:6,anchor:19,title:b('最后交接页的末栏','The last field on the final handover page'),author:b('综合组交接员；附林澄早期工作便签转录','General affairs handover worker; transcription of an earlier working slip by Lin'),date:'2026-10-11（附记原页标为2026-02-26）',status:b('当前可见的是十月整理页；所附林澄文字属于三月以前，不证明她后来仍在岗','Visible page compiled in October; Lin’s attached text predates March and does not establish later attendance'),
    text:p([
     '大家交最后一批材料时，我一直在数袋子。数完才看见，有一袋装的全是同一份说明的旧版。我先想，能不能只留最后一版。许闻舟在清单里特意写了不删，我照着收。后来翻到林澄那张窄窄的分歧栏，才明白旧版为什么也得有个位置。',
     '林澄早期便签转录：如果你们先交工作版，就在首页说这版不能替什么。不要等别人问出错了，再拿旧件说明我们其实知道。我愿意在自己的判断下面签名，不替别人未做的核对签名。不同意我的，可以另写；别把我那句删到没有人知道有过不同意。',
     '十月整理员续记：便签原页标为二月，这里的文字是转录。原岗位说明记录三月起未到岗；整理日期不能作为她后来的活动日期，也不能据便签确定她最后一天。用到更肯定的称谓时，须另核其依据。',
     '我把空的签发格留在首页，把“尚欠”放在能翻到的位置。手套已经晾干，放回左边抽屉。钥匙我没拿走。旧版都按清单留着，下一位不必先找哪页被抽走了；待查的事情仍在原栏。'
    ],[
     'During the last delivery I kept counting bags. Afterwards I noticed one bag held earlier versions of the same explanation. My first thought was to keep only the last. Xu had explicitly written not to delete them, so I received them as listed. Then I found Lin’s cramped disagreement field and understood why an old version needed a place too.',
     'Transcription of Lin’s earlier slip: If you hand over a working version first, say on the front what it cannot replace. Do not wait for someone to find an error before producing the old materials to show that we knew. I will sign under my own judgment, not under checks other people have not made. Disagree on another sheet if necessary. Do not delete my sentence until no one knows there was disagreement.',
     'October compiler’s continuation: The slip is marked February; this page transcribes it. The personnel statement records nonattendance from March. Compilation does not date her later activity, and this slip cannot establish her last day. Any stronger description needs its own grounds checked.',
     'I left the issuing field blank on the front and put “still owed” where it can be found. The gloves are dry and back in the left drawer. I did not take the key. All earlier versions remain on the checklist, so the next worker need not begin by finding a missing page. Pending matters stay in their fields.'
    ])
   }
  },
  scenes: [
   {
    id:'c1-assignment',day:1,anchor:0,phase:'entry',title:b('先接收，不先签发','Receive it before issuing it'),purpose:b('引用交接材料，登记你先承担哪一项检查；这不是对尚未检查的卷宗作认证。','Cite the handover material and record the check you take on first; do not certify an unexamined file.'),
    text:p([
     '综合组原先估计，这份交接说明一个下午就能整理完。文件夹已经放齐，清单也打好了。你接手这张工作台，要把首批登记和修复材料编成下一班能用的说明。原有记录与后期整理件须分开放；缺少签发依据的地方，先留在待查栏。',
     '清单上的“附件完整”没有打勾。交接员在背页解释，文件都在，但一份没有签发人的工作版本正被当成能用的版本。文件接收齐了，使用依据却未必齐。若你只凭封面写“材料齐备”，下一位便很难看出这一句究竟说的是文件数量，还是内容已经核过。',
     '桌边留出的空地方刚好能并排放两页，便于把记录和说明一起看。你将读到的往来都是关闭前恢复的材料，日期仍按原页登记。今天写下的回应只存为本地未发送草稿，与当年的会议记录分开，也不改变当时作过的决定。',
     '先在工作单上登记未完成的签发及待查材料，附上交接出处。材料清单要区别原记录、工作副本和补充说明；每一类分别记接收状况与核查状况。交接员留下的空栏暂时不补签，等实际依据能说明它覆盖什么，再处理使用资格。',
     '接下来检查首批登记及它的批次材料。那份工作版本借用了登记的哪些内容，登记本身又覆盖哪些对象，需要先弄清。之后再回到这张清单，已核的一项有地方可写，尚未核的一项也不会被同一个勾盖过去。'
    ],[
     'General affairs estimated one afternoon for this handover explanation. The folders were assembled and the checklist printed. You are taking over the desk and preparing the first registry and repair material for the next shift. Keep existing records separate from later compilations. Where issuing grounds are absent, leave a pending entry.',
     '“Attachments complete” is unticked. On the reverse the worker explains that all files are here, but an unsigned working version is already being treated as usable. Receipt is complete; grounds for use may not be. If you write “materials complete” from the cover alone, the next worker cannot tell whether you counted files or checked their contents.',
     'The space beside the desk fits two pages, enough to compare a record with its explanation. Every exchange was recovered before closure and retains the date on its page. Responses written today remain local unsent drafts, separate from the old meeting record and its decisions.',
     'Record the unfinished issuing work and material pending examination, with a handover citation. Distinguish existing records, working copies and supplementary explanations in the inventory. Record receipt separately from checking for each. Leave the open signature field until actual grounds establish what it can cover.',
     'Examine the first registry and batch material next. Establish what the working version borrowed from the registry and which objects that registry covers. Then return to the checklist: a completed check will have its own entry, without the same tick covering material still unexamined.'
    ]),sources:['nHandover','aRegistry'],fixedSources:['nHandover'],options:[
     {id:'record',label:b('附交接出处，登记未尽签发与待查材料','Attach handover sources; record unsigned work and material pending check'),note:b('接收材料不认证内容；原记录与工作副本须分别登记。','Receiving material does not certify content; register existing records separately from working copies.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c1-reconcile',day:1,anchor:1,phase:'after',title:b('一张干净的封面还不够','A clean cover is not enough'),purpose:b('把已检查的登记或批次材料附到勘误问题，记录目前能支持的范围。','Attach the examined registry or batch material to the correction question and record what it currently supports.'),
    text:p([
     '第一份登记已经检查完。工作清单上可以写“完成一次登记核对”，整份修复说明却还不能一起标为完成。你刚才依据材料辨认了记录，后来附上的各项说明仍须另核。交接表却只留了一个“已核”格，好像一格能盛下两件事。',
     '未签发勘误的回批给这格列了具体条件。许闻舟想给窗口一个能先用的版本，林澄要求写明暂用的人、依据和重看日期。两人都考虑过窗口的需要，也同意旧件留存；分歧在于暂用说明怎样把未完成的部分一同交给下一班。',
     '蓝夹子标过待查，许闻舟又添纸条，清单却没有写明状态。夹子和纸条都可能掉，下一位需要可回查的登记。保留旧件所在位置，另记新版采用范围及依据；外观整齐或留有加工痕迹，本身都不足以判定哪版更接近原始记录。',
     '在已查栏登记本次核对，标明它只覆盖登记这一项，勘误仍未签发。另留一栏写使用资格待处理。这样，读者能回到许闻舟提出的具体工作版，查它借用了哪些材料；以后采用或暂存时，也有这次有限核对可供引用。',
     '给这段记录带上登记、批次或往来出处。下一份附件涉及机构关系，能约束登记应放在哪里，却不能补出签发人。把它查过以后，再决定这份工作说明是否适合暂用。林澄留下的两页和许闻舟空着的签发格，都随本轮记录保留。'
    ],[
     'The first registry has been examined. You may record that check as completed, but not stamp the whole restoration explanation with it. Identifying a record from its materials does not certify every later statement attached to it. The handover form has one “checked” box, as though it can hold both acts.',
     'The replies to the unsigned correction give this field specific conditions. Xu wanted a version the desk could use; Lin wanted the temporary user, grounds and review date stated. Both considered the desk’s needs and agreed to keep earlier material. They differed on how a provisional explanation would pass its unfinished work to the next shift.',
     'Lin’s blue clip marked pending work and Xu added a slip, but the checklist recorded no status. Both can fall off; the next worker needs a checkable entry. Retain the old material’s location and register the new version’s adoption scope and grounds. Neat appearance or processing marks alone cannot establish which is closer to the original.',
     'Record this check in the examined field, restricted to the registry, and mark the correction unissued. Keep its authority for use in a separate pending field. Readers can then return to the particular version Xu proposed and examine what it borrowed. A later decision to adopt or hold it will have this bounded check to cite.',
     'Attach a registry, batch or exchange source. The institutional attachment comes next. It constrains where the registry belongs but supplies no issuing signature. Check it before deciding whether the explanation is suitable for provisional use. Retain Lin’s paired pages and Xu’s empty signature field with this round’s record.'
    ]),sources:['nHandover','nCorrection','aRegistry','aBatchA','aBatchB'],fixedSources:['aRegistry','nCorrection'],options:[
     {id:'record',label:b('附登记核对依据，标明勘误仍未签发','Attach registry-check grounds; mark the correction as unissued'),note:b('本轮完成登记核对，勘误的使用资格另待处理。','This round completes the registry check; the correction’s authority for use remains separate.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c1-disposition',day:1,anchor:2,phase:'after',title:b('把“暂时”写在首页','Put “temporary” on the front'),purpose:b('引用勘误与已核材料，决定本地工作说明如何处理这份未签发修正。','Cite the correction and checked materials; decide how the local working explanation handles this unsigned revision.'),
    text:p([
     '两份附件让材料范围更清楚了，仍没能提供有资格签发勘误的人。许闻舟在回批里提出的办法，现在由你决定怎么处理：可以先写一份限定范围的工作说明，也可以只保留争议稿。你不向窗口发送任何文件；这里的“使用”只指本地卷宗采用什么表述。',
     '暂用的具体句子见勘误稿：把人员附件暂列为关联索引供查阅，同时明写没有取得人员原始登记、不作认证。采用这个索引关系，不等于认证身份。首页要带出处和暂行标记；以后来源改变，即使条目仍能查阅，也须记录它的关联分类为什么不再采用，指回今天的决定。',
     '如果暂存，你不替这一版背书，材料仍然可阅。但“暂存”不能成为把它放进抽屉不再管的办法。你要保留争议点，说明哪一项仍欠复核。之后的新材料出现时，仍须回到这份稿，不能把没有签发当成没有人作过判断。',
     '许闻舟希望下一班少抄一次错误，林澄担心“先用”在转存里变成“已定”。你按自己的工作范围作决定，旧件与原始引用两条路都保留。暂用要能指到今天的采用；暂存也要有具体复核任务，之后出现新依据时，两种决定分别留下自己的修订记录。',
     '人员附件是接下来要看的一项。第一章没有证实那位历史人员，只揭示一份说明正在借登记材料获得比它应有的更宽的信用。第二章要查姓名条目接到什么材料上，而不是替这个名字先写一段人生。把你今日的决定和出处留下，往后才有一份可以认真修订的旧版。'
    ],[
     'The attachments have clarified the material’s scope. They have not supplied someone authorized to issue the correction. Xu’s proposal now reaches your working copy: make a qualified temporary explanation, or retain a disputed draft. No file is sent to the desk. “Use” here means only the wording adopted in your local dossier.',
     'The correction gives the specific wording: provisionally list the personnel attachment as a related index for consultation, while stating that original personnel registration is absent and no identity is authenticated. Adopting an indexing relationship is not authenticating a person. Put sources and provisional status on the front. If provenance changes, the entry may remain readable, but record why its related classification is no longer adopted, pointing back to today.',
     'If you hold it, you do not endorse it, and it remains readable. But holding cannot mean forgetting it in a drawer. Preserve the disputed issue and the check still owed. Return when new material arrives. An unissued version does not mean no one ever made a judgment.',
     'Xu wanted to spare the next shift another bad copy; Lin feared “use for now” becoming “settled” in transfer. Make the disposition within your own working scope. Both paths retain earlier material and original citations. Provisional use must point back to today’s adoption; holding needs a specific review task. When new grounds appear, each decision receives its corresponding revision record.',
     'The personnel attachment is next. Chapter one has not established the historical person. It has shown an explanation gaining broader credit than its registry basis warrants. Chapter two asks what the name entry connects to, not what life to write for it. Retain today’s choice with sources so there is a real earlier version to revise.'
    ]),sources:['nCorrection','nHandover','aRegistry','aBatchA','aBatchB','aLetterhead'],fixedSources:['nCorrection','aLetterhead'],options:[
     {id:'held',label:b('保留为争议稿，不作使用背书','Hold as a disputed draft, without endorsement'),note:b('保存旧稿及出处；后续材料出现后仍负有重新审查的义务。','Retain the draft and sources; later material creates a duty to review it again.')},
     {id:'provisional',label:b('在本地说明中暂用，首页标明待核','Use provisionally in the local explanation, marked pending on the front'),note:b('不是对外签发；若依据改变，须留下明确撤回记录，而不悄悄换稿。','This is not external issuance. Changed grounds require an explicit retained retraction, not silent replacement.')}
    ],action:b('保存勘误决定','Save correction decision')
   },
   {
    id:'c2-worksheet',day:2,anchor:2,phase:'entry',title:b('先给名字一个问号','Give the name a question first'),purpose:b('引用人员核对纸，界定姓名条目目前是一项什么性质的主张。','Cite the personnel checking sheet and bound the kind of claim the name entry currently makes.'),
    text:p([
     '第二日先打开林澄的人员核对纸。她把姓名附件单放，标题写“人员附件核对”。纸上先记附件声称了什么，再查它是否有原始登记支持。昨天暂列关联索引或保留争议稿的决定，只安排了这份材料怎样使用；这页开始检查其中的人员主张。',
     '窗口曾把“找到一名当年的记录员”抄进答复，林澄回去请他们改字。她还没有查到原始人员登记，不能让答复先作认证。对方担心改后像是什么都没做，她仍要求保留已做的工作，只把它们写回各自实际完成的范围。',
     '许闻舟的边注没有被删。他曾觉得，多份格式相同的抄件足够做索引入口。他考虑的是眼前的查阅和归档：读者得有入口可找，整理员得有题名可归。这个办法也只能管到这里。林澄问入口之后有什么，两人就不得不把一个方便的标题拆成几个可查的问题。',
     '把条目登记为待溯源的人员主张，注明未完成认证，附上这份工作纸。索引提供查阅入口，认证需要能追到原始登记的材料。当前分类保留这个缺口，既不先判此人存在，也不因未查到就判不存在；林澄自己的岗位记录另列。',
     '接下来检查附件配套的文字材料，再核其中声称的机构与地方。核对纸已有这两项待办，按实际结果逐项登记。地点若能核实，就保留地点成果；人员一栏仍要等它自己的来源，不能跟着共用一个完成标记。'
    ],[
     'Open Lin’s personnel worksheet at the start of day two. She separated the name attachment under “Personnel attachment check.” The sheet first records its claim, then asks whether original registration supports it. Yesterday’s related-index or disputed-draft decision arranged how to use the material. This page begins examination of its personnel claim.',
     'The reading desk had copied “found a registrar from that period” into a reply. Lin asked them to change it: she had found no original personnel registration and the reply could not authenticate someone in advance. They worried the change would sound as though no work had been done. She asked that the completed work remain, described within its actual scope.',
     'Xu’s margin remains. He once thought matching copies sufficient for an index entrance. His concern was practical and bounded: readers need something to find; compilers need something to file. Lin asked what lay beyond the entrance, forcing a convenient title into separate questions.',
     'Register the entry as a personnel claim pending provenance, mark it unauthenticated and attach the worksheet. An index supplies an entrance for consultation; authentication needs material traceable to original registration. Preserve that gap. Neither presume existence nor infer nonexistence from material not found. Keep Lin’s own personnel record separate.',
     'Examine the associated text next, then its claimed institution and place. The worksheet already lists these duties. Register each actual result. If the place is verified, retain that finding; the personnel field still needs its own source rather than sharing the completion mark.'
    ]),sources:['nName','nCorrection','aLetterhead'],fixedSources:['nName'],options:[
     {id:'record',label:b('附人员工作纸，标注条目未认证','Attach the personnel worksheet; mark the entry unauthenticated'),note:b('条目作为待溯源主张登记，不等同于原始人员记录。','Register the entry as a claim pending provenance, not an original personnel record.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c2-names',day:2,anchor:4,phase:'after',title:b('楼能找到，人仍须另查','A place can be found; a person needs a separate check'),purpose:b('引用已核地点材料与工作纸，分开已成的地点核对和仍未成的人员认证。','Cite checked place material and the worksheet; separate the place finding from the pending personnel authentication.'),
    text:p([
     '地名查证核实了附件声称的地点，让它有了现实边界。随便写一座旧楼并不够，你已经做了实际核对。但地点这一项完成以后，工作表里“人物”一格依然不能跟着打勾。许多人都可能写过同一个地址；地址正确，先能确认的也只是地址这一项。',
     '林澄在未发送的旧邮件里把楼和人放进同一个问句：人员附件是否真与这份登记有关，还是我们让一个条目像有人负责过的记录？邮件留下的是待查问题，要回到人员主张的出处核对。地点一栏完成后，这个问句仍在工作纸上。',
     '许闻舟希望把地点核对列进月报。月报需要可交付的事情，这一项确实能交。林澄没有让他划掉，只让他把录音那格留着。她不愿意把已有的工作说成毫无价值，也不愿意让一个成立的地点替没成立的独立性担保。',
     '在本地说明中列出已完成的地点核对，人员认证另列待核。附上建筑材料或人员工作纸，让下一位能查到地点一栏的依据，也能看见另一栏为何仍空着。月报可以采用这项完成记录，却不能把它移到人物一栏再盖一次“证实”。',
     '双卷比对页随后接过录音这一项。要查对附件作支持的录音怎样被整理为两份，各份是否增加了独立支持。纸条先说明安排工作的关系，实际比对再检查录音材料。地点结果仍留在月报，不因另有未尽事项而被划掉。'
    ],[
     'Checking the place has supplied a real boundary for the attachment. It cannot simply claim any old building; you have made an actual check. But completing the address does not tick the person field. Many people can write the same correct address. First it constrains the address alone.',
     'An old unsent email asks: does the personnel attachment genuinely relate to the registry, or have we made an entry look like a record of someone’s responsibility? Lin left a question to examine against the personnel claim’s sources. It remains on the worksheet after the place field is completed.',
     'Xu wanted the place finding in the monthly report. The report needed deliverable work, and this item was deliverable. Lin did not remove it; she left the recording field open. She would neither erase work already done nor make a verified place guarantee unverified independence.',
     'List the completed place check in the local explanation, with personnel authentication separately pending. Attach the building material or worksheet so the next worker can trace the place finding and see why the other field remains blank. The monthly report can use this completion record, but cannot move it into the person field as another verification.',
     'The reel page takes up the recording item next. Examine how the supporting recordings became two files and whether each adds independent support. The slip first establishes the arrangement of work; actual comparison then checks the recording material. Retain the place result in the report despite other unfinished duties.'
    ]),sources:['nName','nReels','aWorkbook','aBuilding'],fixedSources:['aBuilding','nName'],options:[
     {id:'record',label:b('附地点核对，人员认证另列待核','Attach the place check; keep personnel authentication pending'),note:b('地点关系的完成只覆盖地点，不转移到人物条目。','The completed place relationship covers the place only, not the personnel entry.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c2-recordings',day:2,anchor:6,phase:'after',title:b('比对完成，不等于见证增加','Comparison finished is not another witness found'),purpose:b('引用双卷材料及工作记录，标明比对结果能支持的层级与尚欠的来源责任。','Cite reel material and the working record; identify the result’s evidentiary layer and the provenance duty still owed.'),
    text:p([
     '这次技术工作查清了双卷之间的关系。你可以把结果放进工作说明，但不能把“完成比对”写成“增加一名见证者”。你比对的是现有材料，查清它们如何相连，也没有因此多出一次独立的历史见证。',
     '许闻舟会前那张空页终于有了内容。他想交一页说明，林澄让他把做过的和没做完的都写上。现在，完成到哪一步已经能具体写出来：双卷的技术关系查过了，背后的修复流程和载体来源还要另列。',
     '机构、地点、录音——几个“已核”列在一起，月报就很好看。可这些完成项不会自动认证一个人。材料若都经过同一套整理，彼此一致也可能只是沿用了同一份说明。全部来源暂时还不必作最终结论，独立性却必须实际检查，不能拿完成项的数量抵过去。',
     '附上双卷比对材料，将数字比对记为本轮完成项，载体来源另列待查。说明须写明比对发生在哪一层材料之间。以后有人引用这项结果，就能知道它检查了什么，而不会把一条连接误读成两份材料各自已有独立来历。',
     '下一章检验比对所依赖的修复链。林澄的班次记录要求每个采用判断留下依据，许闻舟已经为这些说明另留页。先检查维修记录怎样形成工作读法，再看信号表达、有限校验和声音各承担的部分，把本次结果接到对应的工作页上。'
    ],[
     'The technical work has answered a relationship between the reels. Put that result into the explanation, but do not translate “comparison completed” into “another witness added.” Comparison happens between existing materials. Establishing their connection establishes a connection, not another independent historical experience.',
     'Xu’s blank meeting page now has content. Lin asked him to record work done and work unfinished. You can now specify where completion stops: the technical relationship has been checked; the repair process and carrier provenance still need separate entries.',
     'The monthly report’s attraction becomes visible. Institution, place and recordings make an impressive set of checks. They do not automatically authenticate a person. If material passes through one process, agreement can inherit one explanation. You need no final source graph yet, but must stop using the number of completed checks in place of independence.',
     'Attach the reel comparison, record the digital comparison completed and leave carrier provenance separately pending. Specify which material layer was compared. A later citation can then show what this result examined, without mistaking one connection for two independently established origins.',
     'Next chapter examines the repair chain underlying this comparison. Lin’s shift account requires grounds for each adopted judgment; Xu retained separate supporting pages. Check how repair records produce a working reading, then examine the distinct roles of signal representation, bounded checking and audio. Attach each result to its corresponding working page.'
    ]),sources:['nReels','nName','aReelnote','aSamples'],fixedSources:['aSamples','nReels'],options:[
     {id:'record',label:b('附双卷比对，登记修复来源待核','Attach the reel comparison; record restoration provenance pending'),note:b('保留数字比对效力，载体来源仍须自己的检查。','Retain digital-comparison validity; carrier provenance still needs its own check.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c3-session',day:3,anchor:6,phase:'entry',title:b('当班的人做了什么','What the shift worker did'),purpose:b('引用修复班次记录，登记你将怎样保留本次工作版与原有记录之间的距离。','Cite the repair shift record; record how you will preserve the distance between a working version and existing records.'),
    text:p([
     '第三日检查双卷材料所依赖的重建记录。维修图描述接收装置，双轨材料记下整理后的信号表达，电路纸记录有限校验，原始声音则用来检验整理后的说明。每份材料都有自己的任务，不能互相代做。逐项查过，才能知道工作版从哪一步变得可读，哪些环节还缺载体支持。',
     '林澄二月的班次记录很不利落，一页读法后面带着几页说明，许闻舟担心装不进文件夹。她同意缩短，要求不同层的采用判断仍分别落款。许闻舟写“经修复确认”，她改成“本工作版本采用”，又把笔递回去。改后的主张归本次工作版，有了采用者自己的签名。',
     '记录里还有一圈杯底水印。按许闻舟的记述，他急着开会，把杯子压在稿纸上；林澄让他挪开，后来又夹起湿纸一角，免得贴灯烤卷。三页说明已经不好装，湿了还得另摊一夜。这些细节按班次文字留存，没有额外的现场见证。',
     '附上班次记录，登记每个工作版本的采用依据，并保留旧批注。原来的边注与后来勘误可能并存，分别记所属版本，不合成一句。旧边注也不能覆盖现行原件的要求。哪一层材料还没检查，就在旁边留待核项。',
     '先从维修图开始。此后的每项实际结果都要接回自己的依据页，让下一位能查到采用判断发生在哪个环节。许闻舟曾为装不下的说明另留页，你的工作单也按各项登记，不再只给整份修复一个总签名。'
    ],[
     'Day three examines the reconstruction records supporting the reels: a repair diagram describes the receiver; rails describe the signal’s representation; circuit paper records bounded checking; original audio constrains the reconstructed explanation. None performs another’s duty. Examine each to locate where readability is obtained and where carrier support is still absent.',
     'Lin’s February shift record is untidy, with several supporting pages after one reading. Xu worried about folder space. She agreed to shorten it while retaining separate signatures for judgments at different layers. He wrote “confirmed by restoration”; she changed it to “adopted in this working version” and handed back the pen. The revised claim belongs to this version and carries its adopter’s signature.',
     'The shift record also describes a flask ring. Xu writes that he was rushing to a meeting and had left his flask on a draft. Lin told him to move it, then lifted a corner of the wet page to prevent curling against the lamp. Three supporting pages were already awkward to file; now one needed a night spread out. Retain these details as the shift account, with no additional eyewitness claim.',
     'Attach the shift record and register grounds for each adopted working version, retaining old margins. Earlier notes and later corrections may coexist. Record their versions separately instead of merging their wording. An old margin cannot override the current original’s requirements. List unexamined material beside the relevant judgment.',
     'Begin with the repair diagram. Each subsequent result must return to its source page so the next worker can identify the stage of adoption. Xu kept extra pages when the explanation would not fit. Give each item its own working entry too, instead of one signature for the entire repair.'
    ]),sources:['nSession','nReels','aSamples'],fixedSources:['nSession'],options:[
     {id:'record',label:b('附班次记录，保留各版采用依据','Attach the shift record; retain grounds for each adopted version'),note:b('旧批注与本次工作版分开，记录尚未检查的材料层。','Separate old margins from the working version and record unexamined layers.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c3-attribution',day:3,anchor:9,phase:'after',title:b('分歧怎样署名','How to attribute the disagreement'),purpose:b('引用署名页与修复材料，决定新工作摘要用姓名还是岗位记录责任。','Cite the attribution page and repair material; choose names or roles for responsibility in the new working summary.'),
    text:p([
     '这一轮修复已经留下可核的结果，摘要还需记录各人的采用与保留主张。林澄在页尾挤出的窄格标着“保留的分歧”。本轮采用哪些成果可以另列，她与许闻舟当时的不同意见仍按署名归属，不让后来的摘要省掉。',
     '许闻舟把署名改成“修复组”，确实是想让大家一起担责，不让一个人独自面对追问。可他把自己同意先用工作版的那行也改成组里意见，自己该作的解释就一起淡了。林澄要求双方同样处理：延期要找她，赞成先用却只写集体，这样不行。所以她把笔交了回去。',
     '你的新摘要可以采用实名。读的人能直接知道林澄的保留要求和许闻舟的暂用主张各由谁提出；代价是摘要可能把注意力过多放在两个人，而不是完整的工序与机构责任上。所以实名也要引用记录，不把任何人写成唯一原因。',
     '你也可以按修复、协调与复核岗位标注责任，方便下一位找到该继续办事的岗位。但只读摘要，就不能直接知道谁当时说过什么。公开的署名原件照旧可阅，这种写法并不保护匿名。岗位摘要必须留下回查署名页的入口，也不能说双方达成了一致。',
     '这项选择只改变你新写的派生摘要，不改变录音的说话者身份，不改原有作者名。选一种写法，保存下来；记录会附上署名页与修复材料。后面与正式交接说明比较时，你就能看清这个摘要保住哪种责任、淡化哪种责任。还没跟载体核对的部分，不能由署名替它完成。'
    ],[
     'The repair has produced checkable results. The summary also needs each person’s position on adoption and retention. Lin’s cramped footer reads “disagreement retained.” List this round’s adopted results separately and keep her disagreement with Xu under their respective signatures, instead of omitting it in a later summary.',
     'Xu genuinely wanted group responsibility rather than leaving one person exposed. Yet he also made his own temporary-use agreement a group position, softening his personal duty to explain. Lin asked for equal treatment: one name must not bear the delay while the other agreement becomes collective. That is why she handed the pen back.',
     'Your new summary may use names. Readers can directly attribute Lin’s retention request and Xu’s provisional-use position. But names can focus attention too narrowly on two people rather than the process and institutional duties. Cite records and make neither person the sole cause.',
     'Or use roles, placing responsibility with repair, coordination and review functions. This helps the next worker see which role should act, but removes direct identification of who said what from the summary. It is not anonymity: signed originals remain public. Preserve the link back to the attribution page and never claim unanimity.',
     'The choice changes your derived summary only, not speaker identity or original author names. Choose and save one format; the entry includes the attribution page and repair material. A later comparison with official handover wording will reveal what responsibility it preserves and what it softens. A signature cannot complete the outstanding carrier check.'
    ]),sources:['nMargins','nSession','aDial','aRails','aParity'],fixedSources:['nMargins','aParity'],options:[
     {id:'named',label:b('实名摘要，分别标明两人的主张','Named summary, assigning each position separately'),note:b('保留直接归责，同时不把两人当作全部机构责任。','Preserve direct attribution without making two people the whole institutional responsibility.')},
     {id:'role',label:b('岗位摘要，保留署名原件回查','Role summary, with the signed source available for review'),note:b('突出应继续工作的岗位；不能宣称公开原件被匿名或当时一致。','Foreground follow-up roles; do not claim originals are anonymized or historical agreement was unanimous.')}
    ],action:b('保存署名方式','Save attribution')
   },
   {
    id:'c3-carriers',day:3,anchor:10,phase:'after',title:b('把载体欠账列出来','List the carrier work still owed'),purpose:b('引用载体协议及工作页，界定可读成果与尚欠的来源核查，不把技术成果抹掉。','Cite the carrier protocol and working page; separate readable results from provenance still owed without erasing the technical work.'),
    text:p([
     '声音核对把维修图、信号表达与电路校验所不能代答的一项检查补上：工作说明是否受它声称依据的声音约束。各项成果保留，但可读、通过有限校验和来源独立仍不是一件事。接下来要查进入旧材料的后期内容，追问加工怎样把本来分开的层合成一个年代标签。',
     '林澄要求听原件，好让修复后的说明还能受到修复前材料约束。许闻舟起初担心又多一项期限内做不完的工作。班次记录中，他仍把说明页留下；后来有人问为何采用这版，那几页提供了可回查的依据。',
     '归档协议说明材料放在哪一层、如何登记，没有保证每项都已齐备。它能列明应负的保管责任，实际交接还得有记录。工作说明很容易从“按规定应该在”写到“我们已经见到”。两者的差别要落在记录上，不能只是你自己心里明白。',
     '附上载体材料，把本轮成果和来源欠项分别列出。每项重建写明效力范围，缺少的移交记录仍列待核。下一位可以沿这些出处继续查，也能直接使用已经成立的有限成果；不必为辨认未尽事项，把整轮工作重新作废。',
     '下一章检查后来进入旧材料的内容与处理手续。工作说明中的内容是否由载体支持，年代与用途是否对应，需要落实到具体记录。林澄的退回复核申请保留了她要求区分形成、加工和开放时间的过程，接下来查这项申请得到过什么回应。'
    ],[
     'The audio check adds what the repair diagram, signal representation and circuit check could not answer: is the explanation constrained by the sound it claims to rely on? Retain each result, but readability, bounded reliability and independent provenance remain different. Next examine later content in older material: how did processing combine these layers under one period label?',
     'Lin requested the original so material before repair could still constrain the explanation after it. Xu worried about another task unfinished at the deadline. His shift record says he retained the supporting pages; when someone later asked why that version was adopted, those pages supplied grounds they could check.',
     'A protocol describes material layers and registration duties, not a guarantee that everything is present. It establishes an expected custody duty, not an actual transfer. “It should be there under the rules” must not become “we have seen it.” Stop that step in the record, not only in your thoughts.',
     'Attach carrier material and list this round’s results separately from provenance deficits. Specify each reconstruction’s scope and leave absent transfer records pending. The next worker can follow the citations while using bounded findings already established, without discarding the entire round to identify what remains unfinished.',
     'Next chapter examines later content in older material and its handling procedures. Determine whether the carrier supports the explanation and whether period and purpose correspond, using specific records. Lin’s returned request preserves her attempt to separate formation, processing and release dates. Examine what response that application received.'
    ]),sources:['nMargins','nSession','aAudio','aSamples'],fixedSources:['aAudio','nSession'],options:[
     {id:'record',label:b('附载体材料，列明成果与来源欠项','Attach carrier material; list results and provenance deficits'),note:b('重建成果留存；保管规定不能代替实际移交记录。','Retain reconstructed results; custody rules cannot replace actual transfer records.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c4-review',day:4,anchor:10,phase:'entry',title:b('退回，不等于撤回','Returned is not withdrawn'),purpose:b('引用退回申请，登记程序上仍未处理的具体问题，而不预判责任人或动机。','Cite the returned request; record the unaddressed procedural question without assigning a culprit or motive.'),
    text:p([
     '第四日打开退回的复核申请，查这项已提出的工作为什么没有留下完成记录。林澄要求把形成、加工和开放时间分开，停止以一个日期担保全部来源；已开放材料仍维持可阅。她把问题写到具体的加工记录上，等待经办岗位说明缺哪一项。',
     '回批让她补齐原始材料再报。若她要查的恰好是原始材料未齐却被写成已齐，补齐才能查的条件就使问题悬在原处。这可以说明她的申请没有得到足够具体的回应，不能说明经办岗位的每个人都出于同一种恶意。你没有那种材料。',
     '许闻舟试过劝她换成一般咨询。他知道哪种表格容易往下走，她怕连问题本身也换掉。他后来把这条建议留在页边，没有把它改写成自己始终坚定支持的回忆。这一行记着他实际做过的事：帮她改了语气，没替她找到要求的材料。',
     '引用退回件，登记缺项未具体列明、申请未撤回，并保留经办文字和空的个人署名栏。后续复核须逐项回应，需要补件时明确对象及继续审查的条件。本页没有后续受理凭证；把这个缺口写出，不从中推定经办人的动机。',
     '接下来审计旧材料的内容年代与用途，再查未完成数字化的卷宗留下了哪些手续。将申请指向的内容与处理记录接起来，后来的复核便能回答一项具体问题。许闻舟帮改语气的边注同时留存，不能算作申请已经处理的凭证。'
    ],[
     'Open the returned review request on day four and examine why the proposed work has no completion record. Lin requested separate formation, processing and release dates, and asked that one date stop guaranteeing every source. Open material would remain readable. Her question concerns specific processing records; she awaited an account of which item was missing.',
     'The reply required originals before resubmission. If her question was why absent originals had been called complete, this condition left it suspended. That supports an insufficiently specific response, not a common malicious motive for everyone in the handling office. You do not have that material.',
     'Xu suggested a general enquiry. He knew which form moved more easily; Lin worried about losing the question. He retained his suggestion rather than rewriting his past as unwavering support. It records an individual act: he helped soften wording, but did not supply the requested material.',
     'Cite the returned file and record that deficits were unspecified and the request unwithdrawn. Retain the handling text and blank individual-signature field. Further review must answer each item, specifying missing material and conditions for continuation. This page has no later acceptance receipt. State the gap without inferring a handler’s motive.',
     'Next audit the content’s period and purpose, then examine procedural traces in the volume that was not digitized. Connecting the disputed content to handling records gives later review a specific question to answer. Retain Xu’s wording suggestion too; it is not a receipt for completed review.'
    ]),sources:['nRefusal','nMargins','aAudio'],fixedSources:['nRefusal'],options:[
     {id:'record',label:b('附退回件，记录缺项未明且申请未撤','Attach the returned request; record unspecified deficits and no withdrawal'),note:b('继续复核须具体回应缺项；本页不推定经办动机。','Further review must specify the deficit; infer no handling motive from this page.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c4-withdrawal',day:4,anchor:12,phase:'after',title:b('记录注销了，分发还在','Records revoked, distribution still happened'),purpose:b('引用处理日志与保管附记，分开注销、分发和取得材料的不同效力。','Cite handling logs and the custody note; distinguish revocation, distribution and actual possession.'),
    text:p([
     '内容审计和残片调阅使申请有了具体核对对象。卷宗的数字页面数为零，仍可能留有调阅、分发和注销手续。页面数记录数字化成果，处理日志记录经手过程。摘要要分别列出，才不会把“零页”写成从未有人处理。',
     '回批未列缺项，注销记录也不表示每次分发都已收回；公告各有范围。将这些说法按对象并列，能逐项查出哪些冲突、哪些只是说的不是同一批材料。遇到“删除”“注销”“无材料”，先记作者、日期和范围，再判断它们是否相互抵触。',
     '数字保管附记记下了一个改勾过程。整理员发现上一版把通知已存记成物品已交，移回“通知副本已交”，原勾另存。通知描述一张只印二维码的纸，本页没有独立收件人签名，也没有现场见证；补充页不增加纸上的内容。',
     '附上处理记录，保存分发、注销与取得三个不同状态。通知副本已交这一项可以登记，物品实际取得仍须核验；缺少签收凭证的部分另列。补充保管文本只说明数字通知的登记范围，不提供替代物，也不因引用而把取得状态改成完成。',
     '接下来完成通知所指材料的实际取件核验，再核卷宗中的馆外剪报。林澄的申请需要有内部摘要以外的检查约束；纸张与馆外存档各承担一部分，分别保留来源。取件状态和研究判断也要分列，后来的报告才能说明每一步实际做了什么。'
    ],[
     'Content audit and fragment retrieval have supplied specific objects for the request. A volume with zero digitized pages may still retain retrieval, distribution and revocation procedures. Page count records digitization; handling logs record acts. List them separately so “zero pages” does not become a claim that no one handled the volume.',
     'The return lists no specific deficit; revocation does not establish that every distributed copy was recalled. Notices have their own scopes. Arrange claims by object and examine which conflict and which concern different material. For deletion, revocation or absent material, register author, date and scope before assessing contradiction.',
     'The digital custody note records a corrected tick. Its compiler moved “notice stored” out of “item delivered” into “notice copy delivered,” retaining the earlier mark. The notice describes a QR-only sheet. This page has no independent recipient signature or eyewitness account and adds no content to the sheet.',
     'Attach handling records and retain distribution, revocation and possession as distinct statuses. Receipt of the notice copy can be recorded; actual possession still requires verification. List the absent signed receipt separately. This supplementary note bounds the digital notice. It supplies no substitute item and a citation does not complete possession.',
     'Complete the notice’s actual pickup verification next, then check the outside newspaper. Lin’s request needs constraints beyond internal summaries. The sheet and external archive each cover part of the work and need separate sources. Keep pickup status separate from findings so the later report can state what each step actually established.'
    ]),sources:['nRefusal','nCustody','aAudit','aHidden'],fixedSources:['aHidden','nCustody'],options:[
     {id:'record',label:b('附处理记录，登记通知不等于取得','Attach handling records; record that a notice is not possession'),note:b('分发、注销分别留存，物品仍须实际核验。','Retain distribution and revocation separately; the item still needs actual verification.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c4-external',day:4,anchor:14,phase:'after',title:b('馆外核对的范围','Scope of the outside check'),purpose:b('引用馆外材料与保管记录，登记外部核对实际支持的部分及未覆盖的人事问题。','Cite outside material and custody records; state what the external check supports and what personnel questions it does not cover.'),
    text:p([
     '你走完了原有取件与剪报核对。补充保管页没有替代那张只印二维码的纸，也没有替你完成馆外检索。现在工作单能增加的是你实际核过的事项，而不是一段由本站独立证明的现场经过。取件状态与研究判断分别放，不让一个完成标记替另一个签字。',
     '剪报承担的任务也具体。它来自卷宗声称之外的一项公开存档，核对有助于确定这一页内容的时间和出处。林澄在边上写过自己核对过；那句话是她的工作声明，你这次的实际核对才能成为你自己的工作。你不需要先相信她才能去查，也不能把她的声明当成第二份报纸。',
     '馆外材料能帮助检验这件材料，整宗案件仍要分别查。一个事件的日期有据可查，附在剪报旁的人员叙述却未必都有依据。与馆外记录一致，也不代表进入卷宗时没经过同一套整理。说到独立性，要写清独立的是内容、保存渠道，还是加工流程，不能只写一个“外部”。',
     '附上馆外材料，登记这次核对只覆盖本件，将它保留为后续追溯的外部约束。人员去向仍另列；许闻舟的便签也只记录他的工作要求，没有证明他到过取件点。本件出处与实际核对范围须一起保存，以后引用时才不会将相邻的人事叙述一起带成已核。',
     '下一章回看附录、旧档与处理日志，检查已有支持究竟有几条形成路线。几份材料是否独立，不能只由题名和数量判断。这次馆外核对仍保留在本件范围内；即使后来要修订整体支持关系，也不用将这项已做的检查删掉。'
    ],[
     'You have completed the original pickup and newspaper checks. The supplementary custody page replaced neither the QR-only sheet nor external research. Add what you actually checked, not a visit independently proved by this site. Keep pickup status separate from research findings; one completion marker cannot sign for another.',
     'The newspaper’s role is specific. A public archive outside the volume’s own claims constrains the page’s time and origin. Lin wrote that she had checked it; that is her working declaration. Your actual check supports your work. You need not trust her first, and her declaration is not a second newspaper.',
     'Outside material constrains rather than solves everything. Establishing an event’s date does not establish adjacent personnel claims. Agreement with an external record does not prove the item avoided common processing on entry. Specify what is independent: content, preservation channel or processing. “External” alone is insufficient.',
     'Attach the outside material, record this check’s item-specific scope and retain it as a constraint for later tracing. Personnel whereabouts remain separate. Xu’s slip records a work requirement, not a visit to the pickup point. Save provenance with the actual check’s scope so later citations do not carry adjacent personnel statements into the verified field.',
     'Next revisit the annex, older archive and processing logs to examine the formation routes behind existing supports. Titles and file counts alone cannot establish independence. Keep this outside check within its item’s scope. A later revision of overall support need not erase the examination already performed.'
    ]),sources:['nCustody','nRefusal','aDrop','aPress'],fixedSources:['aPress','nCustody'],options:[
     {id:'record',label:b('附馆外核对，保留为本件来源约束','Attach the outside check as a provenance constraint for this item'),note:b('只覆盖本件，人员去向与全卷独立性仍另核。','It covers this item only; personnel whereabouts and whole-volume independence remain separate.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c5-versions',day:5,anchor:14,phase:'entry',title:b('旧版不能替你收回自己','The old version cannot retract itself'),purpose:b('引用许闻舟的版本说明，登记重新审查义务；本地勘误另由已保存决定导出。','Cite Xu’s version note and record the review duty; the local correction is derived separately from the saved disposition.'),
    text:p([
     '第五日重新打开第一日的工作稿。许闻舟离职前留了两版，收回本人“可以作为结项说明”的建议，同时要求旧稿留下。先前采用了什么、现在撤回哪一句，可以对着两版查。他的说明记录这次工作变更，来源是否独立仍需实际检验。',
     '他在九月稿承认，二月已经听懂林澄的问题，仍把“正在补”缩成“见附件”。原件没有补上，那几张工作页却被写进了完成说明。如今他把未完成记在本人名下，仍留着当时给窗口一页答复的理由，接手者能同时看见建议和修订。',
     '你第一日的决定现在也有后果。如果暂用了勘误，后续来源审查会要求一份明确撤回，不可无声地覆盖旧版。如果保留了争议稿，没有使用背书可撤，却依然欠一次有材料的重新审查。派生修订页会依你实际保存的决定形成，不能由这段文字替旧存档补一个从没做过的选择。',
     '附上两版说明，登记旧建议与新修订的对应关系，并列出本地复审任务。第一日的决定保留原状，这里不另作一次处理选择。原先暂列关联索引的依据需逐条回查，旧稿与许闻舟的改动分开登记，后面的修订才能指到具体对象。',
     '英文附录先核版本保留与来源约定，旧档关联再查同馆题名之外的联系，处理日志随后检验几份材料的形成路线。许闻舟愿意撤回本人建议，还不足以完成这些核对。把两版说明留在旁边，实际查过材料之后，再保存你自己的复审或撤回。'
    ],[
     'Day five reopens the first-day draft. Before resigning, Xu retained two versions, withdrew “may be used in the closing statement” and asked that the old draft remain. Compare them to identify earlier adoption and the specific sentence withdrawn. His note records a change of position; independence still requires examination of the sources.',
     'His September draft admits that he understood Lin in February and still shortened “being supplied” to “see attachments.” No originals were added, but the working sheets entered the completion statement. He now registers the unfinished work under his name while retaining his earlier reasons for giving the desk one page. The next worker can examine recommendation and revision together.',
     'Your first-day decision has consequences too. Provisional use requires an explicit retained retraction after the source review, not a silent overwrite. A held draft has no endorsement to retract but still owes evidence-backed review. The derived revision follows your actual saved disposition; this prose cannot invent a choice for an older save.',
     'Attach both versions, record how the earlier recommendation relates to the revision and list the local review duty. Keep the first-day disposition intact instead of choosing it again. Re-examine each ground for the provisional related index. Register the earlier draft separately from Xu’s changes so later revision has a specific object.',
     'The annex first checks version retention and provenance duties; the older archive then checks a connection outside the holdings’ own title. Processing logs examine the formation routes. Xu’s willingness to withdraw his recommendation cannot perform those checks. Keep his versions beside them, then commit your own review or retraction after examining the material.'
    ]),sources:['nVersions','nCorrection','nRefusal','aPress'],fixedSources:['nVersions'],options:[
     {id:'record',label:b('附两版说明，登记旧建议与复审任务','Attach both versions; record the earlier recommendation and review duty'),note:b('旧稿保留，接下来以实际来源核对本地说明。','Retain the earlier draft and check the local explanation against actual sources next.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c5-sources',day:5,anchor:17,phase:'after',title:b('关联索引的复审记录','Review of the related-index classification'),purpose:b('引用来源记录，对早期工作说明进行有出处的重看；保存应撤回或仍待审的边界。','Cite provenance records and re-examine the early working explanation; retain the boundary of retraction or outstanding review.'),
    text:p([
     '有了处理日志，先前的支持关系可以按来源重新检查。“好几份都这么写”，已经不能替一份主张增加分量。要分别查：哪些材料独立形成，哪些在加工中引用或沿用了别件，哪些已声明不在本次馆藏范围。件数照样登记，却不能直接当作证人数量。',
     '本轮修订按第一日实际决定准备：暂用过的建议须留下撤回，争议稿须留下有依据的复审和未尽责任。两种都保留原始引用及当时的有限理由，不能改写为已有最终确认。旧存档没有第一日选择时，明写未记录。预览本身不算保存。点击“保存复审记录”后，修订才进入工作副本，并随附来源记录。',
     '许闻舟把岗位离开和材料交接分成两张表，签了离职手续，材料栏仍列未尽事项。后来的边注要求异议及两版一并交给下一位。他留下的调查还要按对应出处核验，保存林澄的异议只完成留存这一项，没有代她答完复核申请。',
     '附上来源记录，正式保存本轮复审或撤回。第一日暂用的关联分类要明确撤回，改列为加工中形成的条目，仍供研究其形成过程；先前暂存的稿则记录有依据的复审。各项已经成立的有限结果留存，整体支持不再只凭材料一致而获得信用。',
     '保存后，这次修订与早期处理单并列，下一位能查到你改了哪项关系及为何改。外业复核随后提供现实地点的约束，还需实际完成。林澄的去向另列待查；材料形成路线能够回答来源问题，不能给人员下落补一个结论。'
    ],[
     'Processing logs let you revisit support by provenance. “Several files say so” can no longer add weight by itself. Separate independently formed material, material inherited during processing, and chains declared outside this holding’s scope. File counts can still be recorded; they do not become witness counts.',
     'Prepare the revision from the actual first-day choice: provisional use needs a retained retraction; a held draft needs evidence-backed review and pending duties. Keep citations and the earlier bounded reasons without turning them into final confirmation. Older saves without that choice say not recorded. The preview alone does not save it. Click “Save review record” to enter the revision into the working copy with its provenance records.',
     'Xu separated resignation and material handover into two forms. He signed personnel procedure and left outstanding items on the materials form. The later margin requests that both versions and the objections pass to the next worker. His findings still need their corresponding sources checked. Retaining Lin’s objection completes retention, not the answer to her review request.',
     'Attach provenance and commit this review or retraction. Provisional related-index classification requires an explicit withdrawal and reclassification as a processing-formed entry retained for studying formation. A held draft receives evidence-backed review. Retain bounded results already established; agreement among materials no longer supplies overall authority by itself.',
     'After commitment, retain this revision beside the early disposition so the next worker can trace the changed relationship and its grounds. The field check still needs actual completion and supplies a real-place constraint. Lin’s whereabouts remain a separate pending matter. Formation routes answer provenance questions, not a person’s bodily location.'
    ]),sources:['nVersions','nDeparture','nCorrection','aAnnex','aRecursive','aTrace'],fixedSources:['aTrace','nVersions'],options:[
     {id:'record',label:b('附来源记录，正式保存本轮复审或撤回','Attach provenance and commit this review or retraction'),note:b('依第一日实际决定保存派生修订，原稿、有限成果与未尽事项均留存。','Save the derived revision from the actual first-day choice; retain the draft, bounded results and outstanding duties.')}
    ],action:b('保存复审记录','Save review record')
   },
   {
    id:'c5-scope',day:5,anchor:18,phase:'after',title:b('哪一栏能关，哪一栏不能','Which field can close'),purpose:b('引用外业材料与离职交接，选择有不确定性附页的技术报告或有具体后续责任的转交稿。','Cite the field material and departure handover; choose a bounded technical report with uncertainty annex or a referral draft with specific follow-up duties.'),
    text:p([
     '外业复核补上了现实地点的一项约束，来源形成记录也已有本轮检查。最终文件可以据此列明技术范围，历史身份仍按加工形成的条目登记，没有原始人员认证。真实工作人员的去向另列，只采用有出处的岗位与联系记录。',
     '林澄自三月未再到岗，联系未果，是公开岗位说明的范围。你没有独立死亡证明，也没有她后来的位置。许闻舟办理离职、账号被移除，另有他对这些状态的说明；离开岗位不等于身体消失。若把两个人都用“失踪”省略过去，你就再次把系统标签当成了完整人生。',
     '离职页也和原交接单有不一样的日期表述：手续、公告和交接员的记忆不是同一日期字段。保留各自出处，不把大致的月底叙述改成新的独立证据。你新摘要用实名时，可以直接指到谁提出过什么；用岗位时，则必须借署名页找回作者。两种都不能替综合组已有的清点声明改变范围。',
     '现在先决定最终文件的范围，最终事实仍要核验后再签。你可以准备一份技术报告，把已检验的结论和不确定性附页一起交付。报告将明确结束技术工作，人员与程序待办另列；未知的部分要让人看见，不能藏在免责声明的角落。',
     '也可以准备转交稿，不以本人关闭未尽复核，列明材料保管、复核和人事核查应各办什么。它不向外发送，不凭转交两个字保证有人接手，下一位还须依法确认接收安排。两条路都要完成最后审计与原有封印，也都不得改变已经成立的事实。带上出处，选择你愿意把哪种责任写在首页。'
    ],[
     'The field check adds a real-place constraint, and formation records have been examined this round. These can define the final document’s technical scope. The historical identity remains an entry formed in processing, without original personnel authentication. Record real workers’ whereabouts separately from sourced attendance and contact records.',
     'The personnel notice establishes Lin’s nonattendance since March and unsuccessful contact. You have no independent death proof or later location. Xu’s resignation and account removal have their own records and his commentary; leaving a role is not bodily disappearance. Calling both simply “missing” would make a system label a whole life again.',
     'The departure page also dates things differently from the original handover’s broad late-month account. Procedure, notice and the worker’s recollection are different fields. Preserve their sources rather than turning recollection into independent evidence. Named attribution directly identifies positions; role attribution needs the signed source to recover authors. Neither changes the general affairs inventory’s scope.',
     'Choose the final document’s scope now, not its unexamined final facts. Prepare a technical report with established findings and an uncertainty annex together. It will close the technical work while listing personnel and procedural duties visibly, not hiding the unknown in a disclaimer.',
     'Or prepare a referral draft that declines to close outstanding review and specifies duties for custody, review and personnel inquiry. It sends nothing and guarantees no receiving worker; lawful receiving arrangements must still be confirmed. Both paths require the final audit and original seal, and change no established facts. Cite sources and choose the responsibility placed on the front.'
    ]),sources:['nDeparture','nVersions','nCustody','aTrace','aSurvey'],fixedSources:['nDeparture','aSurvey'],options:[
     {id:'report',label:b('技术报告并交不确定性附页','Technical report with an uncertainty annex'),note:b('关闭已完成的技术工作，不对人员命运作结；具体未尽责任仍附后。','Close completed technical work, not personnel fate; attach specific outstanding duties.')},
     {id:'referral',label:b('转交未尽复核，明确接手责任','Refer outstanding review with explicit receiving duties'),note:b('保留事实结论，不签全部已结；本地草稿不等于已发送或已受理。','Retain findings without signing everything closed; a local draft is not sent or accepted.')}
    ],action:b('保存结案范围','Save closing scope')
   },
   {
    id:'c6-audit',day:6,anchor:18,phase:'entry',title:b('先划清签名覆盖的地方','Mark what the signature covers first'),purpose:b('引用范围说明，为最终审计登记有限任务；封存原件仍须原有核验。','Cite the scope note and register a bounded final-audit task; the sealed original still requires its original verification.'),
    text:p([
     '最终审计仍需要按原来的流程检查；此前准备的报告或转交稿不能替它预填事实，也不能代替最后封印。现在确定审计怎样进入自己的文件。',
     '综合组范围说明把技术事实、处理责任和人员去向分栏。首页须写明签名覆盖哪一项，哪些仍有欠项。技术报告只在最终核验后关闭技术工作；申请受理和人员核查另待凭证。转交稿则保留已成技术成果，将未完成的责任列给相应岗位。',
     '许闻舟版本说明记录本人撤回建议，林澄申请记录她要求复核。两页各证明自己的工作动作，不能单独认证旧材料的形成。她也改过边注，他的来源判断也须核验。保留这些工作记录时，原先的依据和改动一起留，后来的审查才能逐项回应。',
     '附上范围页，将审计事实与未尽事项分栏。最终事实待原有核验完成后填写，当前只登记各栏所需出处及签名范围。技术、处理和人员事项分别回到对应材料，摘要中的一个完成状态不能替另两栏签字。',
     '接下来核最终审计，再打开封存材料。封存说明也要记其作者与用语来源；保管状态不自动认证文件的每一句。你的报告或转交稿将按所选范围附上审计结果，未解决的事项留在各自的待办栏，方便下一位继续查。'
    ],[
     'The final audit still needs its original checks. The report or referral draft cannot prefill facts or replace the final seal. Register how the audit will enter your own document.',
     'The scope note separates technical facts, handling responsibilities and personnel whereabouts. State signature scope and outstanding items on the front. The report closes technical work only after final verification; review acceptance and personnel inquiry need their own records. The referral retains established findings and assigns unfinished duties to the relevant roles.',
     'Xu’s version note records his withdrawal; Lin’s application records her request for review. Each establishes its own act, not the formation of older material. Her margins changed too and his provenance judgments need checking. Retain earlier grounds with revisions so later review can answer each item.',
     'Attach the scope page and separate audit findings from outstanding matters. Fill final findings only after the original verification; now register the sources needed and signature scope for each field. Technical, handling and personnel matters each return to their own material. One completed status in the summary cannot sign for the other two.',
     'Check the final audit next, then open the sealed material. Register who wrote its description and the source of its terms. Custody status does not authenticate every sentence. The report or referral will attach findings within its selected scope, leaving unresolved matters in their respective pending fields for further checking.'
    ]),sources:['nAudit','nDeparture','nVersions','aSurvey'],fixedSources:['nAudit'],options:[
     {id:'record',label:b('附范围页，将审计事实与未尽事项分栏','Attach the scope page; separate audit findings from outstanding matters'),note:b('最终判断仍须核验；技术、程序与人员事项各依出处。','Final judgments still need verification; technical, procedural and personnel matters each require their sources.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c6-consistency',day:6,anchor:19,phase:'after',title:b('封存件也有它的作者','A sealed record has an author too'),purpose:b('引用已开放的封存说明与末栏，登记记录称谓与独立证明之间的区别。','Cite the opened sealed description and final field; distinguish a record’s wording from independent proof.'),
    text:p([
     '封存说明中有一个比岗位公告更肯定的称谓。它称林澄的提交为“生前”最后一次。那是原说明的文字，原件保持原样；你的新报告不能照抄这个词就宣布她的死亡已被核实。你实际拥有的是相互不等强度的记录，尚没有独立说明她身体命运的材料。',
     '三月未到岗的公告与二月工作便签都不能补齐这个缺口。末栏特意说明，十月整理页转录的林澄文字来自早期，不是她十月给你的答复，不证明她后来回来过。你可以在时间线上登记最后已知工作材料与后来的整理说明，但不能让整理日期替她产生新的活动日期。',
     '系统说法也按出处留存。删除申请被驳回，与某处记录声称没有可删除对象，各有作者、日期及对象。先保留两项，再核它们是否真指同一件事。操作栏空白时，已有经办文字仍保留；材料没有指定操作者，摘要也不另补一位。',
     '附上封存称谓与末栏时间说明，登记证明缺口。“生前”归原封存说明，不能当作独立死亡证明；二月工作与十月转录分别列日，去向仍未明。原文字不改，本地附记说明为何没有采用它更强的称谓。',
     '附上出处，保存这项一致性附记。最后的原有判断与封印仍须完成。之后的系统结案文字作为生成展品保留；其中关于纸张仍在原处或过去保管的说法，归生成页自己的声明。本站没有持续现场观测，你的文件需将这类声明、实际核验和本地意见分列。'
    ],[
     'The sealed description uses a more definite term than the personnel notice: it calls Lin’s submission her last “during her lifetime.” Keep the original wording intact, but do not copy the phrase into a claim that death has been verified. You have records of unequal scope, not independent evidence of bodily fate.',
     'The March nonattendance notice and February slip do not fill the gap. The final-field note explicitly dates the October transcription to earlier material. It is not Lin answering in October or proof she returned. Separate last known working material from later compilation; do not give her a new activity date through the compiler’s date.',
     'Retain system claims by source too. Rejected deletion requests and a record of no deletable object have their own authors, dates and objects. Preserve both, then check whether they refer to the same thing. Keep handling text beside an empty operator field. Where material identifies no operator, the summary supplies none.',
     'Attach the sealed wording and final-field timeline, and register the evidentiary gap. Attribute “during her lifetime” to the description, not independent death proof. Date February work separately from October transcription; whereabouts remain unresolved. Preserve the original and explain in the local note why its stronger description was not adopted.',
     'Attach sources and save this consistency note. The original judgment and final seal still require completion. Retain later system closing prose as a generated exhibit. Its claims about the sheet remaining in place or its past custody belong to that page. The site has no ongoing observation. List those claims separately from actual verification and local opinion.'
    ]),sources:['nLastNote','nAudit','nDeparture','aSealed'],fixedSources:['aSealed','nLastNote'],options:[
     {id:'record',label:b('附封存称谓与时间线，登记证明缺口','Attach the sealed wording and timeline; record the evidentiary gap'),note:b('“生前”归原说明；早期工作与晚期转录分开，去向仍未明。','Attribute “during her lifetime” to the description; separate early work from later transcription. Whereabouts remain unresolved.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c6-handover',day:6,anchor:20,phase:'capstone',title:b('给下一位留一份能核的文件','Leave the next worker a checkable document'),purpose:b('引用最终审计与交接页，登记你的本地交付责任；实际结尾文件依三项已保存决定形成。','Cite the final audit and handover page; record your local handoff duty. Closing documents derive from the three saved procedural decisions.'),
    text:p([
     '原有审计和最后封印都已完成。交接员原先估计一页能装下的说明，现在带着旧稿、来源记录和待办附页。文件厚了，每一页也有了位置。登记核对与人员主张分开，采用过的意见能查到旧版，未完成的签发仍有范围说明。',
     '历史身份按材料形成过程登记，是文档加工形成的条目，尚没有原始人员认证。林澄的调查记录与它分开：她要求追查形成，要求旧件保留。许闻舟对本人建议作了修订，交接员改回了清单的勾。这些工作动作各有作者与出处，可以逐项交给下一位。',
     '最终文件的写法取决于三项决定。暂用勘误要有明确撤回，争议稿则要留下继续跟进的复审责任。实名摘要直接写出两人的主张，岗位摘要要指回署名页才能找到作者。技术报告将已核事实与不确定性一起交付；转交稿把尚未完成的责任按岗位列出。无论选哪条路，事实不变，材料也都保留。',
     '原系统生成的结案页保留原文，作为一份可引用、也可核验的展品。你不替它补写人员命运。林澄的岗位记录只支持三月起未到岗与联系未果；更强的封存称谓缺少独立证明。许闻舟的离职与账号状态另列。工作上的选择有记录，可以说清；这份文件不足以写完他们的一生。',
     '附上最终审计和交接出处，保存本地工作交付。已成判断带引用，修订指回旧版，未尽事项列明接手岗位应办什么。文件仍未发送，实际接收和保管安排须在站外确认。下一位打开首页，就能沿出处检查你的判断；不同意时，也能保留这版再写修订。'
    ],[
     'The original audit and final seal are complete. The explanation the worker thought would fit one page now has earlier drafts, source records and pending annexes. Each page has a place. Registry checks are separate from personnel claims, adopted positions lead back to earlier versions, and the unfinished issuing work has a scope note.',
     'Register the historical identity by its documentary formation: an entry formed in processing, without original personnel authentication. Lin’s own inquiry remains separate. She requested formation checks and retention of old material. Xu revised his recommendation; the worker corrected the checklist tick. Each act has an author and source to pass on.',
     'The three choices leave different document forms. Provisional correction use receives explicit retraction; a held draft retains review duties. Names directly preserve individual positions; roles need the signed page to recover authors. The report hands over findings with uncertainty; the referral assigns work not closed. Facts and source access do not change by route.',
     'The original generated closing page stays intact as an exhibit that can be cited and examined. Do not expand it into bodily fate. Lin’s personnel record supports nonattendance and unsuccessful contact from March; the stronger sealed term lacks independent proof. Xu’s departure and account status stay separate. Their professional choices can be described; their whole lives cannot be completed by this document.',
     'Attach final audit and handover sources, and save the local handoff. Findings carry citations, revisions lead back to old versions, and pending items specify work for receiving roles. The file remains unsent; actual receipt and custody arrangements need confirmation outside the site. The next worker can examine your judgment from the front page and retain this version when writing a different one.'
    ]),sources:['nLastNote','nAudit','nVersions','nDeparture','aVerdict','aSealed'],fixedSources:['aVerdict','nLastNote'],options:[
     {id:'record',label:b('附最终出处，保存可追结论与接手待办','Attach final sources; save traceable findings and follow-up duties'),note:b('本地文件保留已成判断、修订及未尽责任；实际接收另须确认。','The local file retains findings, revisions and outstanding duties; actual receipt still needs confirmation.')}
    ],action:b('保存交接记录','Save handover')
   },
  ],
  aftermath: {
   registry:b('登记核对完成，只给这一项增加了实际依据。未签发勘误还不能借它变成整批确认。接下来检查机构附件，确定登记所处的材料关系；你继续的是交接员留下的空栏，不是替空栏补一个人。','The registry check adds a basis for this item only. The unsigned correction cannot borrow it as whole-batch confirmation. Examine the institutional attachment next to establish the registry’s relationship. Continue the field the handover worker left open; do not invent someone to fill it.'),
   institution:b('机构关系核对为附件划定了范围，没有自动认证人员条目。勘误的暂用或暂存要在工作副本里明记，不能只靠蓝夹子。下一日检查姓名附件接到什么材料上，接过林澄要求将人员主张单列的工作。','The institutional check bounds the attachment without authenticating its personnel entry. Record provisional use or holding explicitly in the working copy, not by a blue clip. Next day examine the name attachment’s material connection, continuing Lin’s separate personnel inquiry.'),
   namecode:b('姓名条目已可登记为本轮查过的主张，人员认证仍待原始依据。下一份地点材料检验附件声称的现实范围，接着林澄工作纸上的待办；地点结果单独登记。','Register the name entry as a claim examined this round; personnel authentication still needs original grounds. The place material next tests its real-world scope, continuing the worksheet’s pending item. Record the place result separately.'),
   building:b('地点核对有自己的完成项，人物认证不能共用那一格。许闻舟可以把这项实做工作写进月报，但录音支持还欠自己的检查。下一份双卷材料要核对安排比对的工作关系，不让地点正确替录音独立性签名。','The place check earns its own completion entry; the person cannot share that tick. Xu can report this actual work, but recording support needs its own check. Examine the reel material’s working relationship next without letting a correct place sign for recording independence.'),
   reelnote:b('双卷工作关系已可继续追查，这份指令仍只说明怎样安排材料，不成为第二次见证。接下来核验采样之间的关系，为许闻舟会前说明留下真正完成的比对项，也为林澄的独立性问题留下边界。','The reel working relationship can now be followed. The instruction remains an arrangement of materials, not a second witness. Check the sample relationship next, giving Xu’s meeting page a real completed comparison and Lin’s independence question a defined boundary.'),
   reels:b('比对结果改变了双卷共同支持附件的方式，不应只写“又核完一项”。下一章检查修复链怎样形成可读工作版。林澄留下依据，许闻舟保留说明，你要接着他们做过的工作往下查。技术成果保留，未查的来源仍待核，不能借成果作担保。','The comparison changes how the reels can support the attachment together; it is more than another tick. Next examine how repair produces a readable working version. Continue Lin’s retention of grounds and Xu’s supporting pages, erasing no technical result and guaranteeing no unexamined source.'),
   dial:b('转盘检查后，这份维修图的工作读法可以登记，旧边注与本次采用的差别也留了下来。接着检查双轨材料，看整理后的信号怎样表达，这一步仍得实际核对，维修图代答不了。采用依据仍归当班工作版，不能倒写成历史原状。','The dial check gives the repair diagram a recordable working reading and preserves its difference from the old margin. The rails next examine representation of the reconstructed signal, rather than relying on the diagram to testify for it. Adopted grounds belong to the working version, not a rewritten historical original.'),
   tracks:b('双轨检查得到的是整理后的信号表达。能读出来，不保证转录一路无误。接着用电路校验纸检查接收记录在有限规则内是否可靠。许闻舟的摘要因此要把“可读”与“已校验”分列，前一项完成，不能替后一项打勾。','The rails produce a reconstructed signal’s representation. Readability does not guarantee an error-free transcription. The circuit-check sheet next examines the received record within its stated limits. Xu’s summary must separate readable from checked, rather than letting the first sign for the second.'),
   parity:b('电路校验为接收记录提供了有限可靠性，不认证它来自哪个历史载体。现在先记录林澄与许闻舟各自的采用责任，再核对原始声音：要检验工作说明遗漏了什么，不把纸面校验当成听过载体的证明。','The circuit check establishes bounded reliability of a received record, not its historical carrier. Record Lin’s and Xu’s respective responsibilities, then examine the original audio: what did the working explanation leave out? A checked paper record is not proof the carrier was heard.'),
   noisewords:b('声音检查为工作说明增加了实际约束，保管与形成记录仍另核。下一日看内容审计与退回申请，查后期材料怎样进入工作版。林澄要求区分形成、加工和开放时间，这项申请尚缺具体答复。','The audio check supplies an actual constraint on the explanation. Custody and formation records still need separate checks. Next examine the content audit and returned request: how did later material enter the working version? Lin’s request for separate formation, processing and release dates still lacks a specific answer.'),
   audit:b('内容年代与用途的核对给复核申请增加了具体对象，不单独指定动机或操作者。下一份无页面卷宗检验处理手续留下什么；许闻舟帮申请改过语气的事实也应保留，不能代替申请已处理的凭证。','Checking period and purpose gives the review a concrete object, not a motive or operator. The pageless volume next tests surviving handling traces. Keep Xu’s attempt to soften the request; it is not a receipt establishing that review happened.'),
   hiddenindex:b('残片与处理记录让“没有页面”不再等于“没有经手”。注销、分发和物品取得仍须分栏。接着完成取件通知所要求的实际核验，数字保管附记只记录通知，不替你取得物品，也不为纸上增加文字。','Fragments and handling records separate no pages from no handling. Keep revocation, distribution and possession in different fields. Perform the pickup notice’s real verification next. The digital note registers the notice only; it neither obtains the item nor adds writing to the sheet.'),
   dropcoords:b('原有取件核验已完成；这个状态不独立证明现场经过或任何人的去向。下一份馆外剪报提供另一个有限检查对象，继续林澄曾作的出处核对，而不是让二维码替整批材料取得信用。','The original pickup verification is complete. This status independently proves neither a visit account nor anyone’s whereabouts. The outside newspaper supplies another bounded object for checking, continuing Lin’s provenance work rather than making a QR confer authority on the entire batch.'),
   newsclip:b('馆外核对为这一页提供了实际约束，不替人员叙述背书。下一日回看附录、旧档与来源记录，检验几份支持材料是否确有不同形成路线；把这次外部核对保留在自己的范围里，不因整体判断将变就作废。','Outside checking constrains this page without endorsing personnel claims. Revisit the annex, older archive and provenance next to test distinct formation routes. Retain this external check within its scope even if the overall assessment changes.'),
   annex:b('附录检查让工作版与相关版本的关系有据可查，保留要求仍不能代替实际留存凭证。接着查旧档联系，核对同馆题名以外的那段来源。许闻舟要修订自己的旧稿，光认错不够，还得有材料支持。','The annex check places the working version in its specific version relationships. A retention requirement is not proof of retention. Check the older archive connection next; Xu’s revision of his draft needs material, not merely an apology.'),
   recursion:b('旧档联系已可登记，出处关联与独立支持仍要分清。接着看处理日志，查几份材料怎样进入同一工作体系。许闻舟撤回了自己的使用建议，材料的来源判断仍得依据日志来做。','Register the older archive connection while distinguishing a reference from independent support. Examine processing logs next to see how material entered the working system. Xu withdrew his recommendation; the withdrawal cannot perform the provenance finding for the logs.'),
   provenance:b('来源核对要求早期使用建议接受有记录的修订：暂用须明确撤回，暂存须继续复审。下一项外业复核提供现实地点的约束，不为同源文本增加票数；林澄的去向另列，不能由材料形成图代答。','Provenance requires recorded revision of the early recommendation: provisional use needs explicit retraction; holding still needs review. The field check supplies a real-place constraint, not another vote for shared-root text. Keep Lin’s whereabouts separate from the formation graph.'),
   triangulate:b('外业复核完成了另一项有限检查，可以支持最终文件的技术范围，不能填人员命运栏。下一日打开最终审计，核对事实与签名边界；许闻舟的离职、账号移除和林澄的未到岗不共用一个结项勾。','The field check completes another bounded examination and helps define technical scope, not bodily fate. Open the final audit next and check facts against the signature’s limits. Xu’s resignation, account removal and Lin’s nonattendance cannot share one closing tick.'),
   masterkey:b('封存材料已经可核，原说明的强称谓仍归原说明，不能直接当独立证明。接下来完成原有审计判断；综合组末栏要求保留形成时间和后期转录的区别，避免结案文字再次替未知作结。','The sealed material is available for examination; stronger wording belongs to its description and is not independent proof. Complete the original judgment next. The final field requires separation of formation dates from later transcription so closing prose does not close the unknown again.'),
   judgment:b('原有事实判断已完成，最后封印仍须按原流程。之后保存的交付应同时带已成结论、版本修订和未尽责任；生成结案页是一份可检查的展品。你接过同事的工作，不接过替他们全部人生签字的权利。','The original factual judgment is complete; the final seal still follows its original process. The handoff afterwards must retain findings, version revisions and outstanding duties. The generated closing page is a checkable exhibit. You take on colleagues’ work, not the right to sign for their whole lives.')
  },
  documents: {
   correction: {
    held: {title:b('勘误处理单：争议稿留存','Correction disposition: disputed draft retained'),text:p([
     '本地工作决定：保留未签发勘误为争议稿，不把它作为通用使用建议。依据为勘误往来、首批登记与批次材料，以及机构附件的已完成核对。引用这些材料只说明本决定的范围，不等于它们共同完成了人员认证。',
     '原工作稿、双方回批和已核材料全部保留。未签发不代表稿件从未提出，也不代表其中每项判断都错。本单没有替林澄或许闻舟修改当时的主张，没有对外送出，也不取得机构签发资格。',
     '尚欠责任：新来源材料出现后，回查此稿原先依赖的支持，记录哪些仍可使用、哪些需要修订。暂存不是结项，不能只用一张夹子的颜色表示争议。下一位应能在首页看到未尽复核及其出处。'
    ],[
     'Local disposition: retain the unsigned correction as a disputed draft, not a general recommendation for use. Grounds are the correction exchange, first registry and batch materials, and completed institutional check. These citations bound this act; together they do not authenticate personnel.',
     'Retain the draft, both replies and checked material. Unissued does not mean unproposed or wholly incorrect. This record changes neither colleague’s historical position, sends nothing externally and grants no institutional issuing authority.',
     'Outstanding duty: return when new provenance appears and record which supports remain usable and which require revision. Holding is not closure and a clip color cannot carry the dispute. Put the pending review and sources where the next worker can find them.'
    ])},
    provisional: {title:b('勘误处理单：有限暂用','Correction disposition: bounded provisional use'),text:p([
     '本地暂用的具体表述：“将人员附件暂列作登记材料关联索引，供继续查阅；尚未取得人员原始登记，不作身份认证。”首页标明暂行、待来源复核。依据为勘误往来及已核的登记、批次、机构关系。只在玩家副本采用，不是对窗口发文或机构确认。',
     '本单承担主动采用一份工作意见的责任，不声称附件已完成独立人员认证。原稿、旧版和支持材料同时保留，不能让读者只得到一张干净的新版封面。林澄要求保留的分歧与许闻舟希望先提供工作版的理由分别归属原作者。',
     '撤回条件：后续来源检验若不能支持原先赋予它的信用，应另存明确撤回，指回本单和旧稿。只改措辞不够，曾经暂用的事实必须保留。即使没有对外送达，工作副本也要写清这份意见何时采用、为何不再采用，让下一位能查到。'
    ],[
     'Specific local wording: “Provisionally list the personnel attachment as a related registry index for further consultation; no original personnel registration has been obtained and no identity is authenticated.” Mark it provisional, provenance pending. Cite the exchange and checked registry, batch and institutional relationships. Adopt it only in the player’s copy, not as desk dispatch or institutional confirmation.',
     'This record takes responsibility for adopting a working position, not independent personnel authentication. Retain the draft, earlier version and supporting materials together. Attribute Lin’s retained disagreement and Xu’s temporary-use reasons separately to their authors.',
     'Retraction condition: if later provenance cannot support the authority granted, save an explicit retraction pointing to this disposition and the draft. Do not merely change wording or erase provisional adoption. Even without external delivery, show the next worker when this position was used and why it is no longer used.'
    ])},
    notRecorded: {title:b('勘误处理单：旧存档未记录','Correction disposition: not recorded in the older save'),text:p([
     '原存档没有记录此项程序选择。技术进度被保留，不因此推定玩家曾暂用或拒绝勘误。本地档案保留未签发勘误与原材料供回看。',
     '若后来补写工作意见，应明写为当前回顾，不伪造第一日签发、撤回或送达日期。未记录不表示原争议消失，下一位仍须核对来源和使用范围。'
    ],[
     'The older save records no procedural choice here. Technical progress is retained without inferring provisional adoption or refusal. Keep the unsigned correction and original material available for review.',
     'Any later opinion must be marked as a current retrospective act, not a fabricated first-day issue, retraction or delivery. Not recorded does not erase the dispute. Source and use boundaries still need checking.'
    ])}
   },
   revision: {
    held: {title:b('复审记录：争议未转成定稿','Review record: dispute not turned into a final version'),text:p([
     '对第一日“暂列关联索引”争议稿完成本轮来源复审。人员附件仍可阅，但应按加工中形成的条目研究，不再将它列为待人员登记补证的暂行关联。依据为英文附录、旧档关联和追溯表；许闻舟两版说明只记录其本人修订，不增加独立历史证据。',
     '此前未作使用背书，所以本单不虚构一次撤回。现明确记录：不能以若干整理件的一致性替代独立形成路线，不能用地点核对替人员认证。已完成的核对保留自身效力，争议稿不被整体删除，也不升级为正式确认。',
     '未尽责任继续保留：材料保管岗位复核原始载体与移交；复核岗位逐条回答先前申请，不以缺项未明的退回代替结论。林澄去向与许闻舟离职另按记录范围列示，不由本次来源复审作人事结论。'
    ],[
     'This round reviews the first-day disputed related-index draft. The attachment remains readable, now for studying an entry formed in processing, not a provisional relationship awaiting personnel corroboration. Grounds are the annex, older archive connection and provenance table. Xu’s versions document his own revision, not additional independent history.',
     'No use endorsement was made, so invent no retraction. Record explicitly that agreement among compilations cannot replace distinct formation routes, and a place check cannot authenticate personnel. Retain completed checks within their scope. Neither delete the draft wholesale nor promote it to official confirmation.',
     'Outstanding duties remain: custody staff check carriers and transfers; review staff answer the prior application specifically rather than using an unspecified deficit as a conclusion. Lin’s whereabouts and Xu’s departure stay in their own sourced fields, not a personnel finding from this provenance review.'
    ])},
    provisional: {title:b('明确撤回：暂用关联索引改列形成条目','Explicit retraction: related index reclassified as a processing entry'),text:p([
     '现明确撤回第一日本地工作版暂将人员附件列为登记材料关联索引的采用建议。此前没有认证人员身份，本撤回也不捏造曾有这种认证。撤回只针对关联索引的暂用关系，不是原登记、全部修复劳动或站外送达。旧处理单、工作稿与引用仍留存，可回查当时的有限理由。',
     '撤回依据为后续来源检查，许闻舟的修订另记录其本人动作，不替来源检查作证。附件与登记的关联，原先只是供查阅的暂行安排；现不再将这项安排作为有待人员登记补证的关系继续推荐，而改列为加工中形成的条目，保留供研究其形成过程。索引仍可查，但分类依据已变，须明写这次修订。',
     '保留原先为什么暂用的理由，保留林澄当时的异议，不把两人写成从来一致。接手者应能同时看见当时采用、现在撤回和仍待完成的核对。下一项复核须回答具体缺项与移交依据；人员去向另行核查，不能由撤回替它作结。'
    ],[
     'Explicitly withdraw the first-day provisional recommendation to list the personnel attachment as a related registry index. It never authenticated the person; invent no such authentication now. Withdraw only that provisional indexing relationship, not the registry, restoration labor or any external delivery. Retain the old disposition, draft and citations so its bounded reasons remain checkable.',
     'Grounds are later provenance checks. Xu’s revision separately records his own act, not evidence for those checks. The earlier index relationship was a consultation arrangement. No longer recommend it as a relationship awaiting personnel corroboration; classify the entry as formed in processing, retained for studying its formation. The index remains readable, but its classification grounds have changed and require a recorded revision.',
     'Keep the original reasons for adoption and Lin’s objection; do not fabricate unanimity. Let the next worker see adoption, retraction and outstanding checks together. Follow-up must address specific deficits and transfer grounds. Personnel whereabouts remain separate from this retraction.'
    ])},
    notRecorded: {title:b('复审记录：无可归责的旧选择','Review record: no recorded earlier disposition'),text:p([
     '本次可记录来源边界，但旧存档没有勘误处理选择，因此不能写玩家收回了本人曾作的背书，也不能写玩家始终拒绝背书。许闻舟撤回本人建议是他自己材料中的动作，不能移到玩家名下。',
     '保留各项已经完成的技术核对；相关摘要仍须区分一致性与独立性，并列未尽保管与复核责任。补写的工作意见属于当前回顾，不补造旧版日期。'
    ],[
     'Source boundaries may be recorded now, but the older save has no disposition. Do not claim the player withdrew an earlier endorsement or always refused it. Xu’s withdrawal is his own documented act, not the player’s.',
     'Retain completed technical checks; separate agreement from independence and list outstanding custody and review duties. Any added opinion is current retrospective work, not a fabricated old version.'
    ])}
   },
   attribution: {
    named: {title:b('责任摘要：实名、分歧分别归属','Responsibility summary: names and separate positions'),text:p([
     '当前实名摘要据二月往来记录两项主张：林澄要求保留原始载体和各版采用依据，许闻舟希望先提供标明待核的工作版。两人同意旧件留下，在采用说明的表述上仍有分歧。引用署名页与班次记录；本摘要只记录当时工作意见。',
     '实名让两项主张的提出者直接可查。机构责任仍须按工序与权限另列，不把所有决定归给这两人。摘要只记录有出处的个人动作；遇到其他材料中的空署名，保留空栏及已有经办文字。',
     '与原交接单比较，这份摘要让接手者直接辨认提出异议和采用建议的人。后续任务仍须按岗位列明，不能只写“去问林澄”或“去问许闻舟”。署名页是当时工作的记录，这份本地摘要不发送，也不会得到他们的新答复。'
    ],[
     'The named summary records February positions: Lin requested retention of original carriers and adopted grounds for each version; Xu wanted a working version marked pending. They agreed to keep old materials and disagreed on the wording of adoption. Cite the signed page and shift account. This summary records their positions at that time.',
     'Names make each proposal’s author directly identifiable. List institutional duties separately by process and authority instead of attributing every decision to these workers. Record sourced personal acts only. Where other material has a blank signature, retain the blank and existing handling text.',
     'Compared with the original handover, this summary directly identifies who objected and who recommended use. List follow-up tasks by role instead of simply “ask Lin” or “ask Xu.” The signed page records their work at the time. This local summary is unsent and receives no new reply from either.'
    ])},
    role: {title:b('责任摘要：岗位标注、署名原件保留','Responsibility summary: roles, signed originals retained'),text:p([
     '当前岗位摘要据二月往来列示：修复岗位要求保留原始载体和各版依据，协调岗位希望先提供标明待核的工作版。旧件保留是共同要求，采用表述仍有分歧。原署名页与班次记录可回查；公开签名不因摘要省名而匿名。',
     '正文按职责列项，下一位若要知道谁提出了意见，须回查署名页。岗位标注不直接写个人归属，所以引用必须保留。后续变更也要标明实际修改的人，不能统称系统更新。',
     '与原交接单比较时，本摘要显出应接续的工作位置，却不如实名摘要直接显示两人的分歧。公开原件与签名全部不变；它提供的是岗位交接便利，不是真实隐私保护，也不消除作者对过去动作的责任。'
    ],[
     'The role summary records February positions: repair requested retention of original carriers and version grounds; coordination wanted a working version marked pending. Both requested retention of old material and differed on adoption wording. Keep citations to the signed page and shift record; omitting names here does not anonymize public signatures.',
     'The body lists duties by role. To identify who proposed them, the next worker must consult the signed page. Retain those citations. Later changes must identify their actual author too, rather than becoming a general system update.',
     'Compared with the original handover, this summary foregrounds continuing roles but less directly displays the colleagues’ disagreement. Public originals and signatures remain unchanged. It offers role-based handover convenience, not genuine privacy protection or erasure of responsibility.'
    ])},
    notRecorded: {title:b('责任摘要：署名选择未记录','Responsibility summary: attribution choice not recorded'),text:p([
     '旧存档未记录实名或岗位摘要选择。原署名材料照旧保留，不推定玩家曾匿名处理，也不推定玩家作过实名承诺。',
     '当前回顾须分别归属历史主张，并明确新摘要不是独立史料。待补写署名方式时，应保留个人、岗位与机构责任的区别，不能回填一场不存在的旧决定。'
    ],[
     'The older save records no named or role-summary choice. Keep signed material; infer neither anonymization nor a named-attribution commitment.',
     'Any current retrospective summary must attribute historical positions and state that it is not independent history. A later attribution format must preserve individual, role and institutional differences without fabricating an earlier decision.'
    ])}
   },
   attributionRevision: {
    named: {title:b('实名摘要后附：许闻舟修订本人建议','Named-summary addendum: Xu revises his recommendation'),text:p([
     '在原实名摘要之后另附九月版本说明，不覆盖二月摘要。许闻舟明确撤回“可以作为结项说明”的本人旧建议，保留原稿与林澄的异议。撤回归他本人，引用其两版说明；不倒写成两人在二月已经达成的意见。',
     '原交接单只概述谁离岗、谁留下记录。本附页补明各项工作由谁做过：林澄提出保留要求，许闻舟采用过建议，后来又作修订。复核与保管的岗位责任仍在，不能把未尽事项都改成去问其中一人。'
    ],[
     'Attach the September version note after the February named summary without overwriting it. Xu explicitly withdrew his earlier “may be used in the closing statement,” retaining the draft and Lin’s objection. Attribute withdrawal to him and cite his two versions; do not backdate it as February agreement.',
     'The original handover briefly describes departures and retained records. This addendum assigns the working acts: Lin requested retention; Xu adopted a recommendation and later revised it. Review and custody still have role duties; pending work cannot simply become a request to ask one colleague.'
    ])},
    role: {title:b('岗位摘要后附：协调岗位修订记录','Role-summary addendum: coordination’s revision'),text:p([
     '在二月岗位摘要之后另附九月修订：协调岗位撤回此前结项使用建议，旧稿与修复岗位异议仍留存。正文继续采用岗位标注，引用许闻舟两版说明以找回个人归属；不是无人署名的系统更新。',
     '原交接单记下的岗位状态，不能代替这次意见修订。岗位摘要便于分派后续任务；接手者想知道具体是谁提出的，还得多查一页。公开的署名原件不变，复核与保管岗位仍须继续处理未尽事项。'
    ],[
     'Attach the September revision after the February role summary: coordination withdrew the closing-use recommendation, retaining the draft and repair’s objection. Keep roles in the body and cite Xu’s two versions to recover individual attribution. This is not an authorless system update.',
     'Role status in the original handover cannot replace this change of working position. Role summaries help assign work but require another page to identify its proposer. Public signed originals remain unchanged; review and custody must still address pending matters.'
    ])},
    notRecorded: {title:b('后附修订：署名方式未记录','Revision addendum: attribution format not recorded'),text:p([
     '旧存档未记录署名摘要方式，本附页不补造旧选择。许闻舟九月修订的动作可按其原署名材料登记，二月主张仍按二月记录理解。',
     '若当前回顾另写岗位或实名摘要，须注明新写日期，并保留原件引用。不得把后附修订塞进旧摘要，造成作者早已撤回或双方早已一致的印象。'
    ],[
     'The older save has no attribution-format choice; invent none. Xu’s September revision can be registered by its signed source, while February positions retain their February context.',
     'A current named or role summary needs its current date and original citations. Do not insert the later revision into the earlier summary, implying prior withdrawal or agreement.'
    ])}
   },
   scope: {
    report: {title:b('技术报告与不确定性附页','Technical report and uncertainty annex'),text:p([
     '本地技术报告的范围预先列明为档案形成、支持关系及有限外部约束；这份范围稿不代写尚未完成的审计。最终判断须在原有核验完成后与引用材料一起列示。身份认证不能由修复件补齐，一致性不自动证明独立性；系统结案文字另作生成展品保留。',
     '本报告仅在最终核验完成后关闭技术工作，不签全部程序与人员事项已结。林澄三月起未到岗与联系未果有岗位记录，没有独立死亡证明；晚期整理的称谓须另核出处。许闻舟离职、账号移除分别记载，不等于身体消失。',
     '不确定性附页与正文同时交付，不缩成末尾一句免责。具体待办：材料保管岗位核对原始载体、形成记录与移交范围；复核岗位逐条回应未撤回申请及缺项；有权限的人事核查岗位另核联系与去向记录。不得用项目清点代替未接收物的保管凭证。',
     '版本处理与署名摘要按已保存决定另附；未记录的选择明写未记录。本地保存和导出不等于实际送达、正式签发或机关受理。接收安排、保管权限及人员核查应在本站之外依法确认，不能因为技术报告完成就默认为已经有人接手。'
    ],[
     'Define the report’s scope in advance: formation, support relationships and bounded outside constraints. This scope draft cannot write an unfinished audit. List final findings with cited material only after the original verification. Repair does not complete identity authentication, and agreement does not guarantee independence. Keep generated closing prose as a separate exhibit.',
     'This report closes technical work only after final verification, not all procedural and personnel matters. Records establish Lin’s nonattendance and unsuccessful contact from March, without independent death proof. Terms in later compilations need separate provenance checks. Xu’s departure and account removal remain separate, not bodily disappearance.',
     'Deliver the uncertainty annex with the body, not as a last-line disclaimer. Custody staff must check carriers, formation records and transfer scope; review staff must answer the unwithdrawn request and specific deficits; authorized personnel staff must separately examine contact and whereabouts records. Project inventory is no custody receipt for items never received.',
     'Attach version handling and attribution from the saved decisions; explicitly mark unrecorded choices. Local saving or export is not delivery, official issuance or institutional acceptance. Confirm receiving arrangements, custody authority and personnel inquiry lawfully outside this site. A completed report does not imply someone has accepted the work.'
    ])},
    referral: {title:b('未尽复核转交稿','Referral draft for outstanding review'),text:p([
     '本地转交范围先行登记：已完成检查及其依据留存，最终判断待原有审计后列入，本人不签“全部事项已结”。当前依据为来源记录、外部核对与补充交接页，最后审计另附。接手者可沿用已成的有限成果，把工作落在未尽项目上。',
     '接手责任分别列明：材料保管岗位应核对原始载体与电子副本的关系，补查形成和移交记录；复核岗位应回答林澄未撤回的具体申请，列明缺项及继续审查的条件；有权限的人事核查岗位应独立核查联系记录与去向，不从项目状态推定人员命运。',
     '现有边界不可因转交抹掉：尚未获得人员认证的身份，不写成已证实的真人受害者；林澄三月后的去向未明，没有独立死亡证明；许闻舟离职和账号移除不是身体消失。不同删除状态按各自出处与对象记录，不合并为机器意志。',
     '转交包应含版本处理记录、署名摘要、已成结论和未尽事项，不只给下一位一句“请继续查”。本站不发送本稿，不保证受理，不提供实际接收岗位或凭证。后续须依法确认具体接收安排；确认之前，本稿状态仍是本地未发送，不能把责任写成已经交走。'
    ],[
     'Register local referral scope in advance. Retain completed checks and their grounds; add final findings after the original audit without signing everything closed. Current sources are provenance, outside checks and supplementary handover. Attach the final audit later. The next worker can use bounded results already established and focus on outstanding items.',
     'Assign duties separately: custody must check carriers against electronic copies and recover formation and transfer records; review must answer Lin’s unwithdrawn application with specified deficits and further-review conditions; authorized personnel inquiry must independently examine contact and whereabouts, not infer fate from project status.',
     'Referral does not erase boundaries: an unauthenticated identity cannot be written as a verified victim; Lin’s whereabouts after March remain unresolved without independent death proof; Xu’s resignation and account removal are not bodily disappearance. Record differing deletion statuses by their own sources and objects, not as combined machine intention.',
     'The package must contain version handling, attribution, findings and pending duties, not merely “please investigate.” This site sends nothing, guarantees no acceptance and provides no actual receiving office or receipt. Lawfully confirm arrangements later. Until then the draft remains local and unsent; responsibility has not already been handed away.'
    ])},
    notRecorded: {title:b('结尾范围：旧存档未选择','Closing scope: not chosen in the older save'),text:p([
     '原存档保留已完成技术进度，但没有记录报告或转交的程序选择。本文件不能代造玩家签过的报告，也不能宣布一次没有发生的转交。原结案展品仍按原有权限可阅。',
     '共同边界仍适用：技术事实、程序责任和人员去向分别列明；林澄死亡未有独立证明，许闻舟离职与账号状态不等于身体消失。后续工作必须附来源、保留版本，并依法另行确认接收与核查安排。'
    ],[
     'The older save retains technical progress without a report or referral choice. Invent neither a signed player report nor a referral that occurred. The original closing exhibit remains accessible under its original rules.',
     'Shared boundaries remain: separate technical facts, procedural duties and personnel whereabouts. Lin’s death has no independent proof; Xu’s departure and account status do not establish bodily disappearance. Follow-up requires citations, retained versions and lawfully confirmed receiving and inquiry arrangements.'
    ])}
   }
  },
  epilogue: {
   zh: [
    '目录整理好了。最早的勘误和后来修订分列，旁边带各自引用；摘要保留两种主张，没有写成“经讨论一致”。十月交接员划掉的那个勾仍在清单里。她曾想只留最后版，后来按许闻舟的要求全收了。文件因此稍厚一点，每次改动却能找到前一页，不必先追问哪版被抽走。',
    '许闻舟起初希望窗口有一页能用的答复，林澄要求那页说清自己的范围。他嫌说明厚，她担心脚注在转存中丢掉。九月他留下旧建议，明确收回结项使用，也留下她的异议。离职手续已办，待核清单仍按他所欠的工作保留。林澄三月后未再到岗，去向仍未明；封存称谓没有独立死亡证明。她的工作记录另有具体条目，能查到提出过的要求和坚持留存的版本。',
    '你的文件也保留了自己的处理过程。暂用关联索引的决定对应明确撤回与重新分类；暂存稿对应复审和继续核查义务。岗位摘要指回署名页，实名摘要同时列机构职责。技术报告带着未尽附页，转交稿列接手岗位须办的具体事；旧存档缺少的决定明写未记录。导出时，这些记录与正文一起带走，仍需另行确认真正的接收和保管安排。',
    '二月班次记录中的纸晾了一夜。许闻舟急着开会，林澄夹起湿纸一角，免得贴灯烤卷。第二天有人问采用依据，后面的说明页才被翻开。旧交接单还记着手套要晾干再收，钥匙不要拿走。你没有办法照看他们后来每一天的工作，只能把这一批材料留好：难装的旧版有位置，待查页不会因为封面要整齐就被移出清单。',
    '历史姓名作为加工形成的条目留存。林澄的申请、许闻舟的修订和交接员的清点分别归档；人员状态另列，去向不明的仍留待查。首页放已核结论，后面带上旧版和未尽事项。下一位从林澄那张窄格接着查，能直接找到对应材料。若要改你的说明，这一版也留着。'
   ],
   en: [
    'The catalog is arranged. The first correction and later revision have separate entries and citations. The summary retains distinct positions without writing “unanimously agreed.” The October worker’s crossed-out tick stays on the checklist. They considered retaining only the latest version, then received all versions as Xu requested. The file is slightly thicker, but each change leads back to an earlier page instead of requiring a search for what was removed.',
    'Xu initially wanted a reply the desk could use. Lin wanted its scope stated. He worried about thick explanations; she worried that footnotes would be lost in transfer. In September he retained his recommendation and explicitly withdrew its closing use, keeping her objection too. His resignation is complete; pending checks remain registered as work he owed. Lin has not attended since March and her whereabouts remain unresolved, with no independent death proof behind the sealed term. Her work has its own entries identifying her requests and the versions she asked to retain.',
    'Your file retains its disposition history too. Provisional indexing leads to explicit retraction and reclassification; holding leads to review and continuing duties. Roles refer back to signed sources, while named summaries still list institutional responsibilities. The report carries its pending annex; referral specifies receiving-role tasks. Choices absent from older saves are marked not recorded. Export these records with the body, then separately confirm actual receiving and custody arrangements.',
    'The paper in the February shift account dried overnight. Xu was hurrying to a meeting; Lin lifted the wet corner so it would not curl against the lamp. Next day a question about adoption grounds brought the supporting pages back out. The original handover still says to dry gloves before putting them away and leave the key. You cannot look after every later working day of theirs. You can retain this batch: awkward earlier versions have a place, and pending pages stay on the checklist even when the cover needs tidying.',
    'Keep the historical name as an entry formed in processing. File Lin’s request, Xu’s revision and the worker’s inventory separately. Personnel status has its own field; unresolved whereabouts remain unresolved. Findings go on the front, earlier versions and pending duties behind. A worker continuing from Lin’s cramped field can find the corresponding material directly. If they revise your explanation, this version remains available too.'
   ]
  }
 });
})();
