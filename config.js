/* ZEPHYR · 发布前请阅读 gm/SETUP.md。这里不得放置住址或私人聊天原文。 */
window.ZEPHYR_CONFIG = {
  // 测试模式：关闭现实日期限制；正式发布改为 false 并设置 launchAt。
  previewMode: true,
  launchAt: '2026-10-20T19:00:00+08:00',
  chapterIntervalHours: 24,
  // 线下取件：公开页只保存编码后的坐标密文与封存条哈希。
  // 明文坐标与封存口令只存在于 gm/（制作人套件）。
  pickup: {
    label: '经许可的公共取件点',
    encodedCoords: '2176368712612665',
    instructions: '十六位数字。纬度在前，经度在后；均为十进制度。',
    // 印刷道具 QR 携带的封存口令的 SHA-256（norm 后）。
    // 正式版更换口令后须重算此值并同步重印；参考 gm/SETUP.md。
    sealSha256: '85e1dc9534f19ee27e28b27f373a59a9ef9d4fc03d875c96fe536361c03efbf1'
  },
  personal: {
    // 只填写经确认的日期或可公开的索引；不要在公开仓库保存私人聊天内容。
    confirmedChatTime: '',
    additionalPrivateHint: ''
  }
};
