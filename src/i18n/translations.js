// ─────────────────────────────────────────────────────────────
// All translatable copy lives here. Two locales: `en` and `ja`.
//
// ⚠️ JAPANESE REVIEW STATUS:
//   The original `ja` set was reviewed by the site owner.
//   Strings marked with  // NEW — needs review  were added when the
//   real CV content was folded in and should be re-checked:
//     about.bio1, about.highlights (all 4), about.languagesLabel,
//     about.languagesValue, about.cvAlso, hero.expLabel/expValue,
//     hero.basedValue, contact.locationValue, skills.groups.mobile,
//     skills.groups.devops.
//   Also flagged for review (homelab + learning-in-progress content):
//     nav.homelab, hero.focusValue, about.languagesValue (re-extended),
//     about.highlights[2]/[3] (re-edited), about.learningTitle,
//     about.learningNote, projects.count, projects.items['game-reviewer'],
//     homelab.* (all keys, new section).
//   Keep the key structure identical between `en` and `ja`.
// ─────────────────────────────────────────────────────────────

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Work',
      homelab: 'Lab', // NEW — needs review
      contact: 'Contact'
    },
    hero: {
      role: 'full-stack software engineer',
      lede: 'I build web, mobile, and backend products end to end — React & React Native on the front, Django and Node.js on the back.',
      viewWork: 'View work',
      cv: 'Download CV',
      available: 'available for work',
      basedLabel: 'Based in',
      basedValue: 'Strasbourg · CET',
      currentlyLabel: 'Currently',
      currentlyValue: 'Actimage GmbH',
      expLabel: 'Experience',
      expValue: '5 years',
      focusLabel: 'Focus',
      focusValue: 'React · RN · Django · Docker' // NEW — needs review
    },
    about: {
      heading: 'About me',
      bio1: 'I’m a full-stack software engineer with 5 years of experience, based in Strasbourg, France, and currently at Actimage GmbH. I build web, mobile, and backend products for international teams — React & React Native on the front, Django and Node.js on the back.',
      bio2: 'Most of my professional work is under NDA, so the projects below are personal side projects — they show how I think about architecture, UI, and shipping working software in the open.',
      cv: 'Download CV',
      cvAlso: 'Also:',
      cvFrontend: 'Frontend',
      cvMobile: 'Mobile',
      languagesLabel: 'Languages',
      languagesValue: 'French (native) · English & German (professional) · Japanese (currently learning)', // NEW — needs review
      highlights: [
        {
          title: 'Production dashboards & web apps',
          body: 'I design and build React + TypeScript admin dashboards for enterprise clients — fleet, reservation, and incident management — using a feature-first architecture and reusable, type-safe components.'
        },
        {
          title: 'Backend platforms & APIs',
          body: 'I architect Django platforms with configurable business-rule engines and REST APIs — including a carbon-emissions measurement tool for the construction industry — and tune them for large datasets.'
        },
        {
          // NEW — needs review
          title: 'Mobile & IoT',
          body: 'I build and modernize React Native and Flutter apps, from BLE / Wi-Fi / MQTT tooling for industrial IoT devices to Zeroconf/mDNS device discovery and WebSocket links, plus migrating a decade-old legacy app to a modern architecture.'
        },
        {
          // NEW — needs review
          title: 'Delivery & mentoring',
          body: 'I set up CI/CD pipelines (GitLab CI, TeamCity, Fastlane), containerize with Docker — including my own self-hosted Raspberry Pi homelab — introduce testing on projects that lack it, review code, write documentation, and mentor junior developers.'
        }
      ],
      skillsTitle: 'Skills & tools',
      learningTitle: 'Currently exploring', // NEW — needs review
      learningNote: 'Studying toward AWS certifications and building hands-on experience — not yet claiming production expertise here.' // NEW — needs review
    },
    projects: {
      heading: 'Selected work',
      intro: 'A curated set of side projects spanning full-stack, front-end, and backend work. Most of my professional work is under NDA, so these show how I build in the open.',
      count: '06 personal projects — pro work under NDA', // NEW — needs review
      viewGithub: 'GitHub',
      viewDemo: 'Live demo',
      items: {
        'game-reviewer': {
          // NEW — needs review
          highlight: 'Full lifecycle — idea to self-hosted deployment',
          description: 'A game review platform I designed and shipped end to end: a React, Vite, and TypeScript front end talking to a Strapi v5 backend with a PostgreSQL database, containerized with Docker and running on my own Raspberry Pi homelab behind a Caddy reverse proxy — the whole path from idea to a live, self-hosted deployment.'
        },
        'collaborative-task-management': {
          highlight: 'Full-stack — Java backend + Angular front end',
          description: 'A full-stack task management app with a Spring Boot REST API and an Angular front end. Teams organize work into shared boards with role-based access.'
        },
        sportsee: {
          highlight: 'Data visualization & charting',
          description: 'A sports analytics dashboard that visualizes user performance metrics with interactive charts, built against a mocked REST API in React and TypeScript.'
        },
        'product-catalog': {
          highlight: 'Backend & data modeling in Django',
          description: 'A Django e-commerce demo featuring a product catalog and a session-based shopping cart, backed by the Django admin for content management.'
        },
        bakery: {
          highlight: 'Next.js + headless CMS (Strapi)',
          description: 'A bakery ordering prototype pairing a Next.js front end with a Strapi headless CMS — product selection, cart, and CMS-managed content.'
        },
        kasa: {
          highlight: 'React SPA — routing & responsive UI',
          description: 'A responsive real-estate listing site with dynamic routing, reusable UI components, and smooth client-side navigation, built in React.'
        }
      }
    },
    skills: {
      groups: {
        frontend: 'Front-end',
        mobile: 'Mobile',
        backend: 'Back-end',
        devops: 'Cloud & DevOps'
      }
    },
    // NEW — needs review (new section)
    homelab: {
      heading: 'Homelab & learning',
      body1: 'I run a Raspberry Pi 4B homelab on my home network — Docker, Pi-hole, and a Caddy reverse proxy in front of self-hosted services. It is what actually runs Game Reviewer, one of the projects below.',
      body2: 'I use it to learn by doing rather than just reading: domain and reverse-proxy setup, container networking, and exposing services safely.',
      learningTitle: 'Currently exploring',
      learningNote: 'Studying toward AWS certifications and building hands-on experience — not yet claiming production expertise here.'
    },
    contact: {
      heading: 'Get in touch',
      description: 'I’m always interested in new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project or just say hello!',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Thanks for reaching out! I’ll get back to you soon.',
      altText: 'Or reach me directly:',
      emailMe: 'Email me',
      locationLabel: 'Location',
      locationValue: 'Strasbourg, France',
      specializationLabel: 'Specialization',
      specializationValue: 'React, React Native, Django',
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        messageRequired: 'Message is required',
        messageMin: 'Message must be at least 10 characters',
        submit: 'Something went wrong. Please try again or use the email link below.',
        config: 'Contact form is not configured yet. Please use the email link below.'
      }
    },
    footer: {
      role: 'React, React Native & Django developer',
      connect: 'Connect',
      rights: 'All rights reserved.'
    },
    a11y: {
      toggleTheme: 'Toggle light / dark theme',
      toggleLang: 'Switch language to Japanese'
    }
  },

  ja: {
    nav: {
      home: 'ホーム',
      about: '自己紹介',
      projects: '制作実績',
      homelab: 'ラボ', // NEW — needs review
      contact: 'お問い合わせ'
    },
    hero: {
      role: 'フルスタックソフトウェアエンジニア',
      lede: 'React・React Native と Django・Node.js を用いて、Web・モバイル・バックエンドのプロダクトを設計から実装まで一貫して開発しています。',
      viewWork: '制作実績を見る',
      cv: '職務経歴書をダウンロード',
      available: 'お仕事のご相談を受付中',
      basedLabel: '拠点',
      basedValue: 'ストラスブール（CET）', // NEW — needs review
      currentlyLabel: '所属',
      currentlyValue: 'Actimage GmbH',
      expLabel: '経験', // NEW — needs review
      expValue: '5年', // NEW — needs review
      focusLabel: '専門',
      focusValue: 'React・RN・Django・Docker' // NEW — needs review
    },
    about: {
      heading: '自己紹介',
      // NEW — needs review
      bio1: 'フランス・ストラスブールを拠点とする、5年の経験を持つフルスタックソフトウェアエンジニアです。現在は Actimage GmbH に所属し、国際的なチームで Web・モバイル・バックエンドのプロダクトを開発しています。フロントエンドは React・React Native、バックエンドは Django・Node.js を中心としています。',
      bio2: '業務で携わったプロジェクトの多くは秘密保持契約（NDA）の対象のため、ここでは個人で公開しているプロジェクトを掲載しています。設計・UI・実装に対する考え方が伝わればと思います。',
      cv: '職務経歴書をダウンロード',
      cvAlso: '他のバージョン：', // NEW — needs review
      cvFrontend: 'フロントエンド', // NEW — needs review
      cvMobile: 'モバイル', // NEW — needs review
      languagesLabel: '言語', // NEW — needs review
      languagesValue: 'フランス語（母語）・英語・ドイツ語（ビジネスレベル）・日本語（学習中）', // NEW — needs review
      highlights: [
        {
          // NEW — needs review
          title: '本番運用の管理画面・Web アプリ',
          body: 'エンタープライズ向けに、React・TypeScript による管理ダッシュボード（車両・予約・インシデント管理など）を設計・開発しています。フィーチャーファーストな設計と、型安全で再利用可能なコンポーネントを用いています。'
        },
        {
          // NEW — needs review
          title: 'バックエンド基盤・API',
          body: '設定可能なビジネスルールエンジンと REST API を備えた Django 基盤を設計。建設業界向けの CO2 排出量計測ツールなどを開発し、大規模データにも対応できるよう最適化しています。'
        },
        {
          // NEW — needs review
          title: 'モバイル・IoT',
          body: 'React Native・Flutter アプリの開発とモダナイズを担当。産業用 IoT 機器向けの BLE / Wi-Fi / MQTT 連携ツールから、Zeroconf/mDNS によるデバイス検出や WebSocket 連携、10 年分の技術的負債を抱えるレガシーアプリの刷新まで手がけています。'
        },
        {
          // NEW — needs review
          title: 'デリバリー・メンタリング',
          body: 'CI/CD パイプライン（GitLab CI・TeamCity・Fastlane）の構築、Docker によるコンテナ化（自宅の Raspberry Pi ホームラボを含む）、テストのなかったプロジェクトへのテスト導入、コードレビュー、ドキュメント作成、ジュニア開発者のメンタリングを行っています。'
        }
      ],
      skillsTitle: 'スキル・ツール',
      learningTitle: '現在学習中', // NEW — needs review
      learningNote: 'AWS認定資格取得に向けて学習中で、実践経験を積んでいます。まだ実務レベルの専門性としては掲載していません。' // NEW — needs review
    },
    projects: {
      heading: '制作実績',
      intro: 'フルスタック・フロントエンド・バックエンドにまたがる個人プロジェクトを厳選して掲載しています。業務での実績の多くは NDA の対象のため、ここでは公開できる制作物を紹介します。',
      count: '個人プロジェクト6件 — 業務実績は NDA 対象', // NEW — needs review
      viewGithub: 'GitHub',
      viewDemo: 'デモを見る',
      items: {
        'game-reviewer': {
          // NEW — needs review
          highlight: '企画から自宅サーバー運用まで一気通貫',
          description: '企画から自分で設計・開発したゲームレビュープラットフォーム。React・Vite・TypeScript のフロントエンドが、PostgreSQL データベースを備えた Strapi v5 バックエンドと通信し、Docker でコンテナ化して自宅の Raspberry Pi ホームラボ上で Caddy リバースプロキシ経由で稼働しています。'
        },
        'collaborative-task-management': {
          highlight: 'フルスタック — Java バックエンド + Angular フロントエンド',
          description: 'Spring Boot の REST API と Angular のフロントエンドで構成した、フルスタックのタスク管理アプリ。チームは役割ベースのアクセス権を持つ共有ボードで作業を整理できます。'
        },
        sportsee: {
          highlight: 'データ可視化・チャート',
          description: 'ユーザーのパフォーマンス指標をインタラクティブなチャートで可視化するスポーツ分析ダッシュボード。React と TypeScript で、モック REST API に対して構築しました。'
        },
        'product-catalog': {
          highlight: 'Django によるバックエンド・データモデリング',
          description: '商品カタログとセッションベースのショッピングカートを備えた Django の EC デモ。コンテンツ管理には Django 管理画面を利用しています。'
        },
        bakery: {
          highlight: 'Next.js + ヘッドレス CMS（Strapi）',
          description: 'Next.js のフロントエンドと Strapi のヘッドレス CMS を組み合わせたベーカリー注文のプロトタイプ。商品選択・カート・CMS 管理のコンテンツを備えます。'
        },
        kasa: {
          highlight: 'React SPA — ルーティングとレスポンシブ UI',
          description: '動的ルーティング、再利用可能な UI コンポーネント、スムーズなクライアントサイド遷移を備えた、React 製のレスポンシブな不動産掲載サイト。'
        }
      }
    },
    skills: {
      groups: {
        frontend: 'フロントエンド',
        mobile: 'モバイル', // NEW — needs review
        backend: 'バックエンド',
        devops: 'クラウド・DevOps' // NEW — needs review
      }
    },
    // NEW — needs review (new section)
    homelab: {
      heading: 'ホームラボ・学習中の技術',
      body1: '自宅のネットワークで Raspberry Pi 4B のホームラボを運用しています。Docker、Pi-hole、Caddy リバースプロキシで自己ホスト型サービスを構築。下記のプロジェクトの一つ、Game Reviewer は実際にこの上で稼働しています。',
      body2: '読むだけでなく手を動かして学ぶための場として、ドメイン・リバースプロキシの設定、コンテナネットワーク、サービスの安全な公開などに取り組んでいます。',
      learningTitle: '現在学習中',
      learningNote: 'AWS認定資格取得に向けて学習中で、実践経験を積んでいます。まだ実務レベルの専門性としては掲載していません。'
    },
    contact: {
      heading: 'お問い合わせ',
      description: '新しいお仕事やコラボレーションのご相談を歓迎しています。プロジェクトのご依頼でも、ちょっとしたご挨拶でも、お気軽にご連絡ください。',
      name: 'お名前',
      email: 'メールアドレス',
      message: 'ご用件',
      messagePlaceholder: 'プロジェクトの内容や、ご挨拶などをお気軽にどうぞ。',
      send: '送信する',
      sending: '送信中…',
      success: 'お問い合わせありがとうございます。追ってご返信いたします。',
      altText: 'または直接ご連絡ください：',
      emailMe: 'メールする',
      locationLabel: '所在地',
      locationValue: 'フランス・ストラスブール', // NEW — needs review
      specializationLabel: '専門分野',
      specializationValue: 'React・React Native・Django',
      errors: {
        nameRequired: 'お名前を入力してください',
        emailRequired: 'メールアドレスを入力してください',
        emailInvalid: '有効なメールアドレスを入力してください',
        messageRequired: 'ご用件を入力してください',
        messageMin: 'ご用件は10文字以上で入力してください',
        submit: '送信に失敗しました。時間をおいて再度お試しいただくか、下記のメールをご利用ください。',
        config: 'お問い合わせフォームは現在設定されていません。下記のメールをご利用ください。'
      }
    },
    footer: {
      role: 'React・React Native・Django エンジニア',
      connect: 'リンク',
      rights: '無断転載を禁じます。'
    },
    a11y: {
      toggleTheme: 'ライト / ダークテーマを切り替え',
      toggleLang: '言語を英語に切り替え'
    }
  }
}

export default translations
