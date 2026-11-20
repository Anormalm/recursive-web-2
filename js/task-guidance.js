/* Practical reading aids only. No answers, validation or saved progression. */
(() => {
 'use strict';
 const pair=(zh,en)=>Object.freeze({zh,en});
 window.ZEPHYR_GUIDANCE=Object.freeze({
  contracts:Object.freeze({
   institution:pair('提交所选机构在 1946 年的全名。','Submit the selected institution’s full name as used in 1946.'),
   building:pair('提交备忘中这栋楼在 2026 年使用的新名。','Submit the building’s new name used in 2026.'),
   reelnote:pair('提交纸条恢复后的文字。','Submit the recovered text of the note.'),
   newsclip:pair('提交报道所述事件的开业日期，不是报纸的出版日期。','Submit the opening date of the event described, not the newspaper’s publication date.'),
   triangulate:pair('提交三线交点上地标今日的名称。此卷是地图检索，不要求另一次实地到访。','Submit the present-day name of the landmark at the intersection. This file requires map research, not another field visit.')
  }),
  fieldTitle:pair('参与与线下须知（非剧情）','Participation and field guidance (not fiction)'),
  fieldStatus:pair('线下取件的当前布置、通行许可、开放时间及求助方式尚未确认。未确认前不要安排出行。坐标表示及摘要取位约定也待主办方确认；不要靠猜测安排路线。','Current placement, access permission, opening hours and support arrangements for the pickup are unverified. Do not arrange travel before organizer confirmation. Coordinate representation and digest extraction conventions also await confirmation; do not plan a route by guessing.'),
  participation:Object.freeze([
   pair('这是虚构档案游戏。界面可切换语言，中文原件与文字谜题不翻译。需要外部检索、地图及音频分析工具；部分源文件检查更适合电脑。','This is a fictional archive game. The interface is bilingual; Chinese originals and text puzzles are not translated. External research, maps and audio-analysis tools are required; some source-file inspection is better suited to a computer.'),
   pair('完整流程有一次实体二维码取件，不能仅远程完成。其他外业记录可用地图研究，不代表还要另行出行。进度与笔记留在本浏览器，没有云同步；换设备前先备份。','Completion includes one physical QR pickup and cannot be remote-only. Other survey records can be investigated with maps; they do not require additional trips. Progress and notes stay in this browser, without cloud sync; back up before changing devices.'),
   pair('只在主办方确认的公开区域、允许时段和安全条件下参与。不要进入受限区域、攀爬、移动设施、破坏财物或向不知情的工作人员询问剧情。纸张缺失、地点关闭或环境不安全时停止寻找，等待主办方确认。','Participate only in organizer-confirmed public areas, permitted hours and safe conditions. Do not enter restricted areas, climb, move fixtures, disturb property or question uninvolved staff about the fiction. Stop if the sheet is missing, access is closed or conditions are unsafe; wait for organizer confirmation.'),
   pair('除非主办方明确要求，否则把纸留在原处。只扫明确指定的二维码，打开前检查目标网址；本游戏不会要求账号密码或付款。手机转移步骤见“存档与设置”。','Leave the sheet in place unless the organizer explicitly instructs otherwise. Scan only the designated code and check its destination before opening; this game does not ask for account passwords or payment. See Save and settings for phone-transfer steps.')
  ]),
  transferTitle:pair('带手机取件时','Taking a phone to the pickup'),
  transfer:Object.freeze([
   pair('扫码前：备份电脑当前存档，在手机将要打开二维码的浏览器中导入这份最新存档。确认是同一网站，再扫码；二维码内置浏览器可能与平常浏览器不共享存档。','Before scanning: back up the current computer save and import that latest save into the phone browser that will open the QR link. Confirm the same site before scanning; an embedded scanner browser may not share saves with your normal browser.'),
   pair('扫码后：确认页面已接收封存条，并检查是否出现“未保存”提示。把手机更新后的存档导出并备份。存储被拒绝时不要关闭页面；保留原二维码链接及导出的存档，待浏览器可保存后再继续。不要公开分享它们。','After scanning: confirm the page received the seal strip and check for an unsaved warning. Export and back up the newer phone save. If storage is denied, keep the page open and retain the original QR link and exported save until the browser can save. Do not share them publicly.'),
   pair('回到电脑：先备份电脑此时的工作，再导入手机的新存档。导入会覆盖而非合并。扫码后导入较旧的扫码前存档会覆盖新收到的封存条；如两台设备都有新工作，先分别备份，笔记可另存，切勿把旧存档当作同步。','Back on the computer: back up its current work before importing the newer phone save. Import replaces rather than merges. Importing an older pre-scan save after scanning can overwrite the new seal strip. If both devices have new work, back up each separately and keep notes separately; an older save is not a sync operation.')
  ]),
  pressTitle:pair('可见印字转录','Visible print transcription'),
  pressNote:pair('仅转录画面中可见的字。方括号表示撕损、遮挡或无法辨认；不补齐报头、日期、照片下方文字或污迹后的字。英文原样保留。','Only visible print is transcribed. Brackets mark torn, obscured or illegible areas; the masthead, date, text behind the photo and ink-covered letters are not reconstructed. Original English is retained.'),
  pressText:'[masthead: upper letter portions torn away]\n[date: absent]\n\nISLAND’S LARGEST MIXED-USE COMPLEX\nOPENS BY CITY HALL\nCeremony officiated by the First Deputy Prime Minister before invited guests\n\nSINGAPORE.\nTHE island’s largest mixed-use\ndevelopment was officially\nopened yesterday evening, in a\nceremony officiated by the First\nDeputy Prime Minister.\n\nThe complex, henceforth referred\nto in these columns as “the new\n[ink-obscured]”, occupies the site of\nthe island’s oldest school, which\nmoved to Grange Road in 1972\nafter more than a century at its\noriginal city-centre grounds.\n[continuation: unreadable bars]\n\nIts designer is the Chine[photo-obscured]\nAmerican architect who[photo-obscured]\npyramid would later ris[photo-obscured]\ncourtyard of the Louvre[photo-obscured]\nThe podium houses sho[photo-obscured]\noffices, with a hotel rising above;\nguests at yesterday’s ceremony\nentered through a lobby finished\nin polished granite.\n\nAsked about the school that once\nstood on the site, several guests\nrecalled the old playing field and\nthe bell that marked the periods.\n[continuation: unreadable bars]\n\n[photo caption] The new development seen from across the road.\n[pencil marginalia] 核对过，还有存[edge cut away]'
 });
})();
