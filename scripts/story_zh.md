# Title: Junta's Birthday
# StartScene: scene_prologue

## Scene: scene_prologue
- BG: sky
- BGM: calm

[旁白] 九月的早晨，空气还带着夏天的热气。
[旁白] 穿着秋季长袖制服，刚出家门就沁出了一层薄汗……
[旁白] 作为一个准考生，今天依然是普通的一天。
[旁白] 我跨上自己的爱车，往学校前进。

-> scene_school_road

## Scene: scene_school_road
- BG: outdoor_climb
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 外表可能看不出来，其实我是总北高校自行车部的主将。
[指令] SFX: road_bike
[手嶋|sprite=teshima,pose=normal] 自行车部就是那种每天都在骑车的社团，不管你是不是备考生。
[手嶋|sprite=teshima,pose=normal] 不过，我们上个月刚参加完高中联赛。
[手嶋|sprite=teshima,pose=smile] 所以很快就要交接给下一任了。
[手嶋|sprite=onoda,pose=normal] 下任队长的小野田可比我强多了！
[手嶋|sprite=onoda,pose=smile] 虽然比我小一岁，他已经连续两届夺得了高中联赛的总冠军！
[手嶋|sprite=teshima,pose=bitter] 和他比我就是一介凡人，高三才第一次参加联赛……

-> scene_podium

## Scene: scene_podium
- BG: podium
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 也是托了他的福，我这个队长才能登上总冠军的领奖台——
[指令] SFX: cheer
[旁白|sprite=teshima,pose=normal] 当时终点前的景色，看客们的欢呼声，至今都历历在目……
[旁白|sprite=teshima,pose=moved] 那是我人生中最宝贵的体验——

-> scene_school_gate

## Scene: scene_school_gate
- BG: school_gate
- BGM: calm

[指令] SFX: morning_bird
[手嶋|sprite=teshima,pose=smile] 经历过高中联赛，感觉后门这个陡坡也没什么了……
[旁白|sprite=teshima,pose=normal] 没错，在高中联赛拼尽全力的我，现在终于——
[旁白|sprite=teshima,pose=smile] 可以“享受”纯粹的备考生活了~
[手嶋|sprite=teshima,pose=normal] 时间还早，先去部室看会儿书吧？
[选择]
- 去部室学习 -> scene_school_gate_blocker_part1
- 当然是去骑车 -> scene_school_gate_normal

## Scene: scene_school_gate_normal
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 接下来还有读不完的书呢，先去骑一圈——
[指令] sprites: clear
[？？？] 手嶋—
[指令] SFX: kasakasa
[旁白] 突然听到有人叫我……
[手嶋|sprite=hirata,pose=normal] 这不是邻桌的平田吗？
[平田|sprites=teshima:normal@0.7,hirata:smile@0.3] 你不会忘了吧，今天我俩值日！
[手嶋|sprites=teshima:bitter@0.7,hirata:smile@0.3] 抱歉抱歉~我还真忘了嘿嘿~
[平田|sprites=teshima:smile@0.7,hirata:normal@0.3] 真是的，麻烦快点啦~
[指令] sprites: clear
[旁白] 我赶忙停好车，加快脚步追上了平田，一起往教室走去……
[指令] BGM: fade calm 5000 
[指令] SFX: step
-> scene_lunch_break

## Scene: scene_school_gate_blocker_part1
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 去部室读会儿书吧——
[指令] sprites: clear
[？？？] 纯太——
[指令] SFX: kasakasa
[旁白] 突然听到有人叫我……
[手嶋|sprite=aoyagi,pose=surprise] 青八木？你怎么在这里！
[青八木|sprite=aoyagi,pose=normal]  纯太，谢谢你的笔记。
[旁白|sprite=aoyagi,pose=normal] 青八木把昨天借的英语笔记递给我。
[手嶋|sprites=teshima:smile@0.7,aoyagi:normal@0.3] 不用特地在校门口等我吧，上课前我去找你就行了~
[青八木|sprites=teshima:normal@0.7,aoyagi:normal@0.3] 纯太今天第一节课就是英语，我怕耽误你上课。
[青八木|sprites=teshima:normal@0.7,aoyagi:normal@0.3] 而且——
[旁白|sprite=aoyagi,pose=normal] 青八木望向我微微一笑。
[青八木|sprite=aoyagi,pose=normal] 我知道纯太应该就快到了。
[手嶋|sprite=teshima,pose=moved] 青八木……
[青八木|sprite=aoyagi,pose=smile] 没有人比我更了解纯太。
[旁白|sprite=teshima,pose=moved] 我的心里涌上一股暖流——
[旁白|sprite=aoyagi,pose=normal] 眼前这个人，从高一开始就和我一起奋斗了三年，是我最好的搭档——
[旁白|sprite=aoyagi,pose=normal] 我们的合作亲密无间，甚至连呼吸都能够同步——
[旁白|sprite=aoyagi,pose=normal] 他是我青春的一部分——
[旁白|sprite=teshima,pose=moved] 我们在一起，就是最棒的二人组！
[旁白|sprite=aoyagi,pose=normal] 青八木像是知道我在想什么一样，他也坚定地回应我——
[青八木|sprite=aoyagi,pose=normal] 三年来真的很谢谢纯太。
[青八木|sprite=aoyagi,pose=smile] 能和你一起组成T2是我人生最大的幸福！
[手嶋|sprite=teshima,pose=smile] 你太夸张了……
[手嶋|sprite=teshima,pose=moved] 不过真的，三年来谢谢你了，青八木！
[旁白|sprite=teshima,pose=bitter] 想到这儿，我突然好感伤……
[旁白|sprite=teshima,pose=bitter] 过完高三，我们或许就到不同的大学，不能像这样经常见面了……
[青八木|sprite=aoyagi,pose=smile] 纯太，如果有时光机，你最想回到哪一天？
[手嶋|sprite=teshima,pose=surprise] 怎么突然问这个？
[选择]
- 初中放弃骑车的那天 -> scene_school_gate_blocker_answer1_1
- 和青八木见面的那天 -> scene_school_gate_blocker_answer1_2
- 昨天？ -> scene_school_gate_blocker_answer1_3 | set: {"aoyagi": "+1"}

## Scene: scene_school_gate_blocker_answer1_1
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=bitter] 我想回到初中放弃骑车的那天……
[旁白|sprite=aoyagi,pose=bitter] 青八木露出伤感的神色。
[青八木|sprite=aoyagi,pose=blush] 如果那时我认识你，我一定会把你拉回来！
[青八木|sprite=aoyagi,pose=blush] 无论如何，我也不会让纯太放弃这么喜欢的自行车！
[手嶋|sprite=teshima,pose=bitter] 如果是一直直面自己的青八木来劝我……
[手嶋|sprite=teshima,pose=smile] 说不定真的可以~
[青八木|sprite=aoyagi,pose=normal] 纯太！
-> scene_school_gate_blocker_part2

## Scene: scene_school_gate_blocker_answer1_2
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 我想回到和青八木见面的那天……
[旁白|sprite=aoyagi,pose=surprise] 纯太？
[手嶋|sprites=teshima:normal@0.7,aoyagi:normal@0.3] 那个时候就组成T2的话……
[手嶋|sprites=teshima:smile@0.7,aoyagi:normal@0.3] 说不定能提前一年参加高中联赛……
[青八木|sprite=aoyagi,pose=normal] 纯太……
[青八木|sprite=aoyagi,pose=smile] 纯太真的是个自行车笨蛋……
[手嶋|sprite=teshima,pose=blush] 我才不是！

-> scene_school_gate_blocker_part2

## Scene: scene_school_gate_blocker_answer1_3
- BG: school_gate
- BGM: happy

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=bitter] 我最想回到昨天吧……
[青八木|sprite=aoyagi,pose=surprise] 纯太？
[手嶋|sprites=teshima:bitter@0.7,aoyagi:surprise@0.3] 模拟考试考砸了，下个月的零花钱没了……
[青八木|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] 纯太……
[手嶋|sprite=teshima,pose=normal] 不过——
[青八木|sprite=aoyagi,pose=surprise] ？
[手嶋|sprite=teshima,pose=normal] 这也说明我对一直走过来的路没有什么后悔的~
[手嶋|sprite=teshima,pose=smile] 特别是遇到了你，青八木——
[青八木|sprite=aoyagi,pose=blush] 纯太！

[指令] BGM: fade happy 600 -> play calm
-> scene_school_gate_blocker_part2

## Scene: scene_school_gate_blocker_part2
- BG: school_gate
- BGM: calm

[青八木|sprite=aoyagi,pose=normal] 那你猜我最想回到哪一天
[选择]
- T2第一次胜利的那天 -> scene_school_gate_blocker_answer2_1 | set: {"aoyagi": "+1"}
- 输给小野田他们的那天 -> scene_school_gate_blocker_answer2_2
- 难不成也是昨天 -> scene_school_gate_blocker_answer2_3


## Scene: scene_school_gate_blocker_answer2_1
- BG: school_gate
- BGM: calm

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=normal] T2第一次胜利的那天？
[青八木|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] 如果那天我像高中联赛那样，让纯太先通过终点就好了……
[青八木|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] 那样的话大家一定能更早明白纯太是多么厉害的人！
[手嶋|sprite=teshima,pose=moved] ……
[青八木|sprite=aoyagi,pose=blush] 我一直在纯太身边看着，所以我是最清楚的！
[手嶋|sprite=teshima,pose=moved] 青八木……
[旁白]

@if aoyagi == 2 -> scene_school_gate_blocker_special
@if aoyagi < 2 -> scene_school_gate_blocker_part3

## Scene: scene_school_gate_blocker_answer2_2
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 输给小野田他们的那天？
[青八木|sprite=aoyagi,pose=bitter] 那天都是因为我太弱了，我们才会输的，纯太的战术没有问题……
[手嶋|sprite=teshima,pose=moved] 青八木……
[手嶋|sprite=teshima,pose=bitter] 我的战术也有很多不完美的……而且——
[手嶋|sprite=teshima,pose=moved] 如果没有青八木的话，我连和他们一起冲刺的力气也没有了……
[青八木|sprite=aoyagi,pose=bitter] 纯太……
[青八木|sprite=aoyagi,pose=bitter] 虽然那一天我们输了……
[青八木|sprite=aoyagi,pose=bitter] 但是我们都拼尽了全力了——
[青八木|sprite=aoyagi,pose=smile] 所以我以此为荣!
[手嶋|sprite=teshima,pose=moved] 青八木……

-> scene_school_gate_blocker_part3


## Scene: scene_school_gate_blocker_answer2_3
- BG: school_gate
- BGM: happy

[手嶋|sprite=teshima,pose=normal] 难不成也是昨天？
[青八木|sprite=aoyagi,pose=blush] 纯太……
[手嶋|sprite=teshima,pose=smile] 什么呀你也考砸了吗？
[青八木|sprite=aoyagi,pose=blush] 不是……
[指令] BGM: fade happy 600 -> play calm

-> scene_school_gate_blocker_part3


## Scene: scene_school_gate_blocker_special
- BG: school_gate
- BGM: blocker_special_warm

