document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
  
    const loading = document.querySelector(".loading");
    const sentMessage = document.querySelector(".sent-message");
    const errorMessage = document.querySelector(".error-message");
  
    loading.style.display = "none";
    sentMessage.style.display = "none";
    errorMessage.style.display = "none";
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      loading.style.display = "block";
      sentMessage.style.display = "none";
      errorMessage.style.display = "none";
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });
  
        loading.style.display = "none";
  
        if (response.ok) {
          sentMessage.style.display = "block";
          form.reset();
  
          setTimeout(() => {
            sentMessage.style.display = "none";
          }, 4000);
        } else {
          errorMessage.innerHTML = "Something went wrong. Please try again.";
          errorMessage.style.display = "block";
        }
  
      } catch (error) {
        loading.style.display = "none";
        errorMessage.innerHTML = "Network error. Please try again.";
        errorMessage.style.display = "block";
      }
  
    });
  
  });
  