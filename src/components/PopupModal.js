import { useState } from "react";

function PopupModal({ onClose }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`notice-popup ${expanded ? "is-expanded" : ""}`}
      aria-label="고객자산 보호 안내"
    >
      <button
        className="notice-popup-close"
        type="button"
        onClick={onClose}
        aria-label="팝업 닫기"
      >
        ×
      </button>

      <p className="notice-popup-summary">
        <span>
    당사 및 당사 임직원을 사칭하는 투자 권유 사기가 발생하고 있습니다.
  </span>

  <span>
    접속하신 도메인이{" "}
    <strong>&quot;mbkpartners-stock.com&quot;</strong>
    인지 다시 확인해 주세요.
  </span>
</p>

      <div className="notice-popup-details">
        <div>
          {/* 팝업의 자세한 멘트는 이 부분에서 수정하기 */}
          <p>
            당사는 위탁증거금과 수수료의 산정·관리 및 처리에 관한
            업무를 관계 법령과 금융감독당국이 공표한 기준 및 지침에
            따라 운영하고 있습니다.
          </p>

          <p>
            고객이 예치한 자산은 회사의 운영자산과 구분하여 관리하는
            것을 원칙으로 하며, 관련 규정과 내부통제 절차에 따라
            안전하게 보호됩니다.
          </p>

          <p>
            *또한 MBK증권은 오직 "MBKstock" 에서만 증권매매 및 예치금예탁, 증거금예탁이 가능하며 이는 MBK 전문가 위탁매매를 이용하는 고객님도 동일합니다.
          </p>

          <a
            className="notice-popup-link"
            href="https://www.fss.or.kr/fss/job/lrgInfo/totalView.do?viewType=BODY&lrgClsfcNo=C00861205505922573"
            target="_blank"
            rel="noreferrer"
          >
            금융감독원에서 MBK증권 정식등록전문가 확인하기
          </a>
        </div>
      </div>

      <button
        className="notice-popup-toggle"
        type="button"
        onClick={() => setExpanded((previous) => !previous)}
        aria-expanded={expanded}
      >
        {expanded ? "접어두기" : "자세히보기"}
        <span className="notice-popup-arrow" aria-hidden="true">
          ↑
        </span>
      </button>
    </aside>
  );
}

export default PopupModal;