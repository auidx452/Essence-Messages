/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "TxwxNyaNya": "avatars/TxwxNyaNya.png",
  "夜Ya":       "avatars/夜Ya.png",
  "本子魔法使": "avatars/本子魔法使.png",
  "岛":         "avatars/岛.png",
  "Auidx":      "avatars/Auidx.png",
};

window.CHAT_DATA = {
  title: "2025-05-13 · 晨勃",

  messages: [
    { type: "time", text: "2025年05月13日 22:15" },
    { type: "msg", name: "TxwxNyaNya", img: "images/250513.jpg" },
    { type: "msg", name: "TxwxNyaNya", text: "这两个字不会读谁能教我读" },

    { type: "time", text: "22:18" },
    { type: "msg", name: "夜Ya", text: "晨勃" },

    { type: "time", text: "22:19" },
    { type: "msg", name: "本子魔法使", text: "憋憋" },
    { type: "msg", name: "本子魔法使", text: "lhq发表重要思想" },

    { type: "time", text: "22:21" },
    { type: "msg", name: "岛", text: "草壁" },

    { type: "time", text: "22:22" },
    { type: "msg", name: "TxwxNyaNya", text: "沉沉铂" },
    { type: "msg", name: "岛", text: "我特么一开始真没翻译出来chenbo" },
    { type: "msg", name: "岛", text: "我以为是草壁" },

    { type: "time", text: "22:24" },
    { type: "msg", name: "Auidx", text: "lhq发表重要思想", self: true },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
