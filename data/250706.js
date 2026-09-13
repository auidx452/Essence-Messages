/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "vvQWQvv":    "avatars/vvQWQvv.png",
  "何色":       "avatars/何色.png",
  "夜Ya":       "avatars/夜Ya.png",
  "TxwxNyaNya": "avatars/TxwxNyaNya.png",
  "岛":         "avatars/岛.png",
};

window.CHAT_DATA = {
  title: "2025-07-06 · 学考",

  messages: [
    { type: "time", text: "2025年07月06日 11:51" },
    { type: "msg", name: "vvQWQvv", text: "学考不是全选c就能过吗" },
    { type: "msg", name: "何色", text: "？" },
    { type: "msg", name: "夜Ya", text: "还真是" },

    { type: "time", text: "11:52" },
    { type: "msg", name: "TxwxNyaNya", text: "是吗" },
    { type: "msg", name: "何色", text: "？" },

    { type: "time", text: "11:53" },
    { type: "msg", name: "岛", text: "还真是" },
    { type: "msg", name: "岛", text: "怕啥" },
    { type: "msg", name: "岛", text: "我学考都是全部提前交卷" },
    { type: "msg", name: "岛", text: "因为我知道用屌写都能过" },

    { type: "time", text: "11:54" },
    { type: "msg", name: "夜Ya", text: "就算你不会答卷" },
    { type: "msg", name: "岛", text: "我建议你们现在把写学考卷的时间给期末复习" },
    { type: "msg", name: "夜Ya", text: "就算所有题不会" },
    { type: "msg", name: "夜Ya", text: "也能过" },
    { type: "msg", name: "何色", text: "我们要拿等级啊" },
    { type: "msg", name: "何色", text: "不让cd等" },
    { type: "msg", name: "岛", text: "？" },
    { type: "msg", name: "何色", text: "66" },
    { type: "msg", name: "岛", text: "什么？" },
    { type: "msg", name: "岛", text: "学校要求的？？？" },
    { type: "msg", name: "夜Ya", text: "？" },
    { type: "msg", name: "何色", text: "不到" },
    { type: "msg", name: "何色", text: "老师这么说的" },
    { type: "msg", name: "岛", text: "那为什么我们" },

    { type: "time", text: "11:55" },
    { type: "msg", name: "岛", text: "是过了就行" },
    { type: "msg", name: "岛", text: "这个考大学也不看这个指标吧" },
    { type: "msg", name: "何色", text: "但我觉得要是拿了cd估计老师也说不了啥" },
    { type: "msg", name: "岛", text: "还是说今年改革了？？" },
    { type: "msg", name: "夜Ya", text: "神人老师" },
    { type: "msg", name: "夜Ya", text: "不可能" },
    { type: "msg", name: "何色", text: "是不看" },
    { type: "msg", name: "何色", text: "就是老师纯粹觉得丢人" },
    { type: "msg", name: "何色", text: "🤣" },
    { type: "msg", name: "岛", text: "你直接扣她的逼就行了" },
    { type: "msg", name: "岛", text: "😄" },
    { type: "msg", name: "岛", text: "她受不了的" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
