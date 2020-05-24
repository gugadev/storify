/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {withKnobs, boolean, number} from "@storybook/addon-knobs";
import {Storify, Story} from "../index";

export default {
    title: "Storify",
    component: Storify,
    decorators: [withKnobs]
};

export const Demo = () => (
    <div
        style={{
            height: "calc(100vh - 16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <Storify
            height={number("height", 480)}
            width={number("width", 320)}
            withShadow={boolean("withShadow", true)}
            radius={number("radius", 4)}
        >
            <Story
                src="https://i.imgur.com/vleP8gc.jpg"
                placeholder="https://svgshare.com/i/LTL.svg"
            />
            <Story
                src="https://i.imgur.com/8CIYyXR.jpg"
                placeholder="https://svgshare.com/i/LTU.svg"
            />
            <Story
                src="https://i.imgur.com/Le6kUMi.jpg"
                placeholder="https://svgshare.com/i/LTq.svg"
            />
            <Story
                src="https://i.imgur.com/VY0IV1e.jpg"
                placeholder="https://svgshare.com/i/LSf.svg"
            />
            <Story
                src="https://i.imgur.com/RkUVH60.jpg"
                placeholder="https://svgshare.com/i/LSg.svg"
            />
        </Storify>
    </div>
);
