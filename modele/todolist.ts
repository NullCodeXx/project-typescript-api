//Creation de la class todoList.

export class TodoList{
    private list:string[]=[];

    ajouter(item:string): void { //void permet de préciser que la function ne retourne rine meme si par default sa l'est déjà, on lui préçise.
        this.list.push(item);
    }

    supprimer(item:string): void {
        this.list.filter((valeur) => valeur !== item);
    }

    lister():string[] {
        return this.list;
    }
}