[手嶋|sprite=teshima,pose=normal] 不管想回到什么时候，都是越早组成T2越好呢……
[手嶋|sprite=aoyagi,pose=smile] 要是能早点遇到青八木就好了~
[手嶋|sprite=teshima,pose=bitter] 如果初中就遇到青八木的话，我可能就不会放弃骑车了……
[青八木|sprite=aoyagi,pose=bitter] 纯太……
[手嶋|sprite=teshima,pose=normal] 说不定我们还能一起进县队~
[手嶋|sprite=teshima,pose=smile] 因为T2这么强！我们配合这么好！
[青八木|sprite=aoyagi,pose=normal] 纯太——
[青八木|sprite=aoyagi,pose=normal] 不管是什么时候相遇，我们都会结成T2，纯太是这么认为的吗？
[手嶋|sprite=teshima,pose=smile] 没错！
[青八木|sprite=aoyagi,pose=smile] 所以纯太没什么好担心的——
[手嶋|sprite=teshima,pose=surprise] ？
[青八木|sprite=aoyagi,pose=normal] 只要我们一直骑车，我们迟早会这样相遇，不管是现在还是将来——
[青八木|sprite=aoyagi,pose=normal] 就算是去不同的大学，只要我们都还在骑车，T2一定还是T2！
[青八木|sprite=aoyagi,pose=smile] 因为我也是这么相信的！
[手嶋|sprite=teshima,pose=moved] 青八木……
[手嶋|sprite=teshima,pose=moved] 真是的，一大早我就好想哭啊！
[旁白|sprite=aoyagi,pose=smile] 青八木很开心地笑了——
[旁白|sprite=teshima,pose=moved] 到底是谁说他沉默寡言的——
[旁白|sprite=teshima,pose=moved] 现在他已经会照顾我的情绪了！
[旁白|sprite=teshima,pose=smile] 我也笑着回应他——

[指令] BGM: fade blocker_special_warm 600 -> play calm

-> scene_school_gate_blocker_part3


## Scene: scene_school_gate_blocker_part3
- BG: school_gate
- BGM: calm

[青八木|sprite=aoyagi,pose=normal] 对了纯太，昨天你好像说过，今天轮到你值日了——
[手嶋|sprite=teshima,pose=surprise] 不好！我完全忘记了！
[青八木|sprite=aoyagi,pose=normal] 车我帮你停，你快去吧~
[手嶋|sprite=teshima,pose=smile] 谢了~好搭档~
[指令] sprites: clear
[旁白] 我赶忙把车交给青八木，加快脚步往教室跑去——
[指令] BGM: fade calm 5000

-> scene_lunch_break

## Scene: scene_lunch_break
- BG: school_classroom
- BGM: lunch_time

[指令] SFX: bell
[手嶋|sprite=teshima,pose=bitter] 哎……终于下课了……
[手嶋|sprite=teshima,pose=bitter] 佐藤老师的课真是又臭又长……
[手嶋|sprite=teshima,pose=normal] 赶紧吃午饭吧，下午还有体育课呢。
[选择]
- 去食堂吃吧 -> scene_lunch_break_normal
- 带便当去部室吃吧 -> scene_lunch_break_blocker


## Scene: scene_lunch_break_normal
- BG: school_corridor
- BGM: lunch_time

[手嶋|sprite=teshima,pose=normal] 今天没带饭，去食堂吃吧~
[指令] sprites: clear
[？？？] 手嶋—
[旁白] 突然听到有人叫我—
[平田|sprite=hirata,pose=normal] 你去食堂吗，一起去吧～
[手嶋|sprite=teshima,pose=surprise] 你今天居然没带饭吗？
[平田|sprite=hirata,pose=normal] 刚考完模拟考，一下子放松了，早上就起晚了……
[手嶋|sprite=teshima,pose=bitter] 哈哈我也是~
[平田|sprite=hirata,pose=normal] 反正月初还有零花钱，今天就奢侈一把——
[手嶋|sprite=teshima,pose=surprise] 哦哦炸虾天妇罗乌冬吗？
[手嶋|sprite=teshima,pose=smile] 我也想吃了~
[指令] sprites: clear
[旁白] 我和平田两人有说有笑的，向食堂走去——
[指令] BGM: fade lunch_time 5000 

-> scene_physical_education


## Scene: scene_lunch_break_blocker
- BG: school_corridor
- BGM: lunch_time

[手嶋|sprite=teshima,pose=normal] 今天带便当了，去部室吃吧——
[指令] sprites: clear
[？？？] 啊啊啊—————
[指令] SFX: scream
[？？？] 好帅哦！！！！！
[旁白] 突然听到一阵女生的骚动……
[旁白|sprite=teshima,pose=surprise] 我好奇地往声音方向看去——
[旁白|sprite=imaizumi,pose=normal] 只见我们自行车部的二年级王牌，正被三年级女生围得水泄不通！
[今泉|sprite=imaizumi,pose=normal] 手嶋前辈！
[手嶋|sprite=teshima,pose=smile] 哦是今泉啊——
[指令] sprites: clear
[旁白] 打完招呼我准备扭头就走……
[今泉|sprite=imaizumi,pose=blush] 手嶋前辈快救救我——
[指令] sprites: clear
[旁白] 我只能把他从女生堆里捞出来。
[手嶋|sprite=teshima,pose=serious] 你大中午不去吃饭，来三年级校舍做什么？
[今泉|sprite=imaizumi,pose=normal] 今泉一声不吭地望着我——
[手嶋|sprite=teshima,pose=normal] 高桥管家是不是都准备好大餐了？
[今泉|sprite=imaizumi,pose=normal] 今天是我一个人，我去食堂吃……
[旁白|sprite=teshima,pose=bitter] 所以平时果然有准备是吗~
[手嶋|sprite=teshima,pose=bitter] 你堂堂的精英，去庶民的学生食堂，会不会吃坏肚子？
[今泉|sprite=imaizumi,pose=normal] 手嶋前辈也一起去吧——
[手嶋|sprite=teshima,pose=normal] 我带饭了，我去部室吃~
[今泉|sprite=imaizumi,pose=blush] 你在哪里吃不都一样吗！
[手嶋|sprite=teshima,pose=blush] 精英少看不起人哦！
[今泉|sprite=imaizumi,pose=blush] 我、我请你吃！！
[手嶋|sprite=teshima,pose=smile] 不愧是大少爷～这么大方，那我就不客气了~

-> scene_lunch_break_blocker_part1

## Scene: scene_lunch_break_blocker_part1
- BG: canteen
- BGM: lunch_happy

[旁白] 我和今泉来到食堂，食堂并没有想象中的那么多人。
[今泉|sprite=imaizumi,pose=smile] 手嶋前辈，你选一个吧——
[手嶋|sprite=teshima,pose=smile] 这么热果然还是吃冷面呢，选哪个好呢？
[选择]
- 最便宜的素乌冬 -> scene_lunch_break_blocker_answer1_1
- 中间价位的油豆腐乌冬 -> scene_lunch_break_blocker_answer1_2
- 最贵的炸虾天妇罗乌冬！ -> scene_lunch_break_blocker_answer1_3 | set: {"imaizumi": "+1"}


## Scene: scene_lunch_break_blocker_answer1_1
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=normal] 我就吃素乌冬吧~
[今泉|sprite=imaizumi,pose=blush] 备考生还是应该吃有营养的！
[手嶋|sprite=teshima,pose=smile] 你这么说那我就不客气了~

-> scene_lunch_break_blocker_part2

## Scene: scene_lunch_break_blocker_answer1_2
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=normal] 我吃油豆腐乌冬~
[今泉|sprite=imaizumi,pose=blush] 备考生还是应该吃有营养的！
[手嶋|sprite=teshima,pose=smile] 你这么说那我就不客气了~

-> scene_lunch_break_blocker_part2

## Scene: scene_lunch_break_blocker_answer1_3
- BG: canteen
- BGM: lunch_happy

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=normal] 既然是你请客，我就不客气了——
[手嶋|sprite=teshima,pose=smile] 我要吃天妇罗乌冬，再加个煎蛋~
[今泉|sprite=imaizumi,pose=smile] 好——
[手嶋|sprite=teshima,pose=blush] 开玩笑的啦，你不要答应的这么快！
[今泉|sprite=imaizumi,pose=smile] 为什么不？备考生应该吃有营养一点的。

-> scene_lunch_break_blocker_part2

## Scene: scene_lunch_break_blocker_part2
- BG: udon
- BGM: lunch_happy

[旁白] 老板把烫好的乌冬过完凉水，倒入装有淡褐色汤头的碗中——
[旁白|sprite=teshima,pose=moved] 点缀了一大把葱花之后，把炸得滋滋冒油的天妇罗加到了碗里——
[旁白|sprite=teshima,pose=moved] 然后还不忘加上一个煎的半熟的鸡蛋！
[旁白|sprite=teshima,pose=smile] 真是令人垂涎欲滴的绝美搭配！

-> scene_lunch_break_blocker_part2_2

## Scene: scene_lunch_break_blocker_part2_2
- BG: canteen
- BGM: lunch_happy

[旁白|sprite=teshima,pose=smile] 我美滋滋地接过盛着乌冬的托盘，看着旁边好像不知道怎么点餐的今泉……
[手嶋|sprite=teshima,pose=normal] 你吃哪个？
[旁白|sprite=imaizumi,pose=normal] 今泉眼巴巴望着我手上的便当——
[指令] sprites: clear
[旁白] 吸溜吸溜——
[指令] SFX: eat_noodles
[手嶋|sprite=teshima,pose=smile] 太好吃了，这可是我们食堂的一绝！
[指令] sprites: clear
[旁白] 啊！
[旁白] 我光顾着嗦面条，差点忘了今泉此刻正对着我的庶民便当不知所措……
[旁白|sprite=imaizumi,pose=normal] 今泉拿着筷子，他面前朴素的便当我再熟悉不过了。。。

-> scene_lunch_break_blocker_part2_3

## Scene: scene_lunch_break_blocker_part2_3
- BG: bento
- BGM: lunch_happy

[指令] sprites: clear
[旁白] 主食是庶民最爱的高碳水白米饭，上面点缀着一点拌饭料——
[旁白] 配菜有白灼花椰菜，厚蛋烧，腌萝卜和小香肠——
[旁白] 今天起晚了，所以小香肠并不是章鱼的形状……

-> scene_lunch_break_blocker_part2_4

## Scene: scene_lunch_break_blocker_part2_4
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=bitter] 不想吃可以不用勉强？
[今泉|sprite=imaizumi,pose=blush] 不、不是，因为机会难得，我舍不得吃……
[指令] sprites: clear
[旁白] 今泉终于夹起一块厚蛋烧塞进嘴里……
[旁白|sprite=imaizumi,pose=smile] 看到他并没有皱起眉头，说明味道还是他能接受的吧？
[手嶋|sprite=teshima,pose=normal] 今天起晚了做的比较潦草，下次你提前告诉我，我准备一下……
[指令] sprites: clear
[旁白] 今泉一脸喜出望外，这让我十分受用~
[手嶋|sprite=teshima,pose=bitter] 不过你要提前说，接下来我得去上补习班，不会经常来学校了。
[今泉|sprite=imaizumi,pose=bitter] 来学校的话，也要来自行车部看看……
[旁白|sprite=teshima,pose=moved] 我的心头一热——
[旁白|sprite=teshima,pose=moved] 什么嘛，虽然说话臭屁，到底也还是个可爱的学弟！
[旁白|sprite=teshima,pose=smile] 我努力假装不要太高兴~
[选择]
- 可我是备考生，没时间 -> scene_lunch_break_blocker_answer2_1
- 怕我骑车生疏了吗？ -> scene_lunch_break_blocker_answer2_2
- 想我了？ -> scene_lunch_break_blocker_answer2_3 | set: {"imaizumi": "+1"}

## Scene: scene_lunch_break_blocker_answer2_1
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=bitter] 可我是备考生，没有那么多时间。
[旁白|sprite=imaizumi,pose=bitter] 今泉露出落寞的神情。
[今泉|sprite=imaizumi,pose=bitter] 可是偶尔也要运动一下？
[今泉|sprite=imaizumi,pose=bitter] 运动可以提高记忆力？
[今泉|sprite=imaizumi,pose=bitter] 还有……
[手嶋|sprite=teshima,pose=bitter] 好了好了我会去的~

-> scene_lunch_break_blocker_part3


## Scene: scene_lunch_break_blocker_answer2_2
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=normal] 怎么，怕我骑车生疏了吗？
[今泉|sprite=imaizumi,pose=blush] 不是，我知道现在准备考试更重要，但是——
[手嶋|sprite=teshima,pose=surprise] ？
[今泉|sprite=imaizumi,pose=blush] 是、是小野田和鸣子他们都很想前辈！
[手嶋|sprite=teshima,pose=smile] 嗯，为了可爱的后辈~我会尽量去的~
[旁白|sprite=imaizumi,pose=smile] 今泉露出了开心的表情。

