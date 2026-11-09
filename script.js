/* ===== EDIT CONTENT HERE ===== */
const L = (az, en, ru) => ({ az, en, ru });

const UI = {
  skip: L("Məzmuna keç", "Skip to content", "Перейти к содержанию"),
  nav_about: L("Haqqında", "About", "Обо мне"),
  nav_edu: L("Təhsil", "Education", "Образование"),
  nav_exp: L("İş təcrübəsi", "Experience", "Опыт работы"),
  nav_research: L("Tədqiqat", "Research", "Исследования"),
  nav_pubs: L("Nəşrlər", "Publications", "Публикации"),
  nav_service: L("Fəaliyyət", "Service", "Деятельность"),
  nav_contact: L("Əlaqə", "Contact", "Контакты"),
  hero_role: L("Professor, Elmlər Doktoru", "Professor, Doctor of Sciences in Engineering", "Профессор, доктор технических наук"),
  hero_aff: L("Azərbaycan Dövlət İqtisad Universiteti (UNEC) · Bakı", "Azerbaijan State University of Economics (UNEC) · Baku", "Азербайджанский государственный экономический университет (UNEC) · Баку"),
  hero_lead: L("Fuzzy sistemlər və soft computing üzrə tədqiqatçı. 2011-ci ildən Soft Computing üzrə Dünya Konfransının (WConSC) baş sədri və təşkilatçısıdır.",
    "Researcher in fuzzy systems and soft computing. General Chair and organizer of the World Conference on Soft Computing (WConSC) since 2011.",
    "Исследователь в области нечётких систем и мягких вычислений. С 2011 года — генеральный председатель и организатор Всемирной конференции по мягким вычислениям (WConSC)."),
  cta_pubs: L("Nəşrlərə bax", "View publications", "Смотреть публикации"),
  cta_contact: L("Əlaqə", "Get in touch", "Связаться"),
  about: L("Shahnaz N. Shahbazova 2016-cı ildə Azərbaycan Texniki Universitetində mühəndislik elmləri üzrə elmlər doktoru, 1995-ci ildə fəlsəfə doktoru elmi dərəcəsi almışdır. Professor Lütfi Zadənin elmi irsinin qorunmasına və inkişafına həsr olunmuş WConSC konfransının baş sədridir. 30-dan çox beynəlxalq konfransın proqram komitəsinin üzvü və təxminən 40 beynəlxalq jurnalın rəyçisidir.",
    "Shahnaz N. Shahbazova earned her Doctor of Sciences in Engineering in 2016 and her Doctor of Philosophy in 1995, both at Azerbaijan Technical University. She chairs WConSC, a conference dedicated to preserving and advancing the scientific heritage of Professor Lotfi A. Zadeh. She serves on the program committees of over 30 international conferences and reviews for nearly 40 international journals.",
    "Шахназ Н. Шахбазова получила степень доктора технических наук в 2016 году и доктора философии в 1995 году в Азербайджанском техническом университете. Она возглавляет WConSC — конференцию, посвящённую сохранению и развитию научного наследия профессора Лотфи А. Заде. Входит в программные комитеты более 30 международных конференций и рецензирует статьи почти для 40 международных журналов."),
  honors: L("Fəxri adlar və mükafatlar", "Honors", "Почётные звания"),
  research_note: L("Qonaq tədqiqatçı kimi aparılmış elmi işlər.", "Research stays abroad and fellowships.", "Научные стажировки за рубежом."),
  th_year: L("İl", "Year", "Год"), th_place: L("Yer", "Place", "Место"), th_dur: L("Müddət", "Duration", "Срок"), th_prog: L("Proqram", "Programme", "Программа"),
  months: L("ay", "months", "мес."),
  articles: L("Məqalələr", "Articles", "Статьи"),
  articles_empty: L("Məqalələr tezliklə əlavə olunacaq.", "Articles will be added soon.", "Статьи будут добавлены в ближайшее время."),
  books: L("Springer kitabları (redaktor)", "Springer books (co-editor)", "Книги Springer (соредактор)"),
  memberships: L("Üzvlüklər", "Memberships", "Членство"),
  projects: L("Layihələr", "Projects", "Проекты"),
  skills: L("Proqramlaşdırma dilləri", "Programming languages", "Языки программирования"),
  contact_text: L("Əməkdaşlıq, konfrans və elmi suallar üçün yazın.", "Write for collaboration, conference and research enquiries.", "Пишите по вопросам сотрудничества, конференций и исследований."),
  location: L("Bakı, Azərbaycan", "Baku, Azerbaijan", "Баку, Азербайджан"),
  f_articles: L("elmi məqalə", "scientific articles", "научных статей"),
  f_mono: L("monoqrafiya", "monographs", "монографии"),
  f_springer: L("Springer kitabı", "Springer books", "книг Springer"),
  f_manuals: L("metodik vəsait və dərslik", "manuals and guides", "пособий и методичек"),
};

