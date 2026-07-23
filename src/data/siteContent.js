/*
 * 홈페이지 문구, 링크와 숫자는 대부분 이 파일에서 수정할 수 있습니다.
 * 이미지는 public/assets 폴더에 넣고 /assets/파일명 형식으로 지정하세요.
 */

export const siteContent = {
  investorRelationsUrl: "https://statestreet-icx.efrontcloud.com/",
  navigation: [
    { id: "section1", label: "MAIN" },
    { id: "section2", label: "FIRM" },
    { id: "section3", label: "STRATEGY" },
    { id: "section4", label: "TEAM" },
    { id: "section5", label: "PORTFOLIO" },
    { id: "section6", label: "NEWS" }
  ],
  hero: {
    title: "MBK PARTNERS",
    description: "North Asia’s largest independent private equity firm.",
    videoUrl:
      "https://player.vimeo.com/video/454649038?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
  },
  firm: {
    overview: {
      title: "The Firm",
      paragraphs: [
        "MBK Partners is an independent North Asian private equity firm.",
        "Building on deep regional insights, our firm manages $33 billion in capital with an exclusive focus on markets in Korea, Japan and China.",
        "We invest in telecom/media, financial services, consumer/retail, healthcare and other sectors.",
        "By combining our scale and our position as a local and independent firm, MBK Partners offers a competitive advantage in sourcing, executing and managing investments."
      ],
      button: {
        label: "Learn more about MBK Partners",
        href: "https://www.mbkpartners.com/profile/"
      }
    },
    numbersTitle: "MBK Partners by the Numbers",
    numbers: [
      { value: "2005", label: "Established" },
      { value: "$33", unit: "billion", label: "Capital under management" },
      { value: "110", label: "Investment professionals" },
      { value: "66", label: "Portfolio companies" },
      { value: "$105.1", unit: "billion", label: "Aggregate revenues" },
      { value: "429,831", label: "Aggregate employees" }
    ]
  },
  strategy: [
    {
      title: "MBK Partners Buyouts",
      paragraphs: [
        "With a strategic emphasis in Korean, Japanese and Chinese markets, we aim to develop unified solutions for our investors, typically through management-led buyouts.",
        "MBK Partners Buyouts has extensive experience partnering with management to guide companies through strategy development, capital structure optimization, adoption of global best practices, corporate governance and the pursuit of strategic growth opportunities."
      ],
      button: {
        label: "Learn more about our buyout strategy",
        href: "https://www.mbkpartners.com/strategy/"
      }
    },
    {
      title: "Special Situations",
      paragraphs: [
        "MBK Partners Special Situations provides timely and customized solutions to companies that have limited access to capital.",
        "With the flexibility of investing in several levels, we offer a customized and optimal investment structure for each transaction with equity-like returns and structured downside protection."
      ],
      button: {
        label: "Find out more about Special Situations",
        href: "https://www.mbkpartners.com/strategy/#special"
      }
    }
  ],
  team: {
    title: "About the MBK Partners team",
    paragraphs: [
      "MBK Partners employs 110 investment professionals across five locations who combine strong market knowledge, an understanding of local networks and multinational experience to provide strategic guidance to both investors and the companies we support."
    ],
    button: {
      label: "Meet our senior team",
      href: "https://www.mbkpartners.com/category/team/"
    }
  },
  portfolio: {
    title: "Our portfolio",
    paragraphs: [
      "MBK Partners has built a leading position in North Asia’s private equity market by developing solid local relationships and extensive market knowledge.",
      "We seek to acquire industry-leading companies to achieve long-lasting value for investors, and we invest in a wide range of industries."
    ],
    button: {
      label: "Find out more about our portfolio",
      href: "https://www.mbkpartners.com/category/portfolio/"
    }
  },
  news: {
    title: "MBK Partners in the News",
    description:
      "To read more about recent events at MBK Partners, see our recent news updates.",
    items: [
      {
        date: "November 5, 2024",
        title: "Library named after MBK Partners’ chairman set to open in 2027",
        href: "https://www.koreatimes.co.kr/www/biz/2024/11/602_385721.html"
      },
      {
        date: "October 25, 2024",
        title: "MBK Partners named one of the World’s Best Companies of 2024",
        href: "https://www.koreatimes.co.kr/www/biz/2024/10/602_384993.html"
      },
      {
        date: "July 17, 2024",
        title: "Stepping up",
        href: "https://issuu.com/haverfordedu/docs/sshf24-redacted_issue"
      }
    ],
    button: {
      label: "Read more news",
      href: "https://www.mbkpartners.com/category/news/"
    }
  },
  footer: {
    heading: "CONTACT",
    description: "For any inquiries, please",
    contactLabel: "contact us.",
    copyright: "©2026 MBK Partners. All rights reserved.",
    links: [
      { label: "Contact", href: "https://www.mbkpartners.com/contact/" },
      { label: "Privacy notice", href: "https://www.mbkpartners.com/privacy-policy/" },
      { label: "Terms of use", href: "https://www.mbkpartners.com/terms-of-use/" }
    ]
  }
};
