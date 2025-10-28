# Title: Junta's Birthday
# StartScene: scene_prologue

## Scene: scene_prologue
- BG: sky
- BGM: calm

[旁白] 九月になっても残暑が厳しい。
[旁白] 秋の長袖着てるんで、家から出た途端汗がにじむ……
[旁白] 受験生にとって、今日もまた変わらない一日だ。
[旁白] 俺は愛車にまたがり、学校へ向かう。

-> scene_school_road

## Scene: scene_school_road
- BG: outdoor_climb
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 見た目はひょろいが、
[手嶋|sprite=teshima,pose=normal] 俺だって正真正銘の運動部部員だ。
[手嶋|sprite=teshima,pose=smile] しかも総北高校自転車競技部の主将だしな。
[指令] SFX: road_bike
[手嶋|sprite=teshima,pose=normal] 部活ではとにかく毎日ペダルを回すこと。
[手嶋|sprite=teshima,pose=normal] ただ、先月インターハイが終わったばかりで……
[手嶋|sprite=teshima,pose=smile] もうすぐ次期主将にバトンを渡す時期だ。
[手嶋|sprite=onoda,pose=normal] 次期主将の小野田は、俺なんかよりずっと強い！
[手嶋|sprite=onoda,pose=smile] 一つ下なのに、インターハイで二年連続総合優勝だ！
[手嶋|sprite=teshima,pose=bitter] それに比べて俺は凡人……
[手嶋|sprite=teshima,pose=bitter] 高校三年になって、
[手嶋|sprite=teshima,pose=bitter] やっと大会に出られたくらいだ……

-> scene_podium

## Scene: scene_podium
- BG: podium
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 彼のおかげで、
[手嶋|sprite=teshima,pose=smile] 俺もやっと表彰台に立つことができたんだ――
[指令] SFX: cheer
[旁白|sprite=teshima,pose=normal] あのときの景色、そして観客の歓声は……
[旁白|sprite=teshima,pose=moved] 今でも鮮明に蘇る……
[旁白|sprite=teshima,pose=moved] あれは、俺の人生で最も大切な瞬間だった――

-> scene_school_gate

## Scene: scene_school_gate
- BG: school_gate
- BGM: calm

[指令] SFX: morning_bird
[手嶋|sprite=teshima,pose=normal] インハイ経験した今となっては、
[手嶋|sprite=teshima,pose=smile] この裏門坂なんて大したことねぇな！
[旁白|sprite=teshima,pose=normal] そう、あのとき全力を出し切った俺は、今ようやく――
[旁白|sprite=teshima,pose=smile] 受験生活「満喫」できるんだ～
[手嶋|sprite=teshima,pose=normal] まだ時間あるし、どうするかな……
[选择]
- 部室で勉強する -> scene_school_gate_blocker_part1
- やっぱり自転車だ -> scene_school_gate_normal

## Scene: scene_school_gate_normal
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=normal] これから勉強なんて山ほどできる。
[手嶋|sprite=teshima,pose=smile] まずひとっ走りしてこよう――
[指令] sprites: clear
[？？？] 手嶋ー
[指令] SFX: kasakasa
[旁白] 突然、誰かに呼ばれた――
[手嶋|sprite=hirata,pose=normal] なーんだ、隣の平田か！
[平田|sprites=teshima:normal@0.7,hirata:smile@0.3] 忘れてないよね？ 今日、私たちの当番だよ！
[手嶋|sprites=teshima:bitter@0.7,hirata:smile@0.3] わりぃわりぃ～ほんとに忘れてた、へへ……
[平田|sprites=teshima:smile@0.7,hirata:normal@0.3] もう――早くしてよね～
[指令] sprites: clear
[旁白] 俺は慌てて愛車を停め、平田と一緒に教室へ向かった――
[指令] BGM: fade calm 5000 
[指令] SFX: step
-> scene_lunch_break

## Scene: scene_school_gate_blocker_part1
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 部室でちょっと勉強でもするか――
[指令] sprites: clear
[？？？] 純太——
[指令] SFX: kasakasa
[旁白] 突然、誰かに呼ばれた――
[手嶋|sprite=teshima,pose=surprise] 青八木？どうしてここに？
[青八木|sprite=aoyagi,pose=normal] 純太、ノートありがとう。
[旁白|sprite=aoyagi,pose=normal] 青八木は昨日借りた英語のノートを返してくれた。
[手嶋|sprites=teshima:smile@0.7,aoyagi:normal@0.3] わざわざ裏門で待たなくてもいいのに。
[手嶋|sprites=teshima:smile@0.7,aoyagi:normal@0.3] 授業前に俺から行けばよかったんだよ～
[青八木|sprites=teshima:normal@0.7,aoyagi:normal@0.3] 純太の一限は英語だから、遅れるんじゃないかと思ってさ。
[青八木|sprites=teshima:normal@0.7,aoyagi:normal@0.3] それに——
[旁白|sprite=aoyagi,pose=smile] 青八木はやわらかく微笑んだ。
[青八木|sprite=aoyagi,pose=smile] 純太がそろそろ来るって、わかってたから。
[手嶋|sprite=teshima,pose=moved] 青八木……
[青八木|sprite=aoyagi,pose=smile] 俺ほど純太のことを知る者などいない。
[旁白|sprite=teshima,pose=moved] 胸が熱くなった――
[旁白|sprite=aoyagi,pose=normal] 目の前の彼は、
[旁白|sprite=aoyagi,pose=normal] 高一の頃から三年間、一緒に走り続けてきた、
[旁白|sprite=aoyagi,pose=normal] 最高の相棒だ――
[旁白|sprite=teshima,pose=moved] 俺たちの「シンクロストレートツイン」は息ぴったりで、
[旁白|sprite=teshima,pose=moved] 呼吸さえも重なっていた――
[旁白|sprite=aoyagi,pose=normal] 彼は俺の青春そのものだ――
[旁白|sprite=aoyagi,pose=normal] 二人でなら最高のチーム2人だ！
[旁白|sprite=aoyagi,pose=normal] まるで心を読んだかのように、青八木は力強く応えてくれた――
[青八木|sprite=aoyagi,pose=normal] 純太、この三年間本当にありがとう。
[青八木|sprite=aoyagi,pose=smile] 純太と組めたことが、俺にとって最高の幸せだ！
[手嶋|sprite=teshima,pose=smile] 大げさだな……
[手嶋|sprite=teshima,pose=moved] でも、本当にありがとう青八木。三年間一緒にいてくれて！
[旁白|sprite=teshima,pose=bitter] そう思ったら、急に切なくなった……
[旁白|sprite=teshima,pose=bitter] 高校が終われば、もし俺たちは別々の大学に進んで、
[旁白|sprite=teshima,pose=bitter] こんなふうに会う機会も減るんだろう……
[青八木|sprite=aoyagi,pose=smile] 純太、もしタイムマシンがあったら、
[青八木|sprite=aoyagi,pose=smile] 一番戻りたいのはいつだ？
[手嶋|sprite=teshima,pose=surprise] 急にそんなこと聞く？
[选择]
- 自転車をやめた日 -> scene_school_gate_blocker_answer1_1
- 青八木と初めて会った日 -> scene_school_gate_blocker_answer1_2
- 昨日かな -> scene_school_gate_blocker_answer1_3 | set: {"aoyagi": "+1"}

## Scene: scene_school_gate_blocker_answer1_1
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 戻れるなら……
[手嶋|sprite=teshima,pose=bitter] 中学で自転車をやめたあの頃に戻りたい……
[旁白|sprite=aoyagi,pose=bitter] 青八木は胸を締めつけられるような表情を浮かべた。
[青八木|sprite=aoyagi,pose=bitter] あの時もし出会っ ていたら、
[青八木|sprite=aoyagi,pose=blush] 絶対に止めてた！
[青八木|sprite=aoyagi,pose=blush] 何があっても、
[青八木|sprite=aoyagi,pose=blush] 純太が大好きな自転車を諦めさせたりしない！
[手嶋|sprite=teshima,pose=bitter] ずっと自分と向き合ってきた青八木が、そう言ってくれるなら……
[手嶋|sprite=teshima,pose=smile] ……本当にできてたかもしれないな～
[青八木|sprite=aoyagi,pose=blush] 純太！
-> scene_school_gate_blocker_part2

## Scene: scene_school_gate_blocker_answer1_2
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 青八木と出会ったあの日に戻りたい……
[旁白|sprite=aoyagi,pose=surprise] 純太？
[手嶋|sprites=teshima:normal@0.7,aoyagi:normal@0.3] あの時にチーム2人を組んでいたら……
[手嶋|sprites=teshima:smile@0.7,aoyagi:normal@0.3] インハイに一年早く出られてたかもしれないな……
[青八木|sprite=aoyagi,pose=normal] ……純太。
[青八木|sprite=aoyagi,pose=smile] やっぱり、純太は自転車バカだな……
[手嶋|sprite=teshima,pose=blush] ち、違うって！

-> scene_school_gate_blocker_part2

## Scene: scene_school_gate_blocker_answer1_3
- BG: school_gate
- BGM: happy

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=bitter] やっぱり……昨日に戻りたいな……
[青八木|sprite=aoyagi,pose=surprise] ……純太？
[手嶋|sprites=teshima:bitter@0.7,aoyagi:surprise@0.3] 模試で大失敗しちゃってさ——
[手嶋|sprites=teshima:bitter@0.7,aoyagi:surprise@0.3] 来月の小遣い、全部吹っ飛んだんだよ……
[青八木|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] 純太……
[手嶋|sprite=teshima,pose=normal] でも——
[青八木|sprite=aoyagi,pose=surprise] ？
[手嶋|sprite=teshima,pose=normal] でもな、これでハッキリわかったんだ——
[手嶋|sprite=teshima,pose=normal] 今までの道に、後悔なんて一つもないって!
[手嶋|sprite=teshima,pose=normal] 特に……お前に出会えたことな～
[手嶋|sprite=teshima,pose=smile] 青八木——！
[青八木|sprite=aoyagi,pose=blush] 純太！

[指令] BGM: fade happy 600 -> play calm
-> scene_school_gate_blocker_part2

## Scene: scene_school_gate_blocker_part2
- BG: school_gate
- BGM: calm

[青八木|sprite=aoyagi,pose=normal] じゃあ、俺が一番戻りたい日わかるか？
[选择]
- チーム2人初勝利の日 -> scene_school_gate_blocker_answer2_1 | set: {"aoyagi": "+1"}
- 小野田たちに負けだ日 -> scene_school_gate_blocker_answer2_2
- ……もしかしておまえも？ -> scene_school_gate_blocker_answer2_3


## Scene: scene_school_gate_blocker_answer2_1
- BG: school_gate
- BGM: calm

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=normal] チーム2人で初めて勝った日かな……
[青八木|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] あの日だって……
[青八木|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] インターハイみたいに、純太を先にゴールさせてやればよかった。
[青八木|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] そうすれば、みんなもっと早く気づけたはずだ。
[青八木|sprite=aoyagi,pose=blush] 純太がどれほどすごい選手なのかって……！
[手嶋|sprite=teshima,pose=moved] ……
[青八木|sprite=aoyagi,pose=blush] 俺はずっと純太のそばで走ってきた！
[青八木|sprite=aoyagi,pose=blush] だから、誰よりも知ってるんだ……！
[手嶋|sprite=teshima,pose=moved] 青八木……
[旁白]

@if aoyagi == 2 -> scene_school_gate_blocker_special
@if aoyagi < 2 -> scene_school_gate_blocker_part3

## Scene: scene_school_gate_blocker_answer2_2
- BG: school_gate
- BGM: calm

[手嶋|sprite=teshima,pose=normal] 小野田たちに負けた、あの日か……？
[青八木|sprite=aoyagi,pose=bitter] あの日は……俺が弱すぎたせいで負けたんだ。
[青八木|sprite=aoyagi,pose=bitter] 純太の戦術に問題なんて一つもなかった……
[手嶋|sprite=teshima,pose=moved] 青八木……
[手嶋|sprite=teshima,pose=bitter] いや、俺の戦術にも不十分な点は山ほどあった。
[手嶋|sprite=teshima,pose=bitter] それに――
[手嶋|sprite=teshima,pose=bitter] 青八木がいなければ……
[手嶋|sprite=teshima,pose=moved] 俺には最後、彼らとスプリントする力すら残ってなかったんだ。
[青八木|sprite=aoyagi,pose=bitter] 純太……
[青八木|sprite=aoyagi,pose=bitter] あの日、俺たちは負けたけど……
[青八木|sprite=aoyagi,pose=smile] 一緒に走り切ったことは、俺にとって誇りだ。
[手嶋|sprite=teshima,pose=moved] 青八木……

-> scene_school_gate_blocker_part3


## Scene: scene_school_gate_blocker_answer2_3
- BG: school_gate
- BGM: happy

[手嶋|sprite=teshima,pose=normal] ……もしかしておまえも昨日？
[青八木|sprite=aoyagi,pose=blush] 純太……
[手嶋|sprite=teshima,pose=smile] 何だよ、お前も模試でコケたのか？
[青八木|sprite=aoyagi,pose=blush] 違う……
[指令] BGM: fade happy 600 -> play calm

-> scene_school_gate_blocker_part3


## Scene: scene_school_gate_blocker_special
- BG: school_gate
- BGM: blocker_special_warm

