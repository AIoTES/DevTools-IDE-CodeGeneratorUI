export interface PermissionGuard {
    Role?: string,
    Only?: Array<string>,
    Except?: Array<string>,
    RedirectTo?: string | Function
}