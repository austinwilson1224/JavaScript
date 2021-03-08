import { LikeComponent } from './like.component';

let comp = new LikeComponent(10, true);
comp.onClick();
console.log(`likesCount: ${comp.likesCount}\nisSelected: ${comp.isSelected}`);