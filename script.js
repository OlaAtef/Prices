const product = [
    {
        id: 0,
        image:'./images/product1.jpeg' ,
        title: 'Biotest',
        price: 270,
    },
    {
        id: 1,
        image:'./images/product2.jpg' ,
        title: 'شرائط سكر Safe-Accu',
        price: 250,
    },
    {
        id: 2,
        image:'./images/product3.png' ,
        title: 'حزام بطن',
        price: 90,
    },
    {
        id: 3,
        image:'./images/product4.webp' ,
        title: 'TUORen',
        price: 550,
    },
    {
        id: 4,
        image:'./images/product5.jpeg' ,
        title: 'GlucoDr.auto',
        price: 550,
    },
    {
        id: 5,
        image:'./images/product6.jpg' ,
        title: 'جاونتي لاتكس العلبة',
        price: 175,
    },
    {
        id: 6,
        image:'./images/product7.png' ,
        title: 'Pulse',
        price: 225,
    },
    {
        id: 7,
        image:'./images/product8.webp' ,
        title: 'ماسك فنتوري',
        price: 50,
    },
    {
        id: 8,
        image:'./images/product9.jpeg' ,
        title: ' Tempo تيمبو كول',
        price: 30,
    },
    {
        id: 9,
        image:'./images/product10.jpg' ,
        title: 'قسطره وريديه مركزيه  ',
        price: 380,
    },
    {
        id: 10,
        image:'./images/product11.png' ,
        title: 'انبوبة حنجرية',
        price: 50,
    },
    {
        id: 11,
        image:'./images/product12.jpeg' ,
        title: 'خلاعة دبابيس',
        price: 100,
    },
    {
        id: 12,
        image:'./images/product13.jpg' ,
        title: 'scrub',
        price: 200,
    },
    {
        id: 13,
        image:'./images/product14.png' ,
        title: 'بون واكس القطعة',
        price: 65,
    },
    {
        id: 14,
        image:'./images/product15.jpeg' ,
        title: 'شرائط سكر GlucoDr',
        price: 350,
    },
    {
        id: 15,
        image:'./images/product16.jpg' ,
        title: 'جهاز سكر',
        price: 270,
    },
    {
        id: 16,
        image:'./images/product17.jpg' ,
        title: 'ماسك عالي الكفاءه',
        price: 50,
    },
    {
        id: 17,
        image:'./images/product18.jpg' ,
        title: 'شرائط سكر كليفر تشيك',
        price: 300,
    },
    {
        id: 18,
        image:'./images/product19.jpg' ,
        title: 'ساند رقبة',
        price: 60,
    },
    {
        id: 19,
        image:'./images/product20.jpg' ,
        title: 'حزام ظهر',
        price: 90,
    },
    {
        id: 20,
        image:'./images/product21.jpg' ,
        title: 'شرائط On Call Plus',
        price: 300,
    },
    {
        id: 21,
        image:'./images/product22.jpg' ,
        title: 'جهاز وريد',
        price: 15,
    },
    {
        id: 22,
        image:'./images/product23.jpg' ,
        title: 'سبيروميتر',
        price: 60,
    },
    {
        id: 23,
        image:'./images/product25.jpg' ,
        title: 'سماعة GRANZIA',
        price: 200,
    },
    {
        id: 24,
        image:'./images/product26.jpg' ,
        title: 'ARVEA k.y جيل',
        price: 15,
    },
    {
        id: 25,
        image:'./images/product27.jpg' ,
        title: 'شكاكة سكر العلبة',
        price: 35,
    },
    {
        id: 26,
        image:'./images/product28.jpg' ,
        title: 'GOWN جاون طبيب',
        price: 20,
    },
    {
        id: 27,
        image:'./images/product29.jpg' ,
        title: 'كانيولا القطعة',
        price: 15,
    },
    {
        id: 28,
        image:'./images/product30.jpg' ,
        title: 'Product ',
        price: '???',
    },
    {
        id: 29,
        image:'./images/product31.jpg' ,
        title: 'كانيولات القطعة',
        price: 15,
    },
    // {
    //     id: 30,
    //     image:'./images/product32.jpg' ,
    //     title: 'tray',
    //     price: 130,
    // },
    {
        id: 31,
        image:'./images/product33.jpg' ,
        title: 'flowers',
        price: 133,
    },
    {
        id: 32,
        image:'./images/product34.jpg' ,
        title: 'برمنجنات بوناسيوم القطعة',
        price: 10,
    },
    {
        id: 33,
        image:'./images/product35.jpg' ,
        title: 'ماء اوكسجين نركيزات القطعة',
        price: 10,
    },
    {
        id: 34,
        image:'./images/product36.jpg' ,
        title: ' برولين القطعة',
        price: 50,
    },
    {
        id: 35,
        image:'./images/product37.jpg' ,
        title: 'فيكريل القطعة',
        price: 65,
    },
    {
        id: 36,
        image:'./images/product38.jpg' ,
        title: 'فيكريل القطعة',
        price: 65,
    },
    {
        id: 37,
        image:'./images/product39.jpg' ,
        title: ' برولين القطعة',
        price: 50,
    },
    {
        id: 38,
        image:'./images/product40.png' ,
        title: 'انبوبة شق حنجري القطعة',
        price: 300,
    },
    {
        id: 39,
        image:'./images/product41.jpg' ,
        title: 'قطن الكيلو',
        price: 100,
    },
    // {
    //     id: 40,
    //     image:'./images/product42.jpg' ,
    //     title: 'tray',
    //     price: 130,
    // },
    {
        id: 41,
        image:'./images/product43.jpg' ,
        title: 'كلبس مراره القطعة',
        price: 150,
    },
    {
        id: 42,
        image:'./images/product44.png' ,
        title: 'جيل فوم القطعة',
        price: 115,
    },
    {
        id: 43,
        image:'./images/product45.jpg' ,
        title: 'دباسه جلد',
        price: 220,
    },
    {
        id: 44,
        image:'./images/product46.jpg' ,
        title: 'ساند ابهام',
        price: 50,
    },
    {
        id: 45,
        image:'./images/product47.jpg' ,
        title: 'انكل',
        price: 40,
    },
    {
        id: 46,
        image:'./images/product48.jpg' ,
        title: 'ركبة',
        price: 40,
    },
    {
        id: 47,
        image:'./images/product49.jpg' ,
        title: 'حامل خصيه',
        price: 50,
    },
    {
        id: 48,
        image:'./images/product50.jpg' ,
        title: 'EG-VAC شفاط ذاتي',
        price: 100,
    },
    {
        id: 49,
        image:'./images/product51.jpg' ,
        title: 'سرنجات القطعة',
        price: 2,
    },
    // {
    //     id: 50,
    //     image:'./images/product52.jpg' ,
    //     title: 'tray',
    //     price: 130,
    // },
    {
        id: 51,
        image:'./images/product53.jpg' ,
        title: 'شده جلديه القطعة',
        price: 60,
    },
    {
        id: 52,
        image:'./images/product54.jpg' ,
        title: 'Product ',
        price: '???',
    },
    {
        id: 53,
        image:'./images/product55.jpg' ,
        title: 'اربة مياه',
        price: 70,
    },
    {
        id: 54,
        image:'./images/product56.jpg' ,
        title: 'رباط ضغط 10 سم ',
        price: 15,
    },
    {
        id: 55,
        image:'./images/product56.jpg' ,
        title: 'رباط ضغط 15 سم ',
        price: 20,
    },
    {
        id: 56,
        image:'./images/product57.jpg' ,
        title: 'مشرط القطعة',
        price: 5,
    },
    {
        id: 57,
        image:'./images/product58.jpg' ,
        title: 'حامل ذراع',
        price: 40,
    },
    {
        id: 58,
        image:'./images/product59.jpg' ,
        title: 'بلاستر  2.5 سم',
        price: 25,
    },
    {
        id: 59,
        image:'./images/product59.jpg' ,
        title: 'بلاستر  5 سم',
        price: 40,
    },
    {
        id: 60,
        image:'./images/product59.jpg' ,
        title: 'بلاستر  7.5 سم',
        price: 50,
    },
    {
        id: 61,
        image:'./images/product59.jpg' ,
        title: 'بلاستر  10 سم',
        price: 65,
    },
    {
        id: 62,
        image:'./images/product60.jpg' ,
        title: 'نرمومنر وئبقي القطعة',
        price: 35,
    },
    {
        id: 63,
        image:'./images/product61.jpg' ,
        title: 'رباط ضغط 10 سم ',
        price: 15,
    },
    {
        id: 64,
        image:'./images/product61.jpg' ,
        title: 'رباط ضغط 15 سم ',
        price: 20,
    },
    {
        id: 65,
        image:'./images/product62.jpg' ,
        title: 'شاش',
        price: 8,
    },
    {
        id: 66,
        image:'./images/product63.jpg' ,
        title: 'قطن الكيلو',
        price: 100,
    },
    {
        id: 67,
        image:'./images/product64.jpg' ,
        title: 'ميزان',
        price: 300,
    },
    {
        id: 68,
        image:'./images/product65.jpg' ,
        title: 'ساند رصغ',
        price: 40,
    },
    {
        id: 69,
        image:'./images/product66.jpg' ,
        title: 'حزام ضلوع',
        price: 70,
    },
    {
        id: 70,
        image:'./images/product67.jpg' ,
        title: 'حزام سره',
        price: 50,
    },
    {
        id: 71,
        image:'./images/product68.jpg' ,
        title: 'حامل ذراع',
        price: 40,
    },
    {
        id: 72,
        image:'./images/product69.jpg' ,
        title: 'جيبسونا 10 سم',
        price: 50,
    },
    {
        id: 73,
        image:'./images/product69.jpg' ,
        title: 'جيبسونا 15 سم',
        price: 60,
    },
    {
        id: 74,
        image:'./images/product104.jpg' ,
        title: 'جهاز جلسات ',
        price: 700,
    },
    {
        id: 75,
        image:'./images/product71.jpg' ,
        title: 'جهاز ضغط زئبقي',
        price: 1050,
    },
    {
        id: 76,
        image:'./images/product72.jpg' ,
        title: 'جيبسونا 10 سم',
        price: 50,
    },
    {
        id: 77,
        image:'./images/product73.jpg' ,
        title: 'جيبسونا 15 سم',
        price: 60,
    },
    {
        id: 78,
        image:'./images/product74.jpg' ,
        title: 'جهاز جلسات ',
        price: 700,
    },
    {
        id: 79,
        image:'./images/product75.jpg' ,
        title: 'جهاز ضغط زئبقي',
        price: 1050,
    },
    {
        id: 80,
        image:'./images/product76.jpg' ,
        title: 'جيبسونا 10 سم',
        price: 50,
    },
    {
        id: 81,
        image:'./images/product77.jpg' ,
        title: 'جيبسونا 15 سم',
        price: 60,
    },
    {
        id: 82,
        image:'./images/product78.jpg' ,
        title: 'جهاز جلسات ',
        price: 700,
    },
    {
        id: 83,
        image:'./images/product79.jpg' ,
        title: 'جهاز ضغط زئبقي',
        price: 1050,
    },
    {
        id: 84,
        image:'./images/product80.jpg' ,
        title: 'جيبسونا 10 سم',
        price: 50,
    },
    {
        id: 85,
        image:'./images/product81.jpg' ,
        title: 'جيبسونا 15 سم',
        price: 60,
    },
    {
        id: 86,
        image:'./images/product82.jpg' ,
        title: 'جهاز جلسات ',
        price: 700,
    },
    {
        id: 87,
        image:'./images/product83.jpg' ,
        title: 'جهاز ضغط زئبقي',
        price: 1050,
    },
    {
        id: 88,
        image:'./images/product84.jpg' ,
        title: 'جيبسونا 10 سم',
        price: 50,
    },
    {
        id: 89,
        image:'./images/product85.jpg' ,
        title: 'جيبسونا 15 سم',
        price: 60,
    },
    {
        id: 90,
        image:'./images/product86.jpg' ,
        title: 'جهاز جلسات ',
        price: 700,
    },
    {
        id: 91,
        image:'./images/product87.jpg' ,
        title: 'جهاز ضغط زئبقي',
        price: 1050,
    },
    {
        id: 92,
        image:'./images/product88.jpg' ,
        title: 'جيبسونا 10 سم',
        price: 50,
    },
    {
        id: 93,
        image:'./images/product89.jpg' ,
        title: 'جيبسونا 15 سم',
        price: 60,
    },
    {
        id: 94,
        image:'./images/product90.jpg' ,
        title: 'جهاز جلسات ',
        price: 700,
    },
    {
        id: 95,
        image:'./images/product91.jpg' ,
        title: 'جهاز ضغط زئبقي',
        price: 1050,
    },
    {
        id: 96,
        image:'./images/product92.jpg' ,
        title: 'جهاز جلسات ',
        price: 700,
    },
    {
        id: 97,
        image:'./images/product93.jpg' ,
        title: 'جهاز ضغط زئبقي',
        price: 1050,
    },
    {
        id: 98,
        image:'./images/product94.jpg' ,
        title: 'جيبسونا 10 سم',
        price: 50,
    },
    {
        id: 99,
        image:'./images/product95.jpg' ,
        title: 'جيبسونا 15 سم',
        price: 60,
    },
    {
        id: 100,
        image:'./images/product96.jpg' ,
        title: 'جهاز جلسات ',
        price: 700,
    },
    {
        id: 101,
        image:'./images/product97.jpg' ,
        title: 'جهاز ضغط زئبقي',
        price: 1050,
    },
    {
        id: 102,
        image:'./images/product98.jpg' ,
        title: 'جيبسونا 10 سم',
        price: 50,
    },
    {
        id: 103,
        image:'./images/product99.jpg' ,
        title: 'جيبسونا 15 سم',
        price: 60,
    },
    {
        id: 104,
        image:'./images/product100.jpg' ,
        title: 'جهاز جلسات ',
        price: 700,
    },
    {
        id: 105,
        image:'./images/product101.jpg' ,
        title: 'جهاز ضغط زئبقي',
        price: 1050,
    },
    {
        id: 106,
        image:'./images/product102.jpg' ,
        title: 'جيبسونا 10 سم',
        price: 50,
    },
    {
        id: 107,
        image:'./images/product103.jpg' ,
        title: 'جيبسونا 15 سم',
        price: 60,
    },
]
const categories = [...new Set(product.map((item)=> {return item}))]
document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
    )
    })
    displayItem(filterData)
});

const displayItem = (items)=> {
    document.getElementById('root').innerHTML= items.map((item)=> {
        var {image, title, price} = item;
        return(
            ` <div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>LE ${price}.00</h2>
                </div>
            </div> `
        )
    }).join('')
};
displayItem(categories);