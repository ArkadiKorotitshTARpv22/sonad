function randomSyna(){
    const synad=[
        'teostus',
        'algoritm',
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
        'parandamine',
        //koskmudel,agiilne mudel,spiraalne mudel,inkrementaalne mudel,nõudmised,realiseerimine,testimine,integreerimine,kasutamine,hooldus,eelised,puudused,elutsükkel,arendamine,valideerimine
    ];
    //random synad
    const juhuslikSyna=Math.floor(Math.random()*synad.length);

    //võtame random sõnad massivist
    const syna=synad[juhuslikSyna];
    //lisame html-lehele
    document.getElementById("random-syna").innerHTML=syna;
}

function answerSyna(){
    let syna=document.getElementById("random-syna")
    let answerbox=document.getElementById("kontroll")
    let result=document.getElementById("vastus")
    if (syna.innerHTML==='teostus' && answerbox.value.toLowerCase()==='реализация'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='algoritm' && answerbox.value.toLowerCase()==='алгоритм'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='kavand' && answerbox.value.toLowerCase()==='проект'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='kasutajaliides' && answerbox.value.toLowerCase()==='интерфейс пользователя'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='mudel' && answerbox.value.toLowerCase()==='модель'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='andmebaasi skeem' && answerbox.value.toLowerCase()==='схема базы данных'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='standart' && answerbox.value.toLowerCase()==='стандарт'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='tsükkel' && answerbox.value.toLowerCase()==='цикл'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='andmetöötlus' && answerbox.value.toLowerCase()==='обработка данных'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='andmestruktuur' && answerbox.value.toLowerCase()==='структура данных'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='arenduskeskkond' && answerbox.value.toLowerCase()==='среда разработки'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='projektihaldus tööriist' && answerbox.value.toLowerCase()==='инструмент управления проектами'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='kavandamine' && answerbox.value.toLowerCase()==='планирование'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='iteratsioon' && answerbox.value.toLowerCase()==='итерация'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='parandus' && answerbox.value.toLowerCase()==='коррекция'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else if (syna.innerHTML==='parandamine' && answerbox.value.toLowerCase()==='коррекция'){
        result.innerHTML='õige'
        result.style.color="green"
    }
    else {
        result.innerHTML='vale'
        result.style.color="red"
    }
}
