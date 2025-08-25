<form id="contactForm">
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit">Send</button>
</form>

<p id="response"></p>

<script>
const form = document.getElementById("contactForm");
const responseBox = document.getElementById("response");

// Your Google Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_oPQyNODJZ51h39K7PEm-4Bit1laeGBRYEhOdVagc1iH10fHptcSbi0D_hmmumCOQ/exec";/exec

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.status === "success") {
      responseBox.style.color = "green";
      responseBox.textContent = "Message sent successfully!";
      form.reset();
    } else {
      responseBox.style.color = "red";
      responseBox.textContent = "Error: " + data.message;
    }
  } catch (error) {
    responseBox.style.color = "red";
    responseBox.textContent = "Network error. Please try again!";
  }
});
</script>

<script>
  const skills = document.querySelectorAll(".skill");
  skills.forEach(skill => {
    skill.addEventListener("click", () => {
      alert(`You clicked on: ${skill.textContent.trim()}`);
    });
  });
</script>