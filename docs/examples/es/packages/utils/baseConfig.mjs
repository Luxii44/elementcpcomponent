class RtnError {
  constructor() {
    this.Message = "";
  }
}
class AttachItem {
  constructor() {
    this.RecordGuid = "00000000-0000-0000-0000-000000000000" /* NULLGUID */;
    this.ObjectType = "";
    this.ObjectGuid = "00000000-0000-0000-0000-000000000000" /* NULLGUID */;
    this.PicturePath = "";
    this.PictureTitle = "";
    this.PictureType = "";
    this.GaeaObjectProperty = 0;
    this.idstr = "";
  }
}
class RelationRecordItem {
  constructor() {
    this.MainObjectGuid = "00000000-0000-0000-0000-000000000000" /* NULLGUID */;
    this.RecordGuid = "00000000-0000-0000-0000-000000000000" /* NULLGUID */;
    this.RelationType = "";
    this.RelationObjectGuid = "00000000-0000-0000-0000-000000000000" /* NULLGUID */;
    this.RelationTypeName = "";
    this.GaeaObjectProperty = 0;
  }
}
class SystemParaValue {
  constructor() {
    this.SystemParamValueGuid = "";
    this.ParamText = "";
    this.ParamValue = "";
  }
}
class RtnDataList {
  constructor() {
    this.TotalCount = 0;
  }
}
class Rtn {
  constructor() {
    this.Error = new RtnError();
    this.ErrorCode = "";
    this.IsPositive = true;
  }
}
class AnyData {
}
var DefaultValueHelper = /* @__PURE__ */ ((DefaultValueHelper2) => {
  DefaultValueHelper2["NULLGUID"] = "00000000-0000-0000-0000-000000000000";
  DefaultValueHelper2["NULLDATE"] = "1901-01-01 00:00:00";
  DefaultValueHelper2["MAXDATE"] = "2999-12-31 00:00:00";
  return DefaultValueHelper2;
})(DefaultValueHelper || {});
class ListProps {
}
class CustomerServerInfo {
  constructor() {
    this.ServeCode = "";
    //客户服务代码
    this.ServeAdress = "";
    //客户服务器地址 带 api
    this.ServeArea = "";
  }
  //客户服务范围 不带api
}
class LoginData {
  constructor() {
    this.Token = "";
    this.EToken = "";
    //扩展Token 里边是 平台代码 Code 及 登录时间 LoginTime  用户UserGuid 及 UserName 加密后的内容
    this.UserInfo = new UserInfo();
  }
}
class UserInfo {
  constructor() {
    this.Token = "";
    this.EToken = "";
    this.PlateCode = "";
    // Timeout:                     Date = new Date();
    this.UserGuid = "";
    this.UserName = "";
    this.UserCode = "";
    this.UserRight = {};
    this.UserRole = "";
    this.CurrentCompanyFullPath = "";
    this.CurrentCompanyGuid = "";
    this.CurrentCompanyName = "";
    this.CurrentProjectGuid = "";
    this.CurrentProjectName = "";
    this.UserAllDataRight = 0;
    this.PhoneNo = "";
    this.PasswdOverdue = false;
    this.PasswdLogGaeaObjectProperty = "0";
    this.SubSystemRight = {};
  }
}
class GlobalDataProps {
  constructor() {
    this.Admin = "";
    this.ErrorStr = "";
    this.ErrorStatus = false;
    this.Loading = false;
    this.User = new UserInfo();
    this.CustomerServerInfo = new CustomerServerInfo();
    this.Height = 0;
    this.Width = 0;
    this.routeList = [];
    this.selRoute = new routeInfo();
    this.PageData = {};
  }
}
class routeInfo {
  constructor() {
    this.AppMenuGuid = "";
    this.BitValue = 0;
    this.ExtendInfo = "{}";
    this.GaeaObjectProperty = 0;
    this.Icon = "";
    this.MenuKey = "";
    this.MenuName = "";
    this.ParentGuid = "00000000-0000-0000-0000-000000000000";
    this.ShowOrder = 0;
    this.SubSystemGuid = "";
    this.Url = "";
    this.child = [];
  }
}
const conf = {
  model: "release",
  serves: {
    "release": {
      "addr": "http://106.52.168.23:1205/API",
      //http://106.52.168.23:1205/API
      "url": "http://106.52.168.23:1205"
    },
    "pre": {
      "addr": "http://192.168.1.144:205/API",
      "url": "http://192.168.1.144:205"
    },
    "intranet": {
      "addr": "http://192.168.1.144:204/API",
      "url": "http://192.168.1.144:204"
    },
    "dev": {
      "addr": "http://anhuan.weizhimubiao.cn/API",
      "url": "http://anhuan.weizhimubiao.cn/"
    },
    "test": {
      "addr": "http://192.168.1.168:205/API",
      "url": "http://192.168.1.168:205"
    },
    "adongLocalAnhuan": {
      "addr": "http://localanhuan.weizhimubiao.cn/API",
      "url": "http://localanhuan.weizhimubiao.cn"
    },
    "zsq": {
      "addr": "http://localhost:204/API",
      "url": "http://localhost:204"
    },
    "linhm": {
      "addr": "http://localhost:204/API",
      "url": "http://localhost:204"
    }
  },
  getCurrentServe() {
    if (this.checkModel()) {
      return this.serves[this.model];
    } else {
      return {
        "addr": "/API",
        "url": ""
      };
    }
  },
  checkModel() {
    return this.serves[this.model] != void 0;
  }
};

export { AnyData, AttachItem, DefaultValueHelper, GlobalDataProps, ListProps, LoginData, RelationRecordItem, Rtn, RtnDataList, RtnError, SystemParaValue, UserInfo, conf, routeInfo };
//# sourceMappingURL=baseConfig.mjs.map
