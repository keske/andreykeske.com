var container;

var camera, scene, renderer;
var group;

var object;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSurface(src, top) {
	var nsControlPoints = [
		[
			new THREE.Vector4(getRandomInt(-200, 0), getRandomInt(-200, 0), 100, 1),
			new THREE.Vector4(getRandomInt(-200, 0), getRandomInt(-100, 0), getRandomInt(-200, 0), 1),
			new THREE.Vector4(getRandomInt(-200, 0), 100, 250, 1),
			new THREE.Vector4(getRandomInt(-200, 0), getRandomInt(0, 200), -100, 1),
		],
		[
			new THREE.Vector4(getRandomInt(-200, 0), getRandomInt(-200, 0), 0, 1),
			new THREE.Vector4(getRandomInt(-200, 0), getRandomInt(-100, 0), getRandomInt(-100, 0), 5),
			new THREE.Vector4(getRandomInt(-200, 0), 100, 150, 5),
			new THREE.Vector4(getRandomInt(-200, 0), getRandomInt(0, 100), 0, 1),
		],
		[
			new THREE.Vector4(getRandomInt(0, 200), getRandomInt(-200, 0), getRandomInt(-100, 0), 1),
			new THREE.Vector4(getRandomInt(0, 200), getRandomInt(-200, 0), 200, 1),
			new THREE.Vector4(getRandomInt(0, 200), getRandomInt(0, 100), getRandomInt(-200, 0), 1),
			new THREE.Vector4(getRandomInt(0, 200), getRandomInt(0, 200), 100, 1),
		]
	];

	var degree1 = 2;
	var degree2 = 3;

	var knots1 = [0, 0, 0, 1, 1, 1];
	var knots2 = [0, 0, 0, 0, 1, 1, 1, 1];

	var nurbsSurface = new THREE.NURBSSurface(degree1, degree2, knots1, knots2, nsControlPoints);

	getSurfacePoint = function(u, v) {
		return nurbsSurface.getPoint(u, v);
	};

	var geometry = new THREE.ParametricGeometry(getSurfacePoint, 50, 50);

	var loader = new THREE.TextureLoader();

	loader.load(
		src,
		function(texture) {
			var material = new THREE.MeshBasicMaterial({
				map: texture,
			});
			object = new THREE.Mesh(geometry, material);
			object.position.set(-200, top, 0);
			object.scale.multiplyScalar(1);
			scene.add(object);
		}
	);
}

function init(src) {
	container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2000);
	camera.position.set(-200, 150, 450);

	scene = new THREE.Scene();

	group = new THREE.Group();
	group.position.y = 150;
	scene.add(group);

	createSurface('images/' + src + '.jpg', 150, -300);

	renderer = new THREE.WebGLRenderer({
		antialias: true,
	});

	renderer.setClearColor(0xffffff);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	setTimeout(function() {
		renderer.render(scene, camera);
	}, 100);
}

$(document).ready(function() {
	init('Barcelona');
});

$(window).load(function() {
	var step = 717;
	var img = 0;

	renderer.render(scene, camera);

	for (var i = 1; i < 11; i++) {
		setTimeout(function() {
			img++;
			init(img);
			renderer.render(scene, camera);
		}, step * i);
	}
});