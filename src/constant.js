const INDUSTRY_PRICE_FEAUTURES = [
  [
    "Таны одоогийн цахим хуудас дээр зөвхөн танай үл хөдлөх хөрөнгийн хотхонд тохирсон тохиргоог хийх (1 удаа)",
    "Эрксис системийг 1 жил ашиглах эрх",
    "Маркетингийн автоматжуулалт тохиргоо",
    "Сургалт",
    "24/7 Техник Тусламж",
  ],
  [
    "Цор ганц та бүхний онцлогт тохирсон шинэ цахим хуудас үүсгэн шаардлагатай тохиргоог хийх",
    "Эрксис системийг 1 жил ашиглах эрх",
    "Маркетингийн цогц идэвхжүүлэлт",
    "Маркетингийн автоматжуулалт тохиргоо",
    "VIP Сургалт",
    "24/7 Техник Тусламж",
  ],
  [
    "Цор ганц та бүхний онцлогт тохирсон шинэ цахим хуудас үүсгэн шаардлагатай тохиргоог хийх",
    "Эрксис системийг 1 жил ашиглах эрх",
    "Маркетингийн цогц идэвхжүүлэлт",
    "Маркетингийн автоматжуулалт тохиргоо",
    "Хэрэглэгч нарийгаа хувь лизингд хамруулж эргэн төлөлтийг хянах боломж",
    "Калл-центэр боломж",
    "Санхүүгийн програм холбох",
    "VIP Сургалт",
    "24/7 Техник Тусламж",
  ],
];

