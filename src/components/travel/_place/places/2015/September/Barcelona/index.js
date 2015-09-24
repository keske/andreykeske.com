import React, { Component } from 'react';
import THREE from 'three';

// Components
import { LinkToImage } from '../../../../../../../components/';
import NavFooter from '../../../../_navFooter/';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

export default class City extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/travel/_place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    // Set language
    Language.setLocale(language);

    var container, stats;

    var camera, scene, renderer;
    var group;

    var targetRotation = 0;
    var targetRotationOnMouseDown = 0;

    var mouseX = 0;
    var mouseXOnMouseDown = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {

      container = document.createElement('div');
      document.body.appendChild(container);

      var info = document.createElement('div');
      info.style.position = 'absolute';
      info.style.top = '30px';
      info.style.width = '100%';
      info.style.textAlign = 'center';
      info.innerHTML = 'Drag to spin';
      container.appendChild(info);

      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2000);
      camera.position.set(0, 150, 750);

      scene = new THREE.Scene();
      scene.add(new THREE.AmbientLight(0x808080));

      var light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 1);
      scene.add(light);

      group = new THREE.Group();
      group.position.y = 50;
      scene.add(group);

      // NURBS curve

      var nurbsControlPoints = [];
      var nurbsKnots = [];
      var nurbsDegree = 3;

      for (var i = 0; i <= nurbsDegree; i++) {

        nurbsKnots.push(0);

      }

      for (var i = 0, j = 20; i < j; i++) {

        nurbsControlPoints.push(
          new THREE.Vector4(
            Math.random() * 400 - 200,
            Math.random() * 400,
            Math.random() * 400 - 200,
            1 // weight of control point: higher means stronger attraction
          )
        );

        var knot = (i + 1) / (j - nurbsDegree);
        nurbsKnots.push(THREE.Math.clamp(knot, 0, 1));

      }

      var nurbsCurve = new THREE.NURBSCurve(nurbsDegree, nurbsKnots, nurbsControlPoints);

      var nurbsGeometry = new THREE.Geometry();
      nurbsGeometry.vertices = nurbsCurve.getPoints(200);
      var nurbsMaterial = new THREE.LineBasicMaterial({
        linewidth: 10,
        color: 0x333333,
        transparent: true
      });

      var nurbsLine = new THREE.Line(nurbsGeometry, nurbsMaterial);
      nurbsLine.position.set(200, -100, 0);
      group.add(nurbsLine);

      var nurbsControlPointsGeometry = new THREE.Geometry();
      nurbsControlPointsGeometry.vertices = nurbsCurve.controlPoints;
      var nurbsControlPointsMaterial = new THREE.LineBasicMaterial({
        linewidth: 2,
        color: 0x333333,
        opacity: 0.25,
        transparent: true
      });
      var nurbsControlPointsLine = new THREE.Line(nurbsControlPointsGeometry, nurbsControlPointsMaterial);
      nurbsControlPointsLine.position.copy(nurbsLine.position);
      group.add(nurbsControlPointsLine);

      // NURBS surface

      var nsControlPoints = [
        [
          new THREE.Vector4(-200, -200, 100, 1),
          new THREE.Vector4(-200, -100, -200, 1),
          new THREE.Vector4(-200, 100, 250, 1),
          new THREE.Vector4(-200, 200, -100, 1)
        ],
        [
          new THREE.Vector4(0, -200, 0, 1),
          new THREE.Vector4(0, -100, -100, 5),
          new THREE.Vector4(0, 100, 150, 5),
          new THREE.Vector4(0, 200, 0, 1)
        ],
        [
          new THREE.Vector4(200, -200, -100, 1),
          new THREE.Vector4(200, -100, 200, 1),
          new THREE.Vector4(200, 100, -250, 1),
          new THREE.Vector4(200, 200, 100, 1)
        ]
      ];
      var degree1 = 2;
      var degree2 = 3;
      var knots1 = [0, 0, 0, 1, 1, 1];
      var knots2 = [0, 0, 0, 0, 1, 1, 1, 1];
      var nurbsSurface = new THREE.NURBSSurface(degree1, degree2, knots1, knots2, nsControlPoints);

      var map = THREE.ImageUtils.loadTexture('textures/UV_Grid_Sm.jpg');
      map.wrapS = map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 16;

      getSurfacePoint = function(u, v) {
        return nurbsSurface.getPoint(u, v);
      };

      var geometry = new THREE.ParametricGeometry(getSurfacePoint, 20, 20);
      var material = new THREE.MeshLambertMaterial({
        map: map,
        side: THREE.DoubleSide
      });
      var object = new THREE.Mesh(geometry, material);
      object.position.set(-200, 100, 0);
      object.scale.multiplyScalar(1);
      group.add(object);

      //

      renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      renderer.setClearColor(0xf0f0f0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0px';
      container.appendChild(stats.domElement);

      document.addEventListener('mousedown', onDocumentMouseDown, false);
      document.addEventListener('touchstart', onDocumentTouchStart, false);
      document.addEventListener('touchmove', onDocumentTouchMove, false);

      //

      window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }

    //

    function onDocumentMouseDown(event) {

      event.preventDefault();

      document.addEventListener('mousemove', onDocumentMouseMove, false);
      document.addEventListener('mouseup', onDocumentMouseUp, false);
      document.addEventListener('mouseout', onDocumentMouseOut, false);

      mouseXOnMouseDown = event.clientX - windowHalfX;
      targetRotationOnMouseDown = targetRotation;

    }

    function onDocumentMouseMove(event) {

      mouseX = event.clientX - windowHalfX;

      targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;

    }

    function onDocumentMouseUp(event) {

      document.removeEventListener('mousemove', onDocumentMouseMove, false);
      document.removeEventListener('mouseup', onDocumentMouseUp, false);
      document.removeEventListener('mouseout', onDocumentMouseOut, false);

    }

    function onDocumentMouseOut(event) {

      document.removeEventListener('mousemove', onDocumentMouseMove, false);
      document.removeEventListener('mouseup', onDocumentMouseUp, false);
      document.removeEventListener('mouseout', onDocumentMouseOut, false);

    }

    function onDocumentTouchStart(event) {

      if (event.touches.length == 1) {

        event.preventDefault();

        mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;

      }

    }

    function onDocumentTouchMove(event) {

      if (event.touches.length == 1) {

        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.05;

      }

    }

    //

    function animate() {

      requestAnimationFrame(animate);

      render();
      stats.update();

    }

    function render() {

      group.rotation.y += (targetRotation - group.rotation.y) * 0.05;
      renderer.render(scene, camera);

    }


    return (
      <div className={ `${ styles }` } ref="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
sd
            </div>
          </div>
        </div>

        <NavFooter style="white bottom-on-photo"
          year={ year * 1 }
          month={ month }
          city={ city }
          language={ language } />
      </div>
    );
  }

}
