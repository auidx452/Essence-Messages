/* ============================================================
 * 聊天记录数据文件：2026-02-16 · 马年大吉
 *
 * 消息格式说明：
 *   { type: "time",   text: "2026年02月16日 00:00" }   时间分隔条
 *   { type: "system", text: "系统消息" }               系统提示（灰色居中）
 *   { type: "msg", name: "昵称", text: "文字内容" }     群友消息（白气泡靠左）
 *   { type: "msg", name: "Auidx", text: "...", self: true }  自己的消息（绿气泡靠右）
 *   { type: "msg", name: "昵称", img: "images/xxx.jpg" }     图片消息
 *   { type: "msg", name: "昵称", img: "...", text: "附言" }  图片+附言
 * ============================================================ */

const AVATARS = {
  "TxwxNyaNya":    "avatars/TxwxNyaNya.png",
  "本子魔法使":    "avatars/本子魔法使.png",
  "夜Ya":          "avatars/夜Ya.png",
  "Deepred":       "avatars/Deepred.png",
  "渔壬":          "avatars/渔壬.png",
};

window.CHAT_DATA = {
  id: "260216",
  title: "2026-02-16 · 马年大吉",
  messages: [
    { type: "time", text: "2026年02月16日 16:40" },
    { type: "msg", name: "TxwxNyaNya", text: "@所有人 祝大家马年大吉吧" },
    { type: "time", text: "16:41" },
    { type: "msg", name: "本子魔法使", text: "好" },
    { type: "msg", name: "夜Ya", text: "保留节目" },
    { type: "time", text: "16:55" },
    { type: "msg", name: "TxwxNyaNya", text: "这几天都不许给我放炮，年兽这么大一个sofree别给我吓跑了" },
    { type: "msg", name: "Deepred", text: "?" },
    { type: "time", text: "16:56" },
    { type: "msg", name: "Deepred", text: "震撼首发" },
    { type: "time", text: "17:27" },
    { type: "msg", name: "渔壬", text: "【群公告】这几天都不许给我放炮，年兽这么大一个sofree别给我吓跑了" },
  ],
};
