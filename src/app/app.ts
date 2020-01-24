import * as THREE from 'three';
import { Brick } from './bricks';

export class App {
  private readonly scene = new THREE.Scene;
  private readonly camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 10000);
  private readonly light = new THREE.PointLight(0xffffff);
  private readonly renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.getElementById('main-canvas') as HTMLCanvasElement,
  });

  private brick: Brick;

  constructor() {
    this.brick = new Brick(50, new THREE.Color('rgb(50,100,190)'));
    this.brick.position.set(0, 0, 0);
    this.scene.add(this.brick);

    this.camera.position.set(100, 100, 100);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.camera.fov = 50;

    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setClearColor(new THREE.Color('rgb(255,255,255)'));


    this.light.position.set(300, 300, 300);
    this.scene.add(this.light);

    this.render();

  }

  private adjustCanvasSize() {
    this.renderer.setSize(innerWidth, innerHeight);
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
  }

  private render() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.render());
    this.adjustCanvasSize();
    this.brick.rotateY(0.01);
  }



}
