$(function() {
    // 页面渲染
    $.ajax({
        url: "../data/list.json",
        type: "get",
        dataType: "json",
        success: function(data) {
            $('#main').append(`
            <div class="content1">
            <div class="c1 container ">
            <h2>${data[0].listTitle[0]}</h2>
           <div>
               <h3>${data[0].listH3[0]}</h3>
               <ul class="clearfix">
                   <div class="box">
                       <div>
                           <img src=" ${data[0].listImg[0].img1}" alt="">
                           <img src=" ${data[0].listImg[0].img2}" alt="">
                       </div>
                       <div>
                           <p> ${data[0].listP[0]}</p>
                           <span>${data[0].listSpan[0]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[1].img1}" alt="">
                           <img src="${data[0].listImg[1].img2}" alt="">
                       </div>
                       <div>
                           <p>${data[0].listP[1]}</p>
                           <span>${data[0].listSpan[1]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[2].img1}" alt="">
                           <img src="${data[0].listImg[2].img2}" alt="">
                       </div>
                       <div>
                           <p>
                           ${data[0].listP[2]}</p>
                           <span>${data[0].listSpan[2]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[3].img1}" alt="">
                           <img src="${data[0].listImg[3].img2}" alt="">
                       </div>
                       <div>
                           <p>${data[0].listP[3]}</p>
                           <span>${data[0].listSpan[3]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src=" ${data[0].listImg[4].img1}" alt="">
                           <img src=" ${data[0].listImg[4].img2}" alt="">
                       </div>
                       <div>
                           <p> ${data[0].listP[4]}</p>
                           <span>${data[0].listSpan[4]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[5].img1}" alt="">
                           <img src="${data[0].listImg[5].img2}" alt="">
                       </div>
                       <div>
                           <p>${data[0].listP[5]}</p>
                           <span>${data[0].listSpan[5]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[6].img1}" alt="">
                           <img src="${data[0].listImg[6].img2}" alt="">
                       </div>
                       <div>
                           <p>
                           ${data[0].listP[6]}</p>
                           <span>${data[0].listSpan[6]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[7].img1}" alt="">
                           <img src="${data[0].listImg[7].img2}" alt="">
                       </div>
                       <div>
                           <p>${data[0].listP[7]}</p>
                           <span>${data[0].listSpan[7]}</span>
                       </div>
                   </div>
               </ul>
           </div>
            </div>
        </div>
        <div class="content1 bgw">
        <div class="c1 container ">
            <h2></h2>
            <div>
                <h3>${data[0].listH3[2]}</h3>
                <ul class="clearfix">
                   <div class="box">
                       <div>
                           <img src=" ${data[0].listImg[15].img1}" alt="">
                           <img src=" ${data[0].listImg[15].img2}" alt="">
                       </div>
                       <div>
                           <p> ${data[0].listP[15]}</p>
                           <span>${data[0].listSpan[15]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[11].img1}" alt="">
                           <img src="${data[0].listImg[11].img2}" alt="">
                       </div>
                       <div>
                           <p>${data[0].listP[11]}</p>
                           <span>${data[0].listSpan[11]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[13].img1}" alt="">
                           <img src="${data[0].listImg[13].img2}" alt="">
                       </div>
                       <div>
                           <p>
                           ${data[0].listP[13]}</p>
                           <span>${data[0].listSpan[13]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[12].img1}" alt="">
                           <img src="${data[0].listImg[12].img2}" alt="">
                       </div>
                       <div>
                           <p>${data[0].listP[12]}</p>
                           <span>${data[0].listSpan[12]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src=" ${data[0].listImg[4].img1}" alt="">
                           <img src=" ${data[0].listImg[4].img2}" alt="">
                       </div>
                       <div>
                           <p> ${data[0].listP[4]}</p>
                           <span>${data[0].listSpan[4]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[5].img1}" alt="">
                           <img src="${data[0].listImg[5].img2}" alt="">
                       </div>
                       <div>
                           <p>${data[0].listP[5]}</p>
                           <span>${data[0].listSpan[5]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[6].img1}" alt="">
                           <img src="${data[0].listImg[6].img2}" alt="">
                       </div>
                       <div>
                           <p>
                           ${data[0].listP[6]}</p>
                           <span>${data[0].listSpan[6]}</span>
                       </div>
                   </div>
                   <div class="box">
                       <div>
                           <img src="${data[0].listImg[7].img1}" alt="">
                           <img src="${data[0].listImg[7].img2}" alt="">
                       </div>
                       <div>
                           <p>${data[0].listP[7]}</p>
                           <span>${data[0].listSpan[7]}</span>
                       </div>
                   </div>
               </ul>
            </div>
        </div>
    </div>
    <div class="content1 bgw">
    <div class="c1 container">
        <h2></h2>
        <div>
        <h3>${data[0].listH3[1]}</h3>
        <ul class="clearfix">
           <div class="box">
               <div>
                   <img src=" ${data[0].listImg[8].img1}" alt="">
                   <img src=" ${data[0].listImg[8].img2}" alt="">
               </div>
               <div>
                   <p> ${data[0].listP[8]}</p>
                   <span>${data[0].listSpan[8]}</span>
               </div>
           </div>
           <div class="box">
               <div>
                   <img src="${data[0].listImg[9].img1}" alt="">
                   <img src="${data[0].listImg[9].img2}" alt="">
               </div>
               <div>
                   <p>${data[0].listP[9]}</p>
                   <span>${data[0].listSpan[9]}</span>
               </div>
           </div>
           <div class="box">
               <div>
                   <img src="${data[0].listImg[10].img1}" alt="">
                   <img src="${data[0].listImg[10].img2}" alt="">
               </div>
               <div>
                   <p>
                   ${data[0].listP[10]}</p>
                   <span>${data[0].listSpan[10]}</span>
               </div>
           </div>
           <div class="box">
               <div>
                   <img src="${data[0].listImg[11].img1}" alt="">
                   <img src="${data[0].listImg[11].img2}" alt="">
               </div>
               <div>
                   <p>${data[0].listP[11]}</p>
                   <span>${data[0].listSpan[11]}</span>
               </div>
           </div>
           <div class="box">
               <div>
                   <img src=" ${data[0].listImg[12].img1}" alt="">
                   <img src=" ${data[0].listImg[12].img2}" alt="">
               </div>
               <div>
                   <p> ${data[0].listP[12]}</p>
                   <span>${data[0].listSpan[12]}</span>
               </div>
           </div>
           <div class="box">
               <div>
                   <img src="${data[0].listImg[13].img1}" alt="">
                   <img src="${data[0].listImg[13].img2}" alt="">
               </div>
               <div>
                   <p>${data[0].listP[13]}</p>
                   <span>${data[0].listSpan[13]}</span>
               </div>
           </div>
           <div class="box">
               <div>
                   <img src="${data[0].listImg[14].img1}" alt="">
                   <img src="${data[0].listImg[14].img2}" alt="">
               </div>
               <div>
                   <p>
                   ${data[0].listP[14]}</p>
                   <span>${data[0].listSpan[14]}</span>
               </div>
           </div>
           <div class="box">
               <div>
                   <img src="${data[0].listImg[15].img1}" alt="">
                   <img src="${data[0].listImg[15].img2}" alt="">
               </div>
               <div>
                   <p>${data[0].listP[15]}</p>
                   <span>${data[0].listSpan[15]}</span>
               </div>
           </div>
       </ul>
        </div>
    </div>
</div>
           `)

        }
    })
})