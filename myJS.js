var myJS =  {};

myJS.httpFun = myJS.prototype = {
    //取得QueryString
    QueryString: function (name) {
        var AllVars = window.location.search.substring(1);
        var Vars = AllVars.split("&");
        for (var i = 0; i < Vars.length; i++) {
            var Var = Vars[i].split("=");
            if (Var[0] === name) return Var[1];
        }
        return "";
    }

};

myJS.Valid = myJS.prototype = {
    //驗證使用者輸入的內容 
    
    validfun: function (value, patten, IsAllowEmpty) {
        var re = new RegExp(patten);
        if ((isNaN(value) && re.test(parseInt(value))) || re.test(value)) {
            
            return true;
        }
        else {
            if (IsAllowEmpty) {
                return this.IsEmpty(value);
            }
            else {
                return false;
            }
        }
    },

    IsEmpty : function (input) {
        if (input =="" || isNaN(input)) {
            return true;
        }
        else {
            return false;
        }
    },

    IsNumber: function (value, IsAllowEmpty) {
        return this.validfun(parseInt(value), "^[0-9]+$", IsAllowEmpty);
    },

    IsTWMobilePhone: function (value, IsAllowEmpty) {
        return this.validfun(value, "^09[0-9]{8}$", IsAllowEmpty);
    },

    IsEnglish: function (value, IsAllowEmpty) {
        return this.validfun(value, "^[A-Za-z]+$", IsAllowEmpty);
    },

    IsEngAndNumber: function (value, IsAllowEmpty) {
        return this.validfun(value, "^[A-Za-z0-9]+$", IsAllowEmpty);
    },

    IsChNum: function (value, IsAllowEmpty) {
        return this.validfun(value, "^[\u4E00-\u9fa50-9]+$", IsAllowEmpty);
    },

    IsChEn: function (value, IsAllowEmpty) {
        return this.validfun(value, "^[\u4E00-\u9fa5A-Za-z]+$", IsAllowEmpty);
    },

    IsChinese: function (value, IsAllowEmpty) {
        return this.validfun(value, "^[\u4E00-\u9fa5]+$", IsAllowEmpty);
    },

    IsChEgNu: function (value, IsAllowEmpty) {
        return this.validfun(value, "^[\u4E00-\u9fa5A-Za-z0-9]+$", IsAllowEmpty);
    },

    IsEmail: function (value,IsAllowEmpty) {
        return this.validfun(value, "^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" ,IsAllowEmpty);
    }

};

myJS.DateFormat = myJS.prototype = {

   //自訂輸出日期格式
    yyyy_dd_mm: function (date) {
        var date = new Date(date);
        return date.getUTCFullYear() + "/" + ((date.getUTCMonth() + 1) < 10 ? "0" + (date.getUTCMonth() + 1) : (date.getUTCMonth() + 1)) + "/" + date.getUTCDate();
    },
    yyyy_dd_mm_hh_mm_ss: function (date) {
        var date = new Date(date);
        return date.getUTCFullYear() + "/" + ((date.getUTCMonth() + 1) < 10 ? "0" + (date.getUTCMonth() + 1) : (date.getUTCMonth() + 1)) + "/" + date.getUTCDate()
        + " "
        + (date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours()) + ":"
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":"
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
    }
};

myJS.AjaxForGet = myJS.prototype = function (StringURL, ActionSuccess,ActionFails) {
    //StringURL 為進行Ajax 的目標URL
    //ActionSuccess 為成功要做的function event；
    //ActionFails 為失敗要做的function event；
    
    //這段引用別人的程式碼
    function creatRequestObj() {
        var request = null;
        try {
            request = new XMLHttpRequest();
        } catch (trymicrosoft) {
            try {
                request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (othermicrosoft) {
                try {
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (failed) {
                    request = null;
                }
            }
        }
        return request;
    }

    //create XMLHttpRequest Object
    var request = null;
    request = creatRequestObj();
    if (request == null) {
        //无法取得XMLHttpRequest对象时发出警告
        console.log("Error creating request object!");
    }
    else {
       // console.log("request Exist!");
    }


    //Send data to Server
    function sendData() {
        var url = StringURL;

        request.open("GET", url, true);//开启联机，选择联机方式GET,POST
        request.onreadystatechange = updatePage;//状态完成时所要执行的函式
        request.send(null);//送出
    }

    function updatePage() {
        if (request.readyState == 4 && request.status == 200) {//完成状态有好几种，4代表数据传回完成
            var data = request.responseText;//取得传回的数据存在变量中
            ActionSuccess(data);   
        }
        else{
            ActionFails();
        }
    }
    sendData();
};
    