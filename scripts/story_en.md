# Title: Junta's Birthday
# StartScene: scene_prologue

## Scene: scene_prologue
- BG: sky
- BGM: calm

[Narrator] On a September morning, the air still carried the warmth of summer.
[Narrator] Wearing the long-sleeved autumn uniform, a thin sheen of sweat forms the moment you step outside...
[Narrator] As a prospective examinee, today remains just another ordinary day.
[Narrator] I mounted my beloved bike and headed toward school.

-> scene_school_road

## Scene: scene_school_road
- BG: outdoor_climb
- BGM: calm

[Teshima|sprite=teshima,pose=normal] You might not tell by looking at me.
[Teshima|sprite=teshima,pose=normal] But I'm actually the captain of Sohoku High's cycling club.
[指令] SFX: road_bike
[Teshima|sprite=teshima,pose=normal] The cycling club is the kind of club where we ride bikes every day, 
[Teshima|sprite=teshima,pose=normal] Whether you're an exam prep student or not.
[Teshima|sprite=teshima,pose=normal] But we just competed in the high school league last month.
[Teshima|sprite=teshima,pose=smile] So we'll be handing over the reins to the next captain soon.
[Teshima|sprite=onoda,pose=normal] The next captain, Onoda, is way stronger than me!
[Teshima|sprite=onoda,pose=normal] Even though he's a year younger than me, 
[Teshima|sprite=onoda,pose=smile] He's won the high school league championship two years in a row!
[Teshima|sprite=teshima,pose=bitter] Compared to him, I'm just an ordinary guy...
[Teshima|sprite=teshima,pose=bitter] I only joined the league in my senior year...

-> scene_podium

## Scene: scene_podium
- BG: podium
- BGM: calm

[Teshima|sprite=teshima,pose=normal] And it's only thanks to him that I, as captain, got to stand on the championship podium—
[指令] SFX: cheer
[Narrator|sprite=teshima,pose=normal] The scene at the finish line, the spectators' cheers—it's all still vivid in my mind...
[Narrator|sprite=teshima,pose=moved] It remains the most precious experience of my life—

-> scene_school_gate

## Scene: scene_school_gate
- BG: school_gate
- BGM: calm

[指令] SFX: morning_bird
[Teshima|sprite=teshima,pose=normal] After going through the high school league, 
[Teshima|sprite=teshima,pose=smile] This steep hill at the back gate feels like nothing now...
[Narrator|sprite=teshima,pose=normal] Having given my all in the high school league, I can finally—
[Narrator|sprite=teshima,pose=smile] Can "enjoy" pure exam prep life~
[Teshima|sprite=teshima,pose=normal] It's still early. 
[Teshima|sprite=teshima,pose=normal] Should I head to the clubroom to study for a bit?
[选择]
- Go study in the club room -> scene_school_gate_blocker_part1
- Go for a ride -> scene_school_gate_normal

## Scene: scene_school_gate_normal
- BG: school_gate
- BGM: calm

[Teshima|sprite=teshima,pose=normal] Still got stacks of books to get through. 
[Teshima|sprite=teshima,pose=smile] Let's go for a ride first—
[指令] sprites: clear
[？？？] Teshima—
[指令] SFX: kasakasa
[Narrator] Suddenly, I heard someone calling my name...
[Teshima|sprite=hirata,pose=normal] Isn't that Hirata from the next desk?
[Hirata|sprites=teshima:normal@0.7,hirata:smile@0.3] You haven't forgotten, have you? It's our turn for duty today!
[Teshima|sprites=teshima:bitter@0.7,hirata:smile@0.3] Sorry, sorry~ I totally forgot, heh~
[Hirata|sprites=teshima:smile@0.7,hirata:normal@0.3] Seriously, hurry up already~
[指令] sprites: clear
[Narrator] I quickly parked the car and hurried to catch up with Hirata, walking together toward the classroom...
[指令] BGM: fade calm 5000 
[指令] SFX: step
-> scene_lunch_break

## Scene: scene_school_gate_blocker_part1
- BG: school_gate
- BGM: calm

[Teshima|sprite=teshima,pose=normal] Let's go study in the club room.
[指令] sprites: clear
[？？？] Junta—
[指令] SFX: kasakasa
[Narrator] Suddenly, I heard someone calling my name...
[Teshima|sprite=aoyagi,pose=surprise] Aoyagi? What are you doing here!
[Aoyagi|sprite=aoyagi,pose=normal] Junta, thanks for the notes.
[Narrator|sprite=aoyagi,pose=normal] Aoyagi handed me the English notes he borrowed yesterday.
[Teshima|sprites=teshima:smile@0.7,aoyagi:normal@0.3] You didn't have to wait for me at the school gate, did you? 
[Teshima|sprites=teshima:smile@0.7,aoyagi:normal@0.3] I could've come find you before class~
[Aoyagi|sprites=teshima:normal@0.7,aoyagi:normal@0.3] Junta, your first class today is English. 
[Aoyagi|sprites=teshima:normal@0.7,aoyagi:normal@0.3] I didn't want to make you late.
[Aoyagi|sprites=teshima:normal@0.7,aoyagi:normal@0.3] And—
[Narrator|sprite=aoyagi,pose=normal] Aoyagi glanced at me and gave a slight smile.
[Aoyagi|sprite=aoyagi,pose=normal] I know Junta should be arriving soon.
[Teshima|sprite=teshima,pose=moved] Aoyagi...
[Aoyagi|sprite=aoyagi,pose=smile] No one knows Junta better than I do.
[Narrator|sprite=teshima,pose=moved] A wave of warmth washed over me—
[Narrator|sprite=aoyagi,pose=normal] This person before me had fought alongside me for three years since our freshman year.
[Narrator|sprite=aoyagi,pose=normal] He was my best partner—
[Narrator|sprite=aoyagi,pose=normal] Our partnership was seamless, our breathing in perfect sync—
[Narrator|sprite=aoyagi,pose=normal] He is part of my youth—
[Narrator|sprite=teshima,pose=moved] Together, we're the ultimate duo!
[Narrator|sprite=aoyagi,pose=normal] As if reading my mind, Aoyagi responded with unwavering resolve—
[Aoyagi|sprite=aoyagi,pose=normal] Thank you so much for these past three years, Junta. 
[Aoyagi|sprite=aoyagi,pose=smile] Being able to form T2 with you has been the greatest joy of my life!
[Teshima|sprite=teshima,pose=smile] You're exaggerating...
[Teshima|sprite=teshima,pose=moved] But seriously, thank you for these past three years, Aoyagi!
[Narrator|sprite=teshima,pose=bitter] Thinking about it, I suddenly feel so sentimental...
[Narrator|sprite=teshima,pose=bitter] After senior year, we might end up at different universities,
[Narrator|sprite=teshima,pose=bitter] and won't be able to meet like this often anymore...
[Aoyagi|sprite=aoyagi,pose=smile] Junta, if you had a time machine, which day would you most want to go back to?
[Teshima|sprite=teshima,pose=surprise] Why ask that all of a sudden?
[选择]
- The day I gave up cycling -> scene_school_gate_blocker_answer1_1
- The day I met Aoyagi -> scene_school_gate_blocker_answer1_2
- Yesterday？ -> scene_school_gate_blocker_answer1_3 | set: {"aoyagi": "+1"}

## Scene: scene_school_gate_blocker_answer1_1
- BG: school_gate
- BGM: calm

[Teshima|sprite=teshima,pose=bitter] I'd go back to the day I gave up cycling in middle school...
[Narrator|sprite=aoyagi,pose=bitter] Aoyagi's expression turned melancholy.
[Aoyagi|sprite=aoyagi,pose=bitter] If I'd known you back then, I would've pulled you back!
[Aoyagi|sprite=aoyagi,pose=blush] No matter what, I wouldn't let Junta give up cycling—something he loved so much!
[Teshima|sprite=teshima,pose=blush] If it had been Aoyagi, always facing himself head-on, who tried to persuade me...
[Teshima|sprite=teshima,pose=smile] Maybe I really could have...
[Aoyagi|sprite=aoyagi,pose=normal] Junta...
-> scene_school_gate_blocker_part2

## Scene: scene_school_gate_blocker_answer1_2
- BG: school_gate
- BGM: calm

[Teshima|sprite=teshima,pose=normal] I want to go back to the day I met Aoyagi...
[Narrator|sprite=aoyagi,pose=surprise] Junta?
[Teshima|sprites=teshima:normal@0.7,aoyagi:normal@0.3] If we'd formed T2 back then...
[Teshima|sprites=teshima:smile@0.7,aoyagi:normal@0.3] We might have been able to enter the high school league a year earlier...
[Aoyagi|sprite=aoyagi,pose=normal] Junta...
[Aoyagi|sprite=aoyagi,pose=smile] Junta really is a cycling fool...
[Teshima|sprite=teshima,pose=blush] I'm not!

-> scene_school_gate_blocker_part2

## Scene: scene_school_gate_blocker_answer1_3
- BG: school_gate
- BGM: happy

[指令] SFX: correct_answer
[Teshima|sprite=teshima,pose=bitter] I guess I'd most want to go back to yesterday...
[Aoyagi|sprite=aoyagi,pose=surprise] Junta?
[Teshima|sprites=teshima:bitter@0.7,aoyagi:normal@0.3] I bombed the mock exam, so no allowance next month...
[Aoyagi|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] Junta...
[Teshima|sprite=teshima,pose=normal] But—
[Aoyagi|sprite=aoyagi,pose=surprise] ?
[Teshima|sprite=teshima,pose=normal] It just means I have no regrets about the path I've walked so far~
[Teshima|sprite=teshima,pose=smile] Especially since I met you, Aoyagi—
[Aoyagi|sprite=aoyagi,pose=blush] Junta!

[指令] BGM: fade happy 600 -> play calm
-> scene_school_gate_blocker_part2

## Scene: scene_school_gate_blocker_part2
- BG: school_gate
- BGM: calm

[Aoyagi|sprite=aoyagi,pose=normal] So guess which day I most want to go back to?
[选择]
- The day of T2's first victory -> scene_school_gate_blocker_answer2_1 | set: {"aoyagi": "+1"}
- The day we lost to Onoda -> scene_school_gate_blocker_answer2_2
- Yesterday ? -> scene_school_gate_blocker_answer2_3


## Scene: scene_school_gate_blocker_answer2_1
- BG: school_gate
- BGM: calm

[指令] SFX: correct_answer
[Teshima|sprite=teshima,pose=normal] The day of T2's first victory?
[Aoyagi|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] If only I'd let Junta cross the finish line first that day, 
[Aoyagi|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] like in the high school tournament...
[Aoyagi|sprites=teshima:bitter@0.7,aoyagi:bitter@0.3] Then everyone would've realized sooner just how amazing Junta really is!
[Teshima|sprite=teshima,pose=moved] ...
[Aoyagi|sprite=aoyagi,pose=blush] I've been right beside Junta all along, so I know better than anyone!
[Teshima|sprite=teshima,pose=moved] Aoyagi...
[Narrator] 

@if aoyagi == 2 -> scene_school_gate_blocker_special
@if aoyagi < 2 -> scene_school_gate_blocker_part3

## Scene: scene_school_gate_blocker_answer2_2
- BG: school_gate
- BGM: calm

[Teshima|sprite=teshima,pose=normal] The day we lost to Onoda and the others?
[Aoyagi|sprite=aoyagi,pose=bitter] That day, we lost because I was too weak. Junta's tactics were flawless...
[Teshima|sprite=teshima,pose=moved] Aoyagi...
[Teshima|sprite=teshima,pose=bitter] My tactics had plenty of flaws too... And—
[Teshima|sprite=teshima,pose=moved] Without you, Aoyagi, I wouldn't even have the strength to sprint alongside them...
[Aoyagi|sprite=aoyagi,pose=bitter] Junta...

-> scene_school_gate_blocker_part3


## Scene: scene_school_gate_blocker_answer2_3
- BG: school_gate
- BGM: happy

[Teshima|sprite=teshima,pose=normal] Could it be yesterday too?
[Aoyagi|sprite=aoyagi,pose=bitter] Junta...
[Teshima|sprite=teshima,pose=smile] What? Did you bomb the exam too?
[Aoyagi|sprite=aoyagi,pose=bitter] No...
[指令] BGM: fade happy 600 -> play calm

-> scene_school_gate_blocker_part3


## Scene: scene_school_gate_blocker_special
- BG: school_gate
- BGM: blocker_special_warm

