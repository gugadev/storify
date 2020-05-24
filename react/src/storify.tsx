import React from "react";
import {IStorify} from "../../core/src/components/types";

export const Storify: React.FC<IStorify> = ({children, ...props}) => {
    return <x-storify {...props}>{children}</x-storify>;
};
