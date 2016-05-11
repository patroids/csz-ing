angular.module('starter.services', [])

.factory('Dict', function() {
  var dict = {
    c: [
          {
            'ca': { 擦: 'cā' },
            'cha': { 叉: 'chā', 差: 'chā', 插: 'chā', 茶: 'chá', 查: 'chá', 察: 'chá' }
          },
          {
            'cai': { 猜: 'cāi', 才: 'cái', 材: 'cái', 财: 'cái', 裁: 'cái', 采: 'cǎi', 彩: 'cǎi', 菜: 'cài', 蔡: 'cài' },
            'chai': { 拆: 'chāi', 柴: 'chái' }
          },
          {
            'can': { 参: 'cān', 餐: 'cān', 残: 'cán', 蚕: 'cán', 惭: 'cán', 惨: 'cǎn', 灿: 'càn' },
            'chan': { 搀: 'chān', 谗: 'chán', 馋: 'chán', 婵: 'chán', 禅: 'chán', 缠: 'chán', 蝉: 'chán', 产: 'chǎn', 铲: 'chǎn', 忏: 'chàn', 颤: 'chàn' }
          },
          {
            'cang': { 仓: 'cāng', 伧: 'cāng', 苍: 'cāng', 舱: 'cāng', 藏: 'cáng' },
            'chang': { 昌: 'chāng', 倡: 'chāng', 猖: 'chāng', 娼: 'chāng', 长: 'cháng', 肠: 'cháng', 尝: 'cháng', 常: 'cháng', 偿: 'cháng', 徜: 'cháng', 嫦: 'cháng', 厂: 'chǎng', 场: 'chǎng', 畅: 'chàng', 唱: 'chàng' }
          },
          {
            'cao': { 操: 'cāo', 糙: 'cāo', 曹: 'cáo', 漕: 'cáo', 槽: 'cáo', 草: 'cǎo' },
            'chao': { 抄: 'chāo', 超: 'chāo', 巢: 'cháo', 朝: 'cháo', 嘲: 'cháo', 潮: 'cháo', 吵: 'chǎo', 炒: 'chǎo' }
          },
          {
            'ce': { 册: 'cè', 厕: 'cè', 侧: 'cè', 测: 'cè', 策: 'cè' },
            'che': { 车: 'chē', 尺: 'chě', 扯: 'chě', 彻: 'chè', 坼: 'chè', 掣: 'chè', 撤: 'chè', 澈: 'chè' }
          },
          {
            'cen': { 岑: 'cén' },
            'chen': { 臣: 'chén', 尘: 'chén', 辰: 'chén', 沉: 'chén', 忱: 'chén', 陈: 'chén', 晨: 'chén', 衬: 'chèn', 趁: 'chèn' }
          },
          {
            'ceng': { 层: 'céng', 曾: 'céng' },
            'cheng': { 称: 'chēng', 撑: 'chēng', 成: 'chéng', 丞: 'chéng', 呈: 'chéng', 诚: 'chéng', 承: 'chéng', 城: 'chéng', 乘: 'chéng', 程: 'chéng', 惩: 'chéng', 橙: 'chéng', 逞: 'chěng', 秤: 'chèng' }
          },
          {
            'ci': { 疵: 'cī', 词: 'cí', 祠: 'cí', 瓷: 'cí', 辞: 'cí', 慈: 'cí', 磁: 'cí', 雌: 'cí', 此: 'cǐ', 次: 'cì', 刺: 'cì', 赐: 'cì' },
            'chi': { 吃: 'chī', 痴: 'chī', 池: 'chí', 弛: 'chí', 驰: 'chí', 迟: 'chí', 持: 'chí', 匙: 'chí', 尺: 'chǐ', 齿: 'chǐ', 侈: 'chǐ', 耻: 'chǐ', 斥: 'chì', 赤: 'chì', 翅: 'chì' }
          },
          {
            'cong': { 匆: 'cōng', 葱: 'cōng', 聪: 'cōng', 从: 'cóng', 丛: 'cóng' },
            'chong': { 冲: 'chōng', 充: 'chōng', 忡: 'chōng', 舂: 'chōng', 虫: 'chóng', 重: 'chóng', 崇: 'chóng', 宠: 'chǒng' }
          },
          {
            'cou': { 凑: 'còu' },
            'chou': { 抽: 'chōu', 仇: 'chóu', 惆: 'chóu', 绸: 'chóu', 酬: 'chóu', 稠: 'chóu', 愁: 'chóu', 筹: 'chóu', 裯: 'chóu', 踌: 'chóu', 丑: 'chǒu', 瞅: 'chǒu', 臭: 'chòu' }
          },
          {
            'cu': { 粗: 'cū', 促: 'cù', 猝: 'cù', 醋: 'cù', 簇: 'cù' },
            'chu': { 出: 'chū', 初: 'chū', 除: 'chú', 厨: 'chú', 锄: 'chú', 橱: 'chú', 础: 'chú', 储: 'chǔ', 楚: 'chǔ', 处: 'chù', 畜: 'chù', 触: 'chù', 憷: 'chù' }
          },
          {
            'cuan': { 窜: 'cuān' },
            'chuan': { 川: 'chuān', 穿: 'chuān', 传: 'chuán', 船: 'chuán', 喘: 'chuǎn', 串: 'chuàn' }
          },
          {
            'cuang': {},
            'chuang': { 疮: 'chuāng', 窗: 'chuāng', 床: 'chuáng', 闯: 'chuǎng', 创: 'chuàng' }
          },
          {
            'cui': { 崔: 'cuī', 催: 'cuī', 摧: 'cuī', 脆: 'cuì', 萃: 'cuì', 啐: 'cuì', 悴: 'cuì', 瘁: 'cuì', 粹: 'cuì', 萃: 'cuì' },
            'chui': { 吹: 'chuī', 垂: 'chuí', 棰: 'chuí', 捶: 'chuí', 槌: 'chuí', 锤: 'chuí' }
          },
          {
            'cun': { 村: 'cūn', 存: 'cún', 寸: 'cùn' },
            'chun': { 春: 'chūn', 纯: 'chún', 唇: 'chún', 淳: 'chún', 醇: 'chún', 蠢: 'chǔn' }
          },
          {
            'cuo': { 搓: 'cuō', 撮: 'cuō', 蹉: 'cuō', 挫: 'cuò', 厝: 'cuò', 措: 'cuò', 错: 'cuò' },
            'chuo': { 踔: 'chuō', 辍: 'chuò' }
          }
    ],
    s: [
          {
            'sa': { 撒: 'sā', 洒: 'sǎ', 萨: 'sà' },
            'sha': { 杀: 'shā', 沙: 'shā', 纱: 'shā', 砂: 'shā', 煞: 'shā', 鲨: 'shā', 傻: 'shǎ', 厦: 'shà' }
          },
          {
            'sai': { 腮: 'sāi', 塞: 'sài', 赛: 'sài' },
            'shai': { 晒: 'shài' }
          },
          {
            'san': { 三: 'sān', 叁: 'sān', 伞: 'sǎn', 散: 'sàn' },
            'shan': { 山: 'shān', 杉: 'shān', 删: 'shān', 衫: 'shān', 珊: 'shān', 煽: 'shān', 闪: 'shǎn', 掺: 'shǎn', 讪: 'shàn', 扇: 'shàn', 善: 'shàn', 擅: 'shàn', 膳: 'shàn', 赡: 'shàn', 鳝: 'shàn' }
          },
          {
            'sang': { 丧: 'sāng', 桑: 'sāng', 嗓: 'sǎng' },
            'shang': { 伤: 'shāng', 商: 'shāng', 赏: 'shǎng', 上: 'shàng', 尚: 'shàng', 裳: 'shang' }
          },
          {
            'sao': { 搔: 'sāo', 骚: 'sāo', 扫: 'sǎo', 嫂: 'sǎo' },
            'shao': { 捎: 'shāo', 烧: 'shāo', 稍: 'shāo', 勺: 'sháo', 少: 'shǎo', 邵: 'shào', 绍: 'shào', 哨: 'shào' }
          },
          {
            'se': { 色: 'sè', 啬: 'sè' },
            'she': { 赊: 'shē', 猞: 'shē', 舌: 'shé', 蛇: 'shé', 舍: 'shě', 设: 'shè', 社: 'shè', 射: 'shè', 涉: 'shè', 摄: 'shè' }
          },
          {
            'sei': { },
            'shei': { 谁: 'shéi' }
          },
          {
            'sen': { 森: 'sēn' },
            'shen': { 申: 'shēn', 伸: 'shēn', 身: 'shēn', 绅: 'shēn', 深: 'shēn', 参: 'shēn', 什: 'shén', 神: 'shén', 审: 'shěn', 婶: 'shěn', 肾: 'shèn', 甚: 'shèn', 渗: 'shèn', 慎: 'shèn' }
          },
          {
            'seng': { 僧: 'sēng' },
            'sheng': { 升: 'shēng', 生: 'shēng', 声: 'shēng', 牲: 'shēng', 甥: 'shēng', 绳: 'shéng', 省: 'shěng', 圣: 'shèng', 胜: 'shèng', 盛: 'shèng', 剩: 'shèng' }
          },
          {
            'si': { 司: 'sī', 丝: 'sī', 私: 'sī', 思: 'sī', 斯: 'sī', 厮: 'sī', 撕: 'sī', 死: 'sǐ', 巳: 'sì', 四: 'sì', 寺: 'sì', 似: 'sì', 伺: 'sì', 祀: 'sì', 饲: 'sì', 肆: 'sì' },
            'shi': { 尸: 'shī', 失: 'shī', 师: 'shī', 诗: 'shī', 虱: 'shī', 狮: 'shī', 施: 'shī', 湿: 'shī', 十: 'shí', 石: 'shí', 时: 'shí', 识: 'shí', 实: 'shí', 拾: 'shí', 食: 'shí', 史: 'shǐ', 使: 'shǐ', 始: 'shǐ', 驶: 'shǐ', 屎: 'shǐ', 士: 'shì', 氏: 'shì', 示: 'shì', 世: 'shì', 仕: 'shì', 市: 'shì', 式: 'shì', 势: 'shì', 事: 'shì', 侍: 'shì', 饰: 'shì', 试: 'shì', 视: 'shì', 是: 'shì', 适: 'shì', 室: 'shì', 逝: 'shì', 释: 'shì', 誓: 'shì' }
          },
          {
            'song': { 松: 'sōng', 嵩: 'sōng', 怂: 'sǒng', 耸: 'sǒng', 悚: 'sǒng', 讼: 'sòng', 宋: 'sòng', 送: 'sòng', 诵: 'sòng', 颂: 'sòng' },
            'shong': { }
          },
          {
            'sou': { 搜: 'sōu', 艘: 'sōu', 嗽: 'sòu' },
            'shou': { 收: 'shōu', 手: 'shǒu', 守: 'shǒu', 首: 'shǒu', 寿: 'shòu', 受: 'shòu', 狩: 'shòu', 授: 'shòu', 售: 'shòu', 兽: 'shòu', 绶: 'shòu', 瘦: 'shòu' }
          },
          {
            'su': { 苏: 'sū', 酥: 'sū', 稣: 'sū', 俗: 'sú', 诉: 'sù', 肃: 'sù', 素: 'sù', 速: 'sù', 宿: 'sù', 粟: 'sù', 塑: 'sù' },
            'shu': { 书: 'shū', 叔: 'shū', 梳: 'shū', 淑: 'shū', 舒: 'shū', 疏: 'shū', 输: 'shū', 赎: 'shú', 熟: 'shú', 暑: 'shǔ', 属: 'shǔ', 署: 'shǔ', 蜀: 'shǔ', 鼠: 'shǔ', 薯: 'shǔ', 术: 'shù', 束: 'shù', 述: 'shù', 树: 'shù', 竖: 'shù', 恕: 'shù', 庶: 'shù', 数: 'shù', 墅: 'shù' }
          },
          {
            'sua': { },
            'shua': { 刷: 'shuā', 耍: 'shuǎ' }
          },
          {
            'suai': { },
            'shuai': { 衰: 'shuāi', 摔: 'shuǎi', 甩: 'shuǎi', 帅: 'shuǎi', 率: 'shuǎi', 蟀: 'shuǎi' }
          },
          {
            'suan': { 痠: 'suān', 酸: 'suān', 蒜: 'suàn', 算: 'suàn' },
            'shuan': { 拴: 'shuān', 栓: 'shuān', 涮: 'shuàn' }
          },
          {
            'suang': { },
            'shuang': { 双: 'shuāng', 霜: 'shuāng', 爽: 'shuáng' }
          },
          {
            'sui': { 虽: 'suī', 随: 'suí', 岁: 'suì', 谇: 'suì', 遂: 'suì', 碎: 'suì', 隧: 'suì' },
            'shui': { 水: 'shuǐ', 税: 'shuì', 睡: 'shuì' }
          },
          {
            'sun': { 孙: 'sūn', 损: 'sǔn', 笋: 'sǔn' },
            'shun': { 顺: 'shūn', 舜: 'shún', 瞬: 'shún' }
          },
          {
            'suo': { 唆: 'suō', 缩: 'suō', 所: 'suǒ', 索: 'suǒ', 琐: 'suǒ', 锁: 'suǒ' },
            'shuo': { 说: 'shuō', 烁: 'shuò', 朔: 'shuò', 硕: 'shuò' }
          }
    ],
    z: [
          {
            'za': { 杂: 'zá', 杂: 'zá' }, 
            'zha': { 扎: 'zhā', 吒: 'zhā', 柤: 'zhā', 揸: 'zhā', 喳: 'zhā', 楂: 'zhā', 札: 'zhá', 闸: 'zhá', 拃: 'zhǎ', 眨: 'zhǎ', 乍: 'zhà', 诈: 'zhà', 炸: 'zhà' }
          },
          {
            'zai': { 灾: 'zāi', 哉: 'zāi', 栽: 'zāi', 仔: 'zǎi', 宰: 'zǎi', 崽: 'zǎi', 再: 'zài', 在: 'zài', 载: 'zài' },
            'zhai': { 斋: 'zhāi', 摘: 'zhāi', 宅: 'zhái', 窄: 'zhǎi', 债: 'zhài', 寨: 'zhài' }
          },
          {
            'zan': { 咱: 'zán', 攒: 'zǎn', 暂: 'zàn', 赞: 'zàn' },
            'zhan': { 沾: 'zhān', 毡: 'zhān', 粘: 'zhān', 詹: 'zhān', 瞻: 'zhān', 斩: 'zhǎn', 展: 'zhǎn', 崭: 'zhǎn', 搌: 'zhǎn', 辗: 'zhǎn', 占: 'zhàn', 栈: 'zhàn', 战: 'zhàn', 站: 'zhàn', 绽: 'zhàn' }
          },
          {
            'zang': { 赃: 'zāng', 脏: 'zāng', 葬: 'zàng', 脏: 'zàng', 藏: 'zàng' },
            'zhang': { 张: 'zhāng', 章: 'zhāng', 彰: 'zhāng', 长: 'zhǎng', 涨: 'zhǎng', 掌: 'zhǎng', 丈: 'zhàng', 仗: 'zhàng', 杖: 'zhàng', 帐: 'zhàng', 账: 'zhàng', 胀: 'zhàng', 障: 'zhàng' }
          },
          {
            'zao': { 遭: 'zāo', 糟: 'zāo', 凿: 'záo', 早: 'zǎo', 枣: 'zǎo', 蚤: 'zǎo', 澡: 'zǎo', 皂: 'zào', 灶: 'zào', 造: 'zào', 噪: 'zào', 燥: 'zào', 躁: 'zào' },
            'zhao': { 招: 'zhāo', 昭: 'zhāo', 找: 'zhǎo', 召: 'zhào', 兆: 'zhào', 赵: 'zhào', 照: 'zhào', 罩: 'zhào', 肇: 'zhào' }
          },
          {
            'ze': { 则: 'zé', 责: 'zé', 择: 'zé', 泽: 'zé', 仄: 'zè' },
            'zhe': { 遮: 'zhē', 折: 'zhé', 哲: 'zhé', 辙: 'zhé', 者: 'zhě', 这: 'zhè' }
          },
          {
            'zei': { 贼: 'zéi' },
            'zhei': { }
          },
          {
            'zen': { 怎: 'zěn' },
            'zhen': { 贞: 'zhēn', 针: 'zhēn', 侦: 'zhēn', 珍: 'zhēn', 帧: 'zhēn', 胗: 'zhēn', 真: 'zhēn', 甄: 'zhēn', 诊: 'zhěn', 枕: 'zhěn', 疹: 'zhěn', 缜: 'zhěn', 圳: 'zhèn', 阵: 'zhèn', 振: 'zhèn', 朕: 'zhèn', 赈: 'zhèn', 震: 'zhèn', 镇: 'zhèn' }
          },
          {
            'zeng': { 曾: 'zēng', 增: 'zēng', 赠: 'zèng' },
            'zheng': { 争: 'zhēng', 征: 'zhēng', 怔: 'zhéng', 蒸: 'zhēng', 拯: 'zhěng', 整: 'zhěng', 正: 'zhèng', 证: 'zhèng', 郑: 'zhèng', 诤: 'zhèng', 政: 'zhèng', 挣: 'zhèng', 症: 'zhèng' }
          },
          {
            'zi': { 咨: 'zī', 姿: 'zī', 兹: 'zí', 资: 'zī', 滋: 'zī', 子: 'zǐ', 姊: 'zǐ', 紫: 'zǐ', 自: 'zì', 字: 'zì', 渍: 'zì' },
            'zhi': { 之: 'zhī', 支: 'zhī', 只: 'zhī', 汁: 'zhī', 芝: 'zhī', 吱: 'zhī', 枝: 'zhī', 知: 'zhī', 肢: 'zhī', 织: 'zhī', 脂: 'zhī', 蜘: 'zhī', 执: 'zhí', 直: 'zhí', 侄: 'zhí', 值: 'zhí', 职: 'zhí', 植: 'zhí', 止: 'zhǐ', 旨: 'zhǐ', 址: 'zhǐ', 纸: 'zhǐ', 指: 'zhǐ', 至: 'zhì', 志: 'zhì', 豸: 'zhì', 制: 'zhì', 质: 'zhì', 炙: 'zhì', 治: 'zhì', 陟: 'zhì', 挚: 'zhì', 致: 'zhì', 秩: 'zhì', 窒: 'zhì', 智: 'zhì', 痣: 'zhì', 滞: 'zhì', 置: 'zhì', 稚: 'zhì' }
          },
          {
            'zong': { 宗: 'zōng', 综: 'zōng', 踪: 'zōng', 总: 'zǒng', 纵: 'zòng', 粽: 'zòng' },
            'zhong': { 中: 'zhōng', 忠: 'zhōng', 终: 'zhōng', 钟: 'zhōng', 肿: 'zhǒng', 种: 'zhòng', 众: 'zhòng', 重: 'zhòng' }
          },
          {
            'zou': { 邹: 'zōu', 走: 'zǒu', 奏: 'zòu', 揍: 'zòu' },
            'zhou': { 舟: 'zhōu', 州: 'zhōu', 诌: 'zhōu', 周: 'zhōu', 洲: 'zhōu', 粥: 'zhōu', 轴: 'zhóu', 帚: 'zhǒu', 纣: 'zhòu', 咒: 'zhòu', 宙: 'zhòu', 昼: 'zhòu', 皱: 'zhòu' }
          },
          {
            'zu': { 租: 'zū', 足: 'zú', 卒: 'zú', 族: 'zú', 诅: 'zǔ', 阻: 'zǔ', 组: 'zǔ', 祖: 'zǔ' },
            'zhu': { 朱: 'zhū', 侏: 'zhū', 诛: 'zhū', 珠: 'zhū', 株: 'zhū', 诸: 'zhū', 铢: 'zhū', 猪: 'zhū', 蛛: 'zhū', 竹: 'zhú', 逐: 'zhú', 烛: 'zhú', 主: 'zhǔ', 拄: 'zhǔ', 煮: 'zhǔ', 嘱: 'zhǔ', 瞩: 'zhǔ', 助: 'zhù', 住: 'zhù', 注: 'zhù', 驻: 'zhù', 柱: 'zhù', 祝: 'zhù', 著: 'zhù', 蛀: 'zhù', 筑: 'zhù' }
          },
          {
            'zua': { },
            'zhua': { 抓: 'zhuā', 爪: 'zhuǎ' }
          },
          {
            'zuai': { },
            'zhuai': { 拽: 'zhuài' }
          },
          {
            'zuan': { 钻: 'zuān' },
            'zhuan': { 专: 'zhuān', 砖: 'zhuān', 转: 'zhuǎn', 赚: 'zhuàn', 撰: 'zhuàn' }
          },
          {
            'zuang': { },
            'zhuang': { 妆: 'zhuāng', 庄: 'zhuāng', 桩: 'zhuáng', 装: 'zhuǎng', 壮: 'zhuàng', 状: 'zhuàng', 撞: 'zhuàng' }
          },
          {
            'zui': { 嘴: 'zuǐ', 最: 'zuì', 罪: 'zuì', 醉: 'zuì' },
            'zhui': { 追: 'zhuī', 锥: 'zhuī', 坠: 'zhuì', 缀: 'zhuì', 缒: 'zhuì', 赘: 'zhuì' }
          },
          {
            'zun': { 尊: 'zūn' },
            'zhun': { 准: 'zhūn' }
          },
          {
            'zuo': { 嘬: 'zuō', 昨: 'zuó', 左: 'zuǒ', 佐: 'zuǒ', 作: 'zuò', 坐: 'zuò', 座: 'zuò', 做: 'zuò' },
            'zhuo': { 拙: 'zhuō', 捉: 'zhuō', 桌: 'zhuō', 卓: 'zhuō', 啄: 'zhuó', 琢: 'zhuó' }
          }
    ],
    ing: [
          {
            'bin': { 玢: 'bīn', 宾: 'bīn', 彬: 'bīn', 梹: 'bīn', 槟: 'bīn' },
            'bing': { 冰: 'bīng', 兵: 'bīng', 丙: 'bǐng', 饼: 'bǐng', 并: 'bìng', 病: 'bìng' }
          },
          {
            'din': { },
            'ding': { 丁: 'dīng', 顶: 'dǐng', 鼎: 'dǐng', 定: 'dìng'}
          },
          {
            'jin': { 今: 'jīn', 金: 'jīn', 津: 'jīn', 珒: 'jīn', 仅: 'jǐn', 紧: 'jǐn', 谨: 'jǐn', 锦: 'jǐn', 尽: 'jìn', 进: 'jìn', 近: 'jìn', 浸: 'jìn', 晋: 'jìn', 禁: 'jìn' },
            'jing': { 京: 'jīng', 径: 'jīng', 经: 'jīng', 惊: 'jīng', 晶: 'jīng', 睛: 'jīng', 精: 'jīng', 兢: 'jīng', 鲸: 'jīng', 井: 'jǐng', 景: 'jǐng', 警: 'jǐng', 劲: 'jìng', 净: 'jìng', 竟: 'jìng', 敬: 'jìng', 静: 'jìng', 镜: 'jìng' }
          },
          {
            'lin': { 邻: 'lín', 林: 'lín', 临: 'lín', 琳: 'lín', 臨: 'lín', 吝: 'lìn' },
            'ling': { 灵: 'líng', 苓: 'líng', 凌: 'líng', 聆: 'líng', 羚: 'líng', 零: 'líng', 岭: 'lǐng', 领: 'lǐng', 另: 'lìng' }
          },
          {
            'min': { 民: 'mín', 闽: 'mǐn', 敏: 'mǐn' },
            'ming': { 名: 'míng', 明: 'míng', 鸣: 'míng', 冥: 'míng', 命: 'mìng' }
          },
          {
            'nin': { 您: 'nín' },
            'ning': { 宁: 'níng', 柠: 'níng', 凝: 'níng' }
          },
          {
            'pin': { 拼: 'pīn', 贫: 'pín', 品: 'pǐn', 聘: 'pìn' },
            'ping': { 乒: 'pīng', 平: 'píng', 评: 'píng', 苹: 'píng', 凭: 'píng', 瓶: 'píng' }
          },
          {
            'qin': { 侵: 'qīn', 亲: 'qīn', 芩: 'qín', 秦: 'qín', 禽: 'qín', 琴: 'qín', 勤: 'qín' },
            'qing': { 青: 'qīng', 轻: 'qīng', 清: 'qīng', 情: 'qíng', 晴: 'qíng', 请: 'qǐng', 庆: 'qìng' }
          },
          {
            'tin': { },
            'ting': { 厅: 'tīng', 听: 'tīng', 庭: 'tíng', 亭: 'tíng', 停: 'tíng', 婷: 'tíng', 挺: 'tǐng' }
          },
          {
            'xin': { 心: 'xīn', 辛: 'xīn', 芯: 'xīn', 欣: 'xīn', 新: 'xīn', 信: 'xìn' },
            'xing': { 兴: 'xīng', 狌: 'xīng', 星: 'xīng', 猩: 'xīng', 刑: 'xíng', 行: 'xíng', 形: 'xíng', 型: 'xíng', 睲: 'xǐng', 醒: 'xǐng', 擤: 'xǐng', 兴: 'xìng', 杏: 'xìng', 性: 'xìng', 幸: 'xìng', 姓: 'xìng' }
          },
          {
            'yin': { 因: 'yīn', 阴: 'yīn', 音: 'yīn', 银: 'yín', 淫: 'yín', 寅: 'yín', 引: 'yǐn', 饮: 'yǐn', 隐: 'yǐn', 印: 'yìn' },
            'ying': { 应: 'yīng', 英: 'yīng', 莺: 'yīng', 珱: 'yīng', 婴: 'yīng', 迎: 'yíng', 荧: 'yíng', 盈: 'yíng', 莹: 'yíng', 萤: 'yíng', 营: 'yíng', 影: 'yǐng', 映: 'yìng' }
          }
       ]
  };

  return {
    all: function() {
      return dict;
    },
    get: function(start_char) {
      return dict[start_char];
    }
  };
});