[Teshima|sprite=teshima,pose=normal] No matter what time we want to go back to, 
[Teshima|sprite=teshima,pose=smile] Forming T2 sooner is always better...
[Teshima|sprite=aoyagi,pose=bitter] If only I'd met Aoyagi sooner~
[Teshima|sprite=teshima,pose=bitter] If I'd met Aoyagi back in middle school, 
[Teshima|sprite=teshima,pose=bitter] I might not have given up cycling...
[Aoyagi|sprite=aoyagi,pose=normal] Junta...
[Teshima|sprite=teshima,pose=normal] We might've even made it onto the prefectural team together~
[Teshima|sprite=teshima,pose=smile] Because T2 is so strong! We work together so well!
[Aoyagi|sprite=aoyagi,pose=normal] Junta—
[Aoyagi|sprite=aoyagi,pose=normal] No matter when we meet, we'll form T2. Is that what you believe, Junta?
[Teshima|sprite=teshima,pose=smile] Exactly!
[Aoyagi|sprite=aoyagi,pose=smile] So Junta, there's nothing to worry about—
[Teshima|sprite=teshima,pose=surprise] ?
[Aoyagi|sprite=aoyagi,pose=normal] As long as we keep riding, we'll meet like this sooner or later,
[Aoyagi|sprite=aoyagi,pose=normal] Whether now or in the future—
[Aoyagi|sprite=aoyagi,pose=normal] Even if we go to different universities, as long as we keep riding, 
[Aoyagi|sprite=aoyagi,pose=normal] T2 will always be T2!
[Aoyagi|sprite=aoyagi,pose=smile] Because I believe that too!
[Teshima|sprite=teshima,pose=moved] Aoyagi...
[Teshima|sprite=teshima,pose=moved] Honestly, I feel like crying first thing in the morning!
[Narrator|sprite=aoyagi,pose=smile] Aoyagi smiled happily—
[Narrator|sprite=teshima,pose=moved] Whoever said he was quiet and reserved—
[Narrator|sprite=teshima,pose=moved] Now he even knows how to read my mood!
[Narrator|sprite=teshima,pose=smile] I smiled back at him too—

[指令] BGM: fade blocker_special_warm 600 -> play calm

-> scene_school_gate_blocker_part3


## Scene: scene_school_gate_blocker_part3
- BG: school_gate
- BGM: calm

[Aoyagi|sprite=aoyagi,pose=normal] Junta, you mentioned yesterday that it was your turn for duty today—
[Teshima|sprite=teshima,pose=surprise] Oh no! I completely forgot!
[Aoyagi|sprite=aoyagi,pose=normal] I'll park the car for you, go ahead~
[Teshima|sprite=teshima,pose=smile] Thanks~ Good partner~
[指令] sprites: clear
[Narrator] I hurriedly handed the car over to Aoyagi and sped off toward the classroom—
[指令] BGM: fade calm 5000

-> scene_lunch_break

## Scene: scene_lunch_break
- BG: school_classroom
- BGM: lunch_time

[指令] SFX: bell
[Teshima|sprite=teshima,pose=bitter] Phew... Finally, class is over...
[Teshima|sprite=teshima,pose=bitter] Mr. Sato's class is just so tediously long...
[Teshima|sprite=teshima,pose=normal] Let's grab lunch quickly—we've got PE this afternoon.
[选择]
- Eat at the cafeteria -> scene_lunch_break_normal
- Eat in the club room -> scene_lunch_break_blocker


## Scene: scene_lunch_break_normal
- BG: school_corridor
- BGM: lunch_time

[Teshima|sprite=teshima,pose=normal] I Didn't bring lunch today, 
[Teshima|sprite=teshima,pose=smile] So I'd like to eat at the cafeteria~
[指令] sprites: clear
[？？？] ???: Teshima—
[Narrator] Suddenly, I heard someone calling my name—
[Hirata|sprite=hirata,pose=normal] Going to the cafeteria? Let's go together~
[Teshima|sprite=teshima,pose=surprise] You didn't bring lunch today?
[Hirata|sprite=hirata,pose=normal] Just finished the mock exam, I got a bit too relaxed and overslept this morning...
[Teshima|sprite=teshima,pose=smile] Haha, me too~
[Hirata|sprite=hirata,pose=normal] Anyway, I still have some allowance left from the beginning of the month. 
[Hirata|sprite=hirata,pose=smile] Might as well splurge today—
[Teshima|sprite=teshima,pose=normal] Oh, shrimp tempura udon? 
[Teshima|sprite=teshima,pose=smile] I'm craving that too~
[指令] sprites: clear
[Narrator] Hirata and I chatted and laughed as we headed toward the cafeteria—
[指令] BGM: fade lunch_time 5000 

-> scene_physical_education


## Scene: scene_lunch_break_blocker
- BG: school_corridor
- BGM: lunch_time

[Teshima|sprite=teshima,pose=normal] I brought lunch today. I'd like to eat in the club room—
[指令] sprites: clear
[？？？] ???: AAAAAHHHHHHHHHH!!!!!
[指令] SFX: scream
[？？？] ???: So cool!!!!!
[Narrator] Suddenly, I heard a flurry of excitement from the girls...
[Narrator|sprite=teshima,pose=surprise] Curious, I looked toward the source of the noise—
[Narrator|sprite=imaizumi,pose=normal] Our cycling club's second-year ace completely surrounded by third-year girls!
[Imaizumi|sprite=imaizumi,pose=normal] Teshima-senpai!
[Teshima|sprite=teshima,pose=smile] Oh, it's Imaizumi—
[指令] sprites: clear
[Narrator] After greeting him, I was about to turn and leave...
[Imaizumi|sprite=imaizumi,pose=blush] Senpai, please save me—
[指令] sprites: clear
[Narrator] I had no choice but to pull him out from the crowd of girls.
[Teshima|sprite=teshima,pose=surprise] Why are you here at the third-year building instead of eating lunch?
[Imaizumi|sprite=imaizumi,pose=normal] Imaizumi stared at me without a word—
[Teshima|sprite=teshima,pose=normal] Isn't Takahashi the butler preparing a feast?
[Imaizumi|sprite=imaizumi,pose=normal] I'm alone today, so I'll just grab something at the cafeteria...
[Narrator|sprite=teshima,pose=bitter] So he really does prepare meals in advance, huh~
[Teshima|sprite=teshima,pose=bitter] You're an elite student. 
[Teshima|sprite=teshima,pose=bitter] Won't eating at the commoners' cafeteria upset your stomach?
[Imaizumi|sprite=imaizumi,pose=normal] Senpai, why don't you come with me?
[Teshima|sprite=teshima,pose=normal] I brought my lunch. I'll eat in the club room~
[Imaizumi|sprite=imaizumi,pose=blush] Doesn't it matter where you eat?!
[Teshima|sprite=teshima,pose=blush] Don't look down on people, elite!
[Imaizumi|sprite=imaizumi,pose=blush] I'll treat you!!
[Teshima|sprite=teshima,pose=smile] You're such a big shot~ So generous!
[Teshima|sprite=teshima,pose=smile] I'll go with you~

-> scene_lunch_break_blocker_part1

## Scene: scene_lunch_break_blocker_part1
- BG: canteen
- BGM: lunch_happy

[Narrator] Imaizumi and I arrived at the cafeteria, which wasn't as crowded as I'd imagined.
[Imaizumi|sprite=imaizumi,pose=smile] Teshima-senpai, you pick one—
[Teshima|sprite=teshima,pose=smile] On a day this hot, cold noodles are definitely the way to go. 
[Teshima|sprite=teshima,pose=smile] Which one should I pick?

[选择]
- The plain udon -> scene_lunch_break_blocker_answer1_1
- The fried tofu udon -> scene_lunch_break_blocker_answer1_2
- The tempura udon -> scene_lunch_break_blocker_answer1_3 | set: {"imaizumi": "+1"}


## Scene: scene_lunch_break_blocker_answer1_1
- BG: canteen
- BGM: lunch_happy

[Teshima|sprite=teshima,pose=normal] I'll have the plain udon~
[Imaizumi|sprite=imaizumi,pose=blush] Exam candidates should eat nutritious food!
[Teshima|sprite=teshima,pose=smile] Well, if you put it that way, I won't hesitate~

-> scene_lunch_break_blocker_part2

## Scene: scene_lunch_break_blocker_answer1_2
- BG: canteen
- BGM: lunch_happy

[Teshima|sprite=teshima,pose=normal] I'll have the fried tofu udon~
[Imaizumi|sprite=imaizumi,pose=blush] Exam candidates should eat nutritious food!
[Teshima|sprite=teshima,pose=smile] Well, if you put it that way, I won't hold back~

-> scene_lunch_break_blocker_part2

## Scene: scene_lunch_break_blocker_answer1_3
- BG: canteen
- BGM: lunch_happy

[指令] SFX: correct_answer
[Teshima|sprite=teshima,pose=normal] Since you're treating, I won't hold back—
[Teshima|sprite=teshima,pose=smile] I'll have the tempura udon with a fried egg on top~
[Imaizumi|sprite=imaizumi,pose=smile] Got it—
[Teshima|sprite=teshima,pose=blush] Just kidding! Don't agree so quickly!
[Imaizumi|sprite=imaizumi,pose=smile] Why not? 
[Imaizumi|sprite=imaizumi,pose=smile] Exam candidates should eat something nutritious.

-> scene_lunch_break_blocker_part2

## Scene: scene_lunch_break_blocker_part2
- BG: udon
- BGM: lunch_happy

[Narrator] The chef rinsed the freshly boiled udon noodles under cold water.
[Narrator] Afterwards, he placed them into a bowl of light brown broth.
[Narrator|sprite=teshima,pose=moved] After sprinkling a generous handful of chopped green onions, 
[Narrator|sprite=teshima,pose=moved] He added the sizzling, oil-dripping tempura to the bowl—
[Narrator|sprite=teshima,pose=moved] And he didn't forget to top it off with a perfectly fried soft-boiled egg!
[Narrator|sprite=teshima,pose=smile] A mouthwatering, perfect combination!

-> scene_lunch_break_blocker_part2_2

## Scene: scene_lunch_break_blocker_part2_2
- BG: canteen
- BGM: lunch_happy

[Narrator|sprite=teshima,pose=smile] I happily took the tray with the udon, 
[Narrator|sprite=teshima,pose=smile] And glancd at Imaizumi beside me who seemed unsure how to order...
[Teshima|sprite=teshima,pose=smile] Which one are you having?
[Narrator|sprite=imaizumi,pose=normal] Imaizumi gazed longingly at the bento in my hands—
[指令] sprites: clear
[Narrator] Slurp slurp—
[指令] SFX: eat_noodles
[Teshima|sprite=teshima,pose=smile] So delicious! 
[Teshima|sprite=teshima,pose=smile] This is the best thing our cafeteria serves!
[指令] sprites: clear
[Narrator] Ah!
[Narrator] I was so busy slurping noodles I almost forgot that right now.
[Narrator] Imaizumi is staring at my humble bento, completely at a loss!
[Narrator|sprite=imaizumi,pose=normal] Imaizumi holds his chopsticks... 
[Narrator|sprite=imaizumi,pose=normal] He stared at the simple lunchbox before him—one I know all too well...

-> scene_lunch_break_blocker_part2_3

## Scene: scene_lunch_break_blocker_part2_3
- BG: bento
- BGM: lunch_happy

[指令] sprites: clear
[Narrator] It’s just plain white rice, full of carbs. 
[Narrator] A sprinkle of seasoning goes on top.
[Narrator] The sides? Broccoli, a rolled omelet, pickled radish, and some tiny sausages.
[Narrator] Since I woke up late, 
[Narrator] I didn’t have time to cut the sausages into octopus shapes…
-> scene_lunch_break_blocker_part2_4

## Scene: scene_lunch_break_blocker_part2_4
- BG: canteen
- BGM: lunch_happy

[Teshima|sprite=teshima,pose=bitter] You don't have to eat it if you don't want to?
[Imaizumi|sprite=imaizumi,pose=blush] No, no, it's just that this is such a rare treat.
[Imaizumi|sprite=imaizumi,pose=blush] I can't bring myself to eat it...
[指令] sprites: clear
[Narrator] Imaizumi finally picked up a piece of rolled omelet,
[Narrator] And popped it into his mouth...
[Narrator|sprite=imaizumi,pose=normal] Seeing he didn't frown, 
[Narrator|sprite=imaizumi,pose=normal] It must mean the taste is still acceptable to him?
[Teshima|sprite=teshima,pose=normal] I woke up late today so it's a bit rushed. 
[Teshima|sprite=teshima,pose=smile] Next time tell me ahead of time so I can prepare...
[指令] sprites: clear
[Narrator] Imaizumi looked overjoyed, which made me feel really good~
[Teshima|sprite=teshima,pose=bitter] But you have to tell me ahead of time. 
[Teshima|sprite=teshima,pose=bitter] I'm starting cram school soon and won't be coming to school often.
[Imaizumi|sprite=imaizumi,pose=bitter] If you do come to school, stop by the cycling club too...
[Narrator|sprite=teshima,pose=bitter] My heart skipped a beat—
[Narrator|sprite=teshima,pose=moved] What the heck? 
[Narrator|sprite=teshima,pose=moved] Even though he talks big, he's still such a cute little junior!
[Narrator|sprite=teshima,pose=smile] I tried my best not to look too thrilled~
[选择]
- I'm preparing for exams, I have no time -> scene_lunch_break_blocker_answer2_1
- Are you worried I'll get rusty at cycling? -> scene_lunch_break_blocker_answer2_2
- Did you miss me？ -> scene_lunch_break_blocker_answer2_3 | set: {"imaizumi": "+1"}

