export interface IPlayerPos {
    x: number;
    y: number;
}

export interface IPlayer {
    pos: IPlayerPos;
    tetromino: any;
    collided: boolean;
}