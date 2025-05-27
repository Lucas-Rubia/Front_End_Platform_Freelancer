export function getVisiblePages( currentPage:number, totalPages:number){
    // Quantidade de páginas a exibir (até 3 ou totalPages for menor)
    const length = Math.min(3,totalPages);
    
    // Página inicial, centrada em currentPage e travada entre 1 e totalPages - length + 1
    const start = Math.min(
        Math.max(currentPage - Math.floor(length / 2), 1),
        totalPages - length + 1
    )

    // Gera as páginas visiveis 
    return Array.from({ length }, (_, i) => start + i);
}