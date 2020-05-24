import React from "react";
import {IStory} from "../../core/src/components/types";

export const Story: React.FC<IStory> = props => (
    <x-storify-story {...props} />
);
