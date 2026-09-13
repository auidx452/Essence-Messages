/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "夜Ya":             "avatars/夜Ya.png",
  "yomibito_shirazu": "avatars/yomibito_shirazu.png",
  "岛":               "avatars/岛.png",
  "vvQWQvv":          "avatars/vvQWQvv.png",
  "TxwxNyaNya":       "avatars/TxwxNyaNya.png",
};

window.CHAT_DATA = {
  title: "2025-08-28 · 宇宙星神",

  messages: [
    { type: "time", text: "2025年08月28日 15:44" },
    { type: "msg", name: "夜Ya", text: "@咏人不知 你之前小时候喜欢看的动画片叫啥来着" },
    { type: "msg", name: "yomibito_shirazu", text: "你说哪个" },
    { type: "msg", name: "夜Ya", text: "超兽武装吗" },

    { type: "time", text: "15:49" },
    { type: "msg", name: "岛", text: "✔️" },

    { type: "time", text: "15:51" },
    { type: "msg", name: "夜Ya", text: "我发现我好像" },
    { type: "msg", name: "夜Ya", text: "我小时候好像买过关于这个的东西" },

    { type: "time", text: "15:52" },
    { type: "msg", name: "vvQWQvv", text: "66" },
    { type: "msg", name: "yomibito_shirazu", text: "不是吧" },

    { type: "time", text: "15:53" },
    { type: "msg", name: "yomibito_shirazu", text: "大概是宇宙星神吧" },
    { type: "msg", name: "vvQWQvv", text: "✓" },
    { type: "msg", name: "TxwxNyaNya", text: "哪有宙星神" },

    { type: "time", text: "15:54" },
    { type: "msg", name: "岛", text: "哪有星帝" },
    { type: "msg", name: "岛", text: "还有萝莉岛的事" },

    { type: "time", text: "15:55" },
    { type: "msg", name: "yomibito_shirazu", text: "暗示以后成为wmc了" },

    { type: "time", text: "15:58" },
    { type: "msg", name: "TxwxNyaNya", text: "那你怎么没有成为宙星神" },

    { type: "time", text: "15:59" },
    { type: "msg", name: "yomibito_shirazu", text: "等我宙星神之后我去泰国做性别重置手术" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
