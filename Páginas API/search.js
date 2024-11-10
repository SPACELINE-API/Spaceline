const pages = [
    { title: "Introdução", url: "intro.html", content: [{ id: "h2", text: "O que é a métodogia ágil." },] },
    { title: "Scrum", url: "scrum.html", content: [{ id: "margin1", text: "O que é o método scrum?" }, { id: "margin2", text: "Quais os benefícios de usar o scrum?" }] },
    { title: "Artefatos", url: "artefatos.html", content: [{ id: "margin3", text: "Backlog do produto." }, { id: "margin4", text: "Burndown" },{ id: "margin5", text: "User Story" },{ id: "margin6", text: "DOR E DOD" },{ id: "margin7", text: "MVP" }] },
    { title: "Scrum Master", url: "master.html", content:  [{ id: "w", text: "O que é?" },] },
    { title: "Product Owner", url: "po.html", content: [{ id: "h", text: "O que é?" },] },
    { title: "Soft Skills", url: "softskills.html", content: [{ id: "margin8", text: "O que são?" },] },
];

function searchSite() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    pages.forEach(page => {
        page.content.forEach(paragraph => {
            if (paragraph.text.toLowerCase().includes(query)) {
                const resultItem = document.createElement('div');
                
                resultItem.innerHTML = `
                    <strong><a href="${page.url}#${paragraph.id}" style="color: #fff4a3;">${page.title}</a></strong> 
                    <span style="color: white;">${paragraph.text}</span>
                `;
                
                resultsDiv.appendChild(resultItem);
            }
        });
    });
}


