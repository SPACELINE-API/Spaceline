const pages = [
    { title: "Introdução", url: "intro.html", content: "Introdução ao Scrum e ao método ágil." },
    { title: "Scrum", url: "scrum.html", content: "O que é Scrum e como funciona." },
    { title: "Artefatos", url: "artefatos.html", content: "Ferramentas e artefatos do Scrum." },
    { title: "Scrum Master", url: "master.html", content: "O papel do Scrum Master no Scrum." },
    { title: "Product Owner", url: "po.html", content: "O papel do Product Owner no Scrum." },
    { title: "Soft Skills", url: "softskills.html", content: "Habilidades interpessoais para profissionais de TI." },
    { title: "Avaliações", url: "avaliações.html", content: "O papel das avaliações no Scrum." },
    { title: "Metodologia Ágil", url: "intro.html", content: "O que é a metodologia ágil?"},
    { title:"Método Scrum", url:"scrum.html", content:"O que é método scrum?"},
    { title:"Benefícios", url:"scrum.html", content:"Quais os benefícios de usar o scrum?"},
    { title:"Backlog do Produto", url:"artefatos.html", content:"Como montar o backlog?"},
    { title:"Burndown", url:"artefatos.html", content:"Como criar um burndown?"},
    { title:"User Story", url:"artefatos.html", content:"Como fazer uma user story?"},
    { title:"Definition of Ready", url:"artefatos.html", content:"DOR"},
    { title:"Definition of Done", url:"artefatos.html", content:"DOD"},
    { title:"Mínimo Produto Viável", url:"artefatos.html", content:"Como fazer o MVP?"},
    { title:"Hard Skills", url:"softskills.html", content:"Diferença entre soft skills e hard skills"},
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
