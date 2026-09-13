/* ============================================================
 * 聊天记录数据文件：2026-06-08 · 处对象
 *
 * 消息格式说明：
 *   { type: "time",   text: "2026年06月08日 00:00" }   时间分隔条
 *   { type: "system", text: "系统消息" }               系统提示（灰色居中）
 *   { type: "msg", name: "昵称", text: "文字内容" }     群友消息（白气泡靠左）
 *   { type: "msg", name: "Auidx", text: "...", self: true }  自己的消息（绿气泡靠右）
 *   { type: "msg", name: "昵称", img: "images/xxx.jpg" }     图片消息
 *   { type: "msg", name: "昵称", video: "videos/xxx.mp4" }   视频消息（气泡内可播放）
 *   { type: "msg", name: "昵称", img: "...", text: "附言" }  图片+附言
 * ============================================================ */

const AVATARS = {
  "岛":            "avatars/岛.png",
  "Auidx":         "avatars/Auidx.png",
  "夜Ya":          "avatars/夜Ya.png",
  "TxwxNyaNya":    "avatars/TxwxNyaNya.png",
  "vvQWQvv":       "avatars/vvQWQvv.png",
};

window.CHAT_DATA = {
  id: "260608",
  title: "2026-06-08 · 处对象",
  messages: [
    { type: "time", text: "2026年06月08日 21:37" },
    { type: "msg", name: "岛", text: "llx可爱捏" },
    { type: "msg", name: "岛", text: "你上哪来的这么可爱的表情包，你他妈是不是处对象？" },
    { type: "msg", name: "Auidx", text: "我一直都有对象啊", self: true },
    { type: "time", text: "21:38" },
    { type: "msg", name: "岛", text: "？" },
    { type: "msg", name: "夜Ya", text: "？" },
    { type: "msg", name: "TxwxNyaNya", text: "我都知道他处了" },
    { type: "msg", name: "vvQWQvv", text: "？？" },
    { type: "msg", name: "TxwxNyaNya", text: "你火星人吧" },
    { type: "msg", name: "岛", text: "？" },
    { type: "msg", name: "vvQWQvv", text: "你怎么也出了" },
    { type: "msg", name: "岛", text: "？" },
    { type: "msg", name: "夜Ya", text: "哦对" },
    { type: "msg", name: "夜Ya", text: "之前看到朋友圈了" },
    { type: "msg", name: "岛", text: "神探。" },
    { type: "msg", name: "岛", text: "大学的是吧" },
    { type: "msg", name: "vvQWQvv", text: "我怎么永远是你们之间最后知道消息的人" },
    { type: "msg", name: "Auidx", text: "拨号上网吧还神探呢", self: true },
    { type: "msg", name: "Auidx", text: "也是高中的", self: true },
    { type: "msg", name: "岛", text: "？" },
    { type: "msg", name: "夜Ya", text: "一个班的吗" },
    { type: "msg", name: "岛", text: "异地恋吗" },
    { type: "msg", name: "Auidx", text: "对", self: true },
    { type: "msg", name: "Auidx", text: "对", self: true },
    { type: "time", text: "21:39" },
    { type: "msg", name: "岛", text: "笑死我了" },
    { type: "msg", name: "夜Ya", text: "耐处王" },
    { type: "msg", name: "岛", text: "咋坚持下来的" },
    { type: "msg", name: "夜Ya", text: "处到现在" },
    { type: "msg", name: "TxwxNyaNya", text: "vv也该处了" },
    { type: "msg", name: "Auidx", text: "vv也该处了", self: true },
    { type: "msg", name: "TxwxNyaNya", text: "到最后我是群里唯一一个光棍" },
    { type: "msg", name: "岛", text: "到最后我是群里唯一一个光棍" },
    { type: "time", text: "21:40" },
    { type: "msg", name: "Auidx", text: "桃杏晚霞也该出了", self: true },
    { type: "msg", name: "夜Ya", text: "你啥时候出一个" },
    { type: "msg", name: "夜Ya", text: "领过来认识我们" },
    { type: "msg", name: "TxwxNyaNya", text: "我得跟我的手处了" },
    { type: "msg", name: "Auidx", text: "趁月入就沉淀沉淀吧", self: true },
    { type: "msg", name: "TxwxNyaNya", text: "我以后天天操他" },
  ],
};
