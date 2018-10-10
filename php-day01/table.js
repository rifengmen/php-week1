$(function () {
    let students = [
        {name:"张三",age:"18",sex:"男",phone:"17885558888",address:"山西"},
        {name:"李四",age:"19",sex:"女",phone:"13888888888",address:"河南"},
        {name:"王五",age:"22",sex:"女",phone:"13888888888",address:"江西"},
        {name:"赵六",age:"25",sex:"男",phone:"13888888888",address:"福建"}
    ];
    let table = $("tbody");
    students.forEach(value => {
        let str =  `<tr>
                    <td>${value.name}</td>
                    <td>${value.age}</td>
                    <td>${value.sex}</td>
                    <td>${value.phone}</td>
                    <td>${value.address}</td>
                    <td class="del">
                        <button class="info">删除</button>
                    </td>
                </tr>`;
        table.append(str);
    });
    table.on("dblclick","td:not(del)",function () {
        let tds = $(this);
        let oldval = tds.html();
        let inputs = $("<input>");
        tds.html(inputs);
        inputs.val(oldval).blur(function () {
            let nval = inputs.val();
            inputs.remove();
            tds.html(nval);
        });
    });

});


window.onload  =function () {
    // 新建
    let xml = new XMLHttpRequest();
    // 打开数据库请求
    xml.open("get","./table.php",true);
    // 出发
    xml.send();
    // 监控
    xml.onreadystatechange = function () {
            // 能否处理（状态）           能否成功处理（状态）
        if (xml.readyState == 4 && xml.status == 200) {
            console.log(xml.responseText);
        }
    }



}