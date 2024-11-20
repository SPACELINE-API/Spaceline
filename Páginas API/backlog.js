let respostasCorretas = {
    'cell1': 'item1',
    'cell2': 'item1',
    'cell3': 'item1',
    'cell4': 'item1',
    'cell5': 'item1',
    'cell6': 'item2',
    'cell7': 'item3',
    'cell8': 'item3',
    'cell9': 'item3',
    'cell10': 'item1',
    'cell11': 'item2',
    'cell12': 'item1',
    'cell13': 'item2',
    'cell14': 'item4'
};

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id); 
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text"); 
    const droppedElement = document.getElementById(data);  
    event.target.appendChild(droppedElement);  
}
