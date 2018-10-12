$(function () {
    // 获取表格身体部分
    let table = $("tbody");
    // 获取数据库数据打印到页面
    $.ajax({
        type:"GET",
        url:"table.php",
        dataType:"json",
        success:function (res) {
            render(res);
        }
    })
    // 修改数据
    table.on("dblclick","td:not(.del)",function () {
        let td = $(this);
        let oval = td.html();
        let id = td.closest("tr").attr("id");
        let key = td.closest("td").attr("type");
        td.empty();
        let input = $("<input>");
        input.appendTo(td).val(oval).blur(function () {
            let nval = input.val();
            input.remove();
            td.html(nval);
            update(id,key,nval);
        })
    });
    // 删除数据
    table.on('click','td button',function (e) {
        e.stopPropagation();
        let tr = $(this).closest("tr");
        let id = tr.attr("id");
        $.get('del.php',{id:id},function (res) {
            if (res == "yes") {
                tr.remove();
            }
            else if (res == "no") {
                alert ("删除失败");
            }
        })
    })
    // 添加数据
    $("button.button").click(function () {
        $.get('add.php',function (res) {
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
    // 获取数据库数据打印到页面
    function render(val) {
        $.each($(val),function (i, v) {
            let str = `<tr id="${v.id}">
                          <td type="name">${v.name}</td>
                          <td type="age">${v.age}</td>
                          <td type="sex">${v.sex}</td>
                          <td type="phone">${v.phone}</td>
                          <td type="address">${v.address}</td>
                          <td class="del">
                              <button type="button" class="btn btn-primary">删除</button>
                          </td>
                      </tr>`;
            table.append(str);
        })
    };
    // 修改数据库数据函数
    function update(id,key,value) {
        $.get("update.php",{id:id,key:key,value:value},function (res) {
            if (res == "yes") {
                alert("修改成功");
            }
            else if (res == "no") {
                alert("修改失败");
            }
        })
    };
})