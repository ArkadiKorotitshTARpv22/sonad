//eesti sõnad list
const synad = [
    'teostus',
    'algorütm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihaldus tööriist',
    'kavandamine',
    'iteratsioon',
    'parandus',
    'koskmudel',
    'agiilne mudel',
    'spiiralne mudul',
    'inkrementaalne mudel',
    'nõudmised',
    'reliseerimine',
    'testimine',
    'integreerimine',
    'kasutamine',
    'eelised',
    'puudused',
    'elutsükkel',
    'arendamine',
    'validerimine'
];

//vene sõnad list
const venesynad = [
    'реализация',
    'алгоритм',
    'план',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'исправление',
    'каскмодель',
    'гибкая модель',
    'пространственная модель',
    'Инкрементальная модель',
    'требования',
    'переселение',
    'тестирование',
    'интеграция',
    'использование',
    'выгоды',
    'недостатки',
    'Циклжизни',
    'разработка',
    'подтверждение'
];

//genereerib juhusliku eestikeelse sõna nimekirjast
function randomSyna() {
    const juhuslikSyna = Math.floor(Math.random() * synad.length);
    const syna = synad[juhuslikSyna];
    document.getElementById("random-sona").innerHTML = syna;
}
//genereerib juhusliku venekeelse sõna nimekirjast
function randomSynaRU() {
    const juhuslikSona = Math.floor(Math.random() * venesynad.length);
    const syna = venesynad[juhuslikSona];
    document.getElementById("random-vene-sona").innerHTML = syna;
}

//kontrollib eestikeelsete sõnade vastust
function answerSyna() {
    const syna = document.getElementById("random-sona").innerText;
    const venesyna = document.getElementById("kontroll").value.toLowerCase();
    const indEesti = synad.indexOf(syna);
    const indVene = venesynad.indexOf(venesyna);
    if (indEesti === indVene && indEesti !== -1 && indVene !== -1) {
        document.getElementById("vastus2").innerHTML = "Õige";
        document.getElementById("vastus2").style.color = "green"
    } else {
        document.getElementById("vastus2").innerHTML = "Vale";
        document.getElementById("vastus2").style.color = "red"
    }
}
//kontrollib venekeelsete sõnade vastust
function answerSynaRU() {
    const syna = document.getElementById("random-vene-sona").innerText;
    const eestisona = document.getElementById("kontrollru").value.toLowerCase();
    const indEesti = synad.indexOf(eestisona);
    const indVene = venesynad.indexOf(syna);
    if (indEesti === indVene && indEesti !== -1 && indVene !== -1) {
        document.getElementById("vastusru").innerHTML = "Õige";
        document.getElementById("vastusru").style.color = "green"
    } else {
        document.getElementById("vastusru").innerHTML = "Vale";
        document.getElementById("vastusru").style.color = "red"
    }
}