[手嶋|sprite=teshima,pose=normal] いつに戻るとしても、
[手嶋|sprite=teshima,pose=normal] チーム2人は早く組んだほうがよかったんだよな……
[手嶋|sprite=aoyagi,pose=smile] 青八木にもっと早く会えてたらなあ～
[手嶋|sprite=teshima,pose=bitter] 中学で出会えてたら、自転車を諦めなかったかもしれない……
[青八木|sprite=aoyagi,pose=bitter] 純太……
[手嶋|sprite=teshima,pose=smile] もしかしたら二人で「チームSS」にだって入れたかもな～
[手嶋|sprite=teshima,pose=normal] だってチーム2人はこんなに強いんだ！
[手嶋|sprite=teshima,pose=smile]  俺たちの連携は完璧だから！
[青八木|sprite=aoyagi,pose=normal] 純太——
[青八木|sprite=aoyagi,pose=normal] いつ出会ったとしても、俺たちは必ずT2を組んでた。
[青八木|sprite=aoyagi,pose=normal] そう思うだろ、純太？
[手嶋|sprite=teshima,pose=smile] ……ああ、そうだ！
[青八木|sprite=aoyagi,pose=smile] だから純太、何も心配することはない。
[手嶋|sprite=teshima,pose=surprise] ？
[青八木|sprite=aoyagi,pose=normal] 俺たちが自転車を続ける限り、必ずまた出会える。
[青八木|sprite=aoyagi,pose=normal] 今でも、これから先だって――
[青八木|sprite=aoyagi,pose=normal] たとえ違う大学に進んでも、俺たちが走り続けていれば、
[青八木|sprite=aoyagi,pose=normal] チーム2人は絶対にチーム2人のままだ！
[青八木|sprite=aoyagi,pose=smile] ……俺もそう信じてるから。
[手嶋|sprite=teshima,pose=moved] 青八木……
[手嶋|sprite=teshima,pose=moved] まったく、朝っぱらから泣きそうになるなんてな！
[旁白|sprite=aoyagi,pose=smile] 青八木は嬉しそうに笑った――
[旁白|sprite=teshima,pose=moved] 誰が彼のことを無口だって言ったんだろう――
[旁白|sprite=teshima,pose=moved] 今じゃ俺の気持ちまで気遣ってくれる。
[旁白|sprite=teshima,pose=smile] 俺も笑って応えた――

[指令] BGM: fade blocker_special_warm 600 -> play calm

-> scene_school_gate_blocker_part3


## Scene: scene_school_gate_blocker_part3
- BG: school_gate
- BGM: calm

[青八木|sprite=aoyagi,pose=normal] そうだ、純太昨日言ってただろ、今日は当番だって――
[手嶋|sprite=teshima,pose=surprise] しまった！すっかり忘れてた！
[青八木|sprite=aoyagi,pose=normal] 自転車は俺が見とくから、純太は早く行ってこい――
[手嶋|sprite=teshima,pose=smile] ありがとう相棒――
[指令] sprites: clear
[旁白] 俺は自転車を青八木に預けると、足早に教室へ駆け出した――
[指令] BGM: fade calm 5000

-> scene_lunch_break

## Scene: scene_lunch_break
- BG: school_classroom
- BGM: lunch_time

[指令] SFX: bell
[手嶋|sprite=teshima,pose=bitter] はあ……やっと授業が終わった……
[手嶋|sprite=teshima,pose=bitter] 佐藤先生の授業って、本当に長いし退屈なんだよな……
[手嶋|sprite=teshima,pose=normal] とにかく、昼飯をさっさと済ませよう。午後は体育もあるしな。
[选择]
- 学食で食べる -> scene_lunch_break_normal
- 部室で弁当を食べる -> scene_lunch_break_blocker


## Scene: scene_lunch_break_normal
- BG: school_corridor
- BGM: lunch_time

[手嶋|sprite=teshima,pose=normal] 今日は弁当持ってきてないし、食堂で食べるか～
[指令] sprites: clear
[？？？] 手嶋ー
[旁白] 突然誰かに呼ばれた—
[平田|sprite=hirata,pose=normal] 食堂行くの？ 一緒に行こうよ～
[手嶋|sprite=teshima,pose=surprise] お前、今日は弁当じゃないのか？
[平田|sprite=hirata,pose=normal] 模試が終わったばっかで気が抜けちゃってさ――
[平田|sprite=hirata,pose=normal] 寝坊して弁当作る時間なかったんだ……
[手嶋|sprite=teshima,pose=bitter] はは、俺も似たようなもんだよ～
[平田|sprite=hirata,pose=normal] まあ月初めで小遣いもあるし
[平田|sprite=hirata,pose=smile] 今日はちょっと贅沢しちゃおっかな～
[手嶋|sprite=teshima,pose=surprise] お、エビ天うどんか？ 
[手嶋|sprite=teshima,pose=smile] ……いいな、俺も食いたくなってきた！
[指令] sprites: clear
[旁白] そんな話をしながら、俺と平田は笑い合って食堂へ向かった――
[指令] BGM: fade lunch_time 5000 

-> scene_physical_education


## Scene: scene_lunch_break_blocker
- BG: school_corridor
- BGM: lunch_time

[手嶋|sprite=teshima,pose=normal] 今日は弁当持ってきたし、部室で食べるか――
[指令] sprites: clear
[？？？] 「ぎぃゃぁぁぁぁ!!」
[指令] SFX: scream
[？？？] かっこいい～～～～！！！
[旁白] 突然、女子たちの黄色い声が響いた――
[旁白] 思わずそちらを振り向くと……
[旁白|sprite=imaizumi,pose=normal] 自転車部の二年エース・今泉が、
[旁白|sprite=imaizumi,pose=normal] 三年生の女子たちに囲まれていた！
[今泉|sprite=imaizumi,pose=normal] 手嶋さん！
[手嶋|sprite=teshima,pose=smile] ああ、今泉か。モテモテだな～
[指令] sprites: clear
[旁白] 軽く挨拶を交わし、そのまま背を向けようとしたが――
[今泉|sprite=imaizumi,pose=blush] 手嶋さん、助けてください……！
[指令] sprites: clear
[旁白] 仕方なく女子たちの輪から彼を引っ張り出した。
[手嶋|sprite=teshima,pose=serious] 昼飯も食べず、わざわざ三年の校舎まで来て何してんだよ？
[今泉|sprite=imaizumi,pose=normal] ……（黙って俺を見つめている）
[手嶋|sprite=teshima,pose=normal] どうせ高橋さんがごちそう用意してるんだろ？
[今泉|sprite=imaizumi,pose=blush] いいえ、今日は俺一人だから……食堂で済ませようと思って。
[旁白|sprite=teshima,pose=bitter] やっぱり普段は用意してもらってんのか～
[手嶋|sprite=teshima,pose=bitter] 君みたいなエリートが庶民の学食なんかで、お腹壊したりしないのか？
[今泉|sprite=imaizumi,pose=normal] 手嶋さんも一緒にどうですか？
[手嶋|sprite=teshima,pose=normal] 悪い、弁当持ってきたから部室で食べるよ～
[今泉|sprite=imaizumi,pose=blush] ど、どこで食べたって同じじゃないですか！
[手嶋|sprite=teshima,pose=blush] ほら出た、エリート様の物言い！ 
[手嶋|sprite=teshima,pose=blush] 人を軽んじないでいただきたいね～
[今泉|sprite=imaizumi,pose=blush] ち、違います！ 
[今泉|sprite=imaizumi,pose=blush] ……お、俺おごりますから！！
[手嶋|sprite=teshima,pose=smile] さっすがお坊ちゃま、気前がいいねぇ～～
[手嶋|sprite=teshima,pose=normal] じゃあ遠慮なく、ご馳走になろうかな！

-> scene_lunch_break_blocker_part1

## Scene: scene_lunch_break_blocker_part1
- BG: canteen
- BGM: lunch_happy

[旁白] 俺と今泉は食堂に着いたが、思ったほど人は多くなかった。
[今泉|sprite=imaizumi,pose=smile] 手嶋さん、好きなの選んでください。
[手嶋|sprite=teshima,pose=normal] 今日は暑いし……やっぱり冷たい麺がいいな。
[手嶋|sprite=teshima,pose=smile] どれにしようか～？
[选择]
- 一番安い素うどん -> scene_lunch_break_blocker_answer1_1
- 中くらいの値段のきつねうどん -> scene_lunch_break_blocker_answer1_2
- 一番高い海老天うどん！ -> scene_lunch_break_blocker_answer1_3 | set: {"imaizumi": "+1"}


## Scene: scene_lunch_break_blocker_answer1_1
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=normal] じゃあ……素うどんでいいか～
[今泉|sprite=imaizumi,pose=blush] ダメです！
[今泉|sprite=imaizumi,pose=blush] 受験生なんだから、ちゃんと栄養のあるもの食べないと！
[手嶋|sprite=teshima,pose=smile] そう言われちゃったら遠慮なくいただきますよ～

-> scene_lunch_break_blocker_part2

## Scene: scene_lunch_break_blocker_answer1_2
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=normal] じゃあ……きつねうどんにしようかな～
[今泉|sprite=imaizumi,pose=blush] ダメです！
[今泉|sprite=imaizumi,pose=blush] 受験生なんだから、ちゃんと栄養のあるもの食べないと！
[手嶋|sprite=teshima,pose=smile] そう言われちゃったら遠慮なくいただきますよ～

-> scene_lunch_break_blocker_part2

## Scene: scene_lunch_break_blocker_answer1_3
- BG: canteen
- BGM: lunch_happy

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=normal] おごりなら遠慮しないよ――
[手嶋|sprite=teshima,pose=smile] 天ぷらうどんに、目玉焼きも追加で～
[今泉|sprite=imaizumi,pose=blush] ……はい！
[手嶋|sprite=teshima,pose=blush] じょ、冗談だって！ そんなに即答するなよ！
[今泉|sprite=imaizumi,pose=smile] 何でですか？ 
[今泉|sprite=imaizumi,pose=smile] 受験生なんですから、ちゃんと食べないと。

-> scene_lunch_break_blocker_part2

## Scene: scene_lunch_break_blocker_part2
- BG: udon
- BGM: lunch_happy

[旁白] 食堂のおばちゃんが茹で上がったうどんを冷水でしめ、
[旁白] 淡い琥珀色の出汁を張った器に注ぐ――
[旁白|sprite=teshima,pose=moved] 山盛りの刻みネギをぱらりと散らし――
[旁白|sprite=teshima,pose=moved] ジュウジュウと音を立てる天ぷらをのせて――
[旁白|sprite=teshima,pose=moved] 仕上げに半熟の卵を忘れずトッピング！
[指令] sprites: clear
[？？？] はい、できたよ～
[旁白|sprite=teshima,pose=smile] 見ているだけで食欲をそそる、最高の一杯だ！

-> scene_lunch_break_blocker_part2_2

## Scene: scene_lunch_break_blocker_part2_2
- BG: canteen
- BGM: lunch_happy

[旁白|sprite=teshima,pose=smile] 俺は嬉しくトレイを受け取り、ふと横を見ると――
[旁白|sprite=teshima,pose=normal] 注文の仕方が分からないような今泉が立っていた。
[手嶋|sprite=teshima,pose=normal] 何食べる？
[旁白|sprite=imaizumi,pose=normal] 今泉の視線は――
[旁白|sprite=imaizumi,pose=normal] 俺の手にある弁当にじっと向けられていた――
[指令] sprites: clear
[旁白] ズルズル——
[指令] SFX: eat_noodles
[手嶋|sprite=teshima,pose=smile] うまっ！ これぞ、うちの食堂の誇りだな！
[指令] sprites: clear
[旁白] ……あっ！
[旁白] うどんすするのに夢中で、今泉がぽかんとしているのをすっかり忘れてた！
[旁白|sprite=imaizumi,pose=normal] 彼の目の前にある地味な弁当は、
[旁白|sprite=imaizumi,pose=normal] 俺にとってこれ以上ないくらい見慣れたものだ――

-> scene_lunch_break_blocker_part2_3

## Scene: scene_lunch_break_blocker_part2_3
- BG: bento
- BGM: lunch_happy

[指令] sprites: clear
[旁白] メインは庶民の定番、炭水化物たっぷりの白ご飯――
[旁白] その上に、ほんの少しだけ混ぜご飯の具がのっている――
[旁白] おかずはブロッコリーのゆで物、厚焼き玉子、大根の漬物、そして小さなソーセージ―
[旁白] ……でも今日は寝坊したから、ソーセージはタコさんにできなかったんだ。

-> scene_lunch_break_blocker_part2_4

## Scene: scene_lunch_break_blocker_part2_4
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=bitter] 食べたくないなら、無理に食べなくてもいいぜ？
[今泉|sprite=imaizumi,pose=blush] ち、違います！そういうことじゃなくて……！
[今泉|sprite=imaizumi,pose=blush] せっかくだから、もっと大切に食べないと……
[指令] sprites: clear
[旁白] 今泉はついに厚焼き卵をひと切れ取り、口に運んだ……
[旁白|sprite=imaizumi,pose=smile] 眉をひそめなかったところを見ると、
[旁白|sprite=teshima,pose=bitter] どうやら味は合格点らしい。
[手嶋|sprite=teshima,pose=normal] 今朝寝坊して手抜きになっちゃったんだ。
[手嶋|sprite=teshima,pose=smile] 今度は前もって言ってくれたら、ちゃんと準備するからさ――
[今泉|sprite=imaizumi,pose=smile] はい――！
[旁白|sprite=imaizumi,pose=smile] 嬉しそうに笑う今泉の顔を見て、
[旁白|sprite=teshima,pose=normal] 俺もなんだか満たされた気分になった。
[手嶋|sprite=teshima,pose=normal] でも前もって言っとけよな。
[手嶋|sprite=teshima,pose=bitter] これから塾があるから、学校にあんまり来れなくなるし……
[今泉|sprite=imaizumi,pose=bitter] ……学校に来る時は、自転車部にも寄ってください！
[旁白|sprite=teshima,pose=moved] 胸がじんわり熱くなる――
[旁白|sprite=teshima,pose=moved] まったく、口は悪いくせに……
[旁白|sprite=teshima,pose=smile] やっぱり可愛い後輩だな。
[旁白|sprite=teshima,pose=smile] 俺は必死に顔の緩みを隠そうとした――
[选择]
- そんなに時間がない？ -> scene_lunch_break_blocker_answer2_1
- 腕が鈍ると思うか？ -> scene_lunch_break_blocker_answer2_2
- そんなに会いたいか？ -> scene_lunch_break_blocker_answer2_3 | set: {"imaizumi": "+1"}

## Scene: scene_lunch_break_blocker_answer2_1
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=bitter] でも俺は受験生だから、そんなに時間がないんだ。
[旁白|sprite=imaizumi,pose=bitter] 今泉は少し寂しそうな顔をした。
[今泉|sprite=imaizumi,pose=bitter] ……でも、たまには運動した方がいいんじゃないですか？
[今泉|sprite=imaizumi,pose=bitter] 記憶力も上がるって聞いたし――
[今泉|sprite=imaizumi,pose=bitter] それに……
[手嶋|sprite=teshima,pose=bitter] わかったわかった、行くよ～

-> scene_lunch_break_blocker_part3


