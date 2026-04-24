import { readFileSync } from "fs";

const groupData = JSON.parse(readFileSync("./semantic_groups.json", "utf8"));

const groups = {};

Object.keys(groupData).forEach(key => {
	const group = groupData[key];
	groups[key] = {
		sound: group.sound,
		count: group.ideas?.length,
	};
	if (group.sound) {
		console.log(`${key},${group.sound},${group.ideas.length}`);
	}
});

// console.log(groups);
