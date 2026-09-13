/* ============================================================
 * 聊天记录数据文件：2026-05-15 · 全自动爬塔凌迟
 *
 * 消息格式说明：
 *   { type: "time",   text: "2026年05月15日 00:00" }   时间分隔条
 *   { type: "system", text: "系统消息" }               系统提示（灰色居中）
 *   { type: "msg", name: "昵称", text: "文字内容" }     群友消息（白气泡靠左）
 *   { type: "msg", name: "Auidx", text: "...", self: true }  自己的消息（绿气泡靠右）
 *   { type: "msg", name: "昵称", img: "images/xxx.jpg" }     图片消息
 *   { type: "msg", name: "昵称", video: "videos/xxx.mp4" }   视频消息（气泡内可播放）
 *   { type: "msg", name: "昵称", img: "...", text: "附言" }  图片+附言
 * ============================================================ */

const AVATARS = {
  "Auidx":         "avatars/Auidx.png",
  "TxwxNyaNya":    "avatars/TxwxNyaNya.png",
  "岛":            "avatars/岛.png",
};

window.CHAT_DATA = {
  id: "260515",
  title: "2026-05-15 · 全自动爬塔凌迟",
  messages: [
    { type: "time", text: "2026年05月15日 23:47" },
    { type: "msg", name: "Auidx", text: "全自动爬塔凌迟无实体实验体", self: true },
    { type: "msg", name: "Auidx", video: "videos/260515.mp4", self: true },
    { type: "time", text: "23:48" },
    { type: "msg", name: "Auidx", text: "享受", self: true },
    { type: "time", text: "23:49" },
    { type: "msg", name: "TxwxNyaNya", text: "666偷偷学英语" },
    { type: "time", text: "23:52" },
    { type: "msg", name: "岛", text: "神了" },
    { type: "time", text: "23:53" },
    { type: "msg", name: "岛", text: "笑死我了" },
  ],
};