## Scene: scene_lunch_break_blocker_answer2_2
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=normal] どうした、俺の走りが下手になると思うか？
[今泉|sprite=imaizumi,pose=blush] 違いますよ！
[今泉|sprite=imaizumi,pose=blush] 今は試験勉強が大事なのは分かってますけど……
[手嶋|sprite=teshima,pose=surprise] ？
[今泉|sprite=imaizumi,pose=blush] ……そ、その……
[今泉|sprite=imaizumi,pose=blush] 小野田や鳴子たちが会いたいです……
[手嶋|sprite=teshima,pose=smile] ふふ、可愛い後輩たちのために～できるだけ顔を出すよ～
[旁白|sprite=imaizumi,pose=smile] 今泉はほっとしたようになった。

-> scene_lunch_break_blocker_part3


## Scene: scene_lunch_break_blocker_answer2_3
- BG: canteen
- BGM: lunch_happy

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=normal] どうした、そんなに会いたいか？
[今泉|sprite=imaizumi,pose=blush] い、いえ！手嶋さんの腕が鈍らないように……
[今泉|sprite=imaizumi,pose=blush] 見張っておこうと思ってます！
[手嶋|sprite=teshima,pose=bitter] ほんと、エリートは容赦ないな～
[今泉|sprite=imaizumi,pose=blush] ……それと！
[今泉|sprite=imaizumi,pose=blush] い、一緒に自転車に乗りたくて……（小声）
[手嶋|sprite=teshima,pose=surprise] ん？今なんか言ったか？
[今泉|sprite=imaizumi,pose=blush] と、とにかく！たまには部にも顔を出してください！
[今泉|sprite=imaizumi,pose=bitter] 小野田も鳴子も、
[今泉|sprite=imaizumi,pose=bitter] みんな手嶋さんが会いたいです！
[手嶋|sprite=teshima,pose=bitter] わかったわかった、可愛い後輩たちのために～できるだけ行くよ～
[旁白|sprite=imaizumi,pose=smile] 今泉は、嬉しそうに笑った。
[旁白]

@if imaizumi == 2 -> scene_lunch_break_blocker_special
@if imaizumi < 2 -> scene_lunch_break_blocker_part3

## Scene: scene_lunch_break_blocker_special
- BG: canteen
- BGM: blocker_special_warm

[手嶋|sprite=teshima,pose=normal] 君は？
[今泉|sprite=imaizumi,pose=normal] ？
[手嶋|sprite=teshima,pose=smile] ……俺のこと、会いたくないか？
[今泉|sprite=imaizumi,pose=blush] あ、いや、その、俺は——
[今泉|sprite=imaizumi,pose=blush] た、たまに手嶋さんのことを思い出すよ……
[手嶋|sprite=teshima,pose=surprise] 例えば？
[今泉|sprite=imaizumi,pose=bitter] 自転車に乗ってる時……
[今泉|sprite=imaizumi,pose=bitter] ついつい振り返っちゃうとか……
[手嶋|sprite=teshima,pose=blush] 俺が遅いと思ってるんだろ？
[今泉|sprite=imaizumi,pose=blush] ち、違います！そうじゃなくて——
[今泉|sprite=imaizumi,pose=bitter] 普段練習の時、手嶋さんが必死にペダルを回す音がいつも聞こえてたのに、
[今泉|sprite=imaizumi,pose=bitter] 最近は全然聞こえなくて……
[手嶋|sprite=teshima,pose=blush] おい！遠回しに俺の体力が落ちたって言いたいのか！？
[今泉|sprite=imaizumi,pose=blush] 違います！
[今泉|sprite=imaizumi,pose=bitter] あの音で「手嶋さんが必死に追ってきてる」って分かるから……
[今泉|sprite=imaizumi,pose=bitter] すごく安心できたんです……
[手嶋|sprite=teshima,pose=bitter] ……はは、珍しいな！
[手嶋|sprite=teshima,pose=bitter] エリートのお前がそんなこと言うなんて〜
[今泉|sprite=imaizumi,pose=blush] だから、たまに振り返って確認したくなるんです……
[手嶋|sprite=teshima,pose=smile] はははははは～
[今泉|sprite=imaizumi,pose=blush] や、やめてください！事実を言っただけです！
[手嶋|sprite=teshima,pose=normal] そうかそうか〜
[手嶋|sprite=teshima,pose=normal] じゃあこれからも、もっとお前に安心させてやるよ。
[手嶋|sprite=teshima,pose=smile] 何と言っても、エースの調子は大事だからな〜
[今泉|sprite=imaizumi,pose=blush] ……はい！

[指令] BGM: fade blocker_special_warm 600 -> play lunch_happy

-> scene_lunch_break_blocker_part3

## Scene: scene_lunch_break_blocker_part3
- BG: canteen
- BGM: lunch_happy

[手嶋|sprite=teshima,pose=bitter] その時は手加減してくれよ～
[手嶋|sprite=teshima,pose=bitter] 俺は受験生なんだからな～
[今泉|sprite=imaizumi,pose=blush] 手嶋さんがサボったら、俺絶対に許しません！
[手嶋|sprite=teshima,pose=blush] だからエリートってのは@q~￥uzvx@！^uz。~￥@vx！……
[今泉|sprite=imaizumi,pose=smile] ……でも俺が手を抜いたら、
[今泉|sprite=imaizumi,pose=smile] その時は手嶋さんも怒るでしょう？
[手嶋|sprite=teshima,pose=smile] その通りだ～
[今泉|sprite=imaizumi,pose=blush] だからあんでで人は……！
[手嶋|sprite=teshima,pose=normal] ？
[今泉|sprite=imaizumi,pose=blush] と、とりあえずごちそうさまでした。
[今泉|sprite=imaizumi,pose=blush] 明日きちんと洗って返します！
[旁白|sprite=teshima,pose=normal] ……明日、
[旁白|sprite=teshima,pose=smile] 中に高級スイーツでも詰めて返してくれるんかな？
[旁白|sprite=teshima,pose=smile] ちょっと楽しみだな～

[指令] BGM: fade lunch_happy 3000
-> scene_physical_education

## Scene: scene_physical_education
- BG: school_corridor
- BGM: lunch_time

[指令] sprites: clear
[指令] SFX: school_bell
[？？？] 手嶋、先に行くね——
[手嶋|sprite=teshima,pose=normal] おお～
[指令] sprites: clear
[旁白] 午後最初の授業は体育だ。
[旁白] 早くグラウンドで体を動かそうと思っていたのに……
[手嶋|sprite=teshima,pose=bitter] 先週うっかりジャージを部室に置きっぱなしにしてて……
[手嶋|sprite=teshima,pose=bitter] 急いで取りに行かなきゃな——
[选择]
- 隣のクラスで借りる -> scene_physical_education_normal
- 部室に取りに行く -> scene_physical_education_blocker


## Scene: scene_physical_education_normal
- BG: school_classroom
- BGM: lunch_time

[手嶋|sprite=teshima,pose=normal] 面倒だし、隣の誰かに借りようかな～
[指令] sprites: clear
[？？？] 手嶋ー！
[旁白] 突然誰かに呼ばれた――
[手嶋|sprite=teshima,pose=normal] 東戸〜ちょうどいい！
[東戸|sprite=higashito,pose=normal] ？
[手嶋|sprite=teshima,pose=normal] 今週体育なかったよね？
[東戸|sprite=higashito,pose=normal] ああ、ないけど……まさか服忘れたあ？
[手嶋|sprite=teshima,pose=bitter] そうなんだよ。部室に置きっぱなしで、取りに行くのも面倒でさ～
[東戸|sprite=higashito,pose=normal] ほら——
[手嶋|sprite=teshima,pose=smile] 助かる！ちゃんと洗って返す～
[東戸|sprite=higashito,pose=normal] そんな気を使わなくていいよ！
[指令] sprites: clear
[旁白] 服を受け取り、俺は急いでグラウンドへと向かった――

[指令] BGM: fade lunch_time 5000 
-> scene_after_school

## Scene: scene_physical_education_blocker
- BG: school_corridor
- BGM: afternoon

[手嶋|sprite=teshima,pose=normal] ……やっぱり部室に行くか。
[指令] sprites: clear
[？？？] 手嶋――
[旁白] 突然誰かに呼ばれた――
[手嶋|sprite=teshima,pose=normal] なんだ……公貴か……
[旁白|sprite=koga,pose=normal] 公貴がジャージを片手に持っていた。
[手嶋|sprite=teshima,pose=normal] ダメだよ、君の服は肩幅が広すぎて、俺には着られない！
[古賀|sprite=koga,pose=serious] バカか、これはお前のだ！くそパーマ！
[手嶋|sprite=teshima,pose=surprise] ！
[古賀|sprite=koga,pose=serious] 昼休みに部室を覗いたら、
[古賀|sprite=koga,pose=serious] 誰かさんがジャージ置き忘れててな、
[古賀|sprite=koga,pose=serious] わざわざ持ってきてやったんだよ！
[手嶋|sprite=teshima,pose=smile] おお～気が利くじゃん！サンキュー！

-> scene_physical_education_blocker_part1

## Scene: scene_physical_education_blocker_part1
- BG: school_classroom
- BGM: afternoon

[旁白] 公貴のおかげで、時間に少し余裕ができた～
[手嶋|sprite=teshima,pose=smile] よいしょっと～
[旁白|sprite=teshima,pose=smile] 俺ははゆっくりとワイシャツを脱ぎ、
[旁白|sprite=teshima,pose=normal] その下のTシャツを露わにした——
[旁白|sprite=teshima,pose=normal] スポーツジャケットを羽織り、
[旁白|sprite=teshima,pose=normal] 脱いだシャツをきちんと畳んで引き出しにしまう——
[旁白|sprite=teshima,pose=smile] 机の上に広げていた本やノートを閉じ————
[旁白|sprite=teshima,pose=smile] 席に戻って折りたたみ式携帯を開く——
[指令] sprites: clear
[旁白] そんな俺を見て、横にいた公貴がついに我慢できなくなった！
[古賀|sprite=koga,pose=serious] いいから早く授業に行け、くせ毛野郎！
[手嶋|sprite=teshima,pose=surprise] まだ時間あるじゃん！
[古賀|sprite=koga,pose=bitter] お前には悩むことなんて一つもねえか！？
[古賀|sprite=koga,pose=bitter] ケータイいじってる暇があるなら本を読め！
[古賀|sprite=koga,pose=bitter] 来週は国語の模試だぞ、復習はもう終わったのか！？

[选择]
- ノート貸して -> scene_physical_education_answer1_1
- 俺の母か -> scene_physical_education_answer1_2
- 来年の総北 -> scene_physical_education_answer1_3 | set: {"koga": "+1"}


## Scene: scene_physical_education_answer1_1
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=normal] 公貴公貴～
[古賀|sprite=koga,pose=bitter] なんだよ。
[手嶋|sprite=teshima,pose=normal] 君、国語得意だろ？
[古賀|sprite=koga,pose=bitter] それがどうした。
[手嶋|sprite=teshima,pose=smile] ノート貸してよ、ちょっと写させて～
[古賀|sprite=koga,pose=serious] バカに貸すノートなんてない！
[手嶋|sprite=teshima,pose=blush] ちぇっ、ケチ～！

-> scene_physical_education_blocker_part2

## Scene: scene_physical_education_answer1_2
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=serious] 公貴、お前って俺の母か？
[古賀|sprite=koga,pose=bitter] は？俺はお前みたいに手のかかるバカ息子持ってねえ！
[手嶋|sprite=teshima,pose=serious] そんな言い方してたら、絶対嫌われるぞ～
[古賀|sprite=koga,pose=serious] 余計なお世話だ！
[手嶋|sprite=teshima,pose=serious] ひぇ～怖い怖い！やっぱ公貴先輩は鬼畜メガネだ～！
[古賀|sprite=koga,pose=normal] ふん、俺の方が後輩に人気あるだろ？
[手嶋|sprite=teshima,pose=blush] くそっ……そこは否定できねぇ……！

-> scene_physical_education_blocker_part2


## Scene: scene_physical_education_answer1_3
- BG: school_classroom
- BGM: afternoon

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=bitter] 来年の総北は……きっと今年より厳しいだろうな……
[古賀|sprite=koga,pose=bitter] ……
[手嶋|sprite=teshima,pose=bitter] あんな重いプレッシャーを小野田に背負わせて……
[手嶋|sprite=teshima,pose=bitter] 本当に悪い気がするよ……
[古賀|sprite=koga,pose=bitter] バカだなお前は——
[古賀|sprite=koga,pose=bitter] 小野田はお前なんかよりずっと頼りになるんだよ。
[古賀|sprite=koga,pose=normal] それに、他の奴らだっているだろ。
[古賀|sprite=koga,pose=normal] 俺たちがやるべきなのは、信じて応援することだ。
[手嶋|sprite=teshima,pose=smile] ふふっ、そうだね～。
[古賀|sprite=koga,pose=serious] それより、お前は小野田の心配より国語のテストの心配しろ！
[手嶋|sprite=teshima,pose=blush] うっ……やっぱり最後はそこに戻るのか……！

-> scene_physical_education_blocker_part2


## Scene: scene_physical_education_blocker_part2
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=normal] カラオケのテストだったら、
[手嶋|sprite=teshima,pose=smile] 俺も満点取れるのになあ……
[古賀|sprite=koga,pose=serious] 受験生が何言ってんだ！そんな余裕あるか！
[手嶋|sprite=teshima,pose=surprise] 遊んでるわけじゃないよ～
[手嶋|sprite=teshima,pose=bitter] もうすぐ三者面談があるってラインで言ってるんだよ？
[古賀|sprite=koga,pose=bitter] うちのクラスはもう終わったぞ。
[手嶋|sprite=teshima,pose=surprise] へえ、じゃあ公貴はどこの大学に行くつもり？
[古賀|sprite=koga,pose=bitter] まだ決めてねえ。
[手嶋|sprite=teshima,pose=bitter] お前もか。俺もまだ迷ってるんだよな……
[古賀|sprite=koga,pose=normal] 決まってるのはひとつだけだ。
[古賀|sprite=koga,pose=smile] 自転車部がある大学だ！

[选择]
- 同じ学校行きたくない -> scene_physical_education_answer2_1
- 大学の自転車競技って激しい -> scene_physical_education_answer2_2
- ほっとした -> scene_physical_education_answer2_3 | set: {"koga": "+1"}