-> scene_lunch_break_blocker_part3


## Scene: scene_lunch_break_blocker_answer2_3
- BG: canteen
- BGM: lunch_happy

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=normal] 怎么，想我了？
[今泉|sprite=imaizumi,pose=blush] 是、是想督促你不要生疏了！！
[手嶋|sprite=teshima,pose=bitter] 精英真的是不饶人~
[今泉|sprite=imaizumi,pose=blush] 还有想、想和你一起骑车……（超小声）
[手嶋|sprite=teshima,pose=normal] ？
[今泉|sprite=imaizumi,pose=blush] 总、总之你偶尔也要来部里看看！
[今泉|sprite=imaizumi,pose=blush] 小野田和鸣子他们都很想你……
[手嶋|sprite=teshima,pose=smile] 嗯，为了可爱的后辈~我会尽量去的~
[旁白|sprite=imaizumi,pose=smile] 今泉露出了开心的表情。
[旁白]

@if imaizumi == 2 -> scene_lunch_break_blocker_special
@if imaizumi < 2 -> scene_lunch_break_blocker_part3

## Scene: scene_lunch_break_blocker_special
- BG: canteen
- BGM: blocker_special_warm

[手嶋|sprite=teshima,pose=normal] 那你呢？
[今泉|sprite=imaizumi,pose=normal] ？
[手嶋|sprite=teshima,pose=smile] 你就不想我吗？
[今泉|sprite=imaizumi,pose=blush] 啊、不、那个、我——
[今泉|sprite=imaizumi,pose=blush] 我、我偶尔也会想到你……
[手嶋|sprite=teshima,pose=surprise] 比如说？
[今泉|sprite=imaizumi,pose=bitter] 骑车的时候……会、会习惯性回头看之类的……
[手嶋|sprite=teshima,pose=blush] 你是嫌我骑得慢吗？
[今泉|sprite=imaizumi,pose=blush] 不、不是啦——
[今泉|sprite=imaizumi,pose=bitter] 平时和手嶋前辈一起练习的时候，总是能听到前辈努力骑车的声音。
[今泉|sprite=imaizumi,pose=bitter] 最近都听不到了……
[手嶋|sprite=teshima,pose=blush] 喂！你这是拐着弯说我体力差吧！？
[今泉|sprite=imaizumi,pose=blush] 不、不是，我是说……那个声音让我知道前辈还在努力跟着——
[今泉|sprite=imaizumi,pose=blush] 让我觉得很安心……
[手嶋|sprite=teshima,pose=smile] ……哈哈，真是少见！精英居然会说出这种话~
[今泉|sprite=imaizumi,pose=bitter] 所以，有时候回头确认一下……
[手嶋|sprite=teshima,pose=smile] 哈哈哈哈哈哈~
[今泉|sprite=imaizumi,pose=blush] 不、不要笑啊！我只是陈述事实！
[手嶋|sprite=teshima,pose=normal] 你这么说的话，我以后就多多找你骑车，让你多安心安心~
[手嶋|sprite=teshima,pose=smile] 毕竟王牌的状态至关重要嘛~
[今泉|sprite=imaizumi,pose=blush] ……是！

[指令] BGM: fade blocker_special_warm 600 -> play lunch_happy

-> scene_lunch_break_blocker_part3

## Scene: scene_lunch_break_blocker_part3
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=bitter] 到时候你们对我可要手下留情啊~
[手嶋|sprite=teshima,pose=bitter] 我可是备考生~
[今泉|sprite=imaizumi,pose=blush] 手嶋前辈如果怠惰了自行车，我不会原谅的！
[手嶋|sprite=teshima,pose=blush] 所以说精英就是@q~￥uzvx@！^uz。~￥@vx！……
[今泉|sprite=imaizumi,pose=smile] 要是我放水，到时候手嶋前辈也会生气的……
[手嶋|sprite=teshima,pose=smile] 没错~~~
[今泉|sprite=imaizumi,pose=blush] 所以说你这个人真是……
[手嶋|sprite=teshima,pose=normal] ？
[今泉|sprite=imaizumi,pose=blush] 总之便当很好吃，明天我洗完还给你——
[旁白|sprite=teshima,pose=normal] 明天今泉会不会塞满高级点心还给我呢？
[旁白|sprite=teshima,pose=smile] 有点期待了~

[指令] BGM: fade lunch_happy 3000
-> scene_physical_education

## Scene: scene_physical_education
- BG: school_corridor
- BGM: lunch_time

[指令] sprites: clear
[指令] SFX: school_bell
[？？？] 手嶋，我们先过去了——
[手嶋|sprite=teshima,pose=normal] 好~
[指令] sprites: clear
[旁白] 下午第一节是体育课。
[旁白] 本来还想早点去操场活动活动……
[手嶋|sprite=teshima,pose=bitter] 上周不小心把运动外套落在部室了……
[手嶋|sprite=teshima,pose=bitter] 得赶紧去拿回来——
[选择]
- 找隔壁班借一下 -> scene_physical_education_normal
- 去部室拿 -> scene_physical_education_blocker


## Scene: scene_physical_education_normal
- BG: school_classroom
- BGM: lunch_time

[手嶋|sprite=teshima,pose=normal] 太麻烦了，先找隔壁班的同学借一下吧~
[指令] sprites: clear
[？？？] 手嶋—
[旁白] 突然听到有人叫我——
[手嶋|sprite=teshima,pose=normal] 东户~来得正好！
[东户|sprite=higashito,pose=normal] ？
[手嶋|sprite=teshima,pose=normal] 你们班这周没体育课吧？
[东户|sprite=higashito,pose=normal] 没有，你忘带衣服了？
[手嶋|sprite=teshima,pose=bitter] 嗯，落在部室了，懒得过去拿。
[东户|sprite=higashito,pose=normal] 给——
[手嶋|sprite=teshima,pose=smile] 谢了，我洗好了还给你~
[东户|sprite=higashito,pose=normal] 跟我还客气啥！
[指令] sprites: clear
[旁白] 我接过衣服，赶紧朝操场走去——

[指令] BGM: fade lunch_time 5000 
-> scene_after_school

## Scene: scene_physical_education_blocker
- BG: school_corridor
- BGM: afternoon

[手嶋|sprite=teshima,pose=normal] 还是去部室一趟……
[指令] sprites: clear
[？？？] 手嶋——
[旁白] 突然听到有人叫我——
[手嶋|sprite=teshima,pose=normal] 怎么是你啊古贺？
[旁白|sprite=koga,pose=normal] 只见古贺手里拿着一件运动外套。
[手嶋|sprite=teshima,pose=normal] 不行啊，你的衣服肩膀太宽了，我穿不下！
[古贺|sprite=koga,pose=serious] 这是你的衣服！臭卷发——
[手嶋|sprite=teshima,pose=surprise] ！
[古贺|sprite=koga,pose=serious] 中午去部室，看到有笨蛋忘了拿外套，就带上了。
[手嶋|sprite=teshima,pose=smile] 太及时了，谢谢你啦~

-> scene_physical_education_blocker_part1

## Scene: scene_physical_education_blocker_part1
- BG: school_classroom
- BGM: afternoon

[旁白] 有古贺帮我跑腿，时间就很充裕了~
[手嶋|sprite=teshima,pose=smile] 哟西——
[旁白|sprite=teshima,pose=smile] 我不紧不慢地脱掉衬衫，露出下面的T恤——
[旁白|sprite=teshima,pose=smile] 套上运动外套，把衬衫整齐地叠好放到抽屉里——
[旁白|sprite=teshima,pose=smile] 合上桌子上的各种书本和作业本——
[旁白|sprite=teshima,pose=smile] 坐回位置上打开翻盖手机——
[指令] sprites: clear
[旁白] 一旁的古贺终于忍不住了！
[古贺|sprite=koga,pose=serious] 你还不赶紧滚去上课！
[手嶋|sprite=teshima,pose=surprise] 这不是还有时间嘛！
[古贺|sprite=koga,pose=bitter] 你就没有什么该烦恼的吗？
[古贺|sprite=koga,pose=bitter] 有时间刷手机不如多看点书！
[古贺|sprite=koga,pose=bitter] 下周要古文统考，你复习完了吗？
[选择]
- 笔记借我抄 -> scene_physical_education_answer1_1
- 古贺你怎么和我妈一样 -> scene_physical_education_answer1_2
- 明年的总北 -> scene_physical_education_answer1_3 | set: {"koga": "+1"}


## Scene: scene_physical_education_answer1_1
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=smile] 古贺古贺~
[古贺|sprite=koga,pose=bitter] 干嘛？
[手嶋|sprite=teshima,pose=smile] 你古文很好对吧？
[古贺|sprite=koga,pose=bitter] 你要干嘛？
[手嶋|sprite=teshima,pose=smile] 笔记借我抄一下嘛~
[古贺|sprite=koga,pose=serious] 不借！
[手嶋|sprite=teshima,pose=blush] 小气鬼！

-> scene_physical_education_blocker_part2

## Scene: scene_physical_education_answer1_2
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=serious] 古贺你怎么和我妈一样！
[古贺|sprite=koga,pose=bitter] 我没你这么笨的孩子！
[手嶋|sprite=teshima,pose=serious] 你这样会不受欢迎的——
[古贺|sprite=koga,pose=serious] 不用你多操心！
[手嶋|sprite=teshima,pose=surprise] 好可怕哦——古贺前辈是鬼畜眼镜——
[古贺|sprite=koga,pose=normal] 而且我比你受后辈欢迎吧？
[手嶋|sprite=teshima,pose=blush] 可恶——这一点我竟然无法反驳——

-> scene_physical_education_blocker_part2


## Scene: scene_physical_education_answer1_3
- BG: school_classroom
- BGM: afternoon

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=bitter] 明年的总北……一定比今年更难了……
[古贺|sprite=koga,pose=bitter] ……
[手嶋|sprite=teshima,pose=bitter] 把这么重的担子交给小野田，真的很抱歉……
[古贺|sprite=koga,pose=bitter] 笨蛋卷发——
[古贺|sprite=koga,pose=bitter] 小野田比你可靠谱多了——
[古贺|sprite=koga,pose=normal] 而且还有其他人呢——
[古贺|sprite=koga,pose=normal] 我们该做的就是为他们加油——
[手嶋|sprite=teshima,pose=smile] 说的也是~
[古贺|sprite=koga,pose=serious] 与其担心他们，还不如担心一下你的古文！
[手嶋|sprite=teshima,pose=blush] 怎么又提这个！

-> scene_physical_education_blocker_part2


## Scene: scene_physical_education_blocker_part2
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=normal] 如果考的是卡拉OK就好了……
[手嶋|sprite=teshima,pose=smile] 那我一定能考满分吧~
[古贺|sprite=koga,pose=serious] 备考生还这么松懈！
[手嶋|sprite=teshima,pose=surprise] 我这是在玩吗？
[手嶋|sprite=teshima,pose=bitter] 这不是群里正在说马上要面谈志愿了？
[古贺|sprite=koga,pose=bitter] 我们班已经面谈过了。
[手嶋|sprite=teshima,pose=surprise] 那你以后准备去哪个大学？
[古贺|sprite=koga,pose=bitter] 还不确定。
[手嶋|sprite=teshima,pose=bitter] 你不是也还没确定吗？
[古贺|sprite=koga,pose=normal] 但是有一个可以确定——
[古贺|sprite=koga,pose=smile] 我要去有自行车部的大学！
[选择]
- 我可不想和你一个学校 -> scene_physical_education_answer2_1
- 大学的骑车会不会竞争很激烈 -> scene_physical_education_answer2_2
- 我放心了 -> scene_physical_education_answer2_3 | set: {"koga": "+1"}

