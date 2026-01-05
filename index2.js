/* NAVIGATION */
const sections={
  home:document.getElementById("home"),
  chapters:document.getElementById("chapters"),
  about:document.getElementById("about")
};
function show(id){
  Object.values(sections).forEach(s=>s.style.display="none");
  sections[id].style.display="block";
  if(id==="chapters")renderChapters();
}

/* TITLES */
const titles={
7:["Create Object","Add Property","Delete Property","Object Keys","Object Values","JSON","Nested Object","Property Exists","Freeze Object","Clone Object"],
8:["Change Title","Change Style","Change HTML","Create Element","Remove Element","Window Height","Current URL","Count Buttons","Add Class","Scroll Top"],
9:["Click Event","Hover Event","Keyboard Event","Double Click","Submit Event","Focus Event","Load Event","Change Event","Right Click","Resize Event"]
};

/* CHAPTERS */
function renderChapters(){
  sections.chapters.innerHTML=`
    <h2>JavaScript Chapters</h2>
    <p style="color:#94a3b8;margin-bottom:20px">Click on a chapter to explore JavaScript examples</p>
    <div style="display:flex;gap:20px;flex-wrap:wrap;">
      <div class="glass" style="flex:1;min-width:300px;text-align:center">
        <h3 style="color:#38bdf8">Chapter 7</h3>
        <p>Working with Objects</p>
        <button class="btn" onclick="openChapter(7)">Open Chapter 7</button>
      </div>
      <div class="glass" style="flex:1;min-width:300px;text-align:center">
        <h3 style="color:#38bdf8">Chapter 8</h3>
        <p>DOM Manipulation</p>
        <button class="btn" onclick="openChapter(8)">Open Chapter 8</button>
      </div>
      <div class="glass" style="flex:1;min-width:300px;text-align:center">
        <h3 style="color:#38bdf8">Chapter 9</h3>
        <p>Event Handling</p>
        <button class="btn" onclick="openChapter(9)">Open Chapter 9</button>
      </div>
    </div>
  `;
}

function openChapter(id){
  let html=`<button class="btn" onclick="renderChapters()" style="margin-bottom:20px">⬅ Back to Chapters</button>
  <div class="glass"><h2>Chapter ${id} - ${id===7?'Objects':id===8?'DOM':'Events'}</h2>
  <p style="color:#94a3b8;margin-bottom:20px">Click on any example to see it in action</p>`;
  
  for(let i=1;i<=10;i++){
    html+=`<button class="btn" onclick="runExample(${id},${i})" style="margin:5px">Example ${i}: ${titles[id][i-1]}</button>`;
  }
  html+=`<div id="output" style="margin-top:30px"></div></div>`;
  sections.chapters.innerHTML=html;
}

