document.addEventListener('DOMContentLoaded', function() {
    const galleryToggleBtn = document.getElementById("gallery-toggle");
    const galleryContainer = document.querySelector(".gallery-container");

    galleryToggleBtn.addEventListener("click", () => {
        const isSingleColumn = galleryContainer.classList.toggle("single-column");
    
        console.log("Toggled:", isSingleColumn);
        // Swap icon based on mode
        galleryToggleBtn.src = isSingleColumn 
            ? '{{ "3column-icon-gray.png" | prepend: "assets/img/" | relative_url }}'   // gray when single column
            : '{{ "3column-icon-black.png" | prepend: "assets/img/" | relative_url }}'; // black when 3-column
    });
});