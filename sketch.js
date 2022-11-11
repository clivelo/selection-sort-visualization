var arr = [];
var spacing = 10;
var index = 0;
var scan = 0;
var minIdx = 0

function setup() {
  createCanvas(800, 400);
  frameRate(60);
  for (var i = spacing; i <= height; i += spacing) {
    arr.push(i);
  }
  arr = shuffle(arr);
}

function draw() {
  background(255);
  stroke(255);
  fill(0);
  for (var i = 0; i < arr.length; i++) {
    if (i == minIdx) {
      fill(0, 255, 0);
    }
    if (i == scan) {
      fill(0, 0, 255)
    }
    if (i == index) {
      fill(255, 0, 0);
    }
    rect((i * width) / arr.length, height - arr[i], width / arr.length, arr[i]);
    fill(0);
  }

  text("Selection sort\nBest time complexity: O(n²)\nAverage time complexity: O(n²)\nWorst time complexity: O(n²)", 5, 15)
  
  if (scan == arr.length) {
    swap(index, minIdx);
    index++;
    scan = index;
    minIdx = index;
  } else {
    scan++;
  }
  
  if (arr[scan] < arr[minIdx]) {
    minIdx = scan;
  }
  
  if (index == arr.length) {
    console.log("It's sorted");
    noLoop();
  }
}

function swap(i, j) {
  if (arr[i] > arr[j]) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
