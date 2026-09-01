// ===== Theme Toggle =====
function toggleTheme(){
    const body=document.body;
    body.dataset.theme = body.dataset.theme === "light" ? "dark" : "light";
  }
  
  // ===== Typing Effect =====
  const text="Hi, I'm Adryan Prasetia Ramadhan";
  let i=0;
  
  function typing(){
    if(i < text.length){
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,70);
    }
  }
  typing();
  
  // ===== Scroll Reveal =====
  const cards=document.querySelectorAll(".card");
  
  window.addEventListener("scroll",()=>{
    cards.forEach(c=>{
      const top=c.getBoundingClientRect().top;
      if(top < window.innerHeight - 100){
        c.classList.add("show");
      }
    });
  });
  
  // ===== Cursor Glow =====
  const cursor=document.getElementById("cursor");
  
  window.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
  });
  
  // ===== Contact Form =====
  function send(){
    let n=document.getElementById("name").value;
    let e=document.getElementById("email").value;
    let m=document.getElementById("msg").value;
  
    if(!n || !e || !m){
      document.getElementById("status").innerText="Isi semua field dulu.";
      return;
    }
  
    document.getElementById("status").innerText =
      "Pesan terkirim. Terima kasih " + n;
  }