const EDU = [
  ["2021", L("Fuzzy Sistemlər Assosiasiyasının (FSAA) prezidenti", "President, Fuzzy System Association in Azerbaijan (FSAA)", "Президент Ассоциации нечётких систем Азербайджана (FSAA)"), L("AMEA İdarəetmə Sistemləri İnstitutu", "ANAS Institute of Control Systems", "Институт систем управления НАНА")],
  ["2017", L("Professor, İnformasiya texnologiyaları və proqramlaşdırma kafedrası", "Professor, Information Technology and Programming", "Профессор, кафедра информационных технологий и программирования"), L("Azərbaycan Texniki Universiteti", "Azerbaijan Technical University", "Азербайджанский технический университет")],
  ["2016", L("Mühəndislik elmləri doktoru", "Doctor of Sciences in Engineering", "Доктор технических наук"), L("Dissertasiya: «Paylanmış biliklərə əsaslanan fuzzy neyron şəbəkələrinin layihələndirilməsi modelləri və metodları»", "Dissertation: “Models and Methods of the Design of Distributed Knowledge-Based Fuzzy Neural Networks”", "Диссертация: «Модели и методы проектирования распределённых нечётких нейронных сетей на основе знаний»")],
  ["2002", L("Lütfi Zadə adına Azərbaycan Müasir Milli Akademiyasının akademiki", "Academician, Azerbaijan Modern National Academy named after Lotfi A. Zadeh", "Академик Азербайджанской современной национальной академии имени Лотфи Заде"), ""],
  ["1995", L("Fəlsəfə doktoru (Ph.D.)", "Ph.D., Computer and Systems", "Ph.D., кафедра компьютеров и систем"), L("Azərbaycan Texniki Universiteti", "Azerbaijan Technical University", "Азербайджанский технический университет")],
  ["1979", L("Bakalavr, Riyaziyyat və Mexanika fakültəsi", "Bachelor’s degree, Mathematics and Mechanics", "Бакалавр, факультет математики и механики"), L("Azərbaycan Dövlət Universiteti", "Azerbaijan State University", "Азербайджанский государственный университет")],
];
const HONORS = [
  ["2018", L("Fuzzy sistemlər və soft computing sahəsindəki töhfələrə görə Fellow — Rusiya Fuzzy Sistemlər və Soft Computing Assosiasiyası", "Fellow for contributions to fuzzy systems and soft computing — Russian Association for Fuzzy Systems and Soft Computing", "Fellow за вклад в развитие нечётких систем и мягких вычислений — Российская ассоциация нечётких систем и мягких вычислений")],
  ["2017", L("Óbuda Universitetinin fəxri professoru (Macarıstan)", "Honorary Professor, Óbuda University, Hungary", "Почётный профессор Университета Обуды (Венгрия)")],
  ["2017", L("Aurel Vlaicu Universitetinin fəxri professoru (Arad, Rumıniya)", "Honorary Professor, Aurel Vlaicu University of Arad, Romania", "Почётный профессор Университета Аурела Влайку (Арад, Румыния)")],
  ["2000", L("Mühəndislik elmləri üzrə fəxri fəlsəfə doktoru — Beynəlxalq Kadr Akademiyası, UNESCO", "Honorary Doctorate of Philosophy in Engineering Sciences — International Personnel Academy, UNESCO", "Почётный доктор философии по инженерным наукам — Международная академия кадров, ЮНЕСКО")],
];
const EXP = [
  ["2022", L("Rəqəmsal texnologiyalar və tətbiqi informatika kafedrası", "Department of Digital Technologies and Applied Informatics", "Кафедра цифровых технологий и прикладной информатики"), L("Azərbaycan Dövlət İqtisad Universiteti (UNEC)", "Azerbaijan State University of Economics (UNEC)", "Азербайджанский государственный экономический университет (UNEC)")],
  ["2017–2022", L("Professor, İnformasiya texnologiyaları və proqramlaşdırma kafedrası", "Professor, Information Technology and Programming", "Профессор, информационные технологии и программирование"), L("Azərbaycan Texniki Universiteti", "Azerbaijan Technical University", "Азербайджанский технический университет")],
  ["2014", L("Lütfi Zadə adına Beynəlxalq Elmlər Akademiyasının vitse-prezidenti", "Vice-President, International Academy of Sciences named after Lotfi A. Zadeh", "Вице-президент Международной академии наук имени Лотфи Заде"), ""],
  ["2011", L("Soft Computing üzrə Dünya Konfransının (WConSC) baş sədri", "General Chair, World Conference on Soft Computing (WConSC)", "Генеральный председатель Всемирной конференции по мягким вычислениям (WConSC)"), ""],
  ["1995–2017", L("Dosent, İnformasiya texnologiyaları və proqramlaşdırma kafedrası", "Associate Professor, Information Technology and Programming", "Доцент, информационные технологии и программирование"), L("Azərbaycan Texniki Universiteti", "Azerbaijan Technical University", "Азербайджанский технический университет")],
  ["1992–1995", L("Assistent, Kompüterlər və sistemlər kafedrası", "Assistant Professor, Computer and Systems", "Ассистент, кафедра компьютеров и систем"), L("«Ali məktəbin kadrları» sistemini C dilində işləyib hazırlamışdır.", "Developed the “Staff of High School” system in C.", "Разработала на языке C систему «Кадры высшей школы».")],
  ["1989–1992", L("Müəllim köməkçisi, Kompüter elmləri kafedrası", "Teaching Assistant, Computer Sciences", "Ассистент преподавателя, кафедра компьютерных наук"), L("Abituriyentlərin qəbul sisteminin layihələndirilməsində iştirak etmişdir.", "Took part in designing the graduate application and admission system.", "Участвовала в проектировании системы приёма абитуриентов.")],
  ["1983–1989", L("Doktorantura — ekspert sistemləri nəzəriyyəsi", "PhD studies — theory of expert systems", "Аспирантура — теория экспертных систем"), ""],
];
const VISITS = [
  ["2024", "University of Texas at El Paso, USA", 3, "Visiting Scholar"],
  ["2018", "UC Berkeley, USA", 3, "Visiting Scholar"],
  ["2017", "UC Berkeley, USA", 3, "Visiting Scholar"],
  ["2016", "UC Berkeley, USA", 12, "Visiting Scholar"],
  ["2015", "UC Berkeley, USA", 3, "Visiting Scholar"],
  ["2014", "Scientific Development Foundation, Azerbaijan", 18, "Under the President of Azerbaijan"],
  ["2011–2013", "UC Berkeley, USA", 3, "Visiting Scholar (×3)"],
  ["2010", "University of Siegen, Germany", 3, "DAAD"],
  ["2007–2008", "UC Berkeley, USA", 10, "Fulbright"],
  ["2003", "University of Siegen, Germany", 3, "DAAD"],
  ["1999", "University of Siegen, Germany", 3, "DAAD"],
];
const MEMBERS = [
  L("NAFIPS (Şimali Amerika Fuzzy İnformasiya Emalı Cəmiyyəti) İdarə Heyətinin üzvü", "Board of Directors, North American Fuzzy Information Processing Society (NAFIPS)", "Член правления NAFIPS (Североамериканское общество нечёткой обработки информации)"),
  L("Berkeley Soft Computing Təşəbbüsü (BISC) qrupunun üzvü", "Member, Berkeley Initiative in Soft Computing (BISC), UC Berkeley", "Член группы BISC (Berkeley Initiative in Soft Computing), UC Berkeley"),
  L("IEEE və IEEE Computational Intelligence Society-nin baş üzvü", "Senior Member, IEEE and IEEE Computational Intelligence Society", "Старший член IEEE и IEEE Computational Intelligence Society"),
  L("Acta Polytechnica Hungarica jurnalının redaksiya heyətinin üzvü", "Editorial Board, Acta Polytechnica Hungarica", "Редколлегия журнала Acta Polytechnica Hungarica"),
  L("International Journal of Advanced Intelligence Paradigms (Rumıniya) redaksiya heyətinin üzvü", "Editorial Board, International Journal of Advanced Intelligence Paradigms (Romania)", "Редколлегия International Journal of Advanced Intelligence Paradigms (Румыния)"),
  L("«İnformasiya Texnologiyalarının Problemləri» jurnalının redaksiya heyətinin üzvü", "Editorial Board, Journal of Problems of Information Technology", "Редколлегия журнала «Проблемы информационных технологий»"),
];
const PROJECTS = [
  ["2014–2015", L("Fuzzy çoxluqlar əsasında sosial şəbəkə modelində çoxmənbəli məlumatların intellektual birləşdirilməsi problemi", "Intelligent fusion of multi-source information in a social network model based on fuzzy sets", "Интеллектуальное объединение разнородной информации в модели социальной сети на основе нечётких множеств")],
  ["2011", L("Azərbaycan Texniki Universitetinin Təhsil Şəbəkə Sisteminin yaradılması (KOICA, Koreya)", "Establishment of the Educational Network System of Azerbaijan Technical University (KOICA, Korea)", "Создание образовательной сетевой системы АзТУ (KOICA, Корея)")],
  ["2009", L("İnformasiya-kommunikasiya texnologiyaları və ali təhsil (Sankt-Peterburq)", "Information-communication technologies and higher education (Saint Petersburg)", "Информационно-коммуникационные технологии и высшее образование (Санкт-Петербург)")],
  ["2001", L("Təhsil mühitində İKT-nin tətbiqi (İndiana, ABŞ)", "Application of ICT in educational environments (Indiana, USA)", "Применение ИКТ в образовательной среде (Индиана, США)")],
];
const SKILLS = "C, C++, Java, JavaScript, HTML, CSS, XML, Perl, PHP, MySQL, SQL, Python, Oracle";

