/* ============================================================
 * 聊天记录数据文件：2026-02-10 · 存图
 *
 * 消息格式说明：
 *   { type: "time",   text: "2026年02月10日 00:00" }   时间分隔条
 *   { type: "system", text: "系统消息" }               系统提示（灰色居中）
 *   { type: "msg", name: "昵称", text: "文字内容" }     群友消息（白气泡靠左）
 *   { type: "msg", name: "Auidx", text: "...", self: true }  自己的消息（绿气泡靠右）
 *   { type: "msg", name: "昵称", img: "images/xxx.jpg" }     图片消息
 *   { type: "msg", name: "昵称", img: "...", text: "附言" }  图片+附言
 * ============================================================ */

const AVATARS = {
  "Auidx": "avatars/Auidx.png",
};

window.CHAT_DATA = {
  id: "260210",
  title: "2026-02-10 · 存图",
  messages: [
    { type: "time", text: "2026年02月10日" },
    { type: "msg", name: "Auidx", img: "images/260210.jpg", self: true },
  ],
};
