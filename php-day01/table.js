$(function () {
    // 获取表格身体部分
    let table = $("tbody");


    // 导入数据库数据
    $.ajax({
        url: "table2.php",
        dataType: "json",
        success: function (res) {
            render(res);
        }
    });


    // 修改数据
    // 事件委派给父元素绑定双击事件，筛选掉删除按钮
    table.on("dblclick","td:not(button)",function () {
        // 获取选中部分
        let tds = $(this);
        // 获取选中部分所在的行
        let id = tds.closest("tr").attr("id");
        // 获取选中部分所在的字段
        let key = tds.closest("td").attr("type");
        // 获取选中部分的文本
        let oldval = tds.text();
        // 清空选中部分的文本
        tds.empty();
        // 创建一个输入框
        let inputs = $("<input>");
        //
        tds.append(inputs);
        inputs.val(oldval).blur(function () {
            let nval = inputs.val();
            inputs.remove();
            tds.text(nval);
            update(id,key,nval)
        });
    });


    // 删除数据
    table.on("click","td button",function (e) {
        e.stopPropagation();
        let tr = $(this).closest("tr");
        let id = tr.attr("id");
        $.ajax({
            url: "del.php",
            data: {id:id},
            success: function (res) {
                if (res == "yes") {
                    tr.remove();
                }
                else if (res == "no") {
                    alert("删除失败");
                }
            }
        });
    })


    // 插入新的表格
    $("button.button").click(function () {
        $.get("add.php",function (res) {
            if (res == 0) {
                alert("添加失败");
            }
            else {
                let str = `<tr id="${res}">
                               <td type="name">张三</td>
                               <td type="age">0</td>
                               <td type="sex"></td>
                               <td type="phone"></td>
                               <td type="address"></td>
                               <td class="del">
                                   <button type="button" class="btn btn-primary">删除</button>
                               </td>
                           </tr>`;
                table.append(str);
            }
        })
    })


    // 函数部分
    // 修改
    function update(id, key, value) {
        $.ajax({
            url: "update.php",
            data: {id:id,key:key,value:value},
            success: function (res) {
                if (res == "yes") {
                    alert("修改成功");
                }
                else if (res == "no") {
                    alert("修改失败");
                }
            }
        })
    };
    // 导入
    function render(students) {
        students.forEach(val => {
            let str = `<tr id="${val.id}">
                           <td type="name">${val.name}</td>
                           <td type="age">${val.age}</td>
                           <td type="sex">${val.sex}</td>
                           <td type="phone">${val.phone}</td>
                           <td type="address">${val.address}</td>
                           <td class="del">
                               <button type="button" class="btn btn-primary">删除</button>
                           </td>
                       </tr>`;
            table.append(str);
        });
    };
});

