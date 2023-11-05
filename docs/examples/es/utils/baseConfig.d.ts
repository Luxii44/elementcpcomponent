export declare class RtnError {
    Message: string;
}
/**
 *这个类常用于处理附件
 *
 * @export
 * @class AttachItem
 */
export declare class AttachItem {
    RecordGuid: string;
    ObjectType: string;
    ObjectGuid: string;
    PicturePath: string;
    PictureTitle: string;
    PictureType: string;
    GaeaObjectProperty: number;
    idstr: string;
}
export declare class RelationRecordItem {
    MainObjectGuid: string;
    RecordGuid: string;
    RelationType: string;
    RelationObjectGuid: string;
    RelationTypeName: string;
    GaeaObjectProperty: number;
    [key: string]: any;
}
/**
 *
 *这个类用于显示系统参数
 * @export
 * @class SystemParaValue
 */
export declare class SystemParaValue {
    SystemParamValueGuid: string;
    ParamText: string;
    ParamValue: string;
}
export declare class RtnDataList<P> {
    DataList: Array<P>;
    TotalCount: number;
}
export declare class Rtn<P> {
    Data: P;
    Error: RtnError;
    ErrorCode: string;
    IsPositive: boolean;
}
export declare class AnyData {
    [key: string]: any;
}
export declare enum DefaultValueHelper {
    NULLGUID = "00000000-0000-0000-0000-000000000000",
    NULLDATE = "1901-01-01 00:00:00",
    MAXDATE = "2999-12-31 00:00:00"
}
export declare class ListProps<P> {
    [id: string]: P;
}
declare class CustomerServerInfo {
    ServeCode: string;
    ServeAdress: string;
    ServeArea: string;
}
export declare class LoginData {
    Token: string;
    EToken: string;
    UserInfo: UserInfo;
}
export declare class UserInfo {
    Token: string;
    EToken: string;
    PlateCode: string;
    UserGuid: string;
    UserName: string;
    UserCode: string;
    UserRight: {
        [key: string]: number;
    };
    UserRole: string;
    CurrentCompanyFullPath: string;
    CurrentCompanyGuid: string;
    CurrentCompanyName: string;
    CurrentProjectGuid: string;
    CurrentProjectName: string;
    UserAllDataRight: number;
    PhoneNo: string;
    PasswdOverdue: boolean;
    PasswdLogGaeaObjectProperty: string;
    SubSystemRight: any;
}
export declare class GlobalDataProps {
    Admin: string;
    ErrorStr: string;
    ErrorStatus: boolean;
    Loading: boolean;
    User: UserInfo;
    CustomerServerInfo: CustomerServerInfo;
    Height: number;
    Width: number;
    routeList: any[];
    selRoute: routeInfo;
    PageData: Object;
}
export declare class routeInfo {
    AppMenuGuid: string;
    BitValue: number;
    ExtendInfo: any;
    GaeaObjectProperty: number;
    Icon: string;
    MenuKey: string;
    MenuName: string;
    ParentGuid: string;
    ShowOrder: number;
    SubSystemGuid: string;
    Url: string;
    child: any[];
}
interface confInterface {
    model: string;
    serves: {
        [key: string]: servesInterface;
    };
    getCurrentServe: Function;
    checkModel: Function;
}
interface servesInterface {
    addr: string;
    url: string;
}
export declare const conf: confInterface;
export {};
