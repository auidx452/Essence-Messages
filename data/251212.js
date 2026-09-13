/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "小刺":       "avatars/小刺.png",
  "TxwxNyaNya": "avatars/TxwxNyaNya.png",
};

window.CHAT_DATA = {
  title: "2025-12-12 · 水滴筹",

  messages: [
    { type: "time", text: "2025年12月12日 12:32" },
    { type: "msg", name: "小刺", text: "@TxwxNyaNya" },
    { type: "msg", name: "小刺", text: "在干嘛" },

    { type: "time", text: "12:33" },
    { type: "msg", name: "TxwxNyaNya", text: "我刚下课" },
    { type: "msg", name: "小刺", text: "米嘻嘻" },

    { type: "time", text: "12:34" },
    { type: "msg", name: "TxwxNyaNya", text: "给你挂水滴筹了，一会等着收款吧" },
    { type: "msg", name: "小刺", text: "😭😭😭" },
    { type: "msg", name: "小刺", text: "真的假的？" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