## Scene: scene_physical_education_answer2_1
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=serious] 我可不想和你一个学校……
[古贺|sprite=koga,pose=serious] 为什么？
[手嶋|sprite=teshima,pose=serious] 一想到要和你竞争位置就压力山大……
[古贺|sprite=koga,pose=normal] 看来你很有自知之明嘛~
[手嶋|sprite=teshima,pose=serious] 鬼畜眼镜！
[古贺|sprite=koga,pose=normal] 虽然你说是这么说——
[古贺|sprite=koga,pose=smile] 到时候肯定又会死缠烂打的追上来吧~
[手嶋|sprite=teshima,pose=blush] ……要你管！

-> scene_physical_education_blocker_part3

## Scene: scene_physical_education_answer2_2
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=bitter] 大学的骑车会不会竞争很激烈……
[古贺|sprite=koga,pose=bitter] 那是肯定的。
[古贺|sprite=koga,pose=bitter] 所以你就更不能松懈了，总北最弱的！
[手嶋|sprite=teshima,pose=blush] 我、我是在担心你的肩膀啦~
[古贺|sprite=koga,pose=serious] 笨、笨蛋——不用你操心！
[古贺|sprite=koga,pose=serious] 已经恢复的差不多了……
[手嶋|sprite=teshima,pose=blush] 真是肌肉怪人！

-> scene_physical_education_blocker_part3

## Scene: scene_physical_education_answer2_3
- BG: school_classroom
- BGM: afternoon

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=normal] 我放心了——
[古贺|sprite=koga,pose=bitter] ？
[手嶋|sprite=teshima,pose=normal] 听到你还想骑车~
[古贺|sprite=koga,pose=serious] 那是当然的啊！
[古贺|sprite=koga,pose=serious] 谁会比你先放弃啊——笨蛋卷发！
[手嶋|sprite=teshima,pose=serious] 肌肉怪人！
[旁白]

@if koga == 2 -> scene_physical_education_blocker_special
@if koga < 2 -> scene_physical_education_blocker_part3

## Scene: scene_physical_education_blocker_special
- BG: school_classroom
- BGM: blocker_special_warm  

[古贺|sprite=koga,pose=normal] 不过，我觉得你现在可以自信点。
[手嶋|sprite=teshima,pose=surprise] ？
[古贺|sprite=koga,pose=normal] 虽然平地你现在未必跑得过我……
[古贺|sprite=koga,pose=normal] 不过爬坡嘛，勉勉强强还能看。
[手嶋|sprite=teshima,pose=serious] 什么啊，只是“勉勉强强”吗？
[古贺|sprite=koga,pose=normal] 虽然没有拿到号码牌——
[手嶋|sprite=teshima,pose=serious] 你要说我没跑完全程对吧！
[古贺|sprite=koga,pose=normal] 虽然没跑完全程——
[手嶋|sprite=teshima,pose=serious] 看吧！我就知道——
[古贺|sprite=koga,pose=normal] 但比起以前那个总垫底的你，已经判若两人了。
[手嶋|sprite=teshima,pose=blush] 啊——受不了了真的是鬼畜眼镜！
[古贺|sprite=koga,pose=normal] 我可是认真在夸你哦？
[手嶋|sprite=teshima,pose=blush] 可你这话听着还是像在骂我！
[古贺|sprite=koga,pose=normal] 总之你变强了，这点我可以保证。
[古贺|sprite=koga,pose=smile] 因为我一直都在看着——
[手嶋|sprite=teshima,pose=blush] ！
[指令] sprites: clear
[旁白] 古贺看上去心情很好……

-> scene_physical_education_blocker_part3

## Scene: scene_physical_education_blocker_part3
- BG: school_classroom
- BGM: afternoon

[古贺|sprite=koga,pose=bitter] 所以你还不去上课吗？
[手嶋|sprite=teshima,pose=blush] 不好了，我要迟到了！
[手嶋|sprite=teshima,pose=blush] 都怪你，居然聊这么久！
[古贺|sprite=koga,pose=serious] 哈？是谁在这里收拾了半天还玩手机的啊，快滚吧——
[手嶋|sprite=teshima,pose=blush] 变态肌肉怪人！
[古贺|sprite=koga,pose=serious] 臭卷发！
[指令] sprites: clear
[旁白] 我赶紧丢下古贺往操场跑去……

[指令] BGM: fade afternoon 5000
-> scene_after_school

## Scene: scene_after_school
- BG: school_entrance
- BGM: after_school

[指令] sprites: clear
[指令] SFX: school_bell
[手嶋|sprite=teshima,pose=bitter] （伸懒腰——）
[手嶋|sprite=teshima,pose=bitter] 今天的课程终于都结束了……
[手嶋|sprite=teshima,pose=normal] 但是一想到接下来就要去上补习班……
[手嶋|sprite=teshima,pose=normal] 这种美好的校园生活很快就要结束了……
[手嶋|sprite=teshima,pose=bitter] 就好舍不得啊~
[手嶋|sprite=teshima,pose=smile] 去部室露个脸吧？
[选择]
- 去部室 -> scene_after_school_blocker
- 好像忘了什么重要的事 -> scene_after_school_normal


## Scene: scene_after_school_normal
- BG: school_entrance
- BGM: after_school

[手嶋|sprite=teshima,pose=normal] 总觉得好像忘了什么重要的事？
[指令] sprites: clear
[？？？] 手嶋—
[旁白] 突然听到有人叫我——
[手嶋|sprite=teshima,pose=normal] 我觉得你也差不多该出现了……
[手嶋|sprite=hirata,pose=smile] 平田同学~
[旁白|sprites=teshima:normal@0.7,hirata:normal@0.3] 平田把一根拖把递给我——
[平田|sprite=hirata,pose=smile] 别想翘掉值日！
[手嶋|sprite=teshima,pose=bitter] 哈哈哈我哪有？
[旁白|sprite=teshima,pose=bitter] 我干笑，确实刚才一瞬间完全忘记了……
[指令] sprites: clear
[旁白] 我和平田为了能早点溜，马不停蹄地打扫了起来——

[指令] BGM: fade after_school 5000
-> scene_hill_climb

## Scene: scene_after_school_blocker
- BG: school_entrance
- BGM: friendship

[手嶋|sprite=teshima,pose=normal] 去部室露个脸吧？
[指令] sprites: clear
[？？？] 手嶋~
[旁白] 突然听到有人叫我——
[手嶋|sprite=teshima,pose=surprise] 东户？
[旁白|sprite=higashito,pose=normal] 只见东户拉着一个巨大的身影走了过来……
[手嶋|sprite=teshima,pose=surprise] 阿苇？！！
[苇木场|sprite=ashikiba,pose=smile] 小纯——
[手嶋|sprite=teshima,pose=normal] 你怎么在这里，今天不用上课吗？
[苇木场|sprite=ashikiba,pose=normal] 箱学三年级已经可以选择自由来学校了……
[东户|sprite=higashito,pose=normal] 这家伙在校门口晃来晃去，逢人就问认不认识你，我就带他过来了~
[苇木场|sprite=ashikiba,pose=smile] 幸好遇到了町田同学~
[东户|sprite=higashito,pose=normal] 我叫东户……哎算了，你两慢慢聊，我先回家了——
[指令] sprites: clear
[旁白] 东户摆摆手往校门口方向走去。

-> scene_after_school_blocker_part1


## Scene: scene_after_school_blocker_part1
- BG: outdoor_corridor
- BGM: friendship

[旁白] 我把苇木场带到学校的中庭，挑了个椅子一起坐下。
[手嶋|sprite=teshima,pose=normal] 苇木场很久没回来千叶了吧？
[苇木场|sprite=ashikiba,pose=bitter] 嗯……
[手嶋|sprite=teshima,pose=surprise] 不会是从初三那会儿就没来过吧？
[苇木场|sprite=ashikiba,pose=bitter] 差不多吧……
[手嶋|sprite=teshima,pose=normal] 有地方住吗？
[苇木场|sprite=ashikiba,pose=bitter] 嗯，可以住在亲戚家……
[手嶋|sprite=teshima,pose=normal] 那你这次回来可以多呆两天，老同学们都说很想你呢~
[苇木场|sprite=ashikiba,pose=bitter] 是吗？
[手嶋|sprite=teshima,pose=smile] 因为你实在太突出了，大家都记得你！
[苇木场|sprite=ashikiba,pose=bitter] 那小纯呢，小纯还记得我吗？
[手嶋|sprite=teshima,pose=normal] 肯定啊！我们当时每天都在一起骑车~
[苇木场|sprite=ashikiba,pose=smile] 小纯还要取得天下对吧？
[手嶋|sprite=teshima,pose=blush] 那个就别提了，丢死人了——
[手嶋|sprite=teshima,pose=bitter] 后面还说不骑了，结果到头来还是重新骑了……
[苇木场|sprite=ashikiba,pose=normal] 但是我一直相信——
[手嶋|sprite=teshima,pose=normal] ？
[苇木场|sprite=ashikiba,pose=smile] 我相信我只要继续骑车就一定能再遇到小纯！
[手嶋|sprite=teshima,pose=smile] 嘿嘿，没想到被你蒙对了~
[苇木场|sprite=ashikiba,pose=smile] 因为小纯是自行车笨蛋对吗~
[手嶋|sprite=teshima,pose=blush] 啊？谁说的——
[苇木场|sprite=ashikiba,pose=normal] 町田说的——
[手嶋|sprite=teshima,pose=blush] 东户这家伙胡说八道什么啊！
[苇木场|sprite=ashikiba,pose=normal] 多亏自行车才能再遇到小纯……
[苇木场|sprite=ashikiba,pose=bitter] 我其实一直想对小纯道歉……
[手嶋|sprite=teshima,pose=bitter] 为什么？
[苇木场|sprite=ashikiba,pose=bitter] 那个时候不告而别，一定让小纯很困扰吧？
[选择]
- 你不要放在心上 -> scene_after_school_answer1_1
- 确实很担心 -> scene_after_school_answer1_2
- 以为你受不了地球回母星了 -> scene_after_school_answer1_3 | set: {"ashikiba": "+1"}


## Scene: scene_after_school_answer1_1
- BG: outdoor_corridor
- BGM: friendship

[手嶋|sprite=teshima,pose=normal] 你不要放在心上~
[手嶋|sprite=teshima,pose=normal] 现在不就又见面了~
[手嶋|sprite=teshima,pose=smile] 而且我们还都在骑车，这就够了啊！
[苇木场|sprite=ashikiba,pose=bitter] 嗯……
[指令] sprites: clear
[旁白] 苇木场的脸色稍稍有些好转。

-> scene_after_school_blocker_part2


## Scene: scene_after_school_answer1_2
- BG: outdoor_corridor
- BGM: friendship

[手嶋|sprite=teshima,pose=bitter] 确实很担心……
[手嶋|sprite=teshima,pose=bitter] 我以为你被人拐跑了，毕竟你这么容易相信别人……
[苇木场|sprite=ashikiba,pose=bitter] 也没有啦……
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 那么大一个人突然好几天没来学校——
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 打你家电话也打不通——
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 去问老师，才知道你搬家了……
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 当时也没有手机——
[苇木场|sprite=ashikiba,pose=surprise] 啊，我今天又忘了带手机！
[手嶋|sprite=teshima,pose=surprise] 那怎么办，你记得家里电话吗？
[苇木场|sprite=ashikiba,pose=bitter] 不记得了呜呜呜——
[手嶋|sprite=teshima,pose=bitter] 待会儿我联系泉田吧。
[苇木场|sprite=ashikiba,pose=bitter] 拜托你了小纯！
[指令] sprites: clear
[旁白] 苇木场像小时候一样泪眼汪汪地看着我，幸好他没有像小时候一样飞扑过来……

-> scene_after_school_blocker_part2


