/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "TxwxNyaNya":  "avatars/TxwxNyaNya.png",
  "何色":        "avatars/何色.png",
  "Auidx":       "avatars/Auidx.png",
  "本子魔法使":  "avatars/本子魔法使.png",
  "Deepred":     "avatars/Deepred.png",
};

window.CHAT_DATA = {
  title: "2025-08-07 · 魔丸要爆了",

  messages: [
    { type: "time", text: "2025年08月07日 21:09" },
    { type: "msg", name: "TxwxNyaNya", text: "终于到酒店了" },
    { type: "msg", name: "TxwxNyaNya", text: "走路走的魔丸要爆了" },

    { type: "time", text: "21:10" },
    { type: "msg", name: "何色", text: "可以入典吗" },

    { type: "time", text: "21:11" },
    { type: "msg", name: "TxwxNyaNya", text: "置顶只能五条" },
    { type: "msg", name: "TxwxNyaNya", text: "而且我魔丸是真的痛（）" },
    { type: "msg", name: "TxwxNyaNya", text: "可能是太热了起痱子了" },

    { type: "time", text: "21:12" },
    { type: "msg", name: "TxwxNyaNya", text: "然后在档里磨的" },
    { type: "msg", name: "TxwxNyaNya", text: "疼死我了" },

    { type: "time", text: "21:13" },
    { type: "msg", name: "Auidx", text: "[聊天记录]", self: true },
    { type: "msg", name: "Auidx", text: "一收藏", self: true },

    { type: "time", text: "21:18" },
    { type: "msg", name: "何色", text: "这群真神了" },

    { type: "time", text: "21:38" },
    { type: "msg", name: "本子魔法使", text: "666" },

    { type: "time", text: "22:15" },
    { type: "msg", name: "Deepred", text: "入典了" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