Object.assign(UI, {
  nav_home: L("Ana səhifə","Home","Главная"), nav_awards: L("Mükafatlar və üzvlüklər","Awards & Service","Награды и членство"),
  quote: L("Mürəkkəblik artdıqca dəqiq ifadələr mənasını itirir, mənalı ifadələr isə dəqiqliyini.","As complexity rises, precise statements lose meaning and meaningful statements lose precision.","С ростом сложности точные утверждения теряют смысл, а осмысленные — точность."),
  quote_by: L("Lütfi A. Zadə","Lotfi A. Zadeh","Лотфи А. Заде"),
  events: L("Gələcək tədbirlər","Upcoming events","Предстоящие события"),
  events_empty: L("Tarixlər tezliklə əlavə olunacaq.","Dates will be added soon.","Даты будут добавлены.") ,
  links: L("Faydalı keçidlər","Useful links","Полезные ссылки"),
  search_ph: L("Başlıq, müəllif, jurnal üzrə axtar…","Search title, author, venue…","Поиск по названию, автору, изданию…"),
  all: L("Hamısı","All","Все"), year_all: L("Bütün illər","All years","Все годы"),
  t_journal: L("Jurnal məqalələri","Journal papers","Статьи в журналах"), t_conference: L("Konfrans məqalələri","Conference papers","Доклады конференций"),
  t_chapter: L("Kitab fəsilləri","Book chapters","Главы книг"), t_book: L("Redaktə etdiyi kitablar","Edited books","Редактированные книги"),
  t_monograph: L("Monoqrafiyalar","Monographs","Монографии"), t_manual: L("Dərslik və vəsaitlər","Manuals","Пособия"),
  showing: L("göstərilir","shown","показано"), of: L("/","of","из"),
  none: L("Heç nə tapılmadı.","Nothing found.","Ничего не найдено."),
  pub_intro: L("282 elmi məqalə, 3 monoqrafiya, 12 Springer kitabı, 8 dərslik və 12 metodik vəsait.","282 scientific articles, 3 monographs, 12 Springer books, 8 manuals and 12 method manuals.","282 научные статьи, 3 монографии, 12 книг Springer, 8 пособий и 12 методических указаний."),
  more: L("Siyahı tamamlanır — yeni nəşrlər əlavə olunur.","The list is being completed; new items are added regularly.","Список пополняется."),
});
const EVENTS = [ L("Soft Computing üzrə Dünya Konfransı (WConSC) — tarix və yer elan olunacaq","World Conference on Soft Computing (WConSC) — date and venue to be announced","Всемирная конференция по мягким вычислениям (WConSC) — дата и место уточняются") ];
const LINKS = [["IEEE Computational Intelligence Society","https://cis.ieee.org"],["UNEC","https://unec.edu.az"],["Azerbaijan Technical University","https://aztu.edu.az"]];
/* ===== END CONTENT ===== */

