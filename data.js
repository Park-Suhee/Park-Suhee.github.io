/* ============================================================
   사이트 내용 — 내용은 이 파일만 고치면 됩니다
   · 항목 사이에는 쉼표(,) 가 필요하고, 마지막 항목 뒤에는 필요 없어요
   · 따옴표는 반드시 곧은 따옴표(") 를 쓰세요
   · { ko: "한글", en: "English" } 에서 한쪽만 적으면 다른 쪽에도 같은 글이 나와요
   ============================================================ */
var SITE = {

  show: { cv: false },   // CV 파일(Suhee_Park_CV.pdf)을 올린 뒤 true 로 바꾸세요

  profile: {
    name: { ko: "박수희", en: "Suhee Park" },
    role: { ko: "지진학 박사과정 · Southern Methodist University, 댈러스",
            en: "Ph.D. student in Seismology · Southern Methodist University, Dallas" },
    photo: "images/profile.jpg",
    intro: {
      ko: ["지진파 자료를 이용하여 지구 내부에서 발생하는 지진의 특성을 분석하고 있어요. 석사과정 때는 캐나다에서 발생하는 수압파쇄로 인한 유발지진의 특성을 분석하고 규모식을 개발하였고, 현재는 영덕 해역에서 발생하는 지진을 분석하고 있습니다.",
           "아직 명확한 박사과정 주제는 없지만, 지진계로 할 수 있는 다양한 연구에 관심이 있습니다."],
      en: ["I use seismic data to characterize earthquakes occurring inside the Earth. During my master’s, I analyzed earthquakes induced by hydraulic fracturing in Canada and developed a magnitude scale for the study area. I am now analyzing earthquakes off the coast of Yeongdeok, South Korea.",
           "I have not settled on a dissertation topic yet, but I am interested in the wide range of research that seismometers make possible."]
    }
  },

  contact: { email: "suheep@smu.edu", affiliation: "Southern Methodist University, Dallas, TX", advisor: "Heather DeShon" },

  keywords: [
    { ko: "자연지진", en: "Natural earthquakes" },
    { ko: "지진 위치결정", en: "Earthquake location" },
    { ko: "지진 규모 추정", en: "Magnitude estimation" },
    { ko: "지진원 특성", en: "Source characterization" },
    { ko: "지진 관측", en: "Seismic monitoring" },
    { ko: "한반도 지진 활동", en: "Seismicity of the Korean Peninsula" }
  ],

  links: [
    { ko: "GitHub", en: "GitHub", url: "https://github.com/Park-Suhee" },
    { ko: "Google Scholar", en: "Google Scholar", url: "https://scholar.google.com/citations?user=2pWikIQAAAAJ&hl=en" },
    { ko: "ORCID", en: "ORCID", url: "https://orcid.org/0000-0001-5731-8464" },
    { ko: "LinkedIn", en: "LinkedIn", url: "https://www.linkedin.com/in/suhee" },
    { ko: "Zenodo", en: "Zenodo", url: "https://zenodo.org/records/17865685" }
  ],

  news: [
    { date: "2026",
      ko: "첫 번째 논문이 Seismological Research Letters에 게재되었습니다.",
      en: "My first paper was published in Seismological Research Letters." }
  ],

  /* ---------- 연구 프로젝트 ----------
     연구 탭에 카드로 나열되고, 카드를 누르면 프로젝트 페이지가 열려요.
     새 프로젝트는 { ... } 블록을 통째로 복사해서 id 만 다르게 추가하세요.
     body 는 문단을 하나씩 따옴표로 묶어 쉼표로 이어 쓰세요 (비워 둬도 돼요).
     papers 에는 아래 publications 의 id 를 적으면 논문 카드가 붙어요. */
  projects: [
    { id: "yeongdeok",
      title: { ko: "영덕 해역 지진 분석", en: "Earthquakes off the Yeongdeok coast" },
      meta: { ko: "박사과정 1학기 차 · 진행 중", en: "Ph.D., first semester · Ongoing" },
      summary: { ko: "영덕 앞바다, 특히 후포퇴 부근에서 발생하는 지진을 분석하고 있어요.",
                 en: "I am analyzing earthquakes that occur off the Yeongdeok coast, particularly near the Hupo Bank." },
      body: { ko: [ /* "추가 설명 문단" */ ], en: [ /* "Additional paragraph" */ ] },
      figures: [ /* { src: "images/fig.png", ko: "그림 설명", en: "Caption" } */ ],
      links: [ /* { ko: "데이터", en: "Data", url: "https://..." } */ ],
      papers: [] },

    { id: "kiskatinaw",
      title: { ko: "캐나다 수압파쇄 유발지진", en: "Hydraulic-fracturing-induced earthquakes in Canada" },
      meta: { ko: "석사과정 · 첫 번째 논문", en: "M.S. · First paper" },
      summary: { ko: "캐나다 수압파쇄 시 발생하는 유발지진의 위치와 특성을 분석하고, 연구지역의 특성에 맞는 규모식을 개발하였습니다.",
                 en: "I analyzed the locations and characteristics of earthquakes induced by hydraulic fracturing in Canada and developed a magnitude scale suited to the study area." },
      body: { ko: [], en: [] },
      figures: [
        { src: "Figure/Figure3.png", en: "Characteristics of the combined magnitude catalog and station corrections in the KSMMA." },
        { src: "Figure/Figure5.png", en: "Independent cross‐validation using the Goerzen et al. (2024) catalog (2021–2022). Comparison of the catalog with previous local magnitude scales (BMK19 and BMK20)." }
      ],
      links: [
        { ko: "논문", en: "Paper", url: "https://doi.org/10.1785/0220260162" },
        { ko: "데이터", en: "Data", url: "https://zenodo.org/records/17865685" }
      ],
      papers: ["park2026"] }
  ],

  /* ---------- 논문 ----------
     role: "first" = 제1저자, "co" = 공저. 저자 목록에서 **내 이름**처럼 별표 두 개로 감싸면 굵게 나와요. */
  publications: [
    { id: "park2026", role: "first",
      title: "Improved Local Magnitude Estimation of Induced Earthquakes in the Kiskatinaw Seismic Monitoring and Mitigation Area, British Columbia, Canada",
      authors: "**Park, S.**, Heo, D., Kang, T.-S., Rhie, J., Kim, S., Lee, S.-J., Dettmer, J., and Eaton, D. W.",
      year: "2026", venue: "Seismological Research Letters", doi: "10.1785/0220260162",
      links: [ { ko: "데이터", en: "Data", url: "https://zenodo.org/records/17865685" } ] }
    /* 공저 논문 추가 예시 (앞 항목 끝에 쉼표를 붙이세요):
    , { id: "kim2025", role: "co",
        title: "논문 제목",
        authors: "Kim, A., **Park, S.**, Lee, B.",
        year: "2025", venue: "Journal Name", doi: "10.xxxx/xxxxx", links: [] } */
  ],

  /* ---------- 학력 · 경력 ---------- */
  education: [
    { title: { ko: "박사과정", en: "Ph.D. student" },
      meta: { ko: "Earth Science, Southern Methodist University, 댈러스, 미국",
              en: "Earth Science, Southern Methodist University, Dallas, USA" } },
    { title: { ko: "연구원", en: "Researcher" },
      meta: { ko: "Sustainable Earth and Environmental Dynamics (SEED) 연구소, 부산, 대한민국",
              en: "Sustainable Earth and Environmental Dynamics (SEED), Busan, South Korea" } },
    { title: { ko: "석사", en: "M.S." },
      meta: { ko: "지구환경시스템과학과, 국립부경대학교, 부산, 대한민국",
              en: "Earth Environmental System Sciences, Pukyong National University, Busan, South Korea" },
      note: { ko: "논문: Characterization of microseismic sources in the Kiskatinaw area, British Columbia, Canada",
              en: "Thesis: Characterization of microseismic sources in the Kiskatinaw area, British Columbia, Canada" } },
    { title: { ko: "학사", en: "B.S." },
      meta: { ko: "지질환경과학과, 국립공주대학교, 공주, 대한민국",
              en: "Geoenvironmental Sciences, Kongju National University, Gongju, South Korea" },
      note: { ko: "캡스톤: 검층 자료를 이용한 셰일가스 저류층의 취성 분석에서 가스포화도에 의한 취성도의 왜곡과 보정 방법",
              en: "Capstone: 검층 자료를 이용한 셰일가스 저류층의 취성 분석에서 가스포화도에 의한 취성도의 왜곡과 보정 방법 (only Korean)" } }
  ],

  /* ---------- 학회 발표 ----------
     role: "coauthor" 로 쓰면 '공저' 표시가 붙고, presenter 에 발표자 이름을 적을 수 있어요 (생략하면 직접 발표) */
  talks: [
    { year: "2023", type: "Poster", venue: "EGU, Austria",
      title: "Characteristics of microseismicity in the Kiskatinaw area, northeastern British Columbia, Canada" }
    /* 공저 발표 예시:
    , { year: "2024", type: "Oral", venue: "학회 이름, 장소", title: "발표 제목", role: "coauthor", presenter: "발표자 이름" } */
  ],

  teaching: [
    { term: "2026 Fall", course: "Earthquakes and Volcanoes", role: "Shadow Teaching Assistant", where: "Southern Methodist University" }
  ],

  awards: [
    /* { year: "2026", ko: "장학금 또는 수상 이름", en: "Award or scholarship name" } */
  ],

  /* ---------- 사진 앨범 (현장 조사, 학회 등) ----------
     사진 탭에 앨범 카드로 나열되고, 누르면 앨범 페이지가 열려요. 비어 있으면 사진 탭이 숨겨져요.
     type: "field"(현장) / "conference"(학회) / 그 외 자유롭게. cover 를 생략하면 첫 사진이 표지가 돼요. */
  albums: [
    /* { id: "field-2026", type: "field",
         title: { ko: "앨범 제목", en: "Album title" },
         date: "2026.10",
         cover: "images/photos/field-2026/01.jpg",
         photos: [
           { src: "images/photos/field-2026/01.jpg", ko: "사진 설명", en: "Photo caption" },
           { src: "images/photos/field-2026/02.jpg", ko: "사진 설명", en: "Photo caption" }
         ] } */
  ]
};
