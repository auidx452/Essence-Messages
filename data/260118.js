/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "夜Ya":        "avatars/夜Ya.png",
  "本子魔法使":  "avatars/本子魔法使.png",
};

window.CHAT_DATA = {
  title: "2026-01-18 · 装币",

  messages: [
    { type: "time", text: "2026年01月18日 00:27" },
    { type: "msg", name: "夜Ya", img: "images/260118.jpg" },
    { type: "msg", name: "本子魔法使", text: "垃圾袋干啥的" },
    { type: "msg", name: "本子魔法使", text: "装币吗" },

    { type: "time", text: "00:28" },
    { type: "msg", name: "夜Ya", text: "可以装" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
