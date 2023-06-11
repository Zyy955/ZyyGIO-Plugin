使用`Yunzai`执行`hk4e`的GM指令

需要手动配置的只有`server.yaml`这个文件，你需要在里面添加上你的服务器

## `2023年6月11日之前拉取的仓库请在插件根目录执行以下命令以获取最新的仓库地址`

    * Gitee:
    ```
    git remote set-url origin https://gitee.com/Zyy955/Zyy-GM-plugin.git && git pull
    ```
    
    * Github:
    ```
    git remote set-url origin https://github.com/Zyy955/Zyy-GM-plugin.git && git pull
    ```

# 效果展示：

在线玩家：

![在线玩家示例](https://i.328888.xyz/2023/05/13/iuRFgt.png)

GM指令：

![别名指令示例](https://i.328888.xyz/2023/04/30/iKq4VU.png)
![普通指令示例](https://i.328888.xyz/2023/04/30/iKqAbv.png)
![添加命令示例](https://i.328888.xyz/2023/05/13/iuRGKJ.png)

邮件：

![邮件别名示例](https://i.328888.xyz/2023/04/30/iKYK3N.png)
![普通指令示例](https://i.328888.xyz/2023/04/30/iKqUQy.png)
![添加邮件示例](https://i.328888.xyz/2023/05/13/iuRhUc.png)

`0.0.5`是一个大更新，把基础功能全部做了开关，目前cdk相关的功能`TRSS-Yunzai`无法发送文件，暂不推荐使用超过`25`个的兑换码数量生成~

# 目录
* [基本](#basic)
    * [安装Yunzai](#install)
    * [安装插件](#install_plugin)
    * [插件结构](#plugin_structure)

* [玩家指令](#player_command)
    * [玩家UID](#player_uid)
        * [绑定UID](#bind_uid)
        * [玩家列表](#player_list)

    * [查看别名](#view_alias)
        * [指令别名](#command_alias)
        * [邮件别名](#mail_alias)
        * [查看命令别名](#view_command_alias)
        * [查看邮件别名](#view_mail_alias)

    * [设置快捷指令](#set_shortcut)
        * [添加命令](#add_command)
        * [添加邮件](#add_mail)

    * [给现有快捷指令添加更多别名](#add_more_alias)
        * [添加命令别名](#add_command_alias)
        * [添加邮件别名](#add_mail_alias)
    * [使用命令、邮件](#use_shortcut)
        * [发送命令](#send_command)
        * [发送邮件](#send_mail)
        
* [管理员指令](#admin_command)
    * [换绑UID](#change_bind_uid)
    * [删除命令](#delete_command)
    * [删除邮件](#delete_mail)
    * [全服邮件](#global_mail)

* [超级管理指令](#super_admin_command)
    * [初始化GM](#init_gm)
        * [开启GM](#enable_gm)
        * [关闭GM](#disable_gm)
        * [开启签到](#enable_CheckIns)
        * [关闭签到](#disable_CheckIns)
        * [添加全服邮件UID](#add_global_mail_uid)
    * [服务器](#server)
        * [服务器列表](#server_list)
        * [切换服务器](#switch_server)

    * [设置管理员](#set_admin)
        * [绑定管理员](#bind_admin)
        * [解绑管理员](#unbind_admin)

    * [黑名单](#blacklist)
        * [拉黑玩家](#add_blacklist)
        * [解除拉黑](#unblock_player)

    * [更新插件](#update_plugin)

* [其他](#others)

* [免责声明](#disclaimer)


<br>
<br>
<br>
<h1 id="basic">基本</h1>

<h4 id="install">安装Yunzai</h4>

* 根据自己的需求任选其一安装即可
* Miao-Yunzai：[Gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai) | [Github](https://github.com/yoimiya-kokomi/Miao-Yunzai)
* TRSS-Yunzai：[Gitee](https://gitee.com/TimeRainStarSky/Yunzai) | [Github](https://github.com/TimeRainStarSky/Yunzai)

| 支持的协议       | QQ群 | QQ频道 | QQ频道-官方 | WeChat | Telegram | Discord | KOOK |
|-------------|-----|------|---------|--------|----------|---------|------|
| Miao-Yunzai | ✔   |      | ✔       |        |          |         |      |
| TRSS-Yunzai | ✔   | ✔    | ✔       | ✔      | ✔        | ✔       | ✔    |

<h4 id="install_plugin">安装插件</h4>

在`Yunzai`根目录执行，任选其一

Gitee：
```
git clone --depth 1 https://gitee.com/ZYY-Yu/Zyy-GM-plugin plugins/Zyy-GM-plugin
```

Github：
```
git clone --depth 1 https://github.com/ZYY-Yu/Zyy-GM-plugin plugins/Zyy-GM-plugin
```

<h4 id="plugin_structure">插件结构</h4>

* 文件路径：`Zyy-GM-plugin/config`
    * `server.yaml`：服务器列表、用于快速切换
    * `command.json`：命令别名
    * `mail.json`：邮件别名
    * `config.yaml`：玩家UID、群聊服务器配置、群聊管理员
    * `full_server_mail.yaml`：全服邮件玩家UID

<br>
<br>
<br>
<h1 id="player_command">玩家指令</h1>

<h4 id="player_uid">玩家UID</h4>

<h6 id="bind_uid">绑定UID</h6>

| 指令     | 说明 |
|--------|----|
| 绑定+UID | 为自己绑定UID  |

<h6 id="player_list">玩家列表</h6>

| 指令     | 说明 |
|--------|----|
| 玩家列表 | 查看当前群聊已绑定UID的玩家  |

<h4 id="view_alias">查看别名</h4>

<h6 id="command_alias">指令别名</h6>   

| 指令     | 说明 |
|--------|----|
| 指令别名 | 查看所有已添加的指令别名  |

<h6 id="mail_alias">邮件别名</h6>

| 指令     | 说明 |
|--------|----|
| 邮件别名 | 查看所有已添加的邮件别名  |

<h6 id="view_command_alias">查看命令别名信息</h6>

| 指令     | 说明 |
|--------|----|
| 查看命令别名+xx | 查看单个命令别名的结构  |

<h6 id="view_mail_alias">查看邮件别名信息</h6>

| 指令     | 说明 |
|--------|----|
| 查看邮件别名+xx | 查看单个邮件别名的结构  |

<h4 id="set_shortcut">设置快捷指令</h4>

<h6 id="add_command">添加命令</h6>     

| 指令     | 说明 |
|--------|----|
| 添加命令 别名/别名1 /指令1/指令2 | 多个别名使用`/`连接、多个命令使用`/`连接、注意空格  |

<h6 id="add_mail">添加邮件</h6>

| 指令     | 说明 |
|--------|----|
| 添加邮件 别名/别名1 标题 内容 物品ID:数量,ID:数量 | 多个别名使用`/`连接，多个id使用`,`连接、注意空格 |

<h4 id="add_more_alias">给现有快捷指令添加更多别名</h4>

<h6 id="add_command_alias">添加命令别名</h6>

| 指令     | 说明 |
|--------|----|
| 添加命令别名 主别名 新别名/新别名1 | [主别名查询方法](###查看命令别名信息) 多个新别名使用`/`连接 |
          
<h6 id="add_mail_alias">添加邮件别名</h6>

| 指令     | 说明 |
|--------|----|
| 添加邮件别名 主别名 新别名/新别名1 | [主别名查询方法](###查看邮件别名信息) 多个新别名使用`/`连接 |

<h4 id="use_shortcut">使用命令、邮件</h4>

<h6 id="send_command">发送命令</h6>

| 指令     | 说明 |
|--------|----|
| /+别名 | 搭配[指令别名](###指令别名)使用 |
| /+原始指令 | 搭配服务器自带指令使用 |
| 温馨提示 | 所有`/`开头的消息都会被读取为指令 |

<h6 id="send_mail">发送邮件</h6>

| 指令     | 说明 |
|--------|----|
| 邮件 别名 | 搭配[邮件别名](###邮件别名)使用 |
| 邮件 标题 内容 物品ID:数量,物品ID:数量 | 发送自定义邮件 |
| 温馨提示 | 邮件后面有一个`空格` |

<br>
<br>
<br>
<h1 id="admin_command">管理员指令</h1>

<h4 id="change_bind_uid">换绑UID</h4>

| 指令     | 说明 |
|--------|----|
| 绑定+UID+@玩家 | 绑定、换绑都可使用  |

<h4 id="delete_command">删除命令</h4>

| 指令     | 说明 |
|--------|----|
| 删除命令 主别名 | [主别名查询方法](###查看命令别名信息) 删除已有的快捷命令  |

<h4 id="delete_mail">删除邮件</h4>

| 指令     | 说明 |
|--------|----|
| 删除邮件 主别名 | [主别名查询方法](###查看邮件别名信息) 删除已有的快捷邮件  |

<h4 id="global_mail">全服邮件</h4>

| 指令     | 说明 |
|--------|----|
| 全服邮件 + 别名 | 搭配已有的[邮件别名](###邮件别名)使用  |
| 全服邮件 标题 内容 物品ID:数量,物品ID:数量 | 自定义全服邮件、多个物品请使用`,`连接  |
<br>
<br>
<br>
<h1 id="super_admin_command">超级管理指令</h1>

<h4 id="init_gm">初始化GM</h4>

<h6 id="enable_gm">开启GM</h6>

| 指令     | 说明 |
|--------|----|
| 开启GM | 在私聊、群聊、子频道开启、初始化GM  |

<h6 id="disable_gm">关闭GM</h6>

| 指令     | 说明 |
|--------|----|
| 关闭GM | 关闭当前群聊开启的GM  |

<h6 id="enable_CheckIns">开启签到</h6>

| 指令     | 说明 |
|--------|----|
| 开启签到 | 在私聊、群聊、子频道开启、初始化签到  |

<h6 id="disable_CheckIns">关闭签到</h6>

| 指令     | 说明 |
|--------|----|
| 关闭签到 | 关闭当前群聊开启的签到  |

<h6 id="add_global_mail_uid">添加全服邮件UID</h6>

| 指令     | 说明 |
|--------|----|
| 添加UID 1 100 | 用于初始化已有的UID、快速添加1-100的UID  |

<h4 id="server">服务器</h4>
<h6 id="server_list">服务器列表</h6>


| 指令     | 说明 |
|--------|----|
| 服务器 | 查看服务器列表  |

<h6 id="switch_server">切换服务器</h6>

| 指令     | 说明 |
|--------|----|
| 切换服务器x | 快速在当前群聊切换服务器、指令后面带`服务器ID`  |

<h4 id="set_admin">设置管理员</h4>
<h6 id="bind_admin">绑定管理员</h6>

| 指令     | 说明 |
|--------|----|
| 绑定管理+@玩家 | 绑定后可使用管理员指令  |

<h6 id="unbind_admin">解绑管理员</h6>

| 指令     | 说明 |
|--------|----|
| 解绑管理+@玩家 | 解除该玩家的管理员身份  |

<h4 id="blacklist">黑名单</h4>
<h6 id="add_blacklist">拉黑玩家</h6>

| 指令     | 说明 |
|--------|----|
| 拉黑玩家+@玩家 | 快捷拉黑、使用`Yunzai`自带黑名单让玩家无法使用任何指令  |

<h6 id="unblock_player">解除拉黑</h6>

| 指令     | 说明 |
|--------|----|
| 解除拉黑+@玩家 | 解除拉黑  |

<h4 id="update_plugin">更新插件</h4>

| 指令     | 说明 |
|--------|----|
| 更新GM | 更新插件  |

<br>
<br>
<br>
<h1 id="others">其他</h1>

* 插件会覆盖默认的`Yunzai`帮助，如果想使用默认帮助，发送`指令|云崽帮助`即可

* `server.yaml`:
    * 你需要往`server.yaml`里面添加你要使用的服务器信息
    * 请保持服务器的键名和ID为唯一，切换服务器指令使用的是服务器的ID
    * 如果你的服务器启用了`sign`，请在配置中把 `signswitch: "false"` 修改为 `signswitch: "true"` 

```
"小钰-3.2":                 // 这里是键名，如果你不知道怎么改，按照name-版本这样填写即可
  id: "1"                   // 这里是id，请保持唯一，用于机器人区分多服务器
  name: "小钰"              // 服务器名称
  version: "3.2"            // 服务器版本
  ip: "192.168.56.128"      // 服务器IP
  port: 20011               // 服务器端口
  region: "dev_gio"         // 服务器区服
  sign: "zyy"               // 服务器签名
  signswitch: "false"       // 签名开关
  title: "每日签到"          // 每日签到邮件标题
  content: "内容"            // 每日签到邮件内容
以下是各项配置的解析
```

<details>
<summary>以前的写的，暂时保留观看</summary>

```
* 添加命令组
    * 作用：让你可以用你想要的`名称`来触发一个或者多个指令
    * 指令结构：[添加命令] [主别名/别名1/别名2] [/指令1 /指令2 /指令3]
* 举例：
    * 比如我现在想要用`/90`和`/一键满级`来让触发这4条指令`/break 6` `/skill all 10` `/talent unlock all` `/level 90`
    * 发送指令：`添加命令 90/一键满级 /break 6 /skill all 10 /talent unlock all /level 90`
    * 此时就可以使用`/90`和`/一键满级`来让触发了
    * 注意事项：目前玩家`只能添加`，无法修改。在添加别名之前，请先测试指令是否能执行！并且无论是任何别名，只要在`命令别名`里面存在，都无法再次添加，每一个别名都需要保证唯一性

* 添加邮件组 
    * 作用：让你可以用你想要的`名称`来发送一个或者多个邮件
    * 指令结构：[添加邮件] [主别名/别名1/别名2] [邮件标题] [邮件内容] [物品ID:数量,物品ID:数量]
* 举例：
    * 比如我现在想要用`新手礼包`和`测试礼包`来让机器人给我发原石邮件
    * 发送指令：`添加邮件 新手礼包/测试礼包 新手礼包 这是测试用的 201:1,201:2`
    * 此时就可以使用`邮件 新手礼包`和`邮件 测试礼包`来获取原石邮件了
    * 注意事项：目前玩家`只能添加`，无法修改。在添加别名之前，请先测试指令是否能执行！并且无论是任何别名，只要在`邮件别名`里面存在，都无法再次添加，每一个别名都需要保证唯一性

* 查看别名信息
    * 作用：查看某个别名的基础信息，方便获取`主别名`
    * 指令结构：[查看(邮件|命令)别名][需要查看的别名]
* 举例：比如我现在想要给现有的`命令`别名`一键满级`继续添加两个别名，`满级`和`一键升级`
    * 发送指令：但是我不确定这个`一键满级`的`主别名`是什么，就可以使用`查看别名一键满级`
    * 比如我现在想要给现有的`邮件`别名`新手礼包`继续添加两个别名，`新手礼包1`和`新手礼包2`
    * 发送指令：但是我不确定这个`新手礼包`的`主别名`是什么，就可以使用`查看别名新手礼包`

* 给已有的命令组添加别名
    * 作用：给现有的`命令`主别名添加更多别名
    * 指令结构：[添加命令别名] [需要添加别名的主别名] [新别名1/新别名2/新别名3]
* 举例：比如我现在想要给`一键满级`继续添加两个别名，`满级`和`一键升级`，我已经使用查看别名获取主别名为`90`
    * 发送指令: 此时我就可以使用`添加命令别名 90 满级/一键升级`，添加完成之后即可使用`/满级`和`/一键升级`
    * 注意事项：每个别名都是唯一的，重复添加机器人会拒绝，邮件别名和命令别名可以重复
    
* 给已有的邮件组添加别名   
    * 作用：给现有的`邮件`主别名添加更多别名
    * 指令结构：[添加邮件别名] [需要添加别名的主别名] [新别名1/新别名2/新别名3]
* 举例：比如我现在想要给`新手礼包`继续添加两个别名，`新手礼包1`和`新手礼包2`，我已经使用查看别名获取主别名为`新手礼包`
    * 发送指令: 此时我就可以使用`添加命令别名 新手礼包 新手礼包1/新手礼包2`，添加完成之后即可使用`邮件 新手礼包1`和`邮件 新手礼包2`
    * 注意事项：每个别名都是唯一的，重复添加机器人会拒绝，邮件别名和命令别名可以重复

### 管理员指令
`没什么区别的啦，自己发帮助看`
* 全服邮件
* 删除命令
    * 结构：[删除命令] [主别名]
    * 不举例了，给管理员用的指令。查别名随后删即可，删除后机器人会发送一次让你重新添加的指令，可用于快速修改命令
* 删除邮件
    * 结构：[删除邮件] [主别名]
    * 不举例了，给管理员用的指令。查别名随后删即可，删除后机器人会发送一次让你重新添加的指令，可用于快速
```

</details>


<br>
<br>
<br>
<h1 id="disclaimer">免责声明</h1>

遇到问题最好自行解决

大部分代码来自[喵喵插件](https://github.com/yoimiya-kokomi/miao-plugin)和[白纸插件](https://github.com/HeadmasterTan/zhi-plugin)

本插件所有资源都来自互联网，请不要把此插件用于任何商业性行为，侵权请联系我删除。

关注[嘉然今天吃什么](https://space.bilibili.com/672328094)谢谢喵