## Scene: scene_physical_education_answer2_1
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=serious] 君と同じ学校には絶対行きたくない……
[古賀|sprite=koga,pose=serious] なんでだよ？
[手嶋|sprite=teshima,pose=serious] 一緒のチームになったら、また君とポジション争いしなきゃならないだろ……
[手嶋|sprite=teshima,pose=bitter] プレッシャーで潰れそうだ。
[古賀|sprite=koga,pose=normal] 自分が弱いって自覚はあるんだな。
[手嶋|sprite=teshima,pose=serious] この鬼畜メガネ！
[古賀|sprite=koga,pose=smile] でも、そんなふうに言いながらも絶対に諦めないのがお前だろ。
[手嶋|sprite=teshima,pose=blush] ……うるさい！

-> scene_physical_education_blocker_part3

## Scene: scene_physical_education_answer2_2
- BG: school_classroom
- BGM: afternoon

[手嶋|sprite=teshima,pose=bitter] 大学の自転車競技って競争激しいのかな……
[古賀|sprite=koga,pose=bitter] 当たり前だろ——
[古賀|sprite=koga,pose=bitter] だから気を抜くなよ、総北で一番の弱いなんだからな！
[手嶋|sprite=teshima,pose=blush] そ、そっちじゃなくて！
[手嶋|sprite=teshima,pose=blush] 君の肩が心配なんだよ……
[古賀|sprite=koga,pose=serious] ……バカ、そんなこと気にするな——
[古賀|sprite=koga,pose=serious] もうほとんど回復した——
[手嶋|sprite=teshima,pose=blush] 筋肉野郎！

-> scene_physical_education_blocker_part3

## Scene: scene_physical_education_answer2_3
- BG: school_classroom
- BGM: afternoon

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=normal] ほっとした——
[古賀|sprite=koga,pose=bitter] ？
[手嶋|sprite=teshima,pose=normal] お前がまだ自転車に乗りたいって聞いてさ～
[古賀|sprite=koga,pose=serious] 当たり前だろ！
[古賀|sprite=koga,pose=serious] お前より先に諦める奴がいるかよ、くそパーマ！
[手嶋|sprite=teshima,pose=blush] 筋肉野郎！
[旁白]

@if koga == 2 -> scene_physical_education_blocker_special
@if koga < 2 -> scene_physical_education_blocker_part3

## Scene: scene_physical_education_blocker_special
- BG: school_classroom
- BGM: blocker_special_warm  

[指令] sprites: clear
[古賀|sprite=koga,pose=normal] でも、そろそろ自信を持ってもいいんじゃない？
[手嶋|sprite=teshima,pose=surprise] ？
[古賀|sprite=koga,pose=normal] 平坦ならまだ俺に勝てないかもしれないけど……
[古賀|sprite=koga,pose=normal] 山岳なら、まあまあ見られるレベルだ。
[手嶋|sprite=teshima,pose=serious] 何だよそれ、「まあまあ」だけかよ？
[古賀|sprite=koga,pose=normal] ナンバープレートとらなかったけど——
[手嶋|sprite=teshima,pose=serious] 俺が完走できなかったって言うんだろ！
[古賀|sprite=koga,pose=normal] インハイ完走はできなかったけど——
[手嶋|sprite=teshima,pose=serious] ほらね！やっぱり——
[古賀|sprite=koga,pose=normal] でも、昔いつも最下位だったお前と比べたら、もう別人だよ。
[手嶋|sprite=teshima,pose=blush] ああ——もうダメだ、本当に鬼畜メガネ！
[古賀|sprite=koga,pose=normal] 本気で褒めてるんだよ？
[手嶋|sprite=teshima,pose=blush] でもその言い方、やっぱりバカにしてる！
[古賀|sprite=koga,pose=normal] いいじゃないか。
[古賀|sprite=koga,pose=normal] 俺らはそうやって競い合ってきたんだろ。
[古賀|sprite=koga,pose=normal] お前が必死に食らいついてくるから、
[古賀|sprite=koga,pose=smile] 俺も全力を出さざるを得なかった。
[手嶋|sprite=teshima,pose=surprise] ！
[古賀|sprite=koga,pose=normal] だから断言できる。
[古賀|sprite=koga,pose=normal] お前は本当に強くなった。
[古賀|sprite=koga,pose=smile] ……まあ、バカでしつこいところは昔のままだけどな。
[手嶋|sprite=teshima,pose=blush] くっそ、やっぱりバカにしてるじゃねーか！

[指令] sprites: clear
[旁白] なんだかんだで古賀は楽しそうだった……

-> scene_physical_education_blocker_part3

## Scene: scene_physical_education_blocker_part3
- BG: school_classroom
- BGM: afternoon

[古賀|sprite=koga,pose=bitter] まだ授業に行かねえか？
[手嶋|sprite=teshima,pose=blush] やばい、遅刻する！
[手嶋|sprite=teshima,pose=blush] 全部お前のせいだ、こんなに長く話して！
[古賀|sprite=koga,pose=serious] は？
[古賀|sprite=koga,pose=serious] 誰がずっと片付けながらスマホいじってたんだ、
[古賀|sprite=koga,pose=serious] 早く行け！
[手嶋|sprite=teshima,pose=blush] 変態筋肉野郎！
[古賀|sprite=koga,pose=serious] くせ毛野郎！
[指令] sprites: clear
[旁白] 俺は古賀を置き去りにして走り出した——

[指令] BGM: fade afternoon 5000
-> scene_after_school

## Scene: scene_after_school
- BG: school_entrance
- BGM: after_school

[指令] sprites: clear
[指令] SFX: school_bell
[手嶋|sprite=teshima,pose=bitter] （ふぁ～っと伸びをして——）
[手嶋|sprite=teshima,pose=bitter] やっと授業全部終わった……疲れた～
[手嶋|sprite=teshima,pose=normal] でも来月から塾だと思うと気が重い……
[手嶋|sprite=teshima,pose=normal] あ～こんな楽しい学校生活、
[手嶋|sprite=teshima,pose=bitter] もうじき終わりか……
[手嶋|sprite=teshima,pose=smile] ま、最後くらい楽しんでやらなくちゃな～
[手嶋|sprite=teshima,pose=smile] 部室でも覗いてみるか～
[选择]
- 部室でも覗いてみる -> scene_after_school_blocker
- 大事なことを忘れた気がする -> scene_after_school_normal


## Scene: scene_after_school_normal
- BG: school_entrance
- BGM: after_school

[手嶋|sprite=teshima,pose=normal] なんだか、大事なこと忘れてる気がする？
[指令] sprites: clear
[？？？] 手嶋ー！
[旁白] 突然誰かに呼ばれた気がして——
[手嶋|sprite=teshima,pose=normal] そろそろ出てくる頃だと思った……
[手嶋|sprite=hirata,pose=smile] 平田〜
[旁白|sprites=teshima:normal@0.7,hirata:normal@0.3] 平田がほうき一本差し出した——
[平田|sprite=hirata,pose=smile] サボろうなんて思ってないよね！？
[手嶋|sprite=teshima,pose=bitter] ははは……そんなわけないだろ〜？
[旁白|sprite=teshima,pose=bitter] 苦笑いしながらも、さっき一瞬すっかり忘れていた……
[指令] sprites: clear
[旁白] こうして平田と一緒に、
[旁白] さっさと終わらせようと無言で掃除に取りかかった——

[指令] BGM: fade after_school 5000
-> scene_hill_climb

## Scene: scene_after_school_blocker
- BG: school_entrance
- BGM: friendship

[手嶋|sprite=teshima,pose=normal] 部室に顔出そうかな——
[指令] sprites: clear
[？？？] 手嶋〜！
[旁白] 突然誰かに呼ばれた――
[手嶋|sprite=teshima,pose=surprise] 東戸？
[旁白|sprite=higashito,pose=normal] 巨体の影を引きながら東戸が近づいてくる。その後ろには――
[手嶋|sprite=teshima,pose=surprise] シキバ――？！！
[葦木場|sprite=ashikiba,pose=smile] 純ちゃん——
[手嶋|sprite=teshima,pose=normal] なんでここに？今日は授業ないんじゃ……
[葦木場|sprite=ashikiba,pose=normal] 箱学の三年はもう自由登校なんだ……
[東戸|sprite=higashito,pose=normal] こいつが校内でうろついて——
[東戸|sprite=ashikiba,pose=bitter] 「手嶋純太知ってますか」
[東戸|sprite=teshima,pose=surprise] って誰彼かまわず聞いてたから。
[東戸|sprite=higashito,pose=normal] 仕方なく連れてきたんだ。
[葦木場|sprite=ashikiba,pose=bitter] だって、純ちゃんのこと知ってる人、全然見つからなくて……
[葦木場|sprite=ashikiba,pose=smile] でも町田くんに出会えて助かったよ！
[東戸|sprite=higashito,pose=normal] ……俺は東戸な。
[東戸|sprite=higashito,pose=normal] まあいいや——
[東戸|sprite=higashito,pose=normal] あとはご自由に、俺帰るわ。
[指令] sprites: clear
[旁白] 東戸は手をひらひらと振り、校門の方へ歩いていった。

-> scene_after_school_blocker_part1


## Scene: scene_after_school_blocker_part1
- BG: outdoor_corridor
- BGM: friendship

[旁白] シキバを中庭まで連れて行き、空いたベンチに腰を下ろした。
[手嶋|sprite=teshima,pose=normal] シキバ、千葉に帰ってきて、けっこう経ったんだな？
[葦木場|sprite=ashikiba,pose=bitter] うん……
[手嶋|sprite=teshima,pose=surprise] まさか……中三の頃から、一度も来てねえじゃねえか？
[葦木場|sprite=ashikiba,pose=bitter] ……まあ、そんなところかな。
[手嶋|sprite=teshima,pose=normal] 泊まる場所は？大丈夫か？
[葦木場|sprite=ashikiba,pose=bitter] うん、親戚の家に世話になる予定。
[手嶋|sprite=teshima,pose=normal] じゃあ今回はゆっくりしていけよ。
[手嶋|sprite=teshima,pose=normal] 中学のみんな、君に会いたがってるんだ。
[葦木場|sprite=ashikiba,pose=bitter] そうなの？
[手嶋|sprite=teshima,pose=smile] 当然だろ。だって君は本当に目立ってたからな、
[手嶋|sprite=teshima,pose=normal] みんな忘れるわけがねえ！
[葦木場|sprite=ashikiba,pose=normal] ……じゃあ純ちゃんは？
[葦木場|sprite=ashikiba,pose=bitter] 純ちゃんは、僕のこと覚えてる？
[手嶋|sprite=teshima,pose=normal] 当たり前だろ！
[手嶋|sprite=teshima,pose=normal] あの頃は毎日一緒に自転車に乗ってたんじゃねえか！
[葦木場|sprite=ashikiba,pose=smile] ふふ……純ちゃんは「天下を取る」って言ってたよね？
[手嶋|sprite=teshima,pose=blush] それは恥ずかしいからやめろ——
[手嶋|sprite=teshima,pose=blush] しかもそのあと「自転車はもうやめる」なんて言って……
[手嶋|sprite=teshima,pose=bitter] 結局また戻ってきたんだよな、俺は。
[葦木場|sprite=ashikiba,pose=normal] でも僕は……ずっと信じてたよ。
[手嶋|sprite=teshima,pose=normal] ？
[葦木場|sprite=ashikiba,pose=normal] 自転車に乗り続けていれば、必ずまた純ちゃんに会えるって——
[葦木場|sprite=ashikiba,pose=smile] そう信じてたんだ。
[手嶋|sprite=teshima,pose=smile] ……へへ、まさか本当に君の予想が当たるとはな。
[葦木場|sprite=ashikiba,pose=smile] だって純ちゃんは、自転車バカだからね～
[手嶋|sprite=teshima,pose=blush] な、誰がそんなこと……！
[葦木場|sprite=ashikiba,pose=normal] 町田くんが言ってだよ。
[手嶋|sprite=teshima,pose=blush] 東戸の野郎、また適当なことを……！
[葦木場|sprite=ashikiba,pose=normal] ……でもね、自転車があったからこそ、純ちゃんに再会できたんだ。
[葦木場|sprite=ashikiba,pose=bitter] 実は……ずっと謝りたかった……
[手嶋|sprite=teshima,pose=surprise] なんで？
[葦木場|sprite=ashikiba,pose=bitter] あの時、何も言わずに去っちゃって……
[葦木場|sprite=ashikiba,pose=bitter] きっと純ちゃんを困らせただろう？
[选择]
- 気にしないで -> scene_after_school_answer1_1
- 本当に心配したん -> scene_after_school_answer1_2
- 母星に帰ったんじゃねえか -> scene_after_school_answer1_3 | set: {"ashikiba": "+1"}


## Scene: scene_after_school_answer1_1
- BG: outdoor_corridor
- BGM: friendship

[手嶋|sprite=teshima,pose=normal] 気にしないで～
[手嶋|sprite=teshima,pose=normal] 今こうしてまた会えたんだから、それで十分だよ。 
[手嶋|sprite=teshima,pose=smile] それに俺たち二人とも、まだ自転車に乗ってるんだしね！
[葦木場|sprite=ashikiba,pose=bitter] ……うん。 
[指令] sprites: clear
[旁白] 葦木場の表情が少し和らいだ。

-> scene_after_school_blocker_part2


## Scene: scene_after_school_answer1_2
- BG: outdoor_corridor
- BGM: friendship

[手嶋|sprite=teshima,pose=bitter] 本当に心配したんだぞ……。  
[手嶋|sprite=teshima,pose=bitter] 君が誘拐されたんじゃないかと思ったくらいでさ。
[手嶋|sprite=teshima,pose=bitter] だって君、人を信じやすいだろ？  
[葦木場|sprite=ashikiba,pose=bitter] そ、そんなことないよ……
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 急に何日も学校に来なくなって……  
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 家の電話も繋がらなくて……
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 先生に聞いたら「引っ越した」って言われてさ……
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 当時は携帯もなかったから……
[葦木場|sprite=ashikiba,pose=surprise] あっ、今日も携帯忘れてきちゃった！ 
[手嶋|sprite=teshima,pose=surprise] えぇ！？じゃあどうするんだ！
[手嶋|sprite=teshima,pose=surprise] 家の番号とか覚えてるのか？ 
[葦木場|sprite=ashikiba,pose=bitter] ……覚えてないよぉぉぉ～！
[手嶋|sprite=teshima,pose=bitter] 仕方ないな……後で泉田にでも聞いてみる。
[葦木場|sprite=ashikiba,pose=bitter] お願いね、純ちゃん！
[指令] sprites: clear
[旁白] シキバは子供の頃みたいに、涙目でこちらを見上げてきた。
[旁白] ……幸い、昔みたいに突然抱きついてこなかったけど……

