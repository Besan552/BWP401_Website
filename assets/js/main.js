const eventsData = [
    { id: 1, title: {ar: "المسابقة البرمجية (ICPC)", en: "Competitive Programming (ICPC)"}, date: "2026-05-20", location: {ar:"مخبر الحاسوب المركزي", en:"Central PC Lab"}, category: "tech", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80", desc: {ar: "تحدي لحل المشكلات الخوارزمية باستخدام لغات البرمجة. فرصة للتأهل للمسابقات الإقليمية وتمثيل الجامعة في المحافل الدولية.", en: "Algorithmic problem-solving challenge. Chance to qualify for regional contests and represent the university internationally."} },
    { id: 2, title: {ar: "ندوة الذكاء الاصطناعي", en: "Artificial Intelligence Seminar"}, date: "2026-06-15", location: {ar:"المدرج الرئيسي", en:"Main Hall"}, category: "seminar", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80", desc: {ar: "نقاش مفتوح حول مستقبل تقنيات الذكاء الاصطناعي التوليدي وتأثيره على سوق العمل في القطاع التقني.", en: "Open discussion on the future of generative AI and its impact on the job market in the tech sector."} },
    { id: 3, title: {ar: "ورشة الأمن السيبراني", en: "Cybersecurity Workshop"}, date: "2026-05-10", location: {ar:"أونلاين (Zoom)", en:"Online (Zoom)"}, category: "seminar", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80", desc: {ar: "ورشة عمل عملية لتعلم أساسيات الحماية واكتشاف الثغرات في تطبيقات الويب وكيفية التصدي للهجمات الشائعة.", en: "Practical workshop to learn basics of web security, vulnerability discovery, and mitigating common attacks."} },
    { id: 4, title: {ar: "معرض مشاريع التخرج", en: "Graduation Projects Exhibition"}, date: "2026-07-01", location: {ar:"بهو الجامعة", en:"University Lobby"}, category: "tech", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80", desc: {ar: "استعراض لأفضل المشاريع البرمجية والهندسية لطلاب السنة الأخيرة، فرصة للتشبيك مع الشركات.", en: "Showcase of the best software and engineering projects by senior students, a chance to network with companies."} },
    { id: 5, title: {ar: "بطولة الشطرنج الافتراضية", en: "Virtual Chess Tournament"}, date: "2026-05-25", location: {ar:"أونلاين (Lichess)", en:"Online (Lichess)"}, category: "sport", img: "https://images.unsplash.com/photo-1511116645353-8ebdf0353c71?auto=format&fit=crop&w=600&q=80", desc: {ar: "البطولة السنوية الكبرى لطلاب الجامعة. جوائز قيمة بانتظار الفائزين بالمراكز الثلاثة الأولى.", en: "Annual major tournament for students. Valuable prizes await the top three winners."} },
    { id: 6, title: {ar: "نادي القراءة والتكنولوجيا", en: "Tech & Reading Club"}, date: "2026-06-05", location: {ar:"المكتبة المركزية", en:"Central Library"}, category: "culture", img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80", desc: {ar: "جلسة نقاشية حول كتب التقنية وتأثير التطور الرقمي على المجتمع والعلاقات الإنسانية.", en: "Discussion session on tech books and digital evolution's impact on society and human relations."} }
];

const categories = [
    { id: 'tech', icon: 'fa-laptop-code', label: {ar: 'برمجة', en: 'Coding'}, color: 'bg-primary text-white' },
    { id: 'seminar', icon: 'fa-chalkboard-user', label: {ar: 'ندوات', en: 'Seminars'}, color: 'bg-danger text-white' },
    { id: 'culture', icon: 'fa-book-open', label: {ar: 'ثقافة', en: 'Culture'}, color: 'bg-info text-dark' },
    { id: 'sport', icon: 'fa-futbol', label: {ar: 'ترفيه', en: 'Fun'}, color: 'bg-success text-white' }
];

const translations = {
    ar: {
        logo: "دليل فعاليات SVU", nav_home: "الرئيسية", nav_events: "الفعاليات", nav_about: "عن الدليل", nav_contact: "اتصل بنا",
        slide1_title: "المسابقة البرمجية (ICPC)", slide1_desc: "تحدي الخوارزميات وحل المشكلات لطلاب المعلوماتية.", btn_details: "التفاصيل",
        slide2_title: "ندوة الذكاء الاصطناعي", slide2_desc: "نقاش حول مستقبل تقنيات الذكاء الاصطناعي التوليدي.",
        slide3_title: "ورشة الأمن السيبراني", slide3_desc: "تعلم أساسيات الحماية واكتشاف ثغرات الويب.",
        quick_categories: "تصنيفات سريعة", latest_events: "أحدث الفعاليات", view_all: "عرض الكل",
        team_members: "أعضاء الفريق (أرقام الطلاب)", team_desc: "تم إنجاز هذا المشروع ضمن وظيفة مقرر BWP401 من قبل:",
        all_events: "كافة الفعاليات", cat_all: "كل التصنيفات", cat_tech: "برمجة وتكنولوجيا", cat_seminar: "ندوات وورش", cat_culture: "ثقافة ومجتمع", cat_sport: "رياضة وترفيه",
        no_events: "لا توجد فعاليات تطابق بحثك.", back_to_events: "العودة للفعاليات",
        event_date: "التاريخ", event_loc: "المكان", event_cat: "التصنيف", book_now: "أضف للتقويم (حجز)", share: "مشاركة",
        related_events: "فعاليات ذات صلة",
        about_title: "عن دليل الفعاليات", about_desc: "المنصة الأولى لطلاب الجامعة الافتراضية السورية لاكتشاف والمشاركة في الفعاليات الأكاديمية والترفيهية والثقافية.",
        our_vision: "رؤيتنا", vision_text: "بناء مجتمع طلابي متفاعل ونشط يعزز من المهارات الشخصية والعلمية خارج الإطار الأكاديمي التقليدي.",
        our_mission: "رسالتنا", mission_text: "توفير منصة سهلة الاستخدام وموثوقة تجمع كافة النشاطات والفعاليات في مكان واحد لتسهيل وصول الطلاب إليها.",
        our_team: "فريق العمل", role_dev: "مطور واجهات", role_design: "مصممة UI/UX", role_qa: "مدير الجودة",
        policies: "سياسات النشر", pol_1: "يجب أن تكون الفعالية مرتبطة بنشاطات الجامعة أو مفيدة للطلاب.", pol_2: "يمنع نشر محتوى مسيء أو يخالف قوانين الجامعة الافتراضية.", pol_3: "تتم مراجعة الفعاليات قبل نشرها النهائي.",
        contact_us: "اتصل بنا", form_name: "الاسم الكامل", form_email: "البريد الإلكتروني", form_msg: "رسالتك", btn_send: "إرسال الرسالة",
        err_name: "يرجى إدخال اسمك.", err_email: "يرجى إدخال بريد إلكتروني صحيح.", err_msg: "يرجى كتابة رسالتك قبل الإرسال.",
        alt_contact: "معلومات التواصل", follow_us: "تابعنا على المنصات", footer_desc: "المنصة الرسمية لطلاب الجامعة الافتراضية لمتابعة أحدث الأنشطة والفعاليات.",
        quick_links: "روابط سريعة", copyright: "جميع الحقوق محفوظة لطلاب الجامعة الافتراضية السورية.",
        modal_title: "تأكيد الحضور", modal_body: "هل أنت متأكد من رغبتك في حجز مقعد وهمي لهذه الفعالية؟ سيتم إرسال تذكرة افتراضية لبريدك.",
        btn_cancel: "إلغاء", btn_confirm: "تأكيد الحجز", search_placeholder: "ابحث عن فعالية...", success_msg: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
        book_success: "تم تأكيد حجزك الافتراضي بنجاح! راجع بريدك الإلكتروني."
    },
    en: {
        logo: "SVU Events", nav_home: "Home", nav_events: "Events", nav_about: "About", nav_contact: "Contact",
        slide1_title: "Competitive Programming (ICPC)", slide1_desc: "Algorithmic challenges for IT students.", btn_details: "Details",
        slide2_title: "AI Seminar", slide2_desc: "Discussing the future of generative AI technologies.",
        slide3_title: "Cybersecurity Workshop", slide3_desc: "Learn basics of web security and vulnerabilities.",
        quick_categories: "Quick Categories", latest_events: "Latest Events", view_all: "View All",
        team_members: "Team Members (Student IDs)", team_desc: "This project is done for BWP401 by:",
        all_events: "All Events", cat_all: "All Categories", cat_tech: "Tech & Coding", cat_seminar: "Seminars", cat_culture: "Culture", cat_sport: "Sports & Fun",
        no_events: "No events match your search.", back_to_events: "Back to Events",
        event_date: "Date", event_loc: "Location", event_cat: "Category", book_now: "Book Now", share: "Share",
        related_events: "Related Events",
        about_title: "About Events Directory", about_desc: "The premier platform for SVU students to discover academic and entertaining events.",
        our_vision: "Our Vision", vision_text: "Building an active student community enhancing personal skills outside academics.",
        our_mission: "Our Mission", mission_text: "Providing a reliable platform gathering all activities in one place.",
        our_team: "Our Team", role_dev: "Frontend Dev", role_design: "UI/UX Designer", role_qa: "QA Manager",
        policies: "Publishing Policies", pol_1: "Events must be related to university activities.", pol_2: "Offensive content is prohibited.", pol_3: "Events are reviewed before publishing.",
        contact_us: "Contact Us", form_name: "Full Name", form_email: "Email Address", form_msg: "Your Message", btn_send: "Send Message",
        err_name: "Please enter your name.", err_email: "Please enter a valid email.", err_msg: "Please type your message.",
        alt_contact: "Contact Info", follow_us: "Follow Us", footer_desc: "Official SVU platform for activities.",
        quick_links: "Quick Links", copyright: "All rights reserved for SVU students.",
        modal_title: "Confirm Booking", modal_body: "Are you sure you want to book a virtual seat? A ticket will be emailed.",
        btn_cancel: "Cancel", btn_confirm: "Confirm", search_placeholder: "Search events...", success_msg: "Message sent successfully! We will contact you soon.",
        book_success: "Virtual booking confirmed successfully! Check your email."
    }
};

let currentLang = localStorage.getItem('svu_lang') || 'ar';
let currentTheme = localStorage.getItem('svu_theme') || 'light';

function initApp() {
    document.getElementById('currentYear').innerText = new Date().getFullYear();
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path.endsWith('/')) {
        renderCategories();
        renderEventsGrid('recent-events-grid', eventsData.slice(0, 3));
    } else if (path.includes('events.html')) {
        renderEventsGrid('all-events-grid', eventsData);
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('cat');
        if (catParam) {
            document.getElementById('categoryFilter').value = catParam;
            filterEvents();
        }
    } else if (path.includes('event.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const eventId = parseInt(urlParams.get('id'));
        if (eventId) renderEventDetails(eventId);
    }

    window.addEventListener('scroll', scrollFunction);
}

function renderCategories() {
    const container = document.getElementById('home-categories');
    if (!container) return;
    let htmlContent = '';
    categories.forEach(cat => {
        htmlContent += `
            <span class="badge ${cat.color} fs-6 badge-category" onclick="window.location.href='events.html?cat=${cat.id}'">
                <i class="fa-solid ${cat.icon} me-1"></i> <span>${cat.label[currentLang]}</span>
            </span>
        `;
    });
    container.innerHTML = htmlContent;
}

function generateEventCard(event) {
    const catObj = categories.find(c => c.id === event.category);
    const isRtl = currentLang === 'ar';
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card event-card bg-body border-0">
                <div class="position-relative overflow-hidden">
                    <img src="${event.img}" class="card-img-top w-100" alt="${event.title[currentLang]}">
                    <span class="position-absolute top-0 start-0 m-3 badge ${catObj.color} shadow-sm px-3 py-2 rounded-pill small">
                        <i class="fa-solid ${catObj.icon} me-1"></i> ${catObj.label[currentLang]}
                    </span>
                </div>
                <div class="card-body d-flex flex-column pt-3 pt-md-4">
                    <div class="mb-2 text-muted small fw-bold">
                        <i class="fa-regular fa-calendar text-primary me-1"></i> ${event.date}
                    </div>
                    <h5 class="card-title mb-2 lh-base fs-5">${event.title[currentLang]}</h5>
                    <p class="card-text text-muted small mb-3"><i class="fa-solid fa-location-dot me-1"></i> ${event.location[currentLang]}</p>
                    <p class="card-text flex-grow-1 text-muted small">${event.desc[currentLang].substring(0, 75)}...</p>
                    <a href="event.html?id=${event.id}" class="btn btn-outline-primary rounded-pill w-100 mt-auto fw-bold btn-sm py-2">
                        ${translations[currentLang].btn_details} <i class="fa-solid ${isRtl ? 'fa-arrow-left-long' : 'fa-arrow-right-long'} ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderEventsGrid(containerId, eventsArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let htmlContent = ''; 
    eventsArray.forEach(event => { htmlContent += generateEventCard(event); });
    container.innerHTML = htmlContent;
}

function filterEvents() {
    const searchBox = document.getElementById('searchBox');
    const categoryFilter = document.getElementById('categoryFilter');
    const dateFilter = document.getElementById('dateFilter');
    if (!searchBox || !categoryFilter || !dateFilter) return;
    
    const searchText = searchBox.value.toLowerCase();
    const category = categoryFilter.value;
    const date = dateFilter.value;

    const filtered = eventsData.filter(ev => {
        const matchText = ev.title.ar.toLowerCase().includes(searchText) || ev.title.en.toLowerCase().includes(searchText);
        const matchCat = category === 'all' || ev.category === category;
        const matchDate = !date || ev.date === date;
        return matchText && matchCat && matchDate;
    });

    renderEventsGrid('all-events-grid', filtered);
    
    const alertMsg = document.getElementById('no-events-alert');
    if (alertMsg) {
        if (filtered.length === 0) alertMsg.classList.remove('d-none');
        else alertMsg.classList.add('d-none');
    }
}

function renderEventDetails(id) {
    const event = eventsData.find(e => e.id === id);
    if (!event) return;

    const catObj = categories.find(c => c.id === event.category);
    const related = eventsData.filter(e => e.category === event.category && e.id !== id).slice(0, 2);
    let relatedHTML = '';
    
    related.forEach(rel => {
        relatedHTML += `
            <div class="col-12 mb-3">
                <div class="card bg-body-tertiary flex-row align-items-center p-2 border-0 shadow-sm transition-hover" style="cursor:pointer" onclick="window.location.href='event.html?id=${rel.id}'">
                    <img src="${rel.img}" style="width:70px; height:70px; object-fit:cover; border-radius:8px;" class="ms-3">
                    <div class="flex-grow-1">
                        <h6 class="mb-1 text-primary fw-bold fs-6">${rel.title[currentLang]}</h6>
                        <small class="text-muted"><i class="fa-regular fa-calendar me-1"></i> ${rel.date}</small>
                    </div>
                </div>
            </div>`;
    });

    const html = `
        <div class="row g-4 g-lg-5">
            <div class="col-lg-8">
                <div class="position-relative mb-4">
                    <img src="${event.img}" class="img-fluid rounded-4 shadow event-detail-img" alt="Event Image">
                    <div class="position-absolute bottom-0 start-0 w-100 p-3 p-md-4 rounded-bottom-4" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);">
                        <h2 class="text-white mb-0 fw-bold fs-4 fs-md-2">${event.title[currentLang]}</h2>
                    </div>
                </div>
                
                <div class="d-flex gap-2 mb-4 flex-wrap bg-body-tertiary p-2 p-md-3 rounded-4 shadow-sm border">
                    <span class="badge ${catObj.color} px-3 py-2 fs-6 rounded-pill"><i class="fa-solid ${catObj.icon} me-1"></i> ${catObj.label[currentLang]}</span>
                    <span class="badge bg-body text-body border px-3 py-2 fs-6 rounded-pill"><i class="fa-regular fa-calendar text-primary me-1"></i> ${event.date}</span>
                    <span class="badge bg-body text-body border px-3 py-2 fs-6 rounded-pill"><i class="fa-solid fa-location-dot text-primary me-1"></i> ${event.location[currentLang]}</span>
                </div>
                
                <h4 class="mb-3 text-primary fs-5 fs-md-4"><i class="fa-solid fa-circle-info me-2"></i> وصف الفعالية</h4>
                <p class="lead text-muted mb-4 fs-6 fs-md-5" style="line-height:1.9;">${event.desc[currentLang]}</p>
                <p class="text-muted small">هذا النص تجريبي لعرض التفاصيل الكاملة للفعالية في دليل فعاليات الجامعة الافتراضية السورية.</p>
            </div>
            <div class="col-lg-4">
                <div class="card shadow border-0 sticky-lg-top rounded-4 overflow-hidden bg-body" style="top: 100px; z-index:1;">
                    <div class="card-header bg-primary text-white text-center py-3 border-0">
                        <h4 class="mb-0 fw-bold text-white fs-5">التسجيل والحضور</h4>
                    </div>
                    <div class="card-body p-4 text-center">
                        <h2 class="display-6 text-secondary fw-bold mb-3">مجاناً</h2>
                        <p class="text-muted mb-4 small">الدعوة عامة لجميع طلاب الجامعة</p>
                        <button class="btn btn-primary w-100 mb-3 py-2 py-md-3 fs-5 shadow-sm rounded-pill" data-bs-toggle="modal" data-bs-target="#bookingModal">
                            <i class="fa-regular fa-calendar-check me-2"></i> <span data-i18n="book_now">${translations[currentLang].book_now}</span>
                        </button>
                        <button class="btn btn-outline-secondary w-100 py-2 rounded-pill">
                            <i class="fa-solid fa-share-nodes me-2"></i> <span data-i18n="share">${translations[currentLang].share}</span>
                        </button>
                    </div>
                </div>

                <div class="mt-4 mt-lg-5">
                    <h5 class="mb-3 fw-bold text-primary fs-6 fs-md-5" data-i18n="related_events"><i class="fa-solid fa-link me-2"></i> ${translations[currentLang].related_events}</h5>
                    <div class="row">
                        ${relatedHTML || '<p class="text-muted small">لا توجد فعاليات مشابهة حالياً.</p>'}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('event-details-content').innerHTML = html;
}

function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastPlacement');
    const icon = type === 'success' ? 'fa-circle-check text-success' : 'fa-circle-info text-primary';
    const toastHtml = `
        <div class="toast align-items-center border-0 shadow-lg bg-body" role="alert">
            <div class="d-flex">
                <div class="toast-body fs-6 fw-bold">
                    <i class="fa-solid ${icon} fs-5 ms-2"></i> ${message}
                </div>
                <button type="button" class="btn-close me-auto m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    `;
    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    const newToastEl = toastContainer.lastElementChild;
    const toast = new bootstrap.Toast(newToastEl, { delay: 4000 });
    toast.show();
    newToastEl.addEventListener('hidden.bs.toast', () => newToastEl.remove());
}

function confirmBooking() {
    bootstrap.Modal.getInstance(document.getElementById('bookingModal')).hide();
    showToast(translations[currentLang].book_success, 'success');
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }
    showToast(translations[currentLang].success_msg, 'success');
    form.reset();
    form.classList.remove('was-validated');
}

function toggleDarkMode() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('svu_theme', currentTheme);
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    
    icon.style.transform = 'rotate(-180deg) scale(0)';
    setTimeout(() => {
        if (theme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
            icon.classList.add('text-warning');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            icon.classList.remove('text-warning');
        }
        icon.style.transform = 'rotate(0deg) scale(1)';
    }, 150); 
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('svu_lang', currentLang);
    applyLanguage(currentLang);
    location.reload();
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                if (el.children.length > 0 && el.firstElementChild && el.firstElementChild.tagName === 'I') {
                    const iconHtml = el.firstElementChild.outerHTML;
                    el.innerHTML = iconHtml + ' ' + translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        }
    });
    
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.innerText = lang === 'ar' ? 'EN' : 'AR';
    
    const searchBox = document.getElementById('searchBox');
    if (searchBox) searchBox.placeholder = translations[lang].search_placeholder;
}

function scrollFunction() {
    const btn = document.getElementById("scrollTopBtn");
    if (!btn) return;
    if (window.scrollY > 300) btn.classList.add("visible");
    else btn.classList.remove("visible");
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', initApp);