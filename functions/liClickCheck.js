export function activeControl(liCLicked) {
  const liElements = document.querySelectorAll('.list')
  liElements.forEach((index) => {
    if (index !== liCLicked && index.classList.contains('active')){
      index.classList.remove('active')
    }
  })
}
