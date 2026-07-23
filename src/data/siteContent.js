/*
 * 홈페이지 문구, 링크와 숫자는 대부분 이 파일에서 수정할 수 있습니다.
 * 이미지는 public/assets 폴더에 넣고 /assets/파일명 형식으로 지정하세요.
 */

export const siteContent = {
  investorRelationsUrl: "수정대기",
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
    description: "북아시아 최대 규모의 독립 사모펀드 회사.",
    videoUrl:
      "https://player.vimeo.com/video/454649038?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
  },
  firm: {
    overview: {
      title: "The Firm",
      paragraphs: [
        "MBK Partners는 북아시아에 기반을 둔 독립적인 사모펀드 회사입니다.",
        "저희 회사는 지역에 대한 깊이 있는 이해를 바탕으로 330억 달러 규모의 자산을 운용하고 있습니다. 한국, 일본, 중국 시장에만 집중합니다.",
        "저희는 통신/미디어, 금융 서비스, 소비재/소매, 의료 및 기타 분야에 투자합니다.",
        "우리는 규모의 경제와 지역 기반의 독립 기업으로서의 입지를 결합하여, MBK Partners는 투자 발굴, 실행 및 관리에 있어 경쟁 우위를 제공합니다."
      ],
     
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
        "한국, 일본, 중국 시장에 전략적 중점을 두고, 저희는 일반적으로 경영진 주도 인수 방식을 통해 투자자들을 위한 통합 솔루션을 개발하는 것을 목표로 합니다.",
        "MBK Partners Buyouts는 경영진과 협력하여 기업의 성장을 이끌어가는 데 있어 풍부한 경험을 보유하고 있습니다. 전략 개발, 자본 구조 최적화, 글로벌 모범 사례 도입기업 지배구조와 전략적 성장 기회 추구."
      ],
     
    },
    {
      title: "Special Situations",
      paragraphs: [
        "MBK Partners Special Situations provides timely and customized solutions to companies that have limited access to capital.",
        "With the flexibility of investing in several levels, we offer a customized and optimal investment structure for each transaction with equity-like returns and structured downside protection."
      ],
      
    }
  ],
  team: {
    title: "MBK 파트너스 팀 소개",
    paragraphs: [
      "MBK Partners는 5개 지점에 걸쳐 110명의 투자 전문가를 고용하고 있으며, 이들은 탄탄한 시장 지식을 보유하고 있습니다. 현지 네트워크에 대한 이해와 다국적 기업 경험을 바탕으로 투자자와 지원 대상 기업 모두에게 전략적 지침을 제공합니다 ."
    ],
   
  },
  portfolio: {
    title: "Our portfolio",
    paragraphs: [
      "MBK Partners는 탄탄한 현지 관계와 광범위한 시장 지식을 바탕으로 북아시아 사모펀드 시장에서 선도적인 위치를 구축해 왔습니다.",
      " 저희는 다양한 산업 분야에 투자합니다. 또한 투자자들에게 지속적인 가치를 제공하기 위해 업계를 선도하는 기업들을 인수하고자 합니다."
    ],
   
  },
  news: {
    title: "MBK 파트너스 관련 뉴스",
    description:
      "MBK 파트너스의 최근 소식에 대한 자세한 내용은 최근 뉴스 업데이트를 참조하십시오.",
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
      href: "https://www.koreatimes.co.kr/search"
    }
  },
  footer: {
    heading: "CONTACT",
    description: "STOCK HOTLINE 070-2000-0000 ",
    contactLabel: "문의하기",
    secondaryContact: {
      heading: "주식 위탁거래에 관한 법률 및 고객자산 보호 및 운영기준 안내",
      description: "당사는 위탁증거금과 수수료의 산정·관리 및 처리에 관한 업무를 관계 법령과 금융감독당국이 공표한 기준 및 지침에 따라 운영하고 있습니다. \n고객이 예치한 자산은 회사의 운영자산과 구분하여 관리하는 것을 원칙으로 하며, 관련 규정과 내부통제 절차에 따라 안전하게 보호됩니다. \n또한 수수료와 증거금 기준을 고객에게 명확하고 투명하게 안내하고, 관련 제도나 기준이 변경되는 경우 그 내용을 신속하게 고지함으로써 고객의 권익과 자산 보호에 최선을 다하겠습니다.",
      contactLabel: "바로가기"
    },
    copyright: "©2026 MBK Partners. All rights reserved.",
    
    links: [
      { label: "Contact", href: "https://www.mbkpartners.com/contact/" },
     { label: "패밀리사이트", href: "?" },
    ]
    
  }
  
};