const FEATURES = {
  property: [
    {
      title: "Хэрэглэгчдэд таатай захиалгын систем",
      imgsrc: "industry/pic1.png",
      desc:
        "Харилцагчдад хамгийн ойлгомжтой хэлбэрээр шаардлагатай бүхий л мэдээллийг дижиталаар хүргэж хэрэглэгч болох замналыг товчлох, цаг хугацааг хэмнэх боломж бүрдлээ.",
      list: [
        "Захиалагч биечлэн очих, ажилтнаас гар утсаар мэдээлэл авах шаардлагагүй бодит орчныг хүссэн газраасаа хүссэн үедээ захиална",
        "Захиалагч өөрийн хүссэн байраа чөлөөтэй сонгох боломжтой",
        "Захиалга өгөх үед борлогдсон эсвэл түрээслэгдсэн эсэх нь автоматаар харагдах тул захиалагч цагаа хэмнэх боломжтой",
        "Захиалагчдад тохирсон саналыг харуулах боломжтой",
        "Захиалагчдад өгөх мэдээллээ байгууллага хүссэн хэлбэрээр бүрдүүлэх боломжтой",
      ],
    },
    {
      title: "Харилцагч бүрдээ хүрч үйлчлэх боломж",
      imgsrc: "industry/pic3.png",
      desc:
        "Нийт захиалагчдаа сегментчлэхээс эхлээд захиалагч бүрийн мэдээлэлд үндэслэн онцгой нөхцлүүдийг санал болгож борлуулалтаа нэмэгдүүлж боломжоо ашиглаарай",
      list: [
        "Хэрэглэгчээ онцгой нөхцлүүдээр сегментчлэх боломжтой",
        "Өөрсдийн борлуулалтад таатай захиалагч нарыг ялган харах боломжтой",
        "Тухайн захиалагчийн хүсэл хэрэгцээ болон ямар үе шатанд явж байгааг мэдэх боломжтой",
        "Сонирхсон сэжим бүрийг бүртгэж тэдний хүсэл, шаардлагыг олж илрүүлэх, цаашид байнга холбоотой байж шинэ мэдээллээ түгээх боломж",
      ],
    },
    {
      title: "Сэжим бүрийг борлуулалт болгох боломж",
      imgsrc: "industry/pic4.png",
      desc:
        "Захиалагчийн хүсэж буй мэдээллийг Form хэлбэрээр авч хэрэглэгчийнхээ хэрэгцээ шаардлагыг урьдчилан мэдэж тохирсон санал тавьж борлуулалтаа нэмэгдүүлэх таатай боломж бүрдлээ",
      list: [
        "Байгууллагын зүгээс захиалагчаас мэдэх шаардлагатай бүхий мэдээллээ бүрдүүлж нэгтгэх боломжтой. /Үнийн санал, байршил, хувийн мэдээлэл гэх мэт",
        "Хэрэглэгчдээ тохирсон саналыг загвар болгон автоматаар илгээх бүрэн боломжтой",
        "Түрүүлж мэдээд эхэлж залга",
        "Бүх захиалагч нарын мэдээллийг нэгдсэн байдлаар хянаж удирдах боломжтой",
        "Захиалгын бүхий л түвшинг нарийн тодорхойлж санал болгох боломжтой",
      ],
    },
    {
      title: "Механик үйлдлүүдээ автоматжуулж бүтээмжтэй ажиллах боломж",
      imgsrc: "industry/pic5.png",
      desc:
        "Захиалагчдаа мэдээлэл хүргэхээс эхлээд гэрээ байгуулах бүхий л процессыг автоматжуулж, хэрэглэгч өөрийн хүссэн нөхцлөө өөрөө бүрдүүлэх эерэг туршлагыг бий болгон борлуулалтын таатай нөхцлийг бүрдүүлээрэй",
      list: [
        "Захиалагчдад хүргэх шаардлагатай мэдээллийг автоматжуулах",
        "Захиалгын санал болон гэрээг автоматжуулах",
        "Захиалагчийн мэдээлэлд тохирсон саналыг автоматжуулах",
        "Захиалга хийгдсэн эсэхээс хамаарч процессыг автоматжуулах",
      ],
    },
  ],
  marketing: [
    {
      title: "Маркетингийн багийн дижитал оффис",
      imgsrc: "marketing/1.png",
      desc:
        "erxes нь маркетингийн бодлого төлөвлөлтөөс гүйцэтгэлийн нарийн түвшин хүртэлх бүх үйл ажиллагааг багаар зохион байгуулах боломжтой",
      list: [
        "<b>Growth Hacking</b> - Маркетингийн кампант ажил, төсөл үйл ажиллагаагаа нэг дороос удирдах",
        "<b>Task management</b> - Баг хамт олон нэгдсэн талбарт ажиллаж үйл явцаа зөв дэс дараалалтай, системтэйгээр төлөвлөж хэрэгжүүлэх",
        "<b>Campaign</b> - Хэрэглэгчдэд шаардлагтай мэдээллийг загвар болгон автоматаар илгээх зэрэг маркетингийн ажлыг хөнгөвчлөх шийдлүүдийг үйл ажиллагаандаа тохируулах ашиглаарай.",
      ],
      additional: `<a href="https://www.wildfirepr.com/blog/20-stats-every-martech-professional-should-know-in-2021/" target="_blank" rel="noopener noreferer">Маркетерүүдийн 65%</a> нь ROI-ийг сайжруулахын тулд martech-ийг ашиглахыг хүсч байгаа нь тэдний нэн тэргүүний зорилт болж байна.`,
    },
    {
      title: "Зөв цагтаа зөв мэдээллийг автоматаар хүргэх боломж",
      imgsrc: "marketing/2.png",
      desc:
        "Шинээр бүтээгдэхүүн үйлчилгээг ашигласан хэрэглэгчдэд дэлгэрэнгүй мэдээлэл хүргэх, тэмдэглэлт өдрүүдэд мэндчилгээ илгээх зэрэг хэрэглэгчээ халамжлах, сэтгэл ханамжийг нэмэгдүүлэх зүйлсийг автоматжуулж цагаа хэмнэж, эерэг туршлага бүтээх боломжтой.",
      list: [
        "<b>Segment</b> - Хэрэглэгчээ шаардлагатай нөхцөлүүдээр сегменчлэх",
        "<b>Campaign</b> - Автомат эсвэл гар тохиргоогоор масс мэйл, мессеж илгээх",
        "<b>Report</b> - Илгээсэн мэдээллийн үр дүнг хэмжих",
        "Нөхцөл бүрт тохирсон загвар урьдчилан бэлтгэх зэрэг цаг хугацааг хэмнэж сэтгэл ханамжийг нэмэгдүүлэх технологийг ашиглаарай",
      ],
      additional: `<a href="https://www.warc.com/newsandopinion/opinion/six-martech-trends-to-watch-in-2021/4057" target="_blank" rel="noopener noreferer">Хэрэглэгчдийн 55-75 хувь</a> нь өөрт нь зориулсан мэдээллийг авахыг хүсдэг.`,
    },
    {
      title: "Хэрэглэгчийнхээ датаг алдалгүй цуглуул, боловсруул, ашигла",
      imgsrc: "marketing/3.png",
      desc:
        "Хэрэглэгчидтэйгээ харилцаж буй бүхий л сувгуудын мэдээлэл, санал хүсэлт, хувийн мэдээлэл зэргийг цуглуулж аль ч сувгаар холбогдсон хэрэглэгчээ таних боломжтой ",
      list: [
        "<b>Contact Management</b> - Хэрэглэгчтэй харилцах сошиал сувгуудыг нэгтгэн удирдаж аль ч сувгаар хэрэглэгч орж ирсэн ч таних боломж",
        "<b>Form</b> - IT мэдлэг шаардахгүйгээр хэрэгцээт мэдээллээ форм хэлбэрээр сайт дээрээ байршуулан цуглуулах, бүртгэл үүсгэх",
        "Байгууллагад орж ирсэн борлуулалтын сэжим бүрийг алдалгүй таних <b>Team inbox</b>",
      ],
      additional: `2020 оны байдлаар маркетингийн аналитик хэрэглээ <a href="https://www.marketingevolution.com/knowledge-center/50plus-data-driven-marketing-and-personalization-stats-marketers-need-to-know">52.7 хувьтай</a> байна.`,
    },
    {
      title: "Үр дүнгээ хэмжиж илүү бүтээлчээр ажиллах боломжийг бүрдүүл",
      imgsrc: "marketing/4.png",
      desc:
        "Маркетингийн ажлын үр дүнг нэгдсэн байдлаар шинжилхээс гадна үйл явцыг тухай бүрт нь үнэлж сайжруулах, ингэснээр богино хугацаанд илүү бүтээлчээр ажиллах боломж бүрднэ.",
      list: [
        "<b>ICE, RICE эсвэл PIE</b> онооны загварт үндэслэн маркетингийн ажлаа бодит цаг хугацаанд урьдчилан таамаглах",
        "<b>Report</b> - Автомат и-мэйл болох хэрэглэгчдэд хүргэсэн мэдээллийн үр дүнг хэмжих, хянах, сайжруулах",
        "<b>Management</b> - Үйл ажиллагаа аль түвшинд үргэлжилж буйг бодит цаг хугацаанд хянах дүгнэх",
      ],
    },
    {
      title: "Маркетингийн үйл ажиллагаанд erxes-г ашигласнаар",
      imgsrc: "marketing/info.png",
      desc:
        "Маркетингийн зардал, цаг хугацаа, хүчин чармайлт болон оновчтой шийдвэр гаргахад erxes танд туслах болно.",
      list: [
        "Маркетинг гэлтгүй бусад баг хамт олонтойгоо нэг талбарт илүү үр дүнтэй, уялдаа холбоотой ажиллах боломжтой",
        "Хэрэглэгчдийнхээ датаг цуглуулж, боловсруулж шийдвэр гаргалтдаа ашиглах боломжтой",
        "Хэрэглэгчээ сегментчилж зорилтод хэрэглэгчдэдээ илүү үр дүнтэй хүрэх боломжтой",
      ],
    },
  ],
  hr: [
    {
      title: "Бүхий л мэдээллийг цаг алдалгүй нэг дороос",
      imgsrc: "hr/bravo.png",
      desc:
        "Компанид ажил үүргийн төрөлжилт ихтэй тохиолдолд хүргэлт, түгээлт зэрэг ажлын онцлогоос хамаарч байгууллагын мэдээллээс хоцрох тохиолдол их байдаг. Харин  erxes Employee XM нь дотоод болон гадаад бүхий л мэдээллийг ажлын онцлогоос үл хамааран хэзээ ч хаана ч хүссэн үедээ <b>цаг алдалгүй нэг дороос бүрэн мэдэх</b> боломжийг хамт олонд бүрдүүлнэ.",
      list: ["Пост", "Check-in", "Браво", "Талархлын мессеж"],
      additional: `<a href="https://www.tradepressservices.com/internal-communications/" target="_blank" rel="noopener noreferer">Ажилчдын 85%</a> нь байгууллагын шинэ мэдээ мэдээлэлтэй тогтмол ойрхон байхад таатай байдаг.`,
    },
    {
      title: "“Peer to Peer” буюу хамтдаа хөгжиж, хамтдаа суралцах орон зай ",
      imgsrc: "hr/Chat.png",
      desc:
        "Хамт олныг чадавхжуулах, шинэ ажилтанг тодорхой ур чадваруудыг эзэмшүүлэх зэрэг хүний нөөцийн хөгжлийн үйл ажиллагааг зөвхөн удирдлага, хүний нөөцийн алба, мэргэжилтэнд төвлөрүүлэхгүйгээр ажилтан бүр өөрийн сурсан, мэдсэн зүйлсээ хамт олонтойгоо хуваалцаж байгууллагынхаа хөгжилд үнэ цэнтэй хувь нэмэр оруулж <b>эерэг туршлага бүтээх</b> боломж бүрдэнэ.",
      list: [
        " Подкаст",
        "Видео",
        "Судалгаа",
        "Гарын авлага",
        "File Managemenet",
      ],
      additional: `<a href="https://www.pwc.com/gx/en/services/people-organisation/publications/workforce-of-the-future.html" target="_blank" rel="noopener noreferer">Ажилчдын 74%</a> нь чадвараа нэмэгдүүлэхийн тулд шинэ ур чадваруудад суралцах, мэргэших сонирхолтой байдаг.`,
    },
    {
      title: "Байгууллагын бүтэц болон ажилтны хувийн мэдээллийн нэгдсэн бааз",
      imgsrc: "hr/4.png",
      desc:
        "Ажилчид байгууллагын бүтэц, бусад хамт олныхоо мэдээллийг мэдэхгүйгээсээ болоод ажилладаг салбар нэгжээс өөр нөхцөлд цоо шинэ байгууллагад орсон мэдрэмжийг авдаг. Харин erxes Employee XM нь дараах мэдээллүүдийг байгууллагын онцлогоос хамаарч тодорхойлох боломжийг бүрдүүллээ. Ингэснээр ажилтан хамт олонтойгоо <b>чөлөөтэй холбогдох, таньж мэдэн</b> бүх түвшинд нээлттэй харилцах болно.",
      list: [" Байгууллагын бүтэц", "Хувийн мэдээлэл", "Custom properties"],
      additional: `<a href="https://www.cincinnati.com/story/money/2020/06/30/businesswise-recognition-culture/3189754001/" target="_blank" rel="noopener noreferer">Ажилчдын 37%</a> нь өөрийг нь бусад хүмүүс таньж байхад маш их урам авдаг.`,
    },
    {
      title: "Нэг байгууллага, нэг суваг, нэг чат",
      imgsrc: "hr/5.png",
      desc:
        "Байгууллагын үйл ажиллагаа, ажилчдын <b>мэдээлэл солилцох нэг төрлийн урсгал</b> болоод орчинг бүрдүүлснээр мэдээллийн замбараагүй байдал арилахаас гадна хамт олон дунд алба хэлтэс, ажлын байршлаас үл хамааран мэдээллээ солилцоход илүү хялбар, илүү таатай байх болно.",
      list: [
        "Чат сувгууд",
        "Грүпп чат",
        "Хувийн чат",
        "Хамгийн их ашигладаг чат /favorite/",
      ],
    },
    {
      title: "Хамт олон халуун дотно гэр бүл",
      imgsrc: "hr/Final.png",
      desc:
        "Байгууллага, ажилтны хувьд үнэ цэнтэй мөчүүдийг хамтдаа хуваалцах боломжтой. Ингэснээр хамт олны дунд <b>халуун дулаан уур амьсгал, эерэг соёл</b> бий болно.",
      list: [
        "Тэмдэглэлт баярын мэдэгдэл ирэх /Ажилтны төрсөн өдөр, нийтийн болон байгууллагын онцгой өдрүүд/",
        "Нэг нэгэндээ талархлын цол өгөх /Хамгийн хичээнгүй, хамгийн бүтээлч зэрэг бие биедээ хязгааргүй урам илгээх боломж/",
        "Урамшууллын систем бүрдүүлэх /Дотоод үйл ажиллагаанд идэхтэй оролцсон, гүйцэтгэл өндөртэй хамт олон, ажилтанд урамшуулал олгох/ зэрэг хамт олныг идэвхжүүлэх, чадавхжуулах, зохион байгуулах хүний нөөц, удирдлагын ажлыг хөнгөвчлөх олон боломжийг бүрдүүллээ.",
      ],
    },
  ],
};