## Scene: scene_lunch_break_blocker_answer2_1
- BG: canteen
- BGM: lunch_happy

[Teshima|sprite=teshima,pose=bitter] But I'm an exam prep student. 
[Teshima|sprite=teshima,pose=bitter] I don't have that kind of time.
[Narrator|sprite=imaizumi,pose=bitter] Imaizumi looked a bit downcast.
[Imaizumi|sprite=imaizumi,pose=bitter] But shouldn't you exercise occasionally?
[Imaizumi|sprite=imaizumi,pose=bitter] Exercise improves memory?
[Imaizumi|sprite=imaizumi,pose=bitter] And...
[Teshima|sprite=teshima,pose=smile] Alright, alright, I'll go~

-> scene_lunch_break_blocker_part3


## Scene: scene_lunch_break_blocker_answer2_2
- BG: canteen
- BGM: lunch_happy

[Teshima|sprite=teshima,pose=normal] What, worried I've gotten rusty on the bike?
[Imaizumi|sprite=imaizumi,pose=blush] No, I know studying for the exam is more important right now, but—
[Teshima|sprite=teshima,pose=surprise] ?
[Imaizumi|sprite=imaizumi,pose=blush] It's... it's just that Onoda and Naruko really miss you, Senpai!
[Teshima|sprite=teshima,pose=smile] Hmm, for my adorable juniors~ I'll try my best to make it~
[Narrator|sprite=imaizumi,pose=smile] Imaizumi's face lit up with a happy expression.

-> scene_lunch_break_blocker_part3


## Scene: scene_lunch_break_blocker_answer2_3
- BG: canteen
- BGM: lunch_happy

[指令] SFX: correct_answer
[Teshima|sprite=teshima,pose=normal] What, missed me?
[Imaizumi|sprite=imaizumi,pose=blush] Y-Yes, I wanted to make sure you don't get rusty!!
[Teshima|sprite=teshima,pose=bitter] Elite students really don't cut you any slack~
[Imaizumi|sprite=imaizumi,pose=blush] And I... I wanted to ride bikes with you... (whispering)
[Teshima|sprite=teshima,pose=normal] ?
[Imaizumi|sprite=imaizumi,pose=blush] Anyway, you should drop by the department every once in a while!
[Imaizumi|sprite=imaizumi,pose=blush] Onoda and Naruko really miss you...
[Teshima|sprite=teshima,pose=smile] Hmm, for my adorable juniors~ I'll try to make it~
[Narrator|sprite=imaizumi,pose=smile] Imaizumi's face lit up with a happy expression.
[Narrator] 

@if imaizumi == 2 -> scene_lunch_break_blocker_special
@if imaizumi < 2 -> scene_lunch_break_blocker_part3

## Scene: scene_lunch_break_blocker_special
- BG: canteen
- BGM: blocker_special_warm

[Teshima|sprite=teshima,pose=normal] What about you?
[Imaizumi|sprite=imaizumi,pose=normal] ?
[Teshima|sprite=teshima,pose=serious] Don't you miss me at all?
[Imaizumi|sprite=imaizumi,pose=blush] Ah, no, well, I—
[Imaizumi|sprite=imaizumi,pose=blush] I... I do think about you sometimes...
[Teshima|sprite=teshima,pose=surprise] Like when?
[Imaizumi|sprite=imaizumi,pose=bitter] When I'm riding my bike... I kinda... habitually look back...
[Teshima|sprite=teshima,pose=serious] You think I ride too slow?
[Imaizumi|sprite=imaizumi,pose=blush] No, no, that's not it—
[Imaizumi|sprite=imaizumi,pose=bitter] When we practice together usually, I can always hear you pedaling hard. 
[Imaizumi|sprite=imaizumi,pose=bitter] Lately, I haven't been able to hear it...
[Teshima|sprite=teshima,pose=serious] Hey! You're just saying I'm out of shape in a roundabout way, aren't you!?
[Imaizumi|sprite=imaizumi,pose=blush] No, no, I mean... that sound reassured me you were still pushing to keep up—
[Imaizumi|sprite=imaizumi,pose=blush] It made me feel reassured...
[Teshima|sprite=teshima,pose=smile] ...Haha, that's rare! 
[Teshima|sprite=teshima,pose=smile] An elite actually saying something like that~
[Imaizumi|sprite=imaizumi,pose=bitter] So sometimes I look back to check...
[Teshima|sprite=teshima,pose=smile] Hahahahaha~
[Imaizumi|sprite=imaizumi,pose=blush] Please, don't laugh! I'm just stating the facts!
[Teshima|sprite=teshima,pose=normal] If you put it that way, I'll ride with you more often from now on~
[Teshima|sprite=teshima,pose=smile] So you can feel reassured~
[Teshima|sprite=teshima,pose=smile] After all, the ace's condition is crucial~
[Imaizumi|sprite=imaizumi,pose=blush] ...Yes!

[指令] BGM: fade blocker_special_warm 600 -> play lunch_happy

-> scene_lunch_break_blocker_part3

## Scene: scene_lunch_break_blocker_part3
- BG: canteen
- BGM: lunch_happy

[Teshima|sprite=teshima,pose=bitter] You guys better go easy on me when the time comes~
[Teshima|sprite=teshima,pose=bitter] I'm a student preparing for exams, after all~
[Imaizumi|sprite=imaizumi,pose=blush] If you slack off on your bike training, Senpai, I won't forgive you!
[Teshima|sprite=teshima,pose=blush] That's why elites are @q~￥uzvx@!^uz.~￥@vx!...
[Imaizumi|sprite=imaizumi,pose=smile] If I go easy on you, Senpai will get mad later too...
[Teshima|sprite=teshima,pose=smile] Exactly, hahaha~
[Imaizumi|sprite=imaizumi,pose=blush] The bento was delicious. I'll wash it and give it back tomorrow—
[Narrator|sprite=teshima,pose=normal] I wonder if Imaizumi will stuff it full of fancy pastries before returning it tomorrow?
[Narrator|sprite=teshima,pose=smile] I'm kinda looking forward to it~

[指令] BGM: fade lunch_happy 3000
-> scene_physical_education

## Scene: scene_physical_education
- BG: school_corridor
- BGM: lunch_time

[指令] sprites: clear
[指令] SFX: school_bell
[？？？] Tejima, we're heading over first—
[Teshima|sprite=teshima,pose=normal] Alright~
[指令] sprites: clear
[Narrator] The first class in the afternoon was PE.
[Narrator] I was hoping to get to the field early to warm up...
[Teshima|sprite=teshima,pose=bitter] I accidentally left my sports jacket in the club room last week...
[Teshima|sprite=teshima,pose=bitter] I'd better go get it back—
[选择]
- Borrow from the next class -> scene_physical_education_normal
- Go to the clubroom -> scene_physical_education_blocker


## Scene: scene_physical_education_normal
- BG: school_classroom
- BGM: lunch_time

[Teshima|sprite=teshima,pose=normal] This is too much trouble. 
[Teshima|sprite=teshima,pose=smile] I'll just borrow one from the class next door~
[指令] sprites: clear
[？？？] Teshima—
[Narrator] Suddenly, I heard someone calling my name—
[Teshima|sprite=teshima,pose=normal] Higashito~ Perfect timing!
[Higashito|sprite=higashito,pose=normal] ?
[Teshima|sprite=teshima,pose=normal] Your class doesn't have PE this week, right?
[Higashito|sprite=higashito,pose=normal] Nope. Did you forget your gear?
[Teshima|sprite=teshima,pose=bitter] Yeah, I left it in the club room. Too lazy to go get it.
[Higashito|sprite=higashito,pose=normal] Here—
[Teshima|sprite=teshima,pose=smile] Thanks, I'll give it back to you after I wash it~
[Higashito|sprite=higashito,pose=normal] Don't be so formal with me!
[指令] sprites: clear
[Narrator] I took the clothes and hurried toward the playground—

[指令] BGM: fade lunch_time 5000 
-> scene_after_school

## Scene: scene_physical_education_blocker
- BG: school_corridor
- BGM: afternoon

[Teshima|sprite=teshima,pose=normal] I guess I'll head to the club room after all...
[指令] sprites: clear
[？？？] Teshima—
[Narrator] Suddenly, I heard someone calling my name—
[Teshima|sprite=teshima,pose=normal] Koga? What are you doing here?
[Narrator|sprite=koga,pose=normal] I saw Koga holding a sports jacket.
[Teshima|sprite=teshima,pose=normal] No way! Your shoulders are too broad—this won't fit me!
[Koga|sprite=koga,pose=serious] This is your jacket! You curly-haired idiot—
[Teshima|sprite=teshima,pose=surprise] !
[Koga|sprite=koga,pose=serious] I saw some idiot left their jacket behind in the club room at lunch, so I grabbed it.
[Teshima|sprite=teshima,pose=smile] Perfect timing, thanks a bunch~

-> scene_physical_education_blocker_part1

## Scene: scene_physical_education_blocker_part1
- BG: school_classroom
- BGM: afternoon

[Narrator] With Koga running errands for me, I've got plenty of time now~
[Teshima|sprite=teshima,pose=smile] Yesss—
[Narrator|sprite=teshima,pose=smile] I slowly slipped off my shirt, revealing the T-shirt underneath—
[Narrator|sprite=teshima,pose=smile] I slipped on my sweatshirt, neatly folded the shirt, and tucked it into the drawer—
[Narrator|sprite=teshima,pose=smile] I closed all the books and notebooks on the desk—
[Narrator|sprite=teshima,pose=smile] Sat back down and opened my flip phone—
[Narrator|sprite=teshima,pose=smile] Koga beside me finally couldn't take it anymore!
[指令] sprites: clear
[Koga|sprite=koga,pose=serious] Get your ass to class already!
[Teshima|sprite=teshima,pose=surprise] There's still time!
[Koga|sprite=koga,pose=bitter] Don't you have anything to worry about?
[Koga|sprite=koga,pose=bitter] Instead of wasting time on your phone, read more books!
[Koga|sprite=koga,pose=bitter] The classical Chinese exam is on Friday—have you finished reviewing?
[选择]
- Lend me your notes -> scene_physical_education_answer1_1
- Sound like my mom -> scene_physical_education_answer1_2
- What about Sohoku next year? -> scene_physical_education_answer1_3 | set: {"koga": "+1"}


## Scene: scene_physical_education_answer1_1
- BG: school_classroom
- BGM: afternoon

[Teshima|sprite=teshima,pose=smile] Koga Koga~
[Koga|sprite=koga,pose=bitter] What?
[Teshima|sprite=teshima,pose=smile] You're really good at classical Chinese, right?
[Koga|sprite=koga,pose=bitter] What do you want?
[Teshima|sprite=teshima,pose=smile] Can I borrow your notes to copy?
[Koga|sprite=koga,pose=serious] No way!
[Teshima|sprite=teshima,pose=blush] You're so stingy!

-> scene_physical_education_blocker_part2

## Scene: scene_physical_education_answer1_2
- BG: school_classroom
- BGM: afternoon

[Teshima|sprite=teshima,pose=serious] Koga, you're just like my mom!
[Koga|sprite=koga,pose=bitter] I don't have a kid as dumb as you!
[Teshima|sprite=teshima,pose=surprise] You're going to make yourself unpopular like this—
[Koga|sprite=koga,pose=serious] Mind your own business!
[Teshima|sprite=teshima,pose=surprise] Scary—Koga-senpai is a sadistic glasses-wearing monster—
[Koga|sprite=koga,pose=normal] And I'm way more popular with juniors than you are, right?
[Teshima|sprite=teshima,pose=blush] Damn it—

-> scene_physical_education_blocker_part2


## Scene: scene_physical_education_answer1_3
- BG: school_classroom
- BGM: afternoon

