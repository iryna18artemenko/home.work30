const categories = [
    {
        name: "Телефони",
        key: "phones"
    },

    {
        name: "Планшети",
        key: "tablets"
    },
];

const phones = [
    {
        type: "phone",
        name: "Iphone 11", 
        img: "iphone11.jpg",
        infoData: {
            price:"$800",
            key: "Iphone 11",
            screen: "6.7, 2778x1284 (19.5:9), 458 ppi, 60 Гц",
            memory: "256 ГБ, ОЗУ 6 ГБ",
            camera: "4 модуля, 12 МП, + 12 МП", 
            weight: "228 г"
        }
    },

    {
        type: "phone",
        name: "Iphone 12", 
        img: "iphone12.jpg",
        price:"$850",
        infoData: {
            price:"$850",
            key: "Iphone 12",
            screen: "6.1, 2532x1170 (19.5:9), 460 ppi, 60 Гц",
            memory: "128 ГБ, ОЗУ 4 ГБ",
            camera: "2 модуля, 12 МП, + 12 МП", 
            weight: "164 г"
        }
    },

    {
        type: "phone",
        name: "Iphone 13", 
        img: "iphone13.jpg",
        price:"$900",
        infoData: {
            price:"$900",
            key: "Iphone 11",
            screen: "6.7, 2778x1284 (19.5:9), 458 ppi, 60 Гц",
            memory: "256 ГБ, ОЗУ 6 ГБ",
            camera: "4 модуля, 12 МП, + 12 МП", 
            weight: "173 г"
        }
    }
];

const tablets = [
    {
        type: "tablet",
        name: "Ipad 10.2", 
        img: "ipad10.2.jpg",
        price:"$800",
        infoData: {
            price:"$800",
            key: "Ipad 10.2",
            screen: "250.6 x 174.1 x 7.5 мм",
            memory: "64 ГБ, ОЗУ 4 ГБ",
            camera: " 12 МП", 
            weight: "490 г"
        }

    },

    {
        type: "tablet",
        name: "Ipad 11", 
        img: "ipad11.jpg",
        price:"$850",
        infoData: {
            price:"$850",
            key: "Ipad 11",
            screen: "11 in, IPS, 2388 x 1668 пикселей, 24 бит",
            memory: "8 ГБ, 16 ГБ",
            camera: "4 модуля, 12 МП, + 12 МП", 
            weight: "466 г"
        }
    },

    {
        type: "tablet",
        name: "Ipad 12.9", 
        img: "ipad12.9.jpg",
        price:"$900",
        infoData: {
            price:"$900",
            key: "Ipad 12.9",
            screen: " 12.9 in, IPS, 2732 x 2048 пикселей, 24 бит",
            memory: " 8 ГБ, 16 ГБ",
            camera: "12 МП", 
            weight: "682 г"
        }
    }
];

const entities = {categories, phones, tablets}