/* RUN EXAMPLES */
function runExample(ch,ex){
  const out=document.getElementById("output");
  out.innerHTML=`<h3>Example ${ex}: ${titles[ch][ex-1]}</h3>`;
  let result="";

  if(ch===7){
    let student={name:"Mohamed",univ:"Jazeera"};
    if(ex===1) result=student.name;
    if(ex===2){student.age=22;result=JSON.stringify(student)}
    if(ex===3){delete student.univ;result=JSON.stringify(student)}
    if(ex===4) result=Object.keys(student);
    if(ex===5) result=Object.values(student);
    if(ex===6) result=JSON.stringify(student);
    if(ex===7){student.address={city:"Mogadishu"};result=student.address.city}
    if(ex===8) result=("name" in student);
    if(ex===9){Object.freeze(student);result="Object Frozen"}
    if(ex===10) result=JSON.stringify({...student});
  }

  if(ch===8){
    if(ex===1){document.title="Mohamed JS Portal";result="Title changed to 'Mohamed JS Portal'"}
    if(ex===2){out.style.background="linear-gradient(135deg, #1e40af, #3b82f6)";result="Background changed to blue gradient"}
    if(ex===3){out.innerHTML+="<p>Hello Mohamed - New HTML content added!</p>";result="Text added to output"}
    if(ex===4){let p=document.createElement("p");p.textContent="New Element Created";p.style.color="#38bdf8";out.appendChild(p);result="New element created and appended"}
    if(ex===5){out.innerHTML="";result="Output cleared"}
    if(ex===6) result=`Window height: ${window.innerHeight}px`;
    if(ex===7) result=`Current URL: ${location.href}`;
    if(ex===8) result=`Number of buttons on page: ${document.querySelectorAll("button").length}`;
    if(ex===9){out.classList.add("test");result="Class 'test' added to output"}
    if(ex===10){window.scrollTo(0,0);result="Scrolled to top of page"}
  }

  if(ch===9){
    if(ex===1){let b=document.createElement("button");b.textContent="Click Me!";b.className="btn";b.onclick=()=>alert("Button clicked!");out.appendChild(b);return}
    if(ex===2){let b=document.createElement("button");b.textContent="Hover Over Me";b.className="btn";b.onmouseover=()=>b.style.background="yellow";b.onmouseout=()=>b.style.background="#38bdf8";out.appendChild(b);return}
    if(ex===3){window.onkeydown=e=>{alert(`Key pressed: ${e.key}`);window.onkeydown=null;};result="Press any key on your keyboard"}
    if(ex===4){let b=document.createElement("button");b.textContent="Double Click Me";b.className="btn";b.ondblclick=()=>alert("Double click detected!");out.appendChild(b);return}
    if(ex===5){out.innerHTML+=`<form onsubmit="alert('Form Submitted!');return false" style="margin-top:15px"><input placeholder="Enter text"><button class="btn" style="margin-left:10px">Submit</button></form>`;return}
    if(ex===6){out.innerHTML+=`<input onfocus="this.style.border='2px solid red'" onblur="this.style.border='1px solid #334155'" placeholder="Click to focus" style="padding:8px;margin-top:15px;width:200px">`;return}
    if(ex===7) result="Page has finished loading!";
    if(ex===8){out.innerHTML+=`<select onchange="alert('Selection changed to: ' + this.value)" style="padding:8px;margin-top:15px">
      <option value="">Select an option</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Python">Python</option>
      <option value="Java">Java</option>
    </select>`;return}
    if(ex===9){document.oncontextmenu=e=>{e.preventDefault();alert("Right-click is disabled on this page")};result="Right click disabled - try right clicking anywhere on the page"}
    if(ex===10){window.onresize=()=>alert("Window resized!");result="Try resizing your browser window"}
  }

  out.innerHTML+=`<div class="code">${result}</div>`;
}

/* CONTACT FORM HANDLING */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formAlert = document.getElementById('formAlert');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Simple validation
  if (!name || !email || !subject || !message) {
    formAlert.textContent = "Please fill in all fields.";
    formAlert.className = "alert error";
    formAlert.style.display = "block";
    return;
  }
  
  // In a real application, you would send this data to a server
  // For demonstration, we'll just show a success message
  formAlert.innerHTML = `
    <strong>Message Sent Successfully!</strong><br>
    Thank you, ${name}. I'll get back to you at ${email} soon.
  `;
  formAlert.className = "alert success";
  formAlert.style.display = "block";
  
  // Reset form
  document.getElementById('contactForm').reset();
  
  // Hide alert after 5 seconds
  setTimeout(() => {
    formAlert.style.display = "none";
  }, 5000);
});

/* IMAGE UPLOAD FUNCTIONALITY */
function uploadImage() {
  // This is a placeholder function for image upload
  // In a real application, you would implement actual file upload
  alert("Image upload functionality would be implemented here.\n\nFor now, you can replace the placeholder image by:\n1. Adding your image to the same folder\n2. Changing the image source to 'your-image.jpg'\n3. Uncommenting the img tag in the HTML");
  
  // Example code for actual image upload:
  /*
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = document.querySelector('.profile-image');
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
  */
}

// Add click event to image placeholder for upload functionality
document.addEventListener('DOMContentLoaded', function() {
  const imagePlaceholder = document.querySelector('.image-placeholder');
  if (imagePlaceholder) {
    imagePlaceholder.addEventListener('click', uploadImage);
  }
});

show("home");