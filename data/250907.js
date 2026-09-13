/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "vvQWQvv": "avatars/vvQWQvv.png",
  "岛":      "avatars/岛.png",
  "渔壬":    "avatars/渔壬.png",
  "夜Ya":    "avatars/夜Ya.png",
  "Deepred": "avatars/Deepred.png",
};

window.CHAT_DATA = {
  title: "2025-09-07 · 别插了vv",

  messages: [
    { type: "time", text: "2025年09月07日 23:11" },
    { type: "msg", name: "vvQWQvv", text: "包的" },
    { type: "msg", name: "vvQWQvv", text: "last dance只能排这个下面" },
    { type: "msg", name: "vvQWQvv", text: "那我在点一个" },

    { type: "time", text: "23:12" },
    { type: "msg", name: "岛", text: "给你夸高兴了是不是" },
    { type: "msg", name: "岛", text: "又不睡觉了" },
    { type: "msg", name: "渔壬", text: "给听美了" },
    { type: "msg", name: "夜Ya", text: "挺好听的" },
    { type: "msg", name: "夜Ya", text: "但是有点平静" },
    { type: "msg", name: "vvQWQvv", text: "插个队兄弟" },
    { type: "msg", name: "夜Ya", text: "适合躺着晚上听" },
    { type: "msg", name: "vvQWQvv", text: "点完不点了" },

    { type: "time", text: "23:13" },
    { type: "msg", name: "Deepred", text: "这歌我小时候经常听" },
    { type: "msg", name: "渔壬", text: "别插了vv" },
    { type: "msg", name: "渔壬", text: "受不了了" },
    { type: "msg", name: "夜Ya", text: "小时候我奶奶经常给我哼这首" },
    { type: "msg", name: "岛", text: "我奈子经常给我哼这首" },
    { type: "msg", name: "夜Ya", text: "？" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
