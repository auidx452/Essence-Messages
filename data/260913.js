/* ============================================================
 * 聊天记录数据文件：2026-09-13 · 少女乐队
 *
 * 消息格式说明：
 *   { type: "time",   text: "2026年09月13日 00:00" }   时间分隔条
 *   { type: "system", text: "系统消息" }               系统提示（灰色居中）
 *   { type: "msg", name: "昵称", text: "文字内容" }     群友消息（白气泡靠左）
 *   { type: "msg", name: "Auidx", text: "...", self: true }  自己的消息（绿气泡靠右）
 *   { type: "msg", name: "昵称", img: "images/xxx.jpg" }     图片消息
 *   { type: "msg", name: "昵称", video: "videos/xxx.mp4" }   视频消息（气泡内可播放）
 *   { type: "msg", name: "昵称", img: "...", text: "附言" }  图片+附言
 * ============================================================ */

const AVATARS = {
  "岛":            "avatars/岛.png",
  "Deepred":       "avatars/Deepred.png",
  "TxwxNyaNya":    "avatars/TxwxNyaNya.png",
};

window.CHAT_DATA = {
  id: "260913",
  title: "2026-09-13 · 少女乐队",
  messages: [
    { type: "time", text: "2026年09月13日 12:45" },
    { type: "msg", name: "岛", img: "images/260913.jpg" },
    { type: "msg", name: "岛", text: "少女乐队" },
    { type: "msg", name: "岛", text: "（？）" },
    { type: "time", text: "12:46" },
    { type: "msg", name: "Deepred", text: "[语音] 3″" },
    { type: "msg", name: "岛", text: "笑死我了" },
    { type: "time", text: "13:17" },
    { type: "msg", name: "TxwxNyaNya", text: "群努力批：少女乐队为什么全是少男？" },
  ],
};