[指令] SFX: correct_answer
[Teshima|sprite=teshima,pose=bitter] Sohoku next year... 
[Teshima|sprite=teshima,pose=bitter] Is definitely going to be tougher than this year...
[Koga|sprite=koga,pose=bitter] ...
[Teshima|sprite=teshima,pose=bitter] I feel so bad putting such a heavy burden on Onoda...
[Koga|sprite=koga,pose=bitter] You idiot, curly-top—
[Koga|sprite=koga,pose=bitter] Onoda's way more dependable than you—
[Koga|sprite=koga,pose=normal] And there are others too—
[Koga|sprite=koga,pose=normal] All we can do is cheer them on—
[Teshima|sprite=teshima,pose=smile] You're right~
[Koga|sprite=koga,pose=serious] Instead of worrying about them, you should worry about your classical Japanese!
[Teshima|sprite=teshima,pose=blush] Again?!

-> scene_physical_education_blocker_part2


## Scene: scene_physical_education_blocker_part2
- BG: school_classroom
- BGM: afternoon

[Teshima|sprite=teshima,pose=bitter] Wish the exam was karaoke instead...
[Koga|sprite=koga,pose=serious] You're so relaxed even though you're studying!
[Teshima|sprite=teshima,pose=surprise] Am I playing around? 
[Teshima|sprite=teshima,pose=bitter] Isn't the group chat buzzing about upcoming college preference interviews?
[Koga|sprite=koga,pose=bitter] Our class already had ours.
[Teshima|sprite=teshima,pose=surprise] So which university are you planning to apply to?
[Koga|sprite=koga,pose=bitter] Not sure yet.
[Teshima|sprite=teshima,pose=bitter] Aren't you still undecided too?
[Koga|sprite=koga,pose=normal] At least one with a cycling club!

[选择]
- Not the same school as you! -> scene_physical_education_answer2_1
- Is college cycling really that competitive? -> scene_physical_education_answer2_2
- That’s a relief~ -> scene_physical_education_answer2_3 | set: {"koga": "+1"}

## Scene: scene_physical_education_answer2_1
- BG: school_classroom
- BGM: afternoon

[Teshima|sprite=teshima,pose=serious] I don't want to go to the same school as you...
[Koga|sprite=koga,pose=serious] Why not?
[Teshima|sprite=teshima,pose=serious] Just thinking about competing with you for a spot gives me major pressure...
[Koga|sprite=koga,pose=normal] Seems like you know your limits~
[Teshima|sprite=teshima,pose=serious] You devil glasses!

-> scene_physical_education_blocker_part3

## Scene: scene_physical_education_answer2_2
- BG: school_classroom
- BGM: afternoon

[Teshima|sprite=teshima,pose=bitter] Is the cycling competition at university super intense...?
[Koga|sprite=koga,pose=bitter] That's exactly why you can't slack off—
[Koga|sprite=koga,pose=bitter] You're Sohoku's weakest rider!
[Teshima|sprite=teshima,pose=blush] I... I was worried about your shoulder~
[Koga|sprite=koga,pose=serious] No need to worry about me.
[Koga|sprite=koga,pose=serious] It's almost healed already—
[Teshima|sprite=teshima,pose=blush] Musclehead!

-> scene_physical_education_blocker_part3

## Scene: scene_physical_education_answer2_3
- BG: school_classroom
- BGM: afternoon

[指令] SFX: correct_answer
[Teshima|sprite=teshima,pose=normal] That's a relief—
[Koga|sprite=koga,pose=bitter] ?
[Teshima|sprite=teshima,pose=normal] Hearing you still want to ride bikes~
[Koga|sprite=koga,pose=serious] Who'd quit before you, you dumb curly-haired idiot!
[Teshima|sprite=teshima,pose=serious] Musclehead!
[Narrator] 

@if koga == 2 -> scene_physical_education_blocker_special
@else -> scene_physical_education_blocker_part3

## Scene: scene_physical_education_blocker_special
- BG: school_classroom
- BGM: blocker_special_warm  

[Koga|sprite=koga,pose=normal] But I think you can be more confident now.
[Teshima|sprite=teshima,pose=surprise] ?
[Koga|sprite=koga,pose=normal] Even though you might not beat me on flat ground right now...
[Koga|sprite=koga,pose=normal] But uphill? You're barely passable.
[Teshima|sprite=teshima,pose=serious] What? Just "barely passable"?
[Koga|sprite=koga,pose=normal] Even though you didn't get a bib number—
[Teshima|sprite=teshima,pose=serious] You're going to say I didn't finish the whole course, aren't you!
[Koga|sprite=koga,pose=normal] Even though I didn't finish the whole course—
[Teshima|sprite=teshima,pose=serious] See! I knew it—
[Koga|sprite=koga,pose=normal] But compared to the guy who always came in last before, you're like a completely different person now.
[Teshima|sprite=teshima,pose=serious] Ugh—I can't take it anymore! You're such a sadistic glasses-wearer!
[Koga|sprite=koga,pose=normal] I'm genuinely complimenting you, you know?
[Teshima|sprite=teshima,pose=blush] But it still sounds like you're insulting me!
[Koga|sprite=koga,pose=normal] Anyway, you've gotten stronger. I can guarantee that.
[Koga|sprite=koga,pose=normal] Because I've been watching you all along—
[Teshima|sprite=teshima,pose=blush] !
[指令] sprites: clear
[Narrator] Koga seems in a good mood...

-> scene_physical_education_blocker_part3

## Scene: scene_physical_education_blocker_part3
- BG: school_classroom
- BGM: afternoon

[Koga|sprite=koga,pose=serious] So aren't you going to class?
[Teshima|sprite=teshima,pose=blush] Oh no, I'm going to be late!
[Teshima|sprite=teshima,pose=blush] It's all your fault for chatting so long!
[Koga|sprite=koga,pose=serious] Huh? Who was the one messing around on their phone while cleaning up?
[Teshima|sprite=teshima,pose=blush] You Musclehead!
[Koga|sprite=koga,pose=serious] Stinky curly-haired freak!
[指令] sprites: clear
[Narrator] I quickly ditched Koga and ran toward the playground...

[指令] BGM: fade afternoon 5000
-> scene_after_school

## Scene: scene_after_school
- BG: school_entrance
- BGM: after_school

[指令] sprites: clear
[指令] SFX: school_bell
[Teshima|sprite=teshima,pose=bitter] (Stretching——)
[Teshima|sprite=teshima,pose=bitter] Finally, all the classes for today are over...
[Teshima|sprite=teshima,pose=normal] But the thought of having to go to cram school next...
[Teshima|sprite=teshima,pose=bitter] This wonderful campus life will soon be over...
[Teshima|sprite=teshima,pose=smile] I'm so reluctant to let it go~
[Teshima|sprite=teshima,pose=smile] Should I drop by the clubroom?
[选择]
- Go to the clubroom -> scene_after_school_blocker
- Feels like I forgot something important -> scene_after_school_normal


## Scene: scene_after_school_normal
- BG: school_entrance
- BGM: after_school

[Teshima|sprite=teshima,pose=normal] I feel like I'm forgetting something important?
[指令] sprites: clear
[？？？] Teshima—
[Narrator] Suddenly, I heard someone calling my name—
[Teshima|sprite=teshima,pose=normal] I figured you'd show up around now...
[Teshima|sprite=hirata,pose=smile] Hirata~
[Narrator|sprites=teshima:normal@0.7,hirata:normal@0.3] Hirata handed me a mop—
[Hirata|sprite=hirata,pose=smile] Don't even think about skipping your duty!
[Teshima|sprite=teshima,pose=bitter] Hahaha, like I would!
[指令] sprites: clear
[Narrator] I chuckled awkwardly. It's true—for a split second, I'd completely forgotten...
[Narrator] Hirata and I started cleaning nonstop, hoping to slip away early—

[指令] BGM: fade after_school 5000
-> scene_hill_climb

## Scene: scene_after_school_blocker
- BG: school_entrance
- BGM: friendship

[Teshima|sprite=teshima,pose=normal] Should we drop by the club room?
[指令] sprites: clear
[？？？] Teshima~
[Narrator] Suddenly, I heard someone calling my name—
[Teshima|sprite=teshima,pose=surprise] Higashito?
[Narrator|sprite=higashito,pose=normal] I saw Higashito dragging a massive figure over...
[Teshima|sprite=teshima,pose=normal] Ashikiba?!!
[Ashikiba|sprite=ashikiba,pose=smile] Junta—
[Teshima|sprite=teshima,pose=normal] What are you doing here? 
[Teshima|sprite=teshima,pose=normal] Don't you have class today?
[Ashikiba|sprite=ashikiba,pose=normal] Third-year students in the Box Studies program can choose when to come to school...
[Higashito|sprite=higashito,pose=normal] This guy was hanging around the school gate, asking everyone if they knew you.
[Higashito|sprite=higashito,pose=normal] So I brought him over~
[Ashikiba|sprite=ashikiba,pose=smile] Thank goodness I ran into Machida-kun~
[Higashito|sprite=higashito,pose=normal] My name's Higashito... Ah, never mind. You two chat. I'm heading home—
[指令] sprites: clear
[Narrator] Higashito waved goodbye and headed toward the school gate.

-> scene_after_school_blocker_part1


## Scene: scene_after_school_blocker_part1
- BG: outdoor_corridor
- BGM: friendship

[Narrator] I took Ashikiba to the school courtyard. 
[Narrator] I picked a bench for us to sit together.
[Teshima|sprite=teshima,pose=normal] It's been a while since you came back to Chiba, hasn't it?
[Ashikiba|sprite=ashikiba,pose=bitter] Hmm...
[Teshima|sprite=teshima,pose=surprise] You haven't been back since ninth grade, have you?
[Ashikiba|sprite=ashikiba,pose=bitter] Pretty much...
[Teshima|sprite=teshima,pose=normal] Do you have a place to stay?
[Ashikiba|sprite=ashikiba,pose=bitter] Yeah, I can stay with relatives...
[Teshima|sprite=teshima,pose=normal] Then you can stay a couple extra days this time. 
[Teshima|sprite=teshima,pose=smile] Your old classmates all say they miss you~
[Ashikiba|sprite=ashikiba,pose=bitter] Really?
[Teshima|sprite=teshima,pose=smile] You're just so memorable, everyone remembers you!
[Ashikiba|sprite=ashikiba,pose=bitter] What about you? Do you still remember me?
[Teshima|sprite=teshima,pose=normal] Of course! 
[Teshima|sprite=teshima,pose=smile] We used to ride bikes together every day back then~
[Ashikiba|sprite=ashikiba,pose=smile] Junta still wants to conquer the world, right?
[Teshima|sprite=teshima,pose=blush] Don't even bring that up—it's so embarrassing—
[Teshima|sprite=teshima,pose=bitter] He even said he'd quit riding, but ended up getting back on the bike...
[Ashikiba|sprite=ashikiba,pose=normal] But I always believed—
[Teshima|sprite=teshima,pose=normal] ?
[Ashikiba|sprite=ashikiba,pose=normal] I believed that as long as I kept riding. 
[Ashikiba|sprite=ashikiba,pose=smile] I'd definitely meet you again!
[Teshima|sprite=teshima,pose=smile] Heh heh, didn't expect you to be right about that~
[Ashikiba|sprite=ashikiba,pose=smile] Because you're a total bike nerd, right?
[Teshima|sprite=teshima,pose=blush] Huh? Who said that—
[Ashikiba|sprite=ashikiba,pose=normal] Machida said it—
[Teshima|sprite=teshima,pose=blush] What nonsense is that guy Higashito spouting?!
[Ashikiba|sprite=ashikiba,pose=normal] It's thanks to cycling that I got to meet you again...
[Ashikiba|sprite=ashikiba,pose=bitter] I've actually been wanting to apologize to you...
[Teshima|sprite=teshima,pose=bitter] Why?
[Ashikiba|sprite=ashikiba,pose=bitter] Leaving without a word back then must have really troubled you, right?
[选择]
- Don’t take it to heart -> scene_after_school_answer1_1
- I really was worried -> scene_after_school_answer1_2
- Thought you went back to home planet -> scene_after_school_answer1_3 | set: {"ashikiba": "+1"}


## Scene: scene_after_school_answer1_1
- BG: outdoor_corridor
- BGM: friendship

[Teshima|sprite=teshima,pose=normal] Don't worry about it~
[Teshima|sprite=teshima,pose=normal] We're meeting again now, aren't we?
[Teshima|sprite=teshima,pose=smile] And we're both still riding bikes—that's enough, right?
[Ashikiba|sprite=ashikiba,pose=bitter] Hmm...
[指令] sprites: clear
[Narrator] Ashikiba's expression eased slightly.

-> scene_after_school_blocker_part2


## Scene: scene_after_school_answer1_2
- BG: outdoor_corridor
- BGM: friendship

