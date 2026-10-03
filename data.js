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
          seal: '评',
          name: '评论 + 散文',
          desc: '评论与散文，兼及房地产与存量时代观察，把所思所想写成普通人读得懂的文字。',
          bgImage: 'art-cover-song.png',
          url: 'https://mp.weixin.qq.com/s/jQJdKdAAeA9Kok5NXCFXrQ', // 微信公众号文章
          meta: [
            { text: '连载中', status: true },
            { text: '评论 · 散文 · 地产', status: false }
          ]
        },
        {
          index: '贰',
          seal: '智',
          name: 'AI coding & 具身智能',
          desc: '聚焦 AI 编程与具身智能，追踪前沿产品与资讯，做业余而认真的观察。',
          bgImage: 'art-landscape.jpg',
          url: 'https://mp.weixin.qq.com/s/47JnFTONtBLJvMOenw-vEg', // 微信公众号文章
          meta: [
            { text: '连载中', status: true },
            { text: 'AI 观察', status: false }
          ]
        },
        {
          index: '叁',
          seal: '筆',
          name: '读书笔记',
          desc: '第一人称读葛兆光《中国思想史》、布迪厄《区隔》等，把古典与理论接到当下。',
          bgImage: 'art-song-tea.jpg',
          url: 'https://mp.weixin.qq.com/s/8XhWFFKxfSDsIKlqW69s1Q', // 微信公众号文章
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
          url: '', // 填项目仓库/演示链接，留空则卡片不可点击
          meta: [
            { text: '运行中', status: true },
            { text: 'DeepSeek · 阶跃', status: false }
          ],
          detail: `
            <p>本地个人 AI 工作台，把想法就地做成能跑的产品，常驻本机运行。</p>
            <h4>它接的是什么</h4>
            <p>文本生成接 <strong>DeepSeek</strong> API，图像生成评估接 <strong>阶跃星辰（StepFun）</strong>；底座是一套工作流 AI 工具（类 WorkBuddy / DeepSeek Harness），把对话、出图、写代码串成一条流水线。</p>
            <h4>了解更多</h4>
            <p>
              <a href="https://platform.deepseek.com" target="_blank" rel="noopener">DeepSeek 开放平台 ↗</a><br>
              <a href="https://platform.stepfun.com" target="_blank" rel="noopener">阶跃星辰 StepFun ↗</a><br>
              <a href="https://www.workbuddy.cn" target="_blank" rel="noopener">WorkBuddy ↗</a>
            </p>
            <h4>一点提示</h4>
            <p>DeepSeek 账号下两把 Key <strong>余额共享</strong>，欠费时切换无效，需先充值；阶跃 Key 放在 <code>~/.stepfun/api_key</code>，由服务端自动读取。</p>
          `
        },
        {
          index: '贰',
          seal: '集',
          name: 'dp-collect',
          desc: '数据采集系统，DB + 在线表单双能力，从采集到落库一条线。',
          bgImage: 'art-song-tea.jpg',
          url: '', // 填项目仓库/演示链接，留空则卡片不可点击
          meta: [
            { text: '建设中', status: true },
            { text: 'DB · 在线表单', status: false }
          ],
          detail: `
            <p>数据采集系统，提供 <strong>DB + 在线表单</strong> 双能力，目标是把「人填 → 库存」这一步自动化，去掉人工搬运。</p>
            <h4>实现路径（概念层，不绑平台）</h4>
            <ul>
              <li><strong>① 表单层</strong>：在线表单采集，浏览器填写即提交，无需本地安装；</li>
              <li><strong>② 校验层</strong>：提交时做格式与必填校验，脏数据挡在入库前；</li>
              <li><strong>③ 落库层</strong>：结构化写入数据库，自动建表或追加，字段可配置；</li>
              <li><strong>④ 查询导出</strong>：按条件检索、导出，供后续分析复用。</li>
            </ul>
            <h4>怎么落地</h4>
            <p>不必绑死某个平台——任何「带数据库能力的表单工作流」都能搭：可用 <a href="https://www.workbuddy.cn" target="_blank" rel="noopener">WorkBuddy</a> 的采集类技能快速起一个，也可自建前端表单 + 轻量数据库（如 SQLite / Postgres）。核心是把采集到落库做成一条线，而不是每次手动拷表。</p>
            <h4>当前状态</h4>
            <p>建设中——架构与目标已清晰，正逐步把各层打通。</p>
          `
        },
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
