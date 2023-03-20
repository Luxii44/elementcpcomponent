
// import { conf } from '../conf/index';

// import mitt from 'mitt'

// export  let mymitt = mitt();

 export class RtnError {

    Message:string = ""


}
// export class HttpConfig{
//     url:""
// }

/**
 *这个类常用于处理附件
 *
 * @export
 * @class AttachItem
 */
export class AttachItem{
  RecordGuid:         string= DefaultValueHelper.NULLGUID;
  ObjectType: string = "";
  ObjectGuid:         string= DefaultValueHelper.NULLGUID;
  PicturePath: string = "";
  PictureTitle: string = "";
  PictureType: string = "";
  GaeaObjectProperty: number = 0;
  idstr:string=''
}

export class RelationRecordItem {
  MainObjectGuid:string = DefaultValueHelper.NULLGUID;
  RecordGuid:         string= DefaultValueHelper.NULLGUID;
  RelationType: string = "";
  RelationObjectGuid:         string= DefaultValueHelper.NULLGUID;
  RelationTypeName:string = "";
  GaeaObjectProperty: number = 0;
  [key: string]: any
}

/**
 *
 *这个类用于显示系统参数
 * @export
 * @class SystemParaValue
 */
export class SystemParaValue {
  SystemParamValueGuid:string = "";
  ParamText: string = "";
  ParamValue: string = "";
}

export class RtnDataList<P> {
  DataList!:Array<P>;
  TotalCount:number = 0;
}

export class Rtn<P> {
  Data!:P;
  Error :RtnError = new RtnError();
  ErrorCode:string = "";
  IsPositive:boolean = true;

}

export class AnyData {
	[key: string]: any
}

export enum  DefaultValueHelper  {
  NULLGUID = "00000000-0000-0000-0000-000000000000",
  NULLDATE = "1901-01-01 00:00:00",
  MAXDATE = "2999-12-31 00:00:00",
}

export class ListProps<P> {
  [id: string]: P;
}

class CustomerServerInfo {
  ServeCode: string= "";//客户服务代码
  ServeAdress: string= "";//客户服务器地址 带 api
  ServeArea: string= "";//客户服务范围 不带api
}

export class LoginData {
	Token:    string = "";
	EToken:    string = "";//扩展Token 里边是 平台代码 Code 及 登录时间 LoginTime  用户UserGuid 及 UserName 加密后的内容
	UserInfo: UserInfo = new UserInfo();
}
  

export class UserInfo {
  Token:                       string = "";
  EToken :string = "";
  PlateCode:string = "";
  // Timeout:                     Date = new Date();
  UserGuid:                    string = "";
  UserName:                    string = "";
  UserCode:                    string = "";
  UserRight:                   { [key: string]: number } = {};
  UserRole:                    string = "";
  CurrentCompanyFullPath:      string = "";
  CurrentCompanyGuid:          string = "";
  CurrentCompanyName:          string = "";
  CurrentProjectGuid:          string = "";
  CurrentProjectName:           string = "";
  UserAllDataRight:            number = 0;
  PhoneNo:                     string = "";
  PasswdOverdue:               boolean = false;
  PasswdLogGaeaObjectProperty: string = "0";
  SubSystemRight:any = {};
 
}

export class GlobalDataProps {
  Admin:string="";
  ErrorStr : string ="";
  ErrorStatus:boolean   =false ;
  Loading: boolean = false;
  User: UserInfo = new UserInfo();
  CustomerServerInfo :CustomerServerInfo = new CustomerServerInfo();
  Height:number = 0;
  Width:number = 0;
  routeList:any[] = [];
  selRoute:routeInfo = new routeInfo();
  PageData:Object={}
}

export class routeInfo {
	AppMenuGuid: string=""
  BitValue: number = 0
  ExtendInfo: any="{}"
  GaeaObjectProperty: number=0
  Icon: string=""
  MenuKey: string=""
  MenuName: string=""
  ParentGuid: string="00000000-0000-0000-0000-000000000000"
  ShowOrder: number=0
  SubSystemGuid: string=""
  Url: string=""
	child: any[] = [];
}
interface confInterface {
	model: string;
	serves: { [key: string]: servesInterface };
	getCurrentServe: Function;
	checkModel: Function;
}
interface servesInterface {
	addr: string;
	url: string;
}

export const conf: confInterface = {
	model: "release",
	serves: {
		"release": {
			'addr': "http://106.52.168.23:1205/API",//http://106.52.168.23:1205/API
			'url': "http://106.52.168.23:1205"
		},
		"pre": {
			'addr': "http://192.168.1.144:205/API",
			'url': "http://192.168.1.144:205"
		},
		"intranet": {
			'addr': "http://192.168.1.144:204/API",
			'url': "http://192.168.1.144:204"
		},
		"dev": {
			'addr': "http://anhuan.weizhimubiao.cn/API",
			'url': "http://anhuan.weizhimubiao.cn/"
		},
		"test": {
			'addr': "http://192.168.1.168:205/API",
			'url': "http://192.168.1.168:205"
		},
		"adongLocalAnhuan": {
			'addr': "http://localanhuan.weizhimubiao.cn/API",
			'url': "http://localanhuan.weizhimubiao.cn"
		},
		"zsq": {
			'addr': "http://localhost:204/API",
			'url': "http://localhost:204"
		},
		"linhm": {
			'addr': "http://localhost:204/API",
			'url': "http://localhost:204"
		}
	},
	getCurrentServe() {
		if (this.checkModel()) {
			return this.serves[this.model];
		} else {
			return {
				'addr': '/API',
				'url': '',
			}
		}
	},
	checkModel() {
		return this.serves[this.model] != undefined
	},
};