## Scene: scene_after_school_answer1_3
- BG: outdoor_corridor
- BGM: happy

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=serious] 是啊，大家都好担心的！
[指令] sprites: clear
[旁白] 苇木场的头垂得更低了——
[手嶋|sprites=teshima:serious@0.7,ashikiba:bitter@0.3] 都以为你是外星人，是不是终于受不了地球回母星了之类的！
[苇木场|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] 啊！怎么会？
[手嶋|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] 平时你就很电波系，还总说一些别人听不懂的话——
[手嶋|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] 长得又比一般人高——
[手嶋|sprites=teshima:normal@0.7,ashikiba:surprise@0.3] 头上的发旋像外星电波接收装置——
[手嶋|sprites=teshima:normal@0.7,ashikiba:normal@0.3] 脸上的痣是变身开关什么的——
[苇木场|sprites=teshima:smile@0.7,ashikiba:normal@0.3] 大家都后悔怎么没有早点按按看！
[指令] sprites: clear
[旁白] 苇木场终于一扫阴霾，开心地笑了出来——
[苇木场|sprite=ashikiba,pose=smile] 哈哈哈~听起来好酷哦~
[手嶋|sprite=teshima,pose=smile] 就是说啊！
[苇木场|sprite=ashikiba,pose=normal] 大家都好大惊小怪，这就是普通的痣而已。
[指令] sprites: clear
[旁白] 说着苇木场摸了摸他右脸上的心形痣——
[苇木场|sprite=ashikiba,pose=normal] 小纯要不要按按看？
[指令] sprites: clear
[旁白|sprite=ashikiba,pose=normal] 说着苇木场闭上眼睛把脸凑近我——
[旁白|sprite=teshima,pose=serious] 我一脸紧张地按了下去——
[手嶋|sprite=teshima,pose=serious] 有没有什么特别的感觉？
[苇木场|sprite=ashikiba,pose=smile] 好痒哦~
[手嶋|sprite=teshima,pose=smile] 哈哈哈！
[苇木场|sprite=ashikiba,pose=normal] 还有——很开心~
[指令] sprites: clear
[旁白] 苇木场露出了暖呼呼的笑容~

[指令] BGM: fade happy 600 -> play friendship
-> scene_after_school_blocker_part2


## Scene: scene_after_school_blocker_part2
- BG: outdoor_corridor
- BGM: friendship

[手嶋|sprite=teshima,pose=normal] 不过我知道你在箱学也是去年的事了。
[手嶋|sprites=teshima:normal@0.7,ashikiba:normal@0.3] 没想到你还成了正选~
[手嶋|sprites=teshima:smile@0.7,ashikiba:normal@0.3] 你果然很有才能！
[苇木场|sprites=teshima:normal@0.7,ashikiba:smile@0.3] 嘿嘿嘿都是多亏了小纯~
[手嶋|sprite=teshima,pose=normal] 箱学那种传统私立自行车名门学校，你一定吃了很多苦吧！
[苇木场|sprite=ashikiba,pose=normal] 嗯——
[手嶋|sprite=teshima,pose=normal] 让我猜猜哦，对你来说最难的应该是——

[选择]
- 箱学的校规 -> scene_after_school_answer2_1
- 非人的训练 -> scene_after_school_answer2_2 | set: {"ashikiba": "+1"}
- 宿舍的床 -> scene_after_school_answer2_3


## Scene: scene_after_school_answer2_1
- BG: outdoor_corridor
- BGM: friendship

[手嶋|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] 箱学作为传统的私立名门学校，肯定有很多规矩吧——
[手嶋|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] 比如不能留长发什么的？
[手嶋|sprites=teshima:smile@0.7,ashikiba:normal@0.3] 我去了是不是要被剃短发？
[苇木场|sprites=teshima:bitter@0.7,ashikiba:smile@0.3] 小纯这个长度还好啦~

-> scene_after_school_blocker_part3


## Scene: scene_after_school_answer2_2
- BG: outdoor_corridor
- BGM: friendship

[指令] SFX: correct_answer
[手嶋|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] 箱学的训练真不是一般人能吃得消的……
[手嶋|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] 之前不小心打听到箱学的日程，太可怕了——
[手嶋|sprites=teshima:surprise@0.7,ashikiba:normal@0.3] 自行车训练量是总北的3倍不说——
[手嶋|sprites=teshima:surprise@0.7,ashikiba:normal@0.3] 居然还有很多体能和增肌练习！
[苇木场|sprites=teshima:normal@0.7,ashikiba:smile@0.3] 那些不用全员参加啦~
[手嶋|sprite=teshima,pose=normal] 所以阿苇你现在是不是很有肌肉？
[手嶋|sprite=teshima,pose=smile] 让我看看！
[苇木场|sprite=ashikiba,pose=smile] 哈哈哈好痒——
[旁白] 

@if ashikiba == 2 -> scene_after_school_blocker_special
@if ashikiba < 2 -> scene_after_school_blocker_part3

## Scene: scene_after_school_answer2_3
- BG: outdoor_corridor
- BGM: happy

