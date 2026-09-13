/* ============ 头像配置 ============
 * 头像图片放在 avatars/ 文件夹，文件名 = 昵称。
 * 如果图片是 jpg 格式，把下面的 .png 改成 .jpg。
 */
const AVATARS = {
  "本子魔法使": "avatars/本子魔法使.png",
  "岛":         "avatars/岛.png",
  "夜Ya":       "avatars/夜Ya.png",
};

window.CHAT_DATA = {
  title: "2025-04-10 · galgame推荐",

  messages: [
    { type: "time", text: "2025年04月10日 23:59" },
    { type: "msg", name: "本子魔法使", text: "[图片已过期或已被清理]" },
    { type: "msg", name: "本子魔法使", text: "galgame推荐" },
    { type: "msg", name: "本子魔法使", text: "才想起来发" },

    { type: "time", text: "04月11日 00:00" },
    { type: "msg", name: "本子魔法使", text: "有71个hcg" },
    { type: "msg", name: "岛", text: "别给妹妹查似了" },
    { type: "msg", name: "岛", text: "不是病弱吗" },
    { type: "msg", name: "夜Ya", text: "怎么gal这么多妹妹的" },
    { type: "msg", name: "本子魔法使", text: "对" },
    { type: "msg", name: "夜Ya", text: "😨😨😨😨😨" },
    { type: "msg", name: "本子魔法使", text: "死宅都是妹控" },
    { type: "msg", name: "岛", text: "有妹妹的 笑死我了" },

    { type: "time", text: "00:01" },
    { type: "msg", name: "本子魔法使", text: "现实要有个妹妹那有够闹心了" },
    { type: "msg", name: "岛", text: "不一定" },
    { type: "msg", name: "夜Ya", text: "我有妹妹的" },
    { type: "msg", name: "夜Ya", text: "感觉" },

    { type: "time", text: "00:02" },
    { type: "msg", name: "夜Ya", text: "妹控都是怪xp" },
    { type: "msg", name: "夜Ya", text: "我要开始攻击你们了" },
    { type: "msg", name: "本子魔法使", text: "看着长大的和奔着鲁管的能一样吗" },
  ],
};

// 自动按昵称附加头像
for (const m of window.CHAT_DATA.messages) {
  if (m.type === "msg" && AVATARS[m.name]) m.avatar = AVATARS[m.name];
}
