/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "Deepred":         "avatars/Deepred.png",
  "vvQWQvv":         "avatars/vvQWQvv.png",
  "本子魔法使":      "avatars/本子魔法使.png",
  "TxwxNyaNya":      "avatars/TxwxNyaNya.png",
  "何色":            "avatars/何色.png",
  "yomibito_shirazu": "avatars/yomibito_shirazu.png",
};

window.CHAT_DATA = {
  title: "2025-07-06 · say world",

  messages: [
    { type: "time", text: "2025年07月06日 21:15" },
    { type: "msg", name: "Deepred", text: "玩疯狂几把" },

    { type: "time", text: "21:16" },
    { type: "msg", name: "Deepred", text: "疯狂鸡马" },
    { type: "msg", name: "Deepred", text: "超级河马" },
    { type: "msg", name: "vvQWQvv", text: "我在ow" },
    { type: "msg", name: "vvQWQvv", text: "换wzs吧" },
    { type: "msg", name: "Deepred", text: "@deco*114514" },
    { type: "msg", name: "本子魔法使", text: "我在打中二" },

    { type: "time", text: "21:17" },
    { type: "msg", name: "Deepred", text: "awc" },
    { type: "msg", name: "Deepred", text: "那凑不出来人了啊" },
    { type: "msg", name: "Deepred", text: "？" },

    { type: "time", text: "21:18" },
    { type: "msg", name: "Deepred", text: "@耐冬花麗 say world" },
    { type: "msg", name: "TxwxNyaNya", text: "《world》" },
    { type: "msg", name: "何色", text: "666" },
    { type: "msg", name: "何色", text: "什么几把" },
    { type: "msg", name: "何色", text: "都等着被入典吧" },

    { type: "time", text: "21:19" },
    { type: "msg", name: "yomibito_shirazu", text: "world" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
