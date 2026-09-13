/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "vvQWQvv": "avatars/vvQWQvv.png",
};

window.CHAT_DATA = {
  title: "2025-07-08 · 早安",

  messages: [
    { type: "time", text: "2025年7月8日 01:12:24" },
    { type: "msg", name: "vvQWQvv", text: "晨勃是早安的代表词🎶~" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
