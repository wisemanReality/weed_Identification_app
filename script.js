const uploadInput = document.getElementById("upload-image");
const cameraInput = document.getElementById("take-picture");
const imageDisplay = document.getElementById("image-display");

uploadInput.addEventListener("change", (event) => {
  showImage(event.target.files[0]);
});

cameraInput.addEventListener("change", (event) => {
  showImage(event.target.files[0]);
});

function takePicture() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    cameraInput.click();
  } else {
    alert("This feature works only on mobile devices.");
  }
}

function showImage(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    imageDisplay.innerHTML = `<img src="${e.target.result}" alt="weed image" />`;
  };
  reader.readAsDataURL(file);

  // Simulated prediction
  document.getElementById("removal-result").textContent = "Loading...";
  setTimeout(() => {
    const mockResult = ["Cutting", "Hand Removal", "Herbisite"];
    const prediction = mockResult[Math.floor(Math.random() * 3)];
    document.getElementById("removal-result").textContent = prediction;
  }, 1500);
}
