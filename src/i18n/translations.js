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
//   Also flagged for review (DevOps / observability / JLPT update):
//     hero.role, hero.lede, hero.focusValue, about.bio1 (extended),
//     about.languagesValue (N5), about.highlights[3] (re-edited) and [4] (new),
//     about.learningNote, homelab.learningNote, skills.groups.observability,
//     contact.specializationValue, footer.role, about.japan.* (new block).
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
      role: 'full-stack & DevOps engineer', // NEW — needs review
      lede: 'I build web, mobile, and backend products end to end — React & React Native on the front, Django and Node.js on the back — and run them in production on Azure with monitoring and secure pipelines.',
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
      focusValue: 'React · Django · Azure · DevSecOps' // NEW — needs review
    },
    about: {
      heading: 'About me',
      bio1: 'I’m a full-stack software engineer with 5 years of experience, based in Strasbourg, France, and currently at Actimage GmbH. I build web, mobile, and backend products for international teams — React & React Native on the front, Django and Node.js on the back. Over the last year my work has shifted toward DevOps: Azure monitoring and observability, secure CI/CD, and technical supervision of projects.',
      bio2: 'Most of my professional work is under NDA, so the projects below are personal side projects — they show how I think about architecture, UI, and shipping working software in the open.',
      cv: 'Download CV',
      cvAlso: 'Also:',
      cvFrontend: 'Frontend',
      cvMobile: 'Mobile',
      languagesLabel: 'Languages',
      languagesValue: 'French (native) · English & German (professional) · Japanese (N5 level, studying)', // NEW — needs review
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
          title: 'Delivery, supervision & mentoring',
          body: 'I supervise projects technically — planning, coordinating developers, and following up with clients — set up CI/CD pipelines (Azure DevOps, GitLab CI, TeamCity, Fastlane), containerize with Docker — including my own self-hosted Raspberry Pi homelab — introduce testing on projects that lack it, review code, and mentor junior developers.'
        },
        {
          // NEW — needs review
          title: 'Observability & DevSecOps on Azure',
          body: 'I monitor production apps with Azure Monitor, Application Insights, and Log Analytics (KQL) — alerts, dashboards, and incident follow-up — and build security into Azure DevOps pipelines with SonarQube quality gates, dependency and container scanning, and secrets kept in Azure Key Vault.'
        }
      ],
      // NEW — needs review
      japan: {
        title: 'Working with Japanese teams',
        intro: 'I’m aiming to work in Japan. Beyond studying the language, these are working values I already practise every day — and they’re a natural fit for Japanese team culture. I’m planning to relocate to Japan from late 2027 and will need visa sponsorship under the Highly Skilled Professional (HSP) visa.',
        values: [
          {
            term: '報連相 · Hō-ren-sō',
            title: 'Report, inform, consult',
            body: 'Supervising projects taught me to keep everyone aligned: regular status updates, clear written documentation, and raising risks early with the team and the client instead of surprising them later.'
          },
          {
            term: '品質 · Hinshitsu',
            title: 'Quality first',
            body: 'I care about getting the details right: tests on projects that had none, careful code review, SonarQube quality gates, and production monitoring so issues are caught before users notice.'
          },
          {
            term: '改善 · Kaizen',
            title: 'Continuous improvement',
            body: 'Small, steady improvements over big rewrites: automating pipelines step by step, modernizing a decade-old legacy app, and using my homelab to keep learning by doing.'
          },
          {
            term: 'チームワーク · Teamwork',
            title: 'Team over individual',
            body: 'Years in international French, German, and English-speaking teams taught me to listen, build consensus, and share knowledge — through mentoring juniors and documenting for the next person.'
          }
        ]
      },
      skillsTitle: 'Skills & tools',
      learningTitle: 'Currently exploring', // NEW — needs review
      learningNote: 'Studying toward AWS certifications and open-source observability (Prometheus, Grafana, OpenTelemetry) — building hands-on experience, not yet claiming production expertise here.' // NEW — needs review
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
        devops: 'Cloud & DevOps',
        observability: 'Monitoring & DevSecOps' // NEW — needs review
      }
    },
    // NEW — needs review (new section)
    homelab: {
      heading: 'Homelab & learning',
      body1: 'I run a Raspberry Pi 4B homelab on my home network — Docker, Pi-hole, and a Caddy reverse proxy in front of self-hosted services. It is what actually runs Game Reviewer, one of the projects below.',
      body2: 'I use it to learn by doing rather than just reading: domain and reverse-proxy setup, container networking, and exposing services safely.',
      learningTitle: 'Currently exploring',
      learningNote: 'Studying toward AWS certifications and open-source observability (Prometheus, Grafana, OpenTelemetry) — building hands-on experience, not yet claiming production expertise here.'
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
      specializationValue: 'React, Django & Azure DevOps', // NEW — needs review
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
      role: 'Full-stack & DevOps engineer', // NEW — needs review
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
      role: 'フルスタック・DevOps エンジニア', // NEW — needs review
      lede: 'React・React Native と Django・Node.js を用いて、Web・モバイル・バックエンドのプロダクトを設計から実装まで一貫して開発し、Azure 上で監視とセキュアなパイプラインを備えた本番運用まで担っています。', // NEW — needs review
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
      focusValue: 'React・Django・Azure・DevSecOps' // NEW — needs review
    },
    about: {
      heading: '自己紹介',
      // NEW — needs review
      bio1: 'フランス・ストラスブールを拠点とする、5年の経験を持つフルスタックソフトウェアエンジニアです。現在は Actimage GmbH に所属し、国際的なチームで Web・モバイル・バックエンドのプロダクトを開発しています。フロントエンドは React・React Native、バックエンドは Django・Node.js を中心としています。この1年は DevOps へと軸足を移し、Azure の監視・オブザーバビリティ、セキュアな CI/CD、プロジェクトの技術的な統括を担当しています。',
      bio2: '業務で携わったプロジェクトの多くは秘密保持契約（NDA）の対象のため、ここでは個人で公開しているプロジェクトを掲載しています。設計・UI・実装に対する考え方が伝わればと思います。',
      cv: '職務経歴書をダウンロード',
      cvAlso: '他のバージョン：', // NEW — needs review
      cvFrontend: 'フロントエンド', // NEW — needs review
      cvMobile: 'モバイル', // NEW — needs review
      languagesLabel: '言語', // NEW — needs review
      languagesValue: 'フランス語（母語）・英語・ドイツ語（ビジネスレベル）・日本語（N5レベル・学習中）', // NEW — needs review
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
          title: 'デリバリー・プロジェクト統括・メンタリング',
          body: 'プロジェクトの技術的な統括（計画、開発者間の調整、クライアントとのフォローアップ）、CI/CD パイプライン（Azure DevOps・GitLab CI・TeamCity・Fastlane）の構築、Docker によるコンテナ化（自宅の Raspberry Pi ホームラボを含む）、テストのなかったプロジェクトへのテスト導入、コードレビュー、ジュニア開発者のメンタリングを行っています。'
        },
        {
          // NEW — needs review
          title: 'Azure でのオブザーバビリティ・DevSecOps',
          body: 'Azure Monitor・Application Insights・Log Analytics（KQL）で本番アプリを監視し、アラート・ダッシュボード・インシデント対応を行っています。また、SonarQube の品質ゲート、依存関係・コンテナのスキャン、Azure Key Vault によるシークレット管理を Azure DevOps パイプラインに組み込んでいます。'
        }
      ],
      // NEW — needs review
      japan: {
        title: '日本のチームで働くために',
        intro: '日本で働くことを目指しています。日本語の学習に加え、日頃から実践している以下の働き方は、日本のチーム文化と自然に重なると考えています。2027年末からの日本移住を予定しており、高度専門職ビザでのビザスポンサーシップを必要としています。',
        values: [
          {
            term: '報連相 · Hō-ren-sō',
            title: '報告・連絡・相談',
            body: 'プロジェクトの統括を通じて、定期的な進捗報告、わかりやすいドキュメント作成、リスクの早期共有を徹底し、チームとクライアントの認識を常にそろえることを大切にしています。'
          },
          {
            term: '品質 · Hinshitsu',
            title: '品質へのこだわり',
            body: 'テストのなかったプロジェクトへのテスト導入、丁寧なコードレビュー、SonarQube の品質ゲート、本番環境の監視により、ユーザーが気づく前に問題を見つけることを心がけています。'
          },
          {
            term: '改善 · Kaizen',
            title: '継続的な改善',
            body: '大きな作り直しよりも、小さな改善の積み重ねを重視しています。パイプラインの段階的な自動化、10 年前のレガシーアプリの刷新、ホームラボでの実践的な学習を続けています。'
          },
          {
            term: 'チームワーク · Teamwork',
            title: '個人よりチーム',
            body: 'フランス語・ドイツ語・英語の国際的なチームでの経験から、相手の話をよく聞き、合意を形成し、知識を共有することを学びました。ジュニア開発者のメンタリングや、次の担当者のためのドキュメント作成も行っています。'
          }
        ]
      },
      skillsTitle: 'スキル・ツール',
      learningTitle: '現在学習中', // NEW — needs review
      learningNote: 'AWS認定資格とオープンソースの監視ツール（Prometheus・Grafana・OpenTelemetry）を学習中で、実践経験を積んでいます。まだ実務レベルの専門性としては掲載していません。' // NEW — needs review
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
        devops: 'クラウド・DevOps', // NEW — needs review
        observability: '監視・DevSecOps' // NEW — needs review
      }
    },
    // NEW — needs review (new section)
    homelab: {
      heading: 'ホームラボ・学習中の技術',
      body1: '自宅のネットワークで Raspberry Pi 4B のホームラボを運用しています。Docker、Pi-hole、Caddy リバースプロキシで自己ホスト型サービスを構築。下記のプロジェクトの一つ、Game Reviewer は実際にこの上で稼働しています。',
      body2: '読むだけでなく手を動かして学ぶための場として、ドメイン・リバースプロキシの設定、コンテナネットワーク、サービスの安全な公開などに取り組んでいます。',
      learningTitle: '現在学習中',
      learningNote: 'AWS認定資格とオープンソースの監視ツール（Prometheus・Grafana・OpenTelemetry）を学習中で、実践経験を積んでいます。まだ実務レベルの専門性としては掲載していません。'
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
      specializationValue: 'React・Django・Azure DevOps', // NEW — needs review
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
      role: 'フルスタック・DevOps エンジニア', // NEW — needs review
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
