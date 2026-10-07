document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Переводы
    const translations = {
        ru: {
            logo_text: "WORDPRESS ИНТЕНСИВ",
            title: "СОЗДАТЬ СВОЙ САЙТ НА WORDPRESS",
            simple_title: "ЭТО ПРОСТО!",
            title_sub: "КУДА СЛОЖНЕЕ СДЕЛАТЬ ЭТО ПРАВИЛЬНО!",
            promo_text: "Ежедневно в России появляется более 5 000 новых сайтов.<br>И только единицы из них становятся популярными и приносят ощутимую прибыль. В чем секрет? В чем формула успеха?<br>Узнайте на предстоящем двухдневном <span class='highlight'>БЕСПЛАТНОМ</span> интенсиве!",
            btn_register: "ЗАПИСАТЬСЯ НА ИНТЕНСИВ!",
            more_text: "УЗНАТЬ БОЛЬШЕ О БОНУСАХ",
            waiting_header: "ЧТО ВАС ЖДЕТ В НАШЕМ ИНТЕНСИВЕ?",
            waiting_subheader: "2 бесплатных полноценных обучающих вебинара, где:",
            waiting_descr_1: "Всего за два бесплатных вебинара мы научим вас, как создать свой сайт на WordPress.",
            waiting_descr_2: "Покажем, как правильно оптимизировать сайт и сделать его привлекательным для поисковых систем. Только свежая, профессиональная и актуальная информация!",
            waiting_descr_3: "Вы узнаете, что такое «хорошая индексация», «высокая посещаемость», «стабильный прирост посетителей», «ТОП по запросам» и что намного важнее, как добиться всех этих показателей!",
            opt_header: "ЧТО ТАКОЕ ОПТИМИЗАЦИЯ И ЗАЧЕМ ОНА НУЖНА?",
            opt_p1: "На просторах интернета несчетное количество действующих и даже заброшенных сайтов. Большинство из них совпадает не только по категориям, но и по содержанию.",
            opt_p2: "Представьте себе тысячи сайтов, на которых тем или иным образом предоставляется одна и та же информация или продается одна и та же услуга. И попасть на эти сайты можно лишь по тематическим запросам в поисковых системах.",
            opt_p3: "Но как вам быть, если ваш сайт похож на сотню или тысячу таких же, а на одной странице Гугла или Яндекса всего 10 позиций? Как привести посетителей страницы своего ресурса? Именно для этого и нужна оптимизация — для вывода вашего сайта на первую страницу поиска!",
            opt_p4: "Мы научим вас, как сделать ваш сайт привлекательным для поисковых систем и посоветуем, как вывести его на первые страницы, обходя всех конкурентов.",
            finish_header: "ПО ОКОНЧАНИИ ОБУЧЕНИЯ ВЫ СМОЖЕТЕ!",
            finish_1: "Создать свой сайт или блог",
            finish_2: "Правильно его оптимизировать",
            finish_3: "Обеспечить ему медленный, но верный рост в ТОП",
            finish_4: "Достигнуть стабильного прироста посетителей",
            finish_5: "Получать ощутимую прибыль",
            gift_text: "Для всех участников интенсива предусмотрены бонусы и подарки. Нажимайте на кнопку ниже, принимайте участие в вебинарах и забирайте свой приз по окончании обучения!",
            first_header: "ПЕРВЫЙ ВЕБИНАР СОСТОИТСЯ:",
            first_date: "10 СЕНТЯБРЯ В 20:00 ПО МОСКВЕ",
            first_sub: "Успейте записаться, количество мест ограничено!",
            support: "Служба поддержки",
            privacy: "Политика конфиденциальности",
            phone: "Позвоните нам 8-800-555-01-21"
        },
        kk: {
            logo_text: "WORDPRESS ИНТЕНСИВІ",
            title: "WORDPRESS-ТЕ ӨЗ САЙТЫҢДЫ ЖАСАУ",
            simple_title: "БҰЛ ОҢАЙ!",
            title_sub: "ОНЫ ДҰРЫС ЖАСАУ АЛДЕҚАЙДА КҮРДЕЛІРЕК!",
            promo_text: "Күн сайын мыңдаған жаңа сайттар пайда болады.<br>Бірақ олардың аз бөлігі ғана танымал болып, табыс әкеледі. Сыры неде? Табыс формуласы қандай?<br>Алдагы екі күндік <span class='highlight'>ТЕГІН</span> интенсивте біліңіз!",
            btn_register: "ИНТЕНСИВКЕ ЖАЗЫЛУ!",
            more_text: "БОНУСТАР ТУРАЛЫ КӨБІРЕК БІЛУ",
            waiting_header: "БІЗДІҢ ИНТЕНСИВТЕ СІЗДІ НЕ КҮТЕДІ?",
            waiting_subheader: "2 тегін толыққанды оқыту вебинары, онда:",
            waiting_descr_1: "Бары екі тегін вебинарда біз сізге WordPress-те өз сайтыңызды қалай құруды үйретеміз.",
            waiting_descr_2: "Сайтты қалай дұрыс оңтайландыруды және оны іздеу жүйелері үшін тартымды етуді көрсетеміз. Тек жаңа, кәсіби және өзекті ақпарат!",
            waiting_descr_3: "Сіз жақсы индекстеу, жоғары қатысымдылық, келушілердің тұрақты өсуі не екенін және ең бастысы осы көрсеткіштерге қалай жетуге болатынын білесіз!",
            opt_header: "ОҢТАЙЛАНДЫРУ ДЕГЕН НЕ ЖӘНЕ ОЛ НЕ ҮШІН ҚАЖЕТ?",
            opt_p1: "Интернет кеңістігінде жұмыс істеп тұрған және тіпті қараусыз қалған сайттардың саны өте көп.",
            opt_p2: "Бірдей ақпарат беретін немесе бірдей қызметті сататын мыңдаған сайттарды елестетіп көріңіз.",
            opt_p3: "Сіздің сайтыңыз басқаларға ұқсас болса, ал Гуглдың бірінші бетінде тек 10 орын болса не істейсіз? Ол үшін оңтайландыру (SEO) қажет!",
            opt_p4: "БІз сіздің сайтыңызды іздеу жүйелеріне тартымды етуді және оны бірінші бетке шығаруды үйретеміз.",
            finish_header: "ОҚУДЫ АЯҚТАҒАН СУҢ СІЗДІҢ ҚОЛЫҢЫЗДАН КЕЛЕДІ:",
            finish_1: "Өз сайтыңызды немесе блогыңызды құру",
            finish_2: "Оны дұрыс оңтайландыру",
            finish_3: "ТОП-қа баяу, бірақ сенімді өсуді қамтамасыз ету",
            finish_4: "Келушілердің тұрақты өсуіне жету",
            finish_5: "Едәуір пайда табу",
            gift_text: "Барлық қатысушылар үшін бонустар мен сыйлықтар қарастырылған. Төмендегі батырманы басып, вебинарларға қатысыңыз және жүлдеңізді алыңыз!",
            first_header: "БІРІНШІ ВЕБИНАР БОЛАДЫ:",
            first_date: "10 ҚЫРКҮЙЕК САТ 20:00-ДЕ (МСК)",
            first_sub: "Жазылып үлгеріңіз, орындар саны шектеулі!",
            support: "Қолдау қызметі",
            privacy: "Құпиялылық саясаты",
            phone: "Бізге қоңырау шалыңыз 8-800-555-01-21"
        },
        en: {
            logo_text: "WORDPRESS INTENSIVE",
            title: "CREATE YOUR WEBSITE ON WORDPRESS",
            simple_title: "IT IS EASY!",
            title_sub: "DOING IT RIGHT IS MUCH HARDER!",
            promo_text: "Thousands of new websites appear online every day.<br>Only a few become popular and generate real profit. What's the secret? What's the formula for success?<br>Find out at the upcoming two-day <span class='highlight'>FREE</span> intensive!",
            btn_register: "REGISTER FOR INTENSIVE!",
            more_text: "LEARN MORE ABOUT BONUSES",
            waiting_header: "WHAT AWAITS YOU IN OUR INTENSIVE?",
            waiting_subheader: "2 free full-fledged educational webinars, where:",
            waiting_descr_1: "In just two free webinars, we will teach you how to build your website on WordPress.",
            waiting_descr_2: "We will show you how to properly optimize your website and make it attractive to search engines. Only fresh, professional, and relevant information!",
            waiting_descr_3: "You will learn about good indexing, high traffic, steady visitor growth, top rankings, and most importantly — how to achieve all these results!",
            opt_header: "WHAT IS OPTIMIZATION AND WHY IS IT NEEDED?",
            opt_p1: "There are countless active and abandoned websites across the internet. Most of them overlap in categories and content.",
            opt_p2: "Imagine thousands of sites offering the exact same information or selling the same service. Getting visitors requires ranking in search engines.",
            opt_p3: "What if your site looks like hundreds of others, and Google only has 10 spots on page one? That's exactly why optimization is essential!",
            opt_p4: "We will teach you how to make your website attractive to search engines and help you reach the top pages ahead of competitors.",
            finish_header: "UPON COMPLETION YOU WILL BE ABLE TO:",
            finish_1: "Create your own website or blog",
            finish_2: "Optimize it properly",
            finish_3: "Ensure steady growth to the TOP",
            finish_4: "Achieve consistent traffic growth",
            finish_5: "Earn significant profit",
            gift_text: "Bonuses and gifts are provided for all intensive participants. Click the button below, participate in webinars, and claim your prize!",
            first_header: "THE FIRST WEBINAR WILL TAKE PLACE ON:",
            first_date: "SEPTEMBER 10 AT 20:00 MOSCOW TIME",
            first_sub: "Hurry to register, seats are limited!",
            support: "Support Service",
            privacy: "Privacy Policy",
            phone: "Call us 8-800-555-01-21"
        },
        ja: {
            logo_text: "WORDPRESS 集中講座",
            title: "WORDPRESSで自分のサイトを作成する",
            simple_title: "とても簡単です！",
            title_sub: "正しく構築することははるかに難解です！",
            promo_text: "毎日数千もの新しいWebサイトが開設されています。<br>しかし、人気を集めて利益を生み出せるのはごく一部です。その秘密とは？成功の法則とは？<br>近日開催される2日間の<span class='highlight'>無料</span>集中講座で体験してください！",
            btn_register: "集中講座に申し込む！",
            more_text: "特典の詳細を見る",
            waiting_header: "講座で学べる内容",
            waiting_subheader: "2回の無料本格ウェビナーの内容：",
            waiting_descr_1: "たった2回の無料ウェビナーで、WordPressを使ったサイト構築方法を伝授します。",
            waiting_descr_2: "検索エンジンに評価される適切なサイト最適化の手法を解説します。実践的で最新の情報のみを提供！",
            waiting_descr_3: "インデックス最適化、アクセス増加、上位表示の仕組みと、成果を出すための重要なポイントを学べます！",
            opt_header: "Webサイト最適化（SEO）の重要性とは？",
            opt_p1: "インターネット上には無数のWebサイトが存在し、同じようなテーマやコンテンツであふれています。",
            opt_p2: "競合がひしめく中で、検索エンジン経由でユーザーを惹きつけるには最適化가不可欠です。",
            opt_p3: "検索結果の1ページ目（上位10枠）にランクインするための具体的なアプローチと最適化手法を学びます。",
            opt_p4: "競合を抑えて検索上位を獲得し、魅力的で成果の出るサイトに仕上げるノウハウを提供します。",
            finish_header: "受講後に習得できるスキル：",
            finish_1: "自分のWebサイトやブログの構築",
            finish_2: "適切なSEO・サイト最適化",
            finish_3: "検索上位への着実なランクアップ",
            finish_4: "安定したアクセス・集客の獲得",
            finish_5: "Webサイトからの収益化",
            gift_text: "受講者全員に特別な特典とプレゼントをご用意しています。下のボタンからウェビナーに参加してプレゼントを受け取りましょう！",
            first_header: "初回ウェビナー開催日時：",
            first_date: "9月10日 20:00（モスクワ時間）",
            first_sub: "席数には限りがありますので、お早めにお申し込みください！",
            support: "カスタマーサポート",
            privacy: "プライバシーポリシー",
            phone: "お電話でのお問い合わせ: 8-800-555-01-21"
        }
    };

    // DOM-элементы
    const langBtn = document.getElementById('lang-current');
    const langMenu = document.getElementById('lang-menu');
    const langOptions = document.querySelectorAll('.lang_option');
    const moreLink = document.getElementById('more-link');
    const scrollButtons = document.querySelectorAll('.btn_scroll');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // 2. Логика переключения языков
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang_dropdown')) {
            langMenu.classList.remove('show');
        }
    });

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            const label = e.target.getAttribute('data-label');

            langBtn.innerHTML = label + ' &#9660;';
            langMenu.classList.remove('show');

            langOptions.forEach(opt => opt.classList.remove('active'));
            e.target.classList.add('active');

            const elements = document.querySelectorAll('[data-key]');
            elements.forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        });
    });

    // 3. Клик по кнопкам «Записаться на интенсив!»
    scrollButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const registerSection = document.getElementById('register_section');
            if (registerSection) {
                registerSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Клик по «Узнать больше о бонусах»
    if (moreLink) {
        moreLink.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById('gift_section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 5. Показ кнопки «Наверх» и прокрутка
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});