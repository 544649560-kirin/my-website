// ============================================
// 麒麟个人站 · 数据配置文件
// 以后维护内容，只需要改这个文件就行！
// ============================================

const siteData = {

  // ===== 基本信息 =====
  info: {
    name: '麒麟',
    nameEn: 'Kirin',
    title: 'AI 创作者 · 数字园丁',
    verticalSlogan: '山巅之上 · 日出之时',
    description: '饮茶与写作，远山与薄雾，尽人事而听天命，传统的人做科技的事。',
    quote: '宋韵意境 · 科技表达\n以古人之心，创今日之新',
    heroImage: 'hero-bg.jpg',
    heroBgImage: 'art-cover-song.png'
  },

  // ===== 关于我 =====
  about: {
    title: '关 于 麒 麟',
    subtitle: '在灯下读书、思考、创造的数字园丁',
    heading: '把读进来的心思，<br><span class="highlight">捏成能跑能用的产品</span>',
    paragraphs: [
      '我是 Kirin（麒麟）。总把翻旧的书、发亮的屏幕和待办的本子一并摊在灯下，让每一段读进来的心思先在笔尖活过，再被我亲手捏成能跑能用的产品。',
      '对 AI 充满好奇——从对话生成到视频创作，从工具效率到艺术表达，我热衷于探索 AI 在生活和创作中的各种可能。',
      '这个小站是我的数字花园，记录探索的轨迹，也分享那些最终落了地的产出。欢迎你来逛逛。'
    ],
    sideImage: 'art-landscape.jpg',
    sideImageTitle: '远山有意',
    sideImageSubtitle: 'AI 生成 · 宋画山水风格',
    stats: [
      { number: '4', label: '主力工具' },
      { number: '∞', label: '创作想法' },
      { number: '1', label: '颗好奇心' }
    ]
  },

  // ===== 常用工具 =====
  tools: [
    {
      index: '壹',
      seal: '辦',
      name: 'WorkBuddy',
      desc: '工作流 AI 助手，处理日常事务，效率拉满。',
      bgImage: 'art-song-tea.jpg'
    },
    {
      index: '贰',
      seal: '思',
      name: 'DeepSeek',
      desc: '深度思考型 AI，复杂问题与代码推理的好帮手。',
      bgImage: 'art-landscape.jpg'
    },
    {
      index: '叁',
      seal: '創',
      name: 'TRAE',
      desc: 'AI 编程与创作好帮手，写代码、做网页一把好手。',
      bgImage: 'art-chrysanthemum.jpg'
    },
    {
      index: '肆',
      seal: '躍',
      name: '阶跃星辰',
      desc: '国产大模型之光，理解中文、生成内容都很对味。',
      bgImage: 'art-plum-crane.jpg'
    }
  ],

  // ===== 作品区（按分类组织） =====
  works: {

    // --- 影像 ---
    video: {
      title: '影 像',
      titleEn: 'Video',
      featured: {
        type: 'video',
        videoUrl: 'kirin-coffee.mp4',
        poster: 'art-cover-song.png',
        badge: '精 选 作 品',
        title: 'Kirin · 桂花拿铁',
        desc: 'AI 生成的创意咖啡短片，一杯桂花拿铁的治愈时光。探索味觉与视觉的碰撞，让咖啡也能有诗意的表达。',
        meta: [
          { text: '时长 · 约 10 秒', status: false },
          { text: '工具 · AI 视频生成', status: false },
          { text: '主题 · 咖啡', status: false }
        ]
      }
    },

    // --- 绘画 ---
    painting: {
      title: '绘 画',
      titleEn: 'Painting',
      items: [
        {
          image: 'art-cover-song.png',
          tag: 'AI 绘画',
          title: '宋韵山水',
          desc: '宋代美学山水长卷风格'
        },
        {
          image: 'art-plum-crane.jpg',
          tag: 'AI 绘画',
          title: '梅鹤清韵',
          desc: '梅妻鹤子，清雅脱俗'
        },
        {
          image: 'art-song-tea.jpg',
          tag: 'AI 绘画',
          title: '宋茶雅集',
          desc: '宋人点茶，一盏清欢'
        },
        {
          image: 'art-chrysanthemum.jpg',
          tag: 'AI 绘画',
          title: '秋菊傲霜',
          desc: '采菊东篱下，悠然见南山'
        },
        {
          image: 'art-qingming.jpg',
          tag: 'AI 绘画',
          title: '清明风物',
          desc: '市井烟火，盛世繁华'
        },
        {
          image: 'art-landscape.jpg',
          tag: 'AI 绘画',
          title: '远山有意',
          desc: '山高水长，意境悠远'
        }
      ]
    },

    // --- 写作 ---
    writing: {
      title: '写 作',
      titleEn: 'Writing',
      items: [
        {
          index: '壹',
          seal: '庄',
          name: '读庄子安人生',
          desc: '以庄子回应现代人的精神内耗，谈空船之喻与心物关系。公众号长期连载。',
          bgImage: 'art-cover-song.png',
          meta: [
            { text: '连载中', status: true },
            { text: '微信公众号', status: false }
          ]
        },
        {
          index: '贰',
          seal: '存',
          name: 'kirin · 存量时代',
          desc: '房地产与时代观察，把宏大的存量叙事写成普通人读得懂的文字。',
          bgImage: 'art-landscape.jpg',
          meta: [
            { text: '连载中', status: true },
            { text: '房地产观察', status: false }
          ]
        },
        {
          index: '叁',
          seal: '筆',
          name: '读书笔记',
          desc: '第一人称读葛兆光《中国思想史》、布迪厄《区隔》等，把古典与理论接到当下。',
          bgImage: 'art-song-tea.jpg',
          meta: [
            { text: '不定期', status: false },
            { text: '思想史 · 社会学', status: false }
          ]
        }
      ]
    },

    // --- 我在做的项目 ---
    projects: {
      title: '我 在 做 的 项 目',
      titleEn: 'Projects',
      items: [
        {
          index: '壹',
          seal: '台',
          name: 'MVP Workbench',
          desc: '本地 AI 工作台：文本生成接 DeepSeek，图像生成接阶跃星辰，把想法就地做成能跑的东西。',
          bgImage: 'art-landscape.jpg',
          meta: [
            { text: '运行中', status: true },
            { text: 'DeepSeek · 阶跃', status: false }
          ]
        },
        {
          index: '贰',
          seal: '集',
          name: 'dp-collect',
          desc: '数据采集系统，DB + 在线表单双能力，从采集到落库一条线。',
          bgImage: 'art-song-tea.jpg',
          meta: [
            { text: '建设中', status: true },
            { text: 'DB · 在线表单', status: false }
          ]
        },
        {
          index: '叁',
          seal: '訊',
          name: 'AI 资讯流水线',
          desc: '每日自动化产出聚焦 AI 编程与具身智能的资讯摘要，无人值守运行。',
          bgImage: 'art-chrysanthemum.jpg',
          meta: [
            { text: '每日运行', status: true },
            { text: '自动化 · AI', status: false }
          ]
        }
      ]
    }
  },

  // ===== 技能标签 =====
  skills: [
    {
      category: 'AI 工具使用',
      items: ['Prompt 工程', 'AI 绘画', 'AI 写作', 'AI 视频', 'AI 编程']
    },
    {
      category: '技术栈',
      items: ['Python', 'HTML / CSS', 'JavaScript', '数据分析']
    },
    {
      category: '兴趣领域',
      items: ['大语言模型', 'AIGC 创作', '阅读写作', '咖啡文化', '数字花园', '宋代美学']
    }
  ],

  // ===== 联系方式 =====
  contact: {
    title: '找 我 聊 聊',
    desc: '如果你也喜欢阅读、创作和 AI，欢迎来找我交流！',
    links: [
      {
        type: 'email',
        label: '邮箱',
        url: 'mailto:mmcn7400@agent.qq.com'
      },
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/544649560-kirin'
      },
      {
        type: 'wechat',
        label: '微信',
        url: 'wechat-qr.png'
      }
    ]
  },

  // ===== 页脚 =====
  footer: {
    text: '山巅之上 · 日出之时 · Made by Kirin · Hosted on GitHub Pages'
  }

};
