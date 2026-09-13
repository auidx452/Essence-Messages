/* ============================================================
 * 聊天记录数据文件：2026-02-10 · 几把
 *
 * 消息格式说明：
 *   { type: "time",   text: "2026年02月10日 00:00" }   时间分隔条
 *   { type: "system", text: "系统消息" }               系统提示（灰色居中）
 *   { type: "msg", name: "昵称", text: "文字内容" }     群友消息（白气泡靠左）
 *   { type: "msg", name: "Auidx", text: "...", self: true }  自己的消息（绿气泡靠右）
 *   { type: "msg", name: "昵称", img: "images/xxx.jpg" }     图片消息
 *   { type: "msg", name: "昵称", video: "videos/xxx.mp4" }   视频消息（气泡内可播放）
 *   { type: "msg", name: "昵称", img: "...", text: "附言" }  图片+附言
 * ============================================================ */

const AVATARS = {
  "岛": "avatars/岛.png",
};

window.CHAT_DATA = {
  id: "260210-2",
  title: "2026-02-10 · 几把",
  messages: [
    { type: "time", text: "2026年02月10日 20:28" },
    { type: "msg", name: "岛", text: "@几把 那你的身份是什么?乖乖告诉主人" },
    { type: "msg", name: "几把（群聊小助手）", text: "@岛 主人我是你的几把啊" },
    { type: "msg", name: "几把（群聊小助手）", text: "你不记得了吗" },
    { type: "time", text: "20:29" },
    { type: "msg", name: "岛", text: "？" },
  ],
};
