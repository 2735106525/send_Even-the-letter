auto.waitFor();//判断和等待开启无障碍
app.launchApp('连信')
sleep(5000)
let see_count = rawInput('请输入你想要打招呼的内容', '');
// let see_count4 = rawInput('请输入你想要固定的回复第一句话', '');
// let see_count1 = rawInput('请输入你想要回复的内容1', '');
// let see_count2 = rawInput('请输入你想要回复的内容2', '');
// let see_count3 = rawInput('请输入你想要回复的内容3', '');
iii=[see_count1,see_count2,see_count3]
sleep(1000)
id("tab_discover").findOne().click()
id("peopleNearby_item").findOne().click()
fujinren()
function fujinren() {
    threads.start(function () {
        while (true) {
            if (className("android.widget.TextView").text("附近的人").depth('8').exists()) {
                swipe(500, 700, 500, 515, 500)
                sleep(500)
            }
        };
    });
    threads.start(function () {
        while (true) {
            if (id("footer_textview").depth("9").textStartsWith("正在加载").exists()) {
                log('正在加载')
                sleep(5000)
            }
        };
    });
    threads.start(function () {
        while (true) {
            if (id("footer_textview").depth("9").textStartsWith("移动当前位置").exists()) {
                log('发送完了')
                className("android.widget.ImageButton").findOne().click()
                // jiankong()
            }
        };
    });
    for (t = 1; t < 250; t++) {
        className("android.widget.LinearLayout").depth("7").row(t).findOne().click()
        sleep(500)
        if (className("android.widget.TextView").text("详细资料").exists()) {
            if (id("action_textview").text("打招呼").exists()) {
                id("action_textview").text("打招呼").findOne().parent().click()
                sleep(500)
                var widget = id("contentLayout").findOne()
                click(widget.bounds().centerX(), widget.bounds().centerY())
                input(see_count)
                id("action_button").findOne().click()
                sleep(500)
                className("android.widget.ImageButton").findOne().click()
                sleep(500)
                log('第' + t + '个');
            } else {
                sleep(500)
                className("android.widget.ImageButton").findOne().click()
                sleep(500)
            }
        }
    }
    log('给周围人打了250个招呼')
    // jiankong()
}
// function jiankong() {
//     sleep(3000)
//     for (i = 0; i < 10000000000000000000; i++) {
//         sleep(1000)
//         id("tab_discover").findOne().click()
//         sleep(1000)
//         tab_discover()
//         sleep(1000)
//         id("tab_message").findOne().click()
//         sleep(1000)
//         tab_message()
//     }
//     function tab_message() {
//         threads.start(function () {
//             while (true) {
//                 if (id("actionbar_title").text("轻松一刻").exists()) {
//                     className("android.widget.ImageButton").findOne().click()
//                 }
//             };
//         });
//         threads.start(function () {
//             while (true) {
//                 if (id("actionbar_title").text("连信团队").exists()) {
//                     className("android.widget.ImageButton").findOne().click()
//                 }
//             };
//         });
//         threads.start(function () {
//             while (true) {
//                 if (id("actionbar_title").text("连信小助手").exists()) {
//                     className("android.widget.ImageButton").findOne().click()
//                 }
//             };
//         });
//         var p = className("android.widget.FrameLayout").depth("14").indexInParent("3")
//         if (p.exists()) {
//             while (true) {
//                 var widget = className("android.widget.FrameLayout").depth("14").indexInParent("3").findOne()
//                 click(widget.bounds().centerX(), widget.bounds().centerY())
//                 var widget1 = className("android.widget.RelativeLayout").depth("12").id("input_area").findOne()
//                 click(widget1.bounds().centerX(), widget1.bounds().centerY())
//                 input(see_count4)
//                 id("send_button").findOne().click()
//                 input(iii[random(0,2)])
//                 id("send_button").findOne().click()
//                 className("android.widget.ImageButton").findOne().click()
//                 sleep(1000)
//                 if (!p.exists()) {
//                     log('发送完了')
//                     break
//                 }
//             }
//         }
//     }
//     function tab_discover() {
//         if (id("lbs_badge").exists()) {
//             log('找朋友有信息')
//             var x = id("lbs_badge").findOne().text()
//             id("peopleNearby_item").findOne().click()
//             id("new_greet_area").findOne().click()
//             sleep(1000)
//             for (t = 0; t < x; t++) {
//                 className("android.widget.LinearLayout").depth("7").row(t).findOne().click()
//                 id("reply").findOne().click()
//                 id("edit_text").findOne().setText(iii[random(0,2)])
//                 id("buttonDefaultPositive").findOne().click()
//                 className("android.widget.ImageButton").findOne().click()
//             }
//             className("android.widget.ImageButton").findOne().click()
//             sleep(500)
//             className("android.widget.ImageButton").findOne().click()
//             sleep(500)
//             className("android.widget.ImageButton").findOne().click()
//         }

//     }
// }