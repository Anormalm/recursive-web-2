/* ZEPHYR · supplemental campaign. Authored staff material is not independent historical corroboration. */
(() => {
 'use strict';
 const b = (zh, en) => ({zh, en});
 const p = (zh, en) => ({zh, en});
 window.ZEPHYR_STORY = Object.freeze({
  rev: 1,
  chapters: [
   {day:1,title:b('第一章 · 没交完的工作','Chapter 1 · Unfinished work'),question:b('你接下的是一份材料，还是替它作证的责任？','Are you taking on a file, or the responsibility of speaking for it?')},
   {day:2,title:b('第二章 · 名字已经填好了','Chapter 2 · The name was filled in'),question:b('几份材料说同一件事，就有几个证人了吗？','If several records say the same thing, does that make several witnesses?')},
   {day:3,title:b('第三章 · 修掉的部分','Chapter 3 · What repair removes'),question:b('一个能读的版本，能替原来的东西说多少话？','How much can a readable version say for the thing it came from?')},
   {day:4,title:b('第四章 · 退回的复核申请','Chapter 4 · The returned review request'),question:b('申请没有受理凭证，还欠哪些答复？','When a request gets no receipt, what answers are still owed?')},
   {day:5,title:b('第五章 · 索引外的人','Chapter 5 · People outside the index'),question:b('项目可以结项。项目里的人也能一起结掉吗？','A project can close. Can the people inside it be closed too?')},
   {day:6,title:b('第六章 · 你要签什么','Chapter 6 · What you will sign'),question:b('怎样把知道的交出去，又不替不知道的下结论？','How do you hand over what is known without ruling on what is not?')}
  ],
  exhibits: {
   nHandover: {
    day:1,anchor:0,title:b('交接清单背页：剩下哪一栏','Handover list, reverse: the field still open'),author:b('综合组交接员 · 未署名','General affairs handover worker · unsigned'),date:'2026-10-11',status:b('关闭前整理的补充工作页；不是原交接单的替换件','Supplementary working page assembled before closure; does not replace the original handover'),
    text:p([
     '接手的人：原交接单不动，原位放着。这是清单背页，别合订进去。原本是件小事：把首批登记、附件和修复说明归到一起，写清哪些能交、哪些还欠复核。别给我补一个正式职务。这几天我只是代收材料。',
     '周五清点，人人想先把件数填齐。我写了“交齐”，又划掉。文件夹确实都到了，可里面那页勘误没有签发人。有人说旧版还在，新版先拿来用也不亏。我说读的人不一定知道还有旧版。那一栏最后还是空着。',
     '林澄以前用蓝夹子标暂存件，许闻舟嫌颜色不好登记，另贴纸条写“待查”。两个人都对：夹子会褪色，纸条会掉。这回我把“待查”写进清单，不再靠夹子。桌边的椅子留宽些，两个人看同一页不用挤着站。',
     '你先接收材料，结论等核过再签。每次写工作意见，都带上实际看过的出处。你的回应只留在本地工作副本里，标作未发送。旧往来按原页日期读。这里没有人接收或回复新邮件。',
     '清单最后一页夹着一张旧库房卡片，纸比这批材料都薄。栏序和这张清单一模一样，持有人那栏也空着。卡片没写年代，只盖了“第三次重装”。林澄二月看过，说先别当新材料登记。她当时的神情，像是以前见过。'
    ],[
     'To the next worker: leave the original handover note where it is. This is the back of the checklist; do not bind it in. The job was meant to be small: bring the first registry, its attachments and the repair notes together, and say what can be handed over and what still needs checking. Do not give me an official title. I am only taking receipt of materials this week.',
     'At Friday’s count everyone wanted the item total settled first. I wrote “complete,” then crossed it out. The folders had all arrived, but one correction inside had no issuing signature. Someone said the old version was still there, so using the new one cost nothing. I said the reader might not know an old version existed. That field stayed empty.',
     'Lin Cheng used blue clips for pending work. Xu Wenzhou said colours were hard to register and added slips marked “to check.” Both were right: clips fade, slips fall off. This time I put “pending” in the list itself. Leave the chair beside the desk wide enough for two people to read one page without standing on each other.',
     'Receive the material first; sign findings after checking. Attach a source you have actually looked at to every working opinion. Your replies stay in the local copy, marked unsent. Read old exchanges by the date on the page. No one here receives or answers new mail.',
     'A card from the old store is clipped to the last page of the checklist. Its paper is thinner than anything in this batch. The columns match this sheet exactly, and the holder field is empty too. The card has no date, only a stamp: THIRD REBINDING. Lin saw it in February and said not to register it as new material. The way she looked at it, she had seen it before.'
    ])
   },
   nCorrection: {
    day:1,anchor:1,title:b('未签发的勘误与两次回批','Unsigned correction with two replies'),author:b('林澄、许闻舟 · 恢复的工作往来','Lin Cheng and Xu Wenzhou · recovered working exchange'),date:'2026-02-05',status:b('早期往来摘录；十月结项整理时归入补充材料','Early exchange excerpt; filed as supplementary material during the October closing inventory'),
    text:p([
     '未签发勘误稿里拟了一句：“本工作版暂将人员附件列作登记材料的关联索引，供继续查阅；尚未取得人员原始登记，不作身份认证。”上一稿只把前半句写进正文，待核那句塞在脚注。林澄上午回批：这不是改错字，脚注会被漏掉。两句并排放在首页，旧批次记录也留着。我同意做工作版，不同意叫定稿。',
     '许闻舟，午后一点四十分：窗口已经问了三次。我可以在首页写“暂用，待核”，不必等整批退回来。我知道签个字解决不了，可现在没人接这一栏，下一班还是会照旧版抄。总得给他们一个不那么错的版本。',
     '林澄，两点零六分：那就把谁暂用、凭什么、什么时候重看，一起写上。你在给下一班省事，也把一部分麻烦推给他们。我不反对先做。我反对把暂时做的事写成早就成立的事。',
     '许闻舟，两点二十三分：同意保留旧件。签发格我空着，另存一份工作说明。蓝夹子别收，我还没对完。附记：本页没有签发；这些往来只记两人当时的主张，不认证登记身份。'
    ],[
     'Proposed sentence in the unsigned correction: “This working version provisionally lists the personnel attachment as a related registry index for further consultation; no original personnel registration has been obtained and no identity is authenticated.” The draft before it put only the first half in the body and buried the qualification in a footnote. Lin’s morning reply: this is not a spelling fix. A footnote gets missed. Put both sentences on the front and keep the batch records. I agree to a working version, not a final one.',
     'Xu, 13:40: The desk has asked three times. I can write “temporary use, pending check” on the front instead of sending the whole batch back. A signature will not solve it, I know, but if nobody takes this field, the next shift copies the old version again. They need something less wrong to use.',
     'Lin, 14:06: Then write who is using it for now, on what grounds, and when it gets looked at again. You are saving the next shift trouble and handing them some trouble too. I do not object to starting. I object to calling a temporary act something long settled.',
     'Xu, 14:23: Agreed, keep the old material. I will leave the issuing field empty and save a separate working note. Leave the blue clip; I have not finished checking. Note: this page was never issued. The exchange records what the two of them argued at the time, not a certified registry identity.'
    ])
   },
   nName: {
    day:2,anchor:2,title:b('人员附件核对工作纸','Personnel attachment checking sheet'),author:b('林澄 · 工作草稿，许闻舟边注','Lin Cheng · working draft, marginal notes by Xu Wenzhou'),date:'2026-02-11',status:b('近现代工作人员的核对记录；不是新增的历史人员登记','Modern staff checking record; not a newly discovered historical personnel entry'),
    text:p([
     '林澄：那份人员附件我单独放出来了。现在能说的是“附件上有一个姓名条目”，不能说“我们找到了一名当年的记录员”。第一句拗口，第二句好写，也好传。窗口昨天把第二句抄进了答复，我去请他们改回来。对方问：改完，读者会不会觉得我们什么都没做。',
     '我们做的事不少。做事多，和找到了这个人，是两回事。我没查到原始人员登记。查不到不等于没这个人，可我也不能用一段编出来的生活去填这个空。我连他几点上班都不知道，更不该写他最后出现在哪里。',
     '许闻舟边注：我起初嫌她太小心。好几份抄件都有这条，格式也一致。我说可以先当索引入口用。她把“入口”圈出来，问入口后面有没有独立材料。没有的话，我们只是给读者多开一扇回到原处的门。',
     '林澄末行：先找材料，看附件的解释站不站得住，别替它把故事讲完。今天先核机构和地方。地点能核实，挂在地点上的每个人还得另查。'
    ],[
     'Lin: I have put the personnel attachment out on its own. What we can say now is “the attachment contains a name entry,” not “we found a registrar from that period.” The first sentence is awkward. The second is easy to write and easy to pass on. Yesterday the desk copied the second into a reply. I asked them to change it. They asked whether readers would think we had done nothing.',
     'We have done a great deal. Doing a great deal and finding this person are two different things. I found no original personnel registration. Not finding it does not prove the person never existed, but I cannot fill that gap with an invented life. I do not even know what hours they worked. I certainly cannot write where they last appeared.',
     'Xu’s margin: At first I thought she was too careful. Several copies carried the entry, in the same format. I said we could use it as an index entrance. She circled “entrance” and asked what independent material stood behind it. If none did, we were only opening readers another door back to the same place.',
     'Lin’s last line: Find material that tests the attachment’s reading, not material that finishes its story. Check the institution and the place today. A verified place does not verify every person attached to it.'
    ])
   },
   nReels: {
    day:2,anchor:4,title:b('给双卷比对留的空栏','The empty field reserved for the reel comparison'),author:b('许闻舟、林澄 · 会前工作记录','Xu Wenzhou and Lin Cheng · preparatory working record'),date:'2026-02-13',status:b('引用既有采样工作的讨论；不增加一份独立录音','Discussion of existing sampling work; does not add an independent recording'),
    text:p([
     '许闻舟：地方核完，我以为至少能把附件的范围写清。林澄认地点那一项，说录音另算。我又讲，两卷都附在这批材料后面，不就已经互相支持了。她没接话，把我的句子抄到空白页上，标题写“等待比对”。',
     '林澄：你把“有两份文件”和“有两次记录”当成一回事了。上次暂停上线以后，这一项还没重新签过。先别拿它给人员附件补证据。我想知道比对说明靠的是哪一层材料，从那儿还能不能查回载体。纸条只记了有人怎么安排工作，不等于又一个人听过声音。',
     '许闻舟：开会前我得交一页说明。那页空着，人家就要问这个月到底做了什么。她说，把做过的写上，没做完的也写上，就是一页。我觉得她不懂窗口的难处。后来发现她把对方可能问的四个问题都写在背面，连“暂缓以后读者怎么办”都写了。',
     '林澄给窗口的末句：现有材料照常可阅，别把还待查的独立性写成已经证实。也别再换标题绕开这一项。附记：本页只记分歧和待办；双卷的技术结果仍要由原材料来检验。'
    ],[
     'Xu: Once the place was checked, I thought we could at least set the attachment’s scope. Lin accepted the place but said the recordings were a separate matter. I said both reels were attached to this batch, so were they not already supporting each other. She said nothing, copied my sentence onto a blank page and headed it “Awaiting comparison.”',
     'Lin: You have turned “two files” and “two recordings” into one thing. This item has not been signed off again since the earlier suspension. Do not use it to prop up the personnel attachment yet. I want to know which layer of material the comparison rests on, and whether the carrier can still be traced from there. A slip shows how someone arranged the work. It is not a second person who heard the sound.',
     'Xu: I owed the meeting a one-page note. Leave it blank and they ask what we did all month. She said to write what we did and what we did not finish; that makes a page. I thought she did not understand the desk’s position. Then I found she had written their four likely questions on the back, including what readers do during the hold.',
     'Lin’s closing line to the desk: Keep the existing material readable. Do not call pending independence verified. Do not change the title again to dodge this item. Note: this page records disagreement and outstanding work only. The original materials still govern the technical comparison.'
    ])
   },
   nSession: {
    day:3,anchor:6,title:b('修复班次记录：先留什么','Repair shift record: what to retain first'),author:b('林澄 · 当班草稿，许闻舟回批','Lin Cheng · shift draft, reply by Xu Wenzhou'),date:'2026-02-19',status:b('林澄三月未到岗之前的工作材料；非当前通信','Working material from before Lin’s absence in March; not current correspondence'),
    text:p([
     '林澄：今天不换那张底纸。旧版边注不能用了，我另写勘误附上，不擦旧字。仪器编号、纸上的记法、修复时采用的约定，分开登记。读法整理好，后面留对应的依据页，改动记在哪一层也写上，下一位问起才查得到。',
     '许闻舟：这样一来，每交一页就带三页，库房说厚得装不下。我建议把说明缩成一张。林澄说可以缩，但不能把几个人的判断缩进一个人的签名。她让我先写一段。我写“经修复确认”，她改成“本工作版本采用”，把笔递回来，让我自己落款。',
     '午后三点，开水房没热水。她把保温杯推过来。我说还要去开会，没喝。她说不是让你喝，是别把杯子放在稿纸上。杯底那圈水印到晚上还没干。我把湿页摊在椅子上，她用蓝夹子夹起一角，说别贴着灯烤，纸会翘。',
     '许闻舟末记：后来我把三页都留了。会上的人只拿第一页。第二天有人问我为什么采用这一版，我才知道后两页不多余。附记：这些生活细节出自班次记录，编者不把它算作独立的现场见证；修复方法以当时的原件和勘误为准。'
    ],[
     'Lin: Do not change the backing sheet today. The old margin no longer applies, so I will attach a separate correction and leave the old words alone. Register the instrument numbers, the marks on the paper and the repair conventions separately. Once the reading is ready, keep the matching source pages behind it, and record which layer each change belongs to. The next worker needs to find it.',
     'Xu: That means three pages behind every page we hand over. Storage says the folders will not take it. I suggested cutting the note to one sheet. Lin said we could shorten it, but not press several people’s judgments into one signature. She asked me to draft a line. I wrote “confirmed by restoration.” She changed it to “adopted in this working version,” handed back the pen and told me to sign it myself.',
     'At three there was no hot water. She pushed her flask over. I said I had a meeting and did not drink. She said it was not for drinking; it was so I would stop putting the flask on a draft. The ring under it was still wet that evening. I laid the wet page on a chair. She clipped one corner up and said not to dry it against the lamp, or the paper would curl.',
     'Xu’s last note: I kept all three pages in the end. The meeting took only the first. The next day someone asked why I had adopted that version, and I realised the other two were not spare. Note: these details come from the shift record. The editor does not count them as independent eyewitness evidence. Repair practice is still governed by the originals and their correction.'
    ])
   },
   nMargins: {
    day:3,anchor:9,title:b('一份能读的稿，两个署名栏','One readable draft, two attribution fields'),author:b('林澄、许闻舟 · 摘要修订页','Lin Cheng and Xu Wenzhou · summary revision page'),date:'2026-02-24',status:b('修复摘要的署名分歧；不是录音原文的新增部分','Disagreement over summary attribution; not additional content from the original recording'),
    text:p([
     '林澄：你把“林澄要求保留原始载体”改成了“修复组要求保留原始载体”。请改回来。以后有人问为什么延期，得找得到是谁提的。我的理由要是有错，这一行也能直接找到我和当时的依据。只写组名，看不出是谁下的判断。',
     '许闻舟：我不是想把你拿掉。我想让这事变成组里的责任，不让你一个人被问来问去。可我也把自己那行“同意先用工作版”改成了组里意见，等于省掉了我自己的解释。你那行和我那行该一样处理。不能只在要担责的地方写你。',
     '林澄：你可以不同意，把理由写在后面。别替我写“经讨论一致”。昨天不一致，今天也不一致。她在页尾加了一格“保留的分歧”，挤得很窄。许闻舟重打了一张，窄格没删，说还是让人看见当初为什么装不下。',
     '结项整理附记：两人的签名只代表各自的工作主张。这张补充页不能证明旧录音里的说话人是谁。后来的工作摘要可以用实名，也可以用岗位，但都得引用这份原始署名页。别写岗位标注让公开原件变成了匿名。'
    ],[
     'Lin: You changed “Lin Cheng requests retention of the original carriers” to “the repair group requests retention.” Change it back. Later, when someone asks why this was delayed, they need to find who asked for it. If my reasons turn out wrong, that line should lead straight to me and to what I relied on. A group name does not show who made the call.',
     'Xu: I was not trying to remove you. I wanted the responsibility to sit with the group, so you would not face every question alone. But I also turned my own line, “agree to use the working version first,” into a group view. That saved me my own explanation. Your line and mine should be handled the same way. You cannot appear only where someone has to carry blame.',
     'Lin: You can disagree. Put your reasons after mine. Do not write “unanimously agreed” for us. We were not agreed yesterday, and we are not today. She squeezed a “disagreement retained” field into the footer. Xu printed another sheet but kept the cramped field, saying people should see why the first layout did not fit.',
     'Closing note: each signature belongs only to that person’s position. This supplementary page cannot establish who spoke on the old recording. A later summary may use names or roles, but it must cite this signed page. Do not write as if role labels made public originals anonymous.'
    ])
   },
   nRefusal: {
    day:4,anchor:10,title:b('退回的复核申请：缺哪一项','Returned review request: which item is missing'),author:b('林澄申请；经办岗位回批，个人未署名','Request by Lin Cheng; reply from the handling office, individual unsigned'),date:'2026-02-27',status:b('三月以前的申请及退回件；未署名回复不等于没有经办程序','Request and return from before March; unsigned reply does not establish absence of a handling process'),
    text:p([
     '申请：请把材料的形成时间、加工时间和开放时间分开复核。现在的摘要把三个日期并成了一个。我不是要求把整批材料撤下，只是请先别用一个日期替所有来源作担保。附件里几个判断各自需要对应的加工记录，不能拿同一份摘要互相证明。',
     '回批：现有材料不足以启动专项复核，请补齐原始材料和对应登记后再报。已开放卷宗暂按现状维护。这段话写在“经办意见”栏，个人署名栏空着。哪份附件不足，页上没说；补交以后什么时候受理，也没写。',
     '林澄未发出的补充：我要查的正是缺失的材料为什么被写成齐备。如果必须先交齐才准查，那缺失本身就永远成不了问题。申请我可以缩小，但请告诉我缺的是哪一项。别替我把“要求复核”改成“待补后自行撤回”。我没有撤回。',
     '许闻舟次日边注：我劝过她改成一般咨询，那样好走一些。她说标题可以改，事实不能改。这条建议也留在这页上。原件我没替她找到。把语气改软，不等于申请办成了。此件没有后续受理凭证。'
    ],[
     'Request: review the dates of formation, processing and release separately. The present summary merges all three into one. I am not asking to withdraw the whole batch. I am asking that one date stop standing surety for every source. The judgments in the attachment each need their own processing record; one summary cannot vouch for them all.',
     'Reply: the material is insufficient to open a special review. Supply the originals and their registrations, then resubmit. Open files will be maintained as they are. The reply sits in the “handling opinion” field; the personal signature line is empty. It does not say which attachment is deficient, or when a completed submission would be accepted.',
     'Lin’s unsent addition: what I want to know is why missing material was written up as complete. If everything must be supplied before anyone may ask, the absence can never become a question. I can narrow the request. Tell me which item is missing. Do not change “review requested” into “withdrawn pending supplementation.” I have not withdrawn it.',
     'Xu’s margin, next day: I suggested turning it into a general enquiry, which usually moves faster. She said the title could change, the facts could not. Keep my suggestion on this page too. I did not find the originals for her. Softening the wording is not the same as completing the request. No later acceptance receipt survives with this file.'
    ])
   },
   nCustody: {
    day:4,anchor:12,title:b('数字保管附记：通知不是物品','Digital custody note: a notice is not the item'),author:b('综合组数字材料整理员 · 未署名','General affairs digital-materials compiler · unsigned'),date:'2026-09-29',status:b('结项时对取件记录的回顾；不是实体纸张上的信，也不是现场见证','Closing-period review of pickup records; not a letter on the physical sheet or an eyewitness account'),
    text:p([
     '整理取件材料的人，别把这一页打印出来叫“原件”。这一页记的是数字档案怎么登记一份取件通知。通知说有一张纸，纸上只印了二维码。本附记没见过那张纸，也不会往上面添字。谁去交接的、什么时候交接的，这里没有独立签收单。',
     '上一版清单把“取件通知已存”勾在“物品已交”底下。我把这个勾挪到“通知副本已交”，原来那笔另存。挪一格证明不了东西还在，也证明不了谁去过，更代替不了实地核对。以后要核，就在核过的范围里记，别把一个客户端状态写成一段现场经过。',
     '转录林澄早期的工作边注，原页标着2026年2月：没见到材料，就别替它写手感、折痕和纸背。许闻舟整理时在旁边补了一句：这话对我们适用，对后来的整理员也适用。两条都是工作要求，不是保管证明。',
     '还欠的事：把通知写了什么、实际核对又确认了什么，分开对照；保存数字出处；没有签收证明的部分单列。“未数字化”不会自动变成“独立可靠”。这一步得你实际去核，数字副本替不了。'
    ],[
     'If you are compiling pickup material, do not print this page and call it “the original.” It records how the digital archive registers a pickup notice. The notice speaks of a sheet with only a QR code on it. This note has not seen the sheet and will not add words to it. Nothing here is an independent signed receipt showing who collected it or when.',
     'The previous checklist ticked “pickup notice stored” under “item delivered.” I moved the tick to “notice copy delivered” and kept the old mark separately. Moving a tick proves neither that the item is still there, nor that anyone went, nor that physical checking happened. Later checking goes in its own scope. Do not turn a client status into an account of a visit.',
     'Transcription of an early margin by Lin, on a page marked February 2026: until you have seen the material, do not describe its feel, its folds or its reverse. Xu added while compiling: this applies to us and to whoever compiles after us. Both lines are working rules, not proof of custody.',
     'Still owed: compare what the notice describes with what actual checking confirms; keep the digital source; list separately anything lacking a signed receipt. “Not digitized” does not quietly become “independently reliable.” Someone has to go and check. A digital copy cannot do that part.'
    ])
   },
   nVersions: {
    day:5,anchor:14,title:b('许闻舟留存的两版说明','Two explanations retained by Xu Wenzhou'),author:b('许闻舟 · 对本人旧稿的修订','Xu Wenzhou · revision of his own earlier draft'),date:'2026-09-19',status:b('离职前留存的版本说明；不替来源日志作技术结论','Version note retained before resignation; not a substitute for a technical provenance finding'),
    text:p([
     '旧稿里有一句：“材料已由多项比对支持，可以作为结项说明。”当时这么写，是想让窗口有个简短答复。现在我把“可以作为结项说明”收回。别把整份旧稿删掉。删了，看的人会以为我从没说过那句话。',
     '林澄二月给我的回批还在。她问，每一项比对到底接在哪个原件上。我先回“正在补”，后来缩成了“见附件”。附件就是那几张工作页，原件并没有多出来。她那句话我当时就听懂了，还是这么写了。这一项没做完，记在我名下。',
     '她也改过边注，有几个假设还挂着没查。整理她的意见时，把改动和原来的依据放在一起。我的旧稿、她的异议、我们各自后来的修改，都要能查回去。下一位才判断得了哪一条还站得住，不用只信谁的最后版。',
     '这次修订只收回我给过的使用建议。事实判断还得跟对应的来源记录核对。几份清单的件数先不合并：日期、范围、单位都不一样，也别急着说哪一份“造假”。蓝夹子最后夹在旧稿上，新稿另立一条版本。',
     '林澄二月把旧库房的卡片摊在我桌上。1986 年的移交清单、1946 年的批次单，栏位一样。她又从外馆目录里抄回几行：尼普尔的泥板、雅典的石刻、汉代木牍、巴格达的税册，空栏也一样。馆里最老的藏品卡只写“第三次重装”，年代栏空着。她说，不是我们抄错了，是这张表一直被人抄。我当时没接话。现在把这句话留在这里。'
    ],[
     'A line from my earlier draft: “Several comparisons support the material; it may be used in the closing statement.” I wrote it to give the desk a short answer. I now withdraw “may be used in the closing statement.” Do not delete the whole old draft. If you do, a reader may think I never wrote it.',
     'Lin’s February reply is still here. She asked which original each comparison actually reached. I said I was supplying them, then shortened that to “see attachments.” The attachments were the same working sheets. No originals appeared. I understood her question at the time and wrote it that way anyway. The unfinished item is under my name.',
     'She revised margins too, and some hypotheses are still unchecked. When you file her comments, keep the changes beside the earlier grounds. My draft, her objections and our later revisions all need to stay traceable. The next worker can then judge which position still holds without trusting anyone’s last version.',
     'This revision withdraws only the recommendation I gave. The factual judgments still need checking against their source records. Do not merge counts from different inventories yet: their dates, scopes and units differ. And do not rush to call one of them “faked.” The blue clip ended up on the old draft; the new draft has its own version line.',
     'In February Lin spread the old-store cards across my desk. The 1986 transfer list and the 1946 batch sheet had the same columns. She had also copied lines from outside catalogues: a Nippur tablet, an Athenian stone, Han wooden slips, a Baghdad tax register — the blanks matched too. The oldest holdings card says only “third rebinding”; its date field is empty. She said we had not copied it wrong — the form had been copied, again and again. I did not answer then. I am leaving the sentence here now.'
    ])
   },
   nDeparture: {
    day:5,anchor:17,title:b('离职交接里的待办页','Outstanding-work page in the resignation handover'),author:b('许闻舟 · 离职前起草，离职后留存边注','Xu Wenzhou · drafted before resignation, retained annotation after leaving'),date:'2026-09-21（草稿始于2026-09-19）',status:b('关闭前已恢复的离职材料；不是离职后的实时回复','Departure material recovered before closure; not a live reply after resignation'),
    text:p([
     '我九月二十日办离职。手续和研究结论不是一张表。人事那张我签了，材料那张没写“无未尽事宜”。系统不再给我账号，不等于没做完的活也能一起清掉。我离开岗位，不等于我写过的批注就没有作者了。',
     '三月以后，我没拿到任何能说明林澄去向的材料。岗位调整说明只记未到岗和联系不上，没记她后来在哪。有人问我，既然结项了，这一行是不是也能关。我说项目那一栏关了，人那一栏不能跟着打同一个勾。',
     '交接员让我把“待查”都排到后面，说前面看着整齐些。我照做了，又在首页写“后有未尽事项”。她看了一遍，说这等于没排。我说对，就是要让翻第一页的人也知道。她没再删，把椅子挪开，给我腾出放两版纸的地方。',
     '九月二十一日边注：林澄的异议留着。我没资格替她删，也答不了。交给下一位时，把前后两版都带上。她提的问题和我欠的核对还在待办页上，别拿我的离职手续把它们结掉。'
    ],[
     'I finished my resignation on 20 September. Personnel procedure and research conclusions are not one form. I signed the personnel sheet. On the materials sheet I did not write “no outstanding matters.” Losing my account must not clear unfinished work. Leaving a post does not make my notes authorless.',
     'Since March I have received nothing that shows where Lin Cheng is. The reassignment note records nonattendance and failed contact. It does not say where she went. Someone asked whether that line could close too, now the project was closing. I said the project field can close; the person field cannot get the same tick.',
     'The handover worker asked me to put all pending items at the back so the front looked tidy. I did, and added “outstanding matters follow” on the first page. She read it and said that defeated the point of sorting. I said yes, that was the point: whoever opens page one should know. She left it and moved the chair to make room for both versions.',
     'Note, 21 September: keep Lin’s objections. I have no standing to delete them and no way to answer for her. Pass both versions to the next worker. Her questions and the checks I owe are still on the pending page. My resignation paperwork does not close them.'
    ])
   },
   nAudit: {
    day:6,anchor:18,title:b('结项复核的范围栏','Scope field for the closing review'),author:b('综合组复核整理员 · 未署名','General affairs review compiler · unsigned'),date:'2026-10-08',status:b('结项后的范围说明；不提前代开封存原件','Post-closing scope note; does not open or replace the sealed original'),
    text:p([
     '这页放在最终审计前面，代替不了审计。三件事分开写：材料的技术结论、工作处理得妥不妥、有关人员的去向。技术结论做完了，也不会自动填满后两栏。签结项说明的时候，写清签的是哪一栏。',
     '许闻舟留下的修订说明能证明他收回过自己的使用建议，但单凭它证不了每条旧材料是怎么形成的。林澄的申请能证明她提过申请，证不了里面每一个怀疑。综合组的移交清点只算收到的电子材料，不会替从没入库的载体开接收证明。',
     '清单上有几处署名栏是空的。空着就让它空着，已有的经办文字照留。空栏的原因可能很多，材料里没指明是哪一个。别为了让结项表好看就填一个人，也别因为填不出人就写“系统自行决定”。',
     '后续责任要写成能办的事：材料保管岗位核对形成和移交记录，复核岗位处理异议，有权的人事岗位另查联系记录。这里的工作副本不往任何岗位发材料，没有联系人，也没有可用的投诉渠道。下一位得在本站之外依法确认谁来接收。',
     '旧库房最底层还有一册线装登记簿，重装过三次。栏序、七组索引、缺持有人栏，和 1946 年这张一样。年代页被裁掉，只剩馆里最老的藏品卡写着“第三次重装”。林澄从外馆目录抄回的几行更早：尼普尔的泥板、雅典的石刻、汉代木牍、巴格达的税册。技术比对只能说明格式相同，证不了谁抄了谁。CORE-17 有人读作目录编号，也有人读作这一格式的第十七次登记；两种读法都还没有原始著录。'
    ],[
     'Put this page before the final audit; it does not replace the audit. Keep three things apart: the technical findings, whether the handling was sound, and where the people went. Finishing the first does not fill the other two. If you sign a closing statement, say which field you are signing.',
     'Xu’s retained revision shows that he withdrew his own recommendation. On its own it cannot show how each old item was formed. Lin’s request shows that she asked for a review, not that every suspicion in it was true. The general affairs transfer count covers electronic material actually received. It cannot issue a receipt for a carrier that never entered the archive.',
     'Several signature fields are blank. Leave them blank, and keep the handling text that is there. There may be many reasons; our material names none. Do not fill in a person to make the closing form look complete, and do not write “the system decided” because no name can be found.',
     'Write the follow-up as things someone can do: custody staff check formation and transfer records; review staff handle the objections; personnel staff with authority examine contact records. This working copy sends nothing to any office. It carries no contact and no working complaints channel. The next worker must find a lawful receiving arrangement outside this site.',
     'At the bottom of the old store is a thread-bound register, rebound three times. The column order, the seven-group index and the missing holder field all match the 1946 sheet. The date page has been cut out; only the oldest holdings card says “third rebinding.” The lines Lin copied from outside catalogues are older: a Nippur tablet, an Athenian stone, Han wooden slips, a Baghdad tax register. Technical comparison can show a shared form, not who copied whom. Some read CORE-17 as a directory number; others as the seventeenth registration in this format. Neither reading has an original description.'
    ])
   },
   nLastNote: {
    day:6,anchor:19,title:b('最后交接页的末栏','The last field on the final handover page'),author:b('综合组交接员；附林澄早期工作便签转录','General affairs handover worker; transcription of an earlier working slip by Lin'),date:'2026-10-11（附记原页标为2026-02-26）',status:b('当前可见的是十月整理页；所附林澄文字属于三月以前，不证明她后来仍在岗','Visible page compiled in October; Lin’s attached text predates March and does not establish later attendance'),
    text:p([
     '交最后一批材料时，我一直在数袋子。数完才发现，有一袋装的全是同一份说明的旧版。我起初想只留最后一版。许闻舟在清单上特意写了不删，我就照单收了。后来翻到林澄那格窄窄的分歧栏，才明白旧版为什么也得留个位置。',
     '转录林澄早期便签：先交工作版，就在首页写清它替不了什么。别等别人问出错来，再翻旧件证明我们早就知道。我愿意在自己的判断下面签名，不替别人没做的核对签。不同意我的，另写一张；别把我那句删到没人知道曾有人反对。',
     '十月整理员续记：便签原页标的是二月，这里是转录。原岗位说明记的是三月起未到岗。整理的日期不是她后来活动的日期，这张便签也定不了她最后一天。要用更肯定的说法，得另找依据核过。',
     '空的签发格我留在首页，“尚欠”放在翻得到的地方。手套晾干了，放回左边抽屉。钥匙我没拿。旧版都按清单留着，下一位不用先找哪页被抽走；待查的事还在原来那栏。'
    ],[
     'While the last batch came in, I kept counting bags. Only afterwards did I notice one bag held nothing but earlier versions of the same explanation. My first thought was to keep the last one. Xu had written on the checklist that nothing was to be deleted, so I took them as listed. Then I found Lin’s cramped disagreement field and saw why the old versions needed a place too.',
     'Transcription of Lin’s early slip: if you hand over a working version first, say on the front what it cannot stand in for. Do not wait until someone finds an error, then produce the old material to show we knew all along. I will sign under my own judgment, not under checks someone else did not do. If you disagree, write it on another sheet. Do not delete my line until no one knows there was a disagreement.',
     'October compiler’s continuation: the slip is marked February; this is a transcription. The personnel note records nonattendance from March. The compilation date is not a date of her later activity, and this slip cannot fix her last day. Any stronger description needs its own checked grounds.',
     'I left the empty issuing field on the front and put “still owed” where it can be found. The gloves are dry and back in the left drawer. I did not take the key. All earlier versions stay on the checklist, so the next worker does not have to start by working out which page was pulled. Pending items remain in their fields.'
    ])
   }
  },
  scenes: [
   {
    id:'c1-assignment',day:1,anchor:0,phase:'entry',title:b('先接收，不先签发','Receive it before issuing it'),purpose:b('引用交接材料，登记你先承担哪一项检查；这不是对尚未检查的卷宗作认证。','Cite the handover material and record the check you take on first; do not certify an unexamined file.'),
    text:p([
     '综合组原以为，这份交接说明一个下午就能整理完。文件夹摆齐了，清单也打好了。你接过这张工作台，要把首批登记和修复材料编成下一班能用的说明。原有记录和后期整理件分开摆。没有签发依据的地方，先留在待查栏。',
     '清单上“附件完整”那一格没打勾。交接员在背页解释：文件都在，可一份没有签发人的工作版正被当成能用的版本。文件收齐了，使用依据未必齐。你要是只看封面就写“材料齐备”，下一位分不清你说的是件数，还是内容已经核过。',
     '桌边空出的地方刚好并排放两页，记录和说明可以对着看。你接下来读到的往来，都是关闭前找回的材料，日期照原页登记。你今天写的回应只存成本地草稿，不发送，跟当年的会议记录分开，也不改当年作过的决定。',
     '先在工作单上记下没完成的签发和待查材料，附上交接出处。清单里把原记录、工作副本、补充说明分开，接收情况和核查情况各记一栏。交接员留下的空栏先不补签。等有实际依据说明它覆盖什么，再谈能不能用。',
     '下一步查首批登记和它的批次材料。那份工作版借了登记的哪些内容，登记本身又管到哪些对象，先弄清楚。然后回这张清单：核过的有地方写，没核的也不会被同一个勾盖过去。'
    ],[
     'General affairs thought this handover note would take an afternoon. The folders were out and the checklist printed. You take over the desk and prepare the first registry and repair material for the next shift. Keep old records apart from later compilations. Where there is no issuing basis, leave the item pending.',
     '“Attachments complete” is not ticked. On the back the worker explains: the files are all here, but an unsigned working version is already being used. Receipt is complete; the grounds for use may not be. Write “materials complete” from the cover alone, and the next worker cannot tell whether you counted files or checked them.',
     'The space beside the desk takes two pages side by side, so a record and its explanation can be read together. Every exchange you are about to read was recovered before closure; dates stay as printed on the page. What you write today stays as a local unsent draft, kept apart from the old meeting record, and changes none of its decisions.',
     'Start the work sheet with the unfinished issuing and the material still to check, and cite the handover. In the inventory, separate original records, working copies and supplementary notes, and record receipt and checking as different things. Leave the worker’s blank field unsigned until actual grounds show what it covers.',
     'Next, examine the first registry and its batch material. Establish what the working version borrowed from the registry, and what the registry itself covers. Then come back to the checklist: a finished check has somewhere to go, and an unfinished one will not be hidden under the same tick.'
    ]),sources:['nHandover','aRegistry'],fixedSources:['nHandover'],options:[
     {id:'record',label:b('附交接出处，登记未尽签发与待查材料','Attach handover sources; record unsigned work and material pending check'),note:b('收下材料不等于认可内容。原记录和工作副本分开记。','Receiving material does not mean approving it. Record originals and working copies separately.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c1-reconcile',day:1,anchor:1,phase:'after',title:b('一张干净的封面还不够','A clean cover is not enough'),purpose:b('把已检查的登记或批次材料附到勘误问题，记录目前能支持的范围。','Attach the examined registry or batch material to the correction question and record what it currently supports.'),
    text:p([
     '第一份登记查完了。工作清单上可以写“完成一次登记核对”，但整份修复说明还不能跟着一起标完成。你刚才是靠材料认出了记录，后来附上的那些说明还得另核。交接表却只有一个“已核”格，好像一格能装下两件事。',
     '未签发勘误的回批给这一格定了条件。许闻舟想给窗口一个能先用的版本。林澄要求写明谁暂用、凭什么、什么时候重看。两个人都想过窗口的难处，也都同意留下旧件。分歧是：暂用的说明怎么把没做完的部分一起交给下一班。',
     '蓝夹子标过待查，许闻舟又贴了纸条，清单上却没写状态。夹子会掉，纸条也会掉，下一位需要一条查得回去的记录。旧件放在哪儿照记，新版用到哪一步、凭什么用，另记一笔。封面整齐，或者留着加工痕迹，都判断不了哪版更接近原始记录。',
     '在已查栏记下这次核对，写明只覆盖登记这一项，勘误仍算未签发。另开一栏，写使用资格还没着落。这样读者能回到许闻舟提的那份具体工作版，看它借了哪些材料。以后不管采用还是暂存，都有一笔有限的核对可引。',
     '这段记录要带上登记、批次或往来的出处。下一份附件讲机构关系，能说明登记该放在哪儿，补不出签发人。查过它，再决定这份说明能不能暂用。林澄留下的两页、许闻舟空着的签发格，都跟这一轮一起留着。'
    ],[
     'The first registry is checked. You can write “one registry check completed” on the work sheet, but not mark the whole repair note finished with it. You recognised the record from its material; the notes attached later still need their own check. The handover form has one “checked” box, as if it could hold both.',
     'The replies to the unsigned correction set conditions for that box. Xu wanted a version the desk could use now. Lin wanted the user, the grounds and the review date written down. Both had the desk’s difficulty in view, and both agreed to keep the old material. They split on how a provisional note should pass its unfinished parts to the next shift.',
     'Lin’s blue clip marked pending work; Xu added a paper slip; the checklist recorded no status. Clips fall off and slips get lost. The next worker needs an entry they can trace. Record where the old material sits, and separately note how far the new version was adopted and on what grounds. A tidy cover, or marks of handling, cannot show which version is closer to the original.',
     'In the checked field, record this check as covering the registry only, and mark the correction still unissued. Open a separate field for its authority to be used. A reader can then go back to the particular version Xu proposed and see what it borrowed. Any later decision to use or hold it has this limited check to cite.',
     'Cite a registry, batch or exchange source. The institutional attachment comes next. It shows where the registry belongs; it does not produce an issuer. Check it before deciding whether this note can be used provisionally. Keep Lin’s two pages and Xu’s empty signature field with this round.'
    ]),sources:['nHandover','nCorrection','aRegistry','aBatchA','aBatchB'],fixedSources:['aRegistry','nCorrection'],options:[
     {id:'record',label:b('附登记核对依据，标明勘误仍未签发','Attach registry-check grounds; mark the correction as unissued'),note:b('这一轮只做完登记核对。勘误能不能用，另说。','This round finishes the registry check only. Whether the correction may be used is still open.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c1-disposition',day:1,anchor:2,phase:'after',title:b('把“暂时”写在首页','Put “temporary” on the front'),purpose:b('引用勘误与已核材料，决定本地工作说明如何处理这份未签发修正。','Cite the correction and checked materials; decide how the local working explanation handles this unsigned revision.'),
    text:p([
     '两份附件把材料范围说清了一些，但还是没能找出一个有资格签发勘误的人。许闻舟在回批里提的办法，现在轮到你定：写一份有范围的工作说明，或者只把争议稿留下。你不往窗口发任何文件。这里说的“使用”，只是本地卷宗采用哪种写法。',
     '暂用的话勘误稿里写好了：把人员附件暂列为关联索引，供查阅，同时写明没有取得人员原始登记，不作认证。用这个索引关系，不等于认证身份。首页要带出处，标上暂行。以后来源变了，条目还能查，也要记下这个关联分类为什么不再用，指回今天的决定。',
     '如果暂存，你不替这一版背书，材料照样能看。但暂存不是往抽屉里一塞就不管。争议点要留着，写清哪一项还欠复核。以后出了新材料，还得回到这份稿上。没签发，不等于没人作过判断。',
     '许闻舟想让下一班少抄一次错的。林澄怕“先用”在转存里变成“已定”。你按自己的范围定。两条路都会留下旧件和原始引用。暂用要指得回今天的采用；暂存要给出具体的复核任务。以后有了新依据，两种决定各自留下修订记录。',
     '下一项是人员附件。第一章没有证实那位历史人物，只说明一份说明正借着登记材料，拿到比它该有的更大的信用。第二章要查姓名条目接在什么材料上，而不是先替这个名字写一段人生。把今天的决定和出处留下，往后才有一份能认真修订的旧版。'
    ],[
     'The attachments have narrowed the material’s scope. They have not produced anyone entitled to issue the correction. Xu’s proposal now comes to you: write a bounded working note, or keep only the disputed draft. You send nothing to the desk. “Use” here means only the wording your local dossier adopts.',
     'The correction already has the sentence: provisionally list the personnel attachment as a related index for consultation, while stating that no original personnel registration was obtained and no identity is authenticated. Using that index relationship is not the same as authenticating a person. Put sources and provisional status on the front. If the source later changes, the entry may stay readable, but record why the related classification is no longer used and point back to today.',
     'If you hold it, you are not endorsing it, and it stays readable. But holding it cannot mean putting it in a drawer and forgetting it. Keep the disputed point and say which check is still owed. When new material arrives, come back to this draft. An unissued version does not mean no one ever made a judgment.',
     'Xu wanted to spare the next shift another bad copy. Lin feared “for now” turning into “settled” when the file was passed on. Decide within your own working scope. Both routes keep the old material and the original citations. Provisional use has to point back to today’s adoption; holding needs a specific review task. When new grounds appear, each decision leaves its own revision record.',
     'The personnel attachment comes next. Chapter one has not established the historical person. It has shown a note gaining more credit from the registry than the registry can support. Chapter two asks what the name entry is attached to, not what life to write for it. Keep today’s choice and its sources, so there is an earlier version that can be properly revised.'
    ]),sources:['nCorrection','nHandover','aRegistry','aBatchA','aBatchB','aLetterhead'],fixedSources:['nCorrection','aLetterhead'],options:[
     {id:'held',label:b('保留为争议稿，不作使用背书','Hold as a disputed draft, without endorsement'),note:b('旧稿和出处留着。以后出了新材料，还得再看一遍。','Keep the draft and its sources. New material later means another review.')},
     {id:'provisional',label:b('在本地说明中暂用，首页标明待核','Use provisionally in the local explanation, marked pending on the front'),note:b('这不是对外签发。依据变了，要留下明确的撤回，不能悄悄换稿。','This is not an outward issue. If the grounds change, leave an explicit retraction; do not quietly swap the text.')}
    ],action:b('保存勘误决定','Save correction decision')
   },
   {
    id:'c2-worksheet',day:2,anchor:2,phase:'entry',title:b('先给名字一个问号','Give the name a question first'),purpose:b('引用人员核对纸，界定姓名条目目前是一项什么性质的主张。','Cite the personnel checking sheet and bound the kind of claim the name entry currently makes.'),
    text:p([
     '第二日先翻林澄的人员核对纸。她把姓名附件单独放，标题写“人员附件核对”。纸上先记附件说了什么，再看有没有原始登记撑它。昨天暂列关联索引或者保留争议稿，只定了这份材料怎么用。这页开始查里面的人员主张。',
     '窗口曾把“找到一名当年的记录员”抄进答复，林澄回去请他们改。她还没查到原始人员登记，不能让答复先做了认证。对方怕改完像什么都没干。她还是要保留做过的工作，只是各写回各的范围。',
     '许闻舟的边注没删。他原先觉得，几份格式一样的抄件足够当索引入口。他想的是眼前的查阅和归档：读者得有地方找，整理员得有题名归。这办法也只能管到这儿。林澄问了一句“入口后面有什么”，两人只好把一个顺手的标题拆成几个能查的问题。',
     '把条目记成一条待溯源的人员主张，注明还没认证，附上这份工作纸。索引给的是查阅入口；认证得有能追到原始登记的材料。这个缺口先留着：不先断定这个人存在，也不因为没查到就说他不存在。林澄自己的岗位记录另列。',
     '下一步查附件配套的文字，再核它说的机构和地方。核对纸上这两项都待办，按实际结果逐条记。地点能核实，就把地点这条留下。人员那栏还得等自己的来源，不能跟地点共用一个完成勾。'
    ],[
     'Open Lin’s personnel worksheet first on day two. She separated the name attachment and headed it “Personnel attachment check.” The sheet records what the attachment claims, then asks whether any original registration supports it. Yesterday’s decision, related index or disputed draft, settled only how to use the material. This page begins on the personnel claim itself.',
     'The desk had copied “found a registrar from that period” into a reply. Lin went back and asked them to change it. She had found no original personnel registration, and the reply could not authenticate someone in advance. The desk worried the change would make it look as if nothing had been done. She wanted the work kept, but each piece described at its actual scope.',
     'Xu’s margin stays. He had thought matching copies were enough for an index entrance. His concern was practical: readers need somewhere to look, compilers need a title to file under. That was as far as the method went. Lin asked what lay behind the entrance, and the convenient title had to be broken into questions someone could check.',
     'Record the entry as a personnel claim awaiting provenance, mark it unauthenticated, and attach the worksheet. An index gives an entrance for consultation; authentication needs material traceable to original registration. Keep the gap open. Do not decide in advance that the person existed, and do not decide they did not because nothing was found. Keep Lin’s own personnel record separate.',
     'Examine the attached text next, then the institution and place it claims. The worksheet already lists both. Record each actual result. If the place checks out, keep that finding. The personnel field still needs its own source and cannot share the place’s completion tick.'
    ]),sources:['nName','nCorrection','aLetterhead'],fixedSources:['nName'],options:[
     {id:'record',label:b('附人员工作纸，标注条目未认证','Attach the personnel worksheet; mark the entry unauthenticated'),note:b('先当一条待溯源的主张记下，别当成原始人员记录。','Record it as a claim awaiting provenance, not as an original personnel record.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c2-names',day:2,anchor:4,phase:'after',title:b('楼能找到，人仍须另查','A place can be found; a person needs a separate check'),purpose:b('引用已核地点材料与工作纸，分开已成的地点核对和仍未成的人员认证。','Cite checked place material and the worksheet; separate the place finding from the pending personnel authentication.'),
    text:p([
     '地名查证核实了附件说的地点，它总算有了现实边界。随手写一座旧楼不算数，你实际核过了。可地点这一项做完，工作表里的“人物”一格还是不能跟着打勾。同一个地址可能有很多人写过。地址对了，先确认的也只是地址。',
     '林澄在一封没发出的旧邮件里，把楼和人放进了同一个问句：人员附件到底跟这份登记有没有关系，还是我们把一个条目做得像有人负责过的记录？邮件留下的是待查的问题，得回到人员主张的出处去核。地点那栏做完了，这个问题还在工作纸上。',
     '许闻舟想把地点核对写进月报。月报要的是能交出去的事，这一项确实交得出。林澄没让他划掉，只让他把录音那一格留着。她不想把做过的工作说成一文不值，也不想让一个成立的地点替还没成立的独立性作保。',
     '本地说明里列出做完的地点核对，人员认证另列待核。附上建筑材料或人员工作纸，下一位既查得到地点那栏的依据，也看得见另一栏为什么还空着。月报可以用这条完成记录，但不能把它挪到人物栏，再盖一次“证实”。',
     '接下来双卷比对页接手录音这一项。要查的是：给附件作支持的录音怎么被整理成两份，每份有没有多出独立支持。纸条先说明工作是怎么安排的，实际比对还得查录音本身。地点结果留在月报里，不因为别处还有没做完的事就被划掉。'
    ],[
     'The place check has confirmed the location the attachment claims, so it now has a real boundary. Writing down any old building would not do; you actually checked. But finishing the address does not tick the person field. Many people can use one address. What is confirmed first is the address, no more.',
     'In an old unsent email, Lin put the building and the person into one question: is the personnel attachment really tied to this registry, or have we made an entry look like a record of someone’s responsibility? The email leaves a question to check against the personnel claim’s sources. The place field is finished; the question is still on the worksheet.',
     'Xu wanted the place check in the monthly report. The report needs deliverable items, and this one is deliverable. Lin did not cross it out. She only made him leave the recording field open. She would not write off the work already done, and she would not let a confirmed place stand surety for independence that had not been shown.',
     'List the finished place check in the local note, with personnel authentication still pending. Attach the building material or the worksheet, so the next worker can trace the place finding and see why the other field is still blank. The monthly report may use the completion record. It may not move it into the person field and stamp “confirmed” again.',
     'The reel comparison page takes the recording item next. Check how the recordings supporting the attachment were made into two files, and whether each adds independent support. The slip explains how the work was arranged; the actual comparison still has to examine the recording. The place result stays in the report even though other work is unfinished.'
    ]),sources:['nName','nReels','aWorkbook','aBuilding'],fixedSources:['aBuilding','nName'],options:[
     {id:'record',label:b('附地点核对，人员认证另列待核','Attach the place check; keep personnel authentication pending'),note:b('地点这一项做完，只管地点，不挪到人物条目上。','The finished place check covers the place only. It does not move over to the person.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c2-recordings',day:2,anchor:6,phase:'after',title:b('比对完成，不等于见证增加','Comparison finished is not another witness found'),purpose:b('引用双卷材料及工作记录，标明比对结果能支持的层级与尚欠的来源责任。','Cite reel material and the working record; identify the result’s evidentiary layer and the provenance duty still owed.'),
    text:p([
     '这次技术工作把两卷之间的关系查清了。结果可以写进工作说明，但别把“比对完成”写成“多了一个见证人”。你比对的是现有材料，弄清的是它们怎么连在一起。没有因此多出一次独立的历史见证。',
     '许闻舟开会前那张空页，终于有东西可写了。他想交一页说明，林澄让他把做完的和没做完的都写上。现在能写清楚了：两卷的技术关系查过了，背后的修复流程和载体来源还得另列。',
     '机构、地点、录音，几个“已核”排在一起，月报是好看。可这些完成项不会自动认证一个人。材料要是都经过同一套整理，彼此对得上，也可能只是沿用了同一份说明。来源全貌暂时不必下结论，但独立性得真去查，不能拿完成项的数目顶过去。',
     '附上双卷比对材料，把数字比对记成本轮完成项，载体来源另列待查。说明里写清比对发生在哪一层材料之间。以后有人引用，就知道它查了什么，不会把一条连接读成两份材料各有独立来历。',
     '下一章查比对依赖的修复链。林澄的班次记录要求每个采用判断都留下依据，许闻舟已经为这些说明另留了页。先看维修记录怎么形成工作读法，再看信号表达、有限校验和声音各管哪一段，把这次结果接到对应的工作页上。'
    ],[
     'The technical work has settled a relationship between the two reels. Put the result in the working note, but do not turn “comparison completed” into “another witness.” You compared material that already existed and established how it connects. That does not add another independent historical account.',
     'Xu’s blank meeting page has something on it at last. He wanted to hand in one page; Lin told him to write down both what was done and what was not. Now the stopping point can be stated: the technical relationship between the reels is checked; the repair process behind it and the carrier provenance still need separate entries.',
     'Institution, place, recordings — a row of “checked” items makes a good monthly report. None of them authenticates a person by itself. If the material all passed through one process, agreeing with itself may only mean it inherited one explanation. The full source picture can wait. Independence cannot. A count of finished checks does not stand in for it.',
     'Attach the reel comparison, record the digital comparison as this round’s completed item, and leave carrier provenance pending. Say which layer of material was compared. A later citation will then show what the result covered, instead of reading one connection as two independently sourced files.',
     'The next chapter examines the repair chain this comparison rests on. Lin’s shift record asks for grounds behind each adopted judgment; Xu kept separate pages for those notes. Look first at how repair records produce a working reading, then at what signal representation, limited checking and audio each cover, and attach this round’s result to the right working page.'
    ]),sources:['nReels','nName','aReelnote','aSamples'],fixedSources:['aSamples','nReels'],options:[
     {id:'record',label:b('附双卷比对，登记修复来源待核','Attach the reel comparison; record restoration provenance pending'),note:b('数字比对的结果留着。载体从哪来，还得单独查。','Keep the digital comparison. Carrier provenance still needs its own check.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c3-session',day:3,anchor:6,phase:'entry',title:b('当班的人做了什么','What the shift worker did'),purpose:b('引用修复班次记录，登记你将怎样保留本次工作版与原有记录之间的距离。','Cite the repair shift record; record how you will preserve the distance between a working version and existing records.'),
    text:p([
     '第三日查双卷材料背后的重建记录。维修图讲接收装置，双轨材料记整理后的信号，电路纸记有限校验，原始声音用来检验整理后的说明。每份材料各有各的活，不能互相代做。一项项查过，才知道工作版是从哪一步变得可读的，哪些环节还缺载体支持。',
     '林澄二月的班次记录不干净：一页读法后面拖着几页说明，许闻舟担心装不进文件夹。她同意缩短，但不同层的采用判断还得分别落款。许闻舟写“经修复确认”，她改成“本工作版本采用”，把笔递了回去。改过的主张归这一版，签名是采用者自己的。',
     '记录里还留着一圈杯底水印。许闻舟说，他赶着开会，把杯子压在了稿纸上。林澄让他挪开，后来又夹起湿纸的一角，免得贴灯烤卷。三页说明本就不好装，湿了还得摊一夜。这些细节照班次文字留着，没有多出什么现场见证。',
     '附上班次记录，给每个工作版记下采用依据，旧批注留着。原来的边注可能和后来的勘误并存，按版本分开记，不要并成一句。旧边注也盖不过现行原件的要求。哪一层材料还没查，就在旁边留个待核。',
     '先从维修图开始。往后每项实际结果都要接回自己的依据页，下一位才查得到采用判断出在哪一环。许闻舟曾为装不下的说明另留页。你的工作单也一项项记，别再给整份修复一个总签名。'
    ],[
     'Day three looks at the reconstruction records behind the reel material. The repair diagram describes the receiver; the rail material records the reconstructed signal; the circuit sheet records limited checking; the original audio tests the reconstructed note. Each does its own job and cannot do another’s. Only by checking each one can you see where the working version became readable and where carrier support is still missing.',
     'Lin’s February shift record is untidy: one page of reading trailing several pages of notes, and Xu worried it would not fit the folder. She agreed to shorten it, but judgments at different layers still needed separate signatures. Xu wrote “confirmed by restoration.” She changed it to “adopted in this working version” and handed back the pen. The revised claim belongs to that version, signed by the person who adopted it.',
     'There is still a flask ring in the record. Xu says he was rushing to a meeting and set his cup down on the draft. Lin told him to move it, then later clipped up a corner of the wet page so it would not curl against the lamp. Three pages of notes were already awkward to file; now one had to lie out overnight. These details stay with the shift record. They add no eyewitness.',
     'Attach the shift record and record the grounds for each adopted working version, keeping the old margins. An earlier margin and a later correction may both stand; record them by version rather than merging the wording. An old margin cannot override the current original. Where a layer has not been checked, leave a pending item beside it.',
     'Start with the repair diagram. Every result after that has to lead back to its own source page, so the next worker can see which stage the judgment came from. Xu kept extra pages when the notes would not fit. Give each item its own entry too, instead of one signature over the whole repair.'
    ]),sources:['nSession','nReels','aSamples'],fixedSources:['nSession'],options:[
     {id:'record',label:b('附班次记录，保留各版采用依据','Attach the shift record; retain grounds for each adopted version'),note:b('旧批注和这次的工作版分开放。哪一层材料还没查，也记下来。','Keep old margins apart from this working version, and note which material layers are unchecked.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c3-attribution',day:3,anchor:9,phase:'after',title:b('分歧怎样署名','How to attribute the disagreement'),purpose:b('引用署名页与修复材料，决定新工作摘要用姓名还是岗位记录责任。','Cite the attribution page and repair material; choose names or roles for responsibility in the new working summary.'),
    text:p([
     '这一轮修复留下了能核的结果。摘要还得记下每个人是采用还是保留。林澄在页尾挤出的窄格写着“保留的分歧”。这轮用了哪些成果可以另列；她和许闻舟当时不一致的地方，仍按各人的署名归，别让后来的摘要省掉。',
     '许闻舟把署名改成“修复组”，确实是想让大家一起担责，不叫一个人挨问。可他也把自己那句“同意先用工作版”改成了组里意见，自己该解释的就淡了。林澄要求两边一样：延期的事找她，赞成先用却只写集体，不行。所以她把笔递了回去。',
     '新摘要可以用实名。读的人一眼看得出，林澄的保留和许闻舟的暂用各是谁提的。代价是注意力容易落在两个人身上，而不是整道工序和机构责任。所以用了实名也要引记录，别把谁写成唯一的原因。',
     '也可以按修复、协调、复核这些岗位来标责任，下一位好找该接着办事的位置。但只看摘要，就不知道当时是谁说了什么。公开的署名原件照样能看，这么写并不是保护匿名。岗位摘要要留一个回查署名页的入口，也不能说两边已经一致。',
     '这个选择只改你新写的摘要，不改录音里说话的是谁，也不改原来的作者名。选一种，存下来，记录里附上署名页和修复材料。以后跟正式交接说明对照，就看得清这份摘要保住了哪种责任、淡了哪种。还没跟载体核对的部分，署名替不了。'
    ],[
     'The repair has left checkable results. The summary also has to record who adopted what and who held back. Lin’s cramped footer field reads “disagreement retained.” List this round’s adopted results separately. Her disagreement with Xu stays under each person’s signature; a later summary must not drop it.',
     'Xu changed the attribution to “the repair group” because he genuinely wanted shared responsibility rather than one person facing the questions. But he also turned his own “agree to use the working version first” into a group position, which blurred the explanation he owed. Lin wanted both treated alike: the delay should lead to her, and agreement to provisional use should not become collective while hers stays personal. That is why she handed the pen back.',
     'Your new summary may use names. A reader can see at once who asked for retention and who wanted provisional use. The cost is that attention settles on two people rather than the whole process and the institution’s duties. So cite the records, and do not make either person the sole cause.',
     'Or attribute by role: repair, coordination, review. The next worker can see where to follow up. But the summary alone no longer shows who said what. The signed originals remain public, so this is not anonymity. Keep a link back to the signed page, and do not claim the two sides agreed.',
     'The choice changes only your new summary. It does not change who spoke on the recording or alter the original authors’ names. Pick one and save it, with the signed page and repair material attached. Compared later with the official handover, it will show what the summary preserved and what it softened. A signature cannot finish the carrier check still outstanding.'
    ]),sources:['nMargins','nSession','aDial','aRails','aParity'],fixedSources:['nMargins','aParity'],options:[
     {id:'named',label:b('实名摘要，分别标明两人的主张','Named summary, assigning each position separately'),note:b('谁提的就写谁。但机构的责任不止这两个人。','Attribute each position to its author, without making two people the whole institution’s responsibility.')},
     {id:'role',label:b('岗位摘要，保留署名原件回查','Role summary, with the signed source available for review'),note:b('写清后续该由哪个岗位接着办。别说公开原件变匿名了，也别说当时大家一致。','Show which role continues the work. Do not claim the public originals are anonymous, or that everyone agreed at the time.')}
    ],action:b('保存署名方式','Save attribution')
   },
   {
    id:'c3-carriers',day:3,anchor:10,phase:'after',title:b('把载体欠账列出来','List the carrier work still owed'),purpose:b('引用载体协议及工作页，界定可读成果与尚欠的来源核查，不把技术成果抹掉。','Cite the carrier protocol and working page; separate readable results from provenance still owed without erasing the technical work.'),
    text:p([
     '声音核对补上了维修图、信号表达和电路校验答不了的一项：工作说明是不是真受它声称依据的声音约束。各项成果都留着，但能读、过了有限校验、来源独立，还是三件事。接下来查进入旧材料的后期内容，看加工怎么把本来分开的层并成一个年代标签。',
     '林澄要求听原件，好让修复后的说明还受修复前材料约束。许闻舟起初担心又多一项到期限也做不完的活。班次记录里，他还是把说明页留下了。后来有人问为什么采用这一版，那几页给出了能查的依据。',
     '归档协议只说材料放在哪一层、怎么登记，没保证样样齐备。它能写明该负的保管责任，实际交接还得有记录。“按规定应该在”很容易一路写成“我们已经见到”。这个差别要落在记录上，不能只留在你心里。',
     '附上载体材料，把这一轮的成果和来源上的欠账分开列。每项重建写清自己的效力范围，缺的移交记录仍列待核。下一位可以顺着出处往下查，也能直接用已经成立的有限成果。不必为了看清哪里没做完，把整轮工作推翻。',
     '下一章查后来进入旧材料的内容和手续。工作说明里的内容有没有载体支持，年代和用途对不对得上，都要落到具体记录。林澄的退回复核申请记下了她要求分开形成、加工和开放时间的过程。接下来查这项申请后来得到过什么答复。'
    ],[
     'The audio check adds what the repair diagram, signal representation and circuit check could not answer: is the working note actually constrained by the sound it says it rests on? Keep every result, but readable, limited-checked and independently sourced remain three different things. Next, examine content added to older material, and how processing merged layers that were once separate into a single period label.',
     'Lin asked to hear the original, so that material from before repair could still constrain the note made after it. Xu first worried about one more task that would not be finished by the deadline. The shift record shows he kept the note pages. When someone later asked why that version was adopted, those pages gave grounds that could be checked.',
     'The archive protocol says which layer material sits in and how to register it. It does not promise that everything is there. It sets out a custody duty; the actual transfer still needs a record. “It should be there under the rules” easily slides into “we have seen it.” That difference has to show in the record, not just in your head.',
     'Attach the carrier material and list this round’s results separately from the provenance still owed. State each reconstruction’s scope, and leave missing transfer records pending. The next worker can follow the citations and still use the limited results already established. No one has to throw out the round to see what is unfinished.',
     'The next chapter looks at later content inside older material and at its handling. Whether the carrier supports the note, and whether period and use line up, must be settled with specific records. Lin’s returned request records her attempt to separate formation, processing and release dates. Examine what answer that request received.'
    ]),sources:['nMargins','nSession','aAudio','aSamples'],fixedSources:['aAudio','nSession'],options:[
     {id:'record',label:b('附载体材料，列明成果与来源欠项','Attach carrier material; list results and provenance deficits'),note:b('重建出来的成果留着。保管规定代替不了实际移交记录。','Keep the reconstructed results. Custody rules are not a record of actual transfer.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c4-review',day:4,anchor:10,phase:'entry',title:b('退回，不等于撤回','Returned is not withdrawn'),purpose:b('引用退回申请，登记程序上仍未处理的具体问题，而不预判责任人或动机。','Cite the returned request; record the unaddressed procedural question without assigning a culprit or motive.'),
    text:p([
     '第四日打开退回的复核申请，看这项已经提出的工作为什么没有完成记录。林澄要求分开形成、加工和开放时间，别再用一个日期替全部来源作保。已开放的材料照样能看。她把问题落到具体的加工记录上，等经办岗位说缺的是哪一项。',
     '回批让她补齐原始材料再报。可她要查的，恰好是原始材料没齐却被写成齐了。这么一来，“补齐才准查”就把问题挂在了原处。这只能说明她的申请没得到足够具体的答复，说明不了经办岗位人人存着同一种恶意。你没有那样的材料。',
     '许闻舟劝过她换成一般咨询。他知道哪种表格好往下走，她怕连问题一起换掉。后来他把这条建议留在页边，没把它改写成自己一直坚定支持的往事。这一行记的是他实际做过的事：帮她改了语气，没替她找到她要的材料。',
     '引用退回件：记下缺项没写明、申请也没撤回，经办文字和空的个人署名栏都留着。以后的复核要逐项回应；要补件，就说清补哪件、补了以后怎么往下审。这页没有后续受理凭证。把这个缺口写出来，但别从里面猜经办人的动机。',
     '下一步审计旧材料的内容年代和用途，再查没做完数字化的卷宗还留下了哪些手续。把申请指向的内容跟处理记录接上，后来的复核就能回答一个具体问题。许闻舟帮着改语气的边注也留着，那不算是申请已经办过的凭证。'
    ],[
     'Open the returned request on day four and see why this proposed work has no completion record. Lin asked for formation, processing and release dates to be kept apart, and for one date to stop standing surety for every source. Open material would stay readable. She put the question to specific processing records and waited for the handling office to say which item was missing.',
     'The reply told her to supply originals first. But what she wanted to check was that absent originals had been recorded as present. Requiring her to supply everything before asking left the question hanging exactly where it was. That shows an answer too vague to act on. It does not show that everyone in the office shared one malicious motive. You do not have material for that.',
     'Xu suggested she reframe it as a general enquiry. He knew which form moved more easily; she was afraid the question would go with the title. He later left that suggestion in the margin rather than rewriting it as unwavering support. The line records what he did: he softened the wording. He did not find the material she asked for.',
     'Cite the returned file and record that the deficiency was never named and the request was never withdrawn. Keep the handling text and the blank personal-signature line. Later review has to answer each item and, if something must be supplied, say what and what happens next. This page carries no later acceptance receipt. Write the gap down without guessing at the handler’s motive.',
     'Next, audit the content’s date and use, then look for the procedures left in the volume that was never digitized. Connect the disputed content to the handling records and later review has one specific question to answer. Keep Xu’s wording suggestion too. It is not a receipt proving the request was handled.'
    ]),sources:['nRefusal','nMargins','aAudio'],fixedSources:['nRefusal'],options:[
     {id:'record',label:b('附退回件，记录缺项未明且申请未撤','Attach the returned request; record unspecified deficits and no withdrawal'),note:b('下一步复核要具体回答缺了什么。这一页不猜经办人的动机。','Further review must say what is missing. This page does not guess at a handler’s motive.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c4-withdrawal',day:4,anchor:12,phase:'after',title:b('记录注销了，分发还在','Records revoked, distribution still happened'),purpose:b('引用处理日志与保管附记，分开注销、分发和取得材料的不同效力。','Cite handling logs and the custody note; distinguish revocation, distribution and actual possession.'),
    text:p([
     '内容审计和残片调阅给了申请具体的核对对象。卷宗的数字页面是零，可调阅、分发、注销的手续未必没有。页数记的是数字化成果，处理日志记的是经手过程。摘要分开列，才不会把“零页”写成从来没人碰过。',
     '回批没列缺项。注销记录也不代表每次分发都收回了。公告各有各的范围。把这些说法按对象摆在一起，才看得出哪些真冲突，哪些说的根本不是同一批材料。碰上“删除”“注销”“无材料”，先记作者、日期和范围，再判断它们打不打架。',
     '数字保管附记记下了一个改勾的过程。整理员发现上一版把“通知已存”记成了“物品已交”，就挪回“通知副本已交”，原来的勾另存。通知说的是一张只印二维码的纸。这页没有独立收件人签名，也没有现场见证；补充页不会往那张纸上添字。',
     '附上处理记录，把分发、注销、取得分成三个状态。通知副本交了，这一项可以记；东西是不是真拿到了，还得核。缺签收凭证的部分另列。补充的保管文字只说数字通知记到什么范围，不顶替实物，也不会因为被引用就把“取得”改成“完成”。',
     '下一步把通知所指材料真正取件核一遍，再核卷宗里的馆外剪报。林澄的申请得有内部摘要以外的检查来约束；纸和馆外存档各管一段，来源分开放。取件状态和研究判断也分开，后来的报告才说得出每一步实际做了什么。'
    ],[
     'The content audit and the fragment retrieval give the request concrete things to check. A volume with zero digitized pages may still have retrieval, distribution and revocation records. Pages count digitization; the handling log records actions. List them separately, or “zero pages” turns into “no one ever touched it.”',
     'The reply names no missing item. A revocation record does not prove every distributed copy came back. Each notice has its own scope. Line the claims up by object and you can see which really conflict and which are about different material. With “deleted,” “revoked” or “no material,” note the author, date and scope before deciding whether they contradict each other.',
     'The digital custody note records a corrected tick. The compiler found that the previous version had “notice stored” under “item delivered,” so moved it back to “notice copy delivered” and kept the old mark separately. The notice describes a sheet with only a QR code. This page has no independent recipient signature and no eyewitness account. A supplementary page does not add words to the sheet.',
     'Attach the handling records and keep distribution, revocation and possession as three separate states. Receipt of the notice copy can be recorded. Whether the item was actually obtained still needs checking, and anything without a signed receipt goes in its own line. The custody addendum states the scope of the digital notice only. It does not stand in for the object, and being cited does not turn possession into completion.',
     'Next, actually verify the pickup of the material the notice points to, then check the outside newspaper in the file. Lin’s request needs constraints beyond an internal summary. The sheet and the external archive each cover part of the work, and their sources stay separate. Keep pickup status apart from research findings so the later report can say what each step actually did.'
    ]),sources:['nRefusal','nCustody','aAudit','aHidden'],fixedSources:['aHidden','nCustody'],options:[
     {id:'record',label:b('附处理记录，登记通知不等于取得','Attach handling records; record that a notice is not possession'),note:b('分发、注销分开记。东西是不是真拿到了，还得实际核。','Record distribution and revocation separately. Whether the item was actually obtained still needs checking.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c4-external',day:4,anchor:14,phase:'after',title:b('馆外核对的范围','Scope of the outside check'),purpose:b('引用馆外材料与保管记录，登记外部核对实际支持的部分及未覆盖的人事问题。','Cite outside material and custody records; state what the external check supports and what personnel questions it does not cover.'),
    text:p([
     '原有的取件和剪报核对，你都走完了。补充保管页没有替代那张二维码纸，也没替你跑馆外检索。工作单上能加的，是你实际核过的事，不是一段由本站独立证明的现场经过。取件状态和研究判断分开放，别让一个完成标记替另一个签字。',
     '剪报的活也很具体。它来自卷宗说法之外的一处公开存档，核它能帮着确定这一页的时间和出处。林澄在旁边写过自己核过；那是她的工作声明。你这次真去核了，才算你自己的工作。你不必先信她才去查，也不能把她的声明当成第二份报纸。',
     '馆外材料能帮着检验这一件，整宗案子还是得分开查。一个事件的日期查得到，剪报旁边那些关于人的说法却不一定都有依据。跟馆外记录对得上，也不代表进卷宗时没经过同一套整理。要说独立，得写清独立的是内容、保存渠道，还是加工流程。只写“外部”不够。',
     '附上馆外材料，记明这次核对只覆盖这一件，把它留作以后追溯的外部约束。人员去向另列。许闻舟的便签只记他的工作要求，证明不了他去过取件点。出处和实际核过的范围一起存，以后引用时才不会把旁边那些关于人的说法也带进“已核”。',
     '下一章回头看附录、旧档和处理日志，数一数现有的支持到底有几条形成路线。材料独不独立，不能只看题名和件数。这次馆外核对仍留在本件的范围里。以后整体支持关系要改，也不必把这项做过的检查删掉。'
    ],[
     'You have worked through the original pickup and newspaper checks. The custody addendum did not replace the QR sheet, and it did not do the outside search for you. What the work sheet can now carry is what you actually checked, not a visit independently proved by this site. Keep pickup status and research findings apart, so one completion mark does not sign for the other.',
     'The newspaper’s job is specific. It comes from a public archive outside what the file itself claims, and checking it helps fix the page’s date and origin. Lin wrote in the margin that she had checked it. That is her working claim. Only your own check makes it your work. You do not have to trust her first, and her note is not a second newspaper.',
     'Outside material tests this one item. The whole case still has to be checked piece by piece. A date can be verified for an event, and the statements about people around the clipping need not be. Matching an outside record does not prove the item escaped a common process on its way into the file. If you call something independent, say whether the content, the preservation chain or the processing is what is independent. “External” alone will not do.',
     'Attach the outside material, record that this check covers this item only, and keep it as an external constraint for later tracing. Personnel whereabouts stay separate. Xu’s slip records a work rule; it does not show he went to the pickup point. Keep the provenance and the exact scope of your check together, so later citations do not drag the nearby statements about people into the “checked” field.',
     'The next chapter goes back to the annex, the older archive and the processing logs, and counts how many separate formation routes actually support the existing claims. Independence cannot be read off titles and file counts. This outside check stays within its item’s scope. If the overall support picture is revised later, this check still does not need to be deleted.'
    ]),sources:['nCustody','nRefusal','aDrop','aPress'],fixedSources:['aPress','nCustody'],options:[
     {id:'record',label:b('附馆外核对，保留为本件来源约束','Attach the outside check as a provenance constraint for this item'),note:b('只管这一件。人员去向、整卷独不独立，仍要另查。','This covers one item only. Personnel whereabouts and whole-volume independence still need separate checks.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c5-versions',day:5,anchor:14,phase:'entry',title:b('旧稿不会自己撤回','An old draft cannot retract itself'),purpose:b('引用许闻舟的版本说明，登记重新审查义务；本地勘误另由已保存决定导出。','Cite Xu’s version note and record the review duty; the local correction is derived separately from the saved disposition.'),
    text:p([
     '第五日重新翻开第一日的工作稿。许闻舟离职前留下两版，收回了自己“可以作为结项说明”的建议，同时要求旧稿留着。先前采用了什么、现在收回哪一句，对着两版就能查。他的说明记下这次改动；来源独不独立，还得实际去验。',
     '他在九月稿里承认，二月就听懂了林澄的问题，还是把“正在补”缩成了“见附件”。原件没补上，那几张工作页却进了完成说明。如今他把没做完的记在自己名下，也留着当时想给窗口一页答复的理由。接手的人能同时看见建议和修订。',
     '你第一日的决定，现在有后果了。要是暂用了勘误，后续来源审查就要一份明确的撤回，不能悄悄盖掉旧版。要是留了争议稿，没有背书可撤，但还欠一次有材料的重查。派生修订页按你实际存下的决定生成；这段文字不能替旧存档补一个从没做过的选择。',
     '附上两版说明，把旧建议和新修订对上，列出本地复审的任务。第一日的决定保持原样，这里不再选一次。原先暂列关联索引的依据要逐条回查。旧稿和许闻舟的改动分开记，后面的修订才指得到具体对象。',
     '英文附录先核版本怎么留、来源怎么约定；旧档关联再查同馆题名之外的联系；处理日志随后检验几份材料各自的形成路线。许闻舟肯收回自己的建议，做不完这些核对。两版说明放在手边，材料真查过以后，再存你自己的复审或撤回。'
    ],[
     'Day five reopens the first-day draft. Before leaving, Xu kept two versions, withdrew his own “may be used in the closing statement,” and asked that the old draft stay. Compare the two and you can see what was adopted and which sentence is now withdrawn. His note records the change. Whether the source is independent still has to be tested.',
     'His September draft admits that he understood Lin’s question in February and still shortened “being supplied” to “see attachments.” No originals were added, but the working sheets went into a completion statement. He now records the unfinished work under his own name and keeps the reason he once wanted to give the desk a single page. The next worker can see the recommendation and the revision together.',
     'Your first-day decision now has consequences. If you used the correction provisionally, the later source review needs an explicit retraction, not a quiet overwrite. If you held it as a disputed draft, there is no endorsement to retract, but there is still a review owed, with material behind it. The derived revision follows whatever you actually saved. This text cannot invent a choice the older save never made.',
     'Attach both versions, line the earlier recommendation up with the revision, and list the local review task. Leave the first-day decision as it stands; do not choose again here. Go back over each ground for the provisional related index. Record the old draft separately from Xu’s changes, so a later revision has a specific object.',
     'The annex first checks how versions were kept and how sources were agreed; the older archive then checks a link outside the archive’s own title; the processing logs test the formation route of each item. Xu’s willingness to withdraw his recommendation cannot do those checks. Keep the two versions beside them, check the material for real, and then save your own review or retraction.'
    ]),sources:['nVersions','nCorrection','nRefusal','aPress'],fixedSources:['nVersions'],options:[
     {id:'record',label:b('附两版说明，登记旧建议与复审任务','Attach both versions; record the earlier recommendation and review duty'),note:b('旧稿留着。下一步拿实际来源核对本地说明。','Keep the old draft. Next, check the local note against actual sources.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c5-sources',day:5,anchor:17,phase:'after',title:b('关联索引的复审记录','Review of the related-index classification'),purpose:b('引用来源记录，对早期工作说明进行有出处的重看；保存应撤回或仍待审的边界。','Cite provenance records and re-examine the early working explanation; retain the boundary of retraction or outstanding review.'),
    text:p([
     '有了处理日志，先前的支持关系可以按来源重查。“好几份都这么写”已经不能给一条主张加分。要分开查：哪些材料是独立形成的，哪些在加工中引用或沿用了别件，哪些已经声明不在这批馆藏里。件数照记，但不能直接当证人数量。',
     '这一轮修订按第一日实际做了什么来准备：暂用过的，要留下撤回；留了争议稿的，要留下有依据的复审和没做完的责任。两种都保留原始引用和当时的有限理由，不能改写成已经有了最终确认。旧存档里没有第一日选择的，写明“未记录”。预览不算保存。点“保存复审记录”，修订才进工作副本，来源记录一起附上。',
     '许闻舟把离职和材料交接分成两张表。离职手续签了，材料那张仍列着没做完的事。后来的边注要求把异议和两版一起交给下一位。他留下的调查还得按出处核。留下林澄的异议，只做到了“留存”，没有替她答完复核申请。',
     '附上来源记录，把这一轮的复审或撤回正式存下。第一日暂用的关联分类要明确撤回，改列为加工中形成的条目，留着研究它的形成过程。先前留着的争议稿，记一次有依据的复审。已经成立的有限结果都留下；整体支持不再因为几份材料说法一致就自动算数。',
     '存下以后，这次修订和早期的处理单摆在一起，下一位查得到你改了哪项关系、为什么改。外业复核随后给出实地约束，那一步还得真做。林澄的去向另列待查。材料形成路线答得了来源问题，答不了人的下落。'
    ],[
     'With the processing logs, the earlier support picture can be rechecked by source. “Several files say so” no longer adds weight. Separate what formed independently, what was quoted or carried over from another item in processing, and what is declared outside this holding. Counts can still be recorded, but they are not witness counts.',
     'Prepare this round from what you actually did on day one. Provisional use needs a retained retraction. A held draft needs a review with grounds and the duties still owed. Both keep the original citations and the limited reasons of the time, and neither may be rewritten as a final confirmation. If the older save made no first-day choice, write “not recorded.” A preview is not a save. Only “Save review record” moves the revision into the working copy, with its provenance attached.',
     'Xu kept resignation and material handover on two forms. He signed the resignation paperwork; the materials form still lists what is unfinished. A later margin asks that the objections and both versions go to the next worker. His findings still need checking against their sources. Keeping Lin’s objection completes the keeping, not the answer to her request.',
     'Attach the provenance and commit this round’s review or retraction. The provisional related-index classification must be explicitly withdrawn and reclassified as an entry formed in processing, kept for studying how it formed. The held draft gets a review with grounds. Keep the limited results already established. Agreement among files no longer grants overall support by itself.',
     'Once saved, this revision sits beside the early disposition, and the next worker can trace which relationship you changed and why. The field check comes next and has to be done; it supplies a real-place constraint. Lin’s whereabouts stay in a separate pending field. Formation routes answer provenance questions, not where a person went.'
    ]),sources:['nVersions','nDeparture','nCorrection','aAnnex','aRecursive','aTrace'],fixedSources:['aTrace','nVersions'],options:[
     {id:'record',label:b('附来源记录，正式保存本轮复审或撤回','Attach provenance and commit this review or retraction'),note:b('按第一日实际做过的决定存下修订。原稿、有限成果和没做完的事都留着。','Save the revision that follows what was actually done on day one. Keep the draft, the limited results and the unfinished work.')}
    ],action:b('保存复审记录','Save review record')
   },
   {
    id:'c5-scope',day:5,anchor:18,phase:'after',title:b('哪一栏能关，哪一栏不能','Which field can close'),purpose:b('引用外业材料与离职交接，选择有不确定性附页的技术报告或有具体后续责任的转交稿。','Cite the field material and departure handover; choose a bounded technical report with uncertainty annex or a referral draft with specific follow-up duties.'),
    text:p([
     '外业复核补上了一条实地约束，来源形成记录这一轮也查过了。最终文件可以据此写明技术范围。历史身份仍按加工中形成的条目登记，没有原始人员认证。真实工作人员的去向另列，只采用有出处的岗位记录和联系记录。',
     '林澄三月起没再到岗，联系不上，这是公开岗位说明的范围。你没有独立的死亡证明，也没有她后来的位置。许闻舟办了离职、账号被移除，他对这些状态另有说明。离开岗位不等于人不在了。把两个人都用“失踪”两个字带过去，等于又把系统标签当成了完整的人生。',
     '离职页和原交接单的日期也对不上：手续、公告、交接员的记忆，本来就不是同一个日期栏。各自留出处，别把“大概是月底”改成一条新的独立证据。新摘要用实名，可以直接指到谁提过什么；用岗位，就得借署名页找回作者。两种写法都改不了综合组已有清点声明的范围。',
     '现在先定最终文件的范围，最终事实还得核过再签。可以准备一份技术报告，把查过的结论和不确定性附页一起交出去。报告会说清技术工作到此为止，人员和程序上的待办另列。不知道的部分要让人看见，不能塞进免责声明的角里。',
     '也可以准备一份转交稿，不替本人把没做完的复核关掉，写清材料保管、复核、人事核查各该办什么。它不发出去，光写“转交”也保证不了有人接。下一位还得依法确认谁来接收。两条路都要走完最后审计和原有封印，也都不改已经成立的事实。带上出处，选你愿意把哪种责任写在首页。'
    ],[
     'The field check adds a real-place constraint, and the formation records were checked this round. Together they can define the final document’s technical scope. The historical identity stays a processing-formed entry, with no original personnel authentication. Record where real staff went separately, using sourced attendance and contact records only.',
     'Lin has not attended since March and could not be contacted. That is the scope of the public personnel notice. You have no independent proof of death and no later location for her. Xu resigned and his account was removed; those states have their own records and his own account of them. Leaving a post is not a person vanishing. Run both of them together as “missing,” and you have made a system label stand for a whole life again.',
     'The departure page and the original handover also disagree on dates: procedure, notice and the worker’s recollection were never the same date field. Keep their sources apart, and do not turn “sometime near the end of the month” into fresh independent evidence. A named summary can point straight to who proposed what; a role summary needs the signed page to recover the authors. Neither changes the scope of general affairs’ inventory statement.',
     'Decide the final document’s scope now. Its final facts still have to be checked before signing. You can prepare a technical report and hand it over with an uncertainty annex. It will say where the technical work ends and list personnel and procedural tasks separately. What is unknown has to be visible, not tucked into a corner of a disclaimer.',
     'Or prepare a referral draft that does not close the outstanding review on someone else’s behalf, and sets out what custody, review and personnel inquiry each have to do. It sends nothing, and the word “referral” guarantees no one will take it on. A later worker must still confirm receipt lawfully. Both routes require the final audit and the original seal, and neither changes established facts. Cite the sources and choose which duty goes on the front page.'
    ]),sources:['nDeparture','nVersions','nCustody','aTrace','aSurvey'],fixedSources:['nDeparture','aSurvey'],options:[
     {id:'report',label:b('技术报告并交不确定性附页','Technical report with an uncertainty annex'),note:b('只关掉已经做完的技术工作，不替人的命运下结论。没做完的责任附在后面。','Close the finished technical work only, not anyone’s fate. Attach the duties still owed.')},
     {id:'referral',label:b('转交未尽复核，明确接手责任','Refer outstanding review with explicit receiving duties'),note:b('事实结论留着，但不签“全部已结”。本地草稿不等于发出去了，也不等于被受理了。','Keep the findings, but do not sign “everything closed.” A local draft is neither sent nor accepted.')}
    ],action:b('保存结案范围','Save closing scope')
   },
   {
    id:'c6-audit',day:6,anchor:18,phase:'entry',title:b('先写清签名管到哪','Say what the signature covers first'),purpose:b('引用范围说明，为最终审计登记有限任务；封存原件仍须原有核验。','Cite the scope note and register a bounded final-audit task; the sealed original still requires its original verification.'),
    text:p([
     '最终审计还得按原来的流程查。之前准备的报告或转交稿，不能替它先填事实，也代替不了最后封印。现在要定的是：审计怎么进你自己的文件。',
     '综合组的范围说明把技术事实、处理责任、人员去向分栏。首页写清签名覆盖哪一项，哪些还欠着。技术报告只在最终核验后关掉技术工作；申请受理和人员核查另等凭证。转交稿保留已成的技术成果，把没做完的责任列给对应岗位。',
     '许闻舟的版本说明记的是他自己收回建议；林澄的申请记的是她要求复核。两页各证明各人的动作，单凭谁也不能认证旧材料是怎么形成的。她的边注改过，他的来源判断也得核。这些记录留着时，把原来的依据和改动放在一起，后来的审查才逐项答得上。',
     '附上范围页，把审计事实和没做完的事分栏。最终事实等原有核验做完再填，现在只记各栏要的出处和签名范围。技术、处理、人员各回各的材料。摘要里一个“完成”，签不了另外两栏。',
     '下一步核最终审计，再开封存材料。封存说明也要记下谁写的、用词从哪来；保管状态不会自动认证上面的每一句。你的报告或转交稿按选定的范围附上审计结果，没解决的事留在各自的待办栏，下一位好接着查。'
    ],[
     'The final audit still has to run its original checks. The report or referral draft cannot fill in its facts first, and cannot replace the final seal. What you are deciding now is how the audit enters your own document.',
     'The scope note keeps technical facts, handling responsibility and personnel whereabouts in separate fields. On the front, say which field your signature covers and what is still owed. The technical report closes the technical work only after final verification. Review acceptance and personnel inquiry wait for their own records. The referral keeps the technical results already established and assigns unfinished duties to the right roles.',
     'Xu’s version note records his own withdrawal. Lin’s request records that she asked for a review. Each proves its author’s act; neither alone shows how the old material formed. Her margins were revised; his provenance judgments need checking too. Keep the earlier grounds beside the changes, so later review can answer each item.',
     'Attach the scope page and separate audit findings from unfinished matters. Fill in final findings only after the original verification; for now record the sources and signature scope each field needs. Technical, handling and personnel matters each go back to their own material. One “complete” in the summary cannot sign for the other two.',
     'Next, verify the final audit, then open the sealed material. Record who wrote its description and where its wording came from. Custody status does not authenticate every sentence on it. Your report or referral attaches findings within the chosen scope, and leaves unresolved matters in their own pending fields for the next worker.'
    ]),sources:['nAudit','nDeparture','nVersions','aSurvey'],fixedSources:['nAudit'],options:[
     {id:'record',label:b('附范围页，将审计事实与未尽事项分栏','Attach the scope page; separate audit findings from outstanding matters'),note:b('最终判断还得核。技术、程序、人员各按各的出处。','Final judgments still need checking. Technical, procedural and personnel matters each follow their own sources.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c6-consistency',day:6,anchor:19,phase:'after',title:b('封存件也有它的作者','A sealed record has an author too'),purpose:b('引用已开放的封存说明与末栏，登记记录称谓与独立证明之间的区别。','Cite the opened sealed description and final field; distinguish a record’s wording from independent proof.'),
    text:p([
     '封存说明里有一个比岗位公告更肯定的说法：林澄的提交是“生前”最后一次。那是原说明的原话，原件不动。你的新报告不能照抄这个词，就说她的死已经核实。你手上是几份强度不一的记录，还没有一份独立说明她身体到底怎样了。',
     '三月未到岗的公告和二月的工作便签，都补不上这个缺口。末栏特意写明：十月整理页转录的林澄文字来自早期，不是她十月给你的答复，也证明不了她后来回来过。时间线上可以记下最后已知的工作材料和后来的整理说明，但别让整理的日期替她生出新的活动日期。',
     '系统的说法也按出处留。删除申请被驳回，和某处记录说没有可删的对象，各有各的作者、日期和对象。先把两条都留下，再核它们说的是不是同一件事。操作栏空着，已有的经办文字仍留；材料没指定谁操作的，摘要也别补一个人。',
     '还有一层，你是在封存说明里看出来的：这套话也在重复。岗位公告、封存说明、交接页，换一个作者，句式不变。往前翻，泥板、石刻、木牍、税册也在用同一套栏位。你分不清是有人在抄，还是这套格式自己会往回长。你只知道，再签一次“完成”，它还会长回来。',
     '附上封存称谓和末栏的时间说明，把证明上的缺口记下来。“生前”归原封存说明，不能当独立死亡证明。二月的工作和十月的转录分别标日期，去向仍未明。原话不改；本地附记写清为什么没跟它用更肯定的说法。',
     '附上出处，把这份一致性附记存下。最后的原有判断和封印还得完成。之后系统生成的结案文字，作为生成展品保留；它说纸张还留在原处、过去怎么保管，这些都只算那一页自己的声明。本站没有持续的现场观察。你的文件要把这类声明、实际核验和本地意见分开列。'
    ],[
     'The sealed description uses a stronger word than the personnel notice: it calls Lin’s submission her last “during her lifetime.” Those are the original words, and the original stays as it is. Your new report cannot copy the phrase and announce that her death is verified. What you have is a set of records of unequal strength; none independently establishes what happened to her body.',
     'The March nonattendance notice and the February working slip do not close that gap. The final field says plainly that the October transcription comes from earlier material: it is not Lin answering you in October, and it does not show she came back. On a timeline you can record the last known working material and the later compilation, but the compilation date must not generate a new date of activity for her.',
     'Keep the system’s claims by source as well. A rejected deletion request and a record saying there was nothing to delete each have their own author, date and object. Keep both, then check whether they mean the same thing. Where the operator field is blank, the handling text stays. Where the material names no operator, the summary does not invent one.',
     'There is another layer, and the sealed description shows it: the wording repeats too. The personnel notice, the sealed description, the handover page — different authors, the same sentence shape. Go further back and the tablets, stones, slips and tax registers use the same columns. You cannot tell whether someone keeps copying it, or the format grows back on its own. You only know that one more “complete” will let it grow back again.',
     'Attach the sealed wording and the final-field note on dates, and record the evidentiary gap. “During her lifetime” belongs to the sealed description; it is not independent proof of death. Date the February work and the October transcription separately, with whereabouts still unknown. Do not change the original wording; the local note explains why you did not follow its stronger term.',
     'Attach sources and save this consistency note. The original judgment and the final seal still have to be completed. The system’s later closing text stays as a generated exhibit. When it says the sheet is still in place, or describes its past custody, those are that page’s own claims. This site makes no continuing on-site observation. Your document has to list such claims separately from actual checking and from your own opinion.'
    ]),sources:['nLastNote','nAudit','nDeparture','aSealed'],fixedSources:['aSealed','nLastNote'],options:[
     {id:'record',label:b('附封存称谓与时间线，登记证明缺口','Attach the sealed wording and timeline; record the evidentiary gap'),note:b('“生前”是原说明的话。早期工作和晚期转录分开记，去向仍不明。','“During her lifetime” belongs to the original description. Keep early work and later transcription apart; whereabouts are still unknown.')}
    ],action:b('继续','Continue')
   },
   {
    id:'c6-handover',day:6,anchor:20,phase:'capstone',title:b('给下一位留一份能核的文件','Leave the next worker a checkable document'),purpose:b('引用最终审计与交接页，登记你的本地交付责任；实际结尾文件依三项已保存决定形成。','Cite the final audit and handover page; record your local handoff duty. Closing documents derive from the three saved procedural decisions.'),
    text:p([
     '原有审计和最后封印都做完了。交接员本以为一页就装得下的说明，现在带着旧稿、来源记录和待办附页。文件厚了，每页也都有了自己的位置。登记核对和人员主张分开，采用过的意见查得到旧版，没完成的签发有范围说明。',
     '历史身份按材料的形成过程登记，是文档加工出来的条目，还没有原始人员认证。林澄自己的调查跟它分开：她要求追查形成过程，要求旧件保留。许闻舟修订了自己的建议，交接员把清单上的勾改了回来。这些动作各有作者和出处，可以一项项交给下一位。',
     '最终文件怎么写，看那三项决定。暂用过的勘误要有明确撤回；留了争议稿的，要留下继续跟的复审责任。实名摘要直接写出两人的主张；岗位摘要得指回署名页才找得到作者。技术报告把查过的事实和不确定性一起交；转交稿把没做完的责任按岗位列出。走哪条路，事实不变，材料都留。',
     '系统生成的结案页保留原文，当作一份能引用、也能核的展品。你不替它补写人的命运。林澄的岗位记录只撑得起“三月起未到岗、联系不上”；封存说明里更肯定的说法，缺独立证明。许闻舟的离职和账号状态另列。工作上的选择有记录，说得清；这份文件写不完他们的一生。',
     '附上最终审计和交接出处，存下这份本地交付。已成的判断带引用，修订指回旧版，没做完的事写清接手岗位该办什么。文件还没发出去，实际谁来接收、怎么保管，得在站外确认。下一位打开首页，就能顺着出处查你的判断；不同意，也可以留着这版另写修订。'
    ],[
     'The original audit and the final seal are done. The note the handover worker expected to fit on one page now carries old drafts, source records and annexes of pending work. The file is thicker, and every page has a place. Registry checks sit apart from personnel claims, adopted positions lead back to earlier versions, and the unfinished issuing work has a scope note.',
     'The historical identity is registered by how the material formed: a documentary entry, with no original personnel authentication. Lin’s own inquiry stays separate. She asked for formation to be traced and for the old material to be kept. Xu revised his recommendation; the worker changed the checklist tick back. Each act has an author and a source and can be passed to the next worker one by one.',
     'How the final document reads depends on the three decisions. Provisional use of the correction needs an explicit retraction; a held draft keeps a review duty that has to be followed. A named summary states both positions directly; a role summary needs the signed page to find the authors. The technical report hands over checked facts with its uncertainty; the referral lists unfinished duties by role. Either way, the facts do not change and the material stays.',
     'The system-generated closing page stays as it was written, as an exhibit people can cite and check. You do not write anyone’s fate into it. Lin’s personnel record supports “absent from March, could not be contacted” and no more; the stronger wording in the sealed description lacks independent proof. Xu’s resignation and account status stay separate. The choices made at work can be recorded and explained. This document cannot finish their lives.',
     'Attach the final audit and handover sources and save this local handoff. Findings carry citations, revisions point back to earlier versions, and unfinished matters name what the receiving role has to do. The file has not been sent. Who actually receives it and how it is kept has to be confirmed outside this site. The next worker opens the front page, follows the sources and checks your judgment. If they disagree, they can keep this version and write their own revision.'
    ]),sources:['nLastNote','nAudit','nVersions','nDeparture','aVerdict','aSealed'],fixedSources:['aVerdict','nLastNote'],options:[
     {id:'record',label:b('附最终出处，保存可追结论与接手待办','Attach final sources; save traceable findings and follow-up duties'),note:b('本地文件留着已成的判断、修订和没做完的责任。实际谁来接收，另说。','The local file keeps the findings, revisions and unfinished duties. Actual receipt is still to be confirmed.')}
    ],action:b('保存交接记录','Save handover')
   },
  ],
  aftermath: {
   registry:b('登记核对做完了，只给这一项添了实际依据。未签发的勘误不能借它变成整批确认。下一步查机构附件，看登记处在什么材料关系里。你接着的是交接员留下的空栏，不是往空栏里塞一个人。','The registry check is done and adds grounds for this item only. The unsigned correction cannot borrow it as batch-wide confirmation. Examine the institutional attachment next to see where the registry sits. You are continuing the field the handover worker left open, not inventing someone to fill it.'),
   institution:b('机构关系给附件划了范围，没有顺手认证人员条目。勘误是暂用还是暂存，要在工作副本里写清，不能只靠一个蓝夹子。下一日查姓名附件接在什么材料上，接着林澄把人员主张单列出来的做法。','The institutional check bounds the attachment; it does not authenticate the personnel entry. Write down whether the correction is used provisionally or held, not in a blue clip. Next day, examine what the name attachment is connected to, continuing Lin’s separation of the personnel claim.'),
   namecode:b('姓名条目现在可以记成本轮查过的主张。人员认证还得等原始依据。下一份地点材料检验附件说的现实范围，接着做林澄工作纸上的待办。地点结果单独记。','The name entry can now be recorded as a claim checked this round. Personnel authentication still waits on original grounds. The place material next tests the attachment’s real-world scope and continues the worksheet. Record the place result separately.'),
   building:b('地点核对有自己的一格，人物认证不能共用。许闻舟可以把这项实做写进月报，但录音支持还欠自己的检查。下一份双卷材料查的是比对工作怎么安排，别让地点正确替录音独立性签字。','The place check has its own completion entry; the person cannot share it. Xu may put this real work in the monthly report, but recording support still needs its own check. The reel material next examines how the comparison was arranged, without letting a correct place sign for recording independence.'),
   reelnote:b('双卷的工作关系可以接着查了。这份指令只说明材料怎么安排，不算第二个见证。下一步核采样之间的关系，给许闻舟会前的说明留下一个真正做完的比对项，也给林澄的独立性问题划个边界。','The working relationship between the reels can be followed further. The instruction only arranges material; it is not a second witness. Next, check the relation between the samples, giving Xu’s meeting note a genuinely completed comparison and Lin’s independence question a boundary.'),
   reels:b('比对结果改变了双卷一起支持附件的方式，不能只记一句“又核完一项”。下一章看修复链怎么做出可读的工作版。林澄留下依据，许闻舟留下说明，你接着他们做过的往下查。技术成果留着；没查的来源还是待核，别拿成果作保。','The comparison changes how the reels support the attachment together; it is not just another tick. The next chapter looks at how the repair chain produces a readable working version. Continue from Lin’s grounds and Xu’s notes. Keep the technical results, but guarantee no unchecked source with them.'),
   dial:b('转盘查完，这份维修图的工作读法可以记了，旧边注和这次采用的区别也留着。下一步查双轨材料，看整理后的信号怎么表达。这一步还得实际核，维修图答不了。采用依据仍归当班的工作版，不能倒写成历史原样。','The dial check lets the repair diagram’s working reading be recorded, with its difference from the old margin. The rails next show how the reconstructed signal is represented. That step still needs an actual check; the diagram cannot answer for it. The adopted grounds belong to the shift’s working version, not to a rewritten original.'),
   tracks:b('双轨检查拿到的是整理后的信号表达。读得出来，不保证转录一路没错。下一步用电路校验纸，看接收记录在有限规则内可不可靠。所以许闻舟的摘要要把“能读”和“已校验”分开写。前一项做完，不能替后一项打勾。','The rails give the representation of a reconstructed signal. Being readable does not prove the transcription was error-free. The circuit sheet next tests whether the received record is reliable within its stated rules. Xu’s summary therefore keeps “readable” and “checked” apart; the first does not tick the second.'),
   parity:b('电路校验给了接收记录有限的可靠性，但没说它来自哪个历史载体。先记下林澄和许闻舟各自的采用责任，再核原始声音：看工作说明漏了什么。纸面校验不能当成听过载体。','The circuit check gives the received record limited reliability. It does not show which historical carrier it came from. Record Lin’s and Xu’s separate responsibilities for adoption, then check the original audio: what did the working note leave out? A paper check is not proof that anyone heard the carrier.'),
   noisewords:b('声音检查给工作说明加了一条实际约束。保管和形成记录还得另核。下一日看内容审计和退回的申请，查后期材料怎么进了工作版。林澄要求把形成、加工、开放时间分开，这项申请还没有具体答复。','The audio check adds a real constraint on the working note. Custody and formation records still need separate checks. Next, look at the content audit and the returned request, and at how later material entered the working version. Lin asked for formation, processing and release dates to be separate; the request still has no specific answer.'),
   audit:b('核了内容的年代和用途，复核申请有了具体对象。这不指定谁的动机，也不指定谁操作的。下一份是零页卷宗，看它留下的处理手续。许闻舟帮着改语气这件事也留着，但那不是申请已经办过的凭证。','Checking the content’s date and use gives the request something specific to examine. It names no motive and no operator. The pageless volume next shows what handling traces remain. Keep the fact that Xu softened the wording; it is not a receipt proving the request was handled.'),
   hiddenindex:b('残片和处理记录说明，“没有页面”不等于“没人经手”。注销、分发、取得还是分栏记。下一步把取件通知要求的实际核验做完。数字保管附记只记通知，不替你拿到东西，也不往纸上添字。','Fragments and handling records show that “no pages” is not “no one handled it.” Revocation, distribution and possession stay in separate fields. Next, finish the actual check the pickup notice calls for. The digital custody note records the notice only; it neither obtains the item nor adds words to the sheet.'),
   dropcoords:b('原有的取件核验做完了。这个状态不能独立证明现场经过，也证明不了谁的去向。下一份馆外剪报是另一个有限的检查对象，接着林澄做过的出处核对，别让一个二维码替整批材料挣信用。','The original pickup check is complete. That status does not independently prove a visit or anyone’s whereabouts. The outside newspaper gives another limited object to check, continuing Lin’s provenance work rather than letting a QR code earn credit for the whole batch.'),
   newsclip:b('馆外核对给了这一页一条实际约束，但不为那些关于人的说法背书。下一日回头看附录、旧档和来源记录，查几份支持材料是不是真有不同的形成路线。这次外部核对留在自己的范围里，整体判断要改也不作废它。','The outside check constrains this page; it does not endorse the statements about people. Next day, return to the annex, the older archive and the provenance records to test whether the supporting items really formed by different routes. Keep this outside check within its own scope even if the overall judgment changes.'),
   annex:b('附录检查把工作版和相关版本的关系查清楚了。可“要求保留”不等于真的留住了。下一步查旧档联系，核同馆题名之外的那段来源。许闻舟要改旧稿，光认错不够，得有材料。','The annex check makes the working version’s relations to other versions traceable. A request to retain something is not proof it was retained. Check the older archive connection next, including the part outside the archive’s own title. Xu’s revision of his draft needs material behind it, not just an admission.'),
   recursion:b('旧档联系可以记了。引用关系和支持是否独立，还是得分开。下一步看处理日志，查几份材料怎么进了同一个工作体系。许闻舟撤回的是他的使用建议；来源判断还得按日志来做。','The older archive connection can be recorded. A citation is still not independent support. Look at the processing logs next, to see how several items entered the same working system. Xu withdrew his recommendation for use; the provenance judgment still has to rest on the logs.'),
   provenance:b('来源核对要求早期那条使用建议留下有记录的修订：暂用的，明确撤回；暂存的，继续复审。下一项外业复核给一条实地约束，不会给同源文本多添一票。林澄的去向另列，材料形成图答不了。','The provenance check requires a recorded revision of the early recommendation: provisional use gets an explicit retraction, holding gets continued review. The field check next supplies a real-place constraint, not another vote for text from the same root. Lin’s whereabouts stay separate; a formation chart cannot answer for them.'),
   triangulate:b('外业复核又做完一项有限检查，可以支持最终文件的技术范围，填不了人的命运那一栏。下一日打开最终审计，核事实和签名边界。许闻舟的离职、账号移除，林澄的未到岗，不共用一个结项勾。','The field check completes another limited check and can support the report’s technical scope. It does not fill the field for a person’s fate. Open the final audit next and check the facts against the signature boundary. Xu’s resignation, his removed account and Lin’s absence do not share one closing tick.'),
   masterkey:b('封存材料可以核了。原说明里那个更强的说法仍归原说明，不能直接当独立证明。下一步把原有审计判断做完。综合组末栏要求把形成时间和后期转录分开，别让结案文字又替不知道的事下结论。','The sealed material can now be checked. The stronger wording still belongs to its own description and is not independent proof. Complete the original audit judgment next. The final field asks that formation dates and later transcription stay separate, so the closing text does not rule on the unknown again.'),
   judgment:b('原有的事实判断做完了，最后封印还得按原流程。之后存下的交付要同时带上已成的结论、版本修订和没做完的责任。生成结案页是一份能检查的展品。你接过的是同事的工作，不是替他们一生签字的权利。','The original factual judgment is complete; the final seal still follows its original process. The handoff you save afterwards must carry the findings, the version revisions and the duties still owed. The generated closing page is an exhibit that can be checked. You are taking on colleagues’ work, not the right to sign for their whole lives.')
  },
  documents: {
   correction: {
    held: {title:b('勘误处理单：争议稿留存','Correction disposition: disputed draft retained'),text:p([
     '本地决定：这份未签发勘误留作争议稿，不作为通用的使用建议。依据是勘误往来、首批登记和批次材料，以及已经核过的机构附件。列出这些材料，只说明本决定的范围，不等于它们一起完成了人员认证。',
     '原来的工作稿、双方回批和核过的材料都留着。没签发，不代表这稿从没提出过，也不代表里面每条判断都错。本单没有替林澄或许闻舟改动当时的主张，没有对外发出，也没有取得机构签发资格。',
     '还欠的事：出了新来源，要回查这份稿原先靠的那些支持，记下哪些还能用、哪些要改。暂存不是结项，争议不能只靠一个夹子的颜色表示。下一位在首页就该看到没做完的复核和出处。'
    ],[
     'Local decision: keep the unsigned correction as a disputed draft, not a general recommendation for use. The grounds are the correction exchange, the first registry and batch material, and the checked institutional attachment. Listing those sources sets the scope of this decision; it does not mean they together authenticate anyone.',
     'Keep the working draft, both replies and the checked material. Unissued does not mean never proposed, and it does not mean every judgment in it was wrong. This record changes neither Lin’s nor Xu’s position at the time. It sends nothing out and confers no institutional issuing authority.',
     'Still owed: when new source material appears, go back over what this draft relied on and record what still holds and what needs revision. Holding it is not closing it, and a clip colour cannot carry the dispute. The next worker should find the unfinished review and its sources on the front page.'
    ])},
    provisional: {title:b('勘误处理单：有限暂用','Correction disposition: bounded provisional use'),text:p([
     '本地暂用就写这一句：“将人员附件暂列作登记材料关联索引，供继续查阅；尚未取得人员原始登记，不作身份认证。”首页标上“暂行、待来源复核”。依据是勘误往来，以及核过的登记、批次和机构关系。只在玩家的副本里采用，不对外发文，也不算机构确认。',
     '本单是为主动采用一份工作意见负责，不是宣称附件已经完成独立的人员认证。原稿、旧版和支持材料一起留着，不能让读者只拿到一张干净的新封面。林澄要保留的分歧、许闻舟想先给工作版的理由，各归各人。',
     '什么情况下撤回：后面的来源检验要是撑不住当初给它的信用，就另存一份明确的撤回，指回本单和旧稿。只改措辞不够，曾经暂用这件事必须留下。就算没有对外送达，工作副本也要写清这份意见哪天用过、为什么不再用，下一位要查得到。'
    ],[
     'The local provisional wording is this: “Provisionally list the personnel attachment as a related registry index for further consultation; no original personnel registration has been obtained and no identity is authenticated.” Mark it “provisional, provenance pending” on the front. The grounds are the correction exchange and the checked registry, batch and institutional relationships. Use it only in the player’s copy, not as a dispatch to the desk or an institutional confirmation.',
     'This record takes responsibility for adopting a working position. It does not claim the attachment has been independently authenticated. Keep the draft, the earlier version and the supporting material together, so readers do not receive only a clean new cover. Attribute Lin’s retained disagreement and Xu’s reasons for wanting a working version to each of them.',
     'When to retract: if later provenance cannot support the credit it was given, save an explicit retraction pointing back to this record and the draft. Changing the wording is not enough. The fact that it was used provisionally has to stay. Even with no external delivery, the working copy must say when the position was used and why it no longer is, so the next worker can find it.'
    ])},
    notRecorded: {title:b('勘误处理单：旧存档未记录','Correction disposition: not recorded in the older save'),text:p([
     '旧存档里没记这项选择。技术进度留着，但别因此认定玩家暂用过或拒绝过勘误。',
     '本地档案里留着未签发勘误和原材料，随时能翻。',
     '以后补写工作意见，要写明是现在回头写的，不能编一个第一日的签发、撤回或送达日期。没记录不等于争议没了。来源和使用范围，下一位还得核。'
    ],[
     'The older save records no choice here. The technical progress is kept, but do not infer that the player used the correction provisionally or refused it.',
     'The unsigned correction and the original material stay in the local archive, available to look at.',
     'Any opinion written later must say it is written now, in hindsight. Do not invent a first-day issue, retraction or delivery date. “Not recorded” does not mean the dispute is gone. Source and scope still need checking.'
    ])}
   },
   revision: {
    held: {title:b('复审记录：争议未转成定稿','Review record: dispute not turned into a final version'),text:p([
     '第一日那份“暂列关联索引”的争议稿，这一轮做完了来源复审。人员附件照样能看，但按加工中形成的条目来研究，不再当成等人事登记补证的暂行关联。依据是英文附录、旧档关联和追溯表。许闻舟的两版说明只记他自己的修订，不算多出一份独立历史证据。',
     '当初没有背书过，所以本单不编一次撤回。现在写清楚：几份整理件说法一致，换不来独立形成路线；地点核对也替不了人员认证。做完的核对保留自己的效力。争议稿不整份删掉，也不升成正式确认。',
     '没做完的责任照旧：材料保管岗位复核原始载体和移交；复核岗位逐条回答先前的申请，别拿一份没写缺项的退回当结论。林澄的去向、许闻舟的离职，各按记录的范围列，不归这次来源复审下人事结论。'
    ],[
     'This round reviews the first-day “provisional related index” draft by source. The personnel attachment stays readable, but it is studied as an entry formed in processing, not as a provisional relationship waiting for personnel corroboration. The grounds are the annex, the older archive connection and the provenance table. Xu’s two versions record his own revision, not an extra piece of independent history.',
     'No endorsement was given, so this record invents no retraction. It states plainly that agreement among compilations cannot replace distinct formation routes, and a place check cannot stand in for personnel authentication. Finished checks keep their own force. The draft is neither deleted wholesale nor promoted to official confirmation.',
     'The unfinished duties remain: custody checks the original carriers and transfers; review answers the earlier request item by item, rather than treating a return that names no missing item as a conclusion. Lin’s whereabouts and Xu’s resignation go in their own sourced fields. This provenance review draws no personnel conclusion.'
    ])},
    provisional: {title:b('明确撤回：暂用关联索引改列形成条目','Explicit retraction: related index reclassified as a processing entry'),text:p([
     '现在明确撤回：第一日本地工作版把人员附件暂列为登记材料关联索引，这个采用建议撤回。当初没有认证身份，撤回也不编一个“曾经认证过”。撤回只针对这条暂用的关联索引，不碰原登记、全部修复劳动，也不涉及站外送达。旧处理单、工作稿和引用都留着，当时的有限理由查得到。',
     '撤回的依据是后面的来源检查。许闻舟的修订只记他自己的动作，不为来源检查作证。附件和登记的关系，本来只是方便查阅的暂行安排。现在不再把它当作“等人事登记补证”的关系来推荐，改列为加工中形成的条目，留着研究它是怎么形成的。索引还能查，但分类的依据变了，这次修订要写明白。',
     '当初为什么暂用，理由留着；林澄当时的异议也留着。别把两个人写成从来一致。接手的人要能同时看到：当时怎么用的、现在怎么撤的、还有哪些核对没做。下一步复核要回答具体缺什么、移交靠什么。人员去向另外查，撤回替不了它。'
    ],[
     'This explicitly withdraws the first-day recommendation to list the personnel attachment as a related registry index. No identity was authenticated then, and this retraction invents none. It withdraws only that provisional index relationship. It does not touch the registry, the restoration labour or any delivery outside the site. The old disposition, the draft and the citations stay, with their limited reasons still checkable.',
     'The grounds are the later source checks. Xu’s revision records his own act and does not vouch for those checks. The link between attachment and registry was only an arrangement for consultation. It is no longer recommended as a relationship awaiting personnel corroboration. The entry is reclassified as formed in processing, kept so its formation can be studied. The index stays readable, but its classification grounds have changed, and this revision must say so.',
     'Keep the original reasons for provisional use, and keep Lin’s objection. Do not write the two of them as always agreed. The next worker should see, in one place, how it was used then, how it is withdrawn now, and which checks remain. Further review must answer what exactly is missing and what the transfer rests on. Personnel whereabouts are checked separately; the retraction cannot do that for them.'
    ])},
    notRecorded: {title:b('复审记录：无可归责的旧选择','Review record: no recorded earlier disposition'),text:p([
     '这一轮可以记来源上的边界。但旧存档里没有勘误处理的选择，所以不能写玩家收回了曾作过的背书，也不能写玩家一直拒绝背书。',
     '许闻舟撤回的是他自己的建议，那是他材料里的动作，不能安到玩家头上。',
     '做完的技术核对都留着。相关摘要还是要把“说法一致”和“独立形成”分开，并列清没做完的保管和复核责任。补写的工作意见属于现在回头写，不能倒填一个旧版日期。'
    ],[
     'Source boundaries can be recorded this round. But the older save has no correction decision, so you cannot say the player withdrew an earlier endorsement or always refused one.',
     'Xu withdrew his own recommendation; that act belongs to his material, not to the player.',
     'Keep the technical checks already completed. The related summary still has to separate agreement from independent formation and list the custody and review duties still owed. Any opinion added now is written in hindsight and cannot be backdated to an old version.'
    ])}
   },
   attribution: {
    named: {title:b('责任摘要：实名、分歧分别归属','Responsibility summary: names and separate positions'),text:p([
     '这份实名摘要按二月的往来记下两条主张：林澄要求保留原始载体和各版的采用依据；许闻舟想先给一份标明待核的工作版。两人都同意留下旧件，分歧在采用说明怎么写。引用署名页和班次记录。摘要只记当时的工作意见。',
     '写实名，两条主张是谁提的一查就知道。机构责任仍按工序和权限另列，别把所有决定都算在这两人头上。摘要只记有出处的个人动作。别的材料上署名空着，就保留空栏和已有的经办文字。',
     '跟原交接单比，这份摘要让接手的人一眼认出谁提了异议、谁提了采用。后续任务仍要按岗位列，不能只写“去问林澄”或“去问许闻舟”。署名页记的是当时的工作。这份本地摘要不发送，也不会收到他们的新答复。'
    ],[
     'This named summary records two positions from the February exchange. Lin asked to keep the original carriers and the adoption grounds for each version. Xu wanted a working version marked pending. Both agreed to keep the old material; they differed on how the adoption note should read. Cite the signed page and the shift record. The summary records their positions at the time.',
     'With names, it is easy to see who proposed what. Institutional duties are still listed separately by process and authority; not every decision belongs to these two. Record only sourced personal acts. Where another document leaves a signature blank, keep the blank and the handling text already there.',
     'Compared with the original handover, this summary shows at once who raised the objection and who proposed the working version. Follow-up tasks are still listed by role, not as “ask Lin” or “ask Xu.” The signed page records the work of the time. This local summary is unsent and receives no new answer from either of them.'
    ])},
    role: {title:b('责任摘要：岗位标注、署名原件保留','Responsibility summary: roles, signed originals retained'),text:p([
     '这份岗位摘要按二月的往来记：修复岗位要求保留原始载体和各版依据；协调岗位想先给一份标明待核的工作版。留下旧件是共同要求，采用说明怎么写仍有分歧。原署名页和班次记录都能回查。摘要省了名字，不等于公开的签名变成匿名。',
     '正文按职责列。下一位想知道是谁提的，得回查署名页。岗位标注不直接写人，所以引用不能省。以后有改动，也要写明实际是谁改的，不能笼统写成系统更新。',
     '跟原交接单比，这份摘要看得清该接着办的位置，但不如实名摘要那样直接显出两人的分歧。公开原件和签名都没变。它图的是交接方便，不是真的隐私保护，也没有抹掉作者对过去动作的责任。'
    ],[
     'This role summary records the February positions. Repair asked to keep the original carriers and the grounds for each version. Coordination wanted a working version marked pending. Keeping the old material was a shared request; the wording of adoption was not. The signed page and shift record can both be checked. Leaving names out of the summary does not make the public signatures anonymous.',
     'The body lists duties by role. To find who proposed something, the next worker has to go back to the signed page. Role labels do not name people, so the citations cannot be dropped. Any later change must name who actually made it, not read as a general system update.',
     'Compared with the original handover, this summary shows which positions need following up, but it does not display the two colleagues’ disagreement as directly as a named summary. The public originals and signatures are unchanged. It offers convenience in handover, not real privacy protection, and it does not erase the authors’ responsibility for what they did.'
    ])},
    notRecorded: {title:b('责任摘要：署名选择未记录','Responsibility summary: attribution choice not recorded'),text:p([
     '旧存档里没有实名或岗位摘要的选择。原来的署名材料照旧留着。',
     '别推定玩家匿名处理过，也别推定玩家作过实名承诺。',
     '现在回头写，要把历史上的主张分别归人，并写明新摘要不是独立史料。以后补写署名方式，个人、岗位、机构三种责任还是要分开，不能倒填一个根本没发生过的旧决定。'
    ],[
     'The older save records no choice between a named and a role summary. Keep the signed material as it stands.',
     'Do not infer that the player anonymised anything, or that the player promised to use names.',
     'Written now, in hindsight, a summary must attribute the historical positions to their authors and say plainly that it is not independent historical evidence. A later attribution format must still separate individual, role and institutional responsibility, and must not backfill a decision that never happened.'
    ])}
   },
   attributionRevision: {
    named: {title:b('实名摘要后附：许闻舟修订本人建议','Named-summary addendum: Xu revises his recommendation'),text:p([
     '在原来的实名摘要后面附上九月的版本说明，不覆盖二月那份。许闻舟明确撤回自己“可以作为结项说明”的旧建议，原稿和林澄的异议都留着。',
     '撤回算他本人的，引用他那两版说明。别倒写成两人二月就达成了一致。',
     '原交接单只大概写了谁离岗、谁留下记录。本附页补上每件工作是谁做的：林澄提出保留，许闻舟采用过建议、后来又改。复核和保管的岗位责任还在，别把没做完的事全改成“去问某一个人”。'
    ],[
     'Attach the September version note after the February named summary, without overwriting it. Xu explicitly withdrew his earlier “may be used in the closing statement,” and the draft and Lin’s objection stay.',
     'The withdrawal is his; cite his two versions. Do not backdate it into a February agreement between them.',
     'The original handover says only roughly who left and who kept records. This addendum names who did each piece of work: Lin asked for retention, Xu adopted a recommendation and later revised it. Review and custody still carry their own duties. Do not turn everything unfinished into “go and ask one person.”'
    ])},
    role: {title:b('岗位摘要后附：协调岗位修订记录','Role-summary addendum: coordination’s revision'),text:p([
     '在二月的岗位摘要后面附上九月修订：协调岗位撤回先前那条结项使用建议，旧稿和修复岗位的异议都留着。',
     '正文继续用岗位标注，靠许闻舟那两版说明找回是谁；这不是一次没人署名的系统更新。',
     '原交接单记的岗位状态，代替不了这次修订。岗位摘要方便分派后续任务；接手的人想知道具体是谁提的，还得多翻一页。公开的署名原件不变。复核和保管岗位仍要接着处理没做完的事。'
    ],[
     'Attach the September revision after the February role summary: coordination withdrew the earlier closing-use recommendation, and the draft and repair’s objection stay.',
     'Keep role labels in the body and use Xu’s two versions to recover who it was. This is not an unsigned system update.',
     'The role status in the original handover cannot stand in for this revision. Role summaries are useful for assigning follow-up work; anyone who needs to know who proposed something still has to turn another page. The signed originals stay public. Review and custody still have to deal with what is unfinished.'
    ])},
    notRecorded: {title:b('后附修订：署名方式未记录','Revision addendum: attribution format not recorded'),text:p([
     '旧存档里没记署名摘要的方式，本附页不替它补一个选择。',
     '许闻舟九月的修订按他自己署名的材料登记；二月的主张仍按二月的记录理解。',
     '现在回头另写岗位或实名摘要，要注明是现在写的，并保留原件引用。别把后来的修订塞进旧摘要里，让人以为作者早就撤回了，或者两边早就一致了。'
    ],[
     'The older save records no attribution format, and this addendum does not invent one.',
     'Xu’s September revision is registered by his own signed material; the February positions are still read in their February setting.',
     'A role or named summary written now must be dated now and keep its citations to the originals. Do not slip the later revision into an earlier summary and leave the impression that the author had already withdrawn, or that the two sides had already agreed.'
    ])}
   },
   scope: {
    report: {title:b('技术报告与不确定性附页','Technical report and uncertainty annex'),text:p([
     '本地技术报告先把范围写定：档案形成、支持关系、有限的外部约束。这份范围稿不替还没做完的审计动笔。最终判断等原有核验做完，再连同引用材料一起列。修复件补不齐身份认证；说法一致也不自动等于独立。系统生成的结案文字另作展品留着。',
     '本报告只在最终核验做完以后关掉技术工作，不签“程序和人员也都结了”。林澄三月起未到岗、联系不上，有岗位记录，但没有独立的死亡证明；晚期整理里的说法要另核出处。许闻舟离职、账号被移除，分开记，不等于人不在了。',
     '不确定性附页跟正文一起交，不能缩成末尾一句免责。具体待办：材料保管岗位核对原始载体、形成记录和移交范围；复核岗位逐条回应那份没撤回的申请和缺项；有权的人事岗位另查联系和去向记录。项目清点代替不了没收到东西的保管凭证。',
     '版本处理和署名摘要按已存的决定另附；没记录过的选择，就写“未记录”。本地保存、导出，不等于送到了、签发了或者被受理了。谁接收、谁有保管权限、人员怎么核，都得在站外依法确认。技术报告做完，不代表已经有人接手。',
     '报告按期结项，格式也就按期回到原样。下一班仍会拿到同样空的持有人栏。你把这一轮做干净了，但没有让它停下。'
    ],[
     'Set the report’s scope first: formation, support relationships, and limited outside constraints. This scope draft does not write the audit that is not finished. Final findings are listed only after the original verification, with their cited material. Repair cannot complete identity authentication, and agreement is not independence. The system’s closing text stays as a separate exhibit.',
     'This report closes the technical work only after final verification. It does not sign off “procedure and personnel too.” Lin’s absence from March and the failed contact are on a personnel record, but there is no independent proof of death; wording that appears in later compilations needs its own provenance checked. Xu’s resignation and account removal are recorded separately. Neither means the person is gone.',
     'The uncertainty annex goes out with the body, not as one disclaimer at the end. Specific tasks: custody checks the original carriers, formation records and transfer scope; review answers the unwithdrawn request item by item and names the missing parts; personnel staff with authority check the contact and whereabouts records. A project inventory is not a custody receipt for things never received.',
     'Version handling and the attribution summary are attached from the saved decisions; choices never made are marked “not recorded.” Saving or exporting locally is not delivery, issuance or acceptance. Who receives the file, who has custody authority and how personnel are checked must all be confirmed lawfully outside this site. A finished report does not mean someone has taken the work on.',
     'The report closes the round on schedule, and the form returns to its old shape. The next shift will still receive the same empty holder field. You made this round clean; you did not make it stop.'
    ])},
    referral: {title:b('未尽复核转交稿','Referral draft for outstanding review'),text:p([
     '本地转交的范围先记下：做完的检查和依据留着，最终判断等原有审计后再列。本人不签“全部事项已结”。现在的依据是来源记录、外部核对和补充交接页，最后审计另附。接手的人可以用已经成立的有限成果，把力气放在没做完的项目上。',
     '接手责任分开列：材料保管岗位核对原始载体和电子副本的关系，补查形成、移交记录；复核岗位回答林澄那份没撤回的申请，写明缺项和继续审查的条件；有权的人事岗位独立核查联系记录和去向，别从项目状态推人的命运。',
     '转交不能把这些边界抹掉：还没拿到人员认证的身份，不写成已经证实的真人受害者；林澄三月以后去向不明，没有独立死亡证明；许闻舟离职、账号被移除，不是人不见了。不同的删除状态按各自的出处和对象记，别并成什么“机器的意志”。',
     '转交包里要有版本处理记录、署名摘要、已成的结论和没做完的事，不能只给下一位一句“请继续查”。本站不发这份稿，不保证受理，也没有实际接收岗位或凭证。后面得依法确认谁来接收。确认之前，这份稿仍是本地未发送，别把责任写成已经交出去了。',
     '转交稿第一次把没做完的事写在一个具体的人名下。它不是结项，也不保证有人接。但它把出口从“下一轮”挪到了“下一个人”。'
    ],[
     'Register the referral’s local scope first: finished checks and their grounds stay, and final findings are added after the original audit. Do not sign “everything closed.” The present sources are provenance records, outside checks and the supplementary handover page; the final audit is attached later. The next worker can use the limited results already established and put effort into what is unfinished.',
     'Set out the duties separately. Custody checks the relation between original carriers and electronic copies and recovers formation and transfer records. Review answers Lin’s unwithdrawn request, naming what is missing and what further review would require. Personnel staff with authority independently check contact and whereabouts records, rather than inferring a person’s fate from the project’s status.',
     'Referral does not erase these boundaries. An identity without personnel authentication is not written up as a confirmed real victim. Lin’s whereabouts after March are unknown, with no independent proof of death. Xu’s resignation and account removal are not a person disappearing. Different deletion states are recorded by their own source and object, not merged into some “machine intention.”',
     'The referral pack contains the version handling, the attribution summary, the findings and the unfinished duties. It is not one line to the next worker saying “please keep looking.” This site does not send the draft, does not guarantee acceptance, and has no actual receiving office or receipt. A lawful receiving arrangement must be confirmed later. Until then the draft stays local and unsent; do not write the responsibility up as already handed over.',
     'The referral puts the unfinished work under a named person for the first time. It is not a closure, and it does not guarantee anyone will take it. But it moves the exit from “the next round” to “the next person.”'
    ])},
    notRecorded: {title:b('结尾范围：旧存档未选择','Closing scope: not chosen in the older save'),text:p([
     '旧存档保留了做完的技术进度，但没记选报告还是转交。',
     '本文件不能替玩家造一份签过的报告，也不能宣布一次根本没发生的转交。原结案展品按原来的权限照样能看。',
     '共同的边界还是那几条：技术事实、程序责任、人员去向分开列；林澄的死没有独立证明；许闻舟离职和账号状态不等于人不在了。后续工作要附来源、留版本，接收和核查安排依法另定。'
    ],[
     'The older save keeps the technical progress but records no choice between report and referral.',
     'This file cannot produce a signed report for the player, or announce a referral that never happened. The original closing exhibit remains viewable under its original rules.',
     'The shared boundaries still hold: technical facts, procedural duties and personnel whereabouts are listed separately; Lin’s death has no independent proof; Xu’s resignation and account status do not mean he is gone. Follow-up work needs sources, kept versions, and receiving and checking arrangements confirmed by law.'
    ])}
   }
  },
  epilogue: {
   zh: [
    '目录整理好了。最早的勘误和后来的修订分开列，各带引用。摘要留着两种主张，没写成“经讨论一致”。十月交接员划掉的那个勾还在清单上。她本来只想留最后版，后来按许闻舟的要求全收了。文件厚了一点，可每次改动都找得到前一页，不用先查哪版被抽走。',
    '许闻舟起初想让窗口有一页能用的答复，林澄要那页写清自己的范围。他嫌说明厚，她怕脚注在转存里丢掉。九月他留下旧建议，明确收回结项使用，也留着她的异议。离职手续办完了，待核清单仍按他欠下的工作留着。林澄三月以后没再到岗，去向仍不明；封存说明里的说法没有独立死亡证明。她的工作记录另有具体条目，能查到她提过的要求、坚持留下的版本。',
    '你的文件也留下了自己的处理过程。暂用关联索引，对应明确的撤回和重新分类；暂存稿，对应复审和继续核查。岗位摘要指回署名页，实名摘要同时列机构职责。技术报告带着待办附页，转交稿写清接手岗位要办什么；旧存档缺的决定，写明“未记录”。导出时这些记录跟正文一起走，真正的接收和保管安排还得另外确认。',
    '二月班次记录里那张纸晾了一夜。许闻舟赶着开会，林澄夹起湿纸一角，免得贴灯烤卷。第二天有人问采用依据，后面几页说明才被翻开。旧交接单还记着，手套晾干再收，钥匙别拿走。你没法照看他们后来每一天的工作，只能把这一批材料留好：难装的旧版有位置，待查页不会因为封面要整齐就被移出清单。',
    '历史姓名作为加工中形成的条目留着。林澄的申请、许闻舟的修订、交接员的清点，分别归档；人员状态另列，去向不明的仍待查。首页放已核的结论，后面是旧版和没做完的事。下一位从林澄那格窄栏接着查，能直接找到对应材料。要改你的说明，这一版也留着。',
    '你把几张表摊在一起：尼普尔的泥板、雅典的石刻、汉代的木牍、巴格达的税册、1946 年的登记表、1986 年的修复摘要、1998 年的勘测件。语言不一样，栏位一样，空的地方也一样。1998 年那件干脆被盖了注销章，连空栏都没留下。',
    '这不是你第一次坐在这张桌子前。记录里没有你的名字，可每一轮都留了一个位置，等下一班来填。CORE-17 有人读作目录编号；你现在更愿意把它读作这一格式的第十七次登记。',
    '你想出去。不是离开这间阅览室，是从这张表里出去。报告会让它再跑一轮；转交至少把没做完的事交到一个活人手里。那张没有被系统誊录过的纸还在你手上——持有人栏第一次可以不空着。'
   ],
   en: [
    'The catalog is arranged. The first correction and the later revision have their own entries and citations. The summary keeps the two positions and does not say “unanimously agreed.” The tick the October worker crossed out is still on the checklist. She first wanted to keep only the latest version, then took them all as Xu asked. The file is a little thicker, but every change leads back to the page before it. No one has to work out which version was pulled.',
    'Xu first wanted one usable reply for the desk. Lin wanted that page to state its own scope. He thought the notes too thick; she feared the footnote would be lost when the file was passed on. In September he kept his old recommendation, explicitly withdrew its use in the closing statement, and kept her objection. His resignation is complete. The pending list stays as the work he owed. Lin has not been at work since March and her whereabouts are still unknown; the wording in the sealed description has no independent proof of death behind it. Her own work records have specific entries showing what she asked for and which versions she insisted on keeping.',
    'Your file keeps its own handling history too. Provisional use of the related index has an explicit retraction and reclassification behind it; a held draft has review and further checks. The role summary points back to the signed page; the named summary also lists institutional duties. The technical report carries its annex of pending work; the referral states what the receiving roles must do. Choices the older save never made are marked “not recorded.” On export, these records travel with the body. Who actually receives and keeps the file still has to be confirmed separately.',
    'The paper in the February shift record lay out overnight. Xu was rushing to a meeting; Lin clipped up the wet corner so it would not curl against the lamp. The next day someone asked for the adoption grounds, and the pages behind the note were opened. The original handover still says to dry the gloves before putting them away, and not to take the key. You cannot look after every working day they had afterwards. You can keep this batch in order: the awkward old versions have a place, and the pending pages are not pulled out because the cover has to look tidy.',
    'The historical name stays as an entry formed in processing. Lin’s request, Xu’s revision and the worker’s inventory are filed separately. Personnel status has its own field; unresolved whereabouts remain unresolved. Findings go on the front; old versions and unfinished work go behind. The next worker can follow Lin’s cramped field straight to the material. If they revise your note, this version stays too.',
    'You lay the sheets side by side: the Nippur tablet, the Athenian stone, the Han slips, the Baghdad tax register, the 1946 registry, the 1986 repair summary, the 1998 survey. Different languages, the same columns, the same blanks. The 1998 item was stamped revoked; it did not even keep a blank field.',
    'This is not the first time you have sat at this desk. Your name is in none of the records, but every round leaves a place for the next shift to fill. Some read CORE-17 as a directory number; you are more inclined to read it as the seventeenth registration in this format.',
    'You want out. Not out of this reading room — out of the form. A report lets it run again. A referral at least puts the unfinished work in a living person’s hands. The sheet the system never transcribed is still yours. For once, the holder field does not have to stay empty.'
   ]
  },
  loops: [
   {
    era:b('约前 1750 · 尼普尔','c. 1750 BCE · Nippur'),
    lang:b('苏美尔语 · 楔形文字转写','Sumerian · cuneiform transliteration'),
    line:'MU NU.SAR',
    record:b('泥板借贷清单。名未书，持有人栏空着。','Clay loan list. The name is not written; the holder field is empty.'),
    blank:b('持有人栏','Holder field'),
    missing:b('书吏，名姓未著录','Scribe, name unrecorded'),
    left:b('泥板边缘有一道后刻的横线，压在空白栏上。','A later scratch crosses the blank field.'),
    closed:b('烘干入藏，后来又被抄进另一块泥板。','Baked into the collection, then copied onto another tablet.')
   },
   {
    era:b('约前 450 · 雅典','c. 450 BCE · Athens'),
    lang:b('古希腊语 · 石刻','Ancient Greek · stone'),
    line:'τὸ ὄνομα οὐ γέγραπται',
    record:b('神庙财产清单。经手人一栏空着。','Temple inventory. The handler field is empty.'),
    blank:b('经手人栏','Handler field'),
    missing:b('记录员','The recorder'),
    left:b('后来有人在空白栏上刻了一道横线。','Someone later cut a line across the blank.'),
    closed:b('石板被磨平，改刻另一份清单。','The stone was ground down and recut for another list.')
   },
   {
    era:b('约前 100 · 汉','c. 100 BCE · Han'),
    lang:b('古汉语 · 木牍','Classical Chinese · wooden slips'),
    line:'持有人闕，勿補',
    record:b('木牍簿籍。持有人一栏空着，七组编号。','Wooden-slip register. The holder field is empty; seven groups of numbers.'),
    blank:b('持有人栏','Holder field'),
    missing:b('书佐','The clerk'),
    left:b('另一枚木牍上写着“勿補”。','Another slip reads: “Do not fill it.”'),
    closed:b('重编成册，旧牍留在夹层。','Rebound into a volume; the old slips stayed in the lining.')
   },
   {
    era:b('约 850 · 修道院','c. 850 · monastery'),
    lang:b('拉丁语 · 羊皮纸','Latin · parchment'),
    line:'Nomen possessoris deest.',
    record:b('修道院财产清册。持有人一栏空着。','Monastic property inventory. The holder field is empty.'),
    blank:b('持有人栏','Holder field'),
    missing:b('抄写员','The copyist'),
    left:b('页边一行小字：ne suppleas（勿补）。','A marginal line: ne suppleas — do not fill it in.'),
    closed:b('重新抄进新的会院册，旧页留作废纸。','Recopied into a new house book; the old leaf kept as waste.')
   },
   {
    era:b('约 950 · 巴格达','c. 950 · Baghdad'),
    lang:b('阿拉伯语 · 纸册','Arabic · paper register'),
    line:'اسم المالك بياض',
    dir:'rtl',
    record:b('税务登记册。持有人一栏空着。','Tax register. The holder field is empty.'),
    blank:b('持有人栏','Holder field'),
    missing:b('书记','The scribe'),
    left:b('页边一行：لا تملأ（勿填）。','A marginal line: la tmla — do not fill it.'),
    closed:b('换税年重抄，旧册归档。','Recopied for a new tax year; the old register filed.')
   },
   {
    era:b('1946 · 南屿','1946 · Nanyu'),
    lang:b('中文 · 英文电报式','Chinese · telegraphic English'),
    line:'持有人 · HOLDER —',
    record:b('设备登记表 WX-1946-011，第三抄本，电报式转写。','Device registry WX-1946-011, third copy, telegraphic transcription.'),
    blank:b('持有人栏','Holder field'),
    missing:b('当班登记员，未署名','Duty registrar, unsigned'),
    left:b('归档时持有人栏仍是空的。','The holder field was still empty when it was filed.'),
    closed:b('2026 年补录为“许静仪”，一个从未出生的人。','Backfilled in 2026 as “Xu Jingyi,” a person never born.')
   },
   {
    era:b('1986 · 修复组','1986 · repair group'),
    lang:b('中文','Chinese'),
    line:'保留的分歧',
    record:b('双卷录音与修复摘要，两卷共享采样。','Two reels and a repair summary; the reels share samples.'),
    blank:b('修复员署名栏，被改成“修复组”。','Repairer signature field, replaced with “repair group.”'),
    missing:b('原修复员','The original repairer'),
    left:b('页尾窄格：“保留的分歧”。','A cramped footer field: “disagreement retained.”'),
    closed:b('组名覆盖个人，版本继续转存。','A group name covered the person; the versions passed on.')
   },
   {
    era:b('1998 · 外业','1998 · field survey'),
    lang:b('英文 · 中文','English · Chinese'),
    line:'REVIEW: RETURNED',
    record:b('勘测件，处理链 CORE-18。','Survey item, processing chain CORE-18.'),
    blank:b('复核受理栏','Review acceptance field'),
    missing:b('勘测员','The surveyor'),
    left:b('一份被退回的复核申请，缺项没写明。','A returned review request; the missing item was never named.'),
    closed:b('盖注销章，移出馆藏。','Stamped revoked and removed from the holdings.')
   },
   {
    era:b('2026 · 本机','2026 · this machine'),
    lang:b('中文 · 英文','Chinese · English'),
    line:'未签发 / UNSIGNED',
    record:b('你的工作卷宗。二十卷技术校验，一次实体取件。','Your working dossier. Twenty technical checks, one physical pickup.'),
    blank:b('未完成的签发栏','The unfinished issuing field'),
    missing:b('林澄；许闻舟已离职','Lin Cheng; Xu Wenzhou has left'),
    left:b('那张没有被系统誊录过的纸，和你今天的决定。','The sheet the system never transcribed, and today’s decision.'),
    closed:b('待记录：报告，或转交。','To be recorded: report, or referral.')
   }
  ]
 });
})();
