//          ##########
//          #      #S#
//          #      # #
//          # ###### #
//          #        #
//          #E########

declare type Point = {
    x: number;
    y: number;
}

const dir = [
    [0, 1],     //up
    [1, 0],     //right
    [0, -1],    //down
    [-1, 0],    //left
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    //off the map
    if(curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
        return false;
    }
    //on a wall
    if(maze[curr.y][curr.x] === wall) {
        return false;
    }
    //already visited tile
    if(seen[curr.y][curr.x]) {
        return false;
    }
    //reached the end
    if(curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    //pre-recurse
    seen[curr.y][curr.x] = true;
    path.push(curr);
    //recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if(walk(maze, wall, {x: curr.x + x, y: curr.y + y}, end, seen, path)) {
            return true;
        }
    }
    //post-recurse
    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}