-> scene_after_school_blocker_part2


## Scene: scene_after_school_answer1_3
- BG: outdoor_corridor
- BGM: happy

[指令] SFX: correct_answer
[手嶋|sprite=teshima,pose=serious] そうだよ、みんな本当に心配してたんだ！
[指令] sprites: clear
[旁白] 葦木場の頭はさらに深くうなだれた――
[手嶋|sprites=teshima:serious@0.7,ashikiba:bitter@0.3] みんなさ、君は宇宙人なんじゃないかって噂してたんだ――
[手嶋|sprites=teshima:serious@0.7,ashikiba:bitter@0.3] つい地球生活に耐えられえて、
[手嶋|sprites=teshima:serious@0.7,ashikiba:bitter@0.3] 母星に帰ったんじゃねえかって！
[葦木場|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] ええっ！？そ、そんなわけないよ！
[手嶋|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] だって普段から電波っぽいし、
[手嶋|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] よく意味不明なこと言うし——
[手嶋|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] 身長も普通よりずっと高いし——
[手嶋|sprites=teshima:normal@0.7,ashikiba:surprise@0.3] 頭の渦巻きはアンテナで電波受信してそうだし——
[手嶋|sprites=teshima:normal@0.7,ashikiba:normal@0.3] そのホクロは変身スイッチとかさ——
[手嶋|sprites=teshima:smile@0.7,ashikiba:normal@0.3] みんな「もっと早く押してみればよかったのに」で！
[指令] sprites: clear
[旁白] 葦木場はとうとう陰気な気分を振り払い、
[旁白] 子供みたいに嬉しそうに笑った——
[葦木場|sprite=ashikiba,pose=smile] ははは～カッコいい～
[手嶋|sprite=teshima,pose=smile] だろ～？
[葦木場|sprite=ashikiba,pose=normal] みんな大げさだよ、ただの普通のホクロなのに。
[指令] sprites: clear
[旁白] そう言いながらシキバは右頬のハート型のホクロに指を当てた——
[葦木場|sprite=ashikiba,pose=normal] 純ちゃん、押してみる？
[指令] sprites: clear
[旁白|sprite=ashikiba,pose=normal] そう言ってシキバは目を閉じ、顔をこちらへ近づけてきた―― 
[旁白|sprite=teshima,pose=serious] 俺は思わず息をのんで、そのホクロを押し込んでみた——
[指令] sprites: clear
[旁白] 。。。。。
[手嶋|sprite=teshima,pose=serious] ……なんか特別な感じ、した？
[葦木場|sprite=ashikiba,pose=smile] うん、くすぐったい～
[手嶋|sprite=teshima,pose=smile] ははは！
[葦木場|sprite=ashikiba,pose=normal] それにね……すごく嬉しいんだ～
[指令] sprites: clear
[旁白] 葦木場はぽかぽかと心が温まるような笑顔を見せた――

-> scene_after_school_blocker_part2


## Scene: scene_after_school_blocker_part2
- BG: outdoor_corridor
- BGM: friendship

[手嶋|sprite=teshima,pose=normal] でもシキバが箱学にいるって知ったのは、去年なんだよな。
[手嶋|sprites=teshima:normal@0.7,ashikiba:normal@0.3] まさかレギュラーにまでなるとは！
[手嶋|sprites=teshima:smile@0.7,ashikiba:normal@0.3] やっぱりシキバには才能があるんだ！
[葦木場|sprites=teshima:normal@0.7,ashikiba:smile@0.3] へへへ、全部純ちゃんのおかげだよ～
[手嶋|sprite=teshima,pose=normal] 箱学って伝統ある私立の自転車名門校だから、
[手嶋|sprite=teshima,pose=bitter] きっと苦労も多かったんだろ？
[葦木場|sprite=ashikiba,pose=normal] うん……
[手嶋|sprite=teshima,pose=normal] 当ててみようか。
[手嶋|sprite=teshima,pose=bitter] 君にとって一番大変だったのはきっと——

[选择]
- 厳しい校則 -> scene_after_school_answer2_1
- 鬼練習 -> scene_after_school_answer2_2 | set: {"ashikiba": "+1"}
- 寮のベッド -> scene_after_school_answer2_3


## Scene: scene_after_school_answer2_1
- BG: outdoor_corridor
- BGM: friendship

[手嶋|sprites=teshima:normal@0.7,ashikiba:normal@0.3] 箱学って伝統ある私立名門だから、
[手嶋|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] きっと校則も厳しいんだろうな～
[手嶋|sprites=teshima:normal@0.7,ashikiba:normal@0.3] 例えば……長髪禁止とか？
[手嶋|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] もし俺が行ったら、この髪すぐ切らされるかもな？
[葦木場|sprites=teshima:bitter@0.7,ashikiba:smile@0.3] 純ちゃん、そのくらいの長さなら大丈夫だよ～  
[手嶋|sprite=teshima,pose=surprise] 本当か？  
[葦木場|sprite=ashikiba,pose=smile] だって純ちゃんのくせ毛、校則より強そうだからね～  
[手嶋|sprite=teshima,pose=blush] どういう意味だよそれ！？ 

-> scene_after_school_blocker_part3


## Scene: scene_after_school_answer2_2
- BG: outdoor_corridor
- BGM: friendship

[指令] SFX: correct_answer
[手嶋|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] 箱学の練習は普通の人には絶対耐えられないって！ 
[手嶋|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] 前にスケジュールをちょっと聞いたことあるけど、
[手嶋|sprites=teshima:surprise@0.7,ashikiba:normal@0.3] ほんと鬼だったんだぞ—— 
[手嶋|sprites=teshima:surprise@0.7,ashikiba:normal@0.3] 自転車トレーニングが総北の3倍あるってだけじゃなくて、
[手嶋|sprites=teshima:surprise@0.7,ashikiba:normal@0.3] さらに体力メニューや筋トレが山のように詰まってるんだ！
[葦木場|sprites=teshima:normal@0.7,ashikiba:smile@0.3] あれは全員が全部やるわけじゃないよ〜 
[手嶋|sprite=teshima,pose=normal] じゃあシキバくん、今すごい筋肉ついてるんじゃない？
[手嶋|sprite=teshima,pose=smile] ちょっと見せてみろよ！  
[葦木場|sprite=ashikiba,pose=smile] ははは、やめてよ、くすぐったい〜
[旁白]

@if ashikiba == 2 -> scene_after_school_blocker_special
@if ashikiba < 2 -> scene_after_school_blocker_part3

## Scene: scene_after_school_answer2_3
- BG: outdoor_corridor
- BGM: happy

[手嶋|sprites=teshima:normal@0.7,ashikiba:normal@0.3] 箱学は寮生活のやつが多いって聞いたけど……
[手嶋|sprites=teshima:smile@0.7,ashikiba:normal@0.3] あのベッドでちゃんと眠れるのか？
[葦木場|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] うん……それがね、寝てるといつも足が半分はみ出しちゃうんだ……
[手嶋|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] だろうな！君の身長じゃ無理もない！
[葦木場|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] 最近やっと家に帰って寝られて、ホッとしてるんだ。
[手嶋|sprites=teshima:smile@0.7,ashikiba:bitter@0.3] それはよかった！ちゃんと休めるなら安心だな～
[指令] sprites: clear
[旁白] 俺は葦木場の肩を軽く叩いた―― 

[指令] BGM: fade happy 600 -> play friendship
-> scene_after_school_blocker_part3

## Scene: scene_after_school_blocker_special
- BG: outdoor_corridor
- BGM: blocker_special_warm

[葦木場|sprite=ashikiba,pose=smile] 純ちゃんと話してると、本当に楽しいんだ～  
[手嶋|sprite=teshima,pose=smile] 俺もだよ～シキバに会うと、子供の頃に戻ったみたいでさ～
[手嶋|sprite=teshima,pose=smile] 君は全然変わってないね～  
[葦木場|sprite=ashikiba,pose=normal] 純ちゃんはすごく変わったよ！昔よりずっと強くなった。  
[手嶋|sprite=teshima,pose=smile] そうかな？ははは～
[葦木場|sprite=ashikiba,pose=bitter] それに、僕だって変わったんだ…… 
[手嶋|sprite=teshima,pose=normal] でも君の本質は変わってないよ。
[手嶋|sprite=teshima,pose=bitter] 相変わらず人褒めすぎだ～
[葦木場|sprite=ashikiba,pose=serious] 褒めてるわけじゃない！
[葦木場|sprite=ashikiba,pose=serious] ただ本当のことを言ってるだけ！
[葦木場|sprite=ashikiba,pose=serious] 純ちゃんが一番すごいんだから！
[手嶋|sprite=teshima,pose=smile] おめでたいこと言うなあ～ 
[葦木場|sprite=ashikiba,pose=bitter] でも、僕の気持ちは少しずつ変わってるよ。
[葦木場|sprite=ashikiba,pose=bitter] 純ちゃんが気づいてないだけさ…… 
[手嶋|sprite=teshima,pose=surprise] えっ、どうゆうこと？
[葦木場|sprite=ashikiba,pose=bitter] それに純ちゃん、今すごくモテてるでしょ？
[手嶋|sprite=teshima,pose=surprise] え？全然気づかなかったけど？
[葦木場|sprite=ashikiba,pose=bitter] このまま僕がそばにいないと、他の誰かに取られちゃうよ！
[手嶋|sprite=teshima,pose=smile] そんなことないって、安心しろよ～
[葦木場|sprite=ashikiba,pose=serious] それが純ちゃんの鈍感なところだよ……
[葦木場|sprite=ashikiba,pose=serious] でも大丈夫。僕が純ちゃんを守るから！
[手嶋|sprite=teshima,pose=smile] はは、じゃあよろしく頼むわ～
[葦木場|sprite=ashikiba,pose=smile] 喜んで！ずっと一緒にいたいからね～
[指令] sprites: clear
[旁白] 相変わらず、彼が何を考えているのかやっぱり分からねえ……
[旁白] 多分、彼の友情の証なんだろうな～

-> scene_after_school_blocker_part3

## Scene: scene_after_school_blocker_part3
- BG: outdoor_corridor
- BGM: friendship


[葦木場|sprite=ashikiba,pose=normal] これからは敵じゃないんだから、
[葦木場|sprite=ashikiba,pose=smile] 純ちゃんに遊びに来てもいい？
[手嶋|sprite=teshima,pose=surprise] えっ？でも塾はどうするんだ？ 
[葦木場|sprite=ashikiba,pose=normal] 千葉にも塾あるから大丈夫！
[葦木場|sprite=ashikiba,pose=serious] だって純ちゃんと同じ大学に合格しなきゃ意味ないじゃない！
[手嶋|sprite=teshima,pose=normal] とにかく、やる気があるなら安心だ～
[手嶋|sprite=teshima,pose=smile] 同じ大学に行けたら最高だなあ～
[指令] sprites: clear
[旁白] 元気が戻したシキバを見ていると、
[旁白] こっちまで引っ張られるように笑みがこぼれた。  
[手嶋|sprite=teshima,pose=surprise] あっ！そういえば、今日は掃除当番じゃん！
[葦木場|sprite=ashikiba,pose=normal] 純ちゃん、先に行ってて。
[葦木場|sprite=ashikiba,pose=smile] 僕は自転車部で待ってるから！
[手嶋|sprite=teshima,pose=normal] ……一人で大丈夫か？
[葦木場|sprite=ashikiba,pose=smile] うん！
[旁白|sprite=ashikiba,pose=smile] 葦木場がにこっと笑って力強くうなずいたのを見て——
[指令] sprites: clear
[旁白] どうやって平田に謝ろうか考えながら、俺は急いで走り出した……

[指令] BGM: fade friendship 5000
-> scene_hill_climb


## Scene: scene_hill_climb
- BG: school_classroom
- BGM: after_school

[平田|sprite=hirata,pose=smile] ふう——やっと掃除終わった！ 
[手嶋|sprite=teshima,pose=smile] 金曜日じゃなくてよかったよ、思ったより早く終わった！
[指令] sprites: clear
[旁白] 俺たちは掃除用具を物置に片づけた。
[手嶋|sprite=teshima,pose=normal] この後は帰宅？
[平田|sprite=hirata,pose=normal] ちょっと商店街に寄ってくる～
[手嶋|sprite=teshima,pose=bitter] なるほど、急いでたわけだ～
[平田|sprite=hirata,pose=smile] 手嶋はこれから練習？

[选择]
- 部室に寄って少し走ろう -> scene_hill_climb_blocker
- 職員室に志望表を出しに行く -> scene_hill_climb_normal


## Scene: scene_hill_climb_normal
- BG: school_entrance
- BGM: blocker_special_warm

[指令] sprites: clear
[手嶋|sprite=teshima,pose=normal] 職員室に行くよ——
[手嶋|sprite=teshima,pose=bitter] まだ志望表出してなくてさ……
[平田|sprite=hirata,pose=normal] まだ学校決めてないの？
[手嶋|sprite=teshima,pose=bitter] そんな簡単に決められるもんかよ～
[平田|sprite=hirata,pose=smile] 自転車部の強豪校に行けばいいんじゃない？
[手嶋|sprite=teshima,pose=normal] はは、それも一理あるな～
[平田|sprite=hirata,pose=smile] でもさ、悩む時間も大事だと思うよ～
[手嶋|sprite=teshima,pose=bitter] なんか推薦決まったみたいなこと言うな？
[平田|sprite=hirata,pose=smile] そうじゃなくて——これも青春ってやつでしょ？
[平田|sprite=hirata,pose=normal] それにさ、手嶋の方が推薦を受けるべきじゃないの？
[手嶋|sprite=teshima,pose=bitter] 俺、順位取れてねえじゃん（笑）！
[平田|sprite=hirata,pose=smile] そういうのが手嶋らしくていいんじゃない？
[平田|sprite=hirata,pose=normal] もし君がいきなり超エリートになったら、
[平田|sprite=hirata,pose=normal] 私もこんなふうに気軽に話せなくなるよ～
[平田|sprite=hirata,pose=smile] 今のままの君だからこそ、安心できるんだよ～
[手嶋|sprite=teshima,pose=bitter] ……俺の平凡さに感謝しろってことか？
[平田|sprite=hirata,pose=normal] ま、そんな感じかな～
[平田|sprite=hirata,pose=smile] 自転車バカなんだから、これからも頑張って走り続けてね！
[指令] sprites: clear
[旁白] 遠ざかる平田の背中を見送りながら、
[旁白] 胸にぽっかり穴が開いたような気がした。
[旁白|sprite=teshima,pose=bitter] こうやって気楽に言い合える時間も、
[旁白|sprite=teshima,pose=bitter] もうそう長くは続かないんだろう……
[旁白|sprite=teshima,pose=bitter] ……みんなそれぞれの未来へ進んでいく。
[指令] sprites: clear
[旁白] じゃあ、俺は？
[旁白|sprite=teshima,pose=normal] おそらく「自転車を漕ぎ続けること」だけは、
[旁白|sprite=teshima,pose=normal] 変わらず確かなものなんだろう……
[旁白|sprite=teshima,pose=bitter] 答えも走り続けるその先で見つかるはずだ……
[旁白|sprite=teshima,pose=bitter] そしてその道の途中で、
[旁白|sprite=teshima,pose=bitter] また大切な誰かと出会えるに違いない——
[指令] sprites: clear
[旁白] そんなふうに思うと、
[旁白|sprite=teshima,pose=normal] 不思議と少しだけ心が軽くなった。
[手嶋|sprite=teshima,pose=bitter] くそ……やっぱり自転車に乗りたくなってきた！
[指令] sprites: clear
[旁白] 部室に行こう——

