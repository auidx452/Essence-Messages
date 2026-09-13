/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "夜Ya":       "avatars/夜Ya.png",
  "小刺":       "avatars/小刺.png",
  "渔壬":       "avatars/渔壬.png",
  "TxwxNyaNya": "avatars/TxwxNyaNya.png",
  "Auidx":      "avatars/Auidx.png",
};

window.CHAT_DATA = {
  title: "2025-11-16 · 抹茶冰淇淋",

  messages: [
    { type: "time", text: "2025年11月16日 21:21" },
    { type: "msg", name: "夜Ya", img: "images/251116-1.jpg" },

    { type: "time", text: "21:22" },
    { type: "msg", name: "小刺", text: "呕吐物吗" },

    { type: "time", text: "21:23" },
    { type: "msg", name: "渔壬", text: "像臭水" },

    { type: "time", text: "21:26" },
    { type: "msg", name: "夜Ya", img: "images/251116-2.jpg" },

    { type: "time", text: "21:27" },
    { type: "msg", name: "TxwxNyaNya", text: "这素" },
    { type: "msg", name: "小刺", text: "更像了" },
    { type: "msg", name: "夜Ya", text: "抹茶冰淇淋" },

    { type: "time", text: "21:28" },
    { type: "msg", name: "TxwxNyaNya", text: "你在哪买的" },
    { type: "msg", name: "TxwxNyaNya", text: "我避雷一下" },
    { type: "msg", name: "夜Ya", text: "dp" },
    { type: "msg", name: "Auidx", text: "抹茶芭菲", self: true },
    { type: "msg", name: "夜Ya", text: "后天我就尝尝去" },
    { type: "msg", name: "小刺", img: "images/251116-3.jpg" },
    { type: "msg", name: "夜Ya", img: "images/251116-4.jpg" },

    { type: "time", text: "21:29" },
    { type: "msg", name: "小刺", text: "？" },
    { type: "msg", name: "Auidx", text: "牛大了", self: true },
    { type: "msg", name: "TxwxNyaNya", text: "这个群里还有人类吗" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