const TITLES = {
  property: "Захиалгын явцаа автоматжуулж ажлаа  30%-аар хурдасга",
  marketing:
    "Маркетингийн үйл ажиллагаагаа технологитой хослуулж илүү үнэ цэнийг бүтээ",
  hr: "erxes Employee XM таны байгууллагын дижитал оффис",
};

const SLOGANS = {
  property: "Боломж бүрийг <span>Борлуулалт болго</span> !",
  marketing: "Хэрэглэгчээ 360 градус <span>таних боломж</span>.",
  hr:
    "Аз жаргалтай хамт олон аз жаргалтай <span>хэрэглэгчдийг бүтээдэг</span>.",
};

const SHORT_DESC = {
  property:
    "Үл хөдлөх хөрөнгийн талаарх мэдээлэл авах, боломжит бүтээгдэхүүнүүдээс сонгох, захиалга өгөх зэрэг механик ажлуудыг автоматжуулан харилцагч бүрээ алдалгүй хүрч үйлчлэх боломж нээгдлээ.",
  marketing:
    "Маркетингийн бүтээлч санаанаас эхлээд үйл ажиллагааны үр дүнг хэмжиж сайжруулах бүхий л процессыг технологи ашиглан хөнгөвчилж хэрэглэгчдийнхээ датанд үндэслэн оновчтой шийдвэр гаргахад erxes танд туслах болно",
  hr:
    "Байгууллагынхаа хүн бүрд эерэг туршлагыг бий болгон хөдөлмөрийн бүтээмжийг нь нэмэгдүүлж хамт олныхоо уур амьсгал, эерэг соёлыг бүтээ",
};