[Teshima|sprite=teshima,pose=bitter] I was really worried...
[Teshima|sprite=teshima,pose=bitter] I thought you might have been kidnapped, since you trust people so easily...
[Ashikiba|sprite=ashikiba,pose=bitter] Not really...
[Teshima|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] A grown adult suddenly skipping school for days—
[Teshima|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] And your home phone wasn't answering—
[Teshima|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] I had to ask the teacher and only then found out you'd moved...
[Teshima|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] And you didn't have a cell phone back then either—
[Ashikiba|sprite=ashikiba,pose=surprise] Oh, I forgot my phone again today!
[Teshima|sprite=teshima,pose=surprise] What should we do? Do you remember your home phone number?
[Ashikiba|sprite=ashikiba,pose=bitter] I don't remember, waaah—
[Teshima|sprite=teshima,pose=bitter] I'll contact Izumida later.
[Ashikiba|sprite=ashikiba,pose=bitter] Please do, Junta!
[指令] sprites: clear
[Narrator] Ashikiba looked at me with teary eyes like he did when he was little. Thankfully, he didn't lunge at me like he used to back then...

-> scene_after_school_blocker_part2


## Scene: scene_after_school_answer1_3
- BG: outdoor_corridor
- BGM: happy

[指令] SFX: correct_answer
[Teshima|sprite=teshima,pose=serious] Yeah, everyone was so worried!
[指令] sprites: clear
[Narrator] Ashikiba's head drooped even lower—
[Teshima|sprites=teshima:serious@0.7,ashikiba:bitter@0.3] Everyone thought you were an alien! 
[Teshima|sprites=teshima:serious@0.7,ashikiba:bitter@0.3] Maybe you finally couldn't stand Earth anymore and went back to home planet!
[Ashikiba|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] Huh? Why would I?
[Teshima|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] You're always so out there, saying stuff no one understands—
[Teshima|sprites=teshima:serious@0.7,ashikiba:surprise@0.3] And you're taller than most people—
[Teshima|sprites=teshima:normal@0.7,ashikiba:surprise@0.3] That cowlick on your head looks like an alien signal receiver—
[Teshima|sprites=teshima:normal@0.7,ashikiba:normal@0.3] That mole on your face is some kind of transformation switch or something—
[Ashikiba|sprites=teshima:smile@0.7,ashikiba:normal@0.3] Everyone's regretting not pressing it sooner!
[指令] sprites: clear
[Narrator] Ashikiba finally shook off his gloom and broke into a happy smile—
[Ashikiba|sprite=ashikiba,pose=smile] Hahaha~ That sounds so cool~
[Teshima|sprite=teshima,pose=smile] Exactly!
[Ashikiba|sprite=ashikiba,pose=normal] Everyone's making such a big deal out of nothing. 
[Ashikiba|sprite=ashikiba,pose=normal] It's just a regular mole.
[指令] sprites: clear
[Narrator] Saying this, Ashikiba touched the heart-shaped mole on his right cheek—
[Ashikiba|sprite=ashikiba,pose=normal] Want to feel it, Junta?
[指令] sprites: clear
[Narrator|sprite=ashikiba,pose=normal] As he spoke, Reedwood closed his eyes and leaned his face close to mine—
[Narrator|sprite=teshima,pose=serious] My heart pounding, I pressed down—
[Teshima|sprite=teshima,pose=serious] Did you feel anything special?
[Ashikiba|sprite=ashikiba,pose=smile] It tickles~
[Teshima|sprite=teshima,pose=smile] Hahaha!
[Ashikiba|sprite=ashikiba,pose=normal] And... it feels so good~
[指令] sprites: clear
[Narrator] Ashikiba flashes a warm smile~

[指令] BGM: fade happy 600 -> play friendship
-> scene_after_school_blocker_part2


## Scene: scene_after_school_blocker_part2
- BG: outdoor_corridor
- BGM: friendship

[Teshima|sprite=teshima,pose=normal] But I've known you were in the box club since last year.
[Teshima|sprites=teshima:normal@0.7,ashikiba:normal@0.3] I never imagined you'd make the starting lineup~
[Teshima|sprites=teshima:smile@0.7,ashikiba:normal@0.3] You really are talented!
[Ashikiba|sprites=teshima:normal@0.7,ashikiba:smile@0.3] Hehehe, all thanks to you~
[Teshima|sprite=teshima,pose=normal] At Hakugaku, that prestigious private cycling school, you must've endured a lot!
[Ashikiba|sprite=ashikiba,pose=normal] Hmm—
[Teshima|sprite=teshima,pose=normal] Let me guess... The hardest part for you must have been—

[选择]
- Hakogaku’s school rules -> scene_after_school_answer2_1
- The inhuman training -> scene_after_school_answer2_2 | set: {"ashikiba": "+1"}
- The dorm beds -> scene_after_school_answer2_3


## Scene: scene_after_school_answer2_1
- BG: outdoor_corridor
- BGM: friendship

[Teshima|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] As a prestigious private school with tradition, Hakogaku must have tons of rules—
[Teshima|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] Like not being allowed to grow your hair long?
[Teshima|sprites=teshima:smile@0.7,ashikiba:normal@0.3] If I go there, will they make me cut my hair short?
[Ashikiba|sprites=teshima:bitter@0.7,ashikiba:smile@0.3] Your length is fine though~

-> scene_after_school_blocker_part3


## Scene: scene_after_school_answer2_2
- BG: outdoor_corridor
- BGM: friendship

[指令] SFX: correct_answer
[Teshima|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] Hakogaku's training regimen is beyond what most people could endure...
[Teshima|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] I accidentally got wind of Hakogaku's schedule earlier—it's terrifying—
[Teshima|sprites=teshima:bitter@0.7,ashikiba:normal@0.3] Not only is the cycling workload three times that of Sohoku's—
[Teshima|sprites=teshima:surprise@0.7,ashikiba:normal@0.3] They also have tons of endurance and muscle-building drills!
[Ashikiba|sprites=teshima:normal@0.7,ashikiba:smile@0.3] Not everyone has to do all of them, though~
[Teshima|sprite=teshima,pose=normal] So you're all buff now, right, Aiba? 
[Teshima|sprite=teshima,pose=smile] Let me see!
[Ashikiba|sprite=ashikiba,pose=smile] Hahaha, that tickles—
[Narrator] 

@if ashikiba == 2 -> scene_after_school_blocker_special
@if ashikiba < 2 -> scene_after_school_blocker_part3

## Scene: scene_after_school_answer2_3
- BG: outdoor_corridor
- BGM: happy

[Teshima|sprites=teshima:normal@0.7,ashikiba:normal@0.3] Seems like most of Hakogaku are boarders, huh...
[Teshima|sprites=teshima:smile@0.7,ashikiba:normal@0.3] Can you even fit on that bed?
[Teshima|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] How'd you know? Half my foot hangs off the edge when I sleep...
[Teshima|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] Well, you are tall!
[Teshima|sprites=teshima:bitter@0.7,ashikiba:bitter@0.3] Finally getting to sleep at home again lately...
[Teshima|sprites=teshima:smile@0.7,ashikiba:bitter@0.3] That's great!
[指令] sprites: clear
[Narrator] I patted Ashikiba on the shoulder—

[指令] BGM: fade happy 600 -> play friendship
-> scene_after_school_blocker_part3

## Scene: scene_after_school_blocker_special
- BG: outdoor_corridor
- BGM: blocker_special_warm

[Ashikiba|sprite=ashikiba,pose=smile] Chatting with you was so much fun~
[Teshima|sprite=teshima,pose=normal] Me too~ feels like going back to childhood. 
[Teshima|sprite=teshima,pose=smile] You really haven't changed a bit~
[Ashikiba|sprite=ashikiba,pose=normal] You have changed so much, becoming even stronger than before—
[Teshima|sprite=teshima,pose=smile] Really? Hahaha~
[Ashikiba|sprite=ashikiba,pose=bitter] And actually, I have changed...
[Teshima|sprite=teshima,pose=normal] I meant your core hasn't changed at all—
[Teshima|sprite=teshima,pose=bitter] You still love complimenting people~
[Ashikiba|sprite=ashikiba,pose=serious] I'm just telling the truth—You're the best!
[Teshima|sprite=teshima,pose=smile] I'll take that as a compliment~
[Ashikiba|sprite=ashikiba,pose=normal] My core isn't completely unchanged...
[Ashikiba|sprite=ashikiba,pose=bitter] It's just that you're a bit slow on the uptake...
[Teshima|sprite=teshima,pose=normal] Who says I am?
[Ashikiba|sprite=ashikiba,pose=bitter] And you're so popular now...
[Teshima|sprite=teshima,pose=surprise] What? I haven't noticed that at all!
[Ashikiba|sprite=ashikiba,pose=serious] If I don't make up with you soon, someone else will snatch you away!
[Teshima|sprite=teshima,pose=normal] That won't happen, don't worry~
[Ashikiba|sprite=ashikiba,pose=serious] That's exactly why you're so slow on the uptake, Junta—
[Ashikiba|sprite=ashikiba,pose=serious] Don't worry, Junta. I'll definitely protect you!
[Teshima|sprite=teshima,pose=smile] Then I'll leave it to you~
[Ashikiba|sprite=ashikiba,pose=smile] My pleasure~
[指令] sprites: clear
[Narrator] Ashikiba is still the same old one, impossible to figure out what he's thinking...
[Narrator] Maybe that's just his way of showing friendship~

-> scene_after_school_blocker_part3

## Scene: scene_after_school_blocker_part3
- BG: outdoor_corridor
- BGM: friendship


[Ashikiba|sprite=ashikiba,pose=normal] Since we're not enemies anymore, 
[Ashikiba|sprite=ashikiba,pose=smile] I can come hang out with you often, right?
[Teshima|sprite=teshima,pose=surprise] Don't you have to go to cram school?
[Ashikiba|sprite=ashikiba,pose=normal] I can go to a cram school in Chiba!
[Ashikiba|sprite=ashikiba,pose=serious] I have to get into the same university as you!
[Teshima|sprite=teshima,pose=normal] Seeing you so motivated puts my mind at ease~
[Teshima|sprite=teshima,pose=smile] It'd be great if we could go to the same university~
[指令] sprites: clear
[Narrator] Seeing how spirited Ashikaba looked, I couldn't help but smile.
[Teshima|sprite=teshima,pose=surprise] Oh right, I think I'm on duty today!
[Ashikiba|sprite=ashikiba,pose=normal] Junta, you go ahead. I'll wait for you at the bike club?
[Teshima|sprite=teshima,pose=normal] Can you handle it alone?
[Ashikiba|sprite=ashikiba,pose=smile] Yes!
[Narrator|sprite=ashikiba,pose=smile] Seeing Ashikiba nod—
[指令] sprites: clear
[Narrator] While pondering how to apologize to Hirata later, I started running...


[指令] BGM: fade friendship 5000
-> scene_hill_climb


## Scene: scene_hill_climb
- BG: school_classroom
- BGM: after_school

[Hirata|sprite=hirata,pose=smile] Whew—finally finished cleaning!
[Teshima|sprite=teshima,pose=smile] Good thing it's not Friday—didn't take too long.
[指令] sprites: clear
[Narrator] Hirata and I returned the cleaning supplies to the storage room.
[Teshima|sprite=teshima,pose=normal] Are you heading home next?
[Hirata|sprite=hirata,pose=normal] I'm going to the shopping district later—
[Teshima|sprite=teshima,pose=bitter] No wonder you're in such a hurry~
[Hirata|sprite=hirata,pose=smile] Are you still going to practice riding later?

[选择]
- Go to the clubroom -> scene_hill_climb_blocker
- Go to the staffroom to turn in college application -> scene_hill_climb_normal


## Scene: scene_hill_climb_normal
- BG: school_entrance
- BGM: blocker_special_warm

[指令] sprites: clear
[Teshima|sprite=teshima,pose=normal] I'm heading to the faculty room—
[Teshima|sprite=teshima,pose=bitter] I haven't submitted my application form yet...
[Hirata|sprite=hirata,pose=normal] Oh, you haven't decided on a school yet?
[Teshima|sprite=teshima,pose=bitter] How easy do you think it is to decide?
[Hirata|sprite=hirata,pose=smile] Just go to a school with a cycling club~
[Teshima|sprite=teshima,pose=normal] Haha, you're right~
[Hirata|sprite=hirata,pose=smile] But it's good to really think it through~
[Teshima|sprite=teshima,pose=bitter] You talk like you've already got a spot lined up?
[Hirata|sprite=hirata,pose=normal] What I mean is—this is youth, right?
[Hirata|sprite=hirata,pose=smile] Besides, shouldn't you be the one with the guaranteed spot?
[Teshima|sprite=teshima,pose=smile] But I didn't even place, haha!
[Hirata|sprite=hirata,pose=normal] This is more like you, and it's actually pretty good~
[Hirata|sprite=hirata,pose=normal] If you suddenly became a super successful person, a super elite, 
[Hirata|sprite=hirata,pose=normal] I wouldn't dare chat with you like this!
[Hirata|sprite=hirata,pose=smile] The way you are now is much more reassuring~
[Teshima|sprite=teshima,pose=bitter] So I should thank my ordinariness, huh?
[Hirata|sprite=hirata,pose=smile] Anyway, keep pedaling hard, you bike nerd~
[指令] sprites: clear
[Narrator] As I watched her receding figure, a sudden emptiness filled my heart—
[Narrator|sprite=teshima,pose=bitter] These carefree moments of bickering with Hirada won't last much longer...
[Narrator|sprite=teshima,pose=bitter] ...Everyone must head toward their own futures—
[指令] sprites: clear
[Narrator] What about me?
[Narrator|sprite=teshima,pose=bitter] Perhaps the only thing I can be certain will never change is "keep riding my bicycle"...
[Narrator|sprite=teshima,pose=bitter] Perhaps the answer lies only on the road ahead, as I keep pedaling on—
[Narrator|sprite=teshima,pose=bitter] And on that road, I'm sure I'll meet important people again—
[指令] sprites: clear
[Narrator] This brings me a small sense of reassurance in my otherwise uncertain future.
[Teshima|sprite=teshima,pose=bitter] Ah—suddenly I really want to ride a bike!
[指令] sprites: clear
[Narrator] Let's head to the club room—

[指令] BGM: fade blocker_special_warm 5000
-> scene_birthday_party


## Scene: scene_hill_climb_blocker
- BG: school_classroom
- BGM: after_school

[Teshima|sprite=teshima,pose=normal] Alright, I'll head to the clubroom to ride my bike. 
[Teshima|sprite=teshima,pose=normal] At this hour, I can still make a round trip—
[Hirata|sprite=hirata,pose=smile] Good luck with that. I'm heading back~

-> scene_hill_climb_blocker_part1

## Scene: scene_hill_climb_blocker_part1
- BG: outdoor_corridor
- BGM: after_school

[指令] sprites: clear
[Narrator] After saying goodbye to Hirata, I hurried toward the cycling club.
[Narrator] Thinking about all the troubles ahead...
[Narrator] I just wanted to clear my mind and ride freely—
[Teshima|sprite=teshima,pose=serious] Ah—I really want to ride my bike!
[指令] sprites: clear
[指令] SFX: kasakasa
[？？？] Haha, look who's here—the bike-obsessed fool!

[指令] BGM: fade after_school 600 -> play lunch_happy

[Teshima|sprite=teshima,pose=blush] Huh? Manami—!!!
[Manami|sprite=manami,pose=smile] Hehehe~ It's me~
[Teshima|sprite=teshima,pose=blush] What are you doing here?
[Teshima|sprite=teshima,pose=serious] And how dare you call me an idiot!
[Manami|sprite=manami,pose=normal] None of that matters. 
[Manami|sprite=manami,pose=smile] I just heard Kojima-senpai wanted to ride a bike, right?
[Teshima|sprite=teshima,pose=serious] I'm not Kojima—
[Manami|sprite=manami,pose=smile] Come on, come on, Senpai! Let's go for a couple laps~
[Teshima|sprite=teshima,pose=blush] It's Teshima, you idiot! 
[Teshima|sprite=teshima,pose=blush] And if I ride with you, how am I supposed to study tonight?!
[Manami|sprite=manami,pose=surprise] You wouldn't have time to study today anyway, right?
[Teshima|sprite=teshima,pose=surprise] ?
[Manami|sprite=manami,pose=normal] Anyway, come on, come on! 
[Manami|sprite=manami,pose=normal] I even brought the bike for you~
[指令] Sprites: Clear
[Narrator] Manami pointed to a spot not far away—
[Narrator] Sure enough, parked in the grass was my Canon Dell, along with his white Look...
[Teshima|sprite=teshima,pose=blush] How did you know where my bike was?
[Manami|sprite=manami,pose=normal] Manami hopped on her bike and kept urging me on.
[Manami|sprite=manami,pose=smile] Come on, come on~ Let's go~
[Narrator|sprite=teshima,pose=blush] This kid is seriously persistent!

[指令] sprites: clear
[Narrator] I had no choice but to hop on my bike and follow him down the back ramp—

[指令] BGM: fade lunch_happy 5000
-> scene_hill_climb_blocker_part1_2


## Scene: scene_hill_climb_blocker_part1_2
- BG: outdoor_climb
- BGM: climb

[指令] SFX: road_bike
[Manami|sprite=manami,pose=normal] Sakamichi-kun told me ages ago that the slope behind Sohoku High is seriously tough!
[Teshima|sprite=teshima,pose=normal] Yeah, when we first enrolled, we couldn't even make it up...
[Manami|sprite=manami,pose=normal] Shima: How fast can you go up it now, Senpai?
[Teshima|sprite=teshima,pose=normal] About 7 minutes?
[Teshima|sprite=teshima,pose=bitter] Still slower than Onoda and the others though...
[Manami|sprite=manami,pose=smile] I'll give it a shot later too!

[指令] sprites: clear
[Narrator] Seeing his eager expression sent a chill down my spine—
[Narrator|sprite=teshima,pose=bitter] There's really no studying tonight...
[Manami|sprite=manami,pose=normal] Even if you push yourself, you'll still keep pace with me.
[Manami|sprite=manami,pose=smile] Maybe we can both break six minutes~
[Narrator|sprite=manami,pose=smile] Saying this, Manami beamed and challenged me with her gaze—

[指令] sprites: clear
[Narrator] I could only sigh helplessly.
[Teshima|sprite=teshima,pose=bitter] Yeah. After all, pushing myself is my signature move—
[Manami|sprite=manami,pose=smile] Hahaha, I love this special move of yours, Senpai~

[指令] sprites: clear
[Narrator] We bickered all the way downhill, feeling the autumn breeze brush past our ears.
[Manami|sprite=manami,pose=bitter] So far it's just been a warm-up. 
[Manami|sprite=manami,pose=smile] I can't wait to start climbing~
[Narrator|sprite=manami,pose=bitter] Seeing his restless excitement, I couldn't help but smile.
[Teshima|sprite=teshima,pose=normal] I've been fixated on the high school tournament.
[Teshima|sprite=teshima,pose=normal]  But now I'm finally free of that mental burden!
[Teshima|sprite=teshima,pose=smile] It's nice to have a relaxed race with you~

[指令] Sprites: Clear
[Narrator] Manami expressed strong dissatisfaction upon hearing this!
[Manami|sprite=manami,pose=bitter] Teshima-senpai, you did that on purpose! 
[Manami|sprite=manami,pose=bitter] I still have a year left!
[Narrator|sprite=manami,pose=bitter] I chuckled. Finally got my chance. 
[Narrator|sprite=manami,pose=bitter] Looks like even this kid has his limits!
[Teshima|sprite=teshima,pose=smile] Hahaha, heard you became captain!
[Manami|sprite=manami,pose=bitter] Yeah, but Yuto, Doubashi, and Takadajo are always chasing me down. It's gotten way harder to sneak out for bike rides...
[Teshima|sprite=teshima,pose=smile] But you're still sneaking out like usual!
[Narrator|sprite=manami,pose=bitter] Manami sighed about how tough being captain really was, and I nodded in agreement.
[Manami|sprite=manami,pose=normal] Teshima-senpai, what do you think is the hardest part about being captain?

[选择]
- Lead everyone to victory -> scene_hill_climb_answer1_1
- Be the strongest on the team -> scene_hill_climb_answer1_2
- Write the club journal every day -> scene_hill_climb_answer1_3 | set: {"manami": "+1"}


## Scene: scene_hill_climb_answer1_1
- BG: outdoor_climb
- BGM: climb

[Teshima|sprite=teshima,pose=bitter] Probably the mental burden of carrying the responsibility to lead everyone to victory...
[Manami|sprite=manami,pose=bitter] Yeah, I'm not very good at that...

[Narrator|sprite=manami,pose=bitter] It's rare to see Manami looking so downcast.
[Teshima|sprite=teshima,pose=normal] Don't overthink it!
[Narrator|sprite=teshima,pose=normal] I hurried to comfort him.
[Teshima|sprite=teshima,pose=normal] Haven't the Hakone runners always been strong individually?
[Teshima|sprite=teshima,pose=smile] Just leave it to them—everyone will perform at their best!
[Manami|sprite=manami,pose=smile] You're right~
[指令] Sprites: Clear
[Narrator] Manami felt a little relieved...

-> scene_hill_climb_blocker_part2


## Scene: scene_hill_climb_answer1_2
- BG: outdoor_climb
- BGM: climb

[Teshima|sprite=teshima,pose=bitter] Everyone probably thinks the captain has to be the strongest person on the team, right?

[指令] sprites: clear
[Narrator] Back then, I was constantly challenged by all sorts of people...
[Narrator] Because I was weak, you see...
[Narrator] Saying that, I felt a bit guilty—I'd already prepared a plan to let Koga be captain...
[Narrator|sprite=manami,pose=normal] Manami looked at me with pure smugness—
[Manami|sprite=manami,pose=normal] Does my high absence rate count?
[Teshima|sprite=teshima,pose=smile] Hahaha~ 
[Teshima|sprite=teshima,pose=smile] In a way, you're already the best since you made it to third year!
[Manami|sprite=manami,pose=smile] Hehehe~
[Teshima|sprite=teshima,pose=smile] I'm not complimenting you!
[Narrator|sprite=teshima,pose=normal] Manami looks really happy—

-> scene_hill_climb_blocker_part2


## Scene: scene_hill_climb_answer1_3
- BG: outdoor_climb
- BGM: climb

[指令] SFX: correct_answer

[Teshima|sprite=teshima,pose=normal] For you, that is...
[Teshima|sprite=teshima,pose=smile] It's probably like writing a diary every day?
[Manami|sprite=manami,pose=bitter] Whoa—that's really, really tough, Senpai...

[指令] sprites: clear
[Narrator] Manami looked at me with teary eyes—seems I hit a nerve...
[Manami|sprite=manami,pose=bitter] Who decided the club journal has to be written by the captain...
[Manami|sprite=manami,pose=bitter] Now I'm constantly getting dragged off to copy the club yearbook...
[Teshima|sprite=teshima,pose=smile] Hahahahaha—
[Manami|sprite=manami,pose=bitter] Can't Takada-jo and the others just be flexible and write it for me?!
[Teshima|sprite=teshima,pose=normal] I used to stay late writing it too~ Those were the days~~~~~
[Manami|sprite=manami,pose=normal] Can I ask you for help if I get stuck writing it later?

[指令] sprites: clear
[Narrator] Manami blinked his big eyes and looked at me obediently—
[Teshima|sprite=teshima,pose=smile] Though there probably isn't much to reference, feel free to ask anytime~
[Manami|sprite=manami,pose=smile] That's great~
[Narrator|sprite=manami,pose=smile] Manami looked incredibly happy—

-> scene_hill_climb_blocker_part2


## Scene: scene_hill_climb_blocker_part2
- BG: outdoor_climb
- BGM: climb

[指令] sprites: clear
[Narrator] It seems Manami deeply understands the challenges of being captain.
[Narrator] And—
[Teshima|sprite=teshima,pose=bitter] Being captain of Hakogaku is even harder—
[Manami|sprite=manami,pose=surprise] Why?

[选择]
- You can’t remember names -> scene_hill_climb_answer2_1 | set: {"manami": "+1"}
- Hakone’s full of powerhouses -> scene_hill_climb_answer2_2
- Carrying the weight of two years of losses -> scene_hill_climb_answer2_3

## Scene: scene_hill_climb_answer2_1
- BG: outdoor_climb
- BGM: climb

[指令] SFX: correct_answer

[Teshima|sprite=teshima,pose=bitter] Because you can't remember names—
[Manami|sprite=manami,pose=bitter] Whoa! How did you know—

[指令] sprites: clear
[Narrator] I feel like if he wasn't on his bike, Manami might have thrown hiself at me, leaving snot and tears all over me...
[Teshima|sprites=teshima:bitter@0.7,manami:bitter@0.3] After all... you can't even remember my name...
[Teshima|sprites=teshima:bitter@0.7,manami:bitter@0.3] With a cycling club as big as Hakogaku, 
[Teshima|sprites=teshima:bitter@0.7,manami:bitter@0.3] There must be at least twenty or thirty new members every year, right?
[Manami|sprites=teshima:bitter@0.7,manami:bitter@0.3] Nonsense! 
[Manami|sprites=teshima:bitter@0.7,manami:bitter@0.3] How could I forget Teshima-senpai's name!

