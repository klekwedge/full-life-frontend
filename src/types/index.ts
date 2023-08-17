export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

export interface RegistrationForm {
    firstName: string;
    lastName: string
    email: string
    password: string
}

export interface IUser {

}

export type LoadingStatus = 'loading' | 'loaded' | 'error'