const TYPES = ["journal","conference","chapter","book","monograph","manual"];
const VIEWS = ["home","publications","research","experience","awards","contact"];
const $ = (s) => document.querySelector(s);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let lang = "az"; try { lang = localStorage.getItem("lang") || ""; } catch (e) {}
if (!UI.nav_about[lang]) lang = (navigator.language || "az").slice(0, 2);
if (!UI.nav_about[lang]) lang = "az";
const f = { q: "", t: "all", y: "all" };
const ALL = TYPES.flatMap((t) => (PUBS[t] || []).map((s) => { const [txt, url] = s.split(" | ");
  return { t, txt, url, y: (txt.match(/\b(?:19|20)\d{2}\b/g) || []).pop() || "" }; }));

const tl = (id, rows) => { const t = (v) => (v && v[lang]) || v || "";
  $(id).innerHTML = rows.map(([y, a, b]) => `<li><time>${y}</time><div>${t(a)}${t(b) ? `<small>${t(b)}</small>` : ""}</div></li>`).join(""); };

function pubList() {
  const q = f.q.toLowerCase();
  const rows = ALL.filter((p) => (f.t === "all" || p.t === f.t) && (f.y === "all" || p.y === f.y) && (!q || p.txt.toLowerCase().includes(q)))
    .sort((a, b) => (b.y || "0").localeCompare(a.y || "0"));
  let out = "", cur = null;
  rows.forEach((p) => { if (p.y !== cur) { cur = p.y; out += `<h3 class="yr">${cur || "—"}</h3>`; }
    const txt = esc(p.txt).replace(/(Sh(?:ahnaz)?\.? ?N\.? ?)?Shahbazova/g, "<b>$&</b>");
    out += `<p class="pub"><span class="tag">${UI["t_" + p.t][lang]}</span>${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${txt}</a>` : txt}</p>`; });
  $("#publist").innerHTML = out || `<p class="note">${ALL.length ? UI.none[lang] : UI.more[lang]}</p>`;
  $("#pubshown").textContent = `${rows.length} ${UI.of[lang]} ${ALL.length} ${UI.showing[lang]}`;
}
function pubCtl() {
  const years = [...new Set(ALL.map((p) => p.y).filter(Boolean))].sort().reverse();
  const n = (t) => ALL.filter((p) => p.t === t).length;
  $("#pubctl").innerHTML = `<input id="q" type="search" placeholder="${UI.search_ph[lang]}" value="${esc(f.q)}" aria-label="${UI.search_ph[lang]}">
    <select id="ysel" aria-label="${UI.year_all[lang]}"><option value="all">${UI.year_all[lang]}</option>${years.map((y) => `<option ${y === f.y ? "selected" : ""}>${y}</option>`).join("")}</select>
    <div class="chips">${["all", ...TYPES].map((t) => `<button data-t="${t}" aria-pressed="${f.t === t}">${t === "all" ? UI.all[lang] : UI["t_" + t][lang]} <i>${t === "all" ? ALL.length : n(t)}</i></button>`).join("")}</div>`;
}

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = UI[el.dataset.i18n][lang]));
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  $("#about-text").textContent = UI.about[lang];
  $("#facts").innerHTML = [["282","f_articles"],["3","f_mono"],["12","f_springer"],["20","f_manuals"]].map(([n,k]) => `<div><dt>${UI[k][lang]}</dt><dd>${n}</dd></div>`).join("");
  $("#qtext").textContent = "“" + UI.quote[lang] + "”";
  $("#events").innerHTML = EVENTS.map((e) => `<li>${e[lang]}</li>`).join("");
  $("#links").innerHTML = LINKS.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${n}</a></li>`).join("");
  tl("#edu", EDU); tl("#honors", HONORS); tl("#exp", EXP);
  $("#visits").innerHTML = `<thead><tr><th>${UI.th_year[lang]}</th><th>${UI.th_place[lang]}</th><th>${UI.th_dur[lang]}</th><th>${UI.th_prog[lang]}</th></tr></thead><tbody>` +
    VISITS.map(([y,p,m,g]) => `<tr><td>${y}</td><td>${p}</td><td>${m} ${UI.months[lang]}</td><td>${g}</td></tr>`).join("") + "</tbody>";
  $("#members").innerHTML = MEMBERS.map((m) => `<li>${m[lang]}</li>`).join("");
  $("#projects").innerHTML = PROJECTS.map(([y, t]) => `<li><strong>${y}</strong> — ${t[lang]}</li>`).join("");
  $("#skills").textContent = SKILLS;
  pubCtl(); pubList();
}

function route() {
  const id = VIEWS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "home";
  document.querySelectorAll(".view").forEach((v) => (v.hidden = v.id !== id));
  document.querySelectorAll("#nav a").forEach((a) => a.getAttribute("href") === "#" + id ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  window.scrollTo(0, 0);
}
document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => { lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {} render(); }));
$("#pubctl").addEventListener("input", (e) => { if (e.target.id === "q") { f.q = e.target.value; pubList(); } });
$("#pubctl").addEventListener("change", (e) => { if (e.target.id === "ysel") { f.y = e.target.value; pubList(); } });
$("#pubctl").addEventListener("click", (e) => { const b = e.target.closest("[data-t]"); if (!b) return; f.t = b.dataset.t;
  $("#pubctl").querySelectorAll("[data-t]").forEach((x) => x.setAttribute("aria-pressed", x === b)); pubList(); });
$("#yr").textContent = new Date().getFullYear();
window.addEventListener("hashchange", route);
render(); route();