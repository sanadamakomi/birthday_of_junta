// src/components/GuideModal.jsx
import { useMemo } from 'react'

/** 你可以把这里的内容填满；rows 表格 or sections 段落，二选一/都行 */
const GUIDE = {
  zh: {
    title: '游戏攻略（好感最佳选项）',
    note: '每个场景分支选择【去部室】会遇到可攻略角色，好感度为2可欣赏特殊剧情，且开放最终特殊剧情。',
    // 表格写法（推荐）：每行一条
    rows: [
      { char: '青八木', question: '如果有时光机，你最想回到哪一天', best: '选项3', affection: '+1' },
      { char: '青八木', question: '那你猜我最想回到哪一天', best: '选项1', affection: '+1' },
      { char: '今泉', question: '选哪个好呢？', best: '选择3', affection: '+1' },
      { char: '今泉', question: '我努力假装不要太高兴~', best: '选项3', affection: '+1' },
      { char: '古贺', question: '你就没有什么该烦恼的吗？', best: '选项3', affection: '+1' },
      { char: '古贺', question: '总之是有自行车部的大学！', best: '选项3', affection: '+1' },
      { char: '苇木场', question: '那个时候不告而别，一定让小纯很困扰吧？', best: '选项3', affection: '+1' },
      { char: '苇木场', question: '对你来说最难的应该是——', best: '选项2', affection: '+1' },
      { char: '真波', question: '你觉得当队长最难的是什么？', best: '选项3', affection: '+1' },
      { char: '真波', question: '当箱学的队长就更难了——', best: '选项1', affection: '+1' }
    ],
    rn1: "角色",
    rn2: "问题",
    rn3: "最佳选项",
    rn4: "好感",
  },
  ja: {
    title: '攻略 / Tips（好感度・最適解）',
    note: '各シナリオ分岐で【部室に行く】を選ぶと攻略対象に出会え、好感度が2になると特別イベントを楽しめ、さらに最終特別イベントが解放されます。',
    rows: [
      { char: '青八木', question: '如もしタイムマシンがあったら', best: '選択肢3', affection: '+1' },
      { char: '青八木', question: '一番戻りたい日わかるか', best: '選択肢1', affection: '+1' },
      { char: '今泉', question: 'どれにしようか～？', best: '選択肢3', affection: '+1' },
      { char: '今泉', question: '俺は必死に顔の緩みを隠そうとした', best: '選択肢3', affection: '+1' },
      { char: '古賀', question: '悩むことなんて一つもねえか？', best: '選択肢3', affection: '+1' },
      { char: '古賀', question: 'どこの大学に行くつもり', best: '選択肢3', affection: '+1' },
      { char: '葦木場', question: '純ちゃんを困らせただろう？', best: '選択肢3', affection: '+1' },
      { char: '葦木場', question: '一番大変だったのは', best: '選択肢2', affection: '+1' },
      { char: '真波', question: 'キャプテンで一番難しいこと', best: '選択肢3', affection: '+1' },
      { char: '真波', question: '箱学のキャプテンはもっと大変だ', best: '選択肢1', affection: '+1' }
    ],
    rn1: "攻略対象",
    rn2: "問題",
    rn3: "最適解",
    rn4: "好感度",
  },
  en: {
    title: 'Guide & Tips (Best Affection Choices)',
    note: 'In each scenario branch, choosing [Go to the clubroom] will let you meet a romanceable character. If their affection reaches 2, you can enjoy a special event, and the final special event will also be unlocked.',
    rows: [
      { char: 'Aoyagi', question: 'Which day most want to go back to', best: 'Choice3', affection: '+1' },
      { char: 'Aoyagi', question: 'Guess which day I most want to go back to', best: 'Choice1', affection: '+1' },
      { char: 'Imaizumi', question: 'Which one should I pick?', best: 'Choice3', affection: '+1' },
      { char: 'Imaizumi', question: 'I tried my best not to look too thrilled~', best: 'Choice3', affection: '+1' },
      { char: 'Koga', question: 'Don\'t you have anything to worry about?', best: 'Choice3', affection: '+1' },
      { char: 'Koga', question: 'Which university to apply to?', best: 'Choice3', affection: '+1' },
      { char: 'Ashikiba', question: 'Leaving without a word must really trouble', best: 'Choice3', affection: '+1' },
      { char: 'Ashikiba', question: 'The hardest part for you', best: 'Choice2', affection: '+1' },
      { char: 'Manami', question: 'The hardest part about being a captain', best: 'Choice3', affection: '+1' },
      { char: 'Manami', question: 'Being captain of Hakone Academy is even harder', best: 'Choice1', affection: '+1' }

    ],
    rn1: "Character",
    rn2: "Question",
    rn3: "Best choice",
    rn4: "Affection",
  },
}

export default function GuideModal({ lang = 'ja' }) {
  const data = useMemo(() => GUIDE[lang] || GUIDE.ja, [lang])
  const hasTable = Array.isArray(data.rows) && data.rows.length > 0
  const hasSections = Array.isArray(data.sections) && data.sections.length > 0

  return (
    <div className="guide-modal">
      <h3 className="guide-title">{data.title}</h3>
      {data.note && <p className="guide-note">{data.note}</p>}

      {hasTable && (
        <div className="guide-table-wrap">
          <table className="guide-table">
            <thead>
              <tr>
                <th>{data.rn1}</th><th>{data.rn2}</th><th>{data.rn3}</th><th>{data.rn4}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.char}</td>
                  <td>{r.question}</td>
                  <td>{r.best}</td>
                  <td>{r.affection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {hasSections && (
        <div className="guide-sections">
          {data.sections.map((s, i) => (
            <section key={i} className="guide-section">
              <h4>{s.heading}</h4>
              <ul>
                {s.tips.map((t, j) => <li key={j}>{t}</li>)}
              </ul>
            </section>
          ))}
        </div>
      )}

      {!hasTable && !hasSections && (
        <div className="guide-empty">（尚未填写内容）</div>
      )}
    </div>
  )
}
