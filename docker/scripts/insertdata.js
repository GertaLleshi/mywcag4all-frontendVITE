print("Esecuzione dello script insertData.js...");

db = db.getSiblingDB("mywcag4all");

print("Database selezionato: " + db.getName());

print("Esecuzione dello script per la collezione tools...");

// Elimina tutti i documenti esistenti nella collezione
db.tools.deleteMany({});

db.tools.insertMany([
  {
    name: "ColorA11y",
    url: "https://color.a11y.com/",
    types: ["Web service"],
    tags: ["color-contrast"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 0,
  },
  {
    name: "Colour Color Contrast Analyser",
    url: "https://www.tpgi.com/color-color-contrast-checker/",
    types: ["Software", "Desktop app"],
    tags: ["color-contrast"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/ThePacielloGroup/CCAe",
    index: 1,
  },
  {
    name: "Contrast Checker",
    url: "https://webaim.org/resources/color-contrast-checker/",
    types: ["Web service", "API"],
    tags: ["color-contrast"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 2,
  },
  {
    name: "Color Contrast Checker",
    url: "https://coolors.co/color-contrast-checker/",
    types: ["Web service"],
    tags: ["color", "font size", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 3,
  },
  {
    name: "Link Color Contrast Checker",
    url: "https://webaim.org/resources/linkcolor-contrastchecker/",
    types: ["Web service", "API"],
    tags: ["color", "level", "link", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 4,
  },
  {
    name: "Color Contrast Checker",
    url: "https://chrome.google.com/webstore/detail/colour-color-contrast-checker/nmmjeclfkgjdomacpcflgdkgpphpmnfe",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["color", "wcag level", "font", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/Pushedskydiver/Colour-Contrast-Checker",
    index: 5,
  },
  {
    name: "Color Contrast Checker",
    url: "https://colourcolor-contrast.cc/",
    types: ["Web service"],
    tags: ["color", "level", "font size", "font", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/Pushedskydiver/Colour-Contrast-Checker",
    index: 6,
  },
  {
    name: "WCAG Contrast Checker",
    url: "https://addons.mozilla.org/it/firefox/addon/wcag-color-contrast-checker/",
    types: ["Browser plugin", "Firefox extension"],
    tags: ["color", "wcag level", "font size", "vision simulator", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 7,
  },
  {
    name: "WCAG Contrast Checker",
    url: "https://chrome.google.com/webstore/detail/wcag-color-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["color", "wcag level", "font size", "vision simulator", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 8,
  },
  {
    name: "WCAG Contrast Checker",
    url: "https://microsoftedge.microsoft.com/addons/detail/wcag-color-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp",
    types: ["Browser plugin", "MS Edge extension"],
    tags: ["color", "wcag level", "font size", "vision simulator", "color picker"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 9,
  },
  {
    name: "Accessible Color Palette",
    url: "https://pa11y.vercel.app",
    types: ["Web service"],
    tags: ["color", "color-contrast", "wcag level"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/j0lv3r4/pa11y",
    index: 10,
  },
  {
    name: "Readability Test Web FX",
    url: "https://www.webfx.com/tools/read-able/",
    types: ["Web service"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 11,
  },
  {
    name: "Readability Test of a Website",
    url: "https://juicystudio.com/services/readability.php#readweb",
    types: ["Web service"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 12,
  },
  {
    name: "Calcolo Indice Leggibilità",
    url: "https://www.dogmadynamics.com/calcolo-indice-lettura-facile.html",
    types: ["Web service"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 13,
  },
  {
    name: "Readability Score",
    url: "https://chrome.google.com/webstore/detail/readability-score/pfnlengicohogdjcldalmpmdnaecndhf",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 14,
  },
  {
    name: "TRAY Readability Tool",
    url: "https://chrome.google.com/webstore/detail/tray-readability-tool/eccbjfaplogblgjpopbihpgfgmlgjamf/related",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["readability"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 15,
  },
  {
    name: "Who can use",
    url: "https://whocanuse.com",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/CoreyGinnivan/whocanuse",
    index: 16,
  },
  {
    name: "Web Disability Simulator",
    url: "https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla/related",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc569"), // ISC License
    source_code: "https://github.com/Metamatrix/web-disability-simulator",
    index: 17,
  },
  {
    name: "Funkify – Disability Simulator",
    url: "https://www.funkify.org",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["vision simulator"],
    price: "free, priced",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 18,
  },
  {
    name: "Silktide - WA Simulator",
    url: "https://chrome.google.com/webstore/detail/silktide-website-accessib/okcpiimdfkpkjcbihbmhppldhiebhhaf",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 19,
  },
  {
    name: "Toptal",
    url: "https://www.toptal.com/designers/colorfilter/",
    types: ["Web service"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 20,
  },
  {
    name: "Visolve",
    url: "https://www.ryobi.co.jp/products/visolve/en/",
    types: ["Software", "Desktop app"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 21,
  },
  {
    name: "PEAT",
    url: "https://trace.umd.edu/PEAT/",
    types: ["Software", "Desktop app", "Windows only"],
    tags: ["epilepsy condition evaluation"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 22,
  },
  {
    name: "Color Oracle",
    url: "http://colororacle.org",
    types: ["Software", "Desktop app", "Multiplatform"],
    tags: ["vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/nvkelso/color-oracle-java",
    index: 23,
  },
  {
    name: "HTML Validator",
    url: "https://validator.w3.org/",
    types: ["Web service"],
    tags: ["validator", "html5"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/w3c/markup-validator",
    index: 24,
  },
  {
    name: "CSS Validator",
    url: "https://jigsaw.w3.org/css-validator/",
    types: ["Web service"],
    tags: ["validator", "css3"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/w3c/css-validator",
    index: 25,
  },
  {
    name: "HTML Experimental Validator",
    url: "https://validator.w3.org/nu/",
    types: ["Web service"],
    tags: ["validator", "html"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/validator/validator",
    index: 26,
  },
  {
    name: "i18n-checker",
    url: "https://validator.w3.org/i18n-checker/",
    types: ["Web service"],
    tags: ["internationalisation", "evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/w3c/i18n-checker",
    index: 27,
  },
  {
    name: "CheckLink",
    url: "https://validator.w3.org/checklink",
    types: ["Web service"],
    tags: ["link", "anchors"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/w3c/link-checker",
    index: 28,
  },
  {
    name: "nerdefocus",
    url: "https://chrome.google.com/webstore/detail/nerdefocus/lpfiljldhgjecfepfljnbjnbjfhennpd",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["focus"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/wizzyfx/nerdeFocusPlugIn",
    index: 29,
  },
  {
    name: "tab11t",
    url: "https://chrome.google.com/webstore/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga?hl=en",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["tab order"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 30,
  },
  {
    name: "Table Validator",
    url: "https://wet-boew.github.io/v4.0-ci/demos/tablevalidator/tablevalidator-en.html",
    types: ["Web service"],
    tags: ["table"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc565"), // W3C Software License
    source_code: "https://github.com/wet-boew/wet-boew",
    index: 31,
  },
  {
    name: "headingsMap",
    url: "https://addons.mozilla.org/es/firefox/addon/headingsmap/",
    types: ["Browser plugin", "Firefox extension"],
    tags: ["headings"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 32,
  },
  {
    name: "Can I Use",
    url: "https://caniuse.com/ciu/index",
    types: ["Web service"],
    tags: ["HTML tag"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc566"), // CC-BY-4.0 License
    source_code: "https://github.com/Fyrd/caniuse",
    index: 33,
  },
  {
    name: "Pa11y Dashboard",
    url: "https://pa11y.org/",
    types: ["Web service"],
    tags: ["monitoring"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/pa11y/pa11y-dashboard",
    index: 34,
  },
  {
    name: "Pa11y Tester",
    url: "https://pa11y.org/",
    types: ["Software", "Desktop app", "Multiplatform", "CLI"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/pa11y/pa11y",
    index: 35,
  },
  {
    name: "Pa11y Webservice",
    url: "https://pa11y.org/",
    types: ["Web service"],
    tags: ["service"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/pa11y/pa11y-webservice",
    index: 36,
  },
  {
    name: "Tanaguru",
    url: "https://www.tanaguru.com/en/open-source-tools-tanaguru/",
    types: ["Web service"],
    tags: ["monitoring"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc563"), // AGPL-3.0 License
    source_code: "https://github.com/Tanaguru/Tanaguru",
    index: 37,
  },
  {
    name: "A11ygato",
    url: "https://opensource.orange.com/en/news/a11ygato-accessbility-dashboard-for-website-monitoring/",
    types: ["Web service"],
    tags: ["monitoring"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/Orange-OpenSource/a11ygato-platform",
    index: 38,
  },
  {
    name: "Web Accessibility",
    url: "https://www.webaccessibility.com",
    types: ["Web service"],
    tags: ["evaluation tool", "monitoring"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 39,
  },
  {
    name: "AInspector Sidebar",
    url: "https://ainspector.github.io/",
    types: ["Browser plugin", "Firefox extension"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc567"), // MPL-2.0 License
    source_code: "https://github.com/ainspector/firefox-ainspector-wcag",
    index: 40,
  },
  {
    name: "Functional Accessibility Evaluator",
    url: "https://fae.disability.illinois.edu/anonymous/?Anonymous%20Report=/",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc568"), // Apache-2.0 License
    source_code: "https://github.com/opena11y/fae2",
    index: 41,
  },
  {
    name: "Web Developer",
    url: "https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["evaluation tool", "dev tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc562"), // GPL-3.0 License
    source_code: "https://github.com/chrispederick/web-developer/",
    index: 42,
  },
  {
    name: "WAVE Web Accessibility Evaluation Tool",
    url: "https://wave.webaim.org/",
    types: ["Web service", "API", "Browser plugin", "Chrome extension", "Firefox extension", "Edge extension"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 43,
  },
  {
    name: "Total Validator",
    url: "https://www.totalvalidator.com/",
    types: ["Software", "Desktop app", "Browser plugin", "Chrome extension", "Firefox extension", "Edge extension"],
    tags: ["evaluation tool"],
    price: "free, priced",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 44,
  },
  {
    name: "AccessibilityChecker.org",
    url: "https://www.accessibilitychecker.org/",
    types: ["Web service"],
    tags: ["evaluation tool", "legal advising"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 45,
  },
  {
    name: "Sa11y",
    url: "https://ryersondmp.github.io/sa11y/",
    types: ["Software", "Desktop app", "Browser plugin"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/ryersondmp/sa11y",
    index: 46,
  },
  {
    name: "A11y.css",
    url: "https://chrome.google.com/webstore/detail/a11ycss/iolfinldndiiobhednboghogkiopppid",
    types: ["Software", "Desktop app", "Browser plugin", "Chrome extension", "Firefox extension", "API"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/ffoodd/a11y.css",
    index: 47,
  },
  {
    name: "ARC Toolkit",
    url: "https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce/related?hl=en",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 48,
  },
  {
    name: "QualWeb",
    url: "http://qualweb.di.fc.ul.pt/evaluator/",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc569"), // ISC License
    source_code: "https://github.com/qualweb",
    index: 49,
  },
  {
    name: "Mauve++",
    url: "https://mauve.isti.cnr.it/singleValidationResults.jsp",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 50,
  },
  {
    name: "Asqatasun",
    url: "https://doc.asqatasun.org/v5/en/",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc563"), // AGPL-3.0 License
    source_code: "https://gitlab.com/asqatasun/Asqatasun/-/tree/master",
    index: 51,
  },
  {
    name: "TAW",
    url: "https://www.tawdis.net/?lang=en",
    types: ["Web service"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 52,
  },
  {
    name: "Visual ARIA",
    url: "http://www.whatsock.com/",
    types: ["Browser plugin", "Chrome extension"],
    tags: ["aria"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/accdc/visual-aria",
    index: 53,
  },
  {
    name: "Accessibility Panel",
    url: "https://developer.chrome.com/docs/devtools/accessibility/reference/#pane",
    types: ["Browser feature", "Chrome"],
    tags: ["aria", "accessibility tree", "order"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc568"), // Apache-2.0 License
    source_code: "https://github.com/GoogleChrome",
    index: 54,
  },
  {
    name: "Lighthouse - Chrome DevTools",
    url: "https://developers.google.com/web/tools/lighthouse",
    types: ["Browser feature", "Chrome"],
    tags: ["evaluation tool"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc568"), // Apache-2.0 License
    source_code: "https://github.com/GoogleChrome/lighthouse",
    index: 55,
  },
  {
    name: "Accessibility Inspector",
    url: "https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector",
    types: ["Browser feature", "Firefox"],
    tags: ["evaluation tool", "vision simulator"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "https://github.com/mozilla",
    index: 56,
  },
  {
    name: "Atom Accessibility Checker",
    url: "https://atom.io/packages/web-accessibility-checker",
    types: ["Atom package"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/web-weber/web-accessibility-checker",
    index: 57,
  },
  {
    name: "Web Accessibility Extension - Visual Studio Code",
    url: "https://marketplace.visualstudio.com/items?itemName=MaxvanderSchee.web-accessibility",
    types: ["VS Code plugin"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc561"), // MIT License
    source_code: "https://github.com/mvdschee/web-accessibility",
    index: 58,
  },
  {
    name: "Axe Accessibility Linter - Visual Studio Code",
    url: "https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter",
    types: ["Visual Studio Code plugin"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 59,
  },
  {
    name: "Axe Linter GitHub",
    url: "https://github.com/marketplace/axe-linter",
    types: ["GitHub extension"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 60,
  },
  {
    name: "Pa11y CI",
    url: "https://pa11y.org/",
    types: ["CI tool"],
    tags: ["testing"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc564"), // LGPLv3 License
    source_code: "https://github.com/pa11y/pa11y-ci",
    index: 61,
  },
  {
    name: "HTML Code Analyzer",
    url: "https://rules.sonarsource.com/html/tag/accessibility/",
    types: ["Code Quality tool", "SonarQube add-on"],
    tags: ["static code analyzer"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 62,
  },
  {
    name: "Chrome DevTools - Device Toolbar",
    url: "https://developer.chrome.com/docs/devtools/device-mode/#viewport",
    types: ["Browser feature", "Chrome"],
    tags: ["mobile view"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "https://github.com/googlechrome",
    index: 63,
  },
  {
    name: "mobiReady",
    url: "https://ready.mobi/",
    types: ["Web service"],
    tags: ["performance"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 64,
  },
  {
    name: "Responsinator",
    url: "https://www.responsinator.com/",
    types: ["Web service"],
    tags: ["mobile view"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 65,
  },
  {
    name: "PageSpeed Insights",
    url: "https://developers.google.com/speed/pagespeed/insights/?hl=it",
    types: ["Web service", "API"],
    tags: ["performance"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc568"), // Various (Apache License v2.0)
    source_code: "",
    index: 66,
  },
  {
    name: "GTmetrix",
    url: "https://gtmetrix.com/",
    types: ["Web service"],
    tags: ["performance"],
    price: "free",
    license: ObjectId("6522ca69b0c8e50007cdc56a"), // Copyright
    source_code: "",
    index: 67,
  },
]);

print("Esecuzione dello script per la collezione toolclasses...");

// Elimina tutti i documenti esistenti nella collezione
db.toolclasses.deleteMany({});

db.toolclasses.insertMany([
  { name: "Web service", slug: "web-service" },
  { name: "Software", slug: "software" },
  { name: "API", slug: "api" },
  { name: "Browser plugin", slug: "browser-plugin" },
  { name: "Mobile app", slug: "mobile-app" },
  { name: "Desktop app", slug: "desktop-app" },
  { name: "Chrome extension", slug: "chrome-extension" },
  { name: "Firefox extension", slug: "firefox-extension" },
  { name: "Windows only", slug: "windows-only" },
  { name: "MacOS only", slug: "macos-only" },
  { name: "Linux only", slug: "linux-only" },
  {
    name: "Multiplatform (Windows, Mac, Linux)",
    slug: "multiplatform-windows-mac-linux",
  },
]);

print("Esecuzione dello script per la collezione licenses...");

// Elimina tutti i documenti esistenti nella collezione
db.licenses.deleteMany({});

db.licenses.insertMany([
  {
    _id: "6522ca69b0c8e50007cdc561",
    name: "Massachusetts Institute of Technology License",
    abbr: "MIT License",
    url: "https://opensource.org/licenses/MIT",
  },
  {
    _id: "6522ca69b0c8e50007cdc562",
    name: "GNU General Public License version 3",
    abbr: "GPLv3",
    url: "https://www.gnu.org/licenses/gpl-3.0.html",
  },
  {
    _id: "6522ca69b0c8e50007cdc563",
    name: "GNU Affero General Public License version 3",
    abbr: "AGPLv3",
    url: "https://www.gnu.org/licenses/agpl-3.0.html",
  },
  {
    _id: "6522ca69b0c8e50007cdc564",
    name: "GNU Lesser General Public License version 3",
    abbr: "LGPLv3",
    url: "https://www.gnu.org/licenses/lgpl-3.0.html",
  },
  {
    _id: "6522ca69b0c8e50007cdc565",
    name: "W3C Software License (2023 version)",
    abbr: "W3C Software License",
    url: "https://www.w3.org/copyright/software-license-2023/",
  },
  {
    _id: "6522ca69b0c8e50007cdc566",
    name: "Creative Commons Attribution 4.0 International License",
    abbr: "CC BY 4.0",
    url: "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    _id: "6522ca69b0c8e50007cdc567",
    name: "Mozilla Public License version 2.0",
    abbr: "MPL v2.0",
    url: "https://www.mozilla.org/en-US/MPL/2.0/",
  },
  {
    _id: "6522ca69b0c8e50007cdc568",
    name: "Apache License version 2.0",
    abbr: "Apache License v2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0",
  },
  {
    _id: "6522ca69b0c8e50007cdc569",
    name: "Internet Systems Consortium License",
    abbr: "ISC License",
    url: "https://opensource.org/licenses/ISC",
  },
  {
    _id: "6522ca69b0c8e50007cdc56a",
    name: "Copyright - All Rights Reserved",
    abbr: "Copyright ©",
    url: "https://en.wikipedia.org/wiki/Copyright",
  },
]);

print("Esecuzione dello script per la collezione myths...");

// Elimina tutti i documenti esistenti nella collezione
db.myths.deleteMany({});

db.myths.insertMany([
  {
    index: 0,
    title: "I siti accessibili sono brutti",
    description:
      "Un sito web accessibile non è obbligatoriamente brutto perché l'accessibilità si concentra sulla facilità di utilizzo per tutte le persone, comprese quelle con disabilità. Un sito web ben progettato e accessibile può essere esteticamente gradevole e funzionale allo stesso tempo, offrendo una migliore esperienza utente per tutti.",
  },
  {
    index: 1,
    title: "Il mio sito non verrà mai visitato da...",
    description:
      "Milioni di persone con disabilità utilizzano Internet in tutto il mondo. Questo numero varia a seconda della regione e del tipo di disabilità, ma le tecnologie accessibili e gli strumenti di assistenza hanno reso Internet un mezzo fondamentale per la comunicazione, l'informazione e l'inclusione sociale per molte persone con disabilità.",
  },
  {
    index: 2,
    title: "Basta aggiungere gli alt alle immagini",
    description:
      "Fornire solo alternative testuali alle immagini è un passo importante per rendere un sito web più accessibile, ma non è sufficiente per renderlo pienamente accessibile per tutti.",
  },
  {
    index: 3,
    title: "Alle aziende non interessa l'accessibilità",
    description:
      "Non è vero che alle aziende non interessa l'accessibilità dei servizi e dei prodotti digitali perché l'accessibilità può portare a una più ampia base di clienti, evitare rischi legali, migliorare la reputazione aziendale, dimostrare impegno verso la diversità e l'inclusione, e promuovere l'innovazione e l'efficienza interna.",
  },
  {
    index: 4,
    title: "Un sito dinamico non può essere accessibile",
    description:
      "Un sito dinamico, che prevede frequenti interazioni da parte dell'utente, può essere totalmente accessibile se progettato tenendo conto delle esigenze di tutte le persone, comprese quelle con disabilità. Ciò implica la progettazione di un'interfaccia intuitiva, la possibilità di navigare e interagire con il sito tramite tastiera o altri dispositivi, la piena compatibilità con screen reader e altre tecnologie assistive, garantendo così che tutti gli utenti possano partecipare in modo completo ed efficace senza barriere.",
  },
  {
    index: 5,
    title: "Basta utilizzare colori ad alto contrasto",
    description:
      "Per rendere un sito accessibile non basta utilizzare colori ad alto contrasto perché l'accessibilità coinvolge molteplici aspetti, come la navigazione con la tastiera, il testo alternativo per le immagini, la struttura logica del contenuto, la sua chiarezza e molto altro. Tutti questi aspetti devono essere considerati per soddisfare le esigenze di utenti con disabilità di diverse tipologie e per migliorare l'esperienza utente di tutti.",
  },
  {
    index: 6,
    title: "L'accessibilità riguarda solo persone con difetti alla vista",
    description:
      "L'accessibilità dei siti web è rivolta a tutte le persone, incluse quelle con disabilità visive, uditive, motorie o cognitive. L'obiettivo è garantire che tutti gli utenti, indipendentemente dalle loro capacità, possano accedere, navigare e interagire in modo efficace con il contenuto e le funzionalità dei siti web, promuovendo l'inclusione digitale e l'uguaglianza di accesso alle informazioni per tutti.",
  },
]);

print("Esecuzione dello script per la collezione criterions...");

// Elimina tutti i documenti esistenti nella collezione
db.criterions.deleteMany({});

db.criterions.insertMany([
  {
    title: "Contenuti non testuali",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#non-text-content",
    wcag_level: "A",
    description:
      "Se il contenuto non testuale è un controllo o accetta l'input degli utenti, allora ha un nome che ne descrive la finalità. (Fare riferimento al criterio di successo 4.1.2 per requisiti aggiuntivi per controlli e contenuti che accettano l'input dell'utente).",
    index: "1.1.1",
  },
  {
    title: "Solo audio e solo video (preregistrati)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#audio-only-and-video-only-prerecorded",
    wcag_level: "A",
    description:
      "È fornita un' alternativa per il tipo di media temporizzato che presenti informazioni equivalenti al contenuto di solo audio preregistrato.",
    index: "1.2.1",
  },
  {
    title: "Sottotitoli (preregistrati)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded",
    wcag_level: "A",
    description:
      "Per tutti i contenuti audio preregistrati presenti in tipi di media sincronizzati sono forniti sottotitoli , eccetto quando tali contenuti sono alternativi ad un contenuto testuale e sono chiaramente etichettati come tali.",
    index: "1.2.2",
  },
  {
    title: "Audiodescrizione o tipo di media alternativo (preregistrato))",
    link_understanding:
      "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#audio-description-or-media-alternative-prerecorded",
    wcag_level: "A",
    description:
      "Per i media sincronizzati è fornita un' alternativa ai media temporizzati , oppure una audiodescrizione dei contenuti video preregistrati , eccetto quando il contenuto audio o video è alternativo ad un contenuto testuale ed è chiaramente etichettato come tale.",
    index: "1.2.3",
  },
  {
    title: "Sottotitoli (in tempo reale)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#captions-live",
    wcag_level: "AA",
    description:
      "Per tutti i contenuti audio in tempo reale sotto forma di media sincronizzati sono forniti sottotitoli.",
    index: "1.2.4",
  },
  {
    title: "Audiodescrizione (preregistrata)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#audio-description-prerecorded",
    wcag_level: "AA",
    description:
      "Per tutti i contenuti video preregistrati sotto forma di media sincronizzati è fornita una audiodescrizione.",
    index: "1.2.5",
  },
  {
    title: "Lingua dei segni (preregistrato)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#sign-language-prerecorded",
    wcag_level: "AAA",
    description:
      "Per tutti i contenuti audio preregistrati sotto forma di media sincronizzati è fornita l' interpretazione tramite lingua dei segni.",
    index: "1.2.6",
  },
  {
    title: "Audiodescrizione estesa (preregistrata)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#extended-audio-description-prerecorded",
    wcag_level: "AAA",
    description:
      "Per tutti i contenuti video preregistrati in media sincronizzati , se le pause nell'audio principale sono troppo brevi per consentire alle audiodescrizioni di comunicare il senso del video, sono fornite delle audiodescrizioni estese.",
    index: "1.2.7",
  },
  {
    title: "Tipo di media alternativo (preregistrato)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#media-alternative-prerecorded",
    wcag_level: "AAA",
    description:
      "Per tutti i contenuti preregistrati di media sincronizzati e per tutti i tipi di media preregistrati di solo video è fornito un tipo di media alternativo.",
    index: "1.2.8",
  },
  {
    title: "Solo audio (in tempo reale)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#audio-only-live",
    wcag_level: "AAA",
    description:
      "Per i media temporizzati che presentano informazioni equivalenti a contenuti solo audio in tempo reale è fornita un' alternativa.",
    index: "1.2.9",
  },
  {
    title: "Informazioni e correlazioni",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships",
    wcag_level: "A",
    description:
      "Le informazioni, la struttura e le correlazioni trasmesse dalla presentazione possono essere determinate programmaticamente oppure sono disponibili tramite testo.",
    index: "1.3.1",
  },
  {
    title: "Sequenza significativa",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence",
    wcag_level: "A",
    description:
      "Quando la sequenza in cui il contenuto è presentato influisce sul suo significato, la corretta sequenza di lettura può essere determinata programmaticamente.",
    index: "1.3.2",
  },
  {
    title: "Caratteristiche sensoriali",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#sensory-characteristics",
    wcag_level: "A",
    description: "Per i requisiti relativi al colore, riferirsi alla linea guida 1.4.",
    index: "1.3.3",
  },
  {
    title: "Orientamento",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/orientation.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#orientation",
    wcag_level: "AA",
    description:
      "La visualizzazione e il funzionamento di un contenuto non dipendono dall'orientamento dello schermo, ad esempio verticale o orizzontale, a meno che questo non sia essenziale (Esempi in cui un particolare orientamento del display può essere essenziale sono un assegno bancario, un'applicazione per pianoforte, delle diapositive per un proiettore o un televisore o un contenuto di realtà virtuale in cui un cambio di orientamento dello schermo non è applicabile).",
    index: "1.3.4",
  },
  {
    title: "Identificare lo scopo degli input",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose",
    wcag_level: "AA",
    description:
      "Lo scopo di ciascun campo di input per le informazioni sull'utente può essere determinato programmaticamente quando: 1)Il campo di input ha uno scopo noto, identificato nella sezione scopo dell'input per i componenti dell'interfaccia utente e 2) Il contenuto è implementato utilizzando tecnologie che supportino l'identificazione del significato atteso dei dati inseriti del modulo",
    index: "1.3.5",
  },
  {
    title: "Identificare lo scopo",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#identify-purpose",
    wcag_level: "AAA",
    description:
      "Nei contenuti implementati utilizzando i linguaggi di markup, è possibile determinare programmaticamente lo scopo dei componenti dell'interfaccia utente , delle icone e delle aree.",
    index: "1.3.6",
  },
  {
    title: "Uso del colore",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#use-of-color",
    wcag_level: "A",
    description:
      "Questo criterio di successo è specifico per la percezione del colore. Altre modalità di percezione sono presenti nella linea guida 1.3 , ivi incluso l'accesso programmatico al colore e ad altre codifiche visive della presentazione.",
    index: "1.4.1",
  },
  {
    title: "Controllo del sonoro",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#audio-control",
    wcag_level: "A",
    description:
      "Dal momento che qualsiasi contenuto che non soddisfi questo criterio di successo può interferire con la possibilità dell'utente di fruire l'intera pagina, tutto il contenuto della pagina Web (che sia utilizzato o meno per soddisfare altri criteri di successo), deve rispondere a tale criterio di successo. Consultare il requisito di conformità 5: non interferenza.",
    index: "1.4.2",
  },
  {
    title: "Contrasto (minimo)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum",
    wcag_level: "AA",
    description: "Testo grande e immagini contenenti testo grande devono avere un rapporto di contrasto di almeno 3:1;",
    index: "1.4.3",
  },
  {
    title: "Ridimensionamento del testo",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#resize-text",
    wcag_level: "AA",
    description:
      "Il testo , ad eccezione dei sottotitoli e delle immagini contenenti testo , può essere ridimensionato fino al 200 percento senza l'ausilio di tecnologie assistive e senza perdita di contenuto e funzionalità.",
    index: "1.4.4",
  },
  {
    title: "Immagini di testo",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#images-of-text",
    wcag_level: "AA",
    description: "L'immagine di testo può essere personalizzata visivamente per le esigenze dell'utente;",
    index: "1.4.5",
  },
  {
    title: "Contrasto (avanzato)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#contrast-enhanced",
    wcag_level: "AAA",
    description:
      "Testo grande e immagini contenenti testo grande devono avere un rapporto di contrasto di almeno 4.5:1;",
    index: "1.4.6",
  },
  {
    title: "Sottofondo sonoro basso o non presente",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#low-or-no-background-audio",
    wcag_level: "AAA",
    description: "Il sonoro non contiene suoni di sottofondo.",
    index: "1.4.7",
  },
  {
    title: "Presentazione visiva",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#visual-presentation",
    wcag_level: "AAA",
    description:
      "Per la presentazione visiva di blocchi di testo , è disponibile una modalità per conseguire i seguenti obiettivi:",
    index: "1.4.8",
  },
  {
    title: "Immagini di testo (senza eccezioni)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#images-of-text-no-exception",
    wcag_level: "AAA",
    description: "I logotipi (testo che fa parte di un logo o di un marchio) sono considerati essenziali.",
    index: "1.4.9",
  },
  {
    title: "Ricalcolo del flusso",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#reflow",
    wcag_level: "AA",
    description:
      "Il contenuto può essere ripresentato senza perdita di informazioni o funzionalità e senza richiedere lo scorrimento in due dimensioni per:1)Contenuto a scorrimento verticale con una larghezza equivalente a 320 CSS pixel; e 2) Contenuto a scorrimento orizzontale ad un'altezza equivalente a 256 CSS pixel.Tranne per le parti del contenuto che richiedono layout bidimensionale per l'utilizzo o per comprenderne il senso.",
    index: "1.4.10",
  },
  {
    title: "Contrasto in contenuti non testuali",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast",
    wcag_level: "AA",
    description:
      "Nella presentazione visiva il rapporto di contrasto è di almeno 3:1 rispetto al colore o ai colori adiacenti per: 1)Componenti dell'interfaccia utente Le informazioni visive richieste per identificare i componenti dell'interfaccia utente e gli stati (ad eccezione dei componenti inattivi o dove l'aspetto del componente è determinato dal programma utente e non modificato dall'autore); e 2)Oggetti grafici Parti di grafica necessarie per comprendere il contenuto, tranne quando una particolare presentazione di grafica sia essenziale per le informazioni trasmesse.",
    index: "1.4.11",
  },
  {
    title: "Spaziatura del testo",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#text-spacing",
    wcag_level: "AA",
    description:
      "Nei contenuti implementati utilizzando linguaggi di markup che supportano le seguenti proprietà di stile per il testo, non si verifica alcuna perdita di contenuto o funzionalità impostando quanto segue senza modificare altre proprietà di stile: 1)Altezza della linea (interlinea) di almeno 1,5 volte la dimensione del carattere; 2)Spaziatura dopo i paragrafi di almeno 2 volte la dimensione del carattere; 3)Spaziatura tra le lettere di almeno 0,12 volte la dimensione del carattere; 4)Spaziatura tra le parole di almeno 0,16 volte la dimensione del carattere. Eccezione: le lingue e le scritture che non utilizzano una o più di queste proprietà nel testo scritto sono conformi quando si può applicare il criterio alle sole proprietà esistenti per quella combinazione di lingua e scrittura.",
    index: "1.4.12",
  },
  {
    title: "Contenuto con Hover o Focus",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus",
    wcag_level: "AA",
    description:
      "Nel caso in cui il passaggio del puntatore del mouse (hover) o il focus della tastiera rendono visibili e nascosti dei contenuti, sono soddisfatte le seguenti condizioni: 1)Congedabile: È disponibile un meccanismo per eliminare il contenuto aggiuntivo senza spostare il puntatore del mouse o il focus della tastiera, a meno che il contenuto aggiuntivo non comunichi un errore di immissione dei dati o non oscuri o sostituisca altri contenuti; 2)Passabile: Se il passaggio del puntatore del mouse sul contenuto può attivare il contenuto aggiuntivo, il puntatore può essere spostato sul contenuto aggiuntivo senza che questo scompaia; 3)Persistente: Il contenuto aggiuntivo rimane visibile fino a quando l'evento hover o focus non viene rimosso, l'utente lo elimina o le sue informazioni non sono più valide.Eccezione: la presentazione visiva del contenuto aggiuntivo è controllata dal programma utente e non viene modificata dall'autore.",
    index: "1.4.13",
  },
  {
    title: "Tastiera",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#keyboard",
    wcag_level: "A",
    description:
      "Questa eccezione si riferisce alla funzionalità di fondo, non alla tecnica di input. Per esempio, usando la scrittura a mano per immettere del testo, la tecnica di input (scrittura a mano) richiede un input che dipende dal percorso tracciato mentre la funzionalità di fondo (immissione di testo) non lo richiede.",
    index: "2.1.1",
  },
  {
    title: "Nessun impedimento all'uso della tastiera",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#no-keyboard-trap",
    wcag_level: "A",
    description:
      "Dal momento che qualsiasi contenuto che non rispetti questo criterio di successo può interferire con l'utilizzo da parte dell'utente dell'intera pagina, tutti i contenuti della pagina web (che siano usati per rispettare altri criteri di successo o meno) devono rispettare questo criterio di successo. Consultare il requisito di conformità 5: non interferenza.",
    index: "2.1.2",
  },
  {
    title: "Tastiera (nessuna eccezione)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#keyboard-no-exception",
    wcag_level: "AAA",
    description:
      "Tutte le funzionalità del contenuto sono utilizzabili tramite un' interfaccia di tastiera senza richiedere tempi specifici per la pressione dei singoli tasti.",
    index: "2.1.3",
  },
  {
    title: "Tasti di scelta rapida",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#character-key-shortcuts",
    wcag_level: "A",
    description:
      "Se nel contenuto viene implementata una scorciatoia da tastiera utilizzando sole lettere (maiuscole e minuscole), segni di punteggiatura, numeri o simboli, allora è vera almeno una delle seguenti condizioni: 1)Disattivazione È disponibile un meccanismo per disattivare la scorciatoia; 2)Rimappatura È disponibile un meccanismo per rimappare la scorciatoia in modo che usi uno o più caratteri non stampabili della tastiera (ad esempio Ctrl, Alt, ecc.); 3)Attivazione solo al focus La scorciatoia da tastiera per un componente dell'interfaccia utente è attiva solo quando questo è attivo.",
    index: "2.1.4",
  },
  {
    title: "Regolazione tempi di esecuzione",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#timing-adjustable",
    wcag_level: "A",
    description: "All'utente è consentito disattivare il limite di tempo prima di raggiungerlo; oppure",
    index: "2.2.1",
  },
  {
    title: "Pausa, stop, nascondi",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#pause-stop-hide",
    wcag_level: "A",
    description:
      "Per qualsiasi movimento, lampeggiamento o scorrimento di informazioni che (1) si avvia automaticamente, (2) dura più di cinque secondi e (3) è presentato in parallelo con altro contenuto, è presente un meccanismo per metterlo in pausa , interromperlo o nasconderlo, a meno che il movimento, il lampeggiamento o lo scorrimento siano parte essenziale dell'attività; e",
    index: "2.2.2",
  },
  {
    title: "Nessun tempo di esecuzione",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#no-timing",
    wcag_level: "AAA",
    description:
      "Le temporizzazioni non sono parti essenziali dell'evento o dell'attività presentata dal contenuto, ad eccezione fatta dei tipi di media sincronizzati e degli eventi in tempo reale.",
    index: "2.2.3",
  },
  {
    title: "Interruzioni",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#interruptions",
    wcag_level: "AAA",
    description:
      "Le interruzioni possono essere rinviate o annullate dall'utente ad eccezione di quelle che riguardano un' emergenza.",
    index: "2.2.4",
  },
  {
    title: "Riautenticazione",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#re-authenticating",
    wcag_level: "AAA",
    description:
      "Quando una sessione autenticata scade, l'utente può continuare l'attività senza perdita di dati dopo essersi autenticato nuovamente.",
    index: "2.2.5",
  },
  {
    title: "Termine del tempo",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#timeouts",
    wcag_level: "AAA",
    description:
      "Gli utenti sono avvisati della durata di qualsiasi inattività che potrebbe causare la perdita di dati, a meno che i dati non vengano conservati per più di 20 ore quando l'utente non intraprende alcuna azione. NORME: Le norme sulla privacy potrebbero richiedere il consenso esplicito dell'utente prima che questo sia identificato autenticandolo e prima che i dati dell'utente vengano conservati. Nei casi in cui l'utente sia un minore può essere possibile richiedere un consenso esplicito nella maggior parte delle giurisdizioni, paesi o regioni. Si consiglia la consulenza di professionisti della privacy e consulenti legali quando si prende in considerazione di soddisfare questo criterio di successo mediante la conservazione dei dati.",
    index: "2.2.6",
  },
  {
    title: "Tre lampeggiamenti o inferiore alla soglia",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold",
    wcag_level: "A",
    description:
      "Dal momento che qualsiasi contenuto che non soddisfa questo criterio di successo può interferire con la capacità di un utente di utilizzare l'intera pagina, tutto il contenuto della pagina Web (sia che venga utilizzato o meno per soddisfare altri criteri di successo) deve rispondere a questo criterio di successo. Consultare il requisito di conformità 5: non interferenza.",
    index: "2.3.1",
  },
  {
    title: "Tre lampeggiamenti",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#three-flashes",
    wcag_level: "AAA",
    description: "Le pagine Web non contengono nulla che lampeggi per più di tre volte in un secondo.",
    index: "2.3.2",
  },
  {
    title: "Animazione da interazioni",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#animation-from-interactions",
    wcag_level: "AAA",
    description:
      "Un movimento animato innescato dall'interazione può essere disabilitato, a meno che l'animazione non sia essenziale per la funzionalità o le informazioni trasmesse.",
    index: "2.3.3",
  },
  {
    title: "Salto di blocchi",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks",
    wcag_level: "A",
    description: "È disponibile un meccanismo per saltare i blocchi di contenuto che si ripetono su più pagine Web.",
    index: "2.4.1",
  },
  {
    title: "Titolazione della pagina",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#page-titled",
    wcag_level: "A",
    description: "Le pagine Web hanno titoli che ne descrivono l'argomento o la finalità.",
    index: "2.4.2",
  },
  {
    title: "Ordine del focus",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#focus-order",
    wcag_level: "A",
    description:
      "Se una pagina Web può essere navigata in modo sequenziale e le sequenze di navigazione influiscono sul suo significato e sul suo funzionamento, gli oggetti che possono ricevere il focus lo ricevono in un ordine che ne conserva il senso e l'operatività.",
    index: "2.4.3",
  },
  {
    title: "Scopo del collegamento (nel contesto)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context",
    wcag_level: "A",
    description:
      "Lo scopo di ogni collegamento può essere determinato dal solo testo del collegamento oppure dal testo del collegamento insieme a dei contenuti contestuali che possono essere determinati programmaticamente , salvo il caso in cui lo scopo del collegamento potrebbe risultare ambiguo per gli utenti in generale.",
    index: "2.4.4",
  },
  {
    title: "Differenti modalità",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#multiple-ways",
    wcag_level: "AA",
    description:
      "Rendere disponibili più modalità per identificare una pagina Web all'interno di un insieme di pagine Web , salvo il caso in cui una pagina Web sia il risultato – o una fase – di un' azione.",
    index: "2.4.5",
  },
  {
    title: "Intestazioni ed etichette",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels",
    wcag_level: "AA",
    description: "Utilizzare intestazioni ed etichette per descrivere argomenti o finalità.",
    index: "2.4.6",
  },
  {
    title: "Focus visibile",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#focus-visible",
    wcag_level: "AA",
    description:
      "Qualsiasi interfaccia utente utilizzabile tramite tastiera ha una modalità operativa in cui è visibile l'indicatore del focus.",
    index: "2.4.7",
  },
  {
    title: "Posizione",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/location.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#location",
    wcag_level: "AAA",
    description:
      "Rendere disponibili informazioni sulla posizione dell'utente all'interno di un insieme di pagine Web.",
    index: "2.4.8",
  },
  {
    title: "Scopo del collegamento (solo collegamento)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only",
    wcag_level: "AAA",
    description:
      "Rendere disponibile un meccanismo per comprendere lo scopo di ciascun collegamento basandosi sul solo testo del collegamento, salvo il caso in cui lo scopo del collegamento potrebbe risultare ambiguo per gli utenti in generale.",
    index: "2.4.9",
  },
  {
    title: "Intestazioni di sezione",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#section-headings",
    wcag_level: "AAA",
    description:
      '"Intestazione" è usato nel suo senso generale ed include titoli ed altri modi per aggiungere un\'intestazione a differenti tipi di contenuto.',
    index: "2.4.10",
  },
  {
    title: "Focus non nascosto (minimo)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-minimum",
    wcag_level: "AA",
    description:
      "Quando un componente dell'interfaccia utente viene attivato tramite tastiera, il componente non viene completamente nascosto da un contenuto generato dall'autore.",
    index: "2.4.11",
  },
  {
    title: "Focus non nascosto (avanzato)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-enhanced",
    wcag_level: "AAA",
    description:
      "Quando un componente dell'interfaccia utente riceve il focus della tastiera, nessuna parte del componente viene nascosta da un contenuto creato dall'autore.",
    index: "2.4.12",
  },
  {
    title: "Aspetto del focus",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#focus-appearance",
    wcag_level: "AAA",
    description:
      "Quando l'indicatore del focus di tastiera è visibile, l'area che occupa deve soddisfare le seguenti condizioni: 1)essere larga quanto l'area occupata dal componente o sottocomponente quando privo di focus, più un perimetro spesso 2 CSS pixel, e 2)vere un rapporto di contrasto di almeno 3:1 tra gli stessi pixel negli stati con focus e senza focus. Eccezione 1)L'indicatore del focus è determinato dal programma utente e non può essere corretto dall'autore Eccezione 2)L'indicatore del focus e il colore di sfondo dell'indicatore non sono stati modificati dall'autore.",
    index: "2.4.13",
  },
  {
    title: "Movimenti del puntatore",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#pointer-gestures",
    wcag_level: "A",
    description:
      "Tutte le funzionalità che per il loro utilizzo richiedono gesti multi punto o basati su percorsi possono essere gestite con un puntatore singolo senza gesti basati sul percorso, a meno che questi non siano essenziali. Questo requisito si applica al contenuto Web che interpreta le azioni del puntatore (ovvero non si applica alle azioni necessarie per il funzionamento del programma utente o della tecnologia assistiva).",
    index: "2.5.1",
  },
  {
    title: "Cancellazione delle azioni del puntatore",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#pointer-cancellation",
    wcag_level: "A",
    description:
      "Per le funzionalità che possono essere gestite utilizzando un singolo puntatore, si verifica almeno una delle seguenti condizioni:1)Nessun evento di selezione (down-event): L'evento di selezione (down-event) del puntatore non è usato per eseguire alcuna parte della funzione; 2)Interruzione o annullamento: La funzione viene portata a termine sull'evento di rilascio (up-event) ed è disponibile un meccanismo per interrompere la funzione prima del completamento o per annullarla dopo il completamento; 3)Inversione: L'evento di rilascio (up-event) inverte qualsiasi risultato dell'evento di selezione (down-event) precedente; 4)Essenziale: È essenziale completare la funzione sull'evento di selezione (down-event). In particolare: Le funzioni che emulano una tastiera o una tastiera numerica sono considerate essenziali.",
    index: "2.5.2",
  },
  {
    title: "Etichetta nel nome",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#label-in-name",
    wcag_level: "A",
    description:
      "Per i componenti dell'interfaccia utente con etichette che includono testo o immagini di testo, il nome contiene il testo che viene presentato visivamente. Una buona pratica è quella di avere il testo dell'etichetta all'inizio del nome.",
    index: "2.5.3",
  },
  {
    title: "Azionamento da movimento",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#motion-actuation",
    wcag_level: "A",
    description:
      "Le funzionalità che possono essere azionate dal movimento del dispositivo o dell'utente possono anche essere attivate dai componenti dell'interfaccia utente e la risposta al movimento può essere disabilitata per impedire l'attivazione accidentale, tranne quando: 1)Interfaccia supportata Il movimento viene utilizzato per attivare la funzionalità attraverso un'interfaccia compatibile con l'accessibilità ; 2)Essenziale Il movimento è essenziale per la funzione e non farlo invaliderebbe l'attività.",
    index: "2.5.4",
  },
  {
    title: "Dimensione dell'obiettivo (avanzato)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#target-size-enhanced",
    wcag_level: "AAA",
    description:
      "La dimensione dell' obiettivo per gli input tramite puntatore è di almeno 44 per 44 CSS pixel , tranne quando: 1)Equivalente L'obiettivo è disponibile attraverso un link o un controllo equivalenti sulla stessa pagina, di almeno 44 per 44 CSS pixel; 2)In linea L'obiettivo è in una frase o in un blocco di testo; 3)Sotto controllo del programma utente La dimensione dell'obiettivo è determinata dal programma utente e non viene modificata dall'autore; 4) ssenziale Una specifica presentazione dell'obiettivo è essenziale perché l'informazione venga trasmessa.",
    index: "2.5.5",
  },
  {
    title: "Meccanismi di input simultanei",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#concurrent-input-mechanisms",
    wcag_level: "AAA",
    description:
      "Il contenuto Web non limita l'uso delle modalità di input disponibili su una piattaforma, tranne nei casi in cui la limitazione è essenziale , necessaria per garantire la sicurezza del contenuto o per rispettare le impostazioni dell'utente.",
    index: "2.5.6",
  },
  {
    title: "Movimenti di trascinamento",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#dragging-movements",
    wcag_level: "AA",
    description:
      "Tutte le funzionalità che per il loro utilizzo richiedono il movimento di trascinamento possono essere gestite con un puntatore singolo senza trascinamento, a meno che il trascinamento non sia essenziale o la funzionalità sia controllata dal programma utente e non venga modificata dall'autore.",
    index: "2.5.7",
  },
  {
    title: "Dimensione dell'obiettivo (minimo)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#target-size-minimum",
    wcag_level: "AA",
    description:
      "La dimensione dell' obiettivo per gli input tramite puntatore è di almeno 24 per 24 CSS pixel , tranne quando: 1)Spaziatura: gli obiettivi sottodimensionati (quelli inferiori a 24 per 24 CSS pixel) sono posizionati in modo che un cerchio di 24 CSS pixel di diametro, centrato sul riquadro che li contiene, non interseca un altro obiettivo o il cerchio di un altro obiettivo sottodimensionato; 2)Equivalente: la funzione può essere raggiunta attraverso un controllo differente, sulla stessa pagina, che soddisfa il criterio; 3) In linea: l'obiettivo è in una frase o in un blocco di testo che ne condiziona la dimensione; 4) Controllato dal programma utente: la dimensione dell'obiettivo è determinata dal programma utente e non è stata modificata dall'autore; 5) Essenziale: una specifica presentazione dell'obiettivo è essenziale perché l'informazione venga trasmessa o è richiesta da una norma giuridica.",
    index: "2.5.8",
  },
  {
    title: "Lingua della pagina",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#language-of-page",
    wcag_level: "A",
    description:
      "L'impostazione della lingua predefinita di ogni pagina Web può essere determinata programmaticamente.",
    index: "3.1.1",
  },
  {
    title: "Parti in lingua",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#language-of-parts",
    wcag_level: "AA",
    description:
      "La lingua di ogni passaggio o frase nel contenuto può essere determinata programmaticamente ad eccezione di nomi propri, termini tecnici, parole in lingue indeterminate e parole o frasi che sono diventate parte integrante del gergo del testo immediatamente circostante.",
    index: "3.1.2",
  },
  {
    title: "Parole inusuali",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#unusual-words",
    wcag_level: "AAA",
    description:
      "È reso disponibile un meccanismo per identificare specifiche definizioni di parole o frasi usate in modo insolito o ristretto , compresi espressioni idiomatiche e gergali.",
    index: "3.1.3",
  },
  {
    title: "Abbreviazioni",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#abbreviations",
    wcag_level: "AAA",
    description:
      "È reso disponibile un meccanismo per identificare la forma espansa o il significato delle abbreviazioni.",
    index: "3.1.4",
  },
  {
    title: "Livello di lettura",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#reading-level",
    wcag_level: "AAA",
    description:
      "Quando il testo richiede capacità di lettura più avanzata rispetto al livello di istruzione secondaria inferiore dopo aver rimosso i nomi propri e i titoli, sono resi disponibili contenuti supplementari oppure una versione che non richieda la capacità di lettura più avanzata rispetto al livello di istruzione secondaria inferiore.",
    index: "3.1.5",
  },
  {
    title: "Pronuncia",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#pronunciation",
    wcag_level: "AAA",
    description:
      "È reso disponibile un meccanismo per identificare specifiche pronunce per le parole il cui significato, nel contesto, è ambiguo se non se ne conosce la pronuncia.",
    index: "3.1.6",
  },
  {
    title: "Al focus",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#on-focus",
    wcag_level: "A",
    description:
      "Quando qualsiasi componente dell'interfaccia utente riceve il focus, non avvia un cambiamento del contesto.",
    index: "3.2.1",
  },
  {
    title: "All'input",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/on-input.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#on-input",
    wcag_level: "A",
    description:
      "Cambiare l'impostazione di qualsiasi componente nell'interfaccia utente non provoca automaticamente un cambiamento di contesto , a meno che l'utente sia stato informato del comportamento prima di utilizzare il componente.",
    index: "3.2.2",
  },
  {
    title: "Navigazione coerente",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#consistent-navigation",
    wcag_level: "AA",
    description:
      "I meccanismi di navigazione che sono ripetuti su più pagine Web all'interno di un insieme di pagine Web , appaiono nello stesso ordine relativo ogni volta che si ripetono, a meno che un cambiamento sia stato avviato da un utente.",
    index: "3.2.3",
  },
  {
    title: "Identificazione coerente",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#consistent-identification",
    wcag_level: "AA",
    description:
      "I componenti che hanno la stessa funzionalità all'interno di un insieme di pagine Web sono identificati in modo coerente.",
    index: "3.2.4",
  },
  {
    title: "Cambiamenti su richiesta",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#change-on-request",
    wcag_level: "AAA",
    description:
      "I cambiamenti di contesto sono avviati solo su richiesta dell'utente, oppure è disponibile un meccanismo per disattivarli.",
    index: "3.2.5",
  },
  {
    title: "Aiuto coerente",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#consistent-help",
    wcag_level: "A",
    description:
      "Se una pagina Web contiene uno dei seguenti meccanismi di aiuto e tali meccanismi si ripetono su più pagine Web all'interno di un insieme di pagine Web , si trovano nello stesso ordine rispetto ad altri contenuti della pagina, a meno che non sia stata avviata una modifica dall’utente: dettagli di contatto umani; meccanismo di contatto umano; opzioni di auto-aiuto; Un meccanismo di contatto completamente automatizzato.",
    index: "3.2.6",
  },
  {
    title: "Identificazione di errori",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#error-identification",
    wcag_level: "A",
    description:
      "Se viene rilevato automaticamente un errore di inserimento , l'elemento in errore viene identificato e l'errore descritto tramite testo.",
    index: "3.3.1",
  },
  {
    title: "Etichette o istruzioni",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions",
    wcag_level: "A",
    description:
      "Sono fornite etichette o istruzioni quando il contenuto richiede azioni di input da parte dell'utente.",
    index: "3.3.2",
  },
  {
    title: "Suggerimenti per gli errori",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#error-suggestion",
    wcag_level: "AA",
    description:
      "Se viene identificato un errore di inserimento e sono noti dei suggerimenti per correggerlo, tali suggerimenti vengono forniti all'utente, a meno che ciò non pregiudichi la sicurezza o la finalità del contenuto.",
    index: "3.3.3",
  },
  {
    title: "Prevenzione degli errori (legali, finanziari, dati)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-legal-financial-data",
    wcag_level: "AA",
    description:
      "Per le pagine Web che contengono vincoli di tipo giuridico o transazioni finanziarie per l'utente che gestiscono la modifica o la cancellazione e gestione di dati controllabili dall'utente in un sistema di archiviazione oppure che inoltrano le risposte degli utenti a test, è soddisfatta almeno una delle seguenti condizioni: Reversibilità Le azioni sono reversibili. Controllo I dati inseriti dall’utente vengono verificati e all’utente viene data l’opportunità di correggere gli errori. Conferma È disponibile un meccanismo per la revisione, conferma e correzione delle informazioni prima del loro invio definitivo.",
    index: "3.3.4",
  },
  {
    title: "Aiuto",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/help.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#help",
    wcag_level: "AAA",
    description: "Fornire degli aiuti contestuali.",
    index: "3.3.5",
  },
  {
    title: "Prevenzione degli errori (tutti)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-all",
    wcag_level: "AAA",
    description:
      "Per le pagine Web che richiedano l'invio di informazioni da parte dell'utente, è soddisfatta almeno una delle seguenti condizioni: Reversibilità Le azioni sono reversibili. Controllo I dati inseriti dall’utente vengono verificati e all’utente viene data l’opportunità di correggere gli errori. Conferma È disponibile un meccanismo per la revisione, conferma e correzione delle informazioni prima del loro invio definitivo.",
    index: "3.3.6",
  },
  {
    title: "Inserimento ridondante",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#redundant-entry",
    wcag_level: "A",
    description:
      "Le informazioni precedentemente inserite o fornite all'utente che devono necessariamente essere inserite nuovamente nello stesso processo sono: 1)compilate automaticamente, oppure 2)disponibili per la selezione da parte dell'utente. Tranne quando: 1)è essenziale inserire nuovamente le informazioni, le informazioni sono necessarie per garantire la sicurezza dei contenuti, oppure le informazioni precedentemente inserite non sono più valide.",
    index: "3.3.7",
  },
  {
    title: "Autenticazione accessibile (minimo)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#accessible-authentication-minimum",
    wcag_level: "AA",
    description:
      "Un test basato su abilità cognitive (come ricordare una password o risolvere un rompicapo) non deve essere utilizzato per nessuna fase di un processo di autenticazione, a meno che tale fase non preveda almeno una delle seguenti opzioni: 1)Alternativa Un altro metodo di autenticazione che non si basi su un test che necessiti di abilità cognitive. 2)Meccanismo È disponibile un meccanismo che assiste l'utente nell'eseguire il test basato su abilità cognitive. 3)Riconoscimento oggetti Il test di funzione cognitiva consiste nel riconoscere oggetti. 4)Contenuto personale Il test di funzione cognitiva consiste nell'identificare contenuti non testuali forniti dall'utente al sito Web.",
    index: "3.3.8",
  },
  {
    title: "Autenticazione accessibile (avanzato)",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#accessible-authentication-enhanced",
    wcag_level: "AAA",
    description:
      "Un test basato su abilità cognitive (come ricordare una password o risolvere un rompicapo) non deve essere utilizzato per nessuna fase di un processo di autenticazione, a meno che tale fase non preveda almeno una delle seguenti opzioni: 1)Alternativa Un altro metodo di autenticazione che non si basi su un test che necessiti di abilità cognitive. 2)Meccanismo È disponibile un meccanismo che assiste l'utente nell'eseguire il test basato su abilità cognitive.",
    index: "3.3.9",
  },
  {
    title: "Nome, ruolo, valore",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#name-role-value",
    wcag_level: "A",
    description:
      "Questo criterio di successo ha valenza soprattutto per gli autori Web che sviluppano o programmano con linguaggi di scripting i componenti delle proprie interfacce utente. Per esempio, se utilizzati in accordo alle specifiche i controlli HTML standard rispondono a questo criterio.",
    index: "4.1.2",
  },
  {
    title: "Messaggi di stato",
    link_understanding: "https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html",
    link_apply: "https://www.w3.org/WAI/WCAG22/quickref/#status-messages",
    wcag_level: "AA",
    description:
      "Nei contenuti implementati utilizzando i linguaggi di marcatura, i messaggi di stato possono essere determinati programmaticamente tramite ruolo o proprietà in modo tale che possano essere presentati all'utente mediante tecnologie assistive senza ricevere il focus.",
    index: "4.1.3",
  },
]);

print("Esecuzione dello script per la collezione myths...");

// Elimina tutti i documenti esistenti nella collezione
db.tests.deleteMany({});

db.tests.insertMany([
  {
    index: 1,
    level: "A",
    title: "Semantica per la definizione di struttura e significato",
    purpose:
      "Verificare l’uso corretto degli elementi semantici per la definizione della struttura e del significato della pagina, in particolare per intestazioni, tabelle, elenchi, form, ecc.",
    procedure:
      "Analizzare il sorgente della pagina e controllare l'uso corretto e adeguato degli elementi di markup per la definizione del contenuto. In particolare, fare attenzione all'annidamento dei tag e alla corretta strutturazione di liste (ul, ol, dl), form, tabelle, link, intestazioni. Controllare che sia presente in ogni pagina un titolo marcato come h1 e che le altre intestazioni siano correttamente strutturate; non devono essere presenti salti di intestazioni, ad esempio da h1 a h3. Controllare l'uso corretto dei landmark e region aria per le diverse parti della pagina. I tool consigliati evidenziano, sia sul codice che visivamente, i punti in cui è stato usato in modo non corretto il markup per la definizione della pagina. Il verificatore deve controllare gli errori rilevati e individuare la soluzione più corretta, consultando sempre le specifiche dello standard. Se gli errori sono dovuti a motivi di presentazione, questa va sempre gestita adattando la visualizzazione degli elementi tramite CSS.",
    type: "S",
    tags: ["struttura", "contenuto", "semantica", "html", "markup"],
    crieria: [],
  },
  {
    index: 2,
    level: "A",
    title: "Semantica per l'enfasi del contenuto",
    purpose: "Verificare l’uso corretto degli elementi semantici per dare enfasi al contenuto (es. strong)",
    procedure:
      "Analizzare il sorgente della pagina e controllare l'uso corretto di elementi di markup come strong, em, blockquote, ecc. secondo la propria specifica. Gli elementi che danno enfasi al contenuto devono essere usati per evidenziare contenuti importanti o particolari, ma non devono essere usati con solo scopo di enfasi visiva. Ad esempio se si vuole che un certo elemento sia in grassetto perché risalti per scopi di presentazione visiva, ma non rappresenta effettivamente un contenuto importante, la sua presentazione deve essere gestita tramite CSS. I tool consigliati evidenziano, sia sul codice che visivamente, i punti in cui è stato usato markup per dare enfasi al contenuto, il verificatore può quindi controllare velocemente che il suo uso sia corretto.",
    type: "S",
    tags: ["struttura", "contenuto", "html", "testo"],
  },
  {
    index: 3,
    level: "A",
    title: "Intestazione della pagina",
    purpose:
      "Verificare la titolazione corretta della pagina (tag title) per descriverne il significato e distinguerla all’interno del sito",
    procedure:
      "Analizzare il sorgente della pagina e verificare che il tag head abbia tra i suoi figli il tag title e che questo sia significativo e descriva in modo coinciso il contenuto della pagina. I tool consigliati verificano la presenza del tag title nella pagina, il verificatore deve poi controllarne l'efficacia e assicurarsi che il titolo vada dal particolare (scopo della pagina) al generale (nome del sito).",
    type: "S",
    tags: ["struttura", "contenuto", "metadata", "head"],
  },
  {
    index: 4,
    level: "A",
    title: "Lingua principale della pagina",
    purpose: "Verificare che sia correttamente specificata la lingua principale della pagina (html lang)",
    procedure:
      "Analizzare il sorgente della pagina e verificare che il tag html abbia l'attributo lang e che il suo valore sia coerente con la lingua principale usata per i contenuti della pagina. I tool consigliati sono in grado di rilevare l'assenza dell'attributo lang e in alcuni casi di rilevare discrepanze rispetto alla lingua principale usata nei contenuti.",
    type: "S",
    tags: ["contenuto", "lingua", "attributi-html", "html"],
  },
  {
    index: 5,
    level: "A",
    title: "Validazione della pagina (HTML)",
    purpose: "Validare la pagina rispetto allo standard",
    procedure:
      "Utilizzare un validatore online o gli strumenti consigliati per validare la pagina rispetto alle specifiche dello standard HTML/XHTML utilizzato. Il verificatore deve poi intervenire per correggere i problemi rilevati.",
    type: "A",
    tags: ["html", "validazione"],
  },
  {
    index: 6,
    level: "A",
    title: "Identificatori duplicati",
    purpose: "Verificare la presenza di ID duplicati sulla stessa pagina",
    procedure:
      "Utilizzare gli strumenti consigliati per verificare la presenza di occorrenze multiple di uno stesso valore per l'attributo id. L'attributo id di un elemento deve sempre essere univoco e si deve quindi eliminare o modificare la ripetizione.",
    type: "A",
    tags: ["html", "contenuto", "attributi-html"],
  },
  {
    index: 7,
    level: "AA",
    title: "Elementi con lingua diversa da lingua principale",
    purpose:
      "Verificare che sia correttamente specificata la lingua di un elemento quando è diversa dalla lingua principale della pagina (attributo lang)",
    procedure:
      "Analizzare il sorgente della pagina e verificare che tutte le parole la cui lingua differisce dalla lingua principale della pagina siano contenuti in elementi semantici a cui viene assegnato correttamente l'attributo lang. I tool consigliati permettono di rilevare solo la presenza dell'attributo lang ed eventualmente l'assegnazione di valori inesistenti, mentre al verificatore sta verificare che sia correttamente indicato il valore corrispondente alla lingua utilizzata.",
    type: "S",
    tags: ["contenuto", "lingua", "attributi-html", "html"],
  },
  {
    index: 8,
    level: "AAA",
    title: "Intestazioni di sezione",
    purpose: "Verificare l’utilizzo di intestazioni di sezione per organizzare il contenuto",
    procedure:
      "Analizzare il sorgente della pagina e verificare che il contenuto della pagina sia organizzato in sezioni ad ognuna delle quali viene correttamente assegnata un'intestazione (h1-h6). Verificare anche che nel caso in cui i contenuti abbiano una logica gerarchica questa sia evidenziata anche nella strutturazione delle intestazioni. I tool consigliati permettono di evidenziare, nel codice e visivamente, parti del contenuto che possono essere intestazioni o l'uso delle intestazioni e il loro rapporto gerarchico. Al verificatore spetta il compito di verificare che quanto indicato sia corretto rispetto al messaggio che si vuole trasmettere.",
    type: "S",
    tags: ["struttura", "contenuto", "intestazioni", "testo"],
  },
  {
    index: 9,
    level: "A",
    title: "Immagini di pura presentazione",
    purpose: "Verificare la possibilità di inserire le immagini di pura presentazione, come le icone, tramite CSS",
    procedure:
      "Analizzare visivamente la pagina e individuare tutte le immagini o icone che non portano informazione, ma sono inserite a scopo di presentazione per riempire la pagina. Verificare quindi tramite il sorgente della pagina e il CSS se è possibile inserire queste immagini tramite CSS e non usando il tag img nel codice della pagina.",
    type: "M",
    tags: ["presentazione", "contenuto", "immagini"],
  },
  {
    index: 10,
    level: "N.A.",
    title: "Aiuti contestuali per le tecnologie assistive",
    purpose:
      "Verificare l’uso corretto di regole CSS per nascondere alcuni elementi dalla presentazione, ma lasciandoli visibili alle tecnologie assistive (es. link salta al contenuto principale)",
    procedure:
      "Verificare che gli aiuti contestuali inseriti per le tecnologie assistive siano effettivamente raggiungibili dalle stesse. Verificare poi che gli aiuti inseriti non interferiscano con la presentazione visuale della pagina per non creare disorientamento. I tool consigliati rilevano la presenza di aiuti contestuali visibili solo alle tecnologie assistive.",
    type: "S",
    tags: ["struttura", "contenuto", "html", "navigazione"],
  },
  {
    index: 11,
    level: "AA",
    title: "Dimensioni relative dei contenuti",
    purpose:
      "Verificare che le dimensioni di contenuti e testo siano specificate con unità di misura relative (em, percentuale) oppure utilizzando i nomi standard (small, medium, large)",
    procedure:
      "Analizzare il codice dei fogli di stile associati alla pagina e verificare che siano sempre usate unità di misura relative e non assolute per la definizione di dimensioni di aree di contenuto e testo. Fa eccezione la definizione dei bordi che possono essere definiti in px senza alterare la trasformazione su dispositivi diversi. Il tool consigliato è in grado di rilevare il mancato uso di unità di misura relative.",
    type: "S",
    tags: ["presentazione", "testo", "css", "dimensione"],
  },
  {
    index: 12,
    level: "AA",
    title: "Layout scalabile e responsive",
    purpose:
      "Verificare che il layout sia scalabile e responsive (es. media query) e che il contenuto possa essere ripresentato senza perdita di informazioni e senza scroll nelle due dimensioni",
    procedure:
      "Analizzare il codice dei fogli di stile associati alla pagina e verificare la presenza di media query o del meta tag viewport nel sorgente html della pagina. Utilizzare poi gli strumenti consigliati per verificare la trasformazione della pagina su dispositivi con dimensioni e risoluzioni diverse, sia desktop che mobile. Si consiglia sempre di effettuare test anche su diversi dispositivi fisici.",
    type: "S",
    tags: ["presentazione", "layout", "css", "responsività"],
  },
  {
    index: 13,
    level: "N.A.",
    title: "Validazione della pagina (CSS)",
    purpose: "Validare il foglio di stile rispetto allo standard",
    procedure:
      "Utilizzare un validatore online o gli strumenti consigliati per validare i fogli di stile CSS utilizzati. Il verificatore deve poi intervenire per correggere i problemi rilevati.",
    type: "A",
    tags: ["presentazione", "layout", "css", "responsività"],
  },
  {
    index: 14,
    level: "A",
    title: "Azioni inattese o cambi di contesto al focus di un componente",
    purpose:
      "Verificare che non si verifichino azioni inattese o cambiamenti di contesto quando un componente riceve il focus (es. la form non deve essere inviata automaticamente)",
    procedure:
      "Effettuare una prova di utilizzo della pagina utilizzando almeno sia mouse che tastiera per dare il focus agli elementi interattivi presenti. Verificare quindi che quando il componente riceve il focus non si avviino cambi di contesto o azioni improvvise.",
    type: "M",
    tags: ["comportamento", "focus", "contesto"],
  },
  {
    index: 15,
    level: "A",
    title: "Tempo di lampeggio",
    purpose:
      "Verificare che non si verifichino azioni inattese o cambiamenti di contesto quando l’utente compila un particolare campo della form (seleziona un elemento in un radio button, checkbox, select, compila un campo di testo)",
    procedure:
      "Effettuare una prova di compilazione di una form e verificare che quando si compila un campo non si avviino cambi di contesto o azioni inattese. Verificare che sia presente un pulsante di submit per avviare qualsiasi cambio di contesto. Nel caso di campi select verificare che l'eventuale cambio di contesto avvenga dopo la selezione del valore e non solo con il focus su un elemento. Nel caso un'azione venga scatenata da un input utente verificare che sia esplicitamente chiaro tramite testo introduttivo ciò che accade e ciò che deve essere fatto perché il cambio di contesto avvenga.",
    type: "M",
    tags: ["presentazione", "animazioni", "tempo"],
  },
  {
    index: 16,
    level: "A",
    title: "Controllo dei dati inseriti",
    purpose:
      "Verificare che sia disponibile un controllo client-side dei dati inseriti in input dall’utente in una form",
    procedure:
      "Effettuare una prova di compilazione di una form con dati non validi e verificare che sia reso disponibile un messaggio di errore all'utente. Analizzare il sorgente della pagina per controllare che questo controllo sia fatto client side e non server side, per velocizzare la risposta all'utente. Per motivi di sicurezza invece, si consiglia sempre di ripetere il controllo anche server-side.",
    type: "M",
    tags: ["comportamento", "input", "controllo-dati"],
  },
  {
    index: 17,
    level: "AA",
    title: "Chiusura dei contenuti resi visibili dall'hover",
    purpose:
      "Verificare che il contenuto reso visibile dall’hover del mouse o dal focus della tastiera (es. pop-up, sottomenu) possa essere chiuso senza spostare il puntatore o il focus (es. tasto esc)",
    procedure:
      "Effettuare una prova di navigazione della pagina in particolare su elementi che possono ricevere hover del mouse o focus della tastiera. Verificare quindi che se questi stati rendono visibile del contenuto aggiuntivo, questo possa anche essere chiuso o nascosto senza privare l'elemento dell'hover o del focus. Generalmente la chiusura è disponibile tramite il tasto esc, nel caso sia prevista una particolare combinazione di tasti per nascondere il contenuto aggiuntivo, l'utente deve essere messo a conoscenza di tale opzione.",
    type: "M",
    tags: ["comportamento", "presentazione", "hover", "focus"],
  },
  {
    index: 18,
    level: "AA",
    title: "Permanenza dei contenuti resi visibili dall'hover",
    purpose:
      "Verificare che il contenuto reso visibile dall’hover del mouse o dal focus della tastiera resti visibile finché l’utente non rimuove il focus o l’hover",
    procedure:
      "Effettuare una prova di navigazione della pagina in particolare su elementi che possono ricevere hover del mouse o focus della tastiera. Verificare quindi che se questi stati rendono visibile del contenuto aggiuntivo, questo non ha un limite di tempo ma resta visibile fintanto che l'utente ha il focus o l'hover attivo sull'elemento o utilizza il metodo per nascondere il contenuto aggiuntivo.",
    type: "M",
    tags: ["comportamento", "presentazione", "hover", "focus"],
  },
  {
    index: 19,
    level: "AA",
    title: "Raggiungibilità dei contenuti resi visibili dall'hover",
    purpose:
      "Verificare che il puntatore possa essere spostato sul contenuto aggiuntivo reso visibile dall'hover del mouse senza che questo scompaia",
    procedure:
      "Effettuare una prova di navigazione della pagina in particolare su elementi che possono ricevere l'hover del mouse. Verificare che se questo stato rende visibile contenuto aggiuntivo, l'utente può spostare il puntatore sul contenuto aggiuntivo senza che l'elemento principale perda lo stato di hover.",
    type: "M",
    tags: ["comportamento", "presentazione", "hover", "focus"],
  },
  {
    index: 20,
    level: "AAA",
    title: "Attivazione e disattivazione dei cambi di contesto",
    purpose:
      "Verificare che tutti i cambiamenti di contesto siano attivati dall’utente o che sia possibile disattivarli",
    procedure:
      "Effettuare una prova di navigazione della pagina e verificare che sia presente un modo chiaro per abilitare cambi di contesto, visualizzare contenuti pop-up o aggiornare la pagina. In alternativa verificare che sia presente un meccanismo che permette all'utente di disabilitare qualunque cambio di contesto.",
    type: "M",
    tags: ["comportamento", "contesto"],
  },
  {
    index: 21,
    level: "A",
    title: "Elementi di presentazione nella struttura",
    purpose:
      "Verificare che non siano presenti elementi di presentazione nella struttura della pagina per permettere diverse presentazioni",
    procedure:
      "Analizzare il codice sorgente della pagina e verificare che non sia usato l'attributo style su alcun elemento. Tutte le impostazioni di stile e presentazione del contenuto devono essere inserite tramite foglio di stile associato. Il tool consigliato permette di rilevare la presenza dell'attributo style su elementi html.",
    type: "A",
    tags: ["presentazione", "struttura", "html", "attributi-html", "style"],
  },
  {
    index: 22,
    level: "AA",
    title: "Dipendenza dall'orientamento dello schermo",
    purpose:
      "Verificare che la visualizzazione e il funzionamento del contenuto non dipendano dall’orientamento dello schermo",
    procedure:
      "Utilizzare gli strumenti consigliati ed effettuare anche prove con dispositivi reali, per verificare che il contenuto sia visibile e navigabile indipendentemente dall'orientamento dello schermo.",
    type: "S",
    tags: ["presentazione", "responsività", "orientamento"],
  },
  {
    index: 23,
    level: "N.A.",
    title: "Integrazione e compatibilità tra struttura, presentazione e comportamento",
    purpose:
      "Verificare che gli elementi che definiscono struttura, presentazione e comportamento siano chiaramente separati e correttamente collegati (file HTML, CSS, JavaScript) in modo da garantire la compatibilità in ambienti e con tecnologie diverse",
    procedure:
      "Analizzare il codice sorgente della pagina e verificare che gli elementi di presentazione siano tutti inseriti tramite foglio di stile esterno e che tutti gli script siano inseriti tramite fogli di scripting opportunamente linkati. Verificare quindi che il codice html contenga solo elementi di strutturazione semantica, che i fogli di stile CSS contengano tutte le istruzioni di visualizzazione e che tutti gli elementi di comportamento e risposta ad eventi siano opportunamente inseriti in risorse js.",
    type: "M",
    tags: ["presentazione", "struttura", "comportamento", "separazione"],
  },
  {
    index: 24,
    level: "A",
    title: "Contenuto testuale comprensibile senza foglio di stile",
    purpose: "Verificare che la struttura e il significato della pagina solo testuale siano comprensibili",
    procedure:
      "Utilizzare i tool consigliati per disabilitare i fogli di stile e verificare che la struttura, le relazioni e le informazioni presenti nel contenuto siano comunque comprensibili.",
    type: "S",
    tags: ["presentazione", "testo", "contenuto", "css"],
  },
  {
    index: 25,
    level: "A",
    title: "Ordine logico delle informazioni",
    purpose:
      "Verificare che gli elementi della pagina siano in un ordine logico e che le informazioni più importanti siano inserite per prime",
    procedure:
      "Utilizzare i tool consigliati per disabilitare i fogli di stile e verificare che l'ordine delle informazioni rispetti la logica della pagina e che i contenuti più importanti siano presentati per primi in modo che vengano trasmessi per primi ai motori di ricerca e letti per primi dagli screen reader.",
    type: "S",
    tags: ["presentazione", "testo", "contenuto", "css"],
  },
  {
    index: 26,
    level: "A",
    title: "Informazioni veicolate tramite caratteristiche sensoriali",
    purpose: "Verificare che informazioni veicolate tramite caratteristiche sensoriali siano ancora comprensibili",
    procedure:
      "Utilizzare i tool consigliati per disabilitare i fogli di stile e verificare che informazioni basate su colori o posizioni siano comunque comprensibili perché veicolate anche tramite una differente descrizione testuale.",
    type: "S",
    tags: ["contenuto", "css", "presentazione"],
  },
  {
    index: 27,
    level: "A",
    title: "Alternative testuali per le immagini",
    purpose:
      "Verificare la presenza di alternative o descrizioni testuali per immagini che portano valore al contenuto, in modo che le informazioni siano comunque comprensibili e reperibili anche se non vengono visualizzate",
    procedure:
      "Individuare tutte le immagini informative presenti nella pagina e verificare che sia presente per ognuna l'attributo alt e che il suo valore descriva il significato dell'immagine per trasmettere lo stesso messaggio visuale. I tool consigliati permettono di rilevare la presenza o l'assenza dell'attributo alt o la presenza dell'attributo alt con valore vuoto. Al verificatore spetta il compito di verificare che, nel caso di immagini informative, l'attributo alt sia equivalente al significato dell'immagine.",
    type: "S",
    tags: ["contenuto", "presentazione", "immagini", "html", "attributi-html", "alternativa"],
  },
  {
    index: 28,
    level: "A",
    title: "Immagini decorative",
    purpose:
      "Verificare che le immagini decorative non abbiano alternative testuali (alt vuoto, alt=””), in modo che le tecnologie assistive le ignorino, se la comprensione del contenuto e la navigabilità del sito non vengono compromesse. Ogni volta che è possibile dovrebbero essere inserite tramite CSS",
    procedure:
      "Individuare tutte le immagini decorative presenti nella pagina e verificare tramite il codice della pagina se sia possibile inserirle tramite CSS. Se l'opzione non è applicabile verificare che le immagini decorative inserite tramite il tag img abbiano l'attributo alt presente ma vuoto. I tool consigliati permettono di rilevare la presenza o l'assenza dell'attributo alt o la presenza dell'attributo alt con valore vuoto. Al verificatore spetta il compito di verificare che, nel caso di immagini informative, l'attributo alt sia vuoto in modo che venga ignorato dalle tecnologie assistive.",
    type: "S",
    tags: ["presentazione", "css", "html", "attributi-html", "alternativa"],
  },
  {
    index: 29,
    level: "AA",
    title: "Utilizzo del testo anziché di immagini",
    purpose: "Verificare che dove possibile sia usato il testo anziché immagini di testo, eccetto per i logotipi",
    procedure:
      "Individuare tutte le immagini contenenti testo. Verificare se la stessa informazione possa essere inserita tramite testo. La regola non si applica ai logotipi. Il tool consigliato è in grado di evidenziare visivamente la presenza di immagini con testo.",
    type: "S",
    tags: ["contenuto", "testo", "logotipi", "immagini"],
  },
  {
    index: 30,
    level: "AAA",
    title: "Utilizzo delle immagini per sola presentazione",
    purpose:
      "Verificare che le immagini di testo siano usate solo per scopi di presentazione, eccetto nel caso dei logotipi",
    procedure:
      "Individuare tutte le immagini presenti nella pagina e verificare che in nessun caso queste contengano testo. La regola non si applica ai logotipi.",
    type: "M",
    tags: ["presentazione", "testo", "logotipi", "immagini"],
  },
  {
    index: 31,
    level: "A",
    title: "Alternative testuali per le immagini",
    purpose:
      "Verificare che sia disponibile un'alternativa testuale che fornisca una identificazione descrittiva per il contenuto del media",
    procedure:
      "Individuare nella pagina tutti i media multimediali, audio e video, e verificare per ognuno di essi che sia disponibile anche una descrizione testuale del contenuto. I tool consigliati permettono di evidenziare, visivamente e nel codice, la presenza di contenuti multimediali, mentre al verificatore spetta il compito di analizzare la presenza e la corrispondenza dell'alternativa testuale.",
    type: "S",
    tags: ["contenuto", "html", "attributi-html", "alternativa"],
  },
  {
    index: 32,
    level: "A",
    title: "Alternativa testuale per i media",
    purpose:
      "Verificare che sia disponibile una descrizione testuale in giusta sequenza del contenuto audio preregistrato",
    procedure:
      "Individuare nella pagina tutti i media audio prereregistrati e verificare che per ognuno sia disponibile una descrizione del contenuto nella stessa sequenza in cui è presentato nell'audio.",
    type: "M",
    tags: ["contenuto", "html", "attributi-html", "alternativa", "media"],
  },
  {
    index: 33,
    level: "A",
    title: "Alternativa testuale o audio temporizzata per video preregistrato",
    purpose:
      "Verificare che sia disponibile una descrizione testuale in giusta sequenza del contenuto video preregistrato oppure una traccia audio equivalente",
    procedure:
      "Individuare nella pagina tutti i media video prereregistrati e verificare che per ognuno sia disponibile una descrizione del contenuto nella stessa sequenza in cui è presentato nel video.",
    type: "M",
    tags: ["contenuto", "html", "attributi-html", "alternativa", "media", "video"],
  },
  {
    index: 34,
    level: "A",
    title: "Sottotitoli per media preregistrato contenente audio",
    purpose: "Verificare che siano forniti sottotitoli per il media preregistrato contenente audio",
    procedure:
      "Individuare nella pagina tutti i media preregistrati in cui sia presente audio e verificare che per ognuno siano forniti i sottotitoli.",
    type: "M",
    tags: ["contenuto", "html", "sottotitoli", "alternativa", "media", "audio"],
  },
  {
    index: 35,
    level: "A",
    title: "Audio descrizione o alternativa testuale per video preregistrati",
    purpose:
      "Verificare che sia disponibile una audio-descrizione o descrizione di testo in giusta sequenza per i video preregistrati",
    procedure:
      "Individuare nella pagina tutti i video preregistrati e verificare per ognuno che sia disponibile una descrizione del contenuto nello stesso ordine in cui è presente nel video oppure una audio-descrizione alternativa.",
    type: "M",
    tags: ["contenuto", "html", "sottotitoli", "alternativa", "media", "audio"],
  },
  {
    index: 36,
    level: "A",
    title: "Controllo del media audio",
    purpose:
      "Verificare che i media con audio siano completamente controllabili dall’utente (andare avanti, indietro, mettere in pausa, alzare/abbassare il volume, ecc.)",
    procedure:
      "Individuare tutti i media contenenti audio e verificare che sia disponibile un meccanismo per gestire l'andamento del media (fermare e riavviare) e per gestire il volume.",
    type: "M",
    tags: ["presentazione", "contenuto", "html", "sottotitoli", "alternativa", "media", "audio"],
  },
  {
    index: 37,
    level: "A",
    title: "Controllo dei contenuti dinamici",
    purpose:
      "Verificare che l’utente possa mettere in pausa e riprendere la lettura del contenuto o disabilitare il limite di tempo quando è presente un limite al tempo di lettura dei contenuti",
    procedure:
      "Individuare tutti i contenuti per i quali è presente un limite di tempo alla lettura e verificare che sia disponibile per l'utente un meccanismo per mettere in pausa la lettura oppure per disabilitare il limite.",
    type: "M",
    tags: ["contenuto", "comportamento", "elementi dinamici"],
  },
  {
    index: 38,
    level: "A",
    title: "Lampeggio dei contenuti 1",
    purpose:
      "Verificare che i contenuti lampeggianti, in movimento o che si auto aggiornano (come i caroselli) siano completamente controllabili dall’utente (andare avanti, indietro, mettere in pausa, fermare, nascondere, ecc.)",
    procedure:
      "Individuare tutti i contenuti in movimento, lampeggianti o che si auto aggiornano e verificare che sia disponibile un meccanismo che permette all'utente la loro completa gestione.",
    type: "M",
    tags: ["presentazione", "comportamento", "controllo", "animazioni"],
  },
  {
    index: 39,
    level: "A",
    title: "Lampeggio dei contenuti 2",
    purpose:
      "Verificare che nessun elemento lampeggi per più di tre volte in un secondo oppure che il lampeggiamento sia al di sotto della soglia generale di lampeggiamento e della soglia del lampeggiamento rosso",
    procedure:
      "Individuare nella pagina tutti i contenuti lampeggianti e verificare che il lampeggiamento sia inferiore alle tre volte per secondo o alla soglia del lampeggiamento rosso.",
    type: "M",
    tags: ["presentazione", "comportamento", "controllo", "animazioni", "tempo"],
  },
  {
    index: 40,
    level: "AA",
    title: "Sottotitoli per media audio in tempo reale",
    purpose: "Verificare che siano forniti sottotitoli per i media contenenti audio in tempo reale",
    procedure:
      "Individuare tutti i contenuti audio in tempo reale presenti nella pagina e verificare che siano disponibili sottotitoli in tempo reale.",
    type: "M",
    tags: ["contenuto", "html", "sottotitoli", "alternativa", "media", "audio", "tempo reale"],
  },
  {
    index: 41,
    level: "AA",
    title: "Audio-descrizione per tutti i contenuti video preregistrati",
    purpose: "Verificare che sia presente un audio-descrizione per tutti i contenuti video preregistrati",
    procedure:
      "Individuare tutti i contenuti video preregistrati presenti nella pagina e verificare che sia disponibile una audio-descrizione per ognuno di essi.",
    type: "M",
    tags: ["contenuto", "html", "sottotitoli", "alternativa", "media", "video"],
  },
  {
    index: 42,
    level: "AAA",
    title: "Lingua dei segni per audio preregistrato",
    purpose: "Verificare che sia fornita l’interpretazione con la lingua dei segni per l’audio preregistrato",
    procedure:
      "Individuare tutti i contenuti audio preregistrati presenti nella pagina e verificare che sia disponibile l'interpretazione in lingua dei segni per ognuno di essi.",
    type: "M",
    tags: ["contenuto", "html", "sottotitoli", "alternativa", "media", "video"],
  },
  {
    index: 43,
    level: "AAA",
    title: "Audio-descrizione estesa per i video preregistrati",
    purpose: "Verificare che sia disponibile l’audio-descrizione estesa per i video preregistrati",
    procedure:
      "Individuare tutti i contenuti video preregistrati presenti nella pagina e verificare che sia disponibile una audio-descrizione estesa per ognuno di essi.",
    type: "M",
    tags: ["contenuto", "html", "sottotitoli", "alternativa", "media", "video"],
  },
  {
    index: 44,
    level: "AAA",
    title: "Alternativa per tutti i media preregistrati",
    purpose:
      "Verificare la presenza di un’alternativa per tutti i media preregistrati come descrizione di testo in giusta sequenza",
    procedure:
      "Individuare tutti i contenuti video preregistrati presenti nella pagina e verificare che sia disponibile una descrizione testuale del contenuto nella stessa sequenza in cui compare nel video per ognuno di essi.",
    type: "M",
    tags: ["contenuto", "html", "sottotitoli", "alternativa", "media"],
  },
  {
    index: 45,
    level: "AAA",
    title: "Alternativa per audio in tempo reale",
    purpose: "Verificare la presenza di un’alternativa per l’audio in tempo reale",
    procedure:
      "Individuare tutti i contenuti audio in tempo reale presenti nella pagina e verificare che sia disponibile un'alternativa testuale per ognuno di essi.",
    type: "M",
    tags: ["contenuto", "html", "sottotitoli", "alternativa", "tempo reale"],
  },
  {
    index: 46,
    level: "AAA",
    title: "Sottofondo e audio preregistrati",
    purpose:
      "Verificare che per gli audio preregistrati non sia presente sottofondo o che possa essere disattivato o che sia 4 volte più silenzioso rispetto al parlato in primo piano",
    procedure:
      "Individuare tutti i contenuti con audio preregistrato e verificare che non sia presente sottofondo oppure che il sottofondo possa essere disattivato o che sia 4 volte più silenzioso del parlato principale.",
    type: "M",
    tags: ["contenuto", "audio"],
  },
  {
    index: 47,
    level: "AAA",
    title: "Lampeggio dei contenuti 3",
    purpose: "Verificare che non sia presente nulla che lampeggi più di tre volte in un secondo",
    procedure:
      "Analizzare il contenuto della pagina e verificare che non sia presente nulla che lampeggi più di tre volte in un secondo.",
    type: "M",
    tags: ["presentazione", "comportamento", "controllo", "animazioni", "tempo"],
  },
  {
    index: 48,
    level: "AAA",
    title: "Disabilitazione animazioni",
    purpose: "Verificare che le animazioni innescate dall’interazione dell’utente possano essere disabilitate",
    procedure:
      "Individuare tutte le animazioni del contenuto innescate dall'interazione dell'utente e verificare che queste possano essere disabilitate con qualche meccanismo reso chiaro all'utente.",
    type: "M",
    tags: ["presentazione", "comportamento", "animazioni"],
  },
  {
    index: 49,
    level: "A",
    title: "Alternativa testuale dei grafici",
    purpose: "Verificare che i grafici abbiano una descrizione testuale (es. longdesc)",
    procedure:
      "Individuare tutti i grafici presenti nella pagina e verificare che sia disponibile anche una descrizione testuale che ne descriva il significato.",
    type: "M",
    tags: ["contenuto", "grafici", "dati", "alternativa"],
  },
  {
    index: 50,
    level: "AA",
    title: "Contrasto dei grafici",
    purpose:
      "Verificare che i grafici abbiano un contrasto adeguato (almeno 3:1 rispetto al contenuto vicino; il testo di almeno 4.5:1 se inferiore ai 18 punti o a 14pt se in grassetto, di 3:1 altrimenti)",
    procedure:
      "Individuare tutti i grafici presenti nella pagina e analizzare i colori utilizzati. In particolare, verificare che vi sia un contrasto adeguato rispetto ai contenuti vicini e nel testo presente nel grafico. I tool consigliati permettono di analizzare il contrasto dei colori nella pagina e rilevare problemi di conformità nei colori usati, oppure aiutano lo sviluppatore a individuare una palette di colori con contrasto adeguato.",
    type: "S",
    tags: ["contenuto", "grafici", "dati", "contrasto", "colore", "presentazione"],
  },
  {
    index: 51,
    level: "A",
    title: "Colore dei link",
    purpose:
      "Verificare che il colore non sia l’unico mezzo per identificare un link (per esempio mantenere la sottolineatura)",
    procedure:
      "Individuare tutti i link presenti nella pagina e verificare che sia chiaro anche visivamente che si tratti di un link, non solo usando il colore, ma anche usando la sottolineatura o altra convenzione interna che deve essere rispettata in tutto il sito. I tool consigliati permettono di evidenziare elementi che non è chiaro siano link.",
    type: "S",
    tags: ["contenuto", "link", "testo", "contrasto", "colore", "alternativa", "presentazione"],
  },
  {
    index: 52,
    level: "A",
    title: "Scopo del link - contesto",
    purpose:
      "Verificare che sia chiaro lo scopo di ciascun link dal contesto in cui è inserito:\n•\tutilizzando l’etichetta del link o \n•\tdalla frase in cui è inserito o \n•\taggiungendo l’attributo title o \n•\tusando l’attributo aria-label per le tecnologie assistive",
    procedure:
      "Individuare tutti i link presenti nella pagina e verificare, dal contesto in cui sono inseriti, che sia chiaro il loro scopo a tutti gli utenti, compresi quelli che utilizzano tecnologie assistive. In particolare fare attenzione che dal contesto sia chiaro se si tratta di un link interno o esterno, se si verifica un cambio nella lingua della destinazione, se si avvia l'apertura di un documento in formato non web e in generale ogni cambio di contesto significativo.",
    type: "M",
    tags: ["contenuto", "link", "testo"],
  },
  {
    index: 53,
    level: "A",
    title: "Ancora dei link",
    purpose: "Verificare che l’ancora dei link abbia una definizione chiara e che non sia ripetuta o vuota",
    procedure:
      "Individuare tutti i link presenti nella pagina e verificare che l'ancora del link non sia vuota e che la sua definizione renda chiaro lo scopo del link. I tool consigliati permettono di evidenziare la presenza di ancore ambigue, ripetute o vuote e in generale di evidenziare ogni link presente nella pagina.",
    type: "S",
    tags: ["contenuto", "link", "testo"],
  },
  {
    index: 54,
    level: "AA",
    title: "Contrasto dei link",
    purpose:
      "Verificare che i link siano evidenziati correttamente (visitato/non visitato) con un contrasto adeguato di almeno 3:1 rispetto ai colori adiacenti",
    procedure:
      "Individuare tutti i link presenti nella pagina e verificare che il colore venga usato per evidenziarne lo stato in modo adeguato, ovvero mantenendo un rapporto di 3:1 rispetto ai colori vicini. I tool consigliati permettono di evidenziare i link e di analizzare il contrasto dei colori usati oppure aiutano lo sviluppatore a individuare una palette di colori con contrasto adeguato.",
    type: "S",
    tags: ["contenuto", "link", "testo", "contrasto", "colore", "presentazione"],
  },
  {
    index: 55,
    level: "AAA",
    title: "Scopo dei link - testo",
    purpose: "Verificare che lo scopo del link sia comprensibile dal solo testo del link",
    procedure:
      "Individuare tutti i link presenti nella pagina e verificare che lo scopo del link sia chiaro a tutti gli utenti, compresi quelli che utilizzano le tecnologie assistive, dal solo testo del link.  In particolare fare attenzione che dal contesto sia chiaro se si tratta di un link interno o esterno, se si verifica un cambio nella lingua della destinazione, se si avvia l'apertura di un documento in formato non web e in generale ogni cambio di contesto significativo.",
    type: "M",
    tags: ["contenuto", "link", "testo"],
  },
  {
    index: 56,
    level: "N.A.",
    title: "Destinazione link",
    purpose: "Verificare che sia chiaro dove portano (link interno/esterno)",
    procedure:
      "Individuare tutti i link presenti nella pagina e verificare che sia opportunamente indicato o chiaro se il link è interno o esterno al sito in cui ci si trova a tutti gli utenti.",
    type: "M",
    tags: ["contenuto", "link", "testo"],
  },
  {
    index: 57,
    level: "N.A.",
    title: "Cambio di contesto, download dei link",
    purpose:
      "Verificare che sia chiaro un eventuale cambio di contesto (visualizzazione pdf online) o la presenza di un download (eventualmente la dimensione)",
    procedure:
      "Individuare tutti i link presenti nella pagina e verificare che sia evidente a tutti gli utenti un eventuale cambio di contesto significativo (documenti non web, download)",
    type: "M",
    tags: ["contenuto", "link", "download", "contesto"],
  },
  {
    index: 58,
    level: "N.A.",
    title: "Link circolari e link rotti",
    purpose: "Verificare la presenza di link circolari o rotti",
    procedure:
      "Analizzare il sorgente della pagina ed effettuare una prova di navigazione per individuare la presenza di link rotti o circolari. I tool consigliati permettono di individuare link rotti.",
    type: "A",
    tags: ["contenuto", "link"],
  },
  {
    index: 59,
    level: "N.A.",
    title: "Lingua di destinazione dei link",
    purpose: "Verificare che sia chiara la lingua del documento destinazione",
    procedure:
      "Individuare tutti i link presenti nella pagina e verificare che sia chiaro a tutti gli utenti quando il link porta a un sito o documento la cui lingua differisce dalla lingua principale della pagina di partenza.",
    type: "M",
    tags: ["contenuto", "link", "lingua"],
  },
  {
    index: 60,
    level: "A",
    title: "Colore come unica fonte di informazione 2",
    purpose:
      "Verificare che il colore non sia l’unico mezzo per fornire informazioni all’utente (come identificare link, campi obbligatori o errori nelle form)",
    procedure:
      "Analizzare la visualizzazione della pagina e individuare tutti i punti in cui il colore viene usato per trasmettere informazioni. Verificare che la stessa informazione sia trasmessa anche in altro modo: differenza nel font, simboli, descrizione testuale, ecc.",
    type: "M",
    tags: ["contenuto", "presentazione", "alternativa", "colore"],
  },
  {
    index: 61,
    level: "A",
    title: "Riferimenti a colori",
    purpose: "Verificare che non siano presenti riferimenti ai colori per orientarsi nel sito",
    procedure:
      "Effettuare una prova di navigazione della pagina e verificare che non siano presenti riferimenti a colori per orientarsi o svolgere operazioni nella pagina.",
    type: "M",
    tags: ["contenuto", "presentazione", "alternativa", "colore", "navigazione"],
  },
  {
    index: 62,
    level: "AA",
    title: "Contrasto adeguato nel testo e nelle immagini",
    purpose:
      "Verificare l’uso di un contrasto adeguato nel testo e nelle immagini di testo: almeno 4.5:1 per il testo piccolo (inferiore a 18 pt o 14 pt se in grassetto) e 3:1 per il testo grande (maggiore o uguale a 18pt o 14pt se in grassetto)",
    procedure:
      "Utilizzare i tool consigliati per analizzare il risultato visuale della pagina oppure per individuare una palette di colori con contrasto adeguato da usare nella pagina: 4.5:1 per testo piccolo e 3:1 per testo grande.",
    type: "S",
    tags: ["contenuto", "presentazione", "alternativa", "colore", "contrasto", "testo", "immagini"],
  },
  {
    index: 63,
    level: "AA",
    title: "Contrasto adeguato per i contenuti",
    purpose:
      "Verificare che oggetti grafici, componenti di interfaccia, diagrammi oppure il colore usato per evidenziare gli stati di elementi testuali (visited, hover, focus…) abbiano un contrasto adeguato di almeno 3:1 rispetto agli oggetti vicini",
    procedure:
      "Utilizzare i tool consigliati per analizzare il risultato visuale degli oggetti grafici, diagrammi, componenti di interfaccia o il colore dello stato degli elementi oppure per individuare una palette di colori con contrasto adeguato da usare nella pagina.",
    type: "S",
    tags: ["contenuto", "presentazione", "stato"],
  },
  {
    index: 64,
    level: "AAA",
    title: "Contrasto elevato nel testo e nelle immagini",
    purpose:
      "Verificare l’uso di un contrasto forte nel testo e nelle immagini di testo: almeno 7:1 per il testo piccolo (inferiore a 18 pt o 14 pt se in grassetto) e 4.5:1 per il testo grande (maggiore o uguale a 18pt o 14pt se in grassetto)",
    procedure:
      "Utilizzare i tool consigliati per analizzare il risultato visuale della pagina oppure per individuare una palette di colori con contrasto adeguato da usare nella pagina: 7:1 per testo piccolo e 4.5:1 per testo grande.",
    type: "S",
    tags: ["contenuto", "presentazione", "testo", "immagini", "contrasto", "colore"],
  },
  {
    index: 65,
    level: "N.A.",
    title: "Contrasto e scala di grigi",
    purpose: "Verificare il contrasto dei colori visualizzando la pagina in scala di grigi",
    procedure:
      "Utilizzare gli strumenti consigliati per verificare la visualizzazione e comprensione della pagina in scala di grigi.",
    type: "S",
    tags: ["contenuto", "presentazione", "testo", "immagini", "contrasto", "colore"],
  },
  {
    index: 66,
    level: "N.A.",
    title: "Comprensione sito senza colori",
    purpose:
      "Verificare la visualizzazione del sito e la comprensibilità delle informazioni in un sito privo di colori",
    procedure:
      "Utilizzare gli strumenti consigliati per verificare la visualizzazione e comprensione della pagina quando non sono presenti colori.",
    type: "S",
    tags: ["contenuto", "presentazione", "testo", "immagini", "alternativa", "colore"],
  },
  {
    index: 67,
    level: "N.A.",
    title: "Comprensione del sito con diversi colori",
    purpose:
      "Verificare la visualizzazione del sito con colori invertiti o con diversi filtri colore che simulino la visualizzazione del sito da parte di persone affette da diverse tipologie di discromatopsia",
    procedure:
      "Utilizzare gli strumenti consigliati per verificare la visualizzazione e comprensione della pagina da parte di persone affette da discromatopsia.",
    type: "S",
    tags: ["contenuto", "presentazione", "testo", "immagini", "alternativa", "colore"],
  },
  {
    index: 68,
    level: "A",
    title: "Colore come unica identificazione di campi obbligatori o errori",
    purpose: "Verificare che il colore non sia l’unico mezzo per identificare campi obbligatori o errori",
    procedure:
      "Individuare i campi obbligatori delle form presenti nella pagina e verificare che l'obbligatorietà sia evidenziata non solo con il colore, ma usando simboli o descrizioni. Effettuare poi una prova di compilazione con valori errati per verificare che gli errori siano correttamente evidenziati, in modo visuale usando il colore, ma anche altre convenzioni visive. Tutte le informazioni devono essere rese disponibili anche alle tecnologie assistive.",
    type: "M",
    tags: ["contenuto", "presentazione", "testo", "alternativa", "colore", "input", "errori", "form"],
  },
  {
    index: 69,
    level: "A",
    title: "Form accessibile da tastiera",
    purpose: "Verificare che la form sia completamente accessibile e compilabile anche da tastiera",
    procedure:
      "Effettuare una prova di compilazione e invio di una form utilizzando come modalità di input solamente la tastiera. I tool consigliati permettono di evidenziare i componenti interattivi che ricevono/non ricevono correttamente il focus da tastiera.",
    type: "S",
    tags: ["contenuto", "input", "tastiera", "form", "focus"],
  },
  {
    index: 70,
    level: "A",
    title: "Istruzioni per i form",
    purpose:
      "Verificare la presenza di istruzioni chiare che aiutino a compilare correttamente la form con le informazioni richieste",
    procedure:
      "Individuare tutte le form presenti nella pagina e verificare che siano presenti istruzioni chiare che aiutino l'utente a inserire i dati corretti.",
    type: "M",
    tags: ["contenuto", "input", "form"],
  },
  {
    index: 71,
    level: "A",
    title: "Label per ogni campo di input",
    purpose:
      "Verificare l’uso corretto delle label per ogni campo di input utilizzando identificativi non ambigui in corrispondenza dell’elemento cui si riferiscono",
    procedure:
      "Individuare tutti i campi di input presenti nella pagina e verificare che per ognuno sia disponibile un'univoca label che ne descriva il significato. I tool consigliati evidenziano la presenza o assenza del tag label associato a un campo di input. Al verificatore spetta il compito di verificare se il testo inserito è sufficientemente esplicativo.",
    type: "S",
    tags: ["contenuto", "input", "form", "html", "semantica", "label"],
  },
  {
    index: 72,
    level: "A",
    title: "Identificazione elementi obbligatori",
    purpose: "Verificare la corretta identificazione degli elementi obbligatori",
    procedure:
      "Individuare tutti i campi di input presenti nella pagina e verificare che sia chiaro quali sono obbligatori. L'informazione deve essere trasmessa in diversi modi: col colore, con simboli derivanti da convenzioni (es. asterisco), con descrizione testuale, con indicazione alle tecnologie assistive (aria-required)",
    type: "M",
    tags: ["contenuto", "presentazione", "testo", "immagini", "alternativa", "colore", "input", "errori", "form"],
  },
  {
    index: 73,
    level: "A",
    title: "Chiarezza degli errori",
    purpose:
      "Verificare la presenza di errori chiari che aiutino l’utente a correggersi in corrispondenza del campo che ha dato errore, aiutandosi anche con il colore, ma evitando che sia l’unico mezzo (per esempio usare elementi semantici come strong)",
    procedure:
      "Effettuare una prova di compilazione della form con valori errati e analizzare gli errori ricevuti. Verificare che gli errori siano correttamente enfatizzati (tramite l'uso del colore, usando markup tipo strong, con indicazione alle tecnologie assistive) e che il messaggio sia sufficientemente escplicativo e aiuti l'utente a inserire i valori corretti.",
    type: "M",
    tags: ["contenuto", "presentazione", "testo", "alternativa", "colore", "input", "errori", "form"],
  },
  {
    index: 74,
    level: "A",
    title: "Corretto utilizzo delle label",
    purpose:
      "Verificare che negli elementi che contengono testo o immagini di testo, per i quali è presentata una label, l’attributo name contenga anche il testo che viene presentato visivamente",
    procedure:
      "Analizzare tutte le label presenti per i campi di input e verificare che il nome accessibile, visibile alle tecnologie assistive, comprenda il testo presente nella label.",
    type: "M",
    tags: ["contenuto", "input", "form", "html", "semantica", "label"],
  },
  {
    index: 75,
    level: "A",
    title: "Corretto utilizzo di legend e fieldset",
    purpose:
      "Verificare l’uso corretto di fieldset e legend per raggruppare e descrivere elementi della stessa sezione (eventualmente in associazione al ruolo aria-group)",
    procedure:
      "Individuare tutte le form o gruppi di campi di input presenti nella pagina e verificare se siano stati usati correttamente gli elementi fieldset e legend oppure il ruolo aria-group per evidenziare la correlazione tra i campi di input. I tool consigliati evidenziano la presenza o l'assenza di queste indicazioni, mentre al verificatore spetta il compito di verificare che il raggruppamento sia corretto. Il raggruppamento deve essere chiaro sia visivamente che alle tecnologie assistive.",
    type: "S",
    tags: ["contenuto", "input", "form", "html", "legend", "fieldset", "aria", "aria-group"],
  },
  {
    index: 76,
    level: "A",
    title: "Corretta impostazione dei campi di input dei form",
    purpose:
      "Verificare che per ogni elemento della form nome, valore e stato siano impostati correttamente e che la notifica sui cambi di stato (es. radio button selezionato) sia resa disponibile ai programmi utente, comprese le tecnologie assistive assistive",
    procedure:
      "Individuare tutti i campi delle form presenti nella pagina e verificare che il nome, il valore e lo stato degli elementi siano validi e corretti. I tool consigliati permettono di evidenziare i valori degli attributi inseriti. Effettuare poi una prova di compilazione e invio della form per verificare che siano resi evidenti all'utente i cambi di stato degli elementi.",
    type: "S",
    tags: ["contenuto", "input", "form", "html", "semantica", "attributi-html"],
  },
  {
    index: 77,
    level: "AA",
    title: "Autocompletamento nei campi di input",
    purpose:
      "Verificare l’uso dell’attributo di autocompletamento per far suggerire all’utente i dati attesi o fornire input precedenti",
    procedure:
      "Individuare tutti i campi di input presenti nella pagina e verificare l'uso dell'attributo di autocompletamento. I tool consigliati permettono di evidenziare la presenza o assenza dell'attributo.",
    type: "S",
    tags: ["contenuto", "input", "form", "html", "dati", "autocompletamento", "comportamento"],
  },
  {
    index: 78,
    level: "AA",
    title: "Chiarezza dei campi di input",
    purpose: "Verificare che sia chiaro lo scopo di ogni campo di input (es. username, password)",
    procedure:
      "Effettuare una prova di compilazione della form presente nella pagina e verificare che dalle label e dalle indicazioni di compilazione sia chiaro lo scopo di ogni campo.",
    type: "M",
    tags: ["contenuto", "input", "form", "html", "dati"],
  },
  {
    index: 79,
    level: "AA",
    title: "Suggerimenti per correggere errore",
    purpose:
      "Verificare la presenza di suggerimenti per correggere un errore di input fornendo una possibile correzione",
    procedure:
      "Effettuare una prova di compilazione della form con valori errati e verificare se vengono forniti suggerimenti di correzione.",
    type: "M",
    tags: ["contenuto", "testo", "input", "errori", "form"],
  },
  {
    index: 80,
    level: "AA",
    title: "Revisione informazioni importanti nei form",
    purpose:
      "Verificare che nelle pagine che presentano transazioni finanziarie o legali l’utente possa rivedere e correggere le informazioni prima dell’invio definitivo o che sia possibile annullare l’invio",
    procedure:
      "Effettuare una prova di compilazione e invio della form presente nella pagina e verificare che, in presenza di transazioni finanziarie o legali, sia possibile rivedere e correggere le informazioni prima dell'invio o che sia possibile annullare l'invio dei dati.",
    type: "M",
    tags: ["contenuto", "testo", "dati", "input", "form"],
  },
  {
    index: 81,
    level: "AAA",
    title: "Revisione informazioni nei form",
    purpose:
      "Verificare che prima di inviare il modulo sia possibile rivedere i dati e correggerli o che sia possibile annullare l’invio",
    procedure:
      "Effettuare una prova di compilazione e invio della form presente nella pagina e verificare che sia possibile rivedere e correggere le informazioni prima dell'invio o che sia possibile annullare l'invio dei dati.",
    type: "M",
    tags: ["contenuto", "testo", "dati", "input", "form"],
  },
  {
    index: 82,
    level: "AAA",
    title: "Chiarezza scopo del form",
    purpose: "Verificare che sia chiaro lo scopo di ogni form",
    procedure:
      "Analizzare il sorgente della pagina e verificare l'uso dei corretti ruoli aria in corrispondenza delle form. Per esempio le form di ricerca devono avere ruolo=search.",
    type: "M",
    tags: ["contenuto", "form"],
  },
  {
    index: 83,
    level: "AAA",
    title: "Aiuti contestuali alla compilazione dei form",
    purpose:
      "Verificare che siano presenti aiuti contestuali alla compilazione della form (suggerimenti, spelling, formato dati atteso…)",
    procedure:
      "Effettuare una prova di compilazione delle form presenti nella pagina e verificare che siano resi disponibili diversi aiuti alla compilazione, come: suggerimenti di inserimento, correzione dello spelling, indicazione del formato dati atteso.",
    type: "M",
    tags: ["contenuto", "testo", "dati", "input", "form"],
  },
  {
    index: 84,
    level: "A",
    title: "Corretta struttura delle tabelle",
    purpose:
      "Verificare la progettazione corretta delle tabelle mediante l’uso degli attributi scope, colgroup, col, headers…",
    procedure:
      "Analizzare il sorgente della pagina e verificare l'uso degli elementi semantici corretti per la definizione della tabella. In particolare verificare la presenza degli attributi necessari e descrivere le intestazioni e il verso delle intestazioni (unidimensionali o bidimensionali), in modo che sia chiara la struttura della tabella anche alle tecnologie assistive. I tool consigliati permettono di verificare la correttezza nell'uso degli elementi semantici.",
    type: "S",
    tags: ["contenuto", "tabella", "html", "semantica"],
  },
  {
    index: 85,
    level: "A",
    title: "Descrizione della struttura delle tabelle",
    purpose:
      "Verificare la presenza di una descrizione alla struttura della tabella (ex attributo summary, per esempio usando la caption)",
    procedure:
      "Individuare nella pagina tutte le tabelle presenti e verificare che per ognuna sia disponibile una descrizione introduttiva alla sua struttura. I tool consigliati permettono di individuare la presenza del tag caption a questo scopo.",
    type: "S",
    tags: ["contenuto", "tabella", "html", "semantica"],
  },
  {
    index: 86,
    level: "N.A.",
    title: "Trasformazione elegante tabelle",
    purpose: "Verificare che le tabelle si trasformino in maniera elegante in caso di poco spazio",
    procedure:
      "Utilizzare gli strumenti consigliati o diversi dispositivi fisici per verificare la trasformazione della tabella in schermi di dimensioni ridotte.",
    type: "S",
    tags: ["presentazione", "contenuto", "tabella", "html", "semantica"],
  },
  {
    index: 87,
    level: "A",
    title: "Notifica contenuto temporizzato",
    purpose:
      "Verificare che l’utente sia notificato della presenza di un contenuto temporizzato e che il tempo di utilizzo limitato possa essere disattivato o esteso",
    procedure:
      "Individuare nella pagina tutti i contenuti temporizzati e verificare che sia disponibile all'utente l'informazione sulla presenza di questo tipo di contenuto e che il tempo limitato possa essere disattivato o esteso.",
    type: "M",
    tags: ["comportamento", "tempo", "media"],
  },
  {
    index: 88,
    level: "AAA",
    title: "Presenza limite di tempo e/o esecuzione",
    purpose: "Verificare che non sia presente un limite al tempo di esecuzione/utilizzo",
    procedure:
      "Analizzare e effettuare una prova di utilizzo della pagina per verificare che non sia presente alcun limite al tempo di esecuzione o utilizzo dei contenuti.",
    type: "M",
    tags: ["comportamento", "tempo"],
  },
  {
    index: 89,
    level: "AAA",
    title: "Interruzioni",
    purpose: "Verificare che le interruzioni possano essere rinviate o annullate dall’utente",
    procedure:
      "Individuare tutte le interruzioni alla fruizione dei contenuti e verificare che sia presente un meccanismo per rinviarle o annullarle.",
    type: "M",
    tags: ["comportamento", "errori"],
  },
  {
    index: 90,
    level: "AAA",
    title: "Ri-autenticazione senza perdita di dati",
    purpose:
      "Verificare che l’utente possa effettuare una nuova autenticazione dopo una sessione scaduta senza perdita di dati dalla sessione precedente",
    procedure:
      "Effettuare un test di utilizzo di pagine in cui sia attiva una sessione autenticata e verificare che alla scadenza della sessione l'utente possa autenticarsi nuovamente senza perdere i dati sui quali stava lavorando.",
    type: "M",
    tags: ["comportamento", "autenticazione"],
  },
  {
    index: 91,
    level: "AAA",
    title: "Prolungato stato di inattività",
    purpose:
      "Verificare gli utenti siano notificati nel caso in cui un prolungato tempo di inattività provochi una perdita di dati",
    procedure:
      "Analizzare i contenuti della pagina e verificare la presenza di utilizzi che provocano una perdita di dati in caso di inattività prolungata. Verificare in caso che all'utente sia resa chiara questa eventualità.",
    type: "M",
    tags: ["comportamento", "tempo", "dati"],
  },
  {
    index: 92,
    level: "A",
    title: "Contenuto testuale come mezzo di esposizione principale",
    purpose:
      "Verificare che il testo sia usato come mezzo principale di esposizione o che sia presente come alternativa per i contenuti non testuali",
    procedure:
      "Analizzare i contenuti della pagina e verificare che tutti i contenuti principali siano presentati tramite testo e che per ogni contenuto non testuale sia presente un'alternativa o descrizione testuale.",
    type: "M",
    tags: ["contenuto", "testo"],
  },
  {
    index: 93,
    level: "AA",
    title: "Stile del testo 1",
    purpose:
      "Verificare che siano rispettati i seguenti valori minimi nelle regole CSS per il testo: interlinea 1.5em, spazio tra i paragrafi 2em, spaziatura tra le lettere 0.12em, spazio tra le parole 0.16em",
    procedure:
      "Analizzare il foglio di stile e verificare che le dimensioni e le spaziature del testo siano espresse con unità di misura relative in modo che sia possibile per l'utente sovrascriverne i valori, per esempio per mezzo di un'estensione. I tool consigliati permettono di verificare che sia possibile sovrascrivere i valori di spaziatura del testo per rispettare i valori minimi consigliati dalla regola.",
    type: "S",
    tags: ["presentazione", "testo", "stile"],
  },
  {
    index: 94,
    level: "AA",
    title: "Ingrandimento testo 1",
    purpose: "Verificare che il testo possa essere ingrandito al 200% senza l’uso di tecnologie assistive",
    procedure: "Utilizzare gli strumenti consigliati per verificare che il testo possa essere ingrandito del 200%.",
    type: "S",
    tags: ["presentazione", "testo", "stile"],
  },
  {
    index: 95,
    level: "AA",
    title: "Intestazioni ed etichette",
    purpose:
      "Verificare che intestazioni ed etichette siano significative e consistenti e permettano di identificare una sezione o lo scopo di un componente",
    procedure:
      "Analizzare il contenuto della pagina e individuare tutte le intestazioni e etichette presenti. Verificare che le intestazioni rendando chiaro lo scopo di una sezione e che le etichette chiariscano lo scopo di un componente.",
    type: "M",
    tags: ["contenuto", "semantica", "intestazioni", "etiichette"],
  },
  {
    index: 96,
    level: "AAA",
    title: "Stile del testo 2",
    purpose:
      "Verificare che siano rispettati i seguenti valori minimi nelle regole CSS per il testo: la larghezza non supera gli 80 caratteri o glifi, il testo non è giustificato, l'interlinea è almeno uno spazio e mezzo all'interno dei paragrafi e lo spazio tra paragrafi è almeno una volta e mezzo l'interlinea",
    procedure:
      "Analizzare il foglio di stile e verificare che siano rispettati i vincoli della regola nelle dimensioni e spaziature del testo. Il tool consigliato rileva la presenza di testo giustificato.",
    type: "S",
    tags: ["presentazione", "testo", "stile"],
  },
  {
    index: 97,
    level: "AAA",
    title: "Personalizzazione del colore o dello sfondo",
    purpose:
      "Verificare che non siano presenti impedimenti alla personalizzazione dei colori del testo e dello sfondo, applicata per esempio tramite un’apposita estensione",
    procedure:
      "Utilizzare gli strumenti del browser o apposite estensioni per modificare il colore del testo e dello sfondo. Verificare che sia possibile eseguire l'operazione.",
    type: "S",
    tags: ["presentazione", "colore", "testo", "sfondo"],
  },
  {
    index: 98,
    level: "AAA",
    title: "Ingrandimento del testo 2",
    purpose:
      "Verificare che il testo possa essere ridimensionato fino al 200% senza supporto delle tecnologie assistive e senza scroll orizzontale in una finestra a tutto schermo",
    procedure:
      "Utilizzare gli strumenti consigliati per verificare che il testo possa essere ingrandito del 200% e che non si verifichi scroll orizzontale.",
    type: "S",
    tags: ["presentazione", "testo", "stile"],
  },
  {
    index: 99,
    level: "AAA",
    title: "Descrizione per informazioni testuali inusuali",
    purpose:
      "Verificare che sia fornita una definizione per parole o frasi usate in modo insolito, espressioni gergali, idiomatiche",
    procedure:
      "Analizzare il contenuto della pagina e individuare frasi o parole usate in modo insolito, espressioni gergali o idiomatiche. Verificare che il significato di ognuna di esse sia chiaro nel contesto del sito oppure verificare la presenza di una definizione chiara.",
    type: "M",
    tags: ["contenuto", "testo", "alternativa"],
  },
  {
    index: 100,
    level: "AAA",
    title: "Descrizioni abbreviazioni",
    purpose: "Verificare che sia disponibile un meccanismo per comprendere le abbreviazioni presenti",
    procedure:
      "Analizzare il contenuto della pagina e individuare tutte le abbreviazioni usate nel testo. Verificare che il loro significato sia chiaro nell'ambito del sito o che sia fornita la sua definizione.",
    type: "M",
    tags: ["contenuto", "testo", "alternativa", "abbreviazioni"],
  },
  {
    index: 101,
    level: "AAA",
    title: "Leggibilità del testo",
    purpose:
      "Verificare il livello di leggibilità del testo (istruzione elementare, secondaria inferiore, secondaria superiore) secondo gli indici di leggibilità del testo (es. Indice di Gulpease)",
    procedure:
      "Utilizzare gli strumenti consigliati oppure altri analizzatori di leggibilità del testo per verificare la difficoltà di lettura dei paragrafi di testo (elementare, media, superiore).",
    type: "S",
    tags: ["contenuto", "testo", "leggibilità", "comprensione"],
  },
  {
    index: 102,
    level: "AAA",
    title: "Contenuti a supporto della comprensione del testo",
    purpose:
      "Verificare che, se il testo richiede una capacità di lettura più avanzata del livello di istruzione secondaria inferiore, siano disponibili contenuti supplementari per la comprensione o che sia disponibile una versione alternativa più semplice",
    procedure:
      "Analizzare la leggibilità dei paragrafi di testo e verificare che, nel caso il livello di difficoltà sia superiore al livello di istruzione secondaria inferiore, il testo sia comprensibile nell'ambito del sito o in alternativa che sia disponibile una versione equivalente più semplice. I tool consigliati permettono di calcolare la difficoltà di lettura del testo basandosi sull'Indice di Gulpease.",
    type: "S",
    tags: ["contenuto", "testo", "leggibilità", "comprensione"],
  },
  {
    index: 103,
    level: "AAA",
    title: "Pronuncia corretta",
    purpose: "Verificare che sia chiara la pronuncia di parole specifiche o altrimenti ambigue",
    procedure:
      "Analizzare il contenuto della pagina e individuare parole la cui pronuncia corretta è essenziale per la comprensione del testo. Verificare che sia quindi chiara la pronuncia di queste parole.",
    type: "M",
    tags: ["contenuto", "testo", "pronuncia", "comprensione"],
  },
  {
    index: 104,
    level: "N.A.",
    title: "Leggibilità su più dispositivi",
    purpose: "Verificare la leggibilità del font anche su dispositivi, browser e s.o. diversi",
    procedure:
      "Utilizzare i tool consigliati e altri dispositivi fisici per verificare la leggibilità del testo in diversi ambienti e schermi.",
    type: "S",
    tags: ["contenuto", "testo", "leggibilità", "comprensione"],
  },
  {
    index: 105,
    level: "N.A.",
    title: "Utilizzo elenchi e liste",
    purpose: "Verificare l’uso di elenchi ogni volta che è possibile",
    procedure:
      "Analizzare i contenuti della pagina e verificare l'uso degli elenchi per esporre le informazioni. Al verificatore spetta il compito di verificare se alcuni contenuti presentati come paragrafi possono più efficacemente essere esposti come liste. I tool consiglati permettono di evidenziare l'uso di liste di elementi.",
    type: "S",
    tags: ["contenuto", "elenchi", "liste", "semantica"],
  },
  {
    index: 106,
    level: "N.A.",
    title: "Esposizione del testo",
    purpose:
      "Verificare che sia usata una esposizione chiara del testo in cui sono evidenziate le informazioni importanti",
    procedure:
      "Effettuare una prova di lettura della pagina e verificare le chiarezza espositiva dei testi. Verificare quindi che le informazioni più importanti siano correttamente evidenziate.",
    type: "M",
    tags: ["contenuto", "testo", "leggibilità", "comprensione"],
  },
  {
    index: 107,
    level: "N.A.",
    title: "Linguaggio adottato",
    purpose:
      "Verificare che sia stato usato il linguaggio adatto al sito e al target di utenti (registro e termini specifici)",
    procedure:
      "Effettuare una prova di lettura della pagina e verificare che il linguaggio utilizzato sia adatto alla platea di utenti per cui il sito è realizzato.",
    type: "M",
    tags: ["contenuto", "testo", "leggibilità", "comprensione"],
  },
  {
    index: 108,
    level: "N.A.",
    title: "Correttezza ortografica e grammaticale",
    purpose: "Verificare la correttezza ortografica e grammaticale (evitare la presenza di typo)",
    procedure:
      "Utilizzare gli strumenti consigliati o altri tool di verifica ortografica e grammaticale per controllare la correttezza di tutti i testi presenti nella pagina.",
    type: "A",
    tags: ["contenuto", "testo", "leggibilità", "comprensione"],
  },
  {
    index: 109,
    level: "N.A.",
    title: "Correttezza delle parole in lingua, tecniche, scientifiche",
    purpose: "Verificare la correttezza delle parole straniere e/o tecnico/scientifiche utilizzate",
    procedure:
      "Utilizzare gli strumenti consigliati o altri tool di verifica ortografica e grammaticale per controllare la correttezza di parole o frasi la cui lingua differisce dalla lingua principale della pagina. Effettuare inoltre un controllo di spelling delle parole tecnico/specifiche utilizzate.",
    type: "S",
    tags: ["contenuto", "testo", "leggibilità", "comprensione", "lingua"],
  },
  {
    index: 110,
    level: "A",
    title: "Semplicità utilizzo",
    purpose:
      "Verificare che tutte le operazioni possano essere svolte con un gesto semplice come un singolo tocco o click",
    procedure:
      "Effettuare una prova di utilizzo della pagina e verificare che tutte le operazioni possano essere svolte con un singolo click o tocco o pressione di un tasto.",
    type: "M",
    tags: ["comportamento", "click"],
  },
  {
    index: 111,
    level: "A",
    title: "Annullamento operazioni",
    purpose: "Verificare che sia possibile annullare le operazioni avviate da input accidentali o errati",
    procedure:
      "Effettuare una prova di utilizzo della pagina e verificare che esista un meccanismo per annullare l'esecuzione di operazioni avviate da azioni accidentali.",
    type: "M",
    tags: ["comportamento", "errori"],
  },
  {
    index: 112,
    level: "AAA",
    title: "Stile controlli",
    purpose:
      "Verificare che la dimensione dei controlli sia almeno 44x44 pixel, salvo quando una dimensione inferiore permette comunque di abilitare il controllo. Su mobile è sufficiente che una delle due dimensioni sia di almeno 44 pixel.",
    procedure:
      "Utilizzare gli strumenti consigliati o dispositivi fisici diversi per verificare che la dimensione dei controlli sia sufficiente all'utilizzo con puntatore o tocco su touch screen. Verificare che sia rispettata la dimensione minima di 44x44 pixel o che il simulatore o l'esecuzione fisica di un tocco su dispositivi mobile dia esito positivo in merito alla sufficiente disponibilità di spazio per eseguire l'azione.",
    type: "S",
    tags: ["presentazione", "stile", "colore", "controlli"],
  },
  {
    index: 113,
    level: "AAA",
    title: "Contenuto e modalità di input",
    purpose:
      "Verificare che il contenuto non limiti l’uso di diverse modalità di input e che l’utente possa cambiare e usare diverse modalità insieme (es. sia mouse che tastiera)",
    procedure:
      "Effettuare una prova di utilizzo della pagina attraverso l'uso di modalità di input multiple e simultanee. Verificare quindi che il sito risponda correttamente ed esegua le operazioni corrette.",
    type: "M",
    tags: ["presentazione", "contenuto", "input", "form", "alternativa"],
  },
  {
    index: 114,
    level: "A",
    title: "Operazioni azionate da movimento",
    purpose:
      "Verificare che le operazioni azionate dal movimento (agitare, ruotare...) siano accompagnate da una diversa modalità di input (per esempio un pulsante)",
    procedure:
      "Effettuare una prova di utilizzo della pagina e verificare che le operazioni azionate dal movimento possano essere abilitate anche con altre modalità di input.",
    type: "M",
    tags: ["comportamento", "input", "form", "alternativa"],
  },
  {
    index: 115,
    level: "A",
    title: "Disabilitazione operazioni azionate da movimento",
    purpose:
      "Verificare che sia possibile disabilitare questa modalità per non rischiare di azionare operazioni in modo accidentale",
    procedure:
      "Effettuare una prova di utilizzo della pagina e individuare le operazioni azionate dal movimento. Verificare che sia disponibile un meccanismo per disabilitare queste opzioni.",
    type: "M",
    tags: ["comportamento", "input", "form", "alternativa"],
  },
  {
    index: 116,
    level: "A",
    title: "Ordine di navigazione",
    purpose:
      "Verificare l’ordine della navigazione e l’attraversamento del contenuto rispetto alla logica della pagina",
    procedure:
      "Analizzare la struttura della pagina e effettuare una prova di attraversamento dei contenuti usando la tastiera. Verificare quindi che l'ordine di attraversamento rispetti la logica della pagina. I tool consigliati permettono di evidenziare la presenza di contenuti che non possono ricevere il focus da tastiera e evidenziano visivamente l'ordine di attraversamento dei componenti interattivi della pagina.",
    type: "S",
    tags: ["struttura", "input", "form", "navigazione"],
  },
  {
    index: 117,
    level: "A",
    title: "Utilizzo tabinex",
    purpose: "Verificare l’uso corretto del tabindex",
    procedure:
      "Analizzare il sorgente della pagina e verificare la presenza di tabindex. Verificare che, nel caso i tabindex abbiano valore positivo, questi siano strettamente necessari e non possa essere raggiunto lo stesso risultato riorganizzando la pagina. I tool consigliati permettono di evidenziare, visivamente e nel codice, l'uso del tabindex.",
    type: "S",
    tags: ["struttura", "comportamento", "focus", "tabindex", "htlm", "attributi-html"],
  },
  {
    index: 118,
    level: "A",
    title: "Utilizzo tabindex 0",
    purpose:
      "Verificare l’uso corretto di tabindex=0 per permettere il focus da tastiera a elementi che normalmente non lo hanno",
    procedure:
      "Analizzare il sorgente della pagina e verificare la presenza di tabindex con valore 0 per dare focus a elementi che normalmente non lo ricevono. Effettuare una prova di utilizzo della pagina da tastiera per verificare che effettivamente il componente sia raggiungibile. I tool consigliati permettono di evidenziare, visivamente e nel codice, l'uso del tabindex.",
    type: "S",
    tags: ["struttura", "comportamento", "focus", "tabindex", "htlm", "attributi-html"],
  },
  {
    index: 119,
    level: "A",
    title: "Utilizzo tabindex -1",
    purpose: "Verificare l’uso corretto di tabindex=-1 per evitare che un certo elemento riceva il focus da tastiera",
    procedure:
      "Analizzare il sorgente della pagina e verificare la presenza di tabindex con valore -1 per togliere il focus ad alcuni elementi. Effettuare una prova di utilizzo della pagina da tastiera per verificare che effettivamente il componente non sia raggiungibile. I tool consigliati permettono di evidenziare, visivamente e nel codice, l'uso del tabindex.",
    type: "S",
    tags: ["struttura", "comportamento", "focus", "tabindex", "htlm", "attributi-html"],
  },
  {
    index: 120,
    level: "A",
    title: "Navigabilità da tastiera del sito",
    purpose:
      "Verificare che il sito sia navigabile utilizzando la sola navigazione da tastiera e che le informazioni siano comunque tutte raggiungibili senza dispositivo di puntamento nell’ordine corretto",
    procedure:
      "Effettuare una prova di navigazione della pagina e verificare che tutti i componenti interattivi possano essere raggiunti usando solo la tastiera nell'ordine corretto. I tool consigliati permettono di evidenziare la presenza di componenti interattivi non raggiungibili da tastiera e di mostrare visivamente l'ordine di attraversamento della pagina.",
    type: "S",
    tags: ["struttura", "alternativa", "tastiera", "navigazione"],
  },
  {
    index: 121,
    level: "A",
    title: "Utilizzabilità da tastiera del sito",
    purpose:
      "Verificare che tutte le funzionalità offerte tramite componenti interattivi siano utilizzabili usando solo la tastiera",
    procedure:
      "Effettuare una prova di navigazione della pagina e verificare che tutte le operazioni avviate da componenti interattivi possano essere azionate usando solo la tastiera.",
    type: "M",
    tags: ["struttura", "tastiera", "navigazione"],
  },
  {
    index: 122,
    level: "A",
    title: "Focus da tastiera",
    purpose: "Verificare che sia possibile spostare e togliere il focus dagli elementi usando solo la tastiera",
    procedure:
      "Effettuare una prova di navigazione della pagina e verificare che sia possibile dare e togliere il focus dagli elementi presenti in essa usando solo la tastiera.",
    type: "M",
    tags: ["struttura", "focus", "tastiera", "navigazione"],
  },
  {
    index: 123,
    level: "A",
    title: "Funzionalità interattive e scorciatoie da tastiera",
    purpose:
      "Verificare che le eventuali scorciatoie da tastiera impostate possano essere disattivate o rimappate o che siano attive solo quando il focus è sull’elemento per cui esiste la scorciatoia",
    procedure:
      "Analizzare il sorgente della pagina e verificare l'impostazione delle scorciatoie da tastiera. I tool consigliati permettono di evidenziare il loro uso. Verificare quindi che le scorciatoie impostate eseguano l'azione corretta e che sia chiara all'utente la loro presenza. Verificare inoltre che le scorciatoie impostate possano essere disabilitate o rimappate dall'utente oppure che siano attive solo su singoli componenti quando questi ricevono il focus.",
    type: "S",
    tags: ["struttura", "focus", "comportamento", "contenuto", "tastiera", "navigazione"],
  },
  {
    index: 124,
    level: "AA",
    title: "Evidenza del focus attivo",
    purpose: "Verificare che sia evidente quale elemento ha il focus attivo nella navigazione da tastiera",
    procedure:
      "Effettuare una prova di attraversamento della pagina con la tastiera e verificare che sia evidente il componente su cui è attivo il focus. Verificare quindi che tramite foglio di stile non sia stata rimossa la proprietà outline.",
    type: "M",
    tags: ["presentazione", "focus"],
  },
  {
    index: 125,
    level: "AAA",
    title: "Funzionalità interattive utilizzabili da tastiera",
    purpose:
      "Verificare che tutte le funzionalità siano utilizzabili da tastiera senza richiedere tempi specifici di pressione dei tasti",
    procedure:
      "Effettuare una prova di navigazione della pagina e verificare che per l'avvio di operazioni scatenate da componenti interattivi non sia necessario un tempo specifico di pressione dei tasti.",
    type: "M",
    tags: ["struttura", "comportamento", "contenuto", "tastiera", "navigazione"],
  },
  {
    index: 126,
    level: "AA",
    title: "Utilizzo ruoli waria per messaggi di stato",
    purpose:
      "Verificare che i ruoli siano usati correttamente per comunicare alle tecnologie assistive la presenza di messaggi di stato: per il completamento di operazioni (role status) o per la presenza di errori (role alert) o per lo stato di completamento di un processo (role progressbar o log)",
    procedure:
      "Effettuare una prova di utilizzo della pagina e verificare che in presenza di messaggi di stato collegate ad azioni sulla pagina questi siano resi disponibili anche alle tecnologie assistive. I tool consigliati permettono di evidenziare visiamente e nel codice l'uso di ruoli aria destinati alla comunicazione di messaggi di stato alle tecnologie assistive.",
    type: "S",
    tags: ["waria", "ruolo"],
  },
  {
    index: 127,
    level: "A",
    title: "Utilizzo ruoli waria per indicare funzioni di elementi o regioni",
    purpose:
      "Verificare che i ruoli aria usati siano corretti per indicare la funzione di ogni elemento o regione presente nella pagina utilizzando, quando il markup html non è sufficiente (es. assegnare il ruolo search a una form di ricerca, il ruolo login a form di login, ma assegnare il ruolo navigation a una sezione marcata come nav in HTML5 è ridondante)",
    procedure:
      "Analizzare il sorgente della pagina e verificare che ogni sezione della pagina sia correttamente individuata mediante l'uso dei corretti ruoli di landamark e region aria. Gli strumenti consigliati permettono di evidenziare visivamente e nel codice l'uso dei ruoli aria per l'identificazione delle sezioni della pagina.",
    type: "S",
    tags: ["waria", "ruolo"],
  },
  {
    index: 128,
    level: "A",
    title: "Disponibilità notifiche sui cambi di stato",
    purpose:
      "Verificare che le notifiche sui cambi di stato degli elementi siano rese disponibili ai programmi utente, comprese le tecnologie assistive (es. un menu a tendina è stato aperto o una checkbox selezionata)",
    procedure:
      "Effettuare una prova di utilizzo della pagina in particolare dei componenti che possono subire cambi di stato in conseguenza di interazione dell'utente. Verificare che ogni cambio di stato sia notificato e reso disponibile all'utente anche mediante le tecnologie assistive eventualmente usate.",
    type: "M",
    tags: ["comportamento", "contesto", "stato"],
  },
  {
    index: 129,
    level: "A",
    title: "Stati waria",
    purpose:
      "Verificare l’uso corretto degli stati ARIA per evidenziare gli stati degli elementi nella pagina (es. elementi disabilitati)",
    procedure:
      "Effettuare una prova di utilizzo della pagina per verificare che alle tecnologie assistive siano correttamente comunicati gli stati e i cambi di stato degli elementi presenti. I tool consigliati permettono di evidenziare l'utilizzo di stati ARIA nella pagina.",
    type: "S",
    tags: ["waria", "stato"],
  },
  {
    index: 130,
    level: "A",
    title: "Etichette ARIA",
    purpose:
      "Verificare che il testo dell’etichetta visibile di un componente sia incluso nel suo nome accessibile (cioè il nome letto dalle tecnologie assistive, per esempio aria-label)",
    procedure:
      "Effettuare una prova di utilizzo della pagina utilizzando tecnologie assistive e verificare che il nome accessibile di un componente comprenda anche il testo visibile dello stesso. Il tool consigliato permette di evidenziare il nome accessibile dei componenti della pagina.",
    type: "S",
    tags: ["waria", "etichetta"],
  },
  {
    index: 131,
    level: "A",
    title: "Proprietà ARIA",
    purpose:
      "Verificare l’uso corretto delle proprietà ARIA per evidenziare le caratteristiche degli elementi nella pagina (es. elementi obbligatori in una form)",
    procedure:
      "Effettuare una prova di utilizzo della pagina per verificare che alle tecnologie assistive siano correttamente comunicate le proprietà degli elementi inserite tramite proprietà ARIA. I tool consigliati permettono di evidenziare l'uso di proprietà ARIA nella pagina.",
    type: "S",
    tags: ["waria", "proprietà"],
  },
  {
    index: 132,
    level: "A",
    title: "navigazione",
    purpose:
      "Verificare la presenza di aiuti alla navigazione che permettano di saltare a diversi blocchi di contenuti (torna su, salta al contenuto principale, ecc.)",
    procedure:
      "Effettuare una prova di navigazione della pagina, anche usando tecnologie assistive, per verificare la presenza e il corretto funzionamento di aiuti alla navigazione per saltare blocchi di contenuto. I tool consigliati permettono di verificare la presenza di aiuti contestuali, eventualmente disponibili solo per le tecnologie assistive.",
    type: "S",
    tags: ["struttura", "navigazione"],
  },
  {
    index: 133,
    level: "A",
    title: "Aiuti per identificazioni errori",
    purpose: "Verificare la presenza di aiuti all’identificazione degli errori di input",
    procedure:
      "Effettuare una prova di compilazione di campi di input con valori errati e verificare la corretta visualizzazione e comunicazione tramite tecnologie assistive degli errori presenti.",
    type: "M",
    tags: ["struttura", "contenuto", "errore", "input", "dati", "form"],
  },
  {
    index: 134,
    level: "AA",
    title: "Suggerimenti per correzzione di errori",
    purpose: "Verificare la presenza di suggerimenti per la correzione degli errori",
    procedure:
      "Effettuare una prova di compilazione di campi di input con valori errati e verificare la presenza e la corretta comunicazione, visivamente e alle tecnologie assistive, di suggerimenti per la correzione degli errori.",
    type: "M",
    tags: ["struttura", "contenuto", "comportamento", "errore", "input", "dati", "form"],
  },
  {
    index: 135,
    level: "AAA",
    title: "Aiuti contestuali per funzionalità o inserimento dati",
    purpose:
      "Verificare la presenza di aiuti contestuali per l'utilizzo di una funzionalità o per l'inserimento di dati (suggerimenti, placeholder, spelling, formato dati, assistente virtuale, ecc.)",
    procedure:
      "Effettuare una prova di utilizzo della pagina e verificare che siano disponibili aiuti allo svolgimento delle operazioni presenti sotto diversa forma (per esempio suggerimenti di input, suggerimenti di spelling per la compilazione di form, presenza di un assistente virtuale per aiutare l'utente a usare la pagina, ecc.)",
    type: "M",
    tags: ["struttura", "contenuto", "input", "dati", "form"],
  },
  {
    index: 136,
    level: "N.A.",
    title: "Quantità informazioni",
    purpose: "Verificare che non siano presenti troppe informazioni in una pagina",
    procedure:
      "Effettuare una prova di navigazione e lettura della pagina e verificare che le informazioni non creino confusione e non sovraccarichino l'utente compromettendo la comprensione dei contenuti. Verificare che le informazioni siano poche, essenziali e coincise.",
    type: "M",
    tags: ["contenuto", "testo", "dati", "sovraccarico"],
  },
  {
    index: 137,
    level: "N.A.",
    title: "Layout semplice",
    purpose: "Verificare che sia usato un layout semplice, chiaro e intuitivo (non più di tre colonne)",
    procedure:
      "Analizzare la visualizzazione della pagina e verificare che la strutturazione delle sezioni della pagina sia chiara e intuitiva, così come lo scopo di ognuna di esse. Verificare che il layout non sia troppo complesso, generalmente senza superare le tre colonne di contenuti.",
    type: "M",
    tags: ["contenuto", "testo", "dati", "sovraccarico", "presentazione", "layout"],
  },
  {
    index: 138,
    level: "N.A.",
    title: "Divulgazione progressiva",
    purpose:
      "Verificare la presenza della tecnica di divulgazione progressiva per non sovraccaricare l’utente di informazioni",
    procedure:
      "Effettuare una prova di utilizzo della pagina e verificare che sia usata la tecnica di divulgazione progressiva delle informazioni. Ovvero verificare che siano disponibili meccanismi controllabili dall'utente per visualizzare più o meno informazioni, così come visualizzare un po' alla volta, in modo che all'utente non siano presentate troppe informazioni in una volta.",
    type: "M",
    tags: ["contenuto", "testo", "dati", "sovraccarico"],
  },
  {
    index: 139,
    level: "A",
    title: "Struttura e ordine delle informazioni",
    purpose: "Verificare che la struttura e l’ordine delle informazioni sia chiaro",
    procedure:
      "Effettuare una prova di lettura della pagina e verificare che sia chiaro lo scopo di ogni sezione della pagina, l'ordine e la correlazione tra le informazioni.",
    type: "M",
    tags: ["contenuto", "struttura", "testo", "semantica"],
  },
  {
    index: 140,
    level: "A",
    title: "Monosensorialità delle informazioni",
    purpose:
      "Verificare che le informazioni fornite per operare sul contenuto non si basino unicamente su caratteristiche sensoriali (colore, forma, posizione, ecc.)",
    procedure:
      "Effettuare una prova di lettura della pagina e verificare che indicazioni operative basate su caratteristiche sensoriali siano disponibili anche in forma testuale equivalente.",
    type: "M",
    tags: ["contenuto", "struttura", "semantica", "alternativa"],
  },
  {
    index: 141,
    level: "A",
    title: "Utilizzo tag title",
    purpose:
      "Verificare l’uso corretto del tag title per descrivere e distinguere le pagine e che sia rispettata la convenzione per cui il titolo deve essere dal particolare al generale (se il titolo viene tagliato l’utente comunque conosce la pagina specifica su cui si trova)",
    procedure:
      "Analizzare il sorgente della pagina e individuare il tag title come figlio del tag head nel codice html. Verificare che non ci sia uno stesso valore per il tag title in altre pagine del sito. Verificare che il titolo della pagina vada dal particolare al generale. Verificare quindi la corretta visualizzazione del titolo della pagina come titolo della scheda del browser. I tool consigliati permettono di evidenziare la presenza o l'assenza del tag title nella pagina e il suo valore.",
    type: "S",
    tags: ["contenuto", "struttura", "html", "lingua", "title", "metadata"],
  },
  {
    index: 142,
    level: "A",
    title: "Scopo collegamenti di contesto",
    purpose: "Verificare che sia chiaro lo scopo dei collegamenti nel contesto in cui sono inseriti",
    procedure:
      "Individuare tutti i collegamenti presenti nella pagina e verificare dal contesto in cui sono inseriti, per esempio nel menu o nel testo principale, che sia chiaro il loro scopo, la pagina o documento destinazione.",
    type: "M",
    tags: ["contenuto", "link", "testo"],
  },
  {
    index: 143,
    level: "A",
    title: "Ordine del focus da tastiera",
    purpose:
      "Verificare che l’ordine con cui viene dato il focus nella navigazione da tastiera sia coerente e corretto",
    procedure:
      "Effettuare una prova di navigazione della pagina da tastiera per verificare l'ordine di attraversamento degli elementi interattivi. Verificare quindi che l'ordine sia corretto e coerente rispetto alla logica della pagina.",
    type: "S",
    tags: ["comportamento", "struttura", "focus"],
  },
  {
    index: 144,
    level: "AA",
    title: "Disposizione elementi ricorrenti",
    purpose:
      "Verificare che elementi ricorrenti nel sito (menu, casella di ricerca, login, registrazione, account, aiuti contestuali, salta al contenuto, torna su, ecc.) siano disposti sempre nella stessa posizione e con lo stesso ordine",
    procedure:
      "Effettuare una prova di navigazione del sito per verificare posizione e ordine degli elementi ricorrenti su più pagine. Verificare quindi che gli elementi che si ripetono siano presentati sempre nello stesso ordine e posizione. Verificare che la stessa coerenza di navigazione sia disponibile anche per le tecnologie assistive.",
    type: "M",
    tags: ["presentazione", "struttura", "contenuto"],
  },
  {
    index: 145,
    level: "AA",
    title: "Corenza e consistenza elementi ricorrenti",
    purpose:
      "Verificare che elementi ricorrenti che rappresentano la stessa funzionalità siano presentati in modo coerente e consistente in tutto il sito (per esempio i link che rispettino la colorazione secondo una convenzione interna)",
    procedure:
      "Effettuare una prova di navigazione del sito per verificare struttura e forma degli elementi che svolgono funzionalità ricorrenti su più pagine. Verificare quindi che nella rappresentazione di questi elementi siano rispettate le convenzioni interne del sito . Verificare che la stessa coerenza di rappresentazione sia veicolata anche alle tecnologie assistive.",
    type: "M",
    tags: ["presentazione", "struttura", "contenuto"],
  },
  {
    index: 146,
    level: "AA",
    title: "Individuazione pagina attraverso più modalità",
    purpose:
      "Verificare che siano disponibili diverse modalità per individuare una pagina web (table of content, mappa del sito, funzionalità di ricerca, elenco dei link alle pagine del sito)",
    procedure:
      "Analizzare la pagina all'interno del sito e verificare che questa sia raggiungibile in diversi modi: tramite il menu di navigazione, attraverso la funzionalità di ricerca, tramite una table of content o una sitemap.",
    type: "M",
    tags: ["struttura", "alternativa", "navigazione"],
  },
  {
    index: 147,
    level: "AA",
    title: "Ritorno alla homepage",
    purpose: "Verificare che da ogni pagina sia possibile tornare all’homepage",
    procedure:
      "Effettuare una prova di navigazione del sito e verificare che da ogni pagina sia possibile tornare all'homepage, per esempio tramite il breadcrumb o il logo del sito.",
    type: "M",
    tags: ["struttura", "navigazione"],
  },
  {
    index: 148,
    level: "AAA",
    title: "Orientamento all'interno di un insieme di pagine",
    purpose:
      "Verificare che sia presente la posizione dell’utente all’interno di un insieme di pagine, per esempio usando il breadcrumb",
    procedure:
      "Analizzare la pagina e verificare che sia disponibile l'indicazione della posizione dell'utente su quella pagina rispetto alla struttura del sito.",
    type: "M",
    tags: ["struttura", "navigazione"],
  },
  {
    index: 149,
    level: "AAA",
    title: "Ruolo delle pagine",
    purpose:
      "Verificare che per l’utente sia chiaro il ruolo di ogni sezione della pagina (come effettuare il login, registrazione, come navigare i contenuti, ecc.)",
    procedure:
      "Analizzare la pagina ed effettuare una prova di utilizzo. Verificare che sia chiaro lo scopo e le funzionalità offerte da ciascuna sezione.",
    type: "M",
    tags: ["struttura", "contenuto", "navigazione"],
  },
  {
    index: 150,
    level: "N.A.",
    title: "Pagina 404",
    purpose: "Verificare la presenza di una pagina 404 che aiuti l’utente a proseguire la navigazione",
    procedure:
      "Analizzare la pagina 404 del sito e verificare che questa sia sufficientemente chiara per l'utente per continuare la navigazione e trovare l'informazione cercata senza provocargli disagio.",
    type: "M",
    tags: ["struttura", "contenuto", "navigazione"],
  },
  {
    index: 151,
    level: "A",
    title: "Autenticazione basata su test cognitivi",
    purpose:
      "Verificare che il processo di autenticazione basato su test cognitivi abbia alternative non basate su test cognitivi o un meccanismo di assistenza",
    procedure:
      "Rendere il processo di autenticazione accessibile. Se il processo è basato su un test cognitivo dev'essere presente almeno un metodo alternativo non basato su un metodo cognitivo o un meccanismo di assistenza per completare il test.",
    type: "M",
    tags: ["comportamento", "autenticazione"],
  },
  {
    index: 152,
    level: "AA",
    title: "Trascinamento e click",
    purpose: "Verificare che il trascinamento sia  sostituibile da singolo click",
    procedure: "Una funzionalità che utilizza un movimento di trascinamento dev'essere completata con un singolo click",
    type: "M",
    tags: ["comportamento", "click", "trascinamento"],
  },
  {
    index: 153,
    level: "A",
    title: "Aiuti consistenti",
    purpose: "Verificare la presenza di aiuti consistenti",
    procedure: "Se presente una maniera o un'informazione che consente di trovare aiuto, essa dev'essere raggiungibile",
    type: "M",
    tags: ["comportamento", "struttura", "navigazione"],
  },
  {
    index: 154,
    level: "A",
    title: "Page breaker navigabili",
    purpose: "Verificare che i page braker siano navigabili",
    procedure: "Se presente un page break locator, dev'essere presente un meccanismo per navigare in ogni locator",
    type: "M",
    tags: ["comportamento", "struttura", "navigazione"],
  },
  {
    index: 155,
    level: "AA",
    title: "Contrasto del focus - base",
    purpose: "Verificare contrasto del focus del componente",
    procedure:
      "Analizza il colore del focus: esso deve avere almeno un contrasto 3:1 tra componente focalizzato e componente non focalizzato",
    type: "M",
    tags: ["presentazione", "focus", "colore", "contrasto"],
  },
  {
    index: 156,
    level: "AA",
    title: "Outline e dimensione del focus - base",
    purpose: "Verificare outline e dimensione focus",
    procedure:
      "Focus: outline di almeno 1px più spesso del perimentro non focalizzao o l'area più spessa di 4px nel lato più corto e in ogni caso non eno di 2px",
    type: "M",
    tags: ["presentazione", "focus", "outline", "colore", "contrasto"],
  },
  {
    index: 157,
    level: "AA",
    title: "Outline e dimensione del focus - avanzato",
    purpose: "Verificare outline e dimensione focus",
    procedure:
      "Focus: contrasto tral'area focalizzata e colori adiacenti deve essere almeno di 3:1 o l'area deve avere perlomeno uno spessore di 2px",
    type: "M",
    tags: ["presentazione", "focus", "outline", "colore", "contrasto"],
  },
  {
    index: 158,
    level: "AA",
    title: "Contrasto focus e elementi adiacenti",
    purpose: "Verificare contrasto del focus tra componente e elementi adiacenti",
    procedure: "Focus: gli elementi focalizzati non sono nascosti interamente da altri elementi",
    type: "M",
    tags: ["presentazione", "focus", "colore", "contrasto"],
  },
  {
    index: 159,
    level: "AAA",
    title: "Contrasto del focus - avanzato",
    purpose: "Verificare contrasto del focus del componente",
    procedure: "Focus: almeno un contrasto 4:5:1 tra componente focalizzato e componente non focalizzato",
    type: "M",
    tags: ["presentazione", "focus", "colore", "contrasto"],
  },
  {
    index: 160,
    level: "AAA",
    title: "Dimensione focus",
    purpose: "Verificare dimensione focus",
    procedure: "Verifica che nel focus l'area di contrasto almeno metà dell'area",
    type: "M",
    tags: ["presentazione", "focus", "stile", "contrasto"],
  },
  {
    index: 161,
    level: "AAA",
    title: "Visibilità elementi focalizzati",
    purpose: "Verificare visibilità parziale degli elementi focalizzati",
    procedure: "Focus: gli elementi focalizzati non sono nascosti nemmeno parzialmente da altri elementi",
    type: "M",
    tags: ["presentazione", "focus"],
  },
  {
    index: 162,
    level: "AA",
    title: "Visibilità informazioni",
    purpose: "Verificare visibilità informazioni",
    procedure: "L'utente deve sapere quando dei componenti  diventano visibili dopo azioni di  hover, focus o click",
    type: "M",
    tags: ["presentazione", "focus", "click", "hover", "focus"],
  },
  {
    index: 163,
    level: "AA",
    title: "Dimensioni e offset target-area",
    purpose: "Verificare dimensioni e offset area target",
    procedure: "Target area di almeno 24 per 24 px.",
    type: "M",
    tags: ["presentazione", "stile", "offset", "target"],
  },
  {
    index: 164,
    level: "A",
    title: "Inserimenti di dati ridondanti",
    purpose: "Verificare inserimenti di dati ridondanti richiesti all'utente",
    procedure:
      "Informazioni già inserite dall'utente o fornite all'utente nello stesso processo devono poter essere: auto popolate o fornite come selezione all'utente;",
    type: "M",
    tags: ["comportamento", "contenuto", "dati"],
  },
]);

const countTools = db.tools.countDocuments();
print("Numero totale di tools inseriti: " + countTools);

countTools = db.toolclasses.countDocuments();
print("Numero totale di toolclasses inseriti: " + countTools);

countTools = db.licenses.countDocuments();
print("Numero totale di licenses inseriti: " + countTools);

countTools = db.myths.countDocuments();
print("Numero totale di myths inseriti: " + countTools);

countTools = db.criterions.countDocuments();
print("Numero totale di criterions inseriti: " + countTools);

countTools = db.tests.countDocuments();
print("Numero totale di tests inseriti: " + countTools);
