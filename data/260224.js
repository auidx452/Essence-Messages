/* ============================================================
 * 聊天记录数据文件：2026-02-24 · 七条线
 *
 * 消息格式说明：
 *   { type: "time",   text: "2026年02月24日 00:00" }   时间分隔条
 *   { type: "system", text: "系统消息" }               系统提示（灰色居中）
 *   { type: "msg", name: "昵称", text: "文字内容" }     群友消息（白气泡靠左）
 *   { type: "msg", name: "Auidx", text: "...", self: true }  自己的消息（绿气泡靠右）
 *   { type: "msg", name: "昵称", img: "images/xxx.jpg" }     图片消息
 *   { type: "msg", name: "昵称", img: "...", text: "附言" }  图片+附言
 * ============================================================ */

const AVATARS = {
  "本子魔法使":    "avatars/本子魔法使.png",
  "TxwxNyaNya":    "avatars/TxwxNyaNya.png",
  "Deepred":       "avatars/Deepred.png",
};

window.CHAT_DATA = {
  id: "260224",
  title: "2026-02-24 · 七条线",
  messages: [
    { type: "time", text: "2026年02月24日 14:00" },
    { type: "msg", name: "本子魔法使", img: "images/260224.jpg" },
    { type: "msg", name: "本子魔法使", text: "wdf" },
    { type: "msg", name: "本子魔法使", text: "打真结局前要先推七条线" },
    { type: "time", text: "14:01" },
    { type: "msg", name: "TxwxNyaNya", text: "舞萌打xx前也要打7个门" },
    { type: "time", text: "14:02" },
    { type: "msg", name: "Deepred", text: "笑死我了" },
    { type: "msg", name: "本子魔法使", text: "绷" },
  ],
};
