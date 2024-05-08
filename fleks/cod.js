document.addEventListener('DOMContentLoaded', function () {
  const flexContainer = document.querySelector('.flex-container');
  const directionSelect = document.getElementById('directionSelect');
  const justifyContentSelect = document.getElementById('justifyContentSelect');
  const displaySelect = document.getElementById('displaySelect');
  const wrapSelect = document.getElementById('wrapSelect');
  const aligncontentSelect = document.getElementById('aligncontentSelect');

  directionSelect.addEventListener('change', updateFlexProperties);
  justifyContentSelect.addEventListener('change', updateFlexProperties);
  alignItemsSelect.addEventListener('change', updateFlexProperties);
  displaySelect.addEventListener('change', updateFlexProperties);
  wrapSelect.addEventListener('change', updateFlexProperties);
  aligncontentSelect.addEventListener('change', updateFlexProperties);

  function updateFlexProperties() {
    flexContainer.style.flexDirection = directionSelect.value;
    flexContainer.style.justifyContent = justifyContentSelect.value;
    flexContainer.style.alignItems = alignItemsSelect.value;
    flexContainer.style.display = displaySelect.value;
    flexContainer.style.flexWrap = wrapSelect.value;
    flexContainer.style.aligncontent = aligncontentSelect.value;
  }

  console.dir(flexContainer.style);

});
function addDiv() {
  var newDiv = document.createElement("div");
  newDiv.className = "flex-item";
  newDiv.innerHTML = "flex-container"; 

  document.getElementById("flex-container").appendChild(newDiv);
}