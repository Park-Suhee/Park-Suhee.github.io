/**
 * conference-data.js
 * 지진학(Seismology) 학회 마감 트래커 & 발표 아카이브 데이터
 * 새 학회나 발표 이력을 추가할 때는 이 파일만 수정하면 됩니다.
 */

const CONFERENCE_DATA = {
  // 1. 예정된 학회 & 초록 마감 트래커 (2027+)
  upcoming: [
    {
      id: "egu2027",
      year: 2027,
      shortName: "EGU 2027",
      fullName: "European Geosciences Union General Assembly 2027",
      division: "Seismology (SM) / Tectonics & Structural Geology (TS)",
      location: "Vienna, Austria + Online (Hybrid)",
      flag: "🇦🇹",
      conferenceDates: "Apr 25 – Apr 30, 2027",
      startDateISO: "2027-04-25",
      endDateISO: "2027-04-30",
      // 텍사스 시간 (CST = UTC-6, CDT = UTC-5) 및 UTC 병기
      abstractDeadline: {
        date: "2027-01-13",
        texasTime: "Jan 13, 2027 · 06:00 CST (13:00 CET)",
        utcTime: "Jan 13, 2027 · 12:00 UTC",
        isoUTC: "2027-01-13T12:00:00Z"
      },
      travelGrantDeadline: {
        date: "2026-12-01",
        texasTime: "Dec 01, 2026 · 06:00 CST (13:00 CET)",
        utcTime: "Dec 01, 2026 · 12:00 UTC",
        note: "Roland Schlich Travel Support — 초록 마감보다 약 한 달 빠름 (초록 선제출 필수)"
      },
      notificationDate: "Mid-Feb 2027",
      submissionLimit: "1저자 일반 세션 1편 제한 (기초/교육 세션 포함 최대 2편)",
      relatedJournals: ["Solid Earth", "Natural Hazards and Earth System Sciences (NHESS)"],
      texasTravelTip: "DFW → VIE 직항 없음 (프랑크푸르트·런던·파리 1회 경유, 약 12~14시간 소요)",
      url: "https://www.egu27.eu/",
      tags: ["Global", "Hybrid", "Early Travel Grant"]
    },
    {
      id: "ssa2027",
      year: 2027,
      shortName: "SSA 2027",
      fullName: "Seismological Society of America Annual Meeting 2027",
      division: "Earthquake Source, Induced Seismicity, Seismic Networks",
      location: "North America (TBD)",
      flag: "🇺🇸",
      conferenceDates: "Apr 2027 (TBD)",
      startDateISO: "2027-04-14",
      endDateISO: "2027-04-17",
      abstractDeadline: {
        date: "2027-01-06",
        texasTime: "Jan 06, 2027 · 19:00 CST (17:00 PST)",
        utcTime: "Jan 07, 2027 · 01:00 UTC",
        isoUTC: "2027-01-07T01:00:00Z"
      },
      travelGrantDeadline: {
        date: "2027-01-06",
        texasTime: "Jan 06, 2027 · 19:00 CST",
        utcTime: "Jan 07, 2027 · 01:00 UTC",
        note: "초록 제출 시 Student Travel Grant 체크 및 지원서 동시 접수 (학생 회원 가입 필수)"
      },
      notificationDate: "Mid-Feb 2027",
      submissionLimit: "발표 저자(Presenting Author) 기준 1편 권장",
      relatedJournals: ["BSSA (Bulletin of the SSA)", "SRL (Seismological Research Letters)", "The Seismic Record"],
      texasTravelTip: "북미 내 개최로 DFW/DAL에서 국내선 직항 이동 용이 (시차 0~2시간)",
      url: "https://www.seismosoc.org/annual-meeting/",
      tags: ["Seismology Core", "North America", "Networking"]
    },
    {
      id: "iugg2027",
      year: 2027,
      shortName: "IUGG / IASPEI 2027",
      fullName: "29th IUGG General Assembly (IASPEI Seismology Association)",
      division: "IASPEI — Seismology and Physics of the Earth's Interior",
      location: "Incheon (Songdo Convensia), South Korea",
      flag: "🇰🇷",
      conferenceDates: "Jul 08 – Jul 17, 2027",
      startDateISO: "2027-07-08",
      endDateISO: "2027-07-17",
      abstractDeadline: {
        date: "2027-01-20",
        texasTime: "Jan 20, 2027 · 08:59 CST (23:59 KST)",
        utcTime: "Jan 20, 2027 · 14:59 UTC",
        isoUTC: "2027-01-20T14:59:00Z"
      },
      travelGrantDeadline: {
        date: "2027-01-20",
        texasTime: "Jan 20, 2027 · 08:59 CST",
        utcTime: "Jan 20, 2027 · 14:59 UTC",
        note: "4년 주기 총회 — IUGG/IASPEI Grant 신청 시 초록 채택 및 지도교수 확인서 필요"
      },
      notificationDate: "Mar 2027",
      submissionLimit: "주저자 최대 2편 제출 가능 (4년마다 열리는 국제 총회)",
      relatedJournals: ["Journal of Geodynamics", "Tectonophysics", "Geophysical Journal International"],
      texasTravelTip: "DFW → ICN 직항 (American / Korean Air 약 14시간), 인천공항에서 송도 차량 25분",
      url: "https://www.iugg2027.kr/",
      tags: ["4-Year Quadrennial", "Korea", "IASPEI"]
    },
    {
      id: "aogs2027",
      year: 2027,
      shortName: "AOGS 2027",
      fullName: "Asia Oceania Geosciences Society 24th Annual Meeting",
      division: "Solid Earth Sciences (SE) — Seismology & Tectonics",
      location: "Asia-Oceania (TBD)",
      flag: "🌏",
      conferenceDates: "Aug 2027 (TBD)",
      startDateISO: "2027-08-02",
      endDateISO: "2027-08-06",
      abstractDeadline: {
        date: "2027-02-16",
        texasTime: "Feb 16, 2027 · 09:59 CST (23:59 SGT)",
        utcTime: "Feb 16, 2027 · 15:59 UTC",
        isoUTC: "2027-02-16T15:59:00Z"
      },
      travelGrantDeadline: {
        date: "2027-02-16",
        texasTime: "Feb 16, 2027 · 09:59 CST",
        utcTime: "Feb 16, 2027 · 15:59 UTC",
        note: "Reduced Registration / Travel Support는 초록 마감일과 동일하게 마감"
      },
      notificationDate: "Apr 2027",
      submissionLimit: "1저자 최대 2편",
      relatedJournals: ["Geoscience Letters", "Earth, Planets and Space (EPS)"],
      texasTravelTip: "한반도·동아시아 지체구조 및 유발지진 세션 비중이 높아 지역 연구 발표에 적합",
      url: "https://www.asiaoceania.org/",
      tags: ["Asia-Oceania", "East Asia Tectonics"]
    },
    {
      id: "agu2027",
      year: 2027,
      shortName: "AGU 2027",
      fullName: "AGU Annual Meeting 2027",
      division: "Seismology (S) / Tectonophysics (T) / Natural Hazards (NH)",
      location: "Washington, D.C., USA",
      flag: "🇺🇸",
      conferenceDates: "Dec 13 – Dec 17, 2027",
      startDateISO: "2027-12-13",
      endDateISO: "2027-12-17",
      abstractDeadline: {
        date: "2027-07-28",
        texasTime: "Jul 28, 2027 · 22:59 CDT (23:59 EDT)",
        utcTime: "Jul 29, 2027 · 03:59 UTC",
        isoUTC: "2027-07-29T03:59:00Z"
      },
      travelGrantDeadline: {
        date: "2027-08-04",
        texasTime: "Aug 04, 2027 · 22:59 CDT",
        utcTime: "Aug 05, 2027 · 03:59 UTC",
        note: "AGU Student Travel Grant (일반적으로 초록 마감 후 약 1주일 이내 별도 마감)"
      },
      notificationDate: "Late Sep 2027",
      submissionLimit: "1저자 일반 과학 세션 1편 제한 (교육/아웃리치 포함 최대 2편)",
      relatedJournals: ["JGR: Solid Earth", "Geophysical Research Letters (GRL)", "AGU Advances"],
      texasTravelTip: "DFW → DCA/IAD 직항 다수 (약 3시간 소요, 동부 시간대 +1시간)",
      url: "https://www.agu.org/annual-meeting",
      tags: ["Flagship", "USA", "JGR / GRL"]
    }
  ],

  // 2. 다녀온 학회 아카이브 (과거 발표 이력 - 본인 기록으로 수정해 사용하세요)
  past: [
    {
      id: "agu2026-sample",
      year: 2026,
      conference: "AGU Annual Meeting 2026",
      location: "San Francisco, CA, USA",
      flag: "🇺🇸",
      dates: "Dec 2026",
      presentationType: "Poster", // "Oral" | "Poster" | "Invited"
      session: "S014 · Induced Seismicity: Source Physics and Hazard",
      title: "High-Precision Relocation and Local Magnitude Calibration of Hydraulic Fracturing-Induced Earthquakes in the Kiskatinaw Seismic Monitoring and Mitigation Area",
      authors: "Suhee Park, et al.",
      abstractUrl: "", // 초록 링크가 있으면 입력 (없으면 빈 문자열)
      fileUrl: "",     // 포스터 PDF나 발표 자료 링크 (예: "Figure/AGU2026_poster.pdf")
      notes: "KSMMA 지역 유발지진 정밀 위치 재결정 및 개선된 국지규모식($M_L$) 적용 결과 발표"
    },
    {
      id: "ssa2026-sample",
      year: 2026,
      conference: "SSA Annual Meeting 2026",
      location: "USA",
      flag: "🇺🇸",
      dates: "Apr 2026",
      presentationType: "Oral",
      session: "Source Characterization & Offshore Seismicity",
      title: "Waveform-Based Source Characterization of Offshore Earthquake Sequences Near Yeongdeok, Southeastern Korean Peninsula",
      authors: "Suhee Park, et al.",
      abstractUrl: "",
      fileUrl: "",
      notes: "영덕 해역 지진 시퀀스 파형 분석 및 단층 구조 해석"
    }
  ]
};