/* ============================================================
 * 聊天记录数据文件：2026-02-12 · 大吉巴立
 *
 * 消息格式说明：
 *   { type: "time",   text: "2026年02月12日 00:00" }   时间分隔条
 *   { type: "system", text: "系统消息" }               系统提示（灰色居中）
 *   { type: "msg", name: "昵称", text: "文字内容" }     群友消息（白气泡靠左）
 *   { type: "msg", name: "Auidx", text: "...", self: true }  自己的消息（绿气泡靠右）
 *   { type: "msg", name: "昵称", img: "images/xxx.jpg" }     图片消息
 *   { type: "msg", name: "昵称", img: "...", text: "附言" }  图片+附言
 * ============================================================ */

const AVATARS = {
  "TxwxNyaNya":    "avatars/TxwxNyaNya.png",
  "夜Ya":          "avatars/夜Ya.png",
  "Deepred":       "avatars/Deepred.png",
  "渔壬":          "avatars/渔壬.png",
  "岛":            "avatars/岛.png",
  "vvQWQvv":       "avatars/vvQWQvv.png",
};

window.CHAT_DATA = {
  id: "260212",
  title: "2026-02-12 · 大吉巴立",
  messages: [
    { type: "time", text: "2026年02月12日 02:20" },
    { type: "msg", name: "TxwxNyaNya", text: "[微信红包]恭喜发财，大吉巴立" },
    { type: "time", text: "07:11" },
    { type: "msg", name: "夜Ya", text: "[微信红包]恭喜发财，大吉巴立" },
    { type: "time", text: "07:17" },
    { type: "msg", name: "Deepred", text: "人无信而不立" },
    { type: "time", text: "09:47" },
    { type: "msg", name: "渔壬", text: "[微信红包]恭喜发财，大吉巴立" },
    { type: "time", text: "09:48" },
    { type: "msg", name: "岛", text: "？" },
    { type: "time", text: "11:07" },
    { type: "msg", name: "vvQWQvv", text: "既然有低调做人" },
    { type: "msg", name: "vvQWQvv", text: "那有没有勃起做人" },
  ],
};
