/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "小刺":             "avatars/小刺.png",
  "Deepred":          "avatars/Deepred.png",
  "夜Ya":             "avatars/夜Ya.png",
  "yomibito_shirazu": "avatars/yomibito_shirazu.png",
  "Auidx":            "avatars/Auidx.png",
};

window.CHAT_DATA = {
  title: "2025-11-16 · 公理",

  messages: [
    { type: "time", text: "2025年11月16日 20:18" },
    { type: "msg", name: "小刺", img: "images/251116.jpg" },

    { type: "time", text: "20:19" },
    { type: "msg", name: "Deepred", text: "这是公理" },
    { type: "msg", name: "Deepred", text: "因为不需要证明" },

    { type: "time", text: "20:20" },
    { type: "msg", name: "Deepred", text: "所以不管yeya嫖不嫖娼" },
    { type: "msg", name: "Deepred", text: "都是嫖娼犯" },

    { type: "time", text: "20:21" },
    { type: "msg", name: "夜Ya", text: "？" },

    { type: "time", text: "20:22" },
    { type: "msg", name: "夜Ya", text: "为什么" },
    { type: "msg", name: "yomibito_shirazu", text: "因为pc数很多" },
    { type: "msg", name: "小刺", text: "笑死我了" },
    { type: "msg", name: "夜Ya", text: "我不行了。" },
    { type: "msg", name: "Auidx", text: "笑死我了", self: true },

    { type: "time", text: "20:23" },
    { type: "msg", name: "夜Ya", text: "有时候真应该给群聊消息发b站上" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
