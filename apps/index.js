import fs from 'fs'
import Yaml from 'yaml'
import moment from 'moment'
let _path = process.cwd() + '/plugins/Zyy-GM-plugin/resources'

if (!fs.existsSync(_path + '/hk4e')) {
  fs.mkdirSync(_path + '/hk4e');
}

// 处理文件
const fs_cfg = {
  "12345678": {
    mode: true,
    server: {
      id: "1",
      name: "小钰",
      version: "3.2",
      ip: "192.168.56.128",
      port: 20011,
      region: "dev_gio",
      sign: "zyy",
      signswitch: false
    },
    Administrator: [
      "1072411694"
    ],
    uid: {
      "1072411294": "10002"
    }
  }
}
const fs_command = [
  {
    "90": [
      "90",
      "一键满级"
    ],
    "command": [
      "break 6",
      "skill all 10",
      "talent unlock all",
      "level 90"
    ]
  }
]

const fs_mail = [
  {
    "邮件模板": [
      "邮件模板",
      "别名2"
    ],
    "title": "这里填标题",
    "content": "这里填写邮件内容",
    "item_list": "201:2"
  }
]

const fs_server = {
  "模板-3.2": {
    id: "0",
    name: "服务器名称",
    version: "3.2",
    ip: "192.168.56.128",
    port: 20011,
    region: "dev_gio",
    sign: "zyy",
    signswitch: false
  }
}

if (!fs.existsSync(_path + '/hk4e/config.yaml')) {
  fs.writeFileSync(_path + '/hk4e/config.yaml', Yaml.stringify(fs_cfg))
}
if (!fs.existsSync(_path + '/hk4e/command.json')) {
  fs.writeFileSync(_path + '/hk4e/command.json', JSON.stringify(fs_command));
}
if (!fs.existsSync(_path + '/hk4e/mail.json')) {
  fs.writeFileSync(_path + '/hk4e/mail.json', JSON.stringify(fs_mail));
}
if (!fs.existsSync(_path + '/hk4e/server.yaml')) {
  fs.writeFileSync(_path + '/hk4e/server.yaml', Yaml.stringify(fs_server))
}


// 处理使用环境
export async function getScenes(e = {}) {
  let value;
  let scenes;

  if (e.message_type === 'group') {
    if (typeof e.member?.info?.group_id !== 'undefined') {
      value = '频道-官方';
      scenes = e.member.info.group_id;
    } else {
      value = 'QQ群';
      scenes = e.group_id;
    }
  } else if (e.message_type === 'guild') {
    value = '频道';
    scenes = e.channel_id;
  } else if (e.message_type === 'private') {
    value = '私聊';
    scenes = e.user_id;
  }
  return { value, scenes };
}


// 处理GM状态  
export async function getmode(e = {}) {
  const config = Yaml.parse(fs.readFileSync(_path + '/hk4e/config.yaml', 'utf8'));
  const { value, scenes } = await getScenes(e)
  let mode
  const modeEnabled = config[scenes]?.mode;
  if (modeEnabled === true) {
    mode = true;
  }
  if (modeEnabled === false) {
    mode = false;
    e.reply(`GM在此${value}已经关闭`);
    return;
  }
  if (modeEnabled === undefined) {
    mode = undefined;
    e.reply(`此${value}的GM插件未初始化`);
    return;
  }
  return { mode };
}


// 处理server
export async function getserver(e = {}) {
  const config = Yaml.parse(fs.readFileSync(_path + '/hk4e/config.yaml', 'utf8'));
  const { scenes } = await getScenes(e)

  const ip = config[scenes]?.server.ip;
  const port = config[scenes]?.server.port;
  const region = config[scenes]?.server.region;
  const sender = 'Zyy.小钰'

  let sign
  const signswitch = config[scenes]?.server.signswitch;
  if (signswitch === "true") {
    sign = config[scenes]?.server.sign
  }
  if (signswitch === "false") {
    sign = "";
  }
  const timestamp = moment().format('YYYYMMDDHHmmss')
  const ticketping = (`Zyy${timestamp}`)
  return { ip, port, region, sign, sender, ticketping };
}


// 处理uid
export async function getuid(e = {}) {
  const config = Yaml.parse(fs.readFileSync(_path + '/hk4e/config.yaml', 'utf8'));
  const { scenes } = await getScenes(e)
  const uuid = e.user_id.toString();
  const cfg = config[scenes].uid;
  let uid = cfg.find((item) => Object.keys(item)[0] === uuid);
  if (uid === undefined) {
    setTimeout(() => {
      e.reply([segment.at(e.user_id), `请绑定UID\n格式：绑定+你的uid\n\n温馨提示：每位玩家仅拥有1次绑定机会\nBot会自动去除消息中的空格、字母、符号，UID正确即不用担心会绑定错误`]);
    }, 500);
    uid = undefined;
  } else {
    uid = Object.values(uid)[0];
  }
  return { uid };
}
