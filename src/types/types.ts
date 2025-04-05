import { ChangeEventHandler, FocusEventHandler } from "react";

export interface UserProfile {
    id: string;
    username: string;
    email: string;
    bio?: string;

}


export interface InputProps {
    name: string,
    type: string,
    label: string,
    id: string,
    placeholder: string,
    value?: string,
    change?: ChangeEventHandler<HTMLInputElement>;
    blur?: FocusEventHandler<HTMLInputElement>;
    error: string

}

export interface FormState {

    username: string;
    email: string;
    bio?: string;


}


export type Errors = {
    [key: string]: string | undefined;
};
