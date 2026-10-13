
//17. O que será impresso com base nos valores lógicos?

let usuarioLogado = true;
let temPermissao = false;

if (usuarioLogado && temPermissao) {
    console.log("Acesso Total");
} else if (usuarioLogado || temPermissao) {
    console.log("Acesso Limitado");
} else {
    console.log("Negado");
}

/*
A) Acesso Total ( )
B) Acesso Limitado (X)
C) Negado ( )
D) Não imprime nada ( )
*/