[手嶋|sprites=teshima:normal@0.7,ashikiba:normal@0.3] 箱学好像很多都是寄宿吧……
[手嶋|sprites=teshima:smile@0.7,ashikiba:normal@0.3] 那个床你睡得下吗？
[苇木场|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 你怎么知道的？我睡觉的时候半个脚都在外面……
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 毕竟你很高啊！
[苇木场|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 最近终于可以回家睡了……
[手嶋|sprites=teshima:smile@0.7,ashikiba:bitter@0.3] 那太好了！睡得好真的很重要……
[指令] sprites: clear
[旁白] 我拍了拍苇木场的肩膀——

[指令] BGM: fade happy 600 -> play friendship
-> scene_after_school_blocker_part3

## Scene: scene_after_school_blocker_special
- BG: outdoor_corridor
- BGM: blocker_special_warm

[苇木场|sprite=ashikiba,pose=smile] 和小纯聊天真的很开心~
[手嶋|sprite=teshima,pose=smile] 我也是~见到阿苇就好像回到了小时候，你真的是一点都没变~
[苇木场|sprite=ashikiba,pose=normal] 小纯改变好多，变得比以前更强了——
[手嶋|sprite=teshima,pose=smile] 有吗？哈哈哈~
[苇木场|sprite=ashikiba,pose=bitter] 而且，其实我有改变啦……
[手嶋|sprite=teshima,pose=normal] 我是说你的内在一直没变，还是这么爱夸人~
[苇木场|sprite=ashikiba,pose=serious] 我只是实话实说，小纯是最厉害的！
[手嶋|sprite=teshima,pose=smile] 借你吉言~
[苇木场|sprite=ashikiba,pose=bitter] 我的内在也不是完全没变，只是小纯比较迟钝而已……
[手嶋|sprite=teshima,pose=surprise] 我哪有？
[苇木场|sprite=ashikiba,pose=bitter] 还有小纯现在好受欢迎……
[手嶋|sprite=teshima,pose=surprise] 什么？我怎么没发现？
[苇木场|sprite=ashikiba,pose=serious] 要是再不和小纯和好，小纯就要被别人抢走了！
[手嶋|sprite=teshima,pose=normal] 这个不会啦你放心~
[苇木场|sprite=ashikiba,pose=serious] 这就是小纯你迟钝的表现——
[苇木场|sprite=ashikiba,pose=serious] 小纯你放心，我一定会保护好小纯的！
[手嶋|sprite=teshima,pose=smile] 那就拜托你了~
[苇木场|sprite=ashikiba,pose=smile] 乐意效劳~
[指令] sprites: clear
[旁白] 阿苇还是老样子，让人搞不懂他在想什么……
[旁白] 可能是他友情的表现吧~

-> scene_after_school_blocker_part3

## Scene: scene_after_school_blocker_part3
- BG: outdoor_corridor
- BGM: friendship


[苇木场|sprite=ashikiba,pose=normal] 以后我们不是敌人了——
[苇木场|sprite=ashikiba,pose=smile] 我可以常来找小纯玩对吧？
[手嶋|sprite=teshima,pose=surprise] 你不用上补习班的吗？
[苇木场|sprite=ashikiba,pose=normal] 可以上千叶的补习班！
[苇木场|sprite=ashikiba,pose=serious] 得和小纯考同一所大学才行！
[手嶋|sprite=teshima,pose=normal] 总之看到你这么有干劲我就放心了~
[手嶋|sprite=teshima,pose=smile] 要是还能上同一所大学就太好了~
[指令] sprites: clear
[旁白] 看着苇木场很有精神的样子，我也笑了出来。
[手嶋|sprite=teshima,pose=surprise] 对了，我好像今天要值日的！
[苇木场|sprite=ashikiba,pose=normal] 小纯你先去吧，我去自行车部等你？
[手嶋|sprite=teshima,pose=normal] 你一个人能行吗？
[苇木场|sprite=ashikiba,pose=smile] 嗯！
[旁白|sprite=ashikiba,pose=smile] 看到苇木场点了点头——
[指令] sprites: clear
[旁白] 我边想着待会儿怎么给平田赔罪，一边跑了起来……


[指令] BGM: fade friendship 5000
-> scene_hill_climb


## Scene: scene_hill_climb
- BG: school_classroom
- BGM: after_school

[平田|sprite=hirata,pose=smile] 呼——终于打扫完了！
[手嶋|sprite=teshima,pose=smile] 幸好今天不是周五，没花太多时间。
[指令] sprites: clear
[旁白] 我和平田把打扫用具归还到储物间。
[手嶋|sprite=teshima,pose=normal] 接下来你准备回家吗？
[平田|sprite=hirata,pose=normal] 待会儿要去商店街逛逛——
[手嶋|sprite=teshima,pose=bitter] 怪不得这么急~
[平田|sprite=hirata,pose=smile] 你待会儿还去练车吗？

[选择]
- 去趟部室骑车 -> scene_hill_climb_blocker
- 去教职员室交志愿表 -> scene_hill_climb_normal


## Scene: scene_hill_climb_normal
- BG: school_entrance
- BGM: blocker_special_warm

[指令] sprites: clear
[手嶋|sprite=teshima,pose=normal] 我去教职员室——
[手嶋|sprite=teshima,pose=bitter] 不是要面谈了吗？我还没交志愿表……
[平田|sprite=hirata,pose=normal] 哦，你还没确定学校吗？
[手嶋|sprite=teshima,pose=bitter] 哪有这么容易确定的？
[平田|sprite=hirata,pose=smile] 就去有自行车部的学校呗~
[手嶋|sprite=teshima,pose=normal] 哈哈，说的也是~
[平田|sprite=hirata,pose=smile] 不过好好烦恼一场也挺好的~
[手嶋|sprite=teshima,pose=bitter] 说的好像你内定了一样？
[平田|sprite=hirata,pose=smile] 我是想说——这就是青春啊~
[平田|sprite=hirata,pose=normal] 而且你不是更应该内定吗？
[手嶋|sprite=teshima,pose=bitter] 我这不是没拿到名次吗哈哈哈！
[平田|sprite=hirata,pose=smile] 这样比较像你，也挺好的~
[平田|sprite=hirata,pose=normal] 你要是一下子就变成超成功人士、超级精英，我还不敢和你这么聊天呢！
[平田|sprite=hirata,pose=smile] 还是现在的你比较让人安心~
[手嶋|sprite=teshima,pose=bitter] 还得感谢我的平凡是吗？
[平田|sprite=hirata,pose=normal] 总之你继续加油骑车吧！
[平田|sprite=hirata,pose=smile] 自行车笨蛋~
[指令] sprites: clear
[旁白] 我望着她远去的背影，心里忽然空落落的——
[旁白|sprite=teshima,pose=bitter] 和平田这么轻松的拌嘴时光也不多了……
[旁白|sprite=teshima,pose=bitter] ……大家都要去各自的未来——
[指令] sprites: clear
[旁白] 我呢？
[旁白|sprite=teshima,pose=normal] 大概只有“继续骑自行车”，是我能确信不变的……
[旁白|sprite=teshima,pose=bitter] 也许答案，也只有在继续骑下去的路上才能找到——
[旁白|sprite=teshima,pose=bitter] 而在那条路上，也一定会再遇见某些重要的人——
[指令] sprites: clear
[旁白] 这使我从未定的未来中，稍稍感到一丝安心。
[手嶋|sprite=teshima,pose=bitter] 啊——突然超想骑车的！
[指令] sprites: clear
[旁白] 去趟部室吧——

[指令] BGM: fade blocker_special_warm 5000
-> scene_birthday_party


## Scene: scene_hill_climb_blocker
- BG: school_classroom
- BGM: after_school

[手嶋|sprite=teshima,pose=normal] 嗯，我去部室骑车，这个点还能骑个来回——
[平田|sprite=hirata,pose=normal] 你好好加油吧！
[平田|sprite=hirata,pose=smile] 我先回去了~

-> scene_hill_climb_blocker_part1

## Scene: scene_hill_climb_blocker_part1
- BG: outdoor_corridor
- BGM: after_school

[指令] sprites: clear
[旁白] 告别平田，我连忙往自行车部走去。
[旁白] 一想到接下来还有好多麻烦的事情要烦恼……
[旁白] 就想啥也不考虑，放空脑子尽情地骑车——
[手嶋|sprite=teshima,pose=serious] 啊——真的超想骑车！
[指令] sprites: clear
[指令] SFX: kasakasa
[？？？] 哈哈，瞧瞧这是哪里来的自行车笨蛋？

[指令] BGM: fade after_school 600 -> play lunch_happy

[手嶋|sprite=teshima,pose=blush] 啊？真波——！！！
[真波|sprite=manami,pose=smile] 嘿嘿嘿~是我~
[手嶋|sprite=teshima,pose=blush] 你怎么在这里？
[手嶋|sprite=teshima,pose=serious] 还有你怎么管前辈叫笨蛋呢！
[真波|sprite=manami,pose=normal] 这些都不重要，刚才我听到小嶋前辈想骑车对吧？
[手嶋|sprite=teshima,pose=serious] 我不是小嶋——
[真波|sprite=manami,pose=smile] 来吧来吧手鞠前辈，我们去骑两圈~
[手嶋|sprite=teshima,pose=blush] 是手嶋啦白痴，还有和你骑的话我晚上还能学习吗！
[真波|sprite=manami,pose=surprise] 本来你今天也没空学习的吧？
[手嶋|sprite=teshima,pose=surprise] ？
[真波|sprite=manami,pose=normal] 总之来吧来吧，车子我都给你拉来了~
[指令] sprites: clear
[旁白] 真波往不远处一指——
[旁白] 只见草丛里果然停着我的佳能戴尔，还有一辆是他的白色Look……
[手嶋|sprite=teshima,pose=blush] 你怎么知道我车在哪里的？
[旁白|sprite=manami,pose=normal] 真波跨上自己的车，一个劲儿地催我。
[真波|sprite=manami,pose=smile] 来嘛来嘛~我们出发~Let's go~
[旁白|sprite=teshima,pose=blush] 这小子是真的很缠人啊！

[指令] sprites: clear
[旁白] 我只好也跨上车，跟着他一起往后门坡道驶去——

[指令] BGM: fade lunch_happy 5000
-> scene_hill_climb_blocker_part1_2


## Scene: scene_hill_climb_blocker_part1_2
- BG: outdoor_climb
- BGM: climb

[指令] SFX: road_bike
[真波|sprite=manami,pose=normal] 很早就听坂道君说，总北后山这个坡道很厉害了!
[手嶋|sprite=teshima,pose=normal] 是啊，刚入学的时候根本就骑不上来……
[真波|sprite=manami,pose=normal] 手嶋前辈现在最快是几分钟？
[手嶋|sprite=teshima,pose=normal] 7分钟吧？
[手嶋|sprite=teshima,pose=bitter] 比小野田他们慢就是了……
[真波|sprite=manami,pose=normal] 不愧是坂道君！
[真波|sprite=manami,pose=smile] 待会儿我也来挑战一下！

[指令] sprites: clear
[旁白] 我看到他那神采奕奕的样子，不由得打了个寒颤——
[旁白|sprite=teshima,pose=bitter] 晚上是真的不用学习了……
[真波|sprite=manami,pose=normal] 手嶋前辈就算是勉强自己，也会一直紧咬着我对吧！
[真波|sprite=manami,pose=smile] 说不定能一起到6分钟内~
[旁白|sprite=manami,pose=smile] 说到这里真波满脸笑容，挑衅地望着我——

[指令] sprites: clear
[旁白] 我只能无奈地叹了口气。
[手嶋|sprite=teshima,pose=bitter] 是是是，毕竟勉强自己是我的必杀技——
[真波|sprite=manami,pose=smile] 哈哈哈最喜欢手嶋前辈——这个必杀技了~
[手嶋|sprite=teshima,pose=normal] 你自己不是也有必杀技吗？
[手嶋|sprite=teshima,pose=smile] 那个像长出翅膀飞起来一样的加速……
[真波|sprite=manami,pose=smile] 嘿嘿，爬坡的时候不知不觉就那样了~
[真波|sprite=manami,pose=surprise] 不过手嶋前辈不是也有翅膀吗？
[真波|sprite=manami,pose=smile] 因为是山里的鸟嘛~
[手嶋|sprite=teshima,pose=bitter] 我没有啦！

[指令] sprites: clear
[旁白] 我们两一路拌嘴一路下坡，感受着秋风我们的耳边吹过。
[真波|sprite=manami,pose=bitter] 目前为止还算是热身而已，真想快点爬坡~
[旁白|sprite=manami,pose=bitter] 我看着他躁动不安的样子，忍不住笑了起来。
[手嶋|sprite=teshima,pose=normal] 之前一直想着高中联赛，现在总算是没有心理负担了！
[手嶋|sprite=teshima,pose=smile] 能和你轻松地比一场也挺好的~

[指令] sprites: clear
[旁白] 真波听闻表示强烈不满！
[真波|sprite=manami,pose=bitter] 手嶋前辈你故意的，我可还有一年呢！
[旁白|sprite=manami,pose=bitter] 我一乐，总算让我逮到机会了，看来这小子也有搞不定的事情啊！
[手嶋|sprite=teshima,pose=smile] 哈哈哈，听说你当队长了！
[真波|sprite=manami,pose=bitter] 是啊，每天都被悠人阿桥还有高田城追着，搞得我偷溜出去骑车的难度变大好多……
[手嶋|sprite=teshima,pose=bitter] 你这不也照常偷溜吗！
[旁白|sprite=manami,pose=bitter] 真波感慨着当队长真的好难，我也赞同地附和着。
[真波|sprite=manami,pose=normal] 手嶋前辈，你觉得当队长最难的是什么？

[选择]
- 带领大家获得胜利 -> scene_hill_climb_answer1_1
- 成为队里最厉害的人 -> scene_hill_climb_answer1_2
- 每天写部志 -> scene_hill_climb_answer1_3 | set: {"manami": "+1"}


## Scene: scene_hill_climb_answer1_1
- BG: outdoor_climb
- BGM: climb

[手嶋|sprite=teshima,pose=bitter] 可能是背负着带领大家获得胜利的心理负担吧……
[真波|sprite=manami,pose=bitter] 是啊，我不太擅长呢……

[旁白|sprite=manami,pose=bitter] 难得见到真波垂头丧气的样子。
[手嶋|sprite=teshima,pose=normal] 你也不要想太多！
[旁白|sprite=teshima,pose=normal] 我连忙安慰他。
[手嶋|sprite=teshima,pose=normal] 箱学不一向都是每个人都很强的吗。
[手嶋|sprite=teshima,pose=smile] 只要交给他们自己，每个人都发挥出实力就行了！
[真波|sprite=manami,pose=smile] 说的也是~
[指令] sprites: clear
[旁白] 真波稍稍有些宽慰……

-> scene_hill_climb_blocker_part2


## Scene: scene_hill_climb_answer1_2
- BG: outdoor_climb
- BGM: climb

[手嶋|sprite=teshima,pose=bitter] 大家可能都觉得，队长必须是全队最厉害的人吧？

[指令] sprites: clear
[旁白] 我当时就受到各种人的挑战……
[旁白] 因为我很弱嘛……
[旁白] 说着我有点心虚了，当时都做好让古贺当队长的方案了……
[旁白|sprite=manami,pose=normal] 真波满脸得意地看着我——
[真波|sprite=manami,pose=normal] 那我缺勤率很厉害算吗？
[手嶋|sprite=teshima,pose=smile] 哈哈哈~某种意义上你还升上了三年级，就已经是最厉害了！
[真波|sprite=manami,pose=smile] 嘿嘿嘿~
[手嶋|sprite=teshima,pose=smile] 不是在夸你啦！
[旁白|sprite=teshima,pose=normal] 真波看起来很开心——

-> scene_hill_climb_blocker_part2


## Scene: scene_hill_climb_answer1_3
- BG: outdoor_climb
- BGM: climb

[指令] SFX: correct_answer

[手嶋|sprite=teshima,pose=normal] 对你来说的话…… 
[手嶋|sprite=teshima,pose=smile] 大概是每天得写部志？
[真波|sprite=manami,pose=bitter] 呜哇——那个真的，那个真的太难了手嶋前辈……

[指令] sprites: clear
[旁白] 真波泪眼汪汪地看着我，看来说戳中他的痛处了……
[真波|sprite=manami,pose=bitter] 不知道是谁规定的部志必须是队长写……
[真波|sprite=manami,pose=bitter] 我现在经常要被抓去抄部志……
[手嶋|sprite=teshima,pose=smile] 哈哈哈哈哈哈——
[真波|sprite=manami,pose=bitter] 高田城他们就不能变通一下吗，替我写一下啊！
[手嶋|sprite=teshima,pose=normal] 我当时也是经常留下来写到好晚~
[手嶋|sprite=teshima,pose=smile] 真怀念啊~~~~~
[真波|sprite=manami,pose=normal] 以后不会写能来问前辈吗？

[指令] sprites: clear
[旁白] 真波眨巴着大眼睛乖巧地看着我——
[手嶋|sprite=teshima,pose=smile] 虽然应该没有什么可以参考的，不过你随意啦~
[真波|sprite=manami,pose=smile] 太好啦~
[旁白|sprite=manami,pose=smile] 真波看起来非常开心——

-> scene_hill_climb_blocker_part2


## Scene: scene_hill_climb_blocker_part2
- BG: outdoor_climb
- BGM: climb

[指令] sprites: clear
[旁白] 看来真波对当队长的难也是深有感触
[旁白] 而且——
[手嶋|sprite=teshima,pose=bitter] 当箱学的队长就更难了——
[真波|sprite=manami,pose=surprise] 为什么？

[选择]
- 你记不住人名 -> scene_hill_climb_answer2_1 | set: {"manami": "+1"}
- 箱学强者如云 -> scene_hill_climb_answer2_2
- 背负着失利两年的重担 -> scene_hill_climb_answer2_3

## Scene: scene_hill_climb_answer2_1
- BG: outdoor_climb
- BGM: climb

[指令] SFX: correct_answer

[手嶋|sprite=teshima,pose=bitter] 因为你记不住人名——
[真波|sprite=manami,pose=bitter] 呜哇！你怎么会知道——

[指令] sprites: clear
[旁白] 我感觉如果不是骑着车，真波可能就扑过来把鼻涕眼泪挂我身上了……
[手嶋|sprites=teshima:bitter@0.7,manami:bitter@0.3] 毕竟……你连我的名字都记不住……
[手嶋|sprites=teshima:smile@0.7,manami:bitter@0.3] 箱学那么大一个自行车部，每年光新生少说得有二三十个吧？
[真波|sprites=teshima:normal@0.7,manami:bitter@0.3] 胡说，我怎么会记不住手嶋前辈的名字！

[指令] sprites: clear
[旁白] 真波强烈抗议——
[手嶋|sprite=teshima,pose=smile] 那我的名字叫什么？
[真波|sprite=manami,pose=bitter] 呃……这个……那个………………
[真波|sprite=manami,pose=normal] 纯酱？
[手嶋|sprite=teshima,pose=smile] 错了——
[真波|sprite=manami,pose=surprise] 诶——苇木场前辈不是都这么叫吗？
[手嶋|sprite=teshima,pose=blush] 那是只有苇木场还这么叫啦，都是小时候的昵称了……

[指令] sprites: clear
[旁白] 也只有苇木场还像小时候一样叫我……
[手嶋|sprite=teshima,pose=bitter] 总之对你来说难度真的很大——
[真波|sprite=manami,pose=serious] 太过分了！刚才是开玩笑的~
[真波|sprite=manami,pose=normal] 纯太（重音）前辈的名字我怎么会记不住呢嘿嘿~
[手嶋|sprite=teshima,pose=blush] 所以你小子一直是在逗我玩是吗？
[真波|sprite=manami,pose=smile] 你猜？

[指令] sprites: clear
[旁白] 真波得意洋洋地看着我——
[旁白]

@if manami == 2 -> scene_hill_climb_blocker_special
@if manami < 2 -> scene_hill_climb_blocker_part3


## Scene: scene_hill_climb_answer2_2
- BG: outdoor_climb
- BGM: climb

[手嶋|sprites=teshima:normal@0.7,manami:normal@0.3] 因为箱学每个人都太强了，很难打配合吧？
[手嶋|sprites=teshima:normal@0.7,manami:normal@0.3] 而且——
[手嶋|sprites=teshima:bitter@0.7,manami:normal@0.3] 最难配合的就是你本人啦！
[真波|sprite=manami,pose=bitter] 好过分，我超能配合的！
[真波|sprite=manami,pose=bitter] 基本上他们让我爬坡我就爬的！
[手嶋|sprite=teshima,pose=bitter] 也就让爬坡配合吧……
[真波|sprite=manami,pose=smile] 嘿嘿嘿~

-> scene_hill_climb_blocker_part3

## Scene: scene_hill_climb_answer2_3
- BG: outdoor_climb
- BGM: climb

[旁白|sprite=teshima,pose=bitter] 因为输了两次压力很大……

[指令] sprites: clear
[旁白] 想了想，我还是没说出口。
[旁白|sprite=manami,pose=normal] 虽然这是事实，但是对眼前这个其实有点敏感的男孩来说还是太沉重了。
[旁白|sprite=teshima,pose=bitter] 换做是我，早就已经放弃了吧……
[旁白|sprite=teshima,pose=bitter] 这也是他比我强太多的原因吧？

[指令] sprites: clear
[旁白] 总之希望不管是什么结果，他都能跨过去……
[真波|sprite=manami,pose=normal] ？
[手嶋|sprite=teshima,pose=bitter] 没什么，前面我们就该折返了——
[真波|sprite=manami,pose=smile] 好嘞——

-> scene_hill_climb_blocker_part3


## Scene: scene_hill_climb_blocker_special
- BG: outdoor_climb
- BGM: blocker_special_warm

[指令] SFX: road_bike
[旁白] 我和真波朝着后山的坡道一路前进——
[真波|sprite=manami,pose=serious] 手嶋前辈大学也会继续自行车对吧？
[旁白|sprite=manami,pose=serious] 真波侧头看我，风吹乱了他的头发——
[旁白|sprite=teshima,pose=bitter] 透过头发的间隙我看到了真波的笑意，就好像当时高中联赛一样——
[旁白|sprite=teshima,pose=serious] 我按耐不住，一咬牙骑到了真波的前头！
[手嶋|sprite=teshima,pose=normal] 是啊，虽然鄙人不才，但是还不想这么快退役——
[手嶋|sprite=teshima,pose=smile] 而且复习之余骑车，还可以锻炼身体嘛~
[指令] sprites: clear
[旁白] 我回头看到真波颇为认同地点点头，并且随意一个小加速就骑到了我身边……
[真波|sprite=manami,pose=serious] 这么好，那到时候我也可以找前辈锻炼身体吗？
[旁白|sprite=manami,pose=smile] 真波一边说一边故意把车往我这边靠过来——
[手嶋|sprite=teshima,pose=blush] 喂——你别靠过来啊！
[旁白|sprite=manami,pose=serious] 真波一脸挑衅地看着我，气势上我可没打算输给他……
[手嶋|sprite=teshima,pose=serious] 你不要小看备考生，明年你就知道了！
[真波|sprite=manami,pose=serious] 前辈尽管先一步，我也会很快追上你的~
[旁白|sprite=teshima,pose=bitter] 一提到骑车就两眼放光，说谁是自行车笨蛋来着！
[真波|sprite=manami,pose=serious] 就说手嶋前辈是自行车笨蛋——
[真波|sprite=manami,pose=serious] 一说骑车就笑个不停了
[旁白|sprite=teshima,pose=blush] 啊？怎么还被另一个笨蛋先声夺人了？
[手嶋|sprite=teshima,pose=serious] 我有笑嘛？
[真波|sprite=manami,pose=serious] 有的有的~
[手嶋|sprite=teshima,pose=serious] 你不也笑个不停嘛！
[真波|sprite=manami,pose=serious] 我也不只是因为骑车啦~
[手嶋|sprite=teshima,pose=serious] 那是为什么？
[真波|sprite=manami,pose=serious] 因为今天很开心啊！
[真波|sprite=manami,pose=smile] 可以和手嶋前辈一起挑战爬坡记录~
[旁白|sprite=teshima,pose=bitter] 呃……我被真波看的有点发毛……
[旁白|sprite=teshima,pose=bitter] 待会儿不会被拉爆到站不起来吧……
[真波|sprite=manami,pose=serious] 嘿嘿，那就请前辈多多指教啦——
[真波|sprite=manami,pose=smile] 我上咯~
[旁白|sprite=manami,pose=smile] 嗖的一下——真波瞬间就冲上了总北的后山坡！
[指令] sprites: clear
[旁白] 我赶忙猛踩踏板也跟了上去——

[指令] BGM: fade blocker_special_warm 600 -> play climb
-> scene_hill_climb_blocker_part3


## Scene: scene_hill_climb_blocker_part3
- BG: school_gate
- BGM: climb

[旁白|sprite=manami,pose=normal] 真波和我来了一场激烈的对决
[旁白|sprite=teshima,pose=normal] 至少对我来说是的，因为——
[旁白|sprite=teshima,pose=smile] 我跑进6分钟了！
[旁白|sprite=teshima,pose=bitter] 虽然托了他的福，这让我有点不甘心……
[旁白|sprite=manami,pose=smile] 不过看着真波开心的样子，觉得这样好像也不错~
[手嶋|sprite=teshima,pose=bitter] 那个……要再来一圈吗？
[旁白|sprite=teshima,pose=bitter] 反正晚上也不打算学习了——
[真波|sprite=manami,pose=bitter] 虽然手嶋前辈的邀请确实很有吸引力，但是我还有更重要的事情——
[旁白|sprite=manami,pose=bitter] 真波一脸苦笑。
[旁白|sprite=teshima,pose=blush] 居然被这个爬坡狂拒绝了，我很震惊！
[手嶋|sprite=teshima,pose=surprise] 对哦，你今天不用上学的吗？怎么会在千叶？
[真波|sprite=manami,pose=normal] 刚才我跟着苇木场前辈过来的，他吵着要来找你——
[真波|sprite=manami,pose=smile] 说今天是你的生日——
[手嶋|sprite=teshima,pose=surprise] 啊！
[真波|sprite=manami,pose=normal] 所以手嶋前辈我们快去自行车部吧，大家应该都在等你了~
[指令] sprites: clear
[旁白] 真波连拖带拽地拉着我就往自行车部走去——

-> scene_birthday_party


## Scene: scene_birthday_party
- BG: party_room
- BGM: party

[指令] SFX: party_cracker
[所有人] 生日快乐手嶋前辈——————
[手嶋|sprite=teshima,pose=surprise] 大家居然在偷偷准备我的生日趴！
[小野田|sprite=onoda,pose=normal] 嘿嘿，一直以来受到手嶋前辈的照顾~
[手嶋|sprite=teshima,pose=moved] 谢谢大家，我好感动~
[苇木场|sprite=ashikiba,pose=smile] 小纯生日快乐！
[真波|sprite=manami,pose=smile] 嘿嘿嘿，我也一起来了~
[手嶋|sprite=teshima,pose=surprise] 不止是总北，怎么箱学的人都来了？
[青八木|sprite=aoyagi,pose=normal] 光我们几个怕挡不住纯太——
[今泉|sprite=imaizumi,pose=smile] 被你发现的话，就没有惊喜了。
[古贺|sprite=koga,pose=normal] 其实我一个人就够了（眼镜反光）——
[旁白|sprite=teshima,pose=bitter] 所以才各种阻止我来部室是吗？
[鸣子|sprite=naruko,pose=normal] 卷发前辈今天就尽情的吃尽情的闹吧！
[镝木|sprite=kaburagi,pose=normal] 好多好吃的……呃怎么这么多章鱼烧？

[指令] sprites: clear
[旁白] 大家吵吵闹闹乱成一团，这才是总北的一景啊~


-> scene_birthday_party_part1

## Scene: scene_birthday_party_part1
- BG: party_room
- BGM: party

[小野田|sprite=onoda,pose=normal] 高中联赛以来没这么热闹过了~
[手嶋|sprite=teshima,pose=moved] 是啊，真是太开心了~
[小野田|sprite=onoda,pose=smile] 嘿嘿~手嶋前辈高兴，我们就成功了！
[镝木|sprite=kaburagi,pose=normal] 久等了——接下来还有特殊环节！
[鸣子|sprite=naruko,pose=normal] 噔噔噔！真心话大冒险——
[小野田|sprite=onoda,pose=normal] 抽中国王的人，可以选一个人玩真心话或者大冒险~

[指令] sprites: clear
[旁白] 鸣子拿了一把竹签在大家身边游走一番，最后来到我身边——

[指令] sprites: clear
[鸣子|sprite=naruko,pose=normal] 来来来卷发前辈，抽一支吧~

[指令] sprites: clear
[旁白] 我选了一支竹签——
[旁白|sprite=teshima,pose=surprise] 竹签尾部是红色的……
[鸣子|sprite=naruko,pose=normal] 卷发前辈是国王了！
[小野田|sprite=onoda,pose=normal] 恭喜手嶋前辈~
[镝木|sprite=kaburagi,pose=normal] 前辈快选一个号~
[旁白|sprite=teshima,pose=bitter] 你们也太刻意了吧？
[旁白|sprite=teshima,pose=bitter] 今天大概是要感动得痛哭流涕了吧……

[指令] sprites: clear
[旁白] 我只好硬着头皮上了——

[选择]
- 选4号 -> scene_birthday_party_aoyagi | enabledIf: { "aoyagi": "== 2" }
- 选2号 -> scene_birthday_party_imaizumi | enabledIf: { "imaizumi": "== 2" }
- 选7号 -> scene_birthday_party_koga | enabledIf: { "koga": "== 2" }
- 选11号 -> scene_birthday_party_ashikiba | enabledIf: { "ashikiba": "== 2" }
- 选13号 -> scene_birthday_party_manami | enabledIf: { "manami": "== 2" }
- 选5号 -> scene_birthday_party_teshima

## Scene: scene_birthday_party_aoyagi
- BG: party_room
- BGM: blocker_special_warm

[指令] sprites: clear
[旁白] 纯太——
[旁白|sprite=aoyagi,pose=blush] 青八木涨红了脸站了起来，看来是抽中他了——
[青八木|sprite=aoyagi,pose=blush] 纯太是我最重要的人——
[鸣子|sprite=naruko,pose=normal] 这算是选了真心话吧？
[青八木|sprite=aoyagi,pose=bitter] 那时候，我不太会表达，总觉得自己帮不上什么忙。
[青八木|sprite=aoyagi,pose=bitter] 就算我沉默寡言，纯太也从来没嫌弃过我。
[青八木|sprite=aoyagi,pose=normal] 纯太总是拉着我一起前进——
[青八木|sprite=aoyagi,pose=smile] 我一直都在想，能和你组成T2，是我这辈子最幸运的事！
[手嶋|sprite=teshima,pose=moved] 青八木……
[青八木|sprite=aoyagi,pose=normal] 所以不管是现在还是将来，我都希望和纯太一直在一起！
[手嶋|sprite=teshima,pose=moved] 青八木，你也这么想我好高兴~

-> scene_birthday_party_aoyagi_cg 

## Scene: scene_birthday_party_aoyagi_cg
- BG: birthday_party_aoyagi_cg
- BGM: blocker_special_warm

[指令] sprites: clear
[旁白] 青八木握住了我的手——
[手嶋|sprite=teshima,pose=smile] T2永远不会解散!
[旁白|sprite=aoyagi,pose=smile] 青八木绚丽一笑——
[青八木|sprite=aoyagi,pose=smile] 是的，我们永远是T2——
[青八木|sprite=aoyagi,pose=normal] 虽然我想说的远不止这个——
[旁白|sprite=aoyagi,pose=normal] 他握着我手的力道更紧了，眼神比任何时候都坚定。
[手嶋|sprite=teshima,pose=normal] ？
[青八木|sprite=aoyagi,pose=smile] 但是纯太像现在这样就很好了~
[手嶋|sprite=teshima,pose=smile] 嘿嘿~

-> scene_birthday_party_part2


## Scene: scene_birthday_party_imaizumi
- BG: party_room
- BGM: blocker_special_warm


[指令] sprites: clear
[旁白] 今泉嗖地一下站了起来，然后就是站着……
[今泉|sprite=imaizumi,pose=blush] …… 
[鸣子|sprite=naruko,pose=normal] 说话啊！选真心话还是大冒险？
[手嶋|sprite=teshima,pose=normal] 怎么了，舍不得我毕业吗？
[今泉|sprite=imaizumi,pose=blush] ……
[手嶋|sprite=teshima,pose=serious] 那你是希望我赶快毕业吗？
[今泉|sprite=imaizumi,pose=blush] 不、不是！
[手嶋|sprite=teshima,pose=serious] 果然你这样的精英就是看不起我这种凡人@q~￥uzvx@！^uz。~￥@vx！……
[今泉|sprite=imaizumi,pose=blush] 手嶋前辈你不要再叫我精英了！
[手嶋|sprite=teshima,pose=smile] 哈哈哈哈哈——
[今泉|sprite=imaizumi,pose=blush] 我一直很尊敬手嶋前辈，手嶋前辈的努力我都看在眼里……
[手嶋|sprite=teshima,pose=moved] 今泉……原来你一直这么仰慕我这个凡人的吗，明明是个精英！

-> scene_birthday_party_imaizumi_cg


## Scene: scene_birthday_party_imaizumi_cg
- BG: birthday_party_imaizumi_cg
- BGM: blocker_special_warm

[旁白|sprite=teshima,pose=moved] 我感动地左手搂着今泉的头，右手伸过去揉他的头发——
[手嶋|sprite=teshima,pose=smile] 明年就靠你了，你可是我们队的王牌啊！
[今泉|sprite=imaizumi,pose=smile] 是，还有……
[手嶋|sprite=teshima,pose=smile] ？
[今泉|sprite=imaizumi,pose=blush] 放开我我不能呼吸了——
[手嶋|sprite=teshima,pose=serious] 哈？你是想说你很高是吗，所以你们这些精英就是这样@q~￥uzvx@！^uz。~￥@vx！……
[今泉|sprite=imaizumi,pose=blush] 都说不是啦！

-> scene_birthday_party_part2

## Scene: scene_birthday_party_koga
- BG: party_room
- BGM: blocker_special_warm

[古贺|sprite=koga,pose=normal] 对你没什么好说的。
[手嶋|sprite=teshima,pose=serious] 哈？
[古贺|sprite=koga,pose=normal] 终于可以不用再看到你这么弱的人，在我面前拼命挣扎往前骑的样子了!
[手嶋|sprite=teshima,pose=serious] 今天是我生日诶，至少讲两句好话吧！
[古贺|sprite=koga,pose=normal] 说真的，你明明很弱，却总是能跑到我眼前来。
[古贺|sprite=koga,pose=normal] 就算被落下多少次，你还是会咬牙追上来。
[古贺|sprite=koga,pose=normal] 所以真的是很碍眼——
[手嶋|sprite=teshima,pose=serious] 你这个鬼畜眼镜！
[古贺|sprite=koga,pose=normal] 哼，反正我又没打算当你的朋友。
[古贺|sprite=koga,pose=normal] 不过如果你因为太弱了就放弃骑车——
[旁白|sprite=koga,pose=normal] 明明是最毒舌的家伙，此刻却比谁都认真——

-> scene_birthday_party_koga_cg

## Scene: scene_birthday_party_koga_cg
- BG: birthday_party_koga_cg
- BGM: blocker_special_warm

[古贺|sprite=koga,pose=normal] 不管你在天涯海角，我都会追过去骂你一顿！
[旁白|sprite=koga,pose=smile] 古贺用他堪比橄榄球选手的厚实臂膀圈住我的脖子——
[旁白|sprite=teshima,pose=blush] 瞬间我就觉得空气稀薄了起来——
[旁白|sprite=teshima,pose=blush] 我只能用手肘猛锤他的肋骨反击！
[旁白|sprite=teshima,pose=blush] 虽然没有什么用……
[手嶋|sprite=teshima,pose=blush] 我肯定不会比你先放弃！
[古贺|sprite=koga,pose=normal] 死缠烂打可是你最大的优点~
[手嶋|sprite=teshima,pose=blush] 鬼畜眼镜！
[古贺|sprite=koga,pose=normal] 所以大学你也要给我好好骑车——
[古贺|sprite=koga,pose=smile] 别让我失望~
[手嶋|sprite=teshima,pose=blush] 气死我了我要努力骑车然后惊艳所有人！
[古贺|sprite=koga,pose=smile] 哈哈哈哈哈~

-> scene_birthday_party_part2

## Scene: scene_birthday_party_ashikiba
- BG: party_room
- BGM: blocker_special_warm

[苇木场|sprite=ashikiba,pose=bitter] 小纯对不起，这么多年都没给小纯庆生……
[手嶋|sprite=teshima,pose=normal] 接下来就都可以了啊！
[苇木场|sprite=ashikiba,pose=normal] 嗯嗯——
[苇木场|sprite=ashikiba,pose=smile] 接下来的每一年我都要陪小纯一起庆祝生日~
[手嶋|sprite=teshima,pose=smile] 后面的生日都有人庆祝了~这也太幸福了~
[手嶋|sprite=teshima,pose=normal] 还有，下个月就是你生日对吧~
[苇木场|sprite=ashikiba,pose=smile] 嗯嗯
[手嶋|sprite=teshima,pose=smile] 你有什么想要的礼物吗？

-> scene_birthday_party_ashikiba_cg

## Scene: scene_birthday_party_ashikiba_cg
- BG: birthday_party_ashikiba_cg
- BGM: blocker_special_warm

[苇木场|sprite=ashikiba,pose=normal] 小纯~
[手嶋|sprite=teshima,pose=blush] 你说？
[苇木场|sprite=ashikiba,pose=smile] 我想要的生日礼物是小纯~
[旁白|sprite=ashikiba,pose=smile] 苇木场像小时候一样把我抱了起来——
[手嶋|sprite=teshima,pose=blush] 好啦那天我全程陪你过，你先放我下来！
[苇木场|sprite=ashikiba,pose=bitter] 虽然我不是这个意思……
[苇木场|sprite=ashikiba,pose=smile] 但是太好了，又可以和小纯一起玩了！
[旁白|sprite=teshima,pose=normal] 好像回到了小时候~
[旁白|sprite=teshima,pose=blush] 不过以现在阿苇的体格，还像小时候一样动不动就扑过来的话……
[旁白|sprite=teshima,pose=blush] 下次还是及时躲开比较好！

-> scene_birthday_party_part2

## Scene: scene_birthday_party_manami
- BG: party_room
- BGM: blocker_special_warm

[真波|sprite=manami,pose=normal] 我选大冒险可以吗？
[鸣子|sprite=naruko,pose=normal] 终于来一个懂规则的了！
[真波|sprite=manami,pose=normal] 我知道怎么玩，我在电视上看过的~
[手嶋|sprite=teshima,pose=normal] 真波应该也没什么要说的吧？
[手嶋|sprite=teshima,pose=bitter] 毕竟我们就只有高中联赛的交集？

-> scene_birthday_party_manami_cg

## Scene: scene_birthday_party_manami_cg
- BG: birthday_party_manami_cg
- BGM: blocker_special_warm

[指令] sprites: clear
[旁白] 真波突然就凑过来，朝我脸颊上亲了一口——
[手嶋|sprite=teshima,pose=blush] 啊啊啊啊你在干嘛！
[真波|sprite=manami,pose=serious] 嗯？大冒险不是这么玩的吗？
[手嶋|sprite=teshima,pose=blush] 完全不是啊！
[真波|sprite=manami,pose=smile] 那我选真心话吧！
[手嶋|sprite=teshima,pose=blush] 意思一下就可以，不用这么认真……
[真波|sprite=manami,pose=serious] 我喜欢你，手嶋前辈！
[手嶋|sprite=teshima,pose=blush] 哈？你不用再玩了！我知道你不会玩了啦！
[真波|sprite=manami,pose=serious] 虽然只有那次比赛，但是你告诉了我什么是真正的自由——
[手嶋|sprite=teshima,pose=blush] 你确实是蛮自由的！
[真波|sprite=manami,pose=smile] 所以接下来是什么环节？可以带你偷跑了吗？
[手嶋|sprite=teshima,pose=blush] 你看的是什么电视剧啊！都说不是这样玩的了！

-> scene_birthday_party_part2

## Scene: scene_birthday_party_teshima
- BG: party_room
- BGM: party

[鸣子|sprite=naruko,pose=normal] 5号？咱们好像没有5号？
[镝木|sprite=kaburagi,pose=normal] 那就下一轮？
[小野田|sprite=onoda,pose=normal] 要不手嶋前辈来？

-> scene_birthday_party_part2

## Scene: scene_birthday_party_part2
- BG: party_room
- BGM: blocker_special_warm

[指令] sprites: clear
[旁白] 宴会也差不多要到尾声了。
[手嶋|sprite=teshima,pose=smile] 这些年真的谢谢大家了~
[手嶋|sprite=teshima,pose=moved] 和大家一起骑车的日子，我这辈子都不会忘记的……
[旁白|sprite=teshima,pose=moved] 虽然搞得像总结陈词一样，但都是我的真心话……
[手嶋|sprite=teshima,pose=smile] 总北是最棒的团队！
[指令] sprites: clear
[所有人] 哦——


[镝木|sprite=kaburagi,pose=normal] 话是没错，但是箱学的为什么要一起哦啊？
[指令] sprites: clear
[旁白] 虽然各种吵吵闹闹咋咋呼呼，也不是没有任何摩擦——
[旁白] 但这就是总北的氛围吧~
[真波|sprite=manami,pose=normal] 所以接下来是什么环节？
[手嶋|sprite=teshima,pose=normal] 在座的都是自行车手，你说呢？
[鸣子|sprite=naruko,pose=normal] 走吧！我们大家出去骑一圈！
[旁白|sprite=teshima,pose=smile] 果然我们大家聚在一起永远就只有一个结局~
[旁白|sprite=teshima,pose=bitter] 未来确实不知道会发生什么事。
[旁白|sprite=teshima,pose=normal] 但是我相信在场的人都不会轻易放弃骑车的~
[旁白|sprite=teshima,pose=normal] 只要还在骑车，我们大家就能连在一起——
[旁白|sprite=teshima,pose=normal] 因为—— 
[旁白|sprite=teshima,pose=smile] 骑自行车真的太开心了——
[手嶋|sprite=teshima,pose=normal] 我们出发—— 
[手嶋|sprite=teshima,pose=smile] 一起去快乐骑行——
[所有人] 好——
[指令] sprites: clear
[旁白] （全剧终）
[旁白] ~谢谢游玩和观看~


-> scene_ending


## Scene: scene_ending
- BGM: blocker_special_warm

