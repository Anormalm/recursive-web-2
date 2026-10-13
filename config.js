/* ZEPHYR · 发布前请阅读 gm/SETUP.md。这里不得放置住址或私人聊天原文。 */
window.ZEPHYR_CONFIG = {
  // 测试模式：关闭现实日期限制；正式发布改为 false 并设置 launchAt。
  previewMode: true,
  launchAt: '2026-10-20T19:00:00+08:00',
  chapterIntervalHours: 24,
  // 线下地点：只在私人部署设置经许可的一楼公共取件点；不要填写宿舍房号。
  pickup: {
    label: '【待配置】已获许可的一楼取件点',
    latitude: null,
    longitude: null,
    instructions: '请向档案保管员领取写有 Z-00 的信封。不要进入私人或受限制区域。',
    // 印刷道具里的验证用口令。可在正式版换掉并同步重印。
    sealSha256: 'b5ea9cf0caaeb11ee4254311d3678510b6742801bf44ee3e1da9d2c0a5fcec86'
  },
  personal: {
    // 只填写经确认的日期或可公开的索引；不要在公开仓库保存私人聊天内容。
    confirmedChatTime: '',
    additionalPrivateHint: ''
  }
};