[指令] BGM: fade blocker_special_warm 5000
-> scene_birthday_party


## Scene: scene_hill_climb_blocker
- BG: school_classroom
- BGM: after_school

[手嶋|sprite=teshima,pose=normal] うん、部室に行って自転車乗ってくる。
[手嶋|sprite=teshima,pose=normal] この時間なら裏門坂往復できるし——
[平田|sprite=hirata,pose=smile] 頑張ってね、先に帰る～

-> scene_hill_climb_blocker_part1

## Scene: scene_hill_climb_blocker_part1
- BG: outdoor_corridor
- BGM: after_school

[指令] sprites: clear
[旁白] 平田と別れた俺は、足早に自転車部へ向かった。
[旁白] この先も受験や面談、いろんな面倒が待ち構えている……
[旁白] だからこそ、今はただ無心でペダルを回したい！
[手嶋|sprite=teshima,pose=serious] くそ——自転車乗りたい！
[指令] sprites: clear
[指令] SFX: kasakasa
[？？？] ははっ、どこの自転車バカですか？

[指令] BGM: fade after_school 600 -> play lunch_happy

[手嶋|sprite=teshima,pose=blush] えっ！？真波——！！！ 
[真波|sprite=manami,pose=smile] へへへ～真波だよ～
[手嶋|sprite=teshima,pose=blush] なんでお前がここに？
[手嶋|sprite=teshima,pose=serious] それに先輩をバカ呼ばわりするな！
[真波|sprite=manami,pose=normal] 細かいこと気にしない気にしない～
[真波|sprite=manami,pose=normal] さっき小嶋さんが「自転車乗りたい」って言ってたでしょ？
[手嶋|sprite=teshima,pose=serious] 俺は小嶋じゃない——
[真波|sprite=manami,pose=smile] さあさあ手鞠先輩、一緒に乗りましょう～裏門坂～
[手嶋|sprite=teshima,pose=blush] 手嶋だ——！それに、
[手嶋|sprite=teshima,pose=serious] 君と一緒なら、夜に勉強できそうにねえだろ！
[真波|sprite=manami,pose=surprise] そもそも今日は勉強する余裕ないでしょ？
[手嶋|sprite=teshima,pose=surprise] ？
[真波|sprite=manami,pose=normal] ほら、せっかく自転車も持ってきてるんだから～
[指令] sprites: clear
[旁白] 真波が少し離れた場所を指さした——
[旁白] そこには俺の黒いキャノンデールと、
[旁白] 彼の真っ白なルックが並んでいた……
[手嶋|sprite=teshima,pose=blush] おい、なんで俺の自転車の居場所知ってるんだ！？ 
[旁白|sprite=manami,pose=normal] 真波は自分の車に跨がり、しきりに俺を急かした。
[真波|sprite=manami,pose=smile] さあさあ～行きましょう～レッツゴー！
[旁白|sprite=teshima,pose=blush] こいつは本当にしつこい！

[指令] sprites: clear
[旁白] 俺は仕方なく自転車に跨がり、真波の後を追って裏門坂を下がった――  

-> scene_hill_climb_blocker_part1_2


## Scene: scene_hill_climb_blocker_part1_2
- BG: outdoor_climb
- BGM: climb

[指令] SFX: road_bike
[真波|sprite=manami,pose=normal] 坂道くんからずっと聞いてたんです、
[真波|sprite=manami,pose=smile] 総北の裏門坂ってすごいんだって！
[手嶋|sprite=teshima,pose=normal] ああ……入学したばかりの頃は、全然登れなかったな。
[真波|sprite=manami,pose=normal] へえ～今の最速は何分くらいですか？
[手嶋|sprite=teshima,pose=normal] 7分かな？
[手嶋|sprite=teshima,pose=bitter] もちろん、小野田たちには敵わないけどね……
[真波|sprite=manami,pose=normal] さっすが坂道くん！
[真波|sprite=manami,pose=smile] 後で俺も挑戦してみようか～

[指令] sprites: clear
[旁白] 無邪気な笑みを浮かべる真波の姿に、
[旁白] 思わず背筋がゾクッとした。
[旁白|sprite=teshima,pose=bitter] ……今夜本当に勉強できそうにない。
[真波|sprite=manami,pose=normal] 手嶋さんなら無理してでも、食らいついてくるでしょ？ 
[真波|sprite=manami,pose=smile] もしかしたら、一緒に六分切りいけるかも～ 
[旁白|sprite=manami,pose=smile] そう言うと真波は満面の笑みを浮かべ、挑発的に俺を見つめた――

[指令] sprites: clear
[旁白] 俺は仕方なくため息をついた。
[手嶋|sprite=teshima,pose=bitter] はいはい、無理は俺の必殺技だからね——
[真波|sprite=manami,pose=normal] それそれ！
[真波|sprite=manami,pose=smile] 俺大好きです！手嶋さん————
[真波|sprite=manami,pose=smile] ————のそういうとこ～
[手嶋|sprite=teshima,pose=normal] お前の必殺技はあれだな～
[手嶋|sprite=teshima,pose=smile] あの翼出せるやつ？
[真波|sprite=manami,pose=smile] へへ～坂登る時勝手にだしてるだけですよ～
[真波|sprite=manami,pose=surprise] でも手嶋さんも持ってるでしょう？翼——
[真波|sprite=manami,pose=smile] 山の鳥ですし？
[手嶋|sprite=teshima,pose=bitter] 持ってねえよ！ 

[指令] sprites: clear
[旁白] 言い合いながら坂を下りる。
[旁白] 秋風が頬を撫で、ほんの少しだけ気持ちが軽くなる。  
[真波|sprite=manami,pose=bitter] ウォーミングアップはもういいや、早く登りたいなぁ～
[旁白|sprite=manami,pose=bitter] ソワソワしてる真波の様子に、つい笑みがこぼれた。
[手嶋|sprite=teshima,pose=normal] インハイのことばかり考えてたけど……
[手嶋|sprite=teshima,pose=smile] こうやって気楽に走るのも悪くないな～

[指令] sprites: clear
[旁白] だが、その言葉に真波は眉をひそめた。
[真波|sprite=manami,pose=bitter] ひどいです、手嶋さん！
[真波|sprite=manami,pose=bitter] 俺にはまだ一年あるんだから！
[旁白|sprite=manami,pose=bitter] 思わず吹き出した。
[旁白|sprite=teshima,pose=normal] どうやら、この子にも効くツボがあるらしい～
[手嶋|sprite=teshima,pose=normal] ははっ、そういえば聞いたぞ——
[手嶋|sprite=teshima,pose=smile] お前、主将になったんだってな！
[真波|sprite=manami,pose=bitter] そうなんですよ……
[真波|sprite=manami,pose=bitter] 毎日悠人やバシくんや高田城に追い回されて、
[真波|sprite=manami,pose=bitter] こっそり抜け出すのも大変です～  
[手嶋|sprite=teshima,pose=bitter] それでも抜け出してるじゃないか！
[旁白|sprite=manami,pose=bitter] 嘆く真波に、俺も「分かる分かる」とうなずいた。
[真波|sprite=manami,pose=normal] 手嶋さん、主将で一番難しいことって何だと思う？

[选择]
- みんなを勝利へ導くこと -> scene_hill_climb_answer1_1
- チームで一番強い存在になること -> scene_hill_climb_answer1_2
- 毎日部誌を書くこと -> scene_hill_climb_answer1_3 | set: {"manami": "+1"}


## Scene: scene_hill_climb_answer1_1
- BG: outdoor_climb
- BGM: climb

[手嶋|sprite=teshima,pose=bitter] たぶん……みんなを勝利に導くっていう、そのプレッシャーじゃないかな。
[真波|sprite=manami,pose=bitter] ですよね……実は俺、それが一番苦手なんです。

[旁白|sprite=manami,pose=bitter] 普段と違って、真波が珍しく落ち込んだ表情を見せた。
[手嶋|sprite=teshima,pose=normal] おいおい、考えすぎるなよ！
[旁白|sprite=teshima,pose=normal] 俺は慌てて声をかける。
[手嶋|sprite=teshima,pose=normal] 箱学は一人ひとりが強いチームだろ？
[手嶋|sprite=teshima,pose=smile] 主将が全部背負う必要なんてない、仲間に任せればいいんだ！
[真波|sprite=manami,pose=smile] ……そっか。そうですね～
[指令] Sprites: Clear
[旁白] 真波は少し安心したように笑った。 

-> scene_hill_climb_blocker_part2


## Scene: scene_hill_climb_answer1_2
- BG: outdoor_climb
- BGM: climb

[手嶋|sprite=teshima,pose=bitter] みんな、主将はチームで一番強い人じゃなきゃって思ってるんじゃないかな。

[指令] sprites: clear
[旁白] 当時、何度も挑まれて……
[旁白] だって、俺は弱かったから……
[旁白] そう言いながら少し胸が痛んだ……
[旁白] 本気で「公貴を主将にした方がいいんじゃないか」って考えた時期もあった……
[旁白|sprite=manami,pose=normal] そんな俺の言葉に、真波はにやりと笑って返してきた。
[真波|sprite=manami,pose=normal] じゃあ俺、欠席率で一番ってことで最強ってことにしていい？ 
[手嶋|sprite=teshima,pose=smile] ははは～ある意味、君は三年生に昇級した時点で、もう最強だよ！
[真波|sprite=manami,pose=smile] へへへ～
[手嶋|sprite=teshima,pose=smile] 褒めてるんじゃないぞ！
[旁白|sprite=teshima,pose=normal] 真波はとても嬉しそうだった――

-> scene_hill_climb_blocker_part2


## Scene: scene_hill_climb_answer1_3
- BG: outdoor_climb
- BGM: climb

[指令] SFX: correct_answer

[手嶋|sprite=teshima,pose=normal] 君にとって一番大変なのは……  
[手嶋|sprite=teshima,pose=smile] たぶん毎日部誌を書かなきゃいけないこと？
[真波|sprite=manami,pose=bitter] うわあああ……！
[真波|sprite=manami,pose=bitter] 手嶋さん、それは本当に無理です……

[指令] sprites: clear
[旁白] 真波が半泣きになってこちらを見てきた。
[旁白|sprite=teshima,pose=bitter] どうやら一番の弱点を突いたらしい。
[真波|sprite=manami,pose=bitter] 部誌は主将が必ず書くって、誰が決めたんですか……
[真波|sprite=manami,pose=bitter] 最近しょっちゅう部誌を書かされる……
[手嶋|sprite=teshima,pose=smile] ははははは！やっぱりそこか〜
[真波|sprite=manami,pose=bitter] 高田城くんたち全然融通利かないんですよ！
[真波|sprite=manami,pose=bitter] 代わりに書いてくれよ！
[手嶋|sprite=teshima,pose=normal] 俺だって昔はよく遅くまで残って書いてたんだぞ。
[手嶋|sprite=teshima,pose=smile] 懐かしいなあ〜〜
[真波|sprite=manami,pose=bitter] ……じゃあ、どうしても書けなかったら、
[真波|sprite=manami,pose=normal] 手嶋さんに聞いちゃっていいですか？

[指令] sprites: clear
[旁白] 大きな目をぱちぱちさせて、
[旁白] 子犬みたいにこちらを見つめてくる真波。
[手嶋|sprite=teshima,pose=bitter] 参考になるかわからないけど……
[手嶋|sprite=teshima,pose=smile] まあ、いいよ。
[真波|sprite=manami,pose=smile] やった〜！
[旁白|sprite=manami,pose=smile] 真波はとても嬉しそうだった——

-> scene_hill_climb_blocker_part2


## Scene: scene_hill_climb_blocker_part2
- BG: outdoor_climb
- BGM: climb

[指令] sprites: clear
[旁白] 真波は主将としての苦労を痛感しているようだ。
[旁白] そして——
[手嶋|sprite=teshima,pose=bitter] 箱学の主将はもっと大変だ——
[真波|sprite=manami,pose=surprise] どうして？

[选择]
- 人の名前覚えられない -> scene_hill_climb_answer2_1 | set: {"manami": "+1"}
- 箱学は強者揃い -> scene_hill_climb_answer2_2
- 2年分の敗北を背負ってる -> scene_hill_climb_answer2_3

## Scene: scene_hill_climb_answer2_1
- BG: outdoor_climb
- BGM: climb

[指令] SFX: correct_answer

[手嶋|sprite=teshima,pose=normal] だって真波、
[手嶋|sprite=teshima,pose=bitter] 人の名前覚えられないんだろう……
[真波|sprite=manami,pose=bitter] うわっ！？
[真波|sprite=manami,pose=bitter] な、なんで知ってるんですか！？

[指令] sprites: clear
[旁白] 自転車じゃなかったら、きっと飛びついて鼻水と涙を撒き散らしてただろう……
[手嶋|sprites=teshima:bitter@0.7,manami:bitter@0.3] だってさ、俺の名前すら危ういんだもん。
[手嶋|sprites=teshima:smile@0.7,manami:bitter@0.3] それで部員30人以上の名前を覚えるとか無理だろ？
[真波|sprites=teshima:normal@0.7,manami:bitter@0.3] そ、そんなことないです！
[真波|sprites=teshima:normal@0.7,manami:bitter@0.3] 手嶋さんの名前を忘れるわけないじゃないですか！