[指令] sprites: clear
[Narrator] Manami protests vehemently—
[Teshima|sprite=teshima,pose=smile] Then what is my name?
[Manami|sprite=manami,pose=bitter] Um... well... that...
[Manami|sprite=manami,pose=normal] Jun-chan?
[Teshima|sprite=teshima,pose=smile] Wrong—
[Manami|sprite=manami,pose=surprise] Eh— Didn't Ashikiba-senpai always call me that?
[Teshima|sprite=teshima,pose=blush] That's only because Ashikiba still calls me that. 
[Teshima|sprite=teshima,pose=blush] It's just a childhood nickname...

[指令] sprites: clear
[Narrator] Only Ashikiba still calls me like we did back then...
[Teshima|sprite=teshima,pose=bitter] Anyway, this is really tough for you—
[Manami|sprite=manami,pose=serious] That's too mean! I was just joking~
[Manami|sprite=manami,pose=normal] How could I possibly forget Junta-senpai's name? 
[Teshima|sprite=teshima,pose=blush] So you've been toying with me this whole time, huh?
[Manami|sprite=manami,pose=smile] Guess?

[指令] sprites: clear
[Narrator] Manami looked at me smugly—
[Narrator] 

@if manami == 2 -> scene_hill_climb_blocker_special
@if manami < 2 -> scene_hill_climb_blocker_part3


## Scene: scene_hill_climb_answer2_2
- BG: outdoor_climb
- BGM: climb

[Teshima|sprites=teshima:normal@0.7,manami:normal@0.3] Because everyone in the Hakogaku is so strong...
[Teshima|sprites=teshima:normal@0.7,manami:normal@0.3] It's hard to coordinate, right?
[Teshima|sprites=teshima:normal@0.7,manami:normal@0.3] And—
[Teshima|sprites=teshima:bitter@0.7,manami:normal@0.3] The hardest one to coordinate with is you yourself!
[Manami|sprite=manami,pose=serious] That's so mean! I'm super cooperative—basically.
[Manami|sprite=manami,pose=serious] If they tell me to climb, I climb!
[Teshima|sprite=teshima,pose=bitter] Only when it comes to climbing, though...
[Manami|sprite=manami,pose=smile] Hehehe~

-> scene_hill_climb_blocker_part3

## Scene: scene_hill_climb_answer2_3
- BG: outdoor_climb
- BGM: climb

[Narrator|sprite=teshima,pose=bitter] The pressure was immense after losing twice...

[指令] sprites: clear
[Narrator] After thinking it over, I still couldn't bring myself to say it.
[Narrator|sprite=manami,pose=normal] Even though it's the truth, it'd be too heavy for this sensitive boy standing before me.
[Narrator|sprite=teshima,pose=bitter] If it were me, I would've given up long ago...
[Narrator|sprite=teshima,pose=bitter] That's probably why he's so much stronger than me?

[指令] sprites: clear
[Narrator] Whatever the outcome, I hope he can overcome it...
[Manami|sprite=manami,pose=normal] ?
[Teshima|sprite=teshima,pose=bitter] Nothing. We should've turned back earlier—
[Manami|sprite=manami,pose=smile] Got it—

-> scene_hill_climb_blocker_part3


## Scene: scene_hill_climb_blocker_special
- BG: outdoor_climb
- BGM: blocker_special_warm

[指令] SFX: road_bike
[Narrator] Manami and I pedaled toward the slope behind the mountain—
[Manami|sprite=manami,pose=serious] Senpai, you're going to keep cycling in college, right?
[Narrator|sprite=manami,pose=serious] Manami turned his head to look at me, wind ruffling his hair—
[Narrator|sprite=teshima,pose=bitter] Through the gaps in his hair, I caught a glimpse of Manami's smile.
[Narrator|sprite=teshima,pose=bitter] Just like during the high school league back then—
[Narrator|sprite=teshima,pose=serious] I couldn't hold back. 
[Narrator|sprite=teshima,pose=serious] Gritting my teeth, I sprinted ahead of Manami!
[Teshima|sprite=teshima,pose=normal] Yeah, I'm no great shakes, but I'm not ready to retire just yet—
[Teshima|sprite=teshima,pose=normal] Besides, cycling between study sessions is good exercise~
[指令] sprites: clear
[Narrator] I glanced back and saw Manami nodding in agreement. 
[Narrator] With a casual little burst of speed, he was right beside me...
[Manami|sprite=manami,pose=serious] That's great! Can I ask you to train me too then?
[Narrator|sprite=manami,pose=smile] As he spoke, he deliberately leaned his bike closer to mine—
[Teshima|sprite=teshima,pose=blush] Hey—don't come any closer!
[Narrator|sprite=manami,pose=serious] Manami stared at me with a defiant look. 
[Narrator|sprite=manami,pose=serious] But I wasn't about to lose the battle of wills...
[Teshima|sprite=teshima,pose=serious] Don't underestimate exam prep students. 
[Teshima|sprite=teshima,pose=serious] You'll see next year!
[Manami|sprite=manami,pose=serious] Go ahead, senpai. 
[Manami|sprite=manami,pose=smile] I'll catch up to you soon enough~
[Narrator|sprite=teshima,pose=bitter] His eyes lit up the moment cycling came up—who was it calling me a bike idiot?
[Manami|sprite=manami,pose=serious] I told you Teshima-senpai was a bike nerd—he just can't stop grinning when cycling comes up.
[Narrator|sprite=teshima,pose=blush] Huh? 
[Narrator|sprite=teshima,pose=blush] How did another idiot beat me to the punch?
[Teshima|sprite=teshima,pose=serious] Did I laugh?
[Manami|sprite=manami,pose=serious] Yes, you did~
[Teshima|sprite=teshima,pose=serious] And you're grinning like crazy too!
[Manami|sprite=manami,pose=serious] It's not just because of cycling~
[Teshima|sprite=teshima,pose=serious] Then why?
[Manami|sprite=manami,pose=smile] Because today was so much fun! Getting to challenge the hill climb record with you, Teshima-senpai~
[Narrator|sprite=teshima,pose=bitter] Uh... Manami's gaze is giving me the creeps...
[Narrator|sprite=teshima,pose=bitter] Hope I don't get blown away and can't get back up...
[Manami|sprite=manami,pose=serious] Hehe, then please guide me, Senpai—I'm off~
[Narrator|sprite=manami,pose=smile] Whoosh—Manami instantly shot up the back hill of Sohoku!
[指令] sprites: clear
[Narrator] I frantically stomped on the pedals to keep up—

[指令] BGM: fade blocker_special_warm 600 -> play climb
-> scene_hill_climb_blocker_part3


## Scene: scene_hill_climb_blocker_part3
- BG: school_gate
- BGM: climb

[Narrator|sprite=manami,pose=normal] Manami and I engaged in an intense race
[Narrator|sprite=teshima,pose=normal] At least it felt that way to me, since I was already over 6 minutes in...
[Narrator|sprite=teshima,pose=bitter] Though thanks to him, it left me feeling a bit unsatisfied.
[Narrator|sprite=manami,pose=smile] But seeing how happy Manami looked, it felt kinda nice~
[Teshima|sprite=teshima,pose=bitter] Um... wanna go another lap?
[Narrator|sprite=teshima,pose=bitter] I wasn't planning on studying tonight anyway—
[Manami|sprite=manami,pose=bitter] While Senpai's invitation is certainly tempting, I have something more important to do—
[Narrator|sprite=manami,pose=bitter] Manami wore a wry smile.
[Narrator|sprite=teshima,pose=blush] I can't believe I got rejected by this hill-climbing maniac! 
[Narrator|sprite=teshima,pose=blush] I'm shocked!
[Teshima|sprite=teshima,pose=surprise] Oh right, aren't you supposed to be in school today? 
[Teshima|sprite=teshima,pose=surprise] What are you doing in Chiba?
[Manami|sprite=manami,pose=normal] I followed Ashikiba senpai here earlier. 
[Manami|sprite=manami,pose=normal] He insisted on coming to find you—
[Manami|sprite=manami,pose=smile] ...said today was your birthday—
[Teshima|sprite=teshima,pose=surprise] Ah!
[Manami|sprite=manami,pose=normal] So, Teshima-senpai, let's hurry to the cycling club! 
[Manami|sprite=manami,pose=normal] Everyone's probably waiting for you~
[指令] sprites: clear
[Narrator] Manami practically dragged me along as he pulled me toward the cycling club—

-> scene_birthday_party


## Scene: scene_birthday_party
- BG: party_room
- BGM: party

[指令] SFX: party_cracker
[Everyone] Happy Birthday, Teshima-senpai——————
[Teshima|sprite=teshima,pose=surprise] You guys secretly planned a birthday party for me!
[Onoda|sprite=onoda,pose=normal] Hehe, I've always been so grateful for your kindness, Senpai~
[Teshima|sprite=teshima,pose=moved] Thank you all, I'm so touched~
[Ashikiba|sprite=ashikiba,pose=smile] Happy birthday, Junta!
[Manami|sprite=manami,pose=smile] Hehehe, I came along too~
[Teshima|sprite=teshima,pose=surprise] Not just Sohoku—how come everyone from Hakogaku is here too?
[Aoyagi|sprite=aoyagi,pose=normal] Just us few might not be enough to handle Junta—
[Imaizumi|sprite=imaizumi,pose=normal] If you find out, there won't be any surprise.
[Koga|sprite=koga,pose=normal] Honestly, just me would've been enough (glasses glare)—
[Narrator|sprite=teshima,pose=bitter] So that's why you kept trying to stop me from coming to the clubroom, huh?
[Naruko|sprite=naruko,pose=normal] Curly-haired Senpai, eat and have fun to your heart's content today!
[Kaburagi|sprite=kaburagi,pose=normal] So much delicious food...Huh?  
[Kaburagi|sprite=kaburagi,pose=normal] Why are there so many takoyaki?

[指令] sprites: clear
[Narrator] Everyone's making such a racket—this is what makes Sohoku so lively~


-> scene_birthday_party_part1

## Scene: scene_birthday_party_part1
- BG: party_room
- BGM: party

[Onoda|sprite=onoda,pose=normal] It hasn't been this lively since the high school tournament~
[Teshima|sprite=teshima,pose=moved] Yeah, it's so much fun~
[Onoda|sprite=onoda,pose=normal] Hehe~ If Senpai's happy, we've succeeded!
[Kaburagi|sprite=kaburagi,pose=normal] Sorry to keep you waiting—now for a special segment!
[Naruko|sprite=naruko,pose=normal] Ta-da! Truth or Dare—
[Naruko|sprite=naruko,pose=normal] Whoever draws the King card gets to choose someone to play Truth or Dare~

[指令] sprites: clear
[Narrator] Naruko passed around a bamboo stick among everyone, finally coming to my side—

[指令] sprites: clear
[Naruko|sprite=naruko,pose=normal] Come on, curly-haired senpai, pick one~

[指令] sprites: clear
[Narrator] I picked a bamboo stick, and saw the tip was red...
[Naruko|sprite=naruko,pose=normal] Curly-haired Senpai is the King!
[Onoda|sprite=onoda,pose=normal] Congratulations, Teshima-senpai~
[Kaburagi|sprite=kaburagi,pose=normal] Senpai, pick a number quickly~
[Narrator|sprite=teshima,pose=blush] You guys are way too obvious, aren't you?
[Narrator|sprite=teshima,pose=bitter] Today is probably going to be one of those days where I cry my eyes out...

[指令] sprites: clear
[Narrator] I guess I'll just have to bite the bullet—

[选择]
- No.4 -> scene_birthday_party_aoyagi | enabledIf: { "aoyagi": "== 2" }
- No.2 -> scene_birthday_party_imaizumi | enabledIf: { "imaizumi": "== 2" }
- No.7 -> scene_birthday_party_koga | enabledIf: { "koga": "== 2" }
- No.11 -> scene_birthday_party_ashikiba | enabledIf: { "ashikiba": "== 2" }
- No.13 -> scene_birthday_party_manami | enabledIf: { "manami": "== 2" }
- No.5 -> scene_birthday_party_teshima

## Scene: scene_birthday_party_aoyagi
- BG: party_room
- BGM: blocker_special_warm

