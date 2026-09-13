/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "yomibito_shirazu": "avatars/yomibito_shirazu.png",
  "岛":               "avatars/岛.png",
  "TxwxNyaNya":       "avatars/TxwxNyaNya.png",
  "vvQWQvv":          "avatars/vvQWQvv.png",
};

window.CHAT_DATA = {
  title: "2025-09-27 · 你是个几把",

  messages: [
    { type: "time", text: "2025年09月27日 19:08" },
    { type: "msg", name: "yomibito_shirazu", text: "我现在已经是长发男了" },

    { type: "time", text: "19:12" },
    { type: "msg", name: "岛", text: "懒得剪头直说" },
    { type: "msg", name: "岛", text: "看看" },

    { type: "time", text: "19:13" },
    { type: "msg", name: "TxwxNyaNya", text: "发我照片" },
    { type: "msg", name: "TxwxNyaNya", text: "我自有用处" },
    { type: "msg", name: "vvQWQvv", text: "你是个几把" },

    { type: "time", text: "19:14" },
    { type: "msg", name: "yomibito_shirazu", text: "我是个几把我就草翻你" },
    { type: "msg", name: "岛", text: "？" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