const PAGE_DESC = {
  property: `erxes компани Үл хөдлөх хөрөнгө захиалах болон борлуулахтай холбоотой үйлдлийг автоматжуулж, илүү хялбар болгох технологийн шийдлийг нэвтрүүлснээр <ins><b>Монголын Үл хөдлөх салбарын дижитал хувьсгал эхэллээ!</b></ins> Энэхүү шийдэл нь бүтээмжийг хэд дахин нэмэгдүүлж борлуулалтыг өсгөх боломжтойг салбарын мэргэжилтнүүд дүгнэж байна. Энэ нь зөвхөн байгууллага гэлтгүй захиалагч, хэрэглэгчдэд илүү хялбараар байр, үл хөдлөх хөрөнгийн талаарх мэдээлэл авах, захиалах цагийг хэмнэж хүссэн мэдээллээ хаанаас ч, хэзээ ч авах боломжтой болсон нь энэхүү технологийн шийдлийн онцлог юм.`,
  marketing:
    "erxes нь хэрэглэгчийн олон төрлийн мэдээллийг нэгтгэх, маркетингийн үйл ажиллагаа төлөвлөх, цаг их зарцуулдаг механик ажлуудыг автоматжуулах  боломжийг бүрдүүлснээр хэрэглэгчийнхээ хэрэгцээ шаардлагыг богино хугацаанд мэдэж сэтгэл ханамжийг нэмэгдүүлэн эерэг туршлагыг бүтээх хялбар шийдэл болох юм.",
  hr:
    "<b>erxes Employee XM</b> нь байгууллагын дотоод мэдээлэл, хүний нөөцийн үйл ажиллагааг нэгтгэж ажилчдын харилцаа холбоо, оролцоог эерэгээр нэмэгдүүлэх замаар хамт олонд <b>эерэг туршлага</b> үлдээж бүтээмжийг дээшлүүлэхийн зэрэгцээ баг хамт олны уур амьсгалыг сайжруулж <b>эерэг соёлыг</b> бүрдүүлсэн таны байгууллагын дижитал оффис болох юм.",
};

const SOLUTIONS = {
  hr: "Хүний Нөөц",
  marketing: "Маркетинг",
  property: "Үл хөдлөх хөрөнгө",
};

const IMAGES = {
  hr: "hr/First.png",
  marketing: "marketing/info.png",
  property: "industry/1.png",
};

module.exports = {
  INDUSTRY_PRICE_FEAUTURES,
  FEATURES,
  SOLUTIONS,
  TITLES,
  SLOGANS,
  SHORT_DESC,
  PAGE_DESC,
  IMAGES,
};
