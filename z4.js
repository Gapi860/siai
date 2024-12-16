let zakupy = [];
zakupy.push("Mleko", "Pieczywo", "Jabłka");
zakupy.splice(zakupy.indexOf("Pieczywo"), 1, "Banan", "Jajka");
zakupy.pop()
console.log(zakupy);
zakupy.sort();
zakupy.indexOf("Mleko");
zakupy.splice(1,0, "Marchew", "Sałata");
let nowaLista = ["Sok", "Pop"];
zakupy = zakupy.concat(zakupy, nowaLista, nowaLista)
zakupy.lastIndexOf("Pop");
console.log(zakupy);
