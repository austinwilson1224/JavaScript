"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var comp = new like_component_1.LikeComponent(10, true);
comp.onClick();
console.log("likesCount: " + comp.likesCount + "\nisSelected: " + comp.isSelected);
