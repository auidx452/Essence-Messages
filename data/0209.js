/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果你的图片是 jpg 格式，把下面的 .png 全部改成 .jpg 即可
 * （记事本里 Ctrl+H 查找替换 ".png" → ".jpg"）。
 * 图片上传到仓库后自动生效，没上传前显示首字母方块。
 */
const AVATARS = {
  "Deepred":    "avatars/Deepred.jpg",
  "Auidx":      "avatars/Auidx.jpg",
  "本子魔法使": "avatars/本子魔法使.jpg",
  "TxwxNyaNya": "avatars/TxwxNyaNya.jpg",
  "夜Ya":       "avatars/夜Ya.jpg",
};

window.CHAT_DATA = {
  title: "2026-02-09 · 地震了",

  messages: [
    { type: "time", text: "2026年02月09日 15:03" },
    { type: "msg", name: "Deepred", text: "地震了" },

    { type: "time", text: "15:06" },
    { type: "msg", name: "Auidx", text: "没感觉，，", self: true },

    { type: "time", text: "16:08" },
    { type: "msg", name: "本子魔法使", text: "我草了" },
    { type: "msg", name: "本子魔法使", text: "振的时候" },
    { type: "msg", name: "本子魔法使", text: "我" },
    { type: "msg", name: "本子魔法使", text: "在等杯子充电" },

    { type: "time", text: "16:09" },
    { type: "msg", name: "TxwxNyaNya", text: "？" },
    { type: "msg", name: "TxwxNyaNya", text: "你这家伙啥都往外说啊，真实诚啊" },

    { type: "time", text: "16:12" },
    { type: "msg", name: "夜Ya", text: "@本子魔法使 手难道不比杯子好用吗" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
