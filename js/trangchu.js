(()=>{
    const $ = document.querySelector.bind(document);
    let timer = 7000;
    let isRotating =false;
    let currentRotate = 0;
    const wheel = $('.wheel');
    const btnStart = $('.btn-start');
    const msg = $('.msg');
    
    const listGift = [
        {
            txtName : ' Đi Nhà nghĩ',
            percent: 15/100
        },
        {
            txtName : ' Đi Tô Tượng',
            percent: 5/100
        },
        {
            txtName : ' Đi Cà Phê',
            percent: 15/100
        },
        {
            txtName : 'Đi Dạo Công Viên',
            percent: 15/100
        },
        {
            txtName : 'Đi Chill',
            percent: 10/100
        },
        {
            txtName : 'ĐI Đón Bình Minh',
            percent: 10/100
        },
        {
            txtName : 'Đi Đón Hoàng Hôn',
            percent: 10/100
        },
        {
            txtName : 'Đi Biển',
            percent: 10/100
        },
        {
            txtName : 'Ở Nhà',
            percent: 5/100
        },
        {
            txtName : 'Đi Phượt',
            percent: 5/100
        }
    ]

    const size = listGift.length;
    const rotate = 360/size; // số góc phần thưởng chiếm trong vòng quay
    const skewY = 90 - rotate;// độ nghiêng của 1 item
    const renderItem = () =>{
        listGift.forEach((item, index)=>{
          const itemGift = document.createElement('li');
          itemGift.style.transform = `
          rotate(${rotate*index}deg)
          skewY(-${skewY}deg)`;
          itemGift.innerHTML = `
          <h1 class = "text-item ${index % 2 == 0 && 'even'} "
          style="transform: skewY(${skewY}deg) 
          rotate(${rotate / 2}deg)"
          >
          <b> ${item.txtName}<b>
          </h1>
          `;
          wheel.appendChild(itemGift);
        });
    };

    const rotateWheel = (currentRotate,index)=>{
        wheel.style.transform = `rotate(${
        currentRotate - index * rotate - rotate / 2
     }deg)`;
    };
    const getGift = randomNumber => {
        let currentPercent = 0;
        let list = [];
        listGift.forEach((item,index) =>{
            currentPercent += item.percent;
            randomNumber <= currentPercent&&
            list.push({
                ...item,
                index,
            });
        });
        return list[0];
    };
    const showTxtGift = txt=>{
        setTimeout(()=>{
            isRotating = false;
            msg.innerHTML = `Chúc mừng công túa đã chọn trúng: ${txt}`
        },timer);

    }
    const start = () =>{
        isRotating =true;
        const random = Math.random();
        const gift = getGift(random);
        console.log(gift);
        currentRotate += 360*10;
        rotateWheel(currentRotate, gift.index);
        showTxtGift(gift.txtName);

    };
    btnStart.addEventListener('click', () =>{
        !isRotating && start();
    });

    renderItem();
})();