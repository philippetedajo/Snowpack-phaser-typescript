import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('demo');
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: 800,
  height: 400,
  scene: Demo,
};

const game = new Phaser.Game(config);
