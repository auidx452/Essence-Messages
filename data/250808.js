/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "夜Ya": "avatars/夜Ya.png",
};

window.CHAT_DATA = {
  title: "2025-08-08 · 代成绩图",

  messages: [
    { type: "time", text: "2025年08月08日 20:01" },
    { type: "msg", name: "夜Ya", text: "代成绩图，我是外挂，不演了，10r代一pc全ap，打5pc没封我给你账号全101，开10pc不封我给你rating打到1010000" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
