const pages = [
    { title: "Introdução", url: "intro.html", content: "Introdução ao Scrum e ao método ágil." },
    { title: "Scrum", url: "scrum.html", content: "O que é Scrum e como funciona." },
    { title: "Artefatos", url: "artefatos.html", content: "Ferramentas e artefatos do Scrum." },
    { title: "Scrum Master", url: "master.html", content: "O papel do Scrum Master no Scrum." },
    { title: "Product Owner", url: "po.html", content: "O papel do Product Owner no Scrum." },
    { title: "Soft Skills", url: "softskills.html", content: "Habilidades interpessoais para profissionais de TI." },
    { title: "Avaliações", url: "avaliações.html", content: "O papel das avaliações no Scrum." }
];
function searchSite() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const results = pages.filter(page => 
        page.title.toLowerCase().includes(query) || 
        page.content.toLowerCase().includes(query)
    );

    results.forEach(page => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<a href="${page.url}">${page.title}</a>`;
        resultsDiv.appendChild(resultItem);
    });
}
