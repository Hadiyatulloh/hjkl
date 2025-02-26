   const kartochki = document.getElementById('kartochki');

   fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => {
           kartochki.innerHTML = '';
           data.forEach(element => {
               const card = document.createElement('div');
               card.classList.add('card');
               card.innerHTML = `
                    <h3 class="name">${element.name}</h3>
                    <img src="images.jfif" alt="">
                    <p>📧${element.email}</p>
                    <p class="as">📞${element.phone}</p>
                    <p>🏠${element.address.city},${element.address.street}</p>
                `;
               kartochki.appendChild(card);
           });
       });
   let body = document.querySelector('body')

   let abc = document.getElementById('abc')
   abc.addEventListener("click", () => {

       if (body.classList.toggle("dark-mode")) {
           abc.textContent = "Light Mode";
       } else {
           abc.textContent = "Dark Mode";
       }
   });

   document.getElementById("input").addEventListener("input", () => {
       const search = document.getElementById("input").value.trim().toLowerCase();

       document.querySelectorAll(".card").forEach(card => {
           let name = card.querySelector(".name").textContent.toLowerCase();

           if (name.includes(search)) {
               card.style.display = "";
           } else {
               card.style.display = "none";
           }
       });
   });