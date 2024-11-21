const pages = [
    { title: "Introdução", url: "intro.html", content: [{ id: "metodoagil", text: "O que é a métodogia ágil." },] },
    { title: "Scrum", url: "scrum.html", content: [{ id: "definicao", text: "O que é o método scrum?" }, { id: "beneficios", text: "Quais os benefícios de usar o scrum?" }] },
    { title: "Artefatos", url: "artefatos.html", content: [{ id: "bkproduto", text: "Backlog do produto." }, { id: "graficobd", text: "Burndown" },{ id: "us", text: "User Story" },{ id: "dd", text: "DOR E DOD" },{ id: "mvproduto", text: "MVP" }] },
    { title: "Scrum Master", url: "master.html", content:  [{ id: "smaster", text: "O que é?" },] },
    { title: "Product Owner", url: "po.html", content: [{ id: "powner", text: "O que é?" },] },
    { title: "Soft Skills", url: "softskills.html", content: [{ id: "sfk", text: "O que são?" },] },
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