[指令] sprites: clear
[旁白] 真波が必死に抗議してきた。
[手嶋|sprite=teshima,pose=smile] じゃあ俺の名前、言ってみろよ？
[真波|sprite=manami,pose=bitter] えっと……その……あの………………
[真波|sprite=manami,pose=normal] 純ちゃん？
[手嶋|sprite=teshima,pose=smile] ブーブー！違う——
[真波|sprite=manami,pose=surprise] えー？葦木場さんはそう呼んでますよ！？
[手嶋|sprite=teshima,pose=blush] あれは子供の頃のあだ名！

[指令] sprites: clear
[旁白] ……でもシキバだけは、今でも変わらず呼んでくれるんだな。
[手嶋|sprite=teshima,pose=bitter] とにかく君には本当に難しいだろ？
[真波|sprite=manami,pose=serious] ひどい！さっきのは冗談ですって！
[真波|sprite=manami,pose=normal] 純太さんの名前、忘れるわけないじゃないですか～
[手嶋|sprite=teshima,pose=blush] ……お前、最初から俺からかってたのか？
[真波|sprite=manami,pose=smile] さあ？
[旁白] 真波は得意げに笑い、こちらを挑発するように見つめてきた。
[旁白]

@if manami == 2 -> scene_hill_climb_blocker_special
@if manami < 2 -> scene_hill_climb_blocker_part3


## Scene: scene_hill_climb_answer2_2
- BG: outdoor_climb
- BGM: climb

[手嶋|sprites=teshima:normal@0.7,manami:normal@0.3] 箱学の連中はみんな強すぎて、まとめるのが難しいんじゃない？
[手嶋|sprites=teshima:normal@0.7,manami:normal@0.3] それに——
[手嶋|sprites=teshima:bitter@0.7,manami:normal@0.3] 一番まとまりにくいのは君自身だよ！
[真波|sprite=manami,pose=bitter] ひどいよ、俺けっこうまとまって動けるんですよ！
[真波|sprite=manami,pose=bitter] 基本的に登れって言われたら登るんですし！
[手嶋|sprite=teshima,pose=bitter] 登るだけかよ……
[真波|sprite=manami,pose=smile] へへへ～

-> scene_hill_climb_blocker_part3

## Scene: scene_hill_climb_answer2_3
- BG: outdoor_climb
- BGM: climb

[旁白|sprite=teshima,pose=bitter] 二連敗を背負うプレッシャーは計り知れない……
[指令] sprites: clear
[旁白] 言いかけて、結局飲み込んだ。
[旁白|sprite=manami,pose=normal] 事実かもしれないけど、この繊細そうな少年に背負わせるには重すぎる。
[旁白|sprite=teshima,pose=bitter] もし自分だったら、とっくに折れていただろう……
[旁白|sprite=teshima,pose=bitter] だからこそ、彼は自分よりずっと強いんだ。

[指令] sprites: clear
[旁白] とにかく、どんな結果になろうと、こいつなら乗り越えていけるはずだ。
[真波|sprite=manami,pose=normal] ？
[手嶋|sprite=teshima,pose=bitter] いや、何でもない。——もうすぐ折り返し地点だぞ。
[真波|sprite=manami,pose=smile] はいっ！

-> scene_hill_climb_blocker_part3


## Scene: scene_hill_climb_blocker_special
- BG: outdoor_climb
- BGM: blocker_special_warm

[指令] SFX: road_bike
[旁白] 真波と俺は裏門坂へと進んでいった―― 
[真波|sprite=manami,pose=serious] 手嶋さん、大学でも自転車続けるんでしょ？
[旁白|sprite=manami,pose=serious] 真波が横顔を俺に向け、風が彼の髪を乱した――
[旁白|sprite=teshima,pose=bitter] その隙間から見える笑みは、
[旁白|sprite=teshima,pose=bitter] まるであのインハイの時のようで……
[旁白|sprite=teshima,pose=serious] 思わず歯を食いしばり、彼の前へ飛び出した！
[手嶋|sprite=teshima,pose=normal] ああ、俺ごときが言うのも何だが、
[手嶋|sprite=teshima,pose=smile] まだ引退する気はないぞ——
[手嶋|sprite=teshima,pose=normal] それに勉強の合間に走れば、ちょうどいい運動にもなるしな～
[指令] sprites: clear
[旁白] 振り返ると、真波が納得したようにうなずき、軽く加速してすぐ横に並んできた。
[真波|sprite=manami,pose=serious] じゃあ、今度一緒に鍛えに行っていいですか？
[旁白|sprite=manami,pose=smile] そう言いながら、わざと自転車をこちらに寄せてくる――
[手嶋|sprite=teshima,pose=blush] おい、近づきすぎだって！
[旁白|sprite=manami,pose=serious] 真波は挑発的に笑い、視線で挑んでくる――
[手嶋|sprite=teshima,pose=serious] 受験生を甘く見るなよ～来年になれば分かるさ！
[真波|sprite=manami,pose=serious] 手嶋さんが先に行っても、すぐ追いつきますけどね〜
[旁白|sprite=teshima,pose=bitter] ……自転車の話になると目が輝き出す。
[旁白|sprite=teshima,pose=bitter] 誰が自転車バカだって言ったっけ？
[真波|sprite=manami,pose=serious] やっぱり手嶋さんは自転車バカです、
[真波|sprite=manami,pose=serious] 自転車の話になるとずっとニヤニヤする～
[旁白|sprite=teshima,pose=blush] ……え？
[旁白|sprite=teshima,pose=blush] もう一人のバカに先を越された？
[手嶋|sprite=teshima,pose=serious] 俺、笑ったか？
[真波|sprite=manami,pose=serious] 笑ってますよ～
[手嶋|sprite=teshima,pose=serious] お前だってずっと笑ってるだろ！
[真波|sprite=manami,pose=serious] 俺だって、自転車だけが理由じゃないんですから～ 
[手嶋|sprite=teshima,pose=serious] ……じゃあ何だよ？
[真波|sprite=manami,pose=serious] だって今日はすごく楽しいんです！
[真波|sprite=manami,pose=smile] 手嶋さんと一緒に裏門坂に挑戦できて～
[旁白|sprite=teshima,pose=blush] うっ……
[旁白|sprite=teshima,pose=blush] その視線、ちょっと怖いんだけど……
[旁白|sprite=teshima,pose=bitter] 後で出しすぎで起き上がれなくなったりしないか……
[真波|sprite=manami,pose=serious] へへ、それじゃあ手嶋さん、よろしくお願いします！
[真波|sprite=manami,pose=smile] そーれ——
[旁白|sprite=manami,pose=smile] 真波は風のように坂を駆け上がった！
[指令] sprites: clear
[旁白] 俺は慌ててペダルを踏み込み、必死に追いかけた―― 

[指令] BGM: fade blocker_special_warm 600 -> play climb
-> scene_hill_climb_blocker_part3


## Scene: scene_hill_climb_blocker_part3
- BG: school_gate
- BGM: climb

[旁白|sprite=manami,pose=normal] 真波と激しい勝負を繰り広げた。
[旁白|sprite=teshima,pose=normal] 少なくとも俺にとってはそうだった。
[旁白|sprite=teshima,pose=smile] だって6分台で走り切ったんだから……
[旁白|sprite=teshima,pose=bitter] こいつがあったとはいえ、悔しさは拭えない。
[旁白|sprite=manami,pose=smile] けれど、真波の心から楽しそうな顔を見ていると、
[旁白|sprite=teshima,pose=bitter] まあ～悪くないかもなって思えた。
[手嶋|sprite=teshima,pose=smile] ……なあ、もう一回やる？
[旁白|sprite=teshima,pose=bitter] どうせ夜も勉強できないし——
[真波|sprite=manami,pose=bitter] 手嶋さんのお誘いは大変——魅力的なんですけど、
[真波|sprite=manami,pose=bitter] 今日はもっと大事な用事があるんです。
[旁白|sprite=manami,pose=bitter] 真波は苦笑いを浮かべた。
[旁白|sprite=teshima,pose=blush] 坂バカに断られるなんて、予想外だ！
[手嶋|sprite=teshima,pose=surprise] そういえば今日学校どうしたんだ？どうして千葉に？
[真波|sprite=manami,pose=normal] さっき葦木場さんについて来たんですよ。
[真波|sprite=manami,pose=normal] どうしても君に会いたいって騒いでて—— 
[真波|sprite=manami,pose=smile] それに、今日は手嶋さんの誕生日だって聞いたんです。
[手嶋|sprite=teshima,pose=surprise] あっ——！
[真波|sprite=manami,pose=normal] だから早く部室に行きましょう！
[真波|sprite=manami,pose=smile] みんな待ってますよ～
[指令] sprites: clear
[旁白] 真波にぐいぐいと腕を引かれ、俺は自転車部へと向かった—— 

-> scene_birthday_party


## Scene: scene_birthday_party
- BG: party_room
- BGM: party

[指令] SFX: party_cracker
[全員] お誕生日おめでとう、手嶋さん——————
[手嶋|sprite=teshima,pose=surprise] みんな……
[手嶋|sprite=teshima,pose=surprise] こっそり誕生日パーティーを準備してくれてたのか！？
[小野田|sprite=onoda,pose=normal] へへっ、いつも手嶋さんにお世話になってますから～
[手嶋|sprite=teshima,pose=moved] ……ありがとう、みんな！
[手嶋|sprite=teshima,pose=moved] 本当に感動したよ～～～！
[葦木場|sprite=ashikiba,pose=smile] 純ちゃん！おめでとう～！
[真波|sprite=manami,pose=smile] へへへ、俺もちゃっかり混ざってますよ～
[手嶋|sprite=teshima,pose=surprise] 総北だけじゃなく、箱学の人まで！？
[青八木|sprite=aoyagi,pose=normal] 俺たちだけじゃ、純太を止められないと思ったからな……
[今泉|sprite=imaizumi,pose=smile] バレたら、サプライズが台無しです。
[古賀|sprite=koga,pose=normal] 俺一人でも十分だったん（メガネが光る）——
[旁白|sprite=teshima,pose=bitter] ……そうか。
[旁白|sprite=teshima,pose=bitter] だから部室に来るのを必死で止めようとしたのか。
[鳴子|sprite=naruko,pose=normal] パーマ先輩！
[鳴子|sprite=naruko,pose=normal] 今日は腹いっぱい食べて、思いっきり騒ぎましょうや！
[镝木|sprite=kaburagi,pose=normal] うおっ！？タコ焼き……こんなに山盛り！？

[指令] sprites: clear
[旁白] 笑い声と歓声が響き渡り、部室はお祭り騒ぎに包まれた。
[旁白] これこそが総北らしい光景だ——


-> scene_birthday_party_part1

## Scene: scene_birthday_party_part1
- BG: party_room
- BGM: party

[小野田|sprite=onoda,pose=normal] こんなに賑やかだったのはインタハイ以来ですね～
[手嶋|sprite=teshima,pose=moved] ああ……本当に楽しいなあ～
[小野田|sprite=onoda,pose=normal] へへっ、手嶋さんが喜んでくれたなら、
[小野田|sprite=onoda,pose=smile] 僕たち大成功ですね！
[镝木|sprite=kaburagi,pose=normal] お待たせしました！これからが本番っす！
[鳴子|sprite=naruko,pose=normal] ジャジャーン！王様ゲームや！
[小野田|sprite=onoda,pose=normal] 王様なった人は、誰か一人選んで、
[镝木|sprite=kaburagi,pose=normal] 『告白か』『イタズラするか』やってもらうんです。

[指令] sprites: clear
[旁白] 鳴子はお箸を束ねて持ち、順番にみんなに引かせ……
[旁白|sprite=naruko,pose=normal] 最後にニヤリと俺の前に差し出した——
[鳴子|sprite=naruko,pose=normal] さあさあパーマ先輩！一本引いてみてや～ 
[旁白|sprite=teshima,pose=normal] 一本抜くと、
[旁白|sprite=teshima,pose=surprise] 先端が真っ赤だった……
[鳴子|sprite=naruko,pose=normal] おおっと！パーマ先輩が王様や～～！  
[小野田|sprite=onoda,pose=smile] わあ～おめでとうございます、手嶋さん！
[镝木|sprite=kaburagi,pose=normal] さあ手嶋さん！誰を選ぶんすか？早く早く～
[旁白|sprite=teshima,pose=normal] ……なんかみんな、
[旁白|sprite=teshima,pose=bitter] わざと仕組んでない？
[旁白|sprite=teshima,pose=bitter] どうやら今日は、
[旁白|sprite=teshima,pose=bitter] 感動の涙を流すことになるだろう……

[指令] sprites: clear
[旁白] 覚悟を決め、俺はそっと口を開いた——

[选择]
- 四番 -> scene_birthday_party_aoyagi | enabledIf: { "aoyagi": "== 2" }
- 二番 -> scene_birthday_party_imaizumi | enabledIf: { "imaizumi": "== 2" }
- 七番 -> scene_birthday_party_koga | enabledIf: { "koga": "== 2" }
- 十一番 -> scene_birthday_party_ashikiba | enabledIf: { "ashikiba": "== 2" }
- 十三番 -> scene_birthday_party_manami | enabledIf: { "manami": "== 2" }
- 五番 -> scene_birthday_party_teshima

## Scene: scene_birthday_party_aoyagi
- BG: party_room
- BGM: blocker_special_warm

[指令] sprites: clear
[旁白] 純太——
[旁白|sprite=aoyagi,pose=blush] 青八木は顔を赤らめて立ち上がった。
[旁白|sprite=aoyagi,pose=blush] どうやら彼に当たったようだ——
[青八木|sprite=aoyagi,pose=blush] ……純太は、俺にとって一番大切な人だ。
[鳴子|sprite=naruko,pose=normal] ほほう～これは“告白”を選んだってことやな？
[青八木|sprite=aoyagi,pose=bitter] 一年の頃は……気持ちをうまく伝えられなくて、
[青八木|sprite=aoyagi,pose=bitter] いつも自分は役立たずなんじゃないかと思ってた。
[青八木|sprite=aoyagi,pose=bitter] けど純太は……
[青八木|sprite=aoyagi,pose=normal] そんな俺を一度も拒まなかった。
[青八木|sprite=aoyagi,pose=normal] いつだって前に引っ張ってくれて……
[青八木|sprite=aoyagi,pose=smile] チーム二人を組めたことが、
[青八木|sprite=aoyagi,pose=smile] 俺の人生で一番の幸せだって、ずっと思ってるんだ。
[手嶋|sprite=teshima,pose=moved] 青八木……
[青八木|sprite=aoyagi,pose=normal] だからこれからも……
[青八木|sprite=aoyagi,pose=smile] ずっと純太の隣にいたい。
[手嶋|sprite=teshima,pose=moved] 君もそう思ってくれて、嬉しいよ～

