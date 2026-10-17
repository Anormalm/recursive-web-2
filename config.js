/* ZEPHYR · 发布前请阅读 RELEASE.md。这里不得放置住址或私人聊天原文。 */
window.ZEPHYR_CONFIG = {
  // 测试模式：关闭现实日期限制；正式发布改为 false 并设置 launchAt。
  previewMode: false,
  launchAt: '2026-10-20T19:00:00+08:00',
  chapterIntervalHours: 24,
  // 线下取件：公开页只保存编码后的坐标密文与封存条哈希。
  // 明文坐标与封存口令只存在于 离线制作人套件。
  pickup: {
    label: '经许可的公共取件点',
    encodedCoords: '1777005708629035',
    instructions: '十六位数字。纬度在前，经度在后；均为十进制度。位移密钥见第六卷采样摘要：取其前八位数字，循环使用，逢十取模。',
    // 印刷道具 QR 携带的封存口令的 SHA-256（norm 后）。
    // 正式版更换口令后须重算此值并同步重印；参考 RELEASE.md。
    sealSha256: 'f29f4d0e6b392dd03a4dc8be70c3a9149a66e7d39f47497856944c2140144187'
  },
  personal: {
    // 只填写经确认的日期或可公开的索引；不要在公开仓库保存私人聊天内容。
    confirmedChatTime: '',
    additionalPrivateHint: ''
  }
};
