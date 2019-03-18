import { Menu } from './menu';
import { Content } from './menu';

export const MENUS : Menu[] = [
    {id: 1, name: 'LANGUAGES'},
    {id: 2, name: 'TOOLS'},
    {id: 3, name: 'WORKS'},
    {id: 4, name: 'CONTACTS'}
]

export const PROFILE: Content[] = [

]

export const LANGUAGES: Content[] = [
    { id: 0, title: 'C#', body: '主にUnityで使用していました。トップクラスに使い込んだ言語ですが、あくまでもUnityに特化しており、windows向けはしたことないという…', footer: '使用歴：2年' },
    { id: 1, title: 'Java', body: 'Androidで使用していました。最初の頃で非常に覚えるのに苦労した覚えが。今となってはいい思い出です。', footer: '使用歴：2年' },
    { id: 2, title: 'PHP', body: 'API作ったり、今はWebサービス開発でがっつり使ってます。フレームワークはCakePHP使用。', footer: '使用歴：2年' },
    { id: 3, title: 'Kotlin', body: 'kotlinがandroidに採用されて使ってみることに。そしたら書きやすくて現在僕の中でトップクラスに評価が高い言語になる。型推論の軽やかさと安全性を両立していて好感触。', footer: '使用歴：6ヶ月' },
    { id: 4, title: 'Python', body: 'Djangoでweb開発やりたくて使用。ディープラーニングやるときも使えると思い選択。PHPより書きやすくて感動した。', footer: '使用歴：数ヶ月' },
    { id: 5, title: 'swift', body: 'xcodeでiOSネイティブアプリ作った事ないなーと思い使ってみた。kolinに似てて良い感じかと。', footer: '使用歴：6ヶ月' },
    { id: 6, title: 'TypeScript', body: 'Angularで使用。クラスベースなのでjavaやC#と似ていてとっつきやすい。js書くよりやりやすいかも。', footer: '使用歴:1ヵ月' },
]

export const TOOLS: Content[] = [
    { id: 0, title: 'Git', body:'エンジニアになりたての頃から使用。最初は何度もコンフリクト起こりまくったけど今は完璧に使えるように。rebase愛好者。', footer:''},
    { id: 1, title: 'PhpStorm', body:'PHPの開発で使い始めたら使いやすくて虜に。とにかく静的解析が優秀すぎてどんどんコード書ける。AndroidStudioとUIが似ていて親しみやすいのもグッド。', footer:''},
    { id: 2, title: 'VisualStudioCode', body:'愛用のエディタ。PhpStorm使うようになってからは出番は減ったけど相変わらず軽くて使いやすい。1年くらい愛用している。拡張機能追加でどんな状況にも対応できる。', footer:''},
    { id: 3, title: 'Mac', body:'会社がMac使ってて使うことに。環境構築とかunix系であることとかが便利すぎてプライベートでもMac使いに。', footer:''},
]

export const WORKS: Content[] = [
    {id: 0, title: 'ポートフォリオページ', body:'このWebサイト。自分のスキルとか棚卸しするためと今まで学んだWeb技術で作りたくて作成。随時情報は追加予定。＊Workにはプライベートで関わったもののみ掲載していきます。', footer:''},
    {id: 1, title: 'シンプルメモ', body: 'Android個人リリース第1弾。とにかく軽く何かをリリースしたくて作成。そこそこインストール数伸びてて意外な収穫があった。', footer:''}
]

export const CONTACTS: Content[] = [
    {id: 0, title: 'Comming Soon...', body: '', footer: ''}
]