-> scene_birthday_party_aoyagi_cg 

## Scene: scene_birthday_party_aoyagi_cg
- BG: birthday_party_aoyagi_cg
- BGM: blocker_special_warm

[指令] sprites: clear
[旁白] 青八木が俺の手をしっかりと握った—— 
[手嶋|sprite=teshima,pose=smile] チーム二人は絶対に解散しない！
[旁白|sprite=aoyagi,pose=smile] 青八木が穏やかに微笑んだ——
[青八木|sprite=aoyagi,pose=normal] ああ……
[青八木|sprite=aoyagi,pose=smile] 俺たちは、永遠にチーム二人だ。
[手嶋|sprite=teshima,pose=moved] うん！ 
[青八木|sprite=aoyagi,pose=normal] 言いたいことはこれだけじゃないけど——
[旁白|sprite=aoyagi,pose=normal] 握る手に力を込め、
[旁白|sprite=aoyagi,pose=normal] その瞳はこれまで以上に真っ直ぐだった。
[青八木|sprite=aoyagi,pose=normal] でも純太は、今のままで十分だよ。
[手嶋|sprite=teshima,pose=smile] ？

-> scene_birthday_party_part2


## Scene: scene_birthday_party_imaizumi
- BG: party_room
- BGM: blocker_special_warm


[指令] sprites: clear
[旁白] 今泉がシュッと立ち上がり、そのまま黙り込んだ……
[今泉|sprite=imaizumi,pose=blush] ……
[鳴子|sprite=naruko,pose=normal] はよ言えや！
[鳴子|sprite=naruko,pose=normal] 告白かイタズラか、どっちや～？
[手嶋|sprite=teshima,pose=normal] 俺が卒業するのがそんなに寂しいのか？
[今泉|sprite=imaizumi,pose=blush] ……ち、違います！
[手嶋|sprite=teshima,pose=serious] じゃあ、早く卒業してほしいってことか？
[今泉|sprite=imaizumi,pose=blush] そ、そういうわけじゃ……！
[手嶋|sprite=teshima,pose=serious] ほらやっぱり、君みたいなエリートは俺みたいな凡人を見下して@q~￥uzvx@！^uz。~￥@vx！……
[今泉|sprite=imaizumi,pose=blush] もう“エリート”なんて呼ばないでください！
[手嶋|sprite=teshima,pose=smile] ははははは——
[今泉|sprite=imaizumi,pose=blush] 努力してる姿、全部見てきたんです。
[今泉|sprite=imaizumi,pose=blush] だから……憧れてました。
[手嶋|sprite=teshima,pose=moved] 今泉……まさかお前、こんな凡人に憧れてたのか？お前ほどの実力者なのに！

-> scene_birthday_party_imaizumi_cg


## Scene: scene_birthday_party_imaizumi_cg
- BG: birthday_party_imaizumi_cg
- BGM: blocker_special_warm

[旁白|sprite=teshima,pose=moved] 俺は感極まって、
[旁白|sprite=teshima,pose=moved] 左手で今泉の頭を抱き寄せ、
[旁白|sprite=teshima,pose=smile] 右手でその髪をくしゃっと撫でた――
[手嶋|sprite=teshima,pose=smile] 来年は頼るぞ！我らのエースなんだからな！
[今泉|sprite=imaizumi,pose=smile] ……はい。それと……
[手嶋|sprite=teshima,pose=smile] ？
[今泉|sprite=imaizumi,pose=blush] ちょ、ちょっと……離してください！息が……できない！
[手嶋|sprite=teshima,pose=serious] は？背が高いからか？やっぱりエリートってのはそういうことか@q~￥uzvx@！^uz。~￥@vx！……
[今泉|sprite=imaizumi,pose=blush] だから違うって言ってるでしょう！

-> scene_birthday_party_part2

## Scene: scene_birthday_party_koga
- BG: party_room
- BGM: blocker_special_warm

[古賀|sprite=koga,pose=normal] お前には言うことなんてない。
[手嶋|sprite=teshima,pose=serious] は？
[古賀|sprite=koga,pose=normal] ようやくお前みたいな弱虫の必死な顔を、目の前で見なくて済むんだ。
[手嶋|sprite=teshima,pose=serious] 今日は俺の誕生日なんだぞ、
[手嶋|sprite=teshima,pose=serious] せめて一言くらい良いこと言えよ！
[古賀|sprite=koga,pose=normal] 正直、お前は明らかに弱いくせに、いつも俺の前に現れる。
[古賀|sprite=koga,pose=normal] 何度置いて行かれても、歯を食いしばって必死に追ってくる。
[古賀|sprite=koga,pose=normal] ……だから、心底うっとおしいんだ。
[手嶋|sprite=teshima,pose=serious] この鬼畜メガネ！
[古賀|sprite=koga,pose=normal] ふん、友達になるつもりなんてさらさらない。
[古賀|sprite=koga,pose=normal] でもな——もし弱すぎるからって自転車をやめたりしたら……
[旁白|sprite=koga,pose=normal] 普段一番毒舌な彼が、この瞬間だけは誰よりも真剣だった——

-> scene_birthday_party_koga_cg

## Scene: scene_birthday_party_koga_cg
- BG: birthday_party_koga_cg
- BGM: blocker_special_warm

[古賀|sprite=koga,pose=normal] 世界の果てにいても追いかけて行って、
[古賀|sprite=koga,pose=smile] 文句を言ってやる！
[旁白|sprite=koga,pose=smile] 公貴にラグビー選手並みのがっしりした腕で首を締め上げられ、
[旁白|sprite=teshima,pose=blush] 瞬く間に息苦しくなった……
[旁白|sprite=teshima,pose=blush] とっさに肘で脇腹を突いて反撃したけれど、
[旁白|sprite=teshima,pose=blush] 全然効かなかった……
[手嶋|sprite=teshima,pose=blush] 絶対に君より先に諦めたりしない！
[古賀|sprite=koga,pose=smile] そのしつこさこそ、お前の一番の武器だ。
[手嶋|sprite=teshima,pose=blush] 鬼畜メガネ！
[古賀|sprite=koga,pose=normal] だから大学でもちゃんと自転車を続けろよ。
[古賀|sprite=koga,pose=smile] ……期待してるからな。
[手嶋|sprite=teshima,pose=blush] 腹が立つ！
[手嶋|sprite=teshima,pose=blush] 自転車を一生懸命漕いで、みんなを驚かせてやる！
[古賀|sprite=koga,pose=smile] ははははは〜 

-> scene_birthday_party_part2

## Scene: scene_birthday_party_ashikiba
- BG: party_room
- BGM: blocker_special_warm

[葦木場|sprite=ashikiba,pose=bitter] 純ちゃんごめんね。
[葦木場|sprite=ashikiba,pose=bitter] あれ以来一度も誕生日を祝ってあげられなくて……  
[手嶋|sprite=teshima,pose=normal] これからいくらでも祝えるさ！
[葦木場|sprite=ashikiba,pose=normal] うん——
[葦木場|sprite=ashikiba,pose=smile] これから毎年、純ちゃんと一緒に誕生日を祝うよ～
[旁白|sprite=teshima,pose=smile] これからの誕生日も、シキバが祝ってくれるんだ……
[旁白|sprite=teshima,pose=smile] なんて幸せなんだろう～
[手嶋|sprite=teshima,pose=normal] そういえば来月は君の誕生日だよね？
[葦木場|sprite=ashikiba,pose=smile] ううん！
[手嶋|sprite=teshima,pose=smile] 欲しいプレゼントはあるの？

-> scene_birthday_party_ashikiba_cg

## Scene: scene_birthday_party_ashikiba_cg
- BG: birthday_party_ashikiba_cg
- BGM: blocker_special_warm

[葦木場|sprite=ashikiba,pose=normal] 純ちゃん～
[手嶋|sprite=teshima,pose=blush] 何だ？
[葦木場|sprite=ashikiba,pose=smile] 僕の欲しい誕生日プレゼントは、純ちゃんなんだ～
[旁白|sprite=ashikiba,pose=smile] シキバは子供の頃みたいに、俺をひょいと抱き上げた——
[手嶋|sprite=teshima,pose=blush] わ、わかった！
[手嶋|sprite=teshima,pose=blush] その日は一日中付き合うから……まずは降ろせって！
[葦木場|sprite=ashikiba,pose=bitter] あれ、そういうじゃなかったんだけど……
[葦木場|sprite=ashikiba,pose=smile] でも嬉しいよ！
[葦木場|sprite=ashikiba,pose=smile] また純ちゃんと一緒に遊べるんだもん！
[旁白|sprite=teshima,pose=normal] まるで幼い頃に戻ったようだった——
[旁白|sprite=teshima,pose=blush] ただし今の葦木場の体格で、
[旁白|sprite=teshima,pose=blush] 子供の頃みたいに飛びつかれたら……
[旁白|sprite=teshima,pose=bitter] 次こそは素早く避けるのが賢明だろう！

-> scene_birthday_party_part2

## Scene: scene_birthday_party_manami
- BG: party_room
- BGM: blocker_special_warm

[真波|sprite=manami,pose=normal] 俺「イタズラ」選んでもいい？
[鳴子|sprite=naruko,pose=normal] おお、やっとルール分かる奴が来たんや！
[真波|sprite=manami,pose=normal] テレビで見たことあるから大丈夫ですよ～
[手嶋|sprite=teshima,pose=normal] 真波なんか俺に言うこともないだろ、
[手嶋|sprite=teshima,pose=bitter] インハイで関わっただけなんだし？

-> scene_birthday_party_manami_cg

## Scene: scene_birthday_party_manami_cg
- BG: birthday_party_manami_cg
- BGM: blocker_special_warm

[指令] sprites: clear
[旁白] 真波が突然すっと近づいてきて、俺の頬に軽くキスをした——
[手嶋|sprite=teshima,pose=blush] あああああっ！？ 
[手嶋|sprite=teshima,pose=blush] な、な、何やってんだ！
[真波|sprite=manami,pose=serious] ん？イタズラってこういうでしょ？
[手嶋|sprite=teshima,pose=blush] 全然違うわ！
[真波|sprite=manami,pose=smile] じゃあ告白を言うね～
[手嶋|sprite=teshima,pose=blush] いやいや、もういい！
[手嶋|sprite=teshima,pose=blush] そこまで真剣にやらなくても——
[真波|sprite=manami,pose=serious] 手嶋さんが好きです！
[手嶋|sprite=teshima,pose=blush] もういいよ！
[手嶋|sprite=teshima,pose=blush] 君がルール分からないこと知ってるから！
[真波|sprite=manami,pose=serious] あの試合で、
[真波|sprite=manami,pose=serious] 俺に本当の“自由”を教えてくれたのは手嶋さんだから——  
[手嶋|sprite=teshima,pose=blush] ……お前は確かに自由すぎるよ！ 
[真波|sprite=manami,pose=serious] 次はどんなコーナー？ 
[真波|sprite=manami,pose=smile] 手嶋さん、このまま一緒にぬけませんか？
[手嶋|sprite=teshima,pose=blush] だから何のテレビ見てだよ！
[手嶋|sprite=teshima,pose=blush] そういう遊びじゃないって言ってるだろ！

-> scene_birthday_party_part2

## Scene: scene_birthday_party_teshima
- BG: party_room
- BGM: party

[鳴子|sprite=naruko,pose=normal] 5番？誰も持ってないよな？
[镝木|sprite=kaburagi,pose=normal] じゃあ次のコーナーにする？
[小野田|sprite=onoda,pose=smile] 手嶋さんがどうですか？

-> scene_birthday_party_part2

## Scene: scene_birthday_party_part2
- BG: party_room
- BGM: blocker_special_warm

[指令] sprites: clear
[旁白] パーティーもそろそろお開きに近づいていた。
[手嶋|sprite=teshima,pose=normal] この数年間、本当にありがとうな～
[手嶋|sprite=teshima,pose=normal] みんなと一緒に自転車で走った日々、
[手嶋|sprite=teshima,pose=moved] 一生忘れないよ……
[旁白|sprite=teshima,pose=moved] ちょっと卒業スピーチみたいだけど、
[旁白|sprite=teshima,pose=moved] ウソじゃなくて全部本音だ——
[手嶋|sprite=teshima,pose=smile] 総北は最高のチームだ！
[指令] sprites: clear
[全員] おお——


[镝木|sprite=kaburagi,pose=normal] でも箱学のやつらまで一緒に「おー！」って言うのはどうなんすか？
[指令] sprites: clear
[旁白] ドタバタして、ときには言い合いもあるけど——
[旁白] それでも、これこそが総北なんだと思う。  
[真波|sprite=manami,pose=normal] で、次はどんなコーナー？
[手嶋|sprite=teshima,pose=normal] ここにいる全員、自転車乗りなんだけど？
[鳴子|sprite=naruko,pose=normal] そりゃあ決まってるやろ！
[鳴子|sprite=naruko,pose=normal] みんなでサイクリングに行くんや！
[旁白|sprite=teshima,pose=normal] やっぱり俺たちが集まると、
[旁白|sprite=teshima,pose=normal] いつも同じ結末になるんだな〜
[旁白|sprite=teshima,pose=bitter] 未来に何が待っているかなんて分からない。
[旁白|sprite=teshima,pose=normal] でも、ここにいる誰一人、
[旁白|sprite=teshima,pose=smile] 自転車を簡単に手放すことはないと信じてる。
[旁白|sprite=teshima,pose=normal] 自転車に乗り続ける限り、
[旁白|sprite=teshima,pose=normal] 俺たちは繋がっていられる—— 
[旁白|sprite=teshima,pose=normal] だって——
[旁白|sprite=teshima,pose=smile] 自転車は本当に楽しいんだから！
[手嶋|sprite=teshima,pose=normal] じゃあみんな——
[手嶋|sprite=teshima,pose=smile] 楽しいサイクリングいこうぜ！
[全員] おお——
[指令] sprites: clear
[旁白] 「終わり」
[旁白] ご視聴ありがとうございました！


-> scene_ending


## Scene: scene_ending
- BGM: blocker_special_warm
