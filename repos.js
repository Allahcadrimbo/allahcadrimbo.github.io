const api_url =  
      "https://api.github.com/users/allahcadrimbo/repos"; 
  
async function getRepos(url) {  

    const response = await fetch(url); 

    var data = await response.json(); 

    display(data); 
} 

getRepos(api_url); 

function display(data) { 
    let list = "";  

    for (let r of data) { 
       list += 
       `<li>
            <div>
                <a href="${r.html_url}" target="_blank" rel="noopener noreferrer">
                    <section>
                        <div class="section_title">${r.name}</div>
                        <div class="about_section">
                            <span style="display:block;">${r.description == null ? "" : r.description}</span>
                        </div>
                        <div class="bottom_section">
                            <span style="display:none;"><i class="fas fa-code"></i>&nbsp; null</span>                           
                            <span style="display:block;">Language: ${r.language}</span>
                        </div>
                    </section>
                </a>
            </div>
        </li>`; 
    }
    
    document.getElementById("repos").innerHTML = list; 
} 
