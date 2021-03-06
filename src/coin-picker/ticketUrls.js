// const BASE = 'http://103.77.27.59/static/img/tambola/'
const BASE = '/static/media/tickets/'

let ticketUrls = [
    { 'name': '00252.jpg', 'is_downloaded': false },
    { 'name': '00614.jpg', 'is_downloaded': false },
    { 'name': '01273.jpg', 'is_downloaded': false },
    { 'name': '01533.jpg', 'is_downloaded': false },
    { 'name': '01032.jpg', 'is_downloaded': false },
    { 'name': '01572.jpg', 'is_downloaded': false },
    { 'name': '00694.jpg', 'is_downloaded': false },
    { 'name': '00553.jpg', 'is_downloaded': false },
    { 'name': '01751.jpg', 'is_downloaded': false },
    { 'name': '00934.jpg', 'is_downloaded': false },
    { 'name': '01251.jpg', 'is_downloaded': false },
    { 'name': '01531.jpg', 'is_downloaded': false },
    { 'name': '00451.jpg', 'is_downloaded': false },
    { 'name': '01474.jpg', 'is_downloaded': false },
    { 'name': '00814.jpg', 'is_downloaded': false },
    { 'name': '00793.jpg', 'is_downloaded': false },
    { 'name': '00592.jpg', 'is_downloaded': false },
    { 'name': '01092.jpg', 'is_downloaded': false },
    { 'name': '00133.jpg', 'is_downloaded': false },
    { 'name': '00812.jpg', 'is_downloaded': false },
    { 'name': '00551.jpg', 'is_downloaded': false },
    { 'name': '00014.jpg', 'is_downloaded': false },
    { 'name': '00693.jpg', 'is_downloaded': false },
    { 'name': '00173.jpg', 'is_downloaded': false },
    { 'name': '00654.jpg', 'is_downloaded': false },
    { 'name': '00434.jpg', 'is_downloaded': false },
    { 'name': '00933.jpg', 'is_downloaded': false },
    { 'name': '01731.jpg', 'is_downloaded': false },
    { 'name': '00474.jpg', 'is_downloaded': false },
    { 'name': '01313.jpg', 'is_downloaded': false },
    { 'name': '01434.jpg', 'is_downloaded': false },
    { 'name': '01193.jpg', 'is_downloaded': false },
    { 'name': '01571.jpg', 'is_downloaded': false },
    { 'name': '00412.jpg', 'is_downloaded': false },
    { 'name': '01111.jpg', 'is_downloaded': false },
    { 'name': '00554.jpg', 'is_downloaded': false },
    { 'name': '00034.jpg', 'is_downloaded': false },
    { 'name': '00931.jpg', 'is_downloaded': false },
    { 'name': '01711.jpg', 'is_downloaded': false },
    { 'name': '00314.jpg', 'is_downloaded': false },
    { 'name': '01774.jpg', 'is_downloaded': false },
    { 'name': '01271.jpg', 'is_downloaded': false },
    { 'name': '00714.jpg', 'is_downloaded': false },
    { 'name': '00813.jpg', 'is_downloaded': false },
    { 'name': '01673.jpg', 'is_downloaded': false },
    { 'name': '00272.jpg', 'is_downloaded': false },
    { 'name': '01314.jpg', 'is_downloaded': false },
    { 'name': '00572.jpg', 'is_downloaded': false },
    { 'name': '01433.jpg', 'is_downloaded': false },
    { 'name': '01252.jpg', 'is_downloaded': false },
    { 'name': '01052.jpg', 'is_downloaded': false },
    { 'name': '00292.jpg', 'is_downloaded': false },
    { 'name': '01131.jpg', 'is_downloaded': false },
    { 'name': '00134.jpg', 'is_downloaded': false },
    { 'name': '01031.jpg', 'is_downloaded': false },
    { 'name': '00971.jpg', 'is_downloaded': false },
    { 'name': '00711.jpg', 'is_downloaded': false },
    { 'name': '00832.jpg', 'is_downloaded': false },
    { 'name': '01634.jpg', 'is_downloaded': false },
    { 'name': '00031.jpg', 'is_downloaded': false },
    { 'name': '00351.jpg', 'is_downloaded': false },
    { 'name': '00493.jpg', 'is_downloaded': false },
    { 'name': '01213.jpg', 'is_downloaded': false },
    { 'name': '00054.jpg', 'is_downloaded': false },
    { 'name': '00894.jpg', 'is_downloaded': false },
    { 'name': '01353.jpg', 'is_downloaded': false },
    { 'name': '00892.jpg', 'is_downloaded': false },
    { 'name': '01133.jpg', 'is_downloaded': false },
    { 'name': '01491.jpg', 'is_downloaded': false },
    { 'name': '00194.jpg', 'is_downloaded': false },
    { 'name': '00851.jpg', 'is_downloaded': false },
    { 'name': '01573.jpg', 'is_downloaded': false },
    { 'name': '00631.jpg', 'is_downloaded': false },
    { 'name': '00013.jpg', 'is_downloaded': false },
    { 'name': '01454.jpg', 'is_downloaded': false },
    { 'name': '01272.jpg', 'is_downloaded': false },
    { 'name': '01331.jpg', 'is_downloaded': false },
    { 'name': '01771.jpg', 'is_downloaded': false },
    { 'name': '01351.jpg', 'is_downloaded': false },
    { 'name': '00992.jpg', 'is_downloaded': false },
    { 'name': '01191.jpg', 'is_downloaded': false },
    { 'name': '00273.jpg', 'is_downloaded': false },
    { 'name': '01012.jpg', 'is_downloaded': false },
    { 'name': '00153.jpg', 'is_downloaded': false },
    { 'name': '01653.jpg', 'is_downloaded': false },
    { 'name': '00932.jpg', 'is_downloaded': false },
    { 'name': '00032.jpg', 'is_downloaded': false },
    { 'name': '01432.jpg', 'is_downloaded': false },
    { 'name': '01592.jpg', 'is_downloaded': false },
    { 'name': '00994.jpg', 'is_downloaded': false },
    { 'name': '00171.jpg', 'is_downloaded': false },
    { 'name': '01692.jpg', 'is_downloaded': false },
    { 'name': '01512.jpg', 'is_downloaded': false },
    { 'name': '01254.jpg', 'is_downloaded': false },
    { 'name': '00374.jpg', 'is_downloaded': false },
    { 'name': '01093.jpg', 'is_downloaded': false },
    { 'name': '00852.jpg', 'is_downloaded': false },
    { 'name': '01192.jpg', 'is_downloaded': false },
    { 'name': '00692.jpg', 'is_downloaded': false },
    { 'name': '01514.jpg', 'is_downloaded': false },
    { 'name': '01713.jpg', 'is_downloaded': false },
    { 'name': '00652.jpg', 'is_downloaded': false },
    { 'name': '00492.jpg', 'is_downloaded': false },
    { 'name': '01712.jpg', 'is_downloaded': false },
    { 'name': '01693.jpg', 'is_downloaded': false },
    { 'name': '00831.jpg', 'is_downloaded': false },
    { 'name': '00671.jpg', 'is_downloaded': false },
    { 'name': '01114.jpg', 'is_downloaded': false },
    { 'name': '01534.jpg', 'is_downloaded': false },
    { 'name': '00574.jpg', 'is_downloaded': false },
    { 'name': '00411.jpg', 'is_downloaded': false },
    { 'name': '00591.jpg', 'is_downloaded': false },
    { 'name': '00012.jpg', 'is_downloaded': false },
    { 'name': '00732.jpg', 'is_downloaded': false },
    { 'name': '00432.jpg', 'is_downloaded': false },
    { 'name': '00391.jpg', 'is_downloaded': false },
    { 'name': '00093.jpg', 'is_downloaded': false },
    { 'name': '00912.jpg', 'is_downloaded': false },
    { 'name': '01613.jpg', 'is_downloaded': false },
    { 'name': '00394.jpg', 'is_downloaded': false },
    { 'name': '00512.jpg', 'is_downloaded': false },
    { 'name': '00213.jpg', 'is_downloaded': false },
    { 'name': '00471.jpg', 'is_downloaded': false },
    { 'name': '00293.jpg', 'is_downloaded': false },
    { 'name': '00452.jpg', 'is_downloaded': false },
    { 'name': '00954.jpg', 'is_downloaded': false },
    { 'name': '00833.jpg', 'is_downloaded': false },
    { 'name': '00733.jpg', 'is_downloaded': false },
    { 'name': '01671.jpg', 'is_downloaded': false },
    { 'name': '00111.jpg', 'is_downloaded': false },
    { 'name': '01753.jpg', 'is_downloaded': false },
    { 'name': '01734.jpg', 'is_downloaded': false },
    { 'name': '01053.jpg', 'is_downloaded': false },
    { 'name': '01072.jpg', 'is_downloaded': false },
    { 'name': '01333.jpg', 'is_downloaded': false },
    { 'name': '00874.jpg', 'is_downloaded': false },
    { 'name': '00393.jpg', 'is_downloaded': false },
    { 'name': '01354.jpg', 'is_downloaded': false },
    { 'name': '01294.jpg', 'is_downloaded': false },
    { 'name': '01291.jpg', 'is_downloaded': false },
    { 'name': '00913.jpg', 'is_downloaded': false },
    { 'name': '00453.jpg', 'is_downloaded': false },
    { 'name': '01614.jpg', 'is_downloaded': false },
    { 'name': '01513.jpg', 'is_downloaded': false },
    { 'name': '01392.jpg', 'is_downloaded': false },
    { 'name': '00271.jpg', 'is_downloaded': false },
    { 'name': '01414.jpg', 'is_downloaded': false },
    { 'name': '00594.jpg', 'is_downloaded': false },
    { 'name': '01651.jpg', 'is_downloaded': false },
    { 'name': '00251.jpg', 'is_downloaded': false },
    { 'name': '01452.jpg', 'is_downloaded': false },
    { 'name': '00811.jpg', 'is_downloaded': false },
    { 'name': '00713.jpg', 'is_downloaded': false },
    { 'name': '01611.jpg', 'is_downloaded': false },
    { 'name': '00212.jpg', 'is_downloaded': false },
    { 'name': '01211.jpg', 'is_downloaded': false },
    { 'name': '00753.jpg', 'is_downloaded': false },
    { 'name': '00311.jpg', 'is_downloaded': false },
    { 'name': '01073.jpg', 'is_downloaded': false },
    { 'name': '00193.jpg', 'is_downloaded': false },
    { 'name': '01413.jpg', 'is_downloaded': false },
    { 'name': '00891.jpg', 'is_downloaded': false },
    { 'name': '00232.jpg', 'is_downloaded': false },
    { 'name': '00531.jpg', 'is_downloaded': false },
    { 'name': '01232.jpg', 'is_downloaded': false },
    { 'name': '00091.jpg', 'is_downloaded': false },
    { 'name': '00651.jpg', 'is_downloaded': false },
    { 'name': '00854.jpg', 'is_downloaded': false },
    { 'name': '01311.jpg', 'is_downloaded': false },
    { 'name': '01153.jpg', 'is_downloaded': false },
    { 'name': '00794.jpg', 'is_downloaded': false },
    { 'name': '01034.jpg', 'is_downloaded': false },
    { 'name': '01113.jpg', 'is_downloaded': false },
    { 'name': '01594.jpg', 'is_downloaded': false },
    { 'name': '01492.jpg', 'is_downloaded': false },
    { 'name': '00112.jpg', 'is_downloaded': false },
    { 'name': '00033.jpg', 'is_downloaded': false },
    { 'name': '00672.jpg', 'is_downloaded': false },
    { 'name': '01212.jpg', 'is_downloaded': false },
    { 'name': '00911.jpg', 'is_downloaded': false },
    { 'name': '01051.jpg', 'is_downloaded': false },
    { 'name': '01152.jpg', 'is_downloaded': false },
    { 'name': '00673.jpg', 'is_downloaded': false },
    { 'name': '01373.jpg', 'is_downloaded': false },
    { 'name': '00413.jpg', 'is_downloaded': false },
    { 'name': '00952.jpg', 'is_downloaded': false },
    { 'name': '00114.jpg', 'is_downloaded': false },
    { 'name': '00071.jpg', 'is_downloaded': false },
    { 'name': '00392.jpg', 'is_downloaded': false },
    { 'name': '00191.jpg', 'is_downloaded': false },
    { 'name': '01033.jpg', 'is_downloaded': false },
    { 'name': '00653.jpg', 'is_downloaded': false },
    { 'name': '00131.jpg', 'is_downloaded': false },
    { 'name': '00771.jpg', 'is_downloaded': false },
    { 'name': '00772.jpg', 'is_downloaded': false },
    { 'name': '01233.jpg', 'is_downloaded': false },
    { 'name': '01631.jpg', 'is_downloaded': false },
    { 'name': '00352.jpg', 'is_downloaded': false },
    { 'name': '00792.jpg', 'is_downloaded': false },
    { 'name': '01591.jpg', 'is_downloaded': false },
    { 'name': '00092.jpg', 'is_downloaded': false },
    { 'name': '01672.jpg', 'is_downloaded': false },
    { 'name': '00532.jpg', 'is_downloaded': false },
    { 'name': '01551.jpg', 'is_downloaded': false },
    { 'name': '00993.jpg', 'is_downloaded': false },
    { 'name': '01374.jpg', 'is_downloaded': false },
    { 'name': '01552.jpg', 'is_downloaded': false },
    { 'name': '00754.jpg', 'is_downloaded': false },
    { 'name': '00073.jpg', 'is_downloaded': false },
    { 'name': '00151.jpg', 'is_downloaded': false },
    { 'name': '01493.jpg', 'is_downloaded': false },
    { 'name': '00593.jpg', 'is_downloaded': false },
    { 'name': '00571.jpg', 'is_downloaded': false },
    { 'name': '00533.jpg', 'is_downloaded': false },
    { 'name': '01772.jpg', 'is_downloaded': false },
    { 'name': '01754.jpg', 'is_downloaded': false },
    { 'name': '00294.jpg', 'is_downloaded': false },
    { 'name': '00291.jpg', 'is_downloaded': false },
    { 'name': '01132.jpg', 'is_downloaded': false },
    { 'name': '00211.jpg', 'is_downloaded': false },
    { 'name': '00172.jpg', 'is_downloaded': false },
    { 'name': '00051.jpg', 'is_downloaded': false },
    { 'name': '01612.jpg', 'is_downloaded': false },
    { 'name': '01752.jpg', 'is_downloaded': false },
    { 'name': '01154.jpg', 'is_downloaded': false },
    { 'name': '01171.jpg', 'is_downloaded': false },
    { 'name': '00612.jpg', 'is_downloaded': false },
    { 'name': '01214.jpg', 'is_downloaded': false },
    { 'name': '01593.jpg', 'is_downloaded': false },
    { 'name': '00534.jpg', 'is_downloaded': false },
    { 'name': '00371.jpg', 'is_downloaded': false },
    { 'name': '01412.jpg', 'is_downloaded': false },
    { 'name': '01013.jpg', 'is_downloaded': false },
    { 'name': '01391.jpg', 'is_downloaded': false },
    { 'name': '01332.jpg', 'is_downloaded': false },
    { 'name': '01074.jpg', 'is_downloaded': false },
    { 'name': '00333.jpg', 'is_downloaded': false },
    { 'name': '01274.jpg', 'is_downloaded': false },
    { 'name': '00613.jpg', 'is_downloaded': false },
    { 'name': '01494.jpg', 'is_downloaded': false },
    { 'name': '00192.jpg', 'is_downloaded': false },
    { 'name': '00072.jpg', 'is_downloaded': false },
    { 'name': '01014.jpg', 'is_downloaded': false },
    { 'name': '01652.jpg', 'is_downloaded': false },
    { 'name': '01471.jpg', 'is_downloaded': false },
    { 'name': '00611.jpg', 'is_downloaded': false },
    { 'name': '00872.jpg', 'is_downloaded': false },
    { 'name': '00113.jpg', 'is_downloaded': false },
    { 'name': '00233.jpg', 'is_downloaded': false },
    { 'name': '01011.jpg', 'is_downloaded': false },
    { 'name': '00634.jpg', 'is_downloaded': false },
    { 'name': '00132.jpg', 'is_downloaded': false },
    { 'name': '00373.jpg', 'is_downloaded': false },
    { 'name': '00853.jpg', 'is_downloaded': false },
    { 'name': '00752.jpg', 'is_downloaded': false },
    { 'name': '00513.jpg', 'is_downloaded': false },
    { 'name': '01054.jpg', 'is_downloaded': false },
    { 'name': '00774.jpg', 'is_downloaded': false },
    { 'name': '00214.jpg', 'is_downloaded': false },
    { 'name': '01554.jpg', 'is_downloaded': false },
    { 'name': '00494.jpg', 'is_downloaded': false },
    { 'name': '00573.jpg', 'is_downloaded': false },
    { 'name': '00973.jpg', 'is_downloaded': false },
    { 'name': '01071.jpg', 'is_downloaded': false },
    { 'name': '00734.jpg', 'is_downloaded': false },
    { 'name': '01371.jpg', 'is_downloaded': false },
    { 'name': '01732.jpg', 'is_downloaded': false },
    { 'name': '00991.jpg', 'is_downloaded': false },
    { 'name': '00274.jpg', 'is_downloaded': false },
    { 'name': '01691.jpg', 'is_downloaded': false },
    { 'name': '01151.jpg', 'is_downloaded': false },
    { 'name': '00231.jpg', 'is_downloaded': false },
    { 'name': '01574.jpg', 'is_downloaded': false },
    { 'name': '00372.jpg', 'is_downloaded': false },
    { 'name': '01094.jpg', 'is_downloaded': false },
    { 'name': '00094.jpg', 'is_downloaded': false },
    { 'name': '01472.jpg', 'is_downloaded': false },
    { 'name': '00332.jpg', 'is_downloaded': false },
    { 'name': '01632.jpg', 'is_downloaded': false },
    { 'name': '00053.jpg', 'is_downloaded': false },
    { 'name': '01411.jpg', 'is_downloaded': false },
    { 'name': '00152.jpg', 'is_downloaded': false },
    { 'name': '01194.jpg', 'is_downloaded': false },
    { 'name': '00011.jpg', 'is_downloaded': false },
    { 'name': '01352.jpg', 'is_downloaded': false },
    { 'name': '01334.jpg', 'is_downloaded': false },
    { 'name': '00632.jpg', 'is_downloaded': false },
    { 'name': '00914.jpg', 'is_downloaded': false },
    { 'name': '01292.jpg', 'is_downloaded': false },
    { 'name': '01733.jpg', 'is_downloaded': false },
    { 'name': '00514.jpg', 'is_downloaded': false },
    { 'name': '00731.jpg', 'is_downloaded': false },
    { 'name': '00712.jpg', 'is_downloaded': false },
    { 'name': '01451.jpg', 'is_downloaded': false },
    { 'name': '00873.jpg', 'is_downloaded': false },
    { 'name': '00154.jpg', 'is_downloaded': false },
    { 'name': '00691.jpg', 'is_downloaded': false },
    { 'name': '01473.jpg', 'is_downloaded': false },
    { 'name': '01773.jpg', 'is_downloaded': false },
    { 'name': '01431.jpg', 'is_downloaded': false },
    { 'name': '00633.jpg', 'is_downloaded': false },
    { 'name': '00473.jpg', 'is_downloaded': false },
    { 'name': '00893.jpg', 'is_downloaded': false },
    { 'name': '01112.jpg', 'is_downloaded': false },
    { 'name': '01234.jpg', 'is_downloaded': false },
    { 'name': '00951.jpg', 'is_downloaded': false },
    { 'name': '00254.jpg', 'is_downloaded': false },
    { 'name': '00312.jpg', 'is_downloaded': false },
    { 'name': '01091.jpg', 'is_downloaded': false },
    { 'name': '01654.jpg', 'is_downloaded': false },
    { 'name': '01134.jpg', 'is_downloaded': false },
    { 'name': '00334.jpg', 'is_downloaded': false },
    { 'name': '01394.jpg', 'is_downloaded': false },
    { 'name': '01231.jpg', 'is_downloaded': false },
    { 'name': '00052.jpg', 'is_downloaded': false },
    { 'name': '00174.jpg', 'is_downloaded': false },
    { 'name': '01453.jpg', 'is_downloaded': false },
    { 'name': '01393.jpg', 'is_downloaded': false },
    { 'name': '00491.jpg', 'is_downloaded': false },
    { 'name': '00074.jpg', 'is_downloaded': false },
    { 'name': '00354.jpg', 'is_downloaded': false },
    { 'name': '01714.jpg', 'is_downloaded': false },
    { 'name': '00974.jpg', 'is_downloaded': false },
    { 'name': '00751.jpg', 'is_downloaded': false },
    { 'name': '01553.jpg', 'is_downloaded': false },
    { 'name': '00972.jpg', 'is_downloaded': false },
    { 'name': '00791.jpg', 'is_downloaded': false },
    { 'name': '00953.jpg', 'is_downloaded': false },
    { 'name': '00353.jpg', 'is_downloaded': false },
    { 'name': '00433.jpg', 'is_downloaded': false },
    { 'name': '01173.jpg', 'is_downloaded': false },
    { 'name': '00472.jpg', 'is_downloaded': false },
    { 'name': '01312.jpg', 'is_downloaded': false },
    { 'name': '01674.jpg', 'is_downloaded': false },
    { 'name': '01293.jpg', 'is_downloaded': false },
    { 'name': '00313.jpg', 'is_downloaded': false },
    { 'name': '00511.jpg', 'is_downloaded': false },
    { 'name': '01174.jpg', 'is_downloaded': false },
    { 'name': '00552.jpg', 'is_downloaded': false },
    { 'name': '01532.jpg', 'is_downloaded': false },
    { 'name': '00234.jpg', 'is_downloaded': false },
    { 'name': '00253.jpg', 'is_downloaded': false },
    { 'name': '01511.jpg', 'is_downloaded': false },
    { 'name': '01172.jpg', 'is_downloaded': false },
    { 'name': '00834.jpg', 'is_downloaded': false },
    { 'name': '00431.jpg', 'is_downloaded': false },
    { 'name': '00454.jpg', 'is_downloaded': false },
    { 'name': '00674.jpg', 'is_downloaded': false },
    { 'name': '00414.jpg', 'is_downloaded': false },
    { 'name': '00331.jpg', 'is_downloaded': false },
    { 'name': '01253.jpg', 'is_downloaded': false },
    { 'name': '00773.jpg', 'is_downloaded': false },
    { 'name': '00871.jpg', 'is_downloaded': false },
    { 'name': '01633.jpg', 'is_downloaded': false },
    { 'name': '01372.jpg', 'is_downloaded': false },
    { 'name': '01694.jpg', 'is_downloaded': false }
]

export { ticketUrls, BASE }