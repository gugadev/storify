import React from "react";
import {IProgress} from "../../core/src/components/types";

export const Progress: React.FC<IProgress> = props => (
    <x-storify-progress {...props} />
);
