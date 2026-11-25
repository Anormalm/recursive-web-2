/* Practical reading aids only. No answers, validation or saved progression. */
(() => {
 'use strict';
 const pair=(zh,en)=>Object.freeze({zh,en});
 window.ZEPHYR_GUIDANCE=Object.freeze({
  contracts:Object.freeze({
   institution:pair('1946 年，这家机构的正式全名。','The institution’s full name in 1946.'),
   building:pair('备忘里这栋楼 2026 年用的新名。','The building’s new name in 2026, as the memo gives it.'),
   reelnote:pair('纸条恢复后的字。','The note, after recovery.'),
   newsclip:pair('报道里那场活动的开幕日，不是报纸日期。','The opening date in the report — not the newspaper date.'),
   triangulate:pair('三线交点上的地标，今天叫什么。这卷查地图，不用再跑一趟。','The landmark at the three-line crossing, under its present name. Map work only — no second site visit.')
  }),
  fieldTitle:pair('参与与线下须知（非剧情）','Participation and field guidance (not fiction)'),
  fieldStatus:pair('线下取件的具体位置、通行许可、开放时间和求助方式都还没确认。确认前不要安排出行。坐标怎么表示、摘要取哪几位，也要等主办方说明，别猜。','Placement, access, opening hours and support for the pickup are all unconfirmed. Do not arrange travel before the organizer confirms. How coordinates are written and which digits the digest uses are also unconfirmed — do not guess.'),
  participation:Object.freeze([
   pair('这是虚构档案游戏。界面可切中英；中文原件和文字谜题不翻译。要查外部资料、看地图、分析音频，有些文件最好在电脑上开。','This is a fictional archive game. The interface switches between Chinese and English; Chinese originals and text puzzles are not translated. Expect outside research, maps and audio analysis; some files are easier to inspect on a computer.'),
   pair('全程有一次实体二维码取件，纯线上走不完。其余外业记录查地图即可，不用再跑。进度和笔记只留在本浏览器，没有云同步；换设备前先备份。','One physical QR pickup is part of the chain; online-only play cannot finish it. The other field records are map work — no extra trips. Progress and notes stay in this browser, with no cloud sync; back up before switching devices.'),
   pair('只在主办方确认过的公开区域、允许时段和安全条件下参与。不要进限制区域、攀爬、挪动设施、损坏物品，也不要拿剧情去问不知情的工作人员。纸张不在、地方关了或环境不安全，就停下，等主办方确认。','Only take part in public areas, permitted hours and safe conditions confirmed by the organizer. Do not enter restricted areas, climb, move fixtures, damage property, or question uninvolved staff about the fiction. If the sheet is missing, the place is closed or conditions are unsafe, stop and wait for the organizer.'),
   pair('除非主办方明确要求，纸张留在原处。只扫指定的二维码，打开前看清网址。这个游戏不会要账号、密码或付款。换手机的步骤见“工具 → 存档”。','Leave the sheet where it is unless the organizer explicitly says otherwise. Scan only the designated code and check the URL before opening. This game never asks for account passwords or payment. For phone transfer, see Tools → Save.')
  ]),
  transferTitle:pair('带手机取件时','Taking a phone to the pickup'),
  transfer:Object.freeze([
   pair('扫码前：先在电脑上备份当前存档，再把这份最新存档导进手机里要打开二维码的那个浏览器。确认是同一个网站再扫。扫码器自带的浏览器可能和平时用的不共享存档。','Before scanning: back up the computer save, then import that latest save into the phone browser that will open the QR link. Check it is the same site before scanning. A scanner’s built-in browser may not share saves with your normal one.'),
   pair('扫码后：确认页面收到了封存条，看看有没有“未保存”提示。把手机上的新存档导出备份。存储被拒时别关页面；留着原二维码链接和导出存档，等能保存了再继续。不要公开分享。','After scanning: confirm the page received the seal strip and watch for an unsaved warning. Export and back up the new phone save. If storage is refused, keep the page open and hold on to the QR link and the exported save until saving works. Do not share them publicly.'),
   pair('回电脑：先备份电脑上的工作，再导入手机的新存档。导入是覆盖，不是合并。扫完码再导入扫码前的旧存档，会把新封存条盖掉。两台设备都有新内容时，各自备份，笔记另外存。旧存档不能当同步用。','Back at the computer: back up its work, then import the newer phone save. Import replaces; it does not merge. Importing an older pre-scan save after scanning will overwrite the new seal strip. If both devices hold new work, back up each separately and keep notes apart. An older save is not a sync.')
  ]),
  pressTitle:pair('可见印字转录','Visible print transcription'),
  pressNote:pair('只抄画面里看得见的字。方括号是撕掉、挡住或认不出的地方；报头、日期、照片说明和被墨盖住的字都不补。英文照原样。','Transcribe only what is visible. Brackets mark torn, covered or unreadable areas; do not fill in the masthead, date, photo caption or letters under ink. English stays as printed.'),
  pressText:'[masthead: upper letter portions torn away]\n[date: absent]\n\nISLAND’S LARGEST MIXED-USE COMPLEX\nOPENS BY CITY HALL\nCeremony officiated by the First Deputy Prime Minister before invited guests\n\nSINGAPORE.\nTHE island’s largest mixed-use\ndevelopment was officially\nopened yesterday evening, in a\nceremony officiated by the First\nDeputy Prime Minister.\n\nThe complex, henceforth referred\nto in these columns as “the new\n[ink-obscured]”, occupies the site of\nthe island’s oldest school, which\nmoved to Grange Road in 1972\nafter more than a century at its\noriginal city-centre grounds.\n[continuation: unreadable bars]\n\nIts designer is the Chine[photo-obscured]\nAmerican architect who[photo-obscured]\npyramid would later ris[photo-obscured]\ncourtyard of the Louvre[photo-obscured]\nThe podium houses sho[photo-obscured]\noffices, with a hotel rising above;\nguests at yesterday’s ceremony\nentered through a lobby finished\nin polished granite.\n\nAsked about the school that once\nstood on the site, several guests\nrecalled the old playing field and\nthe bell that marked the periods.\n[continuation: unreadable bars]\n\n[photo caption] The new development seen from across the road.\n[pencil marginalia] 核对过，还有存[edge cut away]'
 });
})();