[指令] sprites: clear
[Narrator] Junta—
[Narrator|sprite=aoyagi,pose=blush] Aoyagi flushed and stood up. Looks like he got picked—
[Aoyagi|sprite=aoyagi,pose=blush] Junta is the most important person to me—
[Naruko|sprite=naruko,pose=normal] So he chose truth?
[Aoyagi|sprite=aoyagi,pose=bitter] Back then, I wasn't good at expressing myself. 
[Aoyagi|sprite=aoyagi,pose=bitter] I always felt like I couldn't help much.
[Aoyagi|sprite=aoyagi,pose=bitter] Even though I was quiet and reserved, you never looked down on me.
[Aoyagi|sprite=aoyagi,pose=normal] Junta always pulled me forward with him—
[Aoyagi|sprite=aoyagi,pose=smile] I've always believed forming T2 with you is the greatest fortune of my life!
[Teshima|sprite=teshima,pose=moved] Aoyagi...
[Aoyagi|sprite=aoyagi,pose=normal] That's why, whether now or in the future, I want to stay with you forever!
[Teshima|sprite=teshima,pose=moved] Aoyagi, I'm so happy you feel the same way~

-> scene_birthday_party_aoyagi_cg 

## Scene: scene_birthday_party_aoyagi_cg
- BG: birthday_party_aoyagi_cg
- BGM: blocker_special_warm

[指令] sprites: clear
[Narrator] Aoyagi took my hand—
[Teshima|sprite=teshima,pose=smile] T2 will never disband!
[Narrator|sprite=aoyagi,pose=smile] Aoyagi flashed a dazzling smile—
[Aoyagi|sprite=aoyagi,pose=normal] Yes, we'll always be T2—
[Aoyagi|sprite=aoyagi,pose=normal] Though there's so much more I want to say—
[Narrator|sprite=aoyagi,pose=normal] His grip on my hand tightened, his gaze more resolute than ever.
[Teshima|sprite=teshima,pose=normal] ?
[Aoyagi|sprite=aoyagi,pose=normal] But Junta is just fine the way he is now~
[Teshima|sprite=teshima,pose=smile] Hehe~

-> scene_birthday_party_part2


## Scene: scene_birthday_party_imaizumi
- BG: party_room
- BGM: blocker_special_warm


[指令] sprites: clear
[Narrator] Imaizumi shot to his feet, then just stood there...
[Imaizumi|sprite=imaizumi,pose=blush] ...
[Naruko|sprite=naruko,pose=normal] Say something! Truth or dare?
[Teshima|sprite=teshima,pose=normal] What's up? Don't want me to graduate?
[Imaizumi|sprite=imaizumi,pose=blush] ...
[Teshima|sprite=teshima,pose=serious] So you want me to graduate quickly?
[Imaizumi|sprite=imaizumi,pose=blush] No, no!
[Teshima|sprite=teshima,pose=serious] See? Elites like you just look down on ordinary folks like me.
[Imaizumi|sprite=imaizumi,pose=blush] Teshima-senpai, stop calling me an elite!
[Teshima|sprite=teshima,pose=smile] Hahahahaha—
[Imaizumi|sprite=imaizumi,pose=blush] I've always respected you, Teshima-senpai. 
[Imaizumi|sprite=imaizumi,pose=blush] I've seen all the effort you put in...
[Teshima|sprite=teshima,pose=moved] Imaizumi... So you've been admiring this ordinary guy all along?

-> scene_birthday_party_imaizumi_cg


## Scene: scene_birthday_party_imaizumi_cg
- BG: birthday_party_imaizumi_cg
- BGM: blocker_special_warm

[Narrator|sprite=teshima,pose=moved] Overcome with emotion, I wrapped my left arm around Imaizumi’s head.
[Narrator|sprite=teshima,pose=smile] And ruffled his hair with my right~
[Teshima|sprite=teshima,pose=smile] Next year depends on you—you're our team's ace!
[Imaizumi|sprite=imaizumi,pose=smile] Yes, and also...
[Teshima|sprite=teshima,pose=smile] ?
[Imaizumi|sprite=imaizumi,pose=blush] Let go! I can't breathe—
[Teshima|sprite=teshima,pose=serious] Huh? You mean you're tall, right? So this is how you elites act?
[Imaizumi|sprite=imaizumi,pose=blush] I said it's not that!

-> scene_birthday_party_part2

## Scene: scene_birthday_party_koga
- BG: party_room
- BGM: blocker_special_warm

[Koga|sprite=koga,pose=normal] Nothing more to say to you.
[Teshima|sprite=teshima,pose=serious] Huh?
[Koga|sprite=koga,pose=normal] Finally, I won't have to see someone as weak as you struggling desperately to keep up in front of me anymore!
[Teshima|sprite=teshima,pose=serious] It's my birthday today, you know! 
[Teshima|sprite=teshima,pose=serious] At least say something nice!
[Koga|sprite=koga,pose=normal] Honestly, you're clearly weak, yet you always manage to catch up to me.
[Koga|sprite=koga,pose=normal] No matter how many times I drop you, you just grit your teeth and chase after me.
[Koga|sprite=koga,pose=normal] So honestly, you're a real pain in the ass—
[Teshima|sprite=teshima,pose=serious] You sadistic glasses-wearer!
[Koga|sprite=koga,pose=normal] Hmph. I never planned on being your friend anyway.
[Koga|sprite=koga,pose=normal] But if you give up cycling just because you're too weak—
[Narrator|sprite=koga,pose=normal] The most sarcastic person of all is suddenly the most earnest—

-> scene_birthday_party_koga_cg

## Scene: scene_birthday_party_koga_cg
- BG: birthday_party_koga_cg
- BGM: blocker_special_warm

[Koga|sprite=koga,pose=normal] I'll chase you down to the ends of the earth and give you an earful!
[Narrator|sprite=koga,pose=smile] Koga locked my neck with arms as solid as a rugby player’s,
[Narrator|sprite=teshima,pose=blush] And the air felt thin in an instant…
[Narrator|sprite=teshima,pose=blush] I jabbed my elbow into his ribs in retaliation—
[Narrator|sprite=teshima,pose=blush] But it hardly made a difference…
[Teshima|sprite=teshima,pose=blush] I'll never quit before you do!
[Koga|sprite=koga,pose=normal] Persistence is your greatest strength~
[Teshima|sprite=teshima,pose=blush] You devilish glasses!
[Koga|sprite=koga,pose=normal] So you better keep riding your bike properly in college too—
[Koga|sprite=koga,pose=smile] Don't let me down~
[Teshima|sprite=teshima,pose=blush] This is infuriating! 
[Teshima|sprite=teshima,pose=blush] I'm gonna ride my bike like crazy and blow everyone away!
[Koga|sprite=koga,pose=smile] Hahahaha~

-> scene_birthday_party_part2

## Scene: scene_birthday_party_ashikiba
- BG: party_room
- BGM: blocker_special_warm

[Ashikiba|sprite=ashikiba,pose=bitter] Sorry, Junta. 
[Ashikiba|sprite=ashikiba,pose=bitter] I never celebrated your birthday all these years...
[Teshima|sprite=teshima,pose=normal] But I can make it up to you from now on!
[Ashikiba|sprite=ashikiba,pose=normal] Mm-hmm—
[Ashikiba|sprite=ashikiba,pose=smile] From now on, I'll celebrate every single birthday with you, Junta~
[Teshima|sprite=teshima,pose=normal] Now all your future birthdays will have someone to celebrate them with~ 
[Teshima|sprite=teshima,pose=smile] How incredibly lucky~
[Teshima|sprite=teshima,pose=normal] Also, next month is your birthday, right?
[Ashikiba|sprite=ashikiba,pose=smile] Mm-hmm
[Teshima|sprite=teshima,pose=smile] Is there anything you'd like for a gift?

-> scene_birthday_party_ashikiba_cg

## Scene: scene_birthday_party_ashikiba_cg
- BG: birthday_party_ashikiba_cg
- BGM: blocker_special_warm

[Ashikiba|sprite=ashikiba,pose=normal] Junta~
[Teshima|sprite=teshima,pose=blush] Say it?
[Ashikiba|sprite=ashikiba,pose=smile] The birthday present I want is you, Junta~
[Narrator|sprite=ashikiba,pose=smile] Ashikiba picked me up like he did when I was little—
[Teshima|sprite=teshima,pose=blush] Fine, I'll spend the whole day with you then. 
[Teshima|sprite=teshima,pose=blush] Put me down first!
[Ashikiba|sprite=ashikiba,pose=bitter] That's not what I meant...
[Ashikiba|sprite=ashikiba,pose=smile] But it's so great to be able to play with Shun again!
[Narrator|sprite=teshima,pose=normal] It felt like childhood all over again~
[Narrator|sprite=teshima,pose=blush] But with Ashikiba's current build, if he keeps charging at me like he did back then...
[Narrator|sprite=teshima,pose=blush] Better to dodge him next time!

-> scene_birthday_party_part2

## Scene: scene_birthday_party_manami
- BG: party_room
- BGM: blocker_special_warm

[Manami|sprite=manami,pose=normal] Can I choose Truth or Dare?
[Naruko|sprite=naruko,pose=normal] Finally, someone who knows the rules!
[Manami|sprite=manami,pose=normal] I know how to play—I saw it on TV~
[Teshima|sprite=teshima,pose=normal] Manami probably doesn't have much to say either, right?
[Teshima|sprite=teshima,pose=bitter] Since our only connection is the high school tournament?

-> scene_birthday_party_manami_cg

## Scene: scene_birthday_party_manami_cg
- BG: birthday_party_manami_cg
- BGM: blocker_special_warm

[指令] sprites: clear
[Narrator] Manami suddenly leaned in and planted a kiss on my cheek—
[Teshima|sprite=teshima,pose=blush] Waaah! What are you doing?!
[Manami|sprite=manami,pose=serious] Huh? Isn't that how Truth or Dare works?
[Teshima|sprite=teshima,pose=blush] Absolutely not!
[Manami|sprite=manami,pose=smile] Then I'll choose Truth!
[Teshima|sprite=teshima,pose=blush] Just a token gesture is fine, no need to take it so seriously...
[Manami|sprite=manami,pose=serious] I like you, Teshima-senpai!
[Teshima|sprite=teshima,pose=blush] Huh? You don't have to play anymore! I know you can't play!
[Manami|sprite=manami,pose=serious] Even though it was just that one race, you showed me what true freedom really is—
[Teshima|sprite=teshima,pose=blush] You sure are free!
[Manami|sprite=manami,pose=serious] So what's the next part? 
[Manami|sprite=manami,pose=smile] Can I take you for a sneak run?
[Teshima|sprite=teshima,pose=blush] What kind of TV show are you watching?! 
[Teshima|sprite=teshima,pose=blush] We all know that's not how it's done!

-> scene_birthday_party_part2

## Scene: scene_birthday_party_teshima
- BG: party_room
- BGM: party

[Naruko|sprite=naruko,pose=normal] Number 5? We don't have a number 5, do we?
[Kaburagi|sprite=kaburagi,pose=normal] Then the next round?
[Onoda|sprite=onoda,pose=normal] How about Teshima-senpai goes?

-> scene_birthday_party_part2

## Scene: scene_birthday_party_part2
- BG: party_room
- BGM: blocker_special_warm

[指令] sprites: clear
[Narrator] The banquet was drawing to a close.
[Teshima|sprite=teshima,pose=smile] Thank you all so much for these past years~
[Teshima|sprite=teshima,pose=normal] The days we rode bikes together—
[Teshima|sprite=teshima,pose=moved] I'll never forget them for the rest of my life...
[Narrator|sprite=teshima,pose=moved] It might sound like a closing statement, but these are my true feelings...
[Teshima|sprite=teshima,pose=smile] Sohoku is the best team ever!
[指令] sprites: clear
[Everyone] Oh—


[Kaburagi|sprite=kaburagi,pose=normal] That's true! 
[Kaburagi|sprite=kaburagi,pose=normal] But why are the Hakogaku guys joining in with the "Oh!"?
[指令] sprites: clear
[Narrator] Despite all the noise and commotion, there's no denying some friction exists—
[Narrator] But that's just Souhoku's vibe, right?
[Manami|sprite=manami,pose=normal] So what's the next segment?
[Teshima|sprite=teshima,pose=normal] We're all cyclists here. What do you think?
[Naruko|sprite=naruko,pose=normal] Let's go! All of us, out for a ride!
[Narrator|sprite=teshima,pose=smile] When we all get together, there's only one possible outcome~
[Narrator|sprite=teshima,pose=bitter] The future remains uncertain.
[Narrator|sprite=teshima,pose=normal] But I believe none of us here will ever give up cycling~
[Narrator|sprite=teshima,pose=moved] As long as we keep riding, we'll always be connected—
[Narrator|sprite=teshima,pose=normal] Because—
[Narrator|sprite=teshima,pose=smile] Riding a bike is just so damn fun—
[Teshima|sprite=teshima,pose=normal] Come on! 
[Teshima|sprite=teshima,pose=smile] Let’s enjoy a ride together, guys!
[Everyone] — Yeah!

[Narrator] (The End!)
[Narrator] ~Thanks for your attention~

-> scene_ending


## Scene: scene_ending
- BGM: blocker_special_warm
