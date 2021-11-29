var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
var listbgrSlidebar = [
    ,"url(https://vcdn-thethao.vnecdn.net/2021/11/18/World-Rugby-7s-Day-2-2624-jpeg-2892-3047-1637201968.jpg)"
    ,"url(https://static.straitstimes.com.sg/s3fs-public/articles/2014/10/13/stadium13e_2x.jpg)"
    ,"url(https://upload.wikimedia.org/wikipedia/commons/0/09/Football_match_at_Singapore_stadium.JPG)"
    ,"url(https://a.cdn-hotels.com/gdcs/production167/d1060/b7997373-cc09-43b8-bc38-4bdebe487d10.jpg)"
]
var bgrSlidebar = $('#slidebar .bgrSlidebar')
let indexSlide = 1
bgrSlidebar.style.backgroundImage = listbgrSlidebar[indexSlide]
// console.log(bgrSlidebar.style.backgroundImage)
setInterval(function(){
    if(indexSlide==listbgrSlidebar.length) indexSlide = 1;
    bgrSlidebar.style.backgroundImage = listbgrSlidebar[indexSlide]
    indexSlide++ 
},3000)
////////////////////////////
HistoryItemYear = $$('#history .HistoryItemYear')
HistoryImgCountry = $$('#history .HistoryImgCountry')
HistoryItemYear.forEach(function(course,index){
    course.onclick  = function(){
        $('#history .HistoryItemYearActive').classList.remove('HistoryItemYearActive')
        HistoryItemYear[index].classList.add('HistoryItemYearActive')
        // HistoryItemYear[0].classList.remove('HistoryItemYearActive')
        $('#history  .HistoryImgCountryActive ').classList.remove('HistoryImgCountryActive')
        HistoryImgCountry[index].classList.add('HistoryImgCountryActive')
    }
})
///////////////////////////

var listImgTeams = [
    "url(https://media.urbanistnetwork.com/saigoneer/article-images/2019/Apr/5/VietnamNationalTeam_SGRb.jpg)"
    ,"url(https://image.thanhnien.vn/w1024/Uploaded/2021/ycivopcg/2021_08_26/u23thailan_bzyg.jpg)"
    ,"url(https://assets2.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/66E7D58A6E10430B95CA818775C21017/43950506_572553733175200_7903267195084341248_n.jpg)"
    , "url(https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0c973d27e868c971/60de75eea7307e39e4e8b576/7571cdad4e235a2e31d0761170e5412adbc07675.jpg?auto=webp&fit=crop&format=jpg&quality=100)"
, "url(https://images.daznservices.com/di/library/GOAL/4f/ad/adam-nor-azlin-malaysia-v-nepal-2-jun-2019_4x4xmiw49we71old7355jiuqz.jpg?t=462554323&quality=100)"
, "url(https://s.yimg.com/uu/api/res/1.2/Hir40F9UvLAfcjMmwPJyVg--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/1f1f98e2271faa39d819f7e98fe544df)"
, "url(https://sports442.com/files/gialong/2021/05/13/timnas-indonesia_1dg140juetlmg1qajvii5613zd-1019.jpg)"
, "url(https://pbs.twimg.com/media/EK_5bgJWkAIAzu7.jpg)"
, "url(https://football-tribe.com/vietnam/wp-content/uploads/sites/11/2017/05/0d2794eb370a22a07d2ec7c849bd7653.jpg)"
, "url(https://static01.nyt.com/images/2017/01/21/sports/21TIMOR/21TIMOR-superJumbo.jpg)"
]
$('#teams .HistoryImgCountry').style.backgroundImage=listImgTeams[0] 
// console.log(bgrTeams)
var listTeams = $$('#teams .HistoryItemYear')
listTeams.forEach(function(course,index){
    course.onclick  = function(){
        console.log(index)
        $('#teams .HistoryItemYearActive').classList.remove('HistoryItemYearActive')
        listTeams[index].classList.add('HistoryItemYearActive')
        $('#teams .HistoryImgCountry').style.backgroundImage = listImgTeams